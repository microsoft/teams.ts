import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /external/authorizationSystems/{authorizationSystem-id}': Operation<
    '/external/authorizationSystems/{authorizationSystem-id}',
    'delete'
  >;
  'GET /external/authorizationSystems': Operation<'/external/authorizationSystems', 'get'>;
  'GET /external/authorizationSystems/{authorizationSystem-id}': Operation<
    '/external/authorizationSystems/{authorizationSystem-id}',
    'get'
  >;
  'PATCH /external/authorizationSystems/{authorizationSystem-id}': Operation<
    '/external/authorizationSystems/{authorizationSystem-id}',
    'patch'
  >;
  'POST /external/authorizationSystems': Operation<'/external/authorizationSystems', 'post'>;
  'GET /external/authorizationSystems/{authorizationSystem-id}/dataCollectionInfo': Operation<
    '/external/authorizationSystems/{authorizationSystem-id}/dataCollectionInfo',
    'get'
  >;
  'PATCH /external/authorizationSystems/{authorizationSystem-id}/dataCollectionInfo': Operation<
    '/external/authorizationSystems/{authorizationSystem-id}/dataCollectionInfo',
    'patch'
  >;
  'DELETE /external/authorizationSystems/{authorizationSystem-id}/dataCollectionInfo': Operation<
    '/external/authorizationSystems/{authorizationSystem-id}/dataCollectionInfo',
    'delete'
  >;
}

/**
 * `DELETE /external/authorizationSystems/{authorizationSystem-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /external/authorizationSystems/{authorizationSystem-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /external/authorizationSystems/{authorizationSystem-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/external/authorizationSystems/{authorizationSystem-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['authorizationSystem-id'],
    },
    params,
  };
}

/**
 * `GET /external/authorizationSystems`
 *
 * List the authorizationSystem objects onboarded to Permissions Management and their properties.
 */
export function list(
  params?: IEndpoints['GET /external/authorizationSystems']['parameters']
): EndpointRequest<IEndpoints['GET /external/authorizationSystems']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/external/authorizationSystems',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /external/authorizationSystems/{authorizationSystem-id}`
 *
 * Represents an onboarded Amazon Web Services (AWS) account, Azure subscription, or Google Cloud Platform (GCP) project that Microsoft Entra Permissions Management collects and analyzes permissions and actions on.
 */
export function get(
  params?: IEndpoints['GET /external/authorizationSystems/{authorizationSystem-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /external/authorizationSystems/{authorizationSystem-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/external/authorizationSystems/{authorizationSystem-id}',
    paramDefs: {
      path: ['authorizationSystem-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /external/authorizationSystems/{authorizationSystem-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /external/authorizationSystems/{authorizationSystem-id}']['body'],
  params?: IEndpoints['PATCH /external/authorizationSystems/{authorizationSystem-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /external/authorizationSystems/{authorizationSystem-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/external/authorizationSystems/{authorizationSystem-id}',
    paramDefs: {
      path: ['authorizationSystem-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /external/authorizationSystems`
 *
 */
export function create(
  body: IEndpoints['POST /external/authorizationSystems']['body']
): EndpointRequest<IEndpoints['POST /external/authorizationSystems']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/external/authorizationSystems',
    body,
  };
}

export const dataCollectionInfo = {
  /**
   * `GET /external/authorizationSystems/{authorizationSystem-id}/dataCollectionInfo`
   *
   * Defines how and whether Permissions Management collects data from the onboarded authorization system. Supports $filter (eq) as follows:  $filter&#x3D;dataCollectionInfo/entitlements/permissionsModificationCapability and $filter&#x3D;dataCollectionInfo/entitlements/status.
   */
  get: function get(
    params?: IEndpoints['GET /external/authorizationSystems/{authorizationSystem-id}/dataCollectionInfo']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /external/authorizationSystems/{authorizationSystem-id}/dataCollectionInfo']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/external/authorizationSystems/{authorizationSystem-id}/dataCollectionInfo',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['authorizationSystem-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /external/authorizationSystems/{authorizationSystem-id}/dataCollectionInfo`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /external/authorizationSystems/{authorizationSystem-id}/dataCollectionInfo']['body'],
    params?: IEndpoints['PATCH /external/authorizationSystems/{authorizationSystem-id}/dataCollectionInfo']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /external/authorizationSystems/{authorizationSystem-id}/dataCollectionInfo']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/external/authorizationSystems/{authorizationSystem-id}/dataCollectionInfo',
      paramDefs: {
        path: ['authorizationSystem-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /external/authorizationSystems/{authorizationSystem-id}/dataCollectionInfo`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /external/authorizationSystems/{authorizationSystem-id}/dataCollectionInfo']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /external/authorizationSystems/{authorizationSystem-id}/dataCollectionInfo']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/external/authorizationSystems/{authorizationSystem-id}/dataCollectionInfo',
      paramDefs: {
        header: ['If-Match'],
        path: ['authorizationSystem-id'],
      },
      params,
    };
  },
};
