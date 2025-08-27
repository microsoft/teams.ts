import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/informationProtection/sensitivityLabels/{sensitivityLabel-id}/parent': Operation<
    '/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}/parent',
    'delete'
  >;
  'GET /security/informationProtection/sensitivityLabels/{sensitivityLabel-id}/parent': Operation<
    '/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}/parent',
    'get'
  >;
  'PATCH /security/informationProtection/sensitivityLabels/{sensitivityLabel-id}/parent': Operation<
    '/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}/parent',
    'patch'
  >;
}

/**
 * `DELETE /security/informationProtection/sensitivityLabels/{sensitivityLabel-id}/parent`
 *
 */
export function del(
  params?: IEndpoints['DELETE /security/informationProtection/sensitivityLabels/{sensitivityLabel-id}/parent']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /security/informationProtection/sensitivityLabels/{sensitivityLabel-id}/parent']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}/parent',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'sensitivityLabel-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /security/informationProtection/sensitivityLabels/{sensitivityLabel-id}/parent`
 *
 */
export function get(
  params?: IEndpoints['GET /security/informationProtection/sensitivityLabels/{sensitivityLabel-id}/parent']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/informationProtection/sensitivityLabels/{sensitivityLabel-id}/parent']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}/parent',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'sensitivityLabel-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /security/informationProtection/sensitivityLabels/{sensitivityLabel-id}/parent`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/informationProtection/sensitivityLabels/{sensitivityLabel-id}/parent']['body'],
  params?: IEndpoints['PATCH /security/informationProtection/sensitivityLabels/{sensitivityLabel-id}/parent']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /security/informationProtection/sensitivityLabels/{sensitivityLabel-id}/parent']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}/parent',
    paramDefs: [{ name: 'sensitivityLabel-id', in: 'path' }],
    params,
    body,
  };
}
