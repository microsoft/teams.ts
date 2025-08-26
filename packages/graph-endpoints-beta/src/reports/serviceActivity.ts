import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /reports/serviceActivity': Operation<'/reports/serviceActivity', 'delete'>;
  'GET /reports/serviceActivity': Operation<'/reports/serviceActivity', 'get'>;
  'PATCH /reports/serviceActivity': Operation<'/reports/serviceActivity', 'patch'>;
}

/**
 * `DELETE /reports/serviceActivity`
 *
 */
export function del(
  params?: IEndpoints['DELETE /reports/serviceActivity']['parameters']
): EndpointRequest<IEndpoints['DELETE /reports/serviceActivity']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/reports/serviceActivity',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /reports/serviceActivity`
 *
 * Reports that relate to tenant-level authentication activities in Microsoft Entra.
 */
export function get(
  params?: IEndpoints['GET /reports/serviceActivity']['parameters']
): EndpointRequest<IEndpoints['GET /reports/serviceActivity']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/reports/serviceActivity',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /reports/serviceActivity`
 *
 */
export function update(
  body: IEndpoints['PATCH /reports/serviceActivity']['body'],
  params?: IEndpoints['PATCH /reports/serviceActivity']['parameters']
): EndpointRequest<IEndpoints['PATCH /reports/serviceActivity']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/reports/serviceActivity',
    paramDefs: [],
    params,
    body,
  };
}
