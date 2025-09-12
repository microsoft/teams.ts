export * as groups from './groups';
export * as sets from './sets';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /sites/{site-id}/termStore': Operation<'/sites/{site-id}/termStore', 'delete'>;
  'GET /sites/{site-id}/termStore': Operation<'/sites/{site-id}/termStore', 'get'>;
  'PATCH /sites/{site-id}/termStore': Operation<'/sites/{site-id}/termStore', 'patch'>;
}

/**
 * `DELETE /sites/{site-id}/termStore`
 *
 */
export function del(
  params?: IEndpoints['DELETE /sites/{site-id}/termStore']['parameters']
): EndpointRequest<IEndpoints['DELETE /sites/{site-id}/termStore']['response']> {
  return {
    method: 'delete',
    path: '/sites/{site-id}/termStore',
    paramDefs: {
      header: ['If-Match'],
      path: ['site-id'],
    },
    params,
  };
}

/**
 * `GET /sites/{site-id}/termStore`
 *
 * Read the properties and relationships of a store object.
 */
export function get(
  params?: IEndpoints['GET /sites/{site-id}/termStore']['parameters']
): EndpointRequest<IEndpoints['GET /sites/{site-id}/termStore']['response']> {
  return {
    method: 'get',
    path: '/sites/{site-id}/termStore',
    paramDefs: {
      path: ['site-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /sites/{site-id}/termStore`
 *
 * Update the properties of a store object.
 */
export function update(
  body: IEndpoints['PATCH /sites/{site-id}/termStore']['body'],
  params?: IEndpoints['PATCH /sites/{site-id}/termStore']['parameters']
): EndpointRequest<IEndpoints['PATCH /sites/{site-id}/termStore']['response']> {
  return {
    method: 'patch',
    path: '/sites/{site-id}/termStore',
    paramDefs: {
      path: ['site-id'],
    },
    params,
    body,
  };
}
