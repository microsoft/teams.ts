import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/autopilotEvents/{deviceManagementAutopilotEvent-id}': Operation<
    '/deviceManagement/autopilotEvents/{deviceManagementAutopilotEvent-id}',
    'delete'
  >;
  'GET /deviceManagement/autopilotEvents': Operation<'/deviceManagement/autopilotEvents', 'get'>;
  'GET /deviceManagement/autopilotEvents/{deviceManagementAutopilotEvent-id}': Operation<
    '/deviceManagement/autopilotEvents/{deviceManagementAutopilotEvent-id}',
    'get'
  >;
  'PATCH /deviceManagement/autopilotEvents/{deviceManagementAutopilotEvent-id}': Operation<
    '/deviceManagement/autopilotEvents/{deviceManagementAutopilotEvent-id}',
    'patch'
  >;
  'POST /deviceManagement/autopilotEvents': Operation<'/deviceManagement/autopilotEvents', 'post'>;
}

/**
 * `DELETE /deviceManagement/autopilotEvents/{deviceManagementAutopilotEvent-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/autopilotEvents/{deviceManagementAutopilotEvent-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/autopilotEvents/{deviceManagementAutopilotEvent-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/autopilotEvents/{deviceManagementAutopilotEvent-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'deviceManagementAutopilotEvent-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/autopilotEvents`
 *
 * The list of autopilot events for the tenant.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/autopilotEvents']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/autopilotEvents']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/autopilotEvents',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/autopilotEvents/{deviceManagementAutopilotEvent-id}`
 *
 * The list of autopilot events for the tenant.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/autopilotEvents/{deviceManagementAutopilotEvent-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/autopilotEvents/{deviceManagementAutopilotEvent-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/autopilotEvents/{deviceManagementAutopilotEvent-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceManagementAutopilotEvent-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/autopilotEvents/{deviceManagementAutopilotEvent-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/autopilotEvents/{deviceManagementAutopilotEvent-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/autopilotEvents/{deviceManagementAutopilotEvent-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/autopilotEvents/{deviceManagementAutopilotEvent-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/autopilotEvents/{deviceManagementAutopilotEvent-id}',
    paramDefs: [{ name: 'deviceManagementAutopilotEvent-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/autopilotEvents`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/autopilotEvents']['body'],
  params?: IEndpoints['POST /deviceManagement/autopilotEvents']['parameters']
): EndpointRequest<IEndpoints['POST /deviceManagement/autopilotEvents']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/autopilotEvents',
    paramDefs: [],
    params,
    body,
  };
}
