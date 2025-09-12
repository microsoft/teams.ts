import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/operationApprovalRequests/{operationApprovalRequest-id}': Operation<
    '/deviceManagement/operationApprovalRequests/{operationApprovalRequest-id}',
    'delete'
  >;
  'GET /deviceManagement/operationApprovalRequests': Operation<
    '/deviceManagement/operationApprovalRequests',
    'get'
  >;
  'GET /deviceManagement/operationApprovalRequests/{operationApprovalRequest-id}': Operation<
    '/deviceManagement/operationApprovalRequests/{operationApprovalRequest-id}',
    'get'
  >;
  'PATCH /deviceManagement/operationApprovalRequests/{operationApprovalRequest-id}': Operation<
    '/deviceManagement/operationApprovalRequests/{operationApprovalRequest-id}',
    'patch'
  >;
  'POST /deviceManagement/operationApprovalRequests': Operation<
    '/deviceManagement/operationApprovalRequests',
    'post'
  >;
  'POST /deviceManagement/operationApprovalRequests/{operationApprovalRequest-id}/approve': Operation<
    '/deviceManagement/operationApprovalRequests/{operationApprovalRequest-id}/approve',
    'post'
  >;
  'POST /deviceManagement/operationApprovalRequests/{operationApprovalRequest-id}/cancelApproval': Operation<
    '/deviceManagement/operationApprovalRequests/{operationApprovalRequest-id}/cancelApproval',
    'post'
  >;
  'POST /deviceManagement/operationApprovalRequests/cancelMyRequest': Operation<
    '/deviceManagement/operationApprovalRequests/cancelMyRequest',
    'post'
  >;
  'POST /deviceManagement/operationApprovalRequests/{operationApprovalRequest-id}/reject': Operation<
    '/deviceManagement/operationApprovalRequests/{operationApprovalRequest-id}/reject',
    'post'
  >;
  'POST /deviceManagement/operationApprovalRequests/retrieveRequestStatus': Operation<
    '/deviceManagement/operationApprovalRequests/retrieveRequestStatus',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/operationApprovalRequests/{operationApprovalRequest-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/operationApprovalRequests/{operationApprovalRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/operationApprovalRequests/{operationApprovalRequest-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/operationApprovalRequests/{operationApprovalRequest-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['operationApprovalRequest-id'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/operationApprovalRequests`
 *
 * The Operation Approval Requests
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/operationApprovalRequests']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/operationApprovalRequests']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/operationApprovalRequests',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/operationApprovalRequests/{operationApprovalRequest-id}`
 *
 * The Operation Approval Requests
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/operationApprovalRequests/{operationApprovalRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/operationApprovalRequests/{operationApprovalRequest-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/operationApprovalRequests/{operationApprovalRequest-id}',
    paramDefs: {
      path: ['operationApprovalRequest-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /deviceManagement/operationApprovalRequests/{operationApprovalRequest-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/operationApprovalRequests/{operationApprovalRequest-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/operationApprovalRequests/{operationApprovalRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/operationApprovalRequests/{operationApprovalRequest-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/operationApprovalRequests/{operationApprovalRequest-id}',
    paramDefs: {
      path: ['operationApprovalRequest-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/operationApprovalRequests`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/operationApprovalRequests']['body']
): EndpointRequest<IEndpoints['POST /deviceManagement/operationApprovalRequests']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/operationApprovalRequests',
    body,
  };
}

export const approve = {
  /**
   * `POST /deviceManagement/operationApprovalRequests/{operationApprovalRequest-id}/approve`
   *
   * Approves the requested instance of an operationApprovalRequest.
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/operationApprovalRequests/{operationApprovalRequest-id}/approve']['body'],
    params?: IEndpoints['POST /deviceManagement/operationApprovalRequests/{operationApprovalRequest-id}/approve']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/operationApprovalRequests/{operationApprovalRequest-id}/approve']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/operationApprovalRequests/{operationApprovalRequest-id}/approve',
      paramDefs: {
        path: ['operationApprovalRequest-id'],
      },
      params,
      body,
    };
  },
};

export const cancelApproval = {
  /**
   * `POST /deviceManagement/operationApprovalRequests/{operationApprovalRequest-id}/cancelApproval`
   *
   * Cancels an already approved instance of an operationApprovalRequest.
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/operationApprovalRequests/{operationApprovalRequest-id}/cancelApproval']['body'],
    params?: IEndpoints['POST /deviceManagement/operationApprovalRequests/{operationApprovalRequest-id}/cancelApproval']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/operationApprovalRequests/{operationApprovalRequest-id}/cancelApproval']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/operationApprovalRequests/{operationApprovalRequest-id}/cancelApproval',
      paramDefs: {
        path: ['operationApprovalRequest-id'],
      },
      params,
      body,
    };
  },
};

export const cancelMyRequest = {
  /**
   * `POST /deviceManagement/operationApprovalRequests/cancelMyRequest`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/operationApprovalRequests/cancelMyRequest']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/operationApprovalRequests/cancelMyRequest']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/operationApprovalRequests/cancelMyRequest',
      body,
    };
  },
};

export const reject = {
  /**
   * `POST /deviceManagement/operationApprovalRequests/{operationApprovalRequest-id}/reject`
   *
   * Rejects the requested instance of an operationApprovalRequest.
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/operationApprovalRequests/{operationApprovalRequest-id}/reject']['body'],
    params?: IEndpoints['POST /deviceManagement/operationApprovalRequests/{operationApprovalRequest-id}/reject']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/operationApprovalRequests/{operationApprovalRequest-id}/reject']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/operationApprovalRequests/{operationApprovalRequest-id}/reject',
      paramDefs: {
        path: ['operationApprovalRequest-id'],
      },
      params,
      body,
    };
  },
};

export const retrieveRequestStatus = {
  /**
   * `POST /deviceManagement/operationApprovalRequests/retrieveRequestStatus`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/operationApprovalRequests/retrieveRequestStatus']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/operationApprovalRequests/retrieveRequestStatus']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/operationApprovalRequests/retrieveRequestStatus',
      body,
    };
  },
};
