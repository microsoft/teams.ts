import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /agreements/{agreement-id}/files/{agreementFileLocalization-id}': Operation<
    '/agreements/{agreement-id}/files/{agreementFileLocalization-id}',
    'delete'
  >;
  'GET /agreements/{agreement-id}/files': Operation<'/agreements/{agreement-id}/files', 'get'>;
  'GET /agreements/{agreement-id}/files/{agreementFileLocalization-id}': Operation<
    '/agreements/{agreement-id}/files/{agreementFileLocalization-id}',
    'get'
  >;
  'PATCH /agreements/{agreement-id}/files/{agreementFileLocalization-id}': Operation<
    '/agreements/{agreement-id}/files/{agreementFileLocalization-id}',
    'patch'
  >;
  'POST /agreements/{agreement-id}/files': Operation<'/agreements/{agreement-id}/files', 'post'>;
  'GET /agreements/{agreement-id}/files/{agreementFileLocalization-id}/versions': Operation<
    '/agreements/{agreement-id}/files/{agreementFileLocalization-id}/versions',
    'get'
  >;
  'POST /agreements/{agreement-id}/files/{agreementFileLocalization-id}/versions': Operation<
    '/agreements/{agreement-id}/files/{agreementFileLocalization-id}/versions',
    'post'
  >;
  'GET /agreements/{agreement-id}/files/{agreementFileLocalization-id}/versions/{agreementFileVersion-id}': Operation<
    '/agreements/{agreement-id}/files/{agreementFileLocalization-id}/versions/{agreementFileVersion-id}',
    'get'
  >;
  'PATCH /agreements/{agreement-id}/files/{agreementFileLocalization-id}/versions/{agreementFileVersion-id}': Operation<
    '/agreements/{agreement-id}/files/{agreementFileLocalization-id}/versions/{agreementFileVersion-id}',
    'patch'
  >;
  'DELETE /agreements/{agreement-id}/files/{agreementFileLocalization-id}/versions/{agreementFileVersion-id}': Operation<
    '/agreements/{agreement-id}/files/{agreementFileLocalization-id}/versions/{agreementFileVersion-id}',
    'delete'
  >;
}

/**
 * `DELETE /agreements/{agreement-id}/files/{agreementFileLocalization-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /agreements/{agreement-id}/files/{agreementFileLocalization-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /agreements/{agreement-id}/files/{agreementFileLocalization-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/agreements/{agreement-id}/files/{agreementFileLocalization-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['agreement-id', 'agreementFileLocalization-id'],
    },
    params,
  };
}

/**
 * `GET /agreements/{agreement-id}/files`
 *
 * PDFs linked to this agreement. Note: This property is in the process of being deprecated. Use the  file property instead.
 */
export function list(
  params?: IEndpoints['GET /agreements/{agreement-id}/files']['parameters']
): EndpointRequest<IEndpoints['GET /agreements/{agreement-id}/files']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/agreements/{agreement-id}/files',
    paramDefs: {
      path: ['agreement-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /agreements/{agreement-id}/files/{agreementFileLocalization-id}`
 *
 * PDFs linked to this agreement. Note: This property is in the process of being deprecated. Use the  file property instead.
 */
export function get(
  params?: IEndpoints['GET /agreements/{agreement-id}/files/{agreementFileLocalization-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /agreements/{agreement-id}/files/{agreementFileLocalization-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/agreements/{agreement-id}/files/{agreementFileLocalization-id}',
    paramDefs: {
      path: ['agreement-id', 'agreementFileLocalization-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /agreements/{agreement-id}/files/{agreementFileLocalization-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /agreements/{agreement-id}/files/{agreementFileLocalization-id}']['body'],
  params?: IEndpoints['PATCH /agreements/{agreement-id}/files/{agreementFileLocalization-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /agreements/{agreement-id}/files/{agreementFileLocalization-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/agreements/{agreement-id}/files/{agreementFileLocalization-id}',
    paramDefs: {
      path: ['agreement-id', 'agreementFileLocalization-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /agreements/{agreement-id}/files`
 *
 */
export function create(
  body: IEndpoints['POST /agreements/{agreement-id}/files']['body'],
  params?: IEndpoints['POST /agreements/{agreement-id}/files']['parameters']
): EndpointRequest<IEndpoints['POST /agreements/{agreement-id}/files']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/agreements/{agreement-id}/files',
    paramDefs: {
      path: ['agreement-id'],
    },
    params,
    body,
  };
}

export const versions = {
  /**
   * `GET /agreements/{agreement-id}/files/{agreementFileLocalization-id}/versions`
   *
   * Read-only. Customized versions of the terms of use agreement in the Microsoft Entra tenant.
   */
  list: function list(
    params?: IEndpoints['GET /agreements/{agreement-id}/files/{agreementFileLocalization-id}/versions']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /agreements/{agreement-id}/files/{agreementFileLocalization-id}/versions']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/agreements/{agreement-id}/files/{agreementFileLocalization-id}/versions',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['agreement-id', 'agreementFileLocalization-id'],
      },
      params,
    };
  },
  /**
   * `POST /agreements/{agreement-id}/files/{agreementFileLocalization-id}/versions`
   *
   */
  create: function create(
    body: IEndpoints['POST /agreements/{agreement-id}/files/{agreementFileLocalization-id}/versions']['body'],
    params?: IEndpoints['POST /agreements/{agreement-id}/files/{agreementFileLocalization-id}/versions']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /agreements/{agreement-id}/files/{agreementFileLocalization-id}/versions']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/agreements/{agreement-id}/files/{agreementFileLocalization-id}/versions',
      paramDefs: {
        path: ['agreement-id', 'agreementFileLocalization-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /agreements/{agreement-id}/files/{agreementFileLocalization-id}/versions/{agreementFileVersion-id}`
   *
   * Read-only. Customized versions of the terms of use agreement in the Microsoft Entra tenant.
   */
  get: function get(
    params?: IEndpoints['GET /agreements/{agreement-id}/files/{agreementFileLocalization-id}/versions/{agreementFileVersion-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /agreements/{agreement-id}/files/{agreementFileLocalization-id}/versions/{agreementFileVersion-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/agreements/{agreement-id}/files/{agreementFileLocalization-id}/versions/{agreementFileVersion-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['agreement-id', 'agreementFileLocalization-id', 'agreementFileVersion-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /agreements/{agreement-id}/files/{agreementFileLocalization-id}/versions/{agreementFileVersion-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /agreements/{agreement-id}/files/{agreementFileLocalization-id}/versions/{agreementFileVersion-id}']['body'],
    params?: IEndpoints['PATCH /agreements/{agreement-id}/files/{agreementFileLocalization-id}/versions/{agreementFileVersion-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /agreements/{agreement-id}/files/{agreementFileLocalization-id}/versions/{agreementFileVersion-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/agreements/{agreement-id}/files/{agreementFileLocalization-id}/versions/{agreementFileVersion-id}',
      paramDefs: {
        path: ['agreement-id', 'agreementFileLocalization-id', 'agreementFileVersion-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /agreements/{agreement-id}/files/{agreementFileLocalization-id}/versions/{agreementFileVersion-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /agreements/{agreement-id}/files/{agreementFileLocalization-id}/versions/{agreementFileVersion-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /agreements/{agreement-id}/files/{agreementFileLocalization-id}/versions/{agreementFileVersion-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/agreements/{agreement-id}/files/{agreementFileLocalization-id}/versions/{agreementFileVersion-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['agreement-id', 'agreementFileLocalization-id', 'agreementFileVersion-id'],
      },
      params,
    };
  },
};
