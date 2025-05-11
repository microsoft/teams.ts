import express from 'express';

import { Dependency, EmitPluginEvent, Event, HttpPlugin, IPlugin, Logger, Plugin, Storage } from '@microsoft/teams.apps';
import { ILogger, IStorage } from '@microsoft/teams.common';

import * as schema from '../common/schema';

import { isTaskRequest } from './middleware/isTaskRequest';
import { onGetTaskRequest } from './plugin.on-get-request';
import { onSendRequest } from './plugin.on-send-request';
import { TaskManager } from './tasks/task-manager';
import { TaskStore } from './tasks/task-store';
import { A2AError } from './types/a2a-error';
import { A2AEvents } from './types/event-types';

interface IA2APluginOptions {
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
    taskStore?: TaskStore;
}

@Plugin({
    name: 'a2a',
    description: 'A2A Plugin',
    version: '1.0.0',
})
export class A2APlugin implements IPlugin<A2AEvents> {
    @Event('custom')
    protected readonly emit!: EmitPluginEvent<A2AEvents>;


    @Dependency()
    protected readonly _httpPlugin!: HttpPlugin;

    @Storage()
    protected readonly _storage!: IStorage;

    @Logger()
    protected readonly _logger!: ILogger;

    __eventType!: A2AEvents;
    protected _card: schema.AgentCard;
    protected _path: string;
    protected _taskManager!: TaskManager;
    protected _taskStore!: TaskStore;

    constructor(options: IA2APluginOptions) {
        this._card = options.agentCard;
        if (this._card.capabilities.streaming) {
            this._logger.warn('A2APlugin does not support streaming yet, but the agent card indicates it does');
        }
        this._path = options.path || '/a2a';
        if (options.taskStore) {
            this._taskStore = options.taskStore;
        }
    }

    onInit() {
        this._taskStore = this._taskStore ?? new TaskStore(this._storage);
        this._taskManager = new TaskManager(this._taskStore, this._logger);
        this._logger.info('A2APlugin agent card available at /.well-known/agent.json');
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

    private onSendRequest = onSendRequest; // eslint-disable-line @typescript-eslint/member-ordering
    private onGetTaskRequest = onGetTaskRequest; // eslint-disable-line @typescript-eslint/member-ordering

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
        });
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
        });
    }
}