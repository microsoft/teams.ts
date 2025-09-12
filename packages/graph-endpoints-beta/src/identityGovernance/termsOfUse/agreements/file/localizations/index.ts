import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /identityGovernance/termsOfUse/agreements/{agreement-id}/file/localizations/{agreementFileLocalization-id}': Operation<
    '/identityGovernance/termsOfUse/agreements/{agreement-id}/file/localizations/{agreementFileLocalization-id}',
    'delete'
  >;
  'GET /identityGovernance/termsOfUse/agreements/{agreement-id}/file/localizations': Operation<
    '/identityGovernance/termsOfUse/agreements/{agreement-id}/file/localizations',
    'get'
  >;
  'GET /identityGovernance/termsOfUse/agreements/{agreement-id}/file/localizations/{agreementFileLocalization-id}': Operation<
    '/identityGovernance/termsOfUse/agreements/{agreement-id}/file/localizations/{agreementFileLocalization-id}',
    'get'
  >;
  'PATCH /identityGovernance/termsOfUse/agreements/{agreement-id}/file/localizations/{agreementFileLocalization-id}': Operation<
    '/identityGovernance/termsOfUse/agreements/{agreement-id}/file/localizations/{agreementFileLocalization-id}',
    'patch'
  >;
  'POST /identityGovernance/termsOfUse/agreements/{agreement-id}/file/localizations': Operation<
    '/identityGovernance/termsOfUse/agreements/{agreement-id}/file/localizations',
    'post'
  >;
  'GET /identityGovernance/termsOfUse/agreements/{agreement-id}/file/localizations/{agreementFileLocalization-id}/versions': Operation<
    '/identityGovernance/termsOfUse/agreements/{agreement-id}/file/localizations/{agreementFileLocalization-id}/versions',
    'get'
  >;
  'POST /identityGovernance/termsOfUse/agreements/{agreement-id}/file/localizations/{agreementFileLocalization-id}/versions': Operation<
    '/identityGovernance/termsOfUse/agreements/{agreement-id}/file/localizations/{agreementFileLocalization-id}/versions',
    'post'
  >;
  'GET /identityGovernance/termsOfUse/agreements/{agreement-id}/file/localizations/{agreementFileLocalization-id}/versions/{agreementFileVersion-id}': Operation<
    '/identityGovernance/termsOfUse/agreements/{agreement-id}/file/localizations/{agreementFileLocalization-id}/versions/{agreementFileVersion-id}',
    'get'
  >;
  'PATCH /identityGovernance/termsOfUse/agreements/{agreement-id}/file/localizations/{agreementFileLocalization-id}/versions/{agreementFileVersion-id}': Operation<
    '/identityGovernance/termsOfUse/agreements/{agreement-id}/file/localizations/{agreementFileLocalization-id}/versions/{agreementFileVersion-id}',
    'patch'
  >;
  'DELETE /identityGovernance/termsOfUse/agreements/{agreement-id}/file/localizations/{agreementFileLocalization-id}/versions/{agreementFileVersion-id}': Operation<
    '/identityGovernance/termsOfUse/agreements/{agreement-id}/file/localizations/{agreementFileLocalization-id}/versions/{agreementFileVersion-id}',
    'delete'
  >;
}

/**
 * `DELETE /identityGovernance/termsOfUse/agreements/{agreement-id}/file/localizations/{agreementFileLocalization-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /identityGovernance/termsOfUse/agreements/{agreement-id}/file/localizations/{agreementFileLocalization-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /identityGovernance/termsOfUse/agreements/{agreement-id}/file/localizations/{agreementFileLocalization-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/identityGovernance/termsOfUse/agreements/{agreement-id}/file/localizations/{agreementFileLocalization-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['agreement-id', 'agreementFileLocalization-id'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/termsOfUse/agreements/{agreement-id}/file/localizations`
 *
 * The localized version of the terms of use agreement files attached to the agreement.
 */
export function list(
  params?: IEndpoints['GET /identityGovernance/termsOfUse/agreements/{agreement-id}/file/localizations']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/termsOfUse/agreements/{agreement-id}/file/localizations']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identityGovernance/termsOfUse/agreements/{agreement-id}/file/localizations',
    paramDefs: {
      path: ['agreement-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/termsOfUse/agreements/{agreement-id}/file/localizations/{agreementFileLocalization-id}`
 *
 * The localized version of the terms of use agreement files attached to the agreement.
 */
export function get(
  params?: IEndpoints['GET /identityGovernance/termsOfUse/agreements/{agreement-id}/file/localizations/{agreementFileLocalization-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/termsOfUse/agreements/{agreement-id}/file/localizations/{agreementFileLocalization-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identityGovernance/termsOfUse/agreements/{agreement-id}/file/localizations/{agreementFileLocalization-id}',
    paramDefs: {
      path: ['agreement-id', 'agreementFileLocalization-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /identityGovernance/termsOfUse/agreements/{agreement-id}/file/localizations/{agreementFileLocalization-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /identityGovernance/termsOfUse/agreements/{agreement-id}/file/localizations/{agreementFileLocalization-id}']['body'],
  params?: IEndpoints['PATCH /identityGovernance/termsOfUse/agreements/{agreement-id}/file/localizations/{agreementFileLocalization-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /identityGovernance/termsOfUse/agreements/{agreement-id}/file/localizations/{agreementFileLocalization-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/identityGovernance/termsOfUse/agreements/{agreement-id}/file/localizations/{agreementFileLocalization-id}',
    paramDefs: {
      path: ['agreement-id', 'agreementFileLocalization-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /identityGovernance/termsOfUse/agreements/{agreement-id}/file/localizations`
 *
 */
export function create(
  body: IEndpoints['POST /identityGovernance/termsOfUse/agreements/{agreement-id}/file/localizations']['body'],
  params?: IEndpoints['POST /identityGovernance/termsOfUse/agreements/{agreement-id}/file/localizations']['parameters']
): EndpointRequest<
  IEndpoints['POST /identityGovernance/termsOfUse/agreements/{agreement-id}/file/localizations']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/identityGovernance/termsOfUse/agreements/{agreement-id}/file/localizations',
    paramDefs: {
      path: ['agreement-id'],
    },
    params,
    body,
  };
}

export const versions = {
  /**
   * `GET /identityGovernance/termsOfUse/agreements/{agreement-id}/file/localizations/{agreementFileLocalization-id}/versions`
   *
   * Read-only. Customized versions of the terms of use agreement in the Microsoft Entra tenant.
   */
  list: function list(
    params?: IEndpoints['GET /identityGovernance/termsOfUse/agreements/{agreement-id}/file/localizations/{agreementFileLocalization-id}/versions']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/termsOfUse/agreements/{agreement-id}/file/localizations/{agreementFileLocalization-id}/versions']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/identityGovernance/termsOfUse/agreements/{agreement-id}/file/localizations/{agreementFileLocalization-id}/versions',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['agreement-id', 'agreementFileLocalization-id'],
      },
      params,
    };
  },
  /**
   * `POST /identityGovernance/termsOfUse/agreements/{agreement-id}/file/localizations/{agreementFileLocalization-id}/versions`
   *
   */
  create: function create(
    body: IEndpoints['POST /identityGovernance/termsOfUse/agreements/{agreement-id}/file/localizations/{agreementFileLocalization-id}/versions']['body'],
    params?: IEndpoints['POST /identityGovernance/termsOfUse/agreements/{agreement-id}/file/localizations/{agreementFileLocalization-id}/versions']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /identityGovernance/termsOfUse/agreements/{agreement-id}/file/localizations/{agreementFileLocalization-id}/versions']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/identityGovernance/termsOfUse/agreements/{agreement-id}/file/localizations/{agreementFileLocalization-id}/versions',
      paramDefs: {
        path: ['agreement-id', 'agreementFileLocalization-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /identityGovernance/termsOfUse/agreements/{agreement-id}/file/localizations/{agreementFileLocalization-id}/versions/{agreementFileVersion-id}`
   *
   * Read-only. Customized versions of the terms of use agreement in the Microsoft Entra tenant.
   */
  get: function get(
    params?: IEndpoints['GET /identityGovernance/termsOfUse/agreements/{agreement-id}/file/localizations/{agreementFileLocalization-id}/versions/{agreementFileVersion-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/termsOfUse/agreements/{agreement-id}/file/localizations/{agreementFileLocalization-id}/versions/{agreementFileVersion-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/identityGovernance/termsOfUse/agreements/{agreement-id}/file/localizations/{agreementFileLocalization-id}/versions/{agreementFileVersion-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['agreement-id', 'agreementFileLocalization-id', 'agreementFileVersion-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /identityGovernance/termsOfUse/agreements/{agreement-id}/file/localizations/{agreementFileLocalization-id}/versions/{agreementFileVersion-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /identityGovernance/termsOfUse/agreements/{agreement-id}/file/localizations/{agreementFileLocalization-id}/versions/{agreementFileVersion-id}']['body'],
    params?: IEndpoints['PATCH /identityGovernance/termsOfUse/agreements/{agreement-id}/file/localizations/{agreementFileLocalization-id}/versions/{agreementFileVersion-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /identityGovernance/termsOfUse/agreements/{agreement-id}/file/localizations/{agreementFileLocalization-id}/versions/{agreementFileVersion-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/identityGovernance/termsOfUse/agreements/{agreement-id}/file/localizations/{agreementFileLocalization-id}/versions/{agreementFileVersion-id}',
      paramDefs: {
        path: ['agreement-id', 'agreementFileLocalization-id', 'agreementFileVersion-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /identityGovernance/termsOfUse/agreements/{agreement-id}/file/localizations/{agreementFileLocalization-id}/versions/{agreementFileVersion-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /identityGovernance/termsOfUse/agreements/{agreement-id}/file/localizations/{agreementFileLocalization-id}/versions/{agreementFileVersion-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /identityGovernance/termsOfUse/agreements/{agreement-id}/file/localizations/{agreementFileLocalization-id}/versions/{agreementFileVersion-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/identityGovernance/termsOfUse/agreements/{agreement-id}/file/localizations/{agreementFileLocalization-id}/versions/{agreementFileVersion-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['agreement-id', 'agreementFileLocalization-id', 'agreementFileVersion-id'],
      },
      params,
    };
  },
};
