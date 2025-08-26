import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/intents/{deviceManagementIntent-id}/userStates/{deviceManagementIntentUserState-id}': Operation<
    '/deviceManagement/intents/{deviceManagementIntent-id}/userStates/{deviceManagementIntentUserState-id}',
    'delete'
  >;
  'GET /deviceManagement/intents/{deviceManagementIntent-id}/userStates': Operation<
    '/deviceManagement/intents/{deviceManagementIntent-id}/userStates',
    'get'
  >;
  'GET /deviceManagement/intents/{deviceManagementIntent-id}/userStates/{deviceManagementIntentUserState-id}': Operation<
    '/deviceManagement/intents/{deviceManagementIntent-id}/userStates/{deviceManagementIntentUserState-id}',
    'get'
  >;
  'PATCH /deviceManagement/intents/{deviceManagementIntent-id}/userStates/{deviceManagementIntentUserState-id}': Operation<
    '/deviceManagement/intents/{deviceManagementIntent-id}/userStates/{deviceManagementIntentUserState-id}',
    'patch'
  >;
  'POST /deviceManagement/intents/{deviceManagementIntent-id}/userStates': Operation<
    '/deviceManagement/intents/{deviceManagementIntent-id}/userStates',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/intents/{deviceManagementIntent-id}/userStates/{deviceManagementIntentUserState-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/intents/{deviceManagementIntent-id}/userStates/{deviceManagementIntentUserState-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/intents/{deviceManagementIntent-id}/userStates/{deviceManagementIntentUserState-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/intents/{deviceManagementIntent-id}/userStates/{deviceManagementIntentUserState-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'deviceManagementIntent-id', in: 'path' },
      { name: 'deviceManagementIntentUserState-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/intents/{deviceManagementIntent-id}/userStates`
 *
 * Collection of states of all users that the intent is applied to
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/intents/{deviceManagementIntent-id}/userStates']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/intents/{deviceManagementIntent-id}/userStates']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/intents/{deviceManagementIntent-id}/userStates',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceManagementIntent-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/intents/{deviceManagementIntent-id}/userStates/{deviceManagementIntentUserState-id}`
 *
 * Collection of states of all users that the intent is applied to
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/intents/{deviceManagementIntent-id}/userStates/{deviceManagementIntentUserState-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/intents/{deviceManagementIntent-id}/userStates/{deviceManagementIntentUserState-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/intents/{deviceManagementIntent-id}/userStates/{deviceManagementIntentUserState-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceManagementIntent-id', in: 'path' },
      { name: 'deviceManagementIntentUserState-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/intents/{deviceManagementIntent-id}/userStates/{deviceManagementIntentUserState-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/intents/{deviceManagementIntent-id}/userStates/{deviceManagementIntentUserState-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/intents/{deviceManagementIntent-id}/userStates/{deviceManagementIntentUserState-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/intents/{deviceManagementIntent-id}/userStates/{deviceManagementIntentUserState-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/intents/{deviceManagementIntent-id}/userStates/{deviceManagementIntentUserState-id}',
    paramDefs: [
      { name: 'deviceManagementIntent-id', in: 'path' },
      { name: 'deviceManagementIntentUserState-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/intents/{deviceManagementIntent-id}/userStates`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/intents/{deviceManagementIntent-id}/userStates']['body'],
  params?: IEndpoints['POST /deviceManagement/intents/{deviceManagementIntent-id}/userStates']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/intents/{deviceManagementIntent-id}/userStates']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/intents/{deviceManagementIntent-id}/userStates',
    paramDefs: [{ name: 'deviceManagementIntent-id', in: 'path' }],
    params,
    body,
  };
}
