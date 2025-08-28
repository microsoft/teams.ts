export * as pngOfCurrentSlide from './pngOfCurrentSlide';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /app/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}': Operation<
    '/app/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}',
    'delete'
  >;
  'GET /app/calls/{call-id}/contentSharingSessions': Operation<
    '/app/calls/{call-id}/contentSharingSessions',
    'get'
  >;
  'GET /app/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}': Operation<
    '/app/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}',
    'get'
  >;
  'PATCH /app/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}': Operation<
    '/app/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}',
    'patch'
  >;
  'POST /app/calls/{call-id}/contentSharingSessions': Operation<
    '/app/calls/{call-id}/contentSharingSessions',
    'post'
  >;
}

/**
 * `DELETE /app/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /app/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /app/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/app/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'call-id', in: 'path' },
      { name: 'contentSharingSession-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /app/calls/{call-id}/contentSharingSessions`
 *
 */
export function list(
  params?: IEndpoints['GET /app/calls/{call-id}/contentSharingSessions']['parameters']
): EndpointRequest<IEndpoints['GET /app/calls/{call-id}/contentSharingSessions']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/app/calls/{call-id}/contentSharingSessions',
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
 * `GET /app/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /app/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /app/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/app/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}',
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
 * `PATCH /app/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /app/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}']['body'],
  params?: IEndpoints['PATCH /app/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /app/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/app/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}',
    paramDefs: [
      { name: 'call-id', in: 'path' },
      { name: 'contentSharingSession-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /app/calls/{call-id}/contentSharingSessions`
 *
 */
export function create(
  body: IEndpoints['POST /app/calls/{call-id}/contentSharingSessions']['body'],
  params?: IEndpoints['POST /app/calls/{call-id}/contentSharingSessions']['parameters']
): EndpointRequest<IEndpoints['POST /app/calls/{call-id}/contentSharingSessions']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/app/calls/{call-id}/contentSharingSessions',
    paramDefs: [{ name: 'call-id', in: 'path' }],
    params,
    body,
  };
}
