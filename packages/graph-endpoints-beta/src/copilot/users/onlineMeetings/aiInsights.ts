import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /copilot/users/{aiUser-id}/onlineMeetings/{aiOnlineMeeting-id}/aiInsights/{callAiInsight-id}': Operation<
    '/copilot/users/{aiUser-id}/onlineMeetings/{aiOnlineMeeting-id}/aiInsights/{callAiInsight-id}',
    'delete'
  >;
  'GET /copilot/users/{aiUser-id}/onlineMeetings/{aiOnlineMeeting-id}/aiInsights': Operation<
    '/copilot/users/{aiUser-id}/onlineMeetings/{aiOnlineMeeting-id}/aiInsights',
    'get'
  >;
  'GET /copilot/users/{aiUser-id}/onlineMeetings/{aiOnlineMeeting-id}/aiInsights/{callAiInsight-id}': Operation<
    '/copilot/users/{aiUser-id}/onlineMeetings/{aiOnlineMeeting-id}/aiInsights/{callAiInsight-id}',
    'get'
  >;
  'PATCH /copilot/users/{aiUser-id}/onlineMeetings/{aiOnlineMeeting-id}/aiInsights/{callAiInsight-id}': Operation<
    '/copilot/users/{aiUser-id}/onlineMeetings/{aiOnlineMeeting-id}/aiInsights/{callAiInsight-id}',
    'patch'
  >;
  'POST /copilot/users/{aiUser-id}/onlineMeetings/{aiOnlineMeeting-id}/aiInsights': Operation<
    '/copilot/users/{aiUser-id}/onlineMeetings/{aiOnlineMeeting-id}/aiInsights',
    'post'
  >;
}

/**
 * `DELETE /copilot/users/{aiUser-id}/onlineMeetings/{aiOnlineMeeting-id}/aiInsights/{callAiInsight-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /copilot/users/{aiUser-id}/onlineMeetings/{aiOnlineMeeting-id}/aiInsights/{callAiInsight-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /copilot/users/{aiUser-id}/onlineMeetings/{aiOnlineMeeting-id}/aiInsights/{callAiInsight-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/copilot/users/{aiUser-id}/onlineMeetings/{aiOnlineMeeting-id}/aiInsights/{callAiInsight-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'aiUser-id', in: 'path' },
      { name: 'aiOnlineMeeting-id', in: 'path' },
      { name: 'callAiInsight-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /copilot/users/{aiUser-id}/onlineMeetings/{aiOnlineMeeting-id}/aiInsights`
 *
 */
export function list(
  params?: IEndpoints['GET /copilot/users/{aiUser-id}/onlineMeetings/{aiOnlineMeeting-id}/aiInsights']['parameters']
): EndpointRequest<
  IEndpoints['GET /copilot/users/{aiUser-id}/onlineMeetings/{aiOnlineMeeting-id}/aiInsights']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/copilot/users/{aiUser-id}/onlineMeetings/{aiOnlineMeeting-id}/aiInsights',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'aiUser-id', in: 'path' },
      { name: 'aiOnlineMeeting-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /copilot/users/{aiUser-id}/onlineMeetings/{aiOnlineMeeting-id}/aiInsights/{callAiInsight-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /copilot/users/{aiUser-id}/onlineMeetings/{aiOnlineMeeting-id}/aiInsights/{callAiInsight-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /copilot/users/{aiUser-id}/onlineMeetings/{aiOnlineMeeting-id}/aiInsights/{callAiInsight-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/copilot/users/{aiUser-id}/onlineMeetings/{aiOnlineMeeting-id}/aiInsights/{callAiInsight-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'aiUser-id', in: 'path' },
      { name: 'aiOnlineMeeting-id', in: 'path' },
      { name: 'callAiInsight-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /copilot/users/{aiUser-id}/onlineMeetings/{aiOnlineMeeting-id}/aiInsights/{callAiInsight-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /copilot/users/{aiUser-id}/onlineMeetings/{aiOnlineMeeting-id}/aiInsights/{callAiInsight-id}']['body'],
  params?: IEndpoints['PATCH /copilot/users/{aiUser-id}/onlineMeetings/{aiOnlineMeeting-id}/aiInsights/{callAiInsight-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /copilot/users/{aiUser-id}/onlineMeetings/{aiOnlineMeeting-id}/aiInsights/{callAiInsight-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/copilot/users/{aiUser-id}/onlineMeetings/{aiOnlineMeeting-id}/aiInsights/{callAiInsight-id}',
    paramDefs: [
      { name: 'aiUser-id', in: 'path' },
      { name: 'aiOnlineMeeting-id', in: 'path' },
      { name: 'callAiInsight-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /copilot/users/{aiUser-id}/onlineMeetings/{aiOnlineMeeting-id}/aiInsights`
 *
 */
export function create(
  body: IEndpoints['POST /copilot/users/{aiUser-id}/onlineMeetings/{aiOnlineMeeting-id}/aiInsights']['body'],
  params?: IEndpoints['POST /copilot/users/{aiUser-id}/onlineMeetings/{aiOnlineMeeting-id}/aiInsights']['parameters']
): EndpointRequest<
  IEndpoints['POST /copilot/users/{aiUser-id}/onlineMeetings/{aiOnlineMeeting-id}/aiInsights']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/copilot/users/{aiUser-id}/onlineMeetings/{aiOnlineMeeting-id}/aiInsights',
    paramDefs: [
      { name: 'aiUser-id', in: 'path' },
      { name: 'aiOnlineMeeting-id', in: 'path' },
    ],
    params,
    body,
  };
}
