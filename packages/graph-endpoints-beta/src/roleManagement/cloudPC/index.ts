export * as resourceNamespaces from './resourceNamespaces';
export * as roleAssignments from './roleAssignments';
export * as roleDefinitions from './roleDefinitions';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /roleManagement/cloudPC': Operation<'/roleManagement/cloudPC', 'delete'>;
  'GET /roleManagement/cloudPC': Operation<'/roleManagement/cloudPC', 'get'>;
  'PATCH /roleManagement/cloudPC': Operation<'/roleManagement/cloudPC', 'patch'>;
}

/**
 * `DELETE /roleManagement/cloudPC`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /roleManagement/cloudPC']['parameters']
): EndpointRequest<IEndpoints['DELETE /roleManagement/cloudPC']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/roleManagement/cloudPC',
    paramDefs: {
      header: ['If-Match'],
    },
    params,
  };
}

/**
 * `GET /roleManagement/cloudPC`
 *
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /roleManagement/cloudPC']['parameters']
): EndpointRequest<IEndpoints['GET /roleManagement/cloudPC']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/cloudPC',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /roleManagement/cloudPC`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /roleManagement/cloudPC']['body']
): EndpointRequest<IEndpoints['PATCH /roleManagement/cloudPC']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/roleManagement/cloudPC',
    body,
  };
}
