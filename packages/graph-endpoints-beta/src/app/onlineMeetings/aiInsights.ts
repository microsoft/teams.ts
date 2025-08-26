import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /app/onlineMeetings/{onlineMeeting-id}/aiInsights/{callAiInsight-id}': Operation<
    '/app/onlineMeetings/{onlineMeeting-id}/aiInsights/{callAiInsight-id}',
    'delete'
  >;
  'GET /app/onlineMeetings/{onlineMeeting-id}/aiInsights': Operation<
    '/app/onlineMeetings/{onlineMeeting-id}/aiInsights',
    'get'
  >;
  'GET /app/onlineMeetings/{onlineMeeting-id}/aiInsights/{callAiInsight-id}': Operation<
    '/app/onlineMeetings/{onlineMeeting-id}/aiInsights/{callAiInsight-id}',
    'get'
  >;
  'PATCH /app/onlineMeetings/{onlineMeeting-id}/aiInsights/{callAiInsight-id}': Operation<
    '/app/onlineMeetings/{onlineMeeting-id}/aiInsights/{callAiInsight-id}',
    'patch'
  >;
  'POST /app/onlineMeetings/{onlineMeeting-id}/aiInsights': Operation<
    '/app/onlineMeetings/{onlineMeeting-id}/aiInsights',
    'post'
  >;
}

/**
 * `DELETE /app/onlineMeetings/{onlineMeeting-id}/aiInsights/{callAiInsight-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /app/onlineMeetings/{onlineMeeting-id}/aiInsights/{callAiInsight-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /app/onlineMeetings/{onlineMeeting-id}/aiInsights/{callAiInsight-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/app/onlineMeetings/{onlineMeeting-id}/aiInsights/{callAiInsight-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'onlineMeeting-id', in: 'path' },
      { name: 'callAiInsight-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /app/onlineMeetings/{onlineMeeting-id}/aiInsights`
 *
 * The AI insights generated for an online meeting. Read-only.
 */
export function list(
  params?: IEndpoints['GET /app/onlineMeetings/{onlineMeeting-id}/aiInsights']['parameters']
): EndpointRequest<
  IEndpoints['GET /app/onlineMeetings/{onlineMeeting-id}/aiInsights']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/app/onlineMeetings/{onlineMeeting-id}/aiInsights',
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
 * `GET /app/onlineMeetings/{onlineMeeting-id}/aiInsights/{callAiInsight-id}`
 *
 * The AI insights generated for an online meeting. Read-only.
 */
export function get(
  params?: IEndpoints['GET /app/onlineMeetings/{onlineMeeting-id}/aiInsights/{callAiInsight-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /app/onlineMeetings/{onlineMeeting-id}/aiInsights/{callAiInsight-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/app/onlineMeetings/{onlineMeeting-id}/aiInsights/{callAiInsight-id}',
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
 * `PATCH /app/onlineMeetings/{onlineMeeting-id}/aiInsights/{callAiInsight-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /app/onlineMeetings/{onlineMeeting-id}/aiInsights/{callAiInsight-id}']['body'],
  params?: IEndpoints['PATCH /app/onlineMeetings/{onlineMeeting-id}/aiInsights/{callAiInsight-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /app/onlineMeetings/{onlineMeeting-id}/aiInsights/{callAiInsight-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/app/onlineMeetings/{onlineMeeting-id}/aiInsights/{callAiInsight-id}',
    paramDefs: [
      { name: 'onlineMeeting-id', in: 'path' },
      { name: 'callAiInsight-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /app/onlineMeetings/{onlineMeeting-id}/aiInsights`
 *
 */
export function create(
  body: IEndpoints['POST /app/onlineMeetings/{onlineMeeting-id}/aiInsights']['body'],
  params?: IEndpoints['POST /app/onlineMeetings/{onlineMeeting-id}/aiInsights']['parameters']
): EndpointRequest<
  IEndpoints['POST /app/onlineMeetings/{onlineMeeting-id}/aiInsights']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/app/onlineMeetings/{onlineMeeting-id}/aiInsights',
    paramDefs: [{ name: 'onlineMeeting-id', in: 'path' }],
    params,
    body,
  };
}
