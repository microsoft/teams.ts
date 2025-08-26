import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /drives/{drive-id}/list/activities': Operation<'/drives/{drive-id}/list/activities', 'get'>;
  'POST /drives/{drive-id}/list/activities': Operation<
    '/drives/{drive-id}/list/activities',
    'post'
  >;
}

/**
 * `GET /drives/{drive-id}/list/activities`
 *
 * The recent activities that took place within this list.
 */
export function list(
  params?: IEndpoints['GET /drives/{drive-id}/list/activities']['parameters']
): EndpointRequest<IEndpoints['GET /drives/{drive-id}/list/activities']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/drives/{drive-id}/list/activities',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'drive-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `POST /drives/{drive-id}/list/activities`
 *
 */
export function create(
  body: IEndpoints['POST /drives/{drive-id}/list/activities']['body'],
  params?: IEndpoints['POST /drives/{drive-id}/list/activities']['parameters']
): EndpointRequest<IEndpoints['POST /drives/{drive-id}/list/activities']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/drives/{drive-id}/list/activities',
    paramDefs: [{ name: 'drive-id', in: 'path' }],
    params,
    body,
  };
}
