export * as lastSharedMethod from './lastSharedMethod';
export * as resource from './resource';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/insights/shared/{sharedInsight-id}': Operation<
    '/me/insights/shared/{sharedInsight-id}',
    'delete'
  >;
  'GET /me/insights/shared': Operation<'/me/insights/shared', 'get'>;
  'GET /me/insights/shared/{sharedInsight-id}': Operation<
    '/me/insights/shared/{sharedInsight-id}',
    'get'
  >;
  'PATCH /me/insights/shared/{sharedInsight-id}': Operation<
    '/me/insights/shared/{sharedInsight-id}',
    'patch'
  >;
  'POST /me/insights/shared': Operation<'/me/insights/shared', 'post'>;
}

/**
 * `DELETE /me/insights/shared/{sharedInsight-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/insights/shared/{sharedInsight-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/insights/shared/{sharedInsight-id}']['response']> {
  return {
    method: 'delete',
    path: '/me/insights/shared/{sharedInsight-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'sharedInsight-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/insights/shared`
 *
 * Calculated insight that includes the list of documents shared with a user. This insight includes documents hosted on OneDrive/SharePoint in the user&#x27;s Microsoft 365 tenant that are shared with the user, and documents that are attached as files and sent to the user.
 */
export function get(
  params?: IEndpoints['GET /me/insights/shared']['parameters']
): EndpointRequest<IEndpoints['GET /me/insights/shared']['response']> {
  return {
    method: 'get',
    path: '/me/insights/shared',
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
 * `GET /me/insights/shared/{sharedInsight-id}`
 *
 * Calculated relationship that identifies documents shared with or by the user. This includes URLs, file attachments, and reference attachments to OneDrive for work or school and SharePoint files found in Outlook messages and meetings. This also includes URLs and reference attachments to Teams conversations. Ordered by recency of share.
 */
export function get$1(
  params?: IEndpoints['GET /me/insights/shared/{sharedInsight-id}']['parameters']
): EndpointRequest<IEndpoints['GET /me/insights/shared/{sharedInsight-id}']['response']> {
  return {
    method: 'get',
    path: '/me/insights/shared/{sharedInsight-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'sharedInsight-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/insights/shared/{sharedInsight-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/insights/shared/{sharedInsight-id}']['body'],
  params?: IEndpoints['PATCH /me/insights/shared/{sharedInsight-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /me/insights/shared/{sharedInsight-id}']['response']> {
  return {
    method: 'patch',
    path: '/me/insights/shared/{sharedInsight-id}',
    paramDefs: [{ name: 'sharedInsight-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /me/insights/shared`
 *
 */
export function create(
  body: IEndpoints['POST /me/insights/shared']['body'],
  params?: IEndpoints['POST /me/insights/shared']['parameters']
): EndpointRequest<IEndpoints['POST /me/insights/shared']['response']> {
  return {
    method: 'post',
    path: '/me/insights/shared',
    paramDefs: [],
    params,
    body,
  };
}
