import type { EndpointRequest, Operation } from './../../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /identityGovernance/entitlementManagement/accessPackageResources/{accessPackageResource-id}/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource/uploadSessions/{customDataProvidedResourceUploadSession-id}': Operation<
    '/identityGovernance/entitlementManagement/accessPackageResources/{accessPackageResource-id}/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource/uploadSessions/{customDataProvidedResourceUploadSession-id}',
    'delete'
  >;
  'GET /identityGovernance/entitlementManagement/accessPackageResources/{accessPackageResource-id}/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource/uploadSessions': Operation<
    '/identityGovernance/entitlementManagement/accessPackageResources/{accessPackageResource-id}/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource/uploadSessions',
    'get'
  >;
  'GET /identityGovernance/entitlementManagement/accessPackageResources/{accessPackageResource-id}/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource/uploadSessions/{customDataProvidedResourceUploadSession-id}': Operation<
    '/identityGovernance/entitlementManagement/accessPackageResources/{accessPackageResource-id}/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource/uploadSessions/{customDataProvidedResourceUploadSession-id}',
    'get'
  >;
  'PATCH /identityGovernance/entitlementManagement/accessPackageResources/{accessPackageResource-id}/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource/uploadSessions/{customDataProvidedResourceUploadSession-id}': Operation<
    '/identityGovernance/entitlementManagement/accessPackageResources/{accessPackageResource-id}/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource/uploadSessions/{customDataProvidedResourceUploadSession-id}',
    'patch'
  >;
  'POST /identityGovernance/entitlementManagement/accessPackageResources/{accessPackageResource-id}/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource/uploadSessions': Operation<
    '/identityGovernance/entitlementManagement/accessPackageResources/{accessPackageResource-id}/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource/uploadSessions',
    'post'
  >;
  'GET /identityGovernance/entitlementManagement/accessPackageResources/{accessPackageResource-id}/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource/uploadSessions/{customDataProvidedResourceUploadSession-id}/files': Operation<
    '/identityGovernance/entitlementManagement/accessPackageResources/{accessPackageResource-id}/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource/uploadSessions/{customDataProvidedResourceUploadSession-id}/files',
    'get'
  >;
  'POST /identityGovernance/entitlementManagement/accessPackageResources/{accessPackageResource-id}/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource/uploadSessions/{customDataProvidedResourceUploadSession-id}/files': Operation<
    '/identityGovernance/entitlementManagement/accessPackageResources/{accessPackageResource-id}/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource/uploadSessions/{customDataProvidedResourceUploadSession-id}/files',
    'post'
  >;
  'GET /identityGovernance/entitlementManagement/accessPackageResources/{accessPackageResource-id}/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource/uploadSessions/{customDataProvidedResourceUploadSession-id}/files/{customDataProvidedResourceFile-name}': Operation<
    '/identityGovernance/entitlementManagement/accessPackageResources/{accessPackageResource-id}/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource/uploadSessions/{customDataProvidedResourceUploadSession-id}/files/{customDataProvidedResourceFile-name}',
    'get'
  >;
  'PATCH /identityGovernance/entitlementManagement/accessPackageResources/{accessPackageResource-id}/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource/uploadSessions/{customDataProvidedResourceUploadSession-id}/files/{customDataProvidedResourceFile-name}': Operation<
    '/identityGovernance/entitlementManagement/accessPackageResources/{accessPackageResource-id}/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource/uploadSessions/{customDataProvidedResourceUploadSession-id}/files/{customDataProvidedResourceFile-name}',
    'patch'
  >;
  'DELETE /identityGovernance/entitlementManagement/accessPackageResources/{accessPackageResource-id}/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource/uploadSessions/{customDataProvidedResourceUploadSession-id}/files/{customDataProvidedResourceFile-name}': Operation<
    '/identityGovernance/entitlementManagement/accessPackageResources/{accessPackageResource-id}/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource/uploadSessions/{customDataProvidedResourceUploadSession-id}/files/{customDataProvidedResourceFile-name}',
    'delete'
  >;
}

/**
 * `DELETE /identityGovernance/entitlementManagement/accessPackageResources/{accessPackageResource-id}/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource/uploadSessions/{customDataProvidedResourceUploadSession-id}`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /identityGovernance/entitlementManagement/accessPackageResources/{accessPackageResource-id}/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource/uploadSessions/{customDataProvidedResourceUploadSession-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /identityGovernance/entitlementManagement/accessPackageResources/{accessPackageResource-id}/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource/uploadSessions/{customDataProvidedResourceUploadSession-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/identityGovernance/entitlementManagement/accessPackageResources/{accessPackageResource-id}/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource/uploadSessions/{customDataProvidedResourceUploadSession-id}',
    paramDefs: {
      header: ['If-Match'],
      path: [
        'accessPackageResource-id',
        'accessPackageResourceScope-id',
        'customDataProvidedResourceUploadSession-id',
      ],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/entitlementManagement/accessPackageResources/{accessPackageResource-id}/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource/uploadSessions`
 *
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageResources/{accessPackageResource-id}/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource/uploadSessions']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageResources/{accessPackageResource-id}/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource/uploadSessions']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identityGovernance/entitlementManagement/accessPackageResources/{accessPackageResource-id}/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource/uploadSessions',
    paramDefs: {
      path: ['accessPackageResource-id', 'accessPackageResourceScope-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/entitlementManagement/accessPackageResources/{accessPackageResource-id}/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource/uploadSessions/{customDataProvidedResourceUploadSession-id}`
 *
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageResources/{accessPackageResource-id}/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource/uploadSessions/{customDataProvidedResourceUploadSession-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageResources/{accessPackageResource-id}/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource/uploadSessions/{customDataProvidedResourceUploadSession-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identityGovernance/entitlementManagement/accessPackageResources/{accessPackageResource-id}/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource/uploadSessions/{customDataProvidedResourceUploadSession-id}',
    paramDefs: {
      path: [
        'accessPackageResource-id',
        'accessPackageResourceScope-id',
        'customDataProvidedResourceUploadSession-id',
      ],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /identityGovernance/entitlementManagement/accessPackageResources/{accessPackageResource-id}/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource/uploadSessions/{customDataProvidedResourceUploadSession-id}`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /identityGovernance/entitlementManagement/accessPackageResources/{accessPackageResource-id}/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource/uploadSessions/{customDataProvidedResourceUploadSession-id}']['body'],
  params?: IEndpoints['PATCH /identityGovernance/entitlementManagement/accessPackageResources/{accessPackageResource-id}/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource/uploadSessions/{customDataProvidedResourceUploadSession-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /identityGovernance/entitlementManagement/accessPackageResources/{accessPackageResource-id}/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource/uploadSessions/{customDataProvidedResourceUploadSession-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/identityGovernance/entitlementManagement/accessPackageResources/{accessPackageResource-id}/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource/uploadSessions/{customDataProvidedResourceUploadSession-id}',
    paramDefs: {
      path: [
        'accessPackageResource-id',
        'accessPackageResourceScope-id',
        'customDataProvidedResourceUploadSession-id',
      ],
    },
    params,
    body,
  };
}

/**
 * `POST /identityGovernance/entitlementManagement/accessPackageResources/{accessPackageResource-id}/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource/uploadSessions`
 *
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /identityGovernance/entitlementManagement/accessPackageResources/{accessPackageResource-id}/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource/uploadSessions']['body'],
  params?: IEndpoints['POST /identityGovernance/entitlementManagement/accessPackageResources/{accessPackageResource-id}/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource/uploadSessions']['parameters']
): EndpointRequest<
  IEndpoints['POST /identityGovernance/entitlementManagement/accessPackageResources/{accessPackageResource-id}/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource/uploadSessions']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/identityGovernance/entitlementManagement/accessPackageResources/{accessPackageResource-id}/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource/uploadSessions',
    paramDefs: {
      path: ['accessPackageResource-id', 'accessPackageResourceScope-id'],
    },
    params,
    body,
  };
}

export const files = {
  /**
   * `GET /identityGovernance/entitlementManagement/accessPackageResources/{accessPackageResource-id}/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource/uploadSessions/{customDataProvidedResourceUploadSession-id}/files`
   *
   * @deprecated
   */
  list: function list(
    params?: IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageResources/{accessPackageResource-id}/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource/uploadSessions/{customDataProvidedResourceUploadSession-id}/files']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageResources/{accessPackageResource-id}/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource/uploadSessions/{customDataProvidedResourceUploadSession-id}/files']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/identityGovernance/entitlementManagement/accessPackageResources/{accessPackageResource-id}/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource/uploadSessions/{customDataProvidedResourceUploadSession-id}/files',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: [
          'accessPackageResource-id',
          'accessPackageResourceScope-id',
          'customDataProvidedResourceUploadSession-id',
        ],
      },
      params,
    };
  },
  /**
   * `POST /identityGovernance/entitlementManagement/accessPackageResources/{accessPackageResource-id}/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource/uploadSessions/{customDataProvidedResourceUploadSession-id}/files`
   *
   * @deprecated
   */
  create: function create(
    body: IEndpoints['POST /identityGovernance/entitlementManagement/accessPackageResources/{accessPackageResource-id}/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource/uploadSessions/{customDataProvidedResourceUploadSession-id}/files']['body'],
    params?: IEndpoints['POST /identityGovernance/entitlementManagement/accessPackageResources/{accessPackageResource-id}/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource/uploadSessions/{customDataProvidedResourceUploadSession-id}/files']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /identityGovernance/entitlementManagement/accessPackageResources/{accessPackageResource-id}/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource/uploadSessions/{customDataProvidedResourceUploadSession-id}/files']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/identityGovernance/entitlementManagement/accessPackageResources/{accessPackageResource-id}/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource/uploadSessions/{customDataProvidedResourceUploadSession-id}/files',
      paramDefs: {
        path: [
          'accessPackageResource-id',
          'accessPackageResourceScope-id',
          'customDataProvidedResourceUploadSession-id',
        ],
      },
      params,
      body,
    };
  },
  /**
   * `GET /identityGovernance/entitlementManagement/accessPackageResources/{accessPackageResource-id}/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource/uploadSessions/{customDataProvidedResourceUploadSession-id}/files/{customDataProvidedResourceFile-name}`
   *
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageResources/{accessPackageResource-id}/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource/uploadSessions/{customDataProvidedResourceUploadSession-id}/files/{customDataProvidedResourceFile-name}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageResources/{accessPackageResource-id}/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource/uploadSessions/{customDataProvidedResourceUploadSession-id}/files/{customDataProvidedResourceFile-name}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/identityGovernance/entitlementManagement/accessPackageResources/{accessPackageResource-id}/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource/uploadSessions/{customDataProvidedResourceUploadSession-id}/files/{customDataProvidedResourceFile-name}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: [
          'accessPackageResource-id',
          'accessPackageResourceScope-id',
          'customDataProvidedResourceUploadSession-id',
          'customDataProvidedResourceFile-name',
        ],
      },
      params,
    };
  },
  /**
   * `PATCH /identityGovernance/entitlementManagement/accessPackageResources/{accessPackageResource-id}/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource/uploadSessions/{customDataProvidedResourceUploadSession-id}/files/{customDataProvidedResourceFile-name}`
   *
   * @deprecated
   */
  update: function update(
    body: IEndpoints['PATCH /identityGovernance/entitlementManagement/accessPackageResources/{accessPackageResource-id}/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource/uploadSessions/{customDataProvidedResourceUploadSession-id}/files/{customDataProvidedResourceFile-name}']['body'],
    params?: IEndpoints['PATCH /identityGovernance/entitlementManagement/accessPackageResources/{accessPackageResource-id}/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource/uploadSessions/{customDataProvidedResourceUploadSession-id}/files/{customDataProvidedResourceFile-name}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /identityGovernance/entitlementManagement/accessPackageResources/{accessPackageResource-id}/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource/uploadSessions/{customDataProvidedResourceUploadSession-id}/files/{customDataProvidedResourceFile-name}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/identityGovernance/entitlementManagement/accessPackageResources/{accessPackageResource-id}/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource/uploadSessions/{customDataProvidedResourceUploadSession-id}/files/{customDataProvidedResourceFile-name}',
      paramDefs: {
        path: [
          'accessPackageResource-id',
          'accessPackageResourceScope-id',
          'customDataProvidedResourceUploadSession-id',
          'customDataProvidedResourceFile-name',
        ],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /identityGovernance/entitlementManagement/accessPackageResources/{accessPackageResource-id}/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource/uploadSessions/{customDataProvidedResourceUploadSession-id}/files/{customDataProvidedResourceFile-name}`
   *
   * @deprecated
   */
  del: function del(
    params?: IEndpoints['DELETE /identityGovernance/entitlementManagement/accessPackageResources/{accessPackageResource-id}/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource/uploadSessions/{customDataProvidedResourceUploadSession-id}/files/{customDataProvidedResourceFile-name}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /identityGovernance/entitlementManagement/accessPackageResources/{accessPackageResource-id}/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource/uploadSessions/{customDataProvidedResourceUploadSession-id}/files/{customDataProvidedResourceFile-name}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/identityGovernance/entitlementManagement/accessPackageResources/{accessPackageResource-id}/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource/uploadSessions/{customDataProvidedResourceUploadSession-id}/files/{customDataProvidedResourceFile-name}',
      paramDefs: {
        header: ['If-Match'],
        path: [
          'accessPackageResource-id',
          'accessPackageResourceScope-id',
          'customDataProvidedResourceUploadSession-id',
          'customDataProvidedResourceFile-name',
        ],
      },
      params,
    };
  },
};
