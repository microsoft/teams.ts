import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /groups/{group-id}/checkGrantedPermissionsForApp': Operation<
    '/groups/{group-id}/checkGrantedPermissionsForApp',
    'post'
  >;
}

/**
 * `POST /groups/{group-id}/checkGrantedPermissionsForApp`
 *
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/checkGrantedPermissionsForApp']['body'],
  params?: IEndpoints['POST /groups/{group-id}/checkGrantedPermissionsForApp']['parameters']
): EndpointRequest<
  IEndpoints['POST /groups/{group-id}/checkGrantedPermissionsForApp']['response']
> {
  return {
    method: 'post',
    path: '/groups/{group-id}/checkGrantedPermissionsForApp',
    paramDefs: [{ name: 'group-id', in: 'path' }],
    params,
    body,
  };
}
