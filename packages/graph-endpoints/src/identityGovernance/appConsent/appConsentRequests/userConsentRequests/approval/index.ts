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
  'GET /identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/stages': Operation<
    '/identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/stages',
    'get'
  >;
  'POST /identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/stages': Operation<
    '/identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/stages',
    'post'
  >;
  'GET /identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/stages/{approvalStage-id}': Operation<
    '/identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/stages/{approvalStage-id}',
    'get'
  >;
  'PATCH /identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/stages/{approvalStage-id}': Operation<
    '/identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/stages/{approvalStage-id}',
    'patch'
  >;
  'DELETE /identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/stages/{approvalStage-id}': Operation<
    '/identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/stages/{approvalStage-id}',
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
    method: 'patch',
    path: '/identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval',
    paramDefs: {
      path: ['appConsentRequest-id', 'userConsentRequest-id'],
    },
    params,
    body,
  };
}

export const stages = {
  /**
   * `GET /identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/stages`
   *
   * A collection of stages in the approval decision.
   */
  list: function list(
    params?: IEndpoints['GET /identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/stages']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/stages']['response']
  > {
    return {
      method: 'get',
      path: '/identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/stages',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['appConsentRequest-id', 'userConsentRequest-id'],
      },
      params,
    };
  },
  /**
   * `POST /identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/stages`
   *
   */
  create: function create(
    body: IEndpoints['POST /identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/stages']['body'],
    params?: IEndpoints['POST /identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/stages']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/stages']['response']
  > {
    return {
      method: 'post',
      path: '/identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/stages',
      paramDefs: {
        path: ['appConsentRequest-id', 'userConsentRequest-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/stages/{approvalStage-id}`
   *
   * A collection of stages in the approval decision.
   */
  get: function get(
    params?: IEndpoints['GET /identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/stages/{approvalStage-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/stages/{approvalStage-id}']['response']
  > {
    return {
      method: 'get',
      path: '/identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/stages/{approvalStage-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['appConsentRequest-id', 'userConsentRequest-id', 'approvalStage-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/stages/{approvalStage-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/stages/{approvalStage-id}']['body'],
    params?: IEndpoints['PATCH /identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/stages/{approvalStage-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/stages/{approvalStage-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/stages/{approvalStage-id}',
      paramDefs: {
        path: ['appConsentRequest-id', 'userConsentRequest-id', 'approvalStage-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/stages/{approvalStage-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/stages/{approvalStage-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/stages/{approvalStage-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/stages/{approvalStage-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['appConsentRequest-id', 'userConsentRequest-id', 'approvalStage-id'],
      },
      params,
    };
  },
};
