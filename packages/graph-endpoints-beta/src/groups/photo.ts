import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/photo': Operation<'/groups/{group-id}/photo', 'delete'>;
  'GET /groups/{group-id}/photo': Operation<'/groups/{group-id}/photo', 'get'>;
  'PATCH /groups/{group-id}/photo': Operation<'/groups/{group-id}/photo', 'patch'>;
}

/**
 * `DELETE /groups/{group-id}/photo`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/photo']['parameters']
): EndpointRequest<IEndpoints['DELETE /groups/{group-id}/photo']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/groups/{group-id}/photo',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'group-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/photo`
 *
 * The group&#x27;s profile photo.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/photo']['parameters']
): EndpointRequest<IEndpoints['GET /groups/{group-id}/photo']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/photo',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /groups/{group-id}/photo`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/photo']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/photo']['parameters']
): EndpointRequest<IEndpoints['PATCH /groups/{group-id}/photo']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/groups/{group-id}/photo',
    paramDefs: [{ name: 'group-id', in: 'path' }],
    params,
    body,
  };
}
