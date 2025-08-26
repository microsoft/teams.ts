import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/onlineMeetings/{onlineMeeting-id}/aiInsights/{callAiInsight-id}': Operation<
    '/me/onlineMeetings/{onlineMeeting-id}/aiInsights/{callAiInsight-id}',
    'delete'
  >;
  'GET /me/onlineMeetings/{onlineMeeting-id}/aiInsights': Operation<
    '/me/onlineMeetings/{onlineMeeting-id}/aiInsights',
    'get'
  >;
  'GET /me/onlineMeetings/{onlineMeeting-id}/aiInsights/{callAiInsight-id}': Operation<
    '/me/onlineMeetings/{onlineMeeting-id}/aiInsights/{callAiInsight-id}',
    'get'
  >;
  'PATCH /me/onlineMeetings/{onlineMeeting-id}/aiInsights/{callAiInsight-id}': Operation<
    '/me/onlineMeetings/{onlineMeeting-id}/aiInsights/{callAiInsight-id}',
    'patch'
  >;
  'POST /me/onlineMeetings/{onlineMeeting-id}/aiInsights': Operation<
    '/me/onlineMeetings/{onlineMeeting-id}/aiInsights',
    'post'
  >;
}

/**
 * `DELETE /me/onlineMeetings/{onlineMeeting-id}/aiInsights/{callAiInsight-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/onlineMeetings/{onlineMeeting-id}/aiInsights/{callAiInsight-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/onlineMeetings/{onlineMeeting-id}/aiInsights/{callAiInsight-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/onlineMeetings/{onlineMeeting-id}/aiInsights/{callAiInsight-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'onlineMeeting-id', in: 'path' },
      { name: 'callAiInsight-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/onlineMeetings/{onlineMeeting-id}/aiInsights`
 *
 * The AI insights generated for an online meeting. Read-only.
 */
export function list(
  params?: IEndpoints['GET /me/onlineMeetings/{onlineMeeting-id}/aiInsights']['parameters']
): EndpointRequest<IEndpoints['GET /me/onlineMeetings/{onlineMeeting-id}/aiInsights']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/onlineMeetings/{onlineMeeting-id}/aiInsights',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'onlineMeeting-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/onlineMeetings/{onlineMeeting-id}/aiInsights/{callAiInsight-id}`
 *
 * The AI insights generated for an online meeting. Read-only.
 */
export function get(
  params?: IEndpoints['GET /me/onlineMeetings/{onlineMeeting-id}/aiInsights/{callAiInsight-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/onlineMeetings/{onlineMeeting-id}/aiInsights/{callAiInsight-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/onlineMeetings/{onlineMeeting-id}/aiInsights/{callAiInsight-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'onlineMeeting-id', in: 'path' },
      { name: 'callAiInsight-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/onlineMeetings/{onlineMeeting-id}/aiInsights/{callAiInsight-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/onlineMeetings/{onlineMeeting-id}/aiInsights/{callAiInsight-id}']['body'],
  params?: IEndpoints['PATCH /me/onlineMeetings/{onlineMeeting-id}/aiInsights/{callAiInsight-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/onlineMeetings/{onlineMeeting-id}/aiInsights/{callAiInsight-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/onlineMeetings/{onlineMeeting-id}/aiInsights/{callAiInsight-id}',
    paramDefs: [
      { name: 'onlineMeeting-id', in: 'path' },
      { name: 'callAiInsight-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /me/onlineMeetings/{onlineMeeting-id}/aiInsights`
 *
 */
export function create(
  body: IEndpoints['POST /me/onlineMeetings/{onlineMeeting-id}/aiInsights']['body'],
  params?: IEndpoints['POST /me/onlineMeetings/{onlineMeeting-id}/aiInsights']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/onlineMeetings/{onlineMeeting-id}/aiInsights']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/onlineMeetings/{onlineMeeting-id}/aiInsights',
    paramDefs: [{ name: 'onlineMeeting-id', in: 'path' }],
    params,
    body,
  };
}
