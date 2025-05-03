import * as api from '@microsoft/teams.api';
import * as graph from '@microsoft/teams.graph';

export const ApiClient = api.Client;
export type ApiClient = api.Client;
export const UserGraphClient = graph.Client;
export type UserGraphClient = graph.Client;
export const AppGraphClient = graph.Client;
export type AppGraphClient = graph.Client;