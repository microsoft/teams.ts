import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}/parent': Operation<
    '/users/{user-id}/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}/parent',
    'delete'
  >;
  'GET /users/{user-id}/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}/parent': Operation<
    '/users/{user-id}/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}/parent',
    'get'
  >;
  'PATCH /users/{user-id}/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}/parent': Operation<
    '/users/{user-id}/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}/parent',
    'patch'
  >;
}

/**
 * `DELETE /users/{user-id}/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}/parent`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}/parent']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}/parent']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}/parent',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'sensitivityLabel-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}/parent`
 *
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}/parent']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}/parent']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}/parent',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'sensitivityLabel-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}/parent`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}/parent']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}/parent']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}/parent']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}/parent',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'sensitivityLabel-id', in: 'path' },
    ],
    params,
    body,
  };
}
