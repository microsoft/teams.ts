export * as customAppScopes from './customAppScopes';
export * as resourceNamespaces from './resourceNamespaces';
export * as roleAssignments from './roleAssignments';
export * as roleDefinitions from './roleDefinitions';
export * as transitiveRoleAssignments from './transitiveRoleAssignments';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /roleManagement/exchange': Operation<'/roleManagement/exchange', 'delete'>;
  'GET /roleManagement/exchange': Operation<'/roleManagement/exchange', 'get'>;
  'PATCH /roleManagement/exchange': Operation<'/roleManagement/exchange', 'patch'>;
}

/**
 * `DELETE /roleManagement/exchange`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /roleManagement/exchange']['parameters']
): EndpointRequest<IEndpoints['DELETE /roleManagement/exchange']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/roleManagement/exchange',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /roleManagement/exchange`
 *
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /roleManagement/exchange']['parameters']
): EndpointRequest<IEndpoints['GET /roleManagement/exchange']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/exchange',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /roleManagement/exchange`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /roleManagement/exchange']['body'],
  params?: IEndpoints['PATCH /roleManagement/exchange']['parameters']
): EndpointRequest<IEndpoints['PATCH /roleManagement/exchange']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/roleManagement/exchange',
    paramDefs: [],
    params,
    body,
  };
}
