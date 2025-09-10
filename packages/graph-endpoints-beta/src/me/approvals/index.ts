import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/approvals/{approval-id}': Operation<'/me/approvals/{approval-id}', 'delete'>;
  'GET /me/approvals': Operation<'/me/approvals', 'get'>;
  'GET /me/approvals/{approval-id}': Operation<'/me/approvals/{approval-id}', 'get'>;
  'PATCH /me/approvals/{approval-id}': Operation<'/me/approvals/{approval-id}', 'patch'>;
  'POST /me/approvals': Operation<'/me/approvals', 'post'>;
  'GET /me/approvals/{approval-id}/steps': Operation<'/me/approvals/{approval-id}/steps', 'get'>;
  'POST /me/approvals/{approval-id}/steps': Operation<'/me/approvals/{approval-id}/steps', 'post'>;
  'GET /me/approvals/{approval-id}/steps/{approvalStep-id}': Operation<
    '/me/approvals/{approval-id}/steps/{approvalStep-id}',
    'get'
  >;
  'PATCH /me/approvals/{approval-id}/steps/{approvalStep-id}': Operation<
    '/me/approvals/{approval-id}/steps/{approvalStep-id}',
    'patch'
  >;
  'DELETE /me/approvals/{approval-id}/steps/{approvalStep-id}': Operation<
    '/me/approvals/{approval-id}/steps/{approvalStep-id}',
    'delete'
  >;
}

/**
 * `DELETE /me/approvals/{approval-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/approvals/{approval-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/approvals/{approval-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/approvals/{approval-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['approval-id'],
    },
    params,
  };
}

/**
 * `GET /me/approvals`
 *
 */
export function list(
  params?: IEndpoints['GET /me/approvals']['parameters']
): EndpointRequest<IEndpoints['GET /me/approvals']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/approvals',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /me/approvals/{approval-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /me/approvals/{approval-id}']['parameters']
): EndpointRequest<IEndpoints['GET /me/approvals/{approval-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/approvals/{approval-id}',
    paramDefs: {
      path: ['approval-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /me/approvals/{approval-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/approvals/{approval-id}']['body'],
  params?: IEndpoints['PATCH /me/approvals/{approval-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /me/approvals/{approval-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/approvals/{approval-id}',
    paramDefs: {
      path: ['approval-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /me/approvals`
 *
 */
export function create(
  body: IEndpoints['POST /me/approvals']['body']
): EndpointRequest<IEndpoints['POST /me/approvals']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/approvals',
    body,
  };
}

export const steps = {
  /**
   * `GET /me/approvals/{approval-id}/steps`
   *
   * Used to represent the decision associated with a single step in the approval process configured in approvalStage.
   */
  list: function list(
    params?: IEndpoints['GET /me/approvals/{approval-id}/steps']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/approvals/{approval-id}/steps']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/approvals/{approval-id}/steps',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['approval-id'],
      },
      params,
    };
  },
  /**
   * `POST /me/approvals/{approval-id}/steps`
   *
   */
  create: function create(
    body: IEndpoints['POST /me/approvals/{approval-id}/steps']['body'],
    params?: IEndpoints['POST /me/approvals/{approval-id}/steps']['parameters']
  ): EndpointRequest<IEndpoints['POST /me/approvals/{approval-id}/steps']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/approvals/{approval-id}/steps',
      paramDefs: {
        path: ['approval-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /me/approvals/{approval-id}/steps/{approvalStep-id}`
   *
   * Used to represent the decision associated with a single step in the approval process configured in approvalStage.
   */
  get: function get(
    params?: IEndpoints['GET /me/approvals/{approval-id}/steps/{approvalStep-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/approvals/{approval-id}/steps/{approvalStep-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/approvals/{approval-id}/steps/{approvalStep-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['approval-id', 'approvalStep-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /me/approvals/{approval-id}/steps/{approvalStep-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /me/approvals/{approval-id}/steps/{approvalStep-id}']['body'],
    params?: IEndpoints['PATCH /me/approvals/{approval-id}/steps/{approvalStep-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /me/approvals/{approval-id}/steps/{approvalStep-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/me/approvals/{approval-id}/steps/{approvalStep-id}',
      paramDefs: {
        path: ['approval-id', 'approvalStep-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /me/approvals/{approval-id}/steps/{approvalStep-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /me/approvals/{approval-id}/steps/{approvalStep-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /me/approvals/{approval-id}/steps/{approvalStep-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/me/approvals/{approval-id}/steps/{approvalStep-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['approval-id', 'approvalStep-id'],
      },
      params,
    };
  },
};
