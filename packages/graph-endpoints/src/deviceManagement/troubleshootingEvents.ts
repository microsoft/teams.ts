import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/troubleshootingEvents/{deviceManagementTroubleshootingEvent-id}': Operation<
    '/deviceManagement/troubleshootingEvents/{deviceManagementTroubleshootingEvent-id}',
    'delete'
  >;
  'GET /deviceManagement/troubleshootingEvents': Operation<
    '/deviceManagement/troubleshootingEvents',
    'get'
  >;
  'GET /deviceManagement/troubleshootingEvents/{deviceManagementTroubleshootingEvent-id}': Operation<
    '/deviceManagement/troubleshootingEvents/{deviceManagementTroubleshootingEvent-id}',
    'get'
  >;
  'PATCH /deviceManagement/troubleshootingEvents/{deviceManagementTroubleshootingEvent-id}': Operation<
    '/deviceManagement/troubleshootingEvents/{deviceManagementTroubleshootingEvent-id}',
    'patch'
  >;
  'POST /deviceManagement/troubleshootingEvents': Operation<
    '/deviceManagement/troubleshootingEvents',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/troubleshootingEvents/{deviceManagementTroubleshootingEvent-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/troubleshootingEvents/{deviceManagementTroubleshootingEvent-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/troubleshootingEvents/{deviceManagementTroubleshootingEvent-id}']['response']
> {
  return {
    method: 'delete',
    path: '/deviceManagement/troubleshootingEvents/{deviceManagementTroubleshootingEvent-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'deviceManagementTroubleshootingEvent-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/troubleshootingEvents`
 *
 * The list of troubleshooting events for the tenant.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/troubleshootingEvents']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/troubleshootingEvents']['response']> {
  return {
    method: 'get',
    path: '/deviceManagement/troubleshootingEvents',
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
 * `GET /deviceManagement/troubleshootingEvents/{deviceManagementTroubleshootingEvent-id}`
 *
 * The list of troubleshooting events for the tenant.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/troubleshootingEvents/{deviceManagementTroubleshootingEvent-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/troubleshootingEvents/{deviceManagementTroubleshootingEvent-id}']['response']
> {
  return {
    method: 'get',
    path: '/deviceManagement/troubleshootingEvents/{deviceManagementTroubleshootingEvent-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceManagementTroubleshootingEvent-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/troubleshootingEvents/{deviceManagementTroubleshootingEvent-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/troubleshootingEvents/{deviceManagementTroubleshootingEvent-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/troubleshootingEvents/{deviceManagementTroubleshootingEvent-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/troubleshootingEvents/{deviceManagementTroubleshootingEvent-id}']['response']
> {
  return {
    method: 'patch',
    path: '/deviceManagement/troubleshootingEvents/{deviceManagementTroubleshootingEvent-id}',
    paramDefs: [{ name: 'deviceManagementTroubleshootingEvent-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/troubleshootingEvents`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/troubleshootingEvents']['body'],
  params?: IEndpoints['POST /deviceManagement/troubleshootingEvents']['parameters']
): EndpointRequest<IEndpoints['POST /deviceManagement/troubleshootingEvents']['response']> {
  return {
    method: 'post',
    path: '/deviceManagement/troubleshootingEvents',
    paramDefs: [],
    params,
    body,
  };
}
