import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceAppManagement/managedEBooks/{managedEBook-id}/userStateSummary/{userInstallStateSummary-id}': Operation<
    '/deviceAppManagement/managedEBooks/{managedEBook-id}/userStateSummary/{userInstallStateSummary-id}',
    'delete'
  >;
  'GET /deviceAppManagement/managedEBooks/{managedEBook-id}/userStateSummary': Operation<
    '/deviceAppManagement/managedEBooks/{managedEBook-id}/userStateSummary',
    'get'
  >;
  'GET /deviceAppManagement/managedEBooks/{managedEBook-id}/userStateSummary/{userInstallStateSummary-id}': Operation<
    '/deviceAppManagement/managedEBooks/{managedEBook-id}/userStateSummary/{userInstallStateSummary-id}',
    'get'
  >;
  'PATCH /deviceAppManagement/managedEBooks/{managedEBook-id}/userStateSummary/{userInstallStateSummary-id}': Operation<
    '/deviceAppManagement/managedEBooks/{managedEBook-id}/userStateSummary/{userInstallStateSummary-id}',
    'patch'
  >;
  'POST /deviceAppManagement/managedEBooks/{managedEBook-id}/userStateSummary': Operation<
    '/deviceAppManagement/managedEBooks/{managedEBook-id}/userStateSummary',
    'post'
  >;
  'GET /deviceAppManagement/managedEBooks/{managedEBook-id}/userStateSummary/{userInstallStateSummary-id}/deviceStates': Operation<
    '/deviceAppManagement/managedEBooks/{managedEBook-id}/userStateSummary/{userInstallStateSummary-id}/deviceStates',
    'get'
  >;
  'POST /deviceAppManagement/managedEBooks/{managedEBook-id}/userStateSummary/{userInstallStateSummary-id}/deviceStates': Operation<
    '/deviceAppManagement/managedEBooks/{managedEBook-id}/userStateSummary/{userInstallStateSummary-id}/deviceStates',
    'post'
  >;
  'GET /deviceAppManagement/managedEBooks/{managedEBook-id}/userStateSummary/{userInstallStateSummary-id}/deviceStates/{deviceInstallState-id}': Operation<
    '/deviceAppManagement/managedEBooks/{managedEBook-id}/userStateSummary/{userInstallStateSummary-id}/deviceStates/{deviceInstallState-id}',
    'get'
  >;
  'PATCH /deviceAppManagement/managedEBooks/{managedEBook-id}/userStateSummary/{userInstallStateSummary-id}/deviceStates/{deviceInstallState-id}': Operation<
    '/deviceAppManagement/managedEBooks/{managedEBook-id}/userStateSummary/{userInstallStateSummary-id}/deviceStates/{deviceInstallState-id}',
    'patch'
  >;
  'DELETE /deviceAppManagement/managedEBooks/{managedEBook-id}/userStateSummary/{userInstallStateSummary-id}/deviceStates/{deviceInstallState-id}': Operation<
    '/deviceAppManagement/managedEBooks/{managedEBook-id}/userStateSummary/{userInstallStateSummary-id}/deviceStates/{deviceInstallState-id}',
    'delete'
  >;
}

/**
 * `DELETE /deviceAppManagement/managedEBooks/{managedEBook-id}/userStateSummary/{userInstallStateSummary-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceAppManagement/managedEBooks/{managedEBook-id}/userStateSummary/{userInstallStateSummary-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceAppManagement/managedEBooks/{managedEBook-id}/userStateSummary/{userInstallStateSummary-id}']['response']
> {
  return {
    method: 'delete',
    path: '/deviceAppManagement/managedEBooks/{managedEBook-id}/userStateSummary/{userInstallStateSummary-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['managedEBook-id', 'userInstallStateSummary-id'],
    },
    params,
  };
}

/**
 * `GET /deviceAppManagement/managedEBooks/{managedEBook-id}/userStateSummary`
 *
 * The list of installation states for this eBook.
 */
export function get(
  params?: IEndpoints['GET /deviceAppManagement/managedEBooks/{managedEBook-id}/userStateSummary']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceAppManagement/managedEBooks/{managedEBook-id}/userStateSummary']['response']
> {
  return {
    method: 'get',
    path: '/deviceAppManagement/managedEBooks/{managedEBook-id}/userStateSummary',
    paramDefs: {
      path: ['managedEBook-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /deviceAppManagement/managedEBooks/{managedEBook-id}/userStateSummary/{userInstallStateSummary-id}`
 *
 * The list of installation states for this eBook.
 */
export function get$1(
  params?: IEndpoints['GET /deviceAppManagement/managedEBooks/{managedEBook-id}/userStateSummary/{userInstallStateSummary-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceAppManagement/managedEBooks/{managedEBook-id}/userStateSummary/{userInstallStateSummary-id}']['response']
> {
  return {
    method: 'get',
    path: '/deviceAppManagement/managedEBooks/{managedEBook-id}/userStateSummary/{userInstallStateSummary-id}',
    paramDefs: {
      path: ['managedEBook-id', 'userInstallStateSummary-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /deviceAppManagement/managedEBooks/{managedEBook-id}/userStateSummary/{userInstallStateSummary-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceAppManagement/managedEBooks/{managedEBook-id}/userStateSummary/{userInstallStateSummary-id}']['body'],
  params?: IEndpoints['PATCH /deviceAppManagement/managedEBooks/{managedEBook-id}/userStateSummary/{userInstallStateSummary-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceAppManagement/managedEBooks/{managedEBook-id}/userStateSummary/{userInstallStateSummary-id}']['response']
> {
  return {
    method: 'patch',
    path: '/deviceAppManagement/managedEBooks/{managedEBook-id}/userStateSummary/{userInstallStateSummary-id}',
    paramDefs: {
      path: ['managedEBook-id', 'userInstallStateSummary-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /deviceAppManagement/managedEBooks/{managedEBook-id}/userStateSummary`
 *
 */
export function create(
  body: IEndpoints['POST /deviceAppManagement/managedEBooks/{managedEBook-id}/userStateSummary']['body'],
  params?: IEndpoints['POST /deviceAppManagement/managedEBooks/{managedEBook-id}/userStateSummary']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceAppManagement/managedEBooks/{managedEBook-id}/userStateSummary']['response']
> {
  return {
    method: 'post',
    path: '/deviceAppManagement/managedEBooks/{managedEBook-id}/userStateSummary',
    paramDefs: {
      path: ['managedEBook-id'],
    },
    params,
    body,
  };
}

export const deviceStates = {
  /**
   * `GET /deviceAppManagement/managedEBooks/{managedEBook-id}/userStateSummary/{userInstallStateSummary-id}/deviceStates`
   *
   * The install state of the eBook.
   */
  list: function list(
    params?: IEndpoints['GET /deviceAppManagement/managedEBooks/{managedEBook-id}/userStateSummary/{userInstallStateSummary-id}/deviceStates']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceAppManagement/managedEBooks/{managedEBook-id}/userStateSummary/{userInstallStateSummary-id}/deviceStates']['response']
  > {
    return {
      method: 'get',
      path: '/deviceAppManagement/managedEBooks/{managedEBook-id}/userStateSummary/{userInstallStateSummary-id}/deviceStates',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['managedEBook-id', 'userInstallStateSummary-id'],
      },
      params,
    };
  },
  /**
   * `POST /deviceAppManagement/managedEBooks/{managedEBook-id}/userStateSummary/{userInstallStateSummary-id}/deviceStates`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceAppManagement/managedEBooks/{managedEBook-id}/userStateSummary/{userInstallStateSummary-id}/deviceStates']['body'],
    params?: IEndpoints['POST /deviceAppManagement/managedEBooks/{managedEBook-id}/userStateSummary/{userInstallStateSummary-id}/deviceStates']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceAppManagement/managedEBooks/{managedEBook-id}/userStateSummary/{userInstallStateSummary-id}/deviceStates']['response']
  > {
    return {
      method: 'post',
      path: '/deviceAppManagement/managedEBooks/{managedEBook-id}/userStateSummary/{userInstallStateSummary-id}/deviceStates',
      paramDefs: {
        path: ['managedEBook-id', 'userInstallStateSummary-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /deviceAppManagement/managedEBooks/{managedEBook-id}/userStateSummary/{userInstallStateSummary-id}/deviceStates/{deviceInstallState-id}`
   *
   * The install state of the eBook.
   */
  get: function get(
    params?: IEndpoints['GET /deviceAppManagement/managedEBooks/{managedEBook-id}/userStateSummary/{userInstallStateSummary-id}/deviceStates/{deviceInstallState-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceAppManagement/managedEBooks/{managedEBook-id}/userStateSummary/{userInstallStateSummary-id}/deviceStates/{deviceInstallState-id}']['response']
  > {
    return {
      method: 'get',
      path: '/deviceAppManagement/managedEBooks/{managedEBook-id}/userStateSummary/{userInstallStateSummary-id}/deviceStates/{deviceInstallState-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['managedEBook-id', 'userInstallStateSummary-id', 'deviceInstallState-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceAppManagement/managedEBooks/{managedEBook-id}/userStateSummary/{userInstallStateSummary-id}/deviceStates/{deviceInstallState-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceAppManagement/managedEBooks/{managedEBook-id}/userStateSummary/{userInstallStateSummary-id}/deviceStates/{deviceInstallState-id}']['body'],
    params?: IEndpoints['PATCH /deviceAppManagement/managedEBooks/{managedEBook-id}/userStateSummary/{userInstallStateSummary-id}/deviceStates/{deviceInstallState-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceAppManagement/managedEBooks/{managedEBook-id}/userStateSummary/{userInstallStateSummary-id}/deviceStates/{deviceInstallState-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/deviceAppManagement/managedEBooks/{managedEBook-id}/userStateSummary/{userInstallStateSummary-id}/deviceStates/{deviceInstallState-id}',
      paramDefs: {
        path: ['managedEBook-id', 'userInstallStateSummary-id', 'deviceInstallState-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceAppManagement/managedEBooks/{managedEBook-id}/userStateSummary/{userInstallStateSummary-id}/deviceStates/{deviceInstallState-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceAppManagement/managedEBooks/{managedEBook-id}/userStateSummary/{userInstallStateSummary-id}/deviceStates/{deviceInstallState-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceAppManagement/managedEBooks/{managedEBook-id}/userStateSummary/{userInstallStateSummary-id}/deviceStates/{deviceInstallState-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/deviceAppManagement/managedEBooks/{managedEBook-id}/userStateSummary/{userInstallStateSummary-id}/deviceStates/{deviceInstallState-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['managedEBook-id', 'userInstallStateSummary-id', 'deviceInstallState-id'],
      },
      params,
    };
  },
};
