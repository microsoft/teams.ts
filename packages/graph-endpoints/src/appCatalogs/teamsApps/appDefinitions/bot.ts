import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/bot': Operation<
    '/appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/bot',
    'delete'
  >;
  'GET /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/bot': Operation<
    '/appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/bot',
    'get'
  >;
  'PATCH /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/bot': Operation<
    '/appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/bot',
    'patch'
  >;
}

/**
 * `DELETE /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/bot`
 *
 */
export function del(
  params?: IEndpoints['DELETE /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/bot']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/bot']['response']
> {
  return {
    method: 'delete',
    path: '/appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/bot',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'teamsApp-id', in: 'path' },
      { name: 'teamsAppDefinition-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/bot`
 *
 * Get the bot associated with a specific definition of the  TeamsApp.
 */
export function get(
  params?: IEndpoints['GET /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/bot']['parameters']
): EndpointRequest<
  IEndpoints['GET /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/bot']['response']
> {
  return {
    method: 'get',
    path: '/appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/bot',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'teamsApp-id', in: 'path' },
      { name: 'teamsAppDefinition-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/bot`
 *
 */
export function update(
  body: IEndpoints['PATCH /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/bot']['body'],
  params?: IEndpoints['PATCH /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/bot']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/bot']['response']
> {
  return {
    method: 'patch',
    path: '/appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/bot',
    paramDefs: [
      { name: 'teamsApp-id', in: 'path' },
      { name: 'teamsAppDefinition-id', in: 'path' },
    ],
    params,
    body,
  };
}
