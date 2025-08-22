export * as invite from './invite';
export * as mute from './mute';
export * as startHoldMusic from './startHoldMusic';
export * as stopHoldMusic from './stopHoldMusic';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /communications/calls/{call-id}/participants/{participant-id}': Operation<
    '/communications/calls/{call-id}/participants/{participant-id}',
    'delete'
  >;
  'GET /communications/calls/{call-id}/participants': Operation<
    '/communications/calls/{call-id}/participants',
    'get'
  >;
  'GET /communications/calls/{call-id}/participants/{participant-id}': Operation<
    '/communications/calls/{call-id}/participants/{participant-id}',
    'get'
  >;
  'PATCH /communications/calls/{call-id}/participants/{participant-id}': Operation<
    '/communications/calls/{call-id}/participants/{participant-id}',
    'patch'
  >;
  'POST /communications/calls/{call-id}/participants': Operation<
    '/communications/calls/{call-id}/participants',
    'post'
  >;
}

/**
 * `DELETE /communications/calls/{call-id}/participants/{participant-id}`
 *
 * Delete a specific participant in a call. In some situations, it is appropriate for an application to remove a participant from an active call. This action can be done before or after the participant answers the call. When an active caller is removed, they are immediately dropped from the call with no pre- or post-removal notification. When an invited participant is removed, any outstanding add participant request is canceled.
 */
export function del(
  params?: IEndpoints['DELETE /communications/calls/{call-id}/participants/{participant-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /communications/calls/{call-id}/participants/{participant-id}']['response']
> {
  return {
    method: 'delete',
    path: '/communications/calls/{call-id}/participants/{participant-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'call-id', in: 'path' },
      { name: 'participant-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /communications/calls/{call-id}/participants`
 *
 * Retrieve a list of participant objects in the call.
 */
export function list(
  params?: IEndpoints['GET /communications/calls/{call-id}/participants']['parameters']
): EndpointRequest<IEndpoints['GET /communications/calls/{call-id}/participants']['response']> {
  return {
    method: 'get',
    path: '/communications/calls/{call-id}/participants',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'call-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /communications/calls/{call-id}/participants/{participant-id}`
 *
 * Retrieve the properties and relationships of a participant object.
 */
export function get(
  params?: IEndpoints['GET /communications/calls/{call-id}/participants/{participant-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /communications/calls/{call-id}/participants/{participant-id}']['response']
> {
  return {
    method: 'get',
    path: '/communications/calls/{call-id}/participants/{participant-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'call-id', in: 'path' },
      { name: 'participant-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /communications/calls/{call-id}/participants/{participant-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /communications/calls/{call-id}/participants/{participant-id}']['body'],
  params?: IEndpoints['PATCH /communications/calls/{call-id}/participants/{participant-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /communications/calls/{call-id}/participants/{participant-id}']['response']
> {
  return {
    method: 'patch',
    path: '/communications/calls/{call-id}/participants/{participant-id}',
    paramDefs: [
      { name: 'call-id', in: 'path' },
      { name: 'participant-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /communications/calls/{call-id}/participants`
 *
 */
export function create(
  body: IEndpoints['POST /communications/calls/{call-id}/participants']['body'],
  params?: IEndpoints['POST /communications/calls/{call-id}/participants']['parameters']
): EndpointRequest<IEndpoints['POST /communications/calls/{call-id}/participants']['response']> {
  return {
    method: 'post',
    path: '/communications/calls/{call-id}/participants',
    paramDefs: [{ name: 'call-id', in: 'path' }],
    params,
    body,
  };
}
