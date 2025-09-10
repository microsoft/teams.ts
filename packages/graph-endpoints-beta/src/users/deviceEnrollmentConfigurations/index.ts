import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}': Operation<
    '/users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}',
    'delete'
  >;
  'GET /users/{user-id}/deviceEnrollmentConfigurations': Operation<
    '/users/{user-id}/deviceEnrollmentConfigurations',
    'get'
  >;
  'GET /users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}': Operation<
    '/users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}',
    'get'
  >;
  'PATCH /users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}': Operation<
    '/users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}',
    'patch'
  >;
  'POST /users/{user-id}/deviceEnrollmentConfigurations': Operation<
    '/users/{user-id}/deviceEnrollmentConfigurations',
    'post'
  >;
  'POST /users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assign': Operation<
    '/users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assign',
    'post'
  >;
  'GET /users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments': Operation<
    '/users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments',
    'get'
  >;
  'POST /users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments': Operation<
    '/users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments',
    'post'
  >;
  'GET /users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments/{enrollmentConfigurationAssignment-id}': Operation<
    '/users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments/{enrollmentConfigurationAssignment-id}',
    'get'
  >;
  'PATCH /users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments/{enrollmentConfigurationAssignment-id}': Operation<
    '/users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments/{enrollmentConfigurationAssignment-id}',
    'patch'
  >;
  'DELETE /users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments/{enrollmentConfigurationAssignment-id}': Operation<
    '/users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments/{enrollmentConfigurationAssignment-id}',
    'delete'
  >;
  'POST /users/{user-id}/deviceEnrollmentConfigurations/createEnrollmentNotificationConfiguration': Operation<
    '/users/{user-id}/deviceEnrollmentConfigurations/createEnrollmentNotificationConfiguration',
    'post'
  >;
  'POST /users/{user-id}/deviceEnrollmentConfigurations/hasPayloadLinks': Operation<
    '/users/{user-id}/deviceEnrollmentConfigurations/hasPayloadLinks',
    'post'
  >;
  'POST /users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/setPriority': Operation<
    '/users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/setPriority',
    'post'
  >;
}

/**
 * `DELETE /users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['user-id', 'deviceEnrollmentConfiguration-id'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/deviceEnrollmentConfigurations`
 *
 * Get enrollment configurations targeted to the user
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/deviceEnrollmentConfigurations']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/deviceEnrollmentConfigurations']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/deviceEnrollmentConfigurations',
    paramDefs: {
      path: ['user-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}`
 *
 * Get enrollment configurations targeted to the user
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}',
    paramDefs: {
      path: ['user-id', 'deviceEnrollmentConfiguration-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}',
    paramDefs: {
      path: ['user-id', 'deviceEnrollmentConfiguration-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/deviceEnrollmentConfigurations`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/deviceEnrollmentConfigurations']['body'],
  params?: IEndpoints['POST /users/{user-id}/deviceEnrollmentConfigurations']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/deviceEnrollmentConfigurations']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/deviceEnrollmentConfigurations',
    paramDefs: {
      path: ['user-id'],
    },
    params,
    body,
  };
}

export const assign = {
  /**
   * `POST /users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assign`
   *
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assign']['body'],
    params?: IEndpoints['POST /users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assign']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assign']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assign',
      paramDefs: {
        path: ['user-id', 'deviceEnrollmentConfiguration-id'],
      },
      params,
      body,
    };
  },
};

export const assignments = {
  /**
   * `GET /users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments`
   *
   * The list of group assignments for the device configuration profile
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id', 'deviceEnrollmentConfiguration-id'],
      },
      params,
    };
  },
  /**
   * `POST /users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments`
   *
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments']['body'],
    params?: IEndpoints['POST /users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments',
      paramDefs: {
        path: ['user-id', 'deviceEnrollmentConfiguration-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments/{enrollmentConfigurationAssignment-id}`
   *
   * The list of group assignments for the device configuration profile
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments/{enrollmentConfigurationAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments/{enrollmentConfigurationAssignment-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments/{enrollmentConfigurationAssignment-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: [
          'user-id',
          'deviceEnrollmentConfiguration-id',
          'enrollmentConfigurationAssignment-id',
        ],
      },
      params,
    };
  },
  /**
   * `PATCH /users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments/{enrollmentConfigurationAssignment-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments/{enrollmentConfigurationAssignment-id}']['body'],
    params?: IEndpoints['PATCH /users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments/{enrollmentConfigurationAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments/{enrollmentConfigurationAssignment-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments/{enrollmentConfigurationAssignment-id}',
      paramDefs: {
        path: [
          'user-id',
          'deviceEnrollmentConfiguration-id',
          'enrollmentConfigurationAssignment-id',
        ],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments/{enrollmentConfigurationAssignment-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments/{enrollmentConfigurationAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments/{enrollmentConfigurationAssignment-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments/{enrollmentConfigurationAssignment-id}',
      paramDefs: {
        header: ['If-Match'],
        path: [
          'user-id',
          'deviceEnrollmentConfiguration-id',
          'enrollmentConfigurationAssignment-id',
        ],
      },
      params,
    };
  },
};

export const createEnrollmentNotificationConfiguration = {
  /**
   * `POST /users/{user-id}/deviceEnrollmentConfigurations/createEnrollmentNotificationConfiguration`
   *
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/deviceEnrollmentConfigurations/createEnrollmentNotificationConfiguration']['body'],
    params?: IEndpoints['POST /users/{user-id}/deviceEnrollmentConfigurations/createEnrollmentNotificationConfiguration']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/deviceEnrollmentConfigurations/createEnrollmentNotificationConfiguration']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/deviceEnrollmentConfigurations/createEnrollmentNotificationConfiguration',
      paramDefs: {
        path: ['user-id'],
      },
      params,
      body,
    };
  },
};

export const hasPayloadLinks = {
  /**
   * `POST /users/{user-id}/deviceEnrollmentConfigurations/hasPayloadLinks`
   *
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/deviceEnrollmentConfigurations/hasPayloadLinks']['body'],
    params?: IEndpoints['POST /users/{user-id}/deviceEnrollmentConfigurations/hasPayloadLinks']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/deviceEnrollmentConfigurations/hasPayloadLinks']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/deviceEnrollmentConfigurations/hasPayloadLinks',
      paramDefs: {
        path: ['user-id'],
      },
      params,
      body,
    };
  },
};

export const setPriority = {
  /**
   * `POST /users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/setPriority`
   *
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/setPriority']['body'],
    params?: IEndpoints['POST /users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/setPriority']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/setPriority']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/setPriority',
      paramDefs: {
        path: ['user-id', 'deviceEnrollmentConfiguration-id'],
      },
      params,
      body,
    };
  },
};
