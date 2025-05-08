import { Dependency, Event, HttpPlugin, IPlugin, Logger, Plugin, Storage } from '@microsoft/teams.apps';
import { ILogger, IStorage } from '@microsoft/teams.common';
import express, { Response } from 'express';
import { isTaskRequest } from './middleware/isTaskRequest';
import { A2AError } from './models/A2AError';
import * as schema from './schema';
import { createSuccessResponse, normalizeError } from './serverUtils';
import { TaskManager } from './tasks/task-manager';
import { TaskStore } from './tasks/task-store';
import { ITaskStore, TaskAndHistory, TaskContext, TaskUpdate } from './types';

export type Respond = (taskUpdate: TaskUpdate | string) => Promise<void>;
export type AccumulateArtifacts = (artifact: schema.Artifact | schema.Artifact[]) => Promise<void>;

type Success<T> = {
    success: true;
    result: T;
};

type Failure = {
    success: false;
    error: Error;
};

type Result<T> = Success<T> | Failure;

interface A2APluginOptions {
    /**
     * The agent card to be used for the A2A plugin.
     */
    agentCard: schema.AgentCard;

    /**
     * Path to the A2A server
     * @default '/a2a'
     */
    path?: `/${string}`;

    /**
     * taskStore which stores the tasks that are sent to the agent
     * or that the agent sends. If not provided, the App's storage will be used.
     */
    taskStore?: ITaskStore;
}

interface A2AEvents {
    'a2a:receive': {
        taskContext: TaskContext;
        respond: Respond;
        accumulateArtifacts: AccumulateArtifacts;
    }
}

@Plugin({
    name: 'a2a',
    description: 'A2A Plugin',
    version: '1.0.0',
})
export class A2APlugin implements IPlugin<A2AEvents> {
    __eventType!: A2AEvents;

    private _card: schema.AgentCard;
    private _path: string;
    private _taskManager!: TaskManager;

    @Event('custom')
    readonly emit!: <Name extends keyof A2AEvents>(name: Name, arg: A2AEvents[Name]) => void;

    @Dependency()
    readonly _httpPlugin!: HttpPlugin;

    @Storage()
    readonly _storage!: IStorage;

    private _taskStore!: ITaskStore;

    @Logger()
    private readonly _logger!: ILogger;

    constructor(options: A2APluginOptions) {
        this._card = options.agentCard;
        this._path = options.path || '/a2a';
        if (options.taskStore) {
            this._taskStore = options.taskStore;
        }
    }

    onInit() {
        this._taskStore = this._taskStore ?? new TaskStore(this._storage);
        this._taskManager = new TaskManager(this._taskStore, this._logger);
        this._logger.info(`A2APlugin agent card available at /.well-known/agent.json`);
        this._httpPlugin.get('/.well-known/agent.json', (_req, res) => {
            res.json(this._card);
        });

        this._logger.info(`A2APlugin listening on ${this._path}`);
        this._httpPlugin.post(
            this._path,
            express.json(),
            isTaskRequest(),
            this.onTaskRequest.bind(this)
        );
    }

    private async onTaskRequest(
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) {
        const request: schema.A2ARequest = req.body;

        try {
            switch (request.method) {
                case 'tasks/send':
                    return this.onTaskSendRequest(request, res, next);
                case 'tasks/sendSubscribe':
                    throw new Error('sendSubscribe not implemented yet');
                case 'tasks/get':
                    return this.onTaskGetRequest(request, res);
                case 'tasks/cancel':
                    throw new Error('cancel not implemented yet');
                default:
                    throw A2AError.methodNotFound(request.method);
            }
        } catch (err) {
            if (err instanceof A2AError) {
                err.taskId = request.id || undefined;
            } else {
                throw A2AError.internalError('internal error', err);
            }

            next(err);
        }
    }

    private async onTaskGetRequest(
        req: schema.A2ARequest,
        res: express.Response
    ) {
        const { id: taskId } = req.params;
        if (!taskId) throw A2AError.invalidParams("Missing task ID.");

        // Load both task and history
        const data = await this._taskStore.load(taskId);
        if (!data) {
            throw A2AError.taskNotFound(taskId);
        }
        // Return only the task object as per spec
        this.sendJsonResponse(res, taskId, data.task);
    }

    private async onTaskSendRequest(
        req: schema.SendTaskRequest,
        res: express.Response,
        next: express.NextFunction
    ) {
        const { id: taskId, message, sessionId, metadata } = req.params;

        // Load or create task AND history
        let currentData = await this._taskManager.loadOrCreateTaskAndHistory(
            taskId,
            message,
            sessionId,
            metadata
        );

        const context = this._taskManager.createTaskContext(
            currentData.task,
            message,
            currentData.history
        );

        const updateTask = async (update: TaskUpdate): Promise<Result<TaskAndHistory>> => {
            try {
                currentData = await this._taskManager.applyUpdateToTaskAndHistory(currentData, update);
                await this._taskStore.save(currentData);
                context.task = currentData.task;
                return {
                    success: true,
                    result: currentData,
                };
            } catch (error) {
                // Convert error to failure state
                const failUpdate = {
                    state: "failed",
                    message: {
                        role: "agent",
                        parts: [{
                            type: 'text',
                            text: `Handler failed: ${error instanceof Error
                                ? error.message
                                : String(error)
                                }`
                        }],
                    },
                } satisfies TaskUpdate;
                currentData = await this._taskManager.applyUpdateToTaskAndHistory(currentData, failUpdate);
                try {
                    await this._taskStore.save(currentData);
                } catch (saveError) {
                    console.error(
                        `Failed to save task ${taskId} after handler error:`,
                        saveError
                    );
                }

                return {
                    success: false,
                    error: new Error(`Handler failed: ${error instanceof Error
                        ? error.message
                        : String(error)
                        }`),
                }
            }
        }

        const respond: Respond = async (update) => {
            this._logger.debug(`Responding to task ${taskId}`);
            let responseValue: TaskUpdate;
            if (typeof update === 'string') {
                responseValue = {
                    state: "completed",
                    message: {
                        role: "agent",
                        parts: [
                            {
                                type: "text",
                                text: 'task completed',
                            },
                        ],
                    },
                } satisfies TaskUpdate;
            } else {
                responseValue = update;
            }
            let result = await updateTask(responseValue);

            if (result.success) {
                if (!this._taskManager.isFinalState(result.result)) {
                    this._logger.info(`Task ${taskId} is not in a final state, so automatically setting to completed.`);
                    // By default, we will set the task to "completed" state
                    result = await updateTask({
                        state: "completed",
                        message: {
                            role: "agent",
                            parts: [
                                {
                                    type: "text",
                                    text: 'task completed',
                                },
                            ],
                        },
                    });
                }
            }

            if (!result.success) {
                this._logger.error(`Failed to save task during response: ${result.error}`);
                next(normalizeError(result.error, req.id, taskId))
            }

            try {
                this.sendJsonResponse(res, taskId, currentData.task);
            } catch (error) {
                this._logger.error(`Failed to send response: ${error}`);
                next(normalizeError(error, req.id, taskId))
            }
        }

        const accumulateArtifacts: AccumulateArtifacts = async (artifact) => {
            const result = await updateTask(artifact);
            if (!result.success) {
                this._logger.error(`Failed to accumulate artifacts: ${result.error}`);
                next(normalizeError(result.error, req.id, taskId))
            }
        }


        this.emit('a2a:receive', {
            taskContext: context,
            respond,
            accumulateArtifacts
        })

        // The loop finished, send the final task state
    }

    /** Sends a standard JSON success response */
    private sendJsonResponse<T>(
        res: Response,
        taskId: number | string | null,
        result: T
    ): void {
        if (taskId === null) {
            console.warn(
                "Attempted to send JSON response for a request with null ID."
            );
            // Should this be an error? Or just log and ignore?
            // For 'tasks/send' etc., ID should always be present.
            return;
        }
        res.json(createSuccessResponse(taskId, result));
    }
}