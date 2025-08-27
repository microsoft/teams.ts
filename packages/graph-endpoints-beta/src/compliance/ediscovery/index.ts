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
    paramDefs: [{ name: 'If-Match', in: 'header' }],
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
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /compliance/ediscovery`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /compliance/ediscovery']['body'],
  params?: IEndpoints['PATCH /compliance/ediscovery']['parameters']
): EndpointRequest<IEndpoints['PATCH /compliance/ediscovery']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/compliance/ediscovery',
    paramDefs: [],
    params,
    body,
  };
}
