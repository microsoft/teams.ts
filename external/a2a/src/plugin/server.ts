import { Dependency, Event, HttpPlugin, IPlugin, Logger, Plugin, Storage } from '@microsoft/teams.apps';
import { ILogger, IStorage } from '@microsoft/teams.common';
import express from 'express';
import { isTaskRequest } from './middleware/isTaskRequest';
import * as schema from './schema';
import { onGetTaskRequest } from './server.on-get-request';
import { onSendRequest } from './server.on-send-request';
import { TaskManager } from './tasks/task-manager';
import { TaskStore } from './tasks/task-store';
import { A2AError } from './types/a2a-error';
import { ITaskStore } from './types/a2a-types';
import { A2AEvents } from './types/event-types';



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

@Plugin({
    name: 'a2a',
    description: 'A2A Plugin',
    version: '1.0.0',
})
export class A2APlugin implements IPlugin<A2AEvents> {
    __eventType!: A2AEvents;

    @Event('custom')
    readonly emit!: <Name extends keyof A2AEvents>(name: Name, arg: A2AEvents[Name]) => void;

    @Dependency()
    readonly _httpPlugin!: HttpPlugin;

    @Storage()
    readonly _storage!: IStorage;

    @Logger()
    protected readonly _logger!: ILogger;

    protected _card: schema.AgentCard;
    protected _path: string;
    protected _taskManager!: TaskManager;
    protected _taskStore!: ITaskStore;

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
                    return this.onTaskGetRequest(request, res, next);
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

    onSendRequest = onSendRequest
    onGetTaskRequest = onGetTaskRequest

    private async onTaskGetRequest(
        req: schema.GetTaskRequest,
        res: express.Response,
        next: express.NextFunction
    ) {
        await this.onGetTaskRequest(req, (result) => {
            res.json(result);
            if (result?.error) {
                next(result.error);
            }
        })
    }

    private async onTaskSendRequest(
        req: schema.SendTaskRequest,
        res: express.Response,
        next: express.NextFunction
    ) {
        await this.onSendRequest(req, (result) => {
            res.json(result);
            if (result?.error) {
                next(result.error);
            }
        })
    }
}