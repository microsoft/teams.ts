import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /identityGovernance/termsOfUse/agreements/{agreement-id}/files/{agreementFileLocalization-id}': Operation<
    '/identityGovernance/termsOfUse/agreements/{agreement-id}/files/{agreementFileLocalization-id}',
    'delete'
  >;
  'GET /identityGovernance/termsOfUse/agreements/{agreement-id}/files': Operation<
    '/identityGovernance/termsOfUse/agreements/{agreement-id}/files',
    'get'
  >;
  'GET /identityGovernance/termsOfUse/agreements/{agreement-id}/files/{agreementFileLocalization-id}': Operation<
    '/identityGovernance/termsOfUse/agreements/{agreement-id}/files/{agreementFileLocalization-id}',
    'get'
  >;
  'PATCH /identityGovernance/termsOfUse/agreements/{agreement-id}/files/{agreementFileLocalization-id}': Operation<
    '/identityGovernance/termsOfUse/agreements/{agreement-id}/files/{agreementFileLocalization-id}',
    'patch'
  >;
  'POST /identityGovernance/termsOfUse/agreements/{agreement-id}/files': Operation<
    '/identityGovernance/termsOfUse/agreements/{agreement-id}/files',
    'post'
  >;
  'GET /identityGovernance/termsOfUse/agreements/{agreement-id}/files/{agreementFileLocalization-id}/versions': Operation<
    '/identityGovernance/termsOfUse/agreements/{agreement-id}/files/{agreementFileLocalization-id}/versions',
    'get'
  >;
  'POST /identityGovernance/termsOfUse/agreements/{agreement-id}/files/{agreementFileLocalization-id}/versions': Operation<
    '/identityGovernance/termsOfUse/agreements/{agreement-id}/files/{agreementFileLocalization-id}/versions',
    'post'
  >;
  'GET /identityGovernance/termsOfUse/agreements/{agreement-id}/files/{agreementFileLocalization-id}/versions/{agreementFileVersion-id}': Operation<
    '/identityGovernance/termsOfUse/agreements/{agreement-id}/files/{agreementFileLocalization-id}/versions/{agreementFileVersion-id}',
    'get'
  >;
  'PATCH /identityGovernance/termsOfUse/agreements/{agreement-id}/files/{agreementFileLocalization-id}/versions/{agreementFileVersion-id}': Operation<
    '/identityGovernance/termsOfUse/agreements/{agreement-id}/files/{agreementFileLocalization-id}/versions/{agreementFileVersion-id}',
    'patch'
  >;
  'DELETE /identityGovernance/termsOfUse/agreements/{agreement-id}/files/{agreementFileLocalization-id}/versions/{agreementFileVersion-id}': Operation<
    '/identityGovernance/termsOfUse/agreements/{agreement-id}/files/{agreementFileLocalization-id}/versions/{agreementFileVersion-id}',
    'delete'
  >;
}

/**
 * `DELETE /identityGovernance/termsOfUse/agreements/{agreement-id}/files/{agreementFileLocalization-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /identityGovernance/termsOfUse/agreements/{agreement-id}/files/{agreementFileLocalization-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /identityGovernance/termsOfUse/agreements/{agreement-id}/files/{agreementFileLocalization-id}']['response']
> {
  return {
    method: 'delete',
    path: '/identityGovernance/termsOfUse/agreements/{agreement-id}/files/{agreementFileLocalization-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['agreement-id', 'agreementFileLocalization-id'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/termsOfUse/agreements/{agreement-id}/files`
 *
 * PDFs linked to this agreement. This property is in the process of being deprecated. Use the  file property instead. Supports $expand.
 */
export function list(
  params?: IEndpoints['GET /identityGovernance/termsOfUse/agreements/{agreement-id}/files']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/termsOfUse/agreements/{agreement-id}/files']['response']
> {
  return {
    method: 'get',
    path: '/identityGovernance/termsOfUse/agreements/{agreement-id}/files',
    paramDefs: {
      path: ['agreement-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/termsOfUse/agreements/{agreement-id}/files/{agreementFileLocalization-id}`
 *
 * PDFs linked to this agreement. This property is in the process of being deprecated. Use the  file property instead. Supports $expand.
 */
export function get(
  params?: IEndpoints['GET /identityGovernance/termsOfUse/agreements/{agreement-id}/files/{agreementFileLocalization-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/termsOfUse/agreements/{agreement-id}/files/{agreementFileLocalization-id}']['response']
> {
  return {
    method: 'get',
    path: '/identityGovernance/termsOfUse/agreements/{agreement-id}/files/{agreementFileLocalization-id}',
    paramDefs: {
      path: ['agreement-id', 'agreementFileLocalization-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /identityGovernance/termsOfUse/agreements/{agreement-id}/files/{agreementFileLocalization-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /identityGovernance/termsOfUse/agreements/{agreement-id}/files/{agreementFileLocalization-id}']['body'],
  params?: IEndpoints['PATCH /identityGovernance/termsOfUse/agreements/{agreement-id}/files/{agreementFileLocalization-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /identityGovernance/termsOfUse/agreements/{agreement-id}/files/{agreementFileLocalization-id}']['response']
> {
  return {
    method: 'patch',
    path: '/identityGovernance/termsOfUse/agreements/{agreement-id}/files/{agreementFileLocalization-id}',
    paramDefs: {
      path: ['agreement-id', 'agreementFileLocalization-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /identityGovernance/termsOfUse/agreements/{agreement-id}/files`
 *
 * Create a new localized agreement file.
 */
export function create(
  body: IEndpoints['POST /identityGovernance/termsOfUse/agreements/{agreement-id}/files']['body'],
  params?: IEndpoints['POST /identityGovernance/termsOfUse/agreements/{agreement-id}/files']['parameters']
): EndpointRequest<
  IEndpoints['POST /identityGovernance/termsOfUse/agreements/{agreement-id}/files']['response']
> {
  return {
    method: 'post',
    path: '/identityGovernance/termsOfUse/agreements/{agreement-id}/files',
    paramDefs: {
      path: ['agreement-id'],
    },
    params,
    body,
  };
}

export const versions = {
  /**
   * `GET /identityGovernance/termsOfUse/agreements/{agreement-id}/files/{agreementFileLocalization-id}/versions`
   *
   * Read-only. Customized versions of the terms of use agreement in the Microsoft Entra tenant.
   */
  list: function list(
    params?: IEndpoints['GET /identityGovernance/termsOfUse/agreements/{agreement-id}/files/{agreementFileLocalization-id}/versions']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/termsOfUse/agreements/{agreement-id}/files/{agreementFileLocalization-id}/versions']['response']
  > {
    return {
      method: 'get',
      path: '/identityGovernance/termsOfUse/agreements/{agreement-id}/files/{agreementFileLocalization-id}/versions',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['agreement-id', 'agreementFileLocalization-id'],
      },
      params,
    };
  },
  /**
   * `POST /identityGovernance/termsOfUse/agreements/{agreement-id}/files/{agreementFileLocalization-id}/versions`
   *
   */
  create: function create(
    body: IEndpoints['POST /identityGovernance/termsOfUse/agreements/{agreement-id}/files/{agreementFileLocalization-id}/versions']['body'],
    params?: IEndpoints['POST /identityGovernance/termsOfUse/agreements/{agreement-id}/files/{agreementFileLocalization-id}/versions']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /identityGovernance/termsOfUse/agreements/{agreement-id}/files/{agreementFileLocalization-id}/versions']['response']
  > {
    return {
      method: 'post',
      path: '/identityGovernance/termsOfUse/agreements/{agreement-id}/files/{agreementFileLocalization-id}/versions',
      paramDefs: {
        path: ['agreement-id', 'agreementFileLocalization-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /identityGovernance/termsOfUse/agreements/{agreement-id}/files/{agreementFileLocalization-id}/versions/{agreementFileVersion-id}`
   *
   * Read-only. Customized versions of the terms of use agreement in the Microsoft Entra tenant.
   */
  get: function get(
    params?: IEndpoints['GET /identityGovernance/termsOfUse/agreements/{agreement-id}/files/{agreementFileLocalization-id}/versions/{agreementFileVersion-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/termsOfUse/agreements/{agreement-id}/files/{agreementFileLocalization-id}/versions/{agreementFileVersion-id}']['response']
  > {
    return {
      method: 'get',
      path: '/identityGovernance/termsOfUse/agreements/{agreement-id}/files/{agreementFileLocalization-id}/versions/{agreementFileVersion-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['agreement-id', 'agreementFileLocalization-id', 'agreementFileVersion-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /identityGovernance/termsOfUse/agreements/{agreement-id}/files/{agreementFileLocalization-id}/versions/{agreementFileVersion-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /identityGovernance/termsOfUse/agreements/{agreement-id}/files/{agreementFileLocalization-id}/versions/{agreementFileVersion-id}']['body'],
    params?: IEndpoints['PATCH /identityGovernance/termsOfUse/agreements/{agreement-id}/files/{agreementFileLocalization-id}/versions/{agreementFileVersion-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /identityGovernance/termsOfUse/agreements/{agreement-id}/files/{agreementFileLocalization-id}/versions/{agreementFileVersion-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/identityGovernance/termsOfUse/agreements/{agreement-id}/files/{agreementFileLocalization-id}/versions/{agreementFileVersion-id}',
      paramDefs: {
        path: ['agreement-id', 'agreementFileLocalization-id', 'agreementFileVersion-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /identityGovernance/termsOfUse/agreements/{agreement-id}/files/{agreementFileLocalization-id}/versions/{agreementFileVersion-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /identityGovernance/termsOfUse/agreements/{agreement-id}/files/{agreementFileLocalization-id}/versions/{agreementFileVersion-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /identityGovernance/termsOfUse/agreements/{agreement-id}/files/{agreementFileLocalization-id}/versions/{agreementFileVersion-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/identityGovernance/termsOfUse/agreements/{agreement-id}/files/{agreementFileLocalization-id}/versions/{agreementFileVersion-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['agreement-id', 'agreementFileLocalization-id', 'agreementFileVersion-id'],
      },
      params,
    };
  },
};
