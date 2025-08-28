import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /users/{user-id}/virtualEvents/webinars': Operation<
    '/users/{user-id}/virtualEvents/webinars',
    'get'
  >;
  'GET /users/{user-id}/virtualEvents/webinars/{virtualEventWebinar-id}': Operation<
    '/users/{user-id}/virtualEvents/webinars/{virtualEventWebinar-id}',
    'get'
  >;
}

/**
 * `GET /users/{user-id}/virtualEvents/webinars`
 *
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/virtualEvents/webinars']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/virtualEvents/webinars']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/virtualEvents/webinars',
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
 * `GET /users/{user-id}/virtualEvents/webinars/{virtualEventWebinar-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/virtualEvents/webinars/{virtualEventWebinar-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/virtualEvents/webinars/{virtualEventWebinar-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/virtualEvents/webinars/{virtualEventWebinar-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'virtualEventWebinar-id', in: 'path' },
    ],
    params,
  };
}
