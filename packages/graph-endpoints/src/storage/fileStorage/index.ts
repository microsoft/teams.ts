export * as containers from './containers';
export * as deletedContainers from './deletedContainers';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /storage/fileStorage': Operation<'/storage/fileStorage', 'delete'>;
  'GET /storage/fileStorage': Operation<'/storage/fileStorage', 'get'>;
  'PATCH /storage/fileStorage': Operation<'/storage/fileStorage', 'patch'>;
}

/**
 * `DELETE /storage/fileStorage`
 *
 */
export function del(
  params?: IEndpoints['DELETE /storage/fileStorage']['parameters']
): EndpointRequest<IEndpoints['DELETE /storage/fileStorage']['response']> {
  return {
    method: 'delete',
    path: '/storage/fileStorage',
    paramDefs: {
      header: ['If-Match'],
    },
    params,
  };
}

/**
 * `GET /storage/fileStorage`
 *
 */
export function get(
  params?: IEndpoints['GET /storage/fileStorage']['parameters']
): EndpointRequest<IEndpoints['GET /storage/fileStorage']['response']> {
  return {
    method: 'get',
    path: '/storage/fileStorage',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /storage/fileStorage`
 *
 */
export function update(
  body: IEndpoints['PATCH /storage/fileStorage']['body']
): EndpointRequest<IEndpoints['PATCH /storage/fileStorage']['response']> {
  return {
    method: 'patch',
    path: '/storage/fileStorage',
    body,
  };
}
