import type { EndpointRequest, Operation } from './../../../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /identityGovernance/entitlementManagement/resources/{accessPackageResource-id}/scopes/{accessPackageResourceScope-id}/resource/roles/{accessPackageResourceRole-id}/resource': Operation<
    '/identityGovernance/entitlementManagement/resources/{accessPackageResource-id}/scopes/{accessPackageResourceScope-id}/resource/roles/{accessPackageResourceRole-id}/resource',
    'delete'
  >;
  'GET /identityGovernance/entitlementManagement/resources/{accessPackageResource-id}/scopes/{accessPackageResourceScope-id}/resource/roles/{accessPackageResourceRole-id}/resource': Operation<
    '/identityGovernance/entitlementManagement/resources/{accessPackageResource-id}/scopes/{accessPackageResourceScope-id}/resource/roles/{accessPackageResourceRole-id}/resource',
    'get'
  >;
  'PATCH /identityGovernance/entitlementManagement/resources/{accessPackageResource-id}/scopes/{accessPackageResourceScope-id}/resource/roles/{accessPackageResourceRole-id}/resource': Operation<
    '/identityGovernance/entitlementManagement/resources/{accessPackageResource-id}/scopes/{accessPackageResourceScope-id}/resource/roles/{accessPackageResourceRole-id}/resource',
    'patch'
  >;
  'GET /identityGovernance/entitlementManagement/resources/{accessPackageResource-id}/scopes/{accessPackageResourceScope-id}/resource/roles/{accessPackageResourceRole-id}/resource/environment': Operation<
    '/identityGovernance/entitlementManagement/resources/{accessPackageResource-id}/scopes/{accessPackageResourceScope-id}/resource/roles/{accessPackageResourceRole-id}/resource/environment',
    'get'
  >;
  'POST /identityGovernance/entitlementManagement/resources/{accessPackageResource-id}/scopes/{accessPackageResourceScope-id}/resource/roles/{accessPackageResourceRole-id}/resource/refresh': Operation<
    '/identityGovernance/entitlementManagement/resources/{accessPackageResource-id}/scopes/{accessPackageResourceScope-id}/resource/roles/{accessPackageResourceRole-id}/resource/refresh',
    'post'
  >;
}

/**
 * `DELETE /identityGovernance/entitlementManagement/resources/{accessPackageResource-id}/scopes/{accessPackageResourceScope-id}/resource/roles/{accessPackageResourceRole-id}/resource`
 *
 */
export function del(
  params?: IEndpoints['DELETE /identityGovernance/entitlementManagement/resources/{accessPackageResource-id}/scopes/{accessPackageResourceScope-id}/resource/roles/{accessPackageResourceRole-id}/resource']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /identityGovernance/entitlementManagement/resources/{accessPackageResource-id}/scopes/{accessPackageResourceScope-id}/resource/roles/{accessPackageResourceRole-id}/resource']['response']
> {
  return {
    method: 'delete',
    path: '/identityGovernance/entitlementManagement/resources/{accessPackageResource-id}/scopes/{accessPackageResourceScope-id}/resource/roles/{accessPackageResourceRole-id}/resource',
    paramDefs: {
      header: ['If-Match'],
      path: [
        'accessPackageResource-id',
        'accessPackageResourceScope-id',
        'accessPackageResourceRole-id',
      ],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/entitlementManagement/resources/{accessPackageResource-id}/scopes/{accessPackageResourceScope-id}/resource/roles/{accessPackageResourceRole-id}/resource`
 *
 */
export function get(
  params?: IEndpoints['GET /identityGovernance/entitlementManagement/resources/{accessPackageResource-id}/scopes/{accessPackageResourceScope-id}/resource/roles/{accessPackageResourceRole-id}/resource']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/entitlementManagement/resources/{accessPackageResource-id}/scopes/{accessPackageResourceScope-id}/resource/roles/{accessPackageResourceRole-id}/resource']['response']
> {
  return {
    method: 'get',
    path: '/identityGovernance/entitlementManagement/resources/{accessPackageResource-id}/scopes/{accessPackageResourceScope-id}/resource/roles/{accessPackageResourceRole-id}/resource',
    paramDefs: {
      path: [
        'accessPackageResource-id',
        'accessPackageResourceScope-id',
        'accessPackageResourceRole-id',
      ],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /identityGovernance/entitlementManagement/resources/{accessPackageResource-id}/scopes/{accessPackageResourceScope-id}/resource/roles/{accessPackageResourceRole-id}/resource`
 *
 */
export function update(
  body: IEndpoints['PATCH /identityGovernance/entitlementManagement/resources/{accessPackageResource-id}/scopes/{accessPackageResourceScope-id}/resource/roles/{accessPackageResourceRole-id}/resource']['body'],
  params?: IEndpoints['PATCH /identityGovernance/entitlementManagement/resources/{accessPackageResource-id}/scopes/{accessPackageResourceScope-id}/resource/roles/{accessPackageResourceRole-id}/resource']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /identityGovernance/entitlementManagement/resources/{accessPackageResource-id}/scopes/{accessPackageResourceScope-id}/resource/roles/{accessPackageResourceRole-id}/resource']['response']
> {
  return {
    method: 'patch',
    path: '/identityGovernance/entitlementManagement/resources/{accessPackageResource-id}/scopes/{accessPackageResourceScope-id}/resource/roles/{accessPackageResourceRole-id}/resource',
    paramDefs: {
      path: [
        'accessPackageResource-id',
        'accessPackageResourceScope-id',
        'accessPackageResourceRole-id',
      ],
    },
    params,
    body,
  };
}

export const environment = {
  /**
   * `GET /identityGovernance/entitlementManagement/resources/{accessPackageResource-id}/scopes/{accessPackageResourceScope-id}/resource/roles/{accessPackageResourceRole-id}/resource/environment`
   *
   * Contains the environment information for the resource. This can be set using either the @odata.bind annotation or the environment&#x27;s originId.Supports $expand.
   */
  get: function get(
    params?: IEndpoints['GET /identityGovernance/entitlementManagement/resources/{accessPackageResource-id}/scopes/{accessPackageResourceScope-id}/resource/roles/{accessPackageResourceRole-id}/resource/environment']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/entitlementManagement/resources/{accessPackageResource-id}/scopes/{accessPackageResourceScope-id}/resource/roles/{accessPackageResourceRole-id}/resource/environment']['response']
  > {
    return {
      method: 'get',
      path: '/identityGovernance/entitlementManagement/resources/{accessPackageResource-id}/scopes/{accessPackageResourceScope-id}/resource/roles/{accessPackageResourceRole-id}/resource/environment',
      paramDefs: {
        query: ['$select', '$expand'],
        path: [
          'accessPackageResource-id',
          'accessPackageResourceScope-id',
          'accessPackageResourceRole-id',
        ],
      },
      params,
    };
  },
};

export const refresh = {
  /**
   * `POST /identityGovernance/entitlementManagement/resources/{accessPackageResource-id}/scopes/{accessPackageResourceScope-id}/resource/roles/{accessPackageResourceRole-id}/resource/refresh`
   *
   */
  create: function create(
    params?: IEndpoints['POST /identityGovernance/entitlementManagement/resources/{accessPackageResource-id}/scopes/{accessPackageResourceScope-id}/resource/roles/{accessPackageResourceRole-id}/resource/refresh']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /identityGovernance/entitlementManagement/resources/{accessPackageResource-id}/scopes/{accessPackageResourceScope-id}/resource/roles/{accessPackageResourceRole-id}/resource/refresh']['response']
  > {
    return {
      method: 'post',
      path: '/identityGovernance/entitlementManagement/resources/{accessPackageResource-id}/scopes/{accessPackageResourceScope-id}/resource/roles/{accessPackageResourceRole-id}/resource/refresh',
      paramDefs: {
        path: [
          'accessPackageResource-id',
          'accessPackageResourceScope-id',
          'accessPackageResourceRole-id',
        ],
      },
      params,
    };
  },
};
