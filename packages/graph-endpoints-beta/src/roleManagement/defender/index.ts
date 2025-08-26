export * as customAppScopes from './customAppScopes';
export * as resourceNamespaces from './resourceNamespaces';
export * as roleAssignments from './roleAssignments';
export * as roleDefinitions from './roleDefinitions';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /roleManagement/defender': Operation<'/roleManagement/defender', 'delete'>;
  'GET /roleManagement/defender': Operation<'/roleManagement/defender', 'get'>;
  'PATCH /roleManagement/defender': Operation<'/roleManagement/defender', 'patch'>;
}

/**
 * `DELETE /roleManagement/defender`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /roleManagement/defender']['parameters']
): EndpointRequest<IEndpoints['DELETE /roleManagement/defender']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/roleManagement/defender',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /roleManagement/defender`
 *
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /roleManagement/defender']['parameters']
): EndpointRequest<IEndpoints['GET /roleManagement/defender']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/defender',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /roleManagement/defender`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /roleManagement/defender']['body'],
  params?: IEndpoints['PATCH /roleManagement/defender']['parameters']
): EndpointRequest<IEndpoints['PATCH /roleManagement/defender']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/roleManagement/defender',
    paramDefs: [],
    params,
    body,
  };
}
