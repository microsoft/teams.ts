import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /communications/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}': Operation<
    '/communications/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}',
    'delete'
  >;
  'GET /communications/calls/{call-id}/contentSharingSessions': Operation<
    '/communications/calls/{call-id}/contentSharingSessions',
    'get'
  >;
  'GET /communications/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}': Operation<
    '/communications/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}',
    'get'
  >;
  'PATCH /communications/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}': Operation<
    '/communications/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}',
    'patch'
  >;
  'POST /communications/calls/{call-id}/contentSharingSessions': Operation<
    '/communications/calls/{call-id}/contentSharingSessions',
    'post'
  >;
}

/**
 * `DELETE /communications/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /communications/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /communications/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}']['response']
> {
  return {
    method: 'delete',
    path: '/communications/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'call-id', in: 'path' },
      { name: 'contentSharingSession-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /communications/calls/{call-id}/contentSharingSessions`
 *
 * Retrieve a list of contentSharingSession objects in a call.
 */
export function list(
  params?: IEndpoints['GET /communications/calls/{call-id}/contentSharingSessions']['parameters']
): EndpointRequest<
  IEndpoints['GET /communications/calls/{call-id}/contentSharingSessions']['response']
> {
  return {
    method: 'get',
    path: '/communications/calls/{call-id}/contentSharingSessions',
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
 * `GET /communications/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}`
 *
 * Retrieve the properties of a contentSharingSession object in a call.
 */
export function get(
  params?: IEndpoints['GET /communications/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /communications/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}']['response']
> {
  return {
    method: 'get',
    path: '/communications/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'call-id', in: 'path' },
      { name: 'contentSharingSession-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /communications/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /communications/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}']['body'],
  params?: IEndpoints['PATCH /communications/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /communications/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}']['response']
> {
  return {
    method: 'patch',
    path: '/communications/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}',
    paramDefs: [
      { name: 'call-id', in: 'path' },
      { name: 'contentSharingSession-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /communications/calls/{call-id}/contentSharingSessions`
 *
 */
export function create(
  body: IEndpoints['POST /communications/calls/{call-id}/contentSharingSessions']['body'],
  params?: IEndpoints['POST /communications/calls/{call-id}/contentSharingSessions']['parameters']
): EndpointRequest<
  IEndpoints['POST /communications/calls/{call-id}/contentSharingSessions']['response']
> {
  return {
    method: 'post',
    path: '/communications/calls/{call-id}/contentSharingSessions',
    paramDefs: [{ name: 'call-id', in: 'path' }],
    params,
    body,
  };
}
