import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}/parent': Operation<
    '/me/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}/parent',
    'delete'
  >;
  'GET /me/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}/parent': Operation<
    '/me/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}/parent',
    'get'
  >;
  'PATCH /me/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}/parent': Operation<
    '/me/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}/parent',
    'patch'
  >;
}

/**
 * `DELETE /me/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}/parent`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}/parent']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}/parent']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}/parent',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'sensitivityLabel-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}/parent`
 *
 */
export function get(
  params?: IEndpoints['GET /me/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}/parent']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}/parent']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}/parent',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'sensitivityLabel-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}/parent`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}/parent']['body'],
  params?: IEndpoints['PATCH /me/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}/parent']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}/parent']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}/parent',
    paramDefs: [{ name: 'sensitivityLabel-id', in: 'path' }],
    params,
    body,
  };
}
