export * as resourceNamespaces from './resourceNamespaces';
export * as roleAssignments from './roleAssignments';
export * as roleDefinitions from './roleDefinitions';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /roleManagement/deviceManagement': Operation<
    '/roleManagement/deviceManagement',
    'delete'
  >;
  'GET /roleManagement/deviceManagement': Operation<'/roleManagement/deviceManagement', 'get'>;
  'PATCH /roleManagement/deviceManagement': Operation<'/roleManagement/deviceManagement', 'patch'>;
}

/**
 * `DELETE /roleManagement/deviceManagement`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /roleManagement/deviceManagement']['parameters']
): EndpointRequest<IEndpoints['DELETE /roleManagement/deviceManagement']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/roleManagement/deviceManagement',
    paramDefs: {
      header: ['If-Match'],
    },
    params,
  };
}

/**
 * `GET /roleManagement/deviceManagement`
 *
 * The RbacApplication for Device Management
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /roleManagement/deviceManagement']['parameters']
): EndpointRequest<IEndpoints['GET /roleManagement/deviceManagement']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/deviceManagement',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /roleManagement/deviceManagement`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /roleManagement/deviceManagement']['body']
): EndpointRequest<IEndpoints['PATCH /roleManagement/deviceManagement']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/roleManagement/deviceManagement',
    body,
  };
}
