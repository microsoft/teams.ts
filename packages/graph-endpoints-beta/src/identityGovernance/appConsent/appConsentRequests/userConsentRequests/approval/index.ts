import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval': Operation<
    '/identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval',
    'delete'
  >;
  'GET /identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval': Operation<
    '/identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval',
    'get'
  >;
  'PATCH /identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval': Operation<
    '/identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval',
    'patch'
  >;
  'GET /identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps': Operation<
    '/identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps',
    'get'
  >;
  'POST /identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps': Operation<
    '/identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps',
    'post'
  >;
  'GET /identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps/{approvalStep-id}': Operation<
    '/identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps/{approvalStep-id}',
    'get'
  >;
  'PATCH /identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps/{approvalStep-id}': Operation<
    '/identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps/{approvalStep-id}',
    'patch'
  >;
  'DELETE /identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps/{approvalStep-id}': Operation<
    '/identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps/{approvalStep-id}',
    'delete'
  >;
}

/**
 * `DELETE /identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval`
 *
 */
export function del(
  params?: IEndpoints['DELETE /identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval',
    paramDefs: {
      header: ['If-Match'],
      path: ['appConsentRequest-id', 'userConsentRequest-id'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval`
 *
 * Approval decisions associated with a request.
 */
export function get(
  params?: IEndpoints['GET /identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval',
    paramDefs: {
      path: ['appConsentRequest-id', 'userConsentRequest-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval`
 *
 */
export function update(
  body: IEndpoints['PATCH /identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval']['body'],
  params?: IEndpoints['PATCH /identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval',
    paramDefs: {
      path: ['appConsentRequest-id', 'userConsentRequest-id'],
    },
    params,
    body,
  };
}

export const steps = {
  /**
   * `GET /identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps`
   *
   * Used to represent the decision associated with a single step in the approval process configured in approvalStage.
   */
  list: function list(
    params?: IEndpoints['GET /identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['appConsentRequest-id', 'userConsentRequest-id'],
      },
      params,
    };
  },
  /**
   * `POST /identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps`
   *
   */
  create: function create(
    body: IEndpoints['POST /identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps']['body'],
    params?: IEndpoints['POST /identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps',
      paramDefs: {
        path: ['appConsentRequest-id', 'userConsentRequest-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps/{approvalStep-id}`
   *
   * Used to represent the decision associated with a single step in the approval process configured in approvalStage.
   */
  get: function get(
    params?: IEndpoints['GET /identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps/{approvalStep-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps/{approvalStep-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps/{approvalStep-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['appConsentRequest-id', 'userConsentRequest-id', 'approvalStep-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps/{approvalStep-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps/{approvalStep-id}']['body'],
    params?: IEndpoints['PATCH /identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps/{approvalStep-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps/{approvalStep-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps/{approvalStep-id}',
      paramDefs: {
        path: ['appConsentRequest-id', 'userConsentRequest-id', 'approvalStep-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps/{approvalStep-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps/{approvalStep-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps/{approvalStep-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps/{approvalStep-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['appConsentRequest-id', 'userConsentRequest-id', 'approvalStep-id'],
      },
      params,
    };
  },
};
