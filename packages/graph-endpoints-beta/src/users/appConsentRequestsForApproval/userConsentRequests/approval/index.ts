import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval': Operation<
    '/users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval',
    'delete'
  >;
  'GET /users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval': Operation<
    '/users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval',
    'get'
  >;
  'PATCH /users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval': Operation<
    '/users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval',
    'patch'
  >;
  'GET /users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps': Operation<
    '/users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps',
    'get'
  >;
  'POST /users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps': Operation<
    '/users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps',
    'post'
  >;
  'GET /users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps/{approvalStep-id}': Operation<
    '/users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps/{approvalStep-id}',
    'get'
  >;
  'PATCH /users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps/{approvalStep-id}': Operation<
    '/users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps/{approvalStep-id}',
    'patch'
  >;
  'DELETE /users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps/{approvalStep-id}': Operation<
    '/users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps/{approvalStep-id}',
    'delete'
  >;
}

/**
 * `DELETE /users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval',
    paramDefs: {
      header: ['If-Match'],
      path: ['user-id', 'appConsentRequest-id', 'userConsentRequest-id'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval`
 *
 * Approval decisions associated with a request.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval',
    paramDefs: {
      path: ['user-id', 'appConsentRequest-id', 'userConsentRequest-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval',
    paramDefs: {
      path: ['user-id', 'appConsentRequest-id', 'userConsentRequest-id'],
    },
    params,
    body,
  };
}

export const steps = {
  /**
   * `GET /users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps`
   *
   * Used to represent the decision associated with a single step in the approval process configured in approvalStage.
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id', 'appConsentRequest-id', 'userConsentRequest-id'],
      },
      params,
    };
  },
  /**
   * `POST /users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps`
   *
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps']['body'],
    params?: IEndpoints['POST /users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps',
      paramDefs: {
        path: ['user-id', 'appConsentRequest-id', 'userConsentRequest-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps/{approvalStep-id}`
   *
   * Used to represent the decision associated with a single step in the approval process configured in approvalStage.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps/{approvalStep-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps/{approvalStep-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps/{approvalStep-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'appConsentRequest-id', 'userConsentRequest-id', 'approvalStep-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps/{approvalStep-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps/{approvalStep-id}']['body'],
    params?: IEndpoints['PATCH /users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps/{approvalStep-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps/{approvalStep-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps/{approvalStep-id}',
      paramDefs: {
        path: ['user-id', 'appConsentRequest-id', 'userConsentRequest-id', 'approvalStep-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps/{approvalStep-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps/{approvalStep-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps/{approvalStep-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps/{approvalStep-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['user-id', 'appConsentRequest-id', 'userConsentRequest-id', 'approvalStep-id'],
      },
      params,
    };
  },
};
