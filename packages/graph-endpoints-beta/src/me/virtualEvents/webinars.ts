import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /me/virtualEvents/webinars': Operation<'/me/virtualEvents/webinars', 'get'>;
  'GET /me/virtualEvents/webinars/{virtualEventWebinar-id}': Operation<
    '/me/virtualEvents/webinars/{virtualEventWebinar-id}',
    'get'
  >;
}

/**
 * `GET /me/virtualEvents/webinars`
 *
 */
export function list(
  params?: IEndpoints['GET /me/virtualEvents/webinars']['parameters']
): EndpointRequest<IEndpoints['GET /me/virtualEvents/webinars']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/virtualEvents/webinars',
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
 * `GET /me/virtualEvents/webinars/{virtualEventWebinar-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /me/virtualEvents/webinars/{virtualEventWebinar-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/virtualEvents/webinars/{virtualEventWebinar-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/virtualEvents/webinars/{virtualEventWebinar-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'virtualEventWebinar-id', in: 'path' },
    ],
    params,
  };
}
