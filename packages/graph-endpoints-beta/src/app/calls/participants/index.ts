export * as invite from './invite';
export * as mute from './mute';
export * as muteAll from './muteAll';
export * as startHoldMusic from './startHoldMusic';
export * as stopHoldMusic from './stopHoldMusic';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /app/calls/{call-id}/participants/{participant-id}': Operation<
    '/app/calls/{call-id}/participants/{participant-id}',
    'delete'
  >;
  'GET /app/calls/{call-id}/participants': Operation<'/app/calls/{call-id}/participants', 'get'>;
  'GET /app/calls/{call-id}/participants/{participant-id}': Operation<
    '/app/calls/{call-id}/participants/{participant-id}',
    'get'
  >;
  'PATCH /app/calls/{call-id}/participants/{participant-id}': Operation<
    '/app/calls/{call-id}/participants/{participant-id}',
    'patch'
  >;
  'POST /app/calls/{call-id}/participants': Operation<'/app/calls/{call-id}/participants', 'post'>;
}

/**
 * `DELETE /app/calls/{call-id}/participants/{participant-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /app/calls/{call-id}/participants/{participant-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /app/calls/{call-id}/participants/{participant-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/app/calls/{call-id}/participants/{participant-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'call-id', in: 'path' },
      { name: 'participant-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /app/calls/{call-id}/participants`
 *
 */
export function list(
  params?: IEndpoints['GET /app/calls/{call-id}/participants']['parameters']
): EndpointRequest<IEndpoints['GET /app/calls/{call-id}/participants']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/app/calls/{call-id}/participants',
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
 * `GET /app/calls/{call-id}/participants/{participant-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /app/calls/{call-id}/participants/{participant-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /app/calls/{call-id}/participants/{participant-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/app/calls/{call-id}/participants/{participant-id}',
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
 * `PATCH /app/calls/{call-id}/participants/{participant-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /app/calls/{call-id}/participants/{participant-id}']['body'],
  params?: IEndpoints['PATCH /app/calls/{call-id}/participants/{participant-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /app/calls/{call-id}/participants/{participant-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/app/calls/{call-id}/participants/{participant-id}',
    paramDefs: [
      { name: 'call-id', in: 'path' },
      { name: 'participant-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /app/calls/{call-id}/participants`
 *
 */
export function create(
  body: IEndpoints['POST /app/calls/{call-id}/participants']['body'],
  params?: IEndpoints['POST /app/calls/{call-id}/participants']['parameters']
): EndpointRequest<IEndpoints['POST /app/calls/{call-id}/participants']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/app/calls/{call-id}/participants',
    paramDefs: [{ name: 'call-id', in: 'path' }],
    params,
    body,
  };
}
