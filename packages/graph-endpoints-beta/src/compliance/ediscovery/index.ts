export * as cases from './cases';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /compliance/ediscovery': Operation<'/compliance/ediscovery', 'delete'>;
  'GET /compliance/ediscovery': Operation<'/compliance/ediscovery', 'get'>;
  'PATCH /compliance/ediscovery': Operation<'/compliance/ediscovery', 'patch'>;
}

/**
 * `DELETE /compliance/ediscovery`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /compliance/ediscovery']['parameters']
): EndpointRequest<IEndpoints['DELETE /compliance/ediscovery']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/compliance/ediscovery',
    paramDefs: {
      header: ['If-Match'],
    },
    params,
  };
}

/**
 * `GET /compliance/ediscovery`
 *
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /compliance/ediscovery']['parameters']
): EndpointRequest<IEndpoints['GET /compliance/ediscovery']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/compliance/ediscovery',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /compliance/ediscovery`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /compliance/ediscovery']['body']
): EndpointRequest<IEndpoints['PATCH /compliance/ediscovery']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/compliance/ediscovery',
    body,
  };
}
