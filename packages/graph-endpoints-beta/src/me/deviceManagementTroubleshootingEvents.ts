import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /me/deviceManagementTroubleshootingEvents/{deviceManagementTroubleshootingEvent-id}': Operation<
    '/me/deviceManagementTroubleshootingEvents/{deviceManagementTroubleshootingEvent-id}',
    'delete'
  >;
  'GET /me/deviceManagementTroubleshootingEvents': Operation<
    '/me/deviceManagementTroubleshootingEvents',
    'get'
  >;
  'GET /me/deviceManagementTroubleshootingEvents/{deviceManagementTroubleshootingEvent-id}': Operation<
    '/me/deviceManagementTroubleshootingEvents/{deviceManagementTroubleshootingEvent-id}',
    'get'
  >;
  'PATCH /me/deviceManagementTroubleshootingEvents/{deviceManagementTroubleshootingEvent-id}': Operation<
    '/me/deviceManagementTroubleshootingEvents/{deviceManagementTroubleshootingEvent-id}',
    'patch'
  >;
  'POST /me/deviceManagementTroubleshootingEvents': Operation<
    '/me/deviceManagementTroubleshootingEvents',
    'post'
  >;
}

/**
 * `DELETE /me/deviceManagementTroubleshootingEvents/{deviceManagementTroubleshootingEvent-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/deviceManagementTroubleshootingEvents/{deviceManagementTroubleshootingEvent-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/deviceManagementTroubleshootingEvents/{deviceManagementTroubleshootingEvent-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/deviceManagementTroubleshootingEvents/{deviceManagementTroubleshootingEvent-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'deviceManagementTroubleshootingEvent-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/deviceManagementTroubleshootingEvents`
 *
 * The list of troubleshooting events for this user.
 */
export function list(
  params?: IEndpoints['GET /me/deviceManagementTroubleshootingEvents']['parameters']
): EndpointRequest<IEndpoints['GET /me/deviceManagementTroubleshootingEvents']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/deviceManagementTroubleshootingEvents',
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
 * `GET /me/deviceManagementTroubleshootingEvents/{deviceManagementTroubleshootingEvent-id}`
 *
 * The list of troubleshooting events for this user.
 */
export function get(
  params?: IEndpoints['GET /me/deviceManagementTroubleshootingEvents/{deviceManagementTroubleshootingEvent-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/deviceManagementTroubleshootingEvents/{deviceManagementTroubleshootingEvent-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/deviceManagementTroubleshootingEvents/{deviceManagementTroubleshootingEvent-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceManagementTroubleshootingEvent-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/deviceManagementTroubleshootingEvents/{deviceManagementTroubleshootingEvent-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/deviceManagementTroubleshootingEvents/{deviceManagementTroubleshootingEvent-id}']['body'],
  params?: IEndpoints['PATCH /me/deviceManagementTroubleshootingEvents/{deviceManagementTroubleshootingEvent-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/deviceManagementTroubleshootingEvents/{deviceManagementTroubleshootingEvent-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/deviceManagementTroubleshootingEvents/{deviceManagementTroubleshootingEvent-id}',
    paramDefs: [{ name: 'deviceManagementTroubleshootingEvent-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /me/deviceManagementTroubleshootingEvents`
 *
 */
export function create(
  body: IEndpoints['POST /me/deviceManagementTroubleshootingEvents']['body'],
  params?: IEndpoints['POST /me/deviceManagementTroubleshootingEvents']['parameters']
): EndpointRequest<IEndpoints['POST /me/deviceManagementTroubleshootingEvents']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/deviceManagementTroubleshootingEvents',
    paramDefs: [],
    params,
    body,
  };
}
