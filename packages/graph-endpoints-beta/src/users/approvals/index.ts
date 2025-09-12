import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/approvals/{approval-id}': Operation<
    '/users/{user-id}/approvals/{approval-id}',
    'delete'
  >;
  'GET /users/{user-id}/approvals': Operation<'/users/{user-id}/approvals', 'get'>;
  'GET /users/{user-id}/approvals/{approval-id}': Operation<
    '/users/{user-id}/approvals/{approval-id}',
    'get'
  >;
  'PATCH /users/{user-id}/approvals/{approval-id}': Operation<
    '/users/{user-id}/approvals/{approval-id}',
    'patch'
  >;
  'POST /users/{user-id}/approvals': Operation<'/users/{user-id}/approvals', 'post'>;
  'GET /users/{user-id}/approvals/{approval-id}/steps': Operation<
    '/users/{user-id}/approvals/{approval-id}/steps',
    'get'
  >;
  'POST /users/{user-id}/approvals/{approval-id}/steps': Operation<
    '/users/{user-id}/approvals/{approval-id}/steps',
    'post'
  >;
  'GET /users/{user-id}/approvals/{approval-id}/steps/{approvalStep-id}': Operation<
    '/users/{user-id}/approvals/{approval-id}/steps/{approvalStep-id}',
    'get'
  >;
  'PATCH /users/{user-id}/approvals/{approval-id}/steps/{approvalStep-id}': Operation<
    '/users/{user-id}/approvals/{approval-id}/steps/{approvalStep-id}',
    'patch'
  >;
  'DELETE /users/{user-id}/approvals/{approval-id}/steps/{approvalStep-id}': Operation<
    '/users/{user-id}/approvals/{approval-id}/steps/{approvalStep-id}',
    'delete'
  >;
}

/**
 * `DELETE /users/{user-id}/approvals/{approval-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/approvals/{approval-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /users/{user-id}/approvals/{approval-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/approvals/{approval-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['user-id', 'approval-id'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/approvals`
 *
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/approvals']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/approvals']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/approvals',
    paramDefs: {
      path: ['user-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/approvals/{approval-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/approvals/{approval-id}']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/approvals/{approval-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/approvals/{approval-id}',
    paramDefs: {
      path: ['user-id', 'approval-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /users/{user-id}/approvals/{approval-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/approvals/{approval-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/approvals/{approval-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /users/{user-id}/approvals/{approval-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/approvals/{approval-id}',
    paramDefs: {
      path: ['user-id', 'approval-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/approvals`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/approvals']['body'],
  params?: IEndpoints['POST /users/{user-id}/approvals']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/approvals']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/approvals',
    paramDefs: {
      path: ['user-id'],
    },
    params,
    body,
  };
}

export const steps = {
  /**
   * `GET /users/{user-id}/approvals/{approval-id}/steps`
   *
   * Used to represent the decision associated with a single step in the approval process configured in approvalStage.
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/approvals/{approval-id}/steps']['parameters']
  ): EndpointRequest<IEndpoints['GET /users/{user-id}/approvals/{approval-id}/steps']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/approvals/{approval-id}/steps',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id', 'approval-id'],
      },
      params,
    };
  },
  /**
   * `POST /users/{user-id}/approvals/{approval-id}/steps`
   *
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/approvals/{approval-id}/steps']['body'],
    params?: IEndpoints['POST /users/{user-id}/approvals/{approval-id}/steps']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/approvals/{approval-id}/steps']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/approvals/{approval-id}/steps',
      paramDefs: {
        path: ['user-id', 'approval-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /users/{user-id}/approvals/{approval-id}/steps/{approvalStep-id}`
   *
   * Used to represent the decision associated with a single step in the approval process configured in approvalStage.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/approvals/{approval-id}/steps/{approvalStep-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/approvals/{approval-id}/steps/{approvalStep-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/approvals/{approval-id}/steps/{approvalStep-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'approval-id', 'approvalStep-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /users/{user-id}/approvals/{approval-id}/steps/{approvalStep-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /users/{user-id}/approvals/{approval-id}/steps/{approvalStep-id}']['body'],
    params?: IEndpoints['PATCH /users/{user-id}/approvals/{approval-id}/steps/{approvalStep-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /users/{user-id}/approvals/{approval-id}/steps/{approvalStep-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/users/{user-id}/approvals/{approval-id}/steps/{approvalStep-id}',
      paramDefs: {
        path: ['user-id', 'approval-id', 'approvalStep-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /users/{user-id}/approvals/{approval-id}/steps/{approvalStep-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /users/{user-id}/approvals/{approval-id}/steps/{approvalStep-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /users/{user-id}/approvals/{approval-id}/steps/{approvalStep-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/users/{user-id}/approvals/{approval-id}/steps/{approvalStep-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['user-id', 'approval-id', 'approvalStep-id'],
      },
      params,
    };
  },
};
