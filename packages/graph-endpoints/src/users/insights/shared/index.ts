export * as lastSharedMethod from './lastSharedMethod';
export * as resource from './resource';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/insights/shared/{sharedInsight-id}': Operation<
    '/users/{user-id}/insights/shared/{sharedInsight-id}',
    'delete'
  >;
  'GET /users/{user-id}/insights/shared': Operation<'/users/{user-id}/insights/shared', 'get'>;
  'GET /users/{user-id}/insights/shared/{sharedInsight-id}': Operation<
    '/users/{user-id}/insights/shared/{sharedInsight-id}',
    'get'
  >;
  'PATCH /users/{user-id}/insights/shared/{sharedInsight-id}': Operation<
    '/users/{user-id}/insights/shared/{sharedInsight-id}',
    'patch'
  >;
  'POST /users/{user-id}/insights/shared': Operation<'/users/{user-id}/insights/shared', 'post'>;
}

/**
 * `DELETE /users/{user-id}/insights/shared/{sharedInsight-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/insights/shared/{sharedInsight-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/insights/shared/{sharedInsight-id}']['response']
> {
  return {
    method: 'delete',
    path: '/users/{user-id}/insights/shared/{sharedInsight-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'sharedInsight-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/insights/shared`
 *
 * Calculated relationship that identifies documents shared with or by the user. This includes URLs, file attachments, and reference attachments to OneDrive for work or school and SharePoint files found in Outlook messages and meetings. This also includes URLs and reference attachments to Teams conversations. Ordered by recency of share.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/insights/shared']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/insights/shared']['response']> {
  return {
    method: 'get',
    path: '/users/{user-id}/insights/shared',
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
 * `GET /users/{user-id}/insights/shared/{sharedInsight-id}`
 *
 * Calculated relationship that identifies documents shared with or by the user. This includes URLs, file attachments, and reference attachments to OneDrive for work or school and SharePoint files found in Outlook messages and meetings. This also includes URLs and reference attachments to Teams conversations. Ordered by recency of share.
 */
export function get$1(
  params?: IEndpoints['GET /users/{user-id}/insights/shared/{sharedInsight-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/insights/shared/{sharedInsight-id}']['response']
> {
  return {
    method: 'get',
    path: '/users/{user-id}/insights/shared/{sharedInsight-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'sharedInsight-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/insights/shared/{sharedInsight-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/insights/shared/{sharedInsight-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/insights/shared/{sharedInsight-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/insights/shared/{sharedInsight-id}']['response']
> {
  return {
    method: 'patch',
    path: '/users/{user-id}/insights/shared/{sharedInsight-id}',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'sharedInsight-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/insights/shared`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/insights/shared']['body'],
  params?: IEndpoints['POST /users/{user-id}/insights/shared']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/insights/shared']['response']> {
  return {
    method: 'post',
    path: '/users/{user-id}/insights/shared',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
