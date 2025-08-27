import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/deviceManagementTroubleshootingEvents/{deviceManagementTroubleshootingEvent-id}': Operation<
    '/users/{user-id}/deviceManagementTroubleshootingEvents/{deviceManagementTroubleshootingEvent-id}',
    'delete'
  >;
  'GET /users/{user-id}/deviceManagementTroubleshootingEvents': Operation<
    '/users/{user-id}/deviceManagementTroubleshootingEvents',
    'get'
  >;
  'GET /users/{user-id}/deviceManagementTroubleshootingEvents/{deviceManagementTroubleshootingEvent-id}': Operation<
    '/users/{user-id}/deviceManagementTroubleshootingEvents/{deviceManagementTroubleshootingEvent-id}',
    'get'
  >;
  'PATCH /users/{user-id}/deviceManagementTroubleshootingEvents/{deviceManagementTroubleshootingEvent-id}': Operation<
    '/users/{user-id}/deviceManagementTroubleshootingEvents/{deviceManagementTroubleshootingEvent-id}',
    'patch'
  >;
  'POST /users/{user-id}/deviceManagementTroubleshootingEvents': Operation<
    '/users/{user-id}/deviceManagementTroubleshootingEvents',
    'post'
  >;
}

/**
 * `DELETE /users/{user-id}/deviceManagementTroubleshootingEvents/{deviceManagementTroubleshootingEvent-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/deviceManagementTroubleshootingEvents/{deviceManagementTroubleshootingEvent-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/deviceManagementTroubleshootingEvents/{deviceManagementTroubleshootingEvent-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/deviceManagementTroubleshootingEvents/{deviceManagementTroubleshootingEvent-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'deviceManagementTroubleshootingEvent-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/deviceManagementTroubleshootingEvents`
 *
 * The list of troubleshooting events for this user.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/deviceManagementTroubleshootingEvents']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/deviceManagementTroubleshootingEvents']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/deviceManagementTroubleshootingEvents',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/deviceManagementTroubleshootingEvents/{deviceManagementTroubleshootingEvent-id}`
 *
 * The list of troubleshooting events for this user.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/deviceManagementTroubleshootingEvents/{deviceManagementTroubleshootingEvent-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/deviceManagementTroubleshootingEvents/{deviceManagementTroubleshootingEvent-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/deviceManagementTroubleshootingEvents/{deviceManagementTroubleshootingEvent-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'deviceManagementTroubleshootingEvent-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/deviceManagementTroubleshootingEvents/{deviceManagementTroubleshootingEvent-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/deviceManagementTroubleshootingEvents/{deviceManagementTroubleshootingEvent-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/deviceManagementTroubleshootingEvents/{deviceManagementTroubleshootingEvent-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/deviceManagementTroubleshootingEvents/{deviceManagementTroubleshootingEvent-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/deviceManagementTroubleshootingEvents/{deviceManagementTroubleshootingEvent-id}',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'deviceManagementTroubleshootingEvent-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/deviceManagementTroubleshootingEvents`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/deviceManagementTroubleshootingEvents']['body'],
  params?: IEndpoints['POST /users/{user-id}/deviceManagementTroubleshootingEvents']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/deviceManagementTroubleshootingEvents']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/deviceManagementTroubleshootingEvents',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
