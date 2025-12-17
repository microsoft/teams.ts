export * as appliedPolicies from './appliedPolicies';
export * as intendedPolicies from './intendedPolicies';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}': Operation<
    '/deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}',
    'delete'
  >;
  'GET /deviceAppManagement/managedAppRegistrations': Operation<
    '/deviceAppManagement/managedAppRegistrations',
    'get'
  >;
  'GET /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}': Operation<
    '/deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}',
    'get'
  >;
  'PATCH /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}': Operation<
    '/deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}',
    'patch'
  >;
  'POST /deviceAppManagement/managedAppRegistrations': Operation<
    '/deviceAppManagement/managedAppRegistrations',
    'post'
  >;
  'GET /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/operations': Operation<
    '/deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/operations',
    'get'
  >;
  'POST /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/operations': Operation<
    '/deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/operations',
    'post'
  >;
  'GET /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/operations/{managedAppOperation-id}': Operation<
    '/deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/operations/{managedAppOperation-id}',
    'get'
  >;
  'PATCH /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/operations/{managedAppOperation-id}': Operation<
    '/deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/operations/{managedAppOperation-id}',
    'patch'
  >;
  'DELETE /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/operations/{managedAppOperation-id}': Operation<
    '/deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/operations/{managedAppOperation-id}',
    'delete'
  >;
}

/**
 * `DELETE /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}']['response']
> {
  return {
    method: 'delete',
    path: '/deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['managedAppRegistration-id'],
    },
    params,
  };
}

/**
 * `GET /deviceAppManagement/managedAppRegistrations`
 *
 * The managed app registrations.
 */
export function list(
  params?: IEndpoints['GET /deviceAppManagement/managedAppRegistrations']['parameters']
): EndpointRequest<IEndpoints['GET /deviceAppManagement/managedAppRegistrations']['response']> {
  return {
    method: 'get',
    path: '/deviceAppManagement/managedAppRegistrations',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}`
 *
 * The managed app registrations.
 */
export function get(
  params?: IEndpoints['GET /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}']['response']
> {
  return {
    method: 'get',
    path: '/deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}',
    paramDefs: {
      path: ['managedAppRegistration-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}']['body'],
  params?: IEndpoints['PATCH /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}']['response']
> {
  return {
    method: 'patch',
    path: '/deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}',
    paramDefs: {
      path: ['managedAppRegistration-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /deviceAppManagement/managedAppRegistrations`
 *
 */
export function create(
  body: IEndpoints['POST /deviceAppManagement/managedAppRegistrations']['body']
): EndpointRequest<IEndpoints['POST /deviceAppManagement/managedAppRegistrations']['response']> {
  return {
    method: 'post',
    path: '/deviceAppManagement/managedAppRegistrations',
    body,
  };
}

export const operations = {
  /**
   * `GET /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/operations`
   *
   * Zero or more long running operations triggered on the app registration.
   */
  list: function list(
    params?: IEndpoints['GET /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/operations']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/operations']['response']
  > {
    return {
      method: 'get',
      path: '/deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/operations',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['managedAppRegistration-id'],
      },
      params,
    };
  },
  /**
   * `POST /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/operations`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/operations']['body'],
    params?: IEndpoints['POST /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/operations']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/operations']['response']
  > {
    return {
      method: 'post',
      path: '/deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/operations',
      paramDefs: {
        path: ['managedAppRegistration-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/operations/{managedAppOperation-id}`
   *
   * Zero or more long running operations triggered on the app registration.
   */
  get: function get(
    params?: IEndpoints['GET /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/operations/{managedAppOperation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/operations/{managedAppOperation-id}']['response']
  > {
    return {
      method: 'get',
      path: '/deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/operations/{managedAppOperation-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['managedAppRegistration-id', 'managedAppOperation-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/operations/{managedAppOperation-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/operations/{managedAppOperation-id}']['body'],
    params?: IEndpoints['PATCH /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/operations/{managedAppOperation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/operations/{managedAppOperation-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/operations/{managedAppOperation-id}',
      paramDefs: {
        path: ['managedAppRegistration-id', 'managedAppOperation-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/operations/{managedAppOperation-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/operations/{managedAppOperation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/operations/{managedAppOperation-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/operations/{managedAppOperation-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['managedAppRegistration-id', 'managedAppOperation-id'],
      },
      params,
    };
  },
};
