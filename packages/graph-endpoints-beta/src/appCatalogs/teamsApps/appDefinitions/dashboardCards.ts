import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/dashboardCards/{teamsAppDashboardCardDefinition-id}': Operation<
    '/appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/dashboardCards/{teamsAppDashboardCardDefinition-id}',
    'delete'
  >;
  'GET /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/dashboardCards': Operation<
    '/appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/dashboardCards',
    'get'
  >;
  'GET /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/dashboardCards/{teamsAppDashboardCardDefinition-id}': Operation<
    '/appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/dashboardCards/{teamsAppDashboardCardDefinition-id}',
    'get'
  >;
  'PATCH /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/dashboardCards/{teamsAppDashboardCardDefinition-id}': Operation<
    '/appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/dashboardCards/{teamsAppDashboardCardDefinition-id}',
    'patch'
  >;
  'POST /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/dashboardCards': Operation<
    '/appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/dashboardCards',
    'post'
  >;
}

/**
 * `DELETE /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/dashboardCards/{teamsAppDashboardCardDefinition-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/dashboardCards/{teamsAppDashboardCardDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/dashboardCards/{teamsAppDashboardCardDefinition-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/dashboardCards/{teamsAppDashboardCardDefinition-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'teamsApp-id', in: 'path' },
      { name: 'teamsAppDefinition-id', in: 'path' },
      { name: 'teamsAppDashboardCardDefinition-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/dashboardCards`
 *
 * Dashboard cards specified in the Teams app manifest.
 */
export function list(
  params?: IEndpoints['GET /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/dashboardCards']['parameters']
): EndpointRequest<
  IEndpoints['GET /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/dashboardCards']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/dashboardCards',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'teamsApp-id', in: 'path' },
      { name: 'teamsAppDefinition-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/dashboardCards/{teamsAppDashboardCardDefinition-id}`
 *
 * Dashboard cards specified in the Teams app manifest.
 */
export function get(
  params?: IEndpoints['GET /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/dashboardCards/{teamsAppDashboardCardDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/dashboardCards/{teamsAppDashboardCardDefinition-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/dashboardCards/{teamsAppDashboardCardDefinition-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'teamsApp-id', in: 'path' },
      { name: 'teamsAppDefinition-id', in: 'path' },
      { name: 'teamsAppDashboardCardDefinition-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/dashboardCards/{teamsAppDashboardCardDefinition-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/dashboardCards/{teamsAppDashboardCardDefinition-id}']['body'],
  params?: IEndpoints['PATCH /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/dashboardCards/{teamsAppDashboardCardDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/dashboardCards/{teamsAppDashboardCardDefinition-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/dashboardCards/{teamsAppDashboardCardDefinition-id}',
    paramDefs: [
      { name: 'teamsApp-id', in: 'path' },
      { name: 'teamsAppDefinition-id', in: 'path' },
      { name: 'teamsAppDashboardCardDefinition-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/dashboardCards`
 *
 */
export function create(
  body: IEndpoints['POST /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/dashboardCards']['body'],
  params?: IEndpoints['POST /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/dashboardCards']['parameters']
): EndpointRequest<
  IEndpoints['POST /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/dashboardCards']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/dashboardCards',
    paramDefs: [
      { name: 'teamsApp-id', in: 'path' },
      { name: 'teamsAppDefinition-id', in: 'path' },
    ],
    params,
    body,
  };
}
