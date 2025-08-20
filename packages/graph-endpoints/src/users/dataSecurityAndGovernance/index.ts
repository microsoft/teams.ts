export * as activities from './activities';
export * as processContent from './processContent';
export * as protectionScopes from './protectionScopes';
export * as sensitivityLabels from './sensitivityLabels';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/dataSecurityAndGovernance': Operation<
    '/users/{user-id}/dataSecurityAndGovernance',
    'delete'
  >;
  'GET /users/{user-id}/dataSecurityAndGovernance': Operation<
    '/users/{user-id}/dataSecurityAndGovernance',
    'get'
  >;
  'PATCH /users/{user-id}/dataSecurityAndGovernance': Operation<
    '/users/{user-id}/dataSecurityAndGovernance',
    'patch'
  >;
}

/**
 * `DELETE /users/{user-id}/dataSecurityAndGovernance`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/dataSecurityAndGovernance']['parameters']
): EndpointRequest<IEndpoints['DELETE /users/{user-id}/dataSecurityAndGovernance']['response']> {
  return {
    method: 'delete',
    path: '/users/{user-id}/dataSecurityAndGovernance',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/dataSecurityAndGovernance`
 *
 * The data security and governance settings for the user. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/dataSecurityAndGovernance']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/dataSecurityAndGovernance']['response']> {
  return {
    method: 'get',
    path: '/users/{user-id}/dataSecurityAndGovernance',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/dataSecurityAndGovernance`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/dataSecurityAndGovernance']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/dataSecurityAndGovernance']['parameters']
): EndpointRequest<IEndpoints['PATCH /users/{user-id}/dataSecurityAndGovernance']['response']> {
  return {
    method: 'patch',
    path: '/users/{user-id}/dataSecurityAndGovernance',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
