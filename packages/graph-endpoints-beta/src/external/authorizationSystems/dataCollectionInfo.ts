import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /external/authorizationSystems/{authorizationSystem-id}/dataCollectionInfo': Operation<
    '/external/authorizationSystems/{authorizationSystem-id}/dataCollectionInfo',
    'delete'
  >;
  'GET /external/authorizationSystems/{authorizationSystem-id}/dataCollectionInfo': Operation<
    '/external/authorizationSystems/{authorizationSystem-id}/dataCollectionInfo',
    'get'
  >;
  'PATCH /external/authorizationSystems/{authorizationSystem-id}/dataCollectionInfo': Operation<
    '/external/authorizationSystems/{authorizationSystem-id}/dataCollectionInfo',
    'patch'
  >;
}

/**
 * `DELETE /external/authorizationSystems/{authorizationSystem-id}/dataCollectionInfo`
 *
 */
export function del(
  params?: IEndpoints['DELETE /external/authorizationSystems/{authorizationSystem-id}/dataCollectionInfo']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /external/authorizationSystems/{authorizationSystem-id}/dataCollectionInfo']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/external/authorizationSystems/{authorizationSystem-id}/dataCollectionInfo',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'authorizationSystem-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /external/authorizationSystems/{authorizationSystem-id}/dataCollectionInfo`
 *
 * Defines how and whether Permissions Management collects data from the onboarded authorization system. Supports $filter (eq) as follows:  $filter&#x3D;dataCollectionInfo/entitlements/permissionsModificationCapability and $filter&#x3D;dataCollectionInfo/entitlements/status.
 */
export function get(
  params?: IEndpoints['GET /external/authorizationSystems/{authorizationSystem-id}/dataCollectionInfo']['parameters']
): EndpointRequest<
  IEndpoints['GET /external/authorizationSystems/{authorizationSystem-id}/dataCollectionInfo']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/external/authorizationSystems/{authorizationSystem-id}/dataCollectionInfo',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'authorizationSystem-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /external/authorizationSystems/{authorizationSystem-id}/dataCollectionInfo`
 *
 */
export function update(
  body: IEndpoints['PATCH /external/authorizationSystems/{authorizationSystem-id}/dataCollectionInfo']['body'],
  params?: IEndpoints['PATCH /external/authorizationSystems/{authorizationSystem-id}/dataCollectionInfo']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /external/authorizationSystems/{authorizationSystem-id}/dataCollectionInfo']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/external/authorizationSystems/{authorizationSystem-id}/dataCollectionInfo',
    paramDefs: [{ name: 'authorizationSystem-id', in: 'path' }],
    params,
    body,
  };
}
