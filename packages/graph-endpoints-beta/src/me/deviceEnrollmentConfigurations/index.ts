import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}': Operation<
    '/me/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}',
    'delete'
  >;
  'GET /me/deviceEnrollmentConfigurations': Operation<'/me/deviceEnrollmentConfigurations', 'get'>;
  'GET /me/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}': Operation<
    '/me/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}',
    'get'
  >;
  'PATCH /me/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}': Operation<
    '/me/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}',
    'patch'
  >;
  'POST /me/deviceEnrollmentConfigurations': Operation<
    '/me/deviceEnrollmentConfigurations',
    'post'
  >;
  'POST /me/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assign': Operation<
    '/me/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assign',
    'post'
  >;
  'GET /me/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments': Operation<
    '/me/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments',
    'get'
  >;
  'POST /me/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments': Operation<
    '/me/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments',
    'post'
  >;
  'GET /me/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments/{enrollmentConfigurationAssignment-id}': Operation<
    '/me/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments/{enrollmentConfigurationAssignment-id}',
    'get'
  >;
  'PATCH /me/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments/{enrollmentConfigurationAssignment-id}': Operation<
    '/me/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments/{enrollmentConfigurationAssignment-id}',
    'patch'
  >;
  'DELETE /me/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments/{enrollmentConfigurationAssignment-id}': Operation<
    '/me/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments/{enrollmentConfigurationAssignment-id}',
    'delete'
  >;
  'POST /me/deviceEnrollmentConfigurations/createEnrollmentNotificationConfiguration': Operation<
    '/me/deviceEnrollmentConfigurations/createEnrollmentNotificationConfiguration',
    'post'
  >;
  'POST /me/deviceEnrollmentConfigurations/hasPayloadLinks': Operation<
    '/me/deviceEnrollmentConfigurations/hasPayloadLinks',
    'post'
  >;
  'POST /me/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/setPriority': Operation<
    '/me/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/setPriority',
    'post'
  >;
}

/**
 * `DELETE /me/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['deviceEnrollmentConfiguration-id'],
    },
    params,
  };
}

/**
 * `GET /me/deviceEnrollmentConfigurations`
 *
 * Get enrollment configurations targeted to the user
 */
export function list(
  params?: IEndpoints['GET /me/deviceEnrollmentConfigurations']['parameters']
): EndpointRequest<IEndpoints['GET /me/deviceEnrollmentConfigurations']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/deviceEnrollmentConfigurations',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /me/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}`
 *
 * Get enrollment configurations targeted to the user
 */
export function get(
  params?: IEndpoints['GET /me/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}',
    paramDefs: {
      path: ['deviceEnrollmentConfiguration-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /me/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}']['body'],
  params?: IEndpoints['PATCH /me/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}',
    paramDefs: {
      path: ['deviceEnrollmentConfiguration-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /me/deviceEnrollmentConfigurations`
 *
 */
export function create(
  body: IEndpoints['POST /me/deviceEnrollmentConfigurations']['body']
): EndpointRequest<IEndpoints['POST /me/deviceEnrollmentConfigurations']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/deviceEnrollmentConfigurations',
    body,
  };
}

export const assign = {
  /**
   * `POST /me/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assign`
   *
   */
  create: function create(
    body: IEndpoints['POST /me/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assign']['body'],
    params?: IEndpoints['POST /me/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assign']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assign']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assign',
      paramDefs: {
        path: ['deviceEnrollmentConfiguration-id'],
      },
      params,
      body,
    };
  },
};

export const assignments = {
  /**
   * `GET /me/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments`
   *
   * The list of group assignments for the device configuration profile
   */
  list: function list(
    params?: IEndpoints['GET /me/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['deviceEnrollmentConfiguration-id'],
      },
      params,
    };
  },
  /**
   * `POST /me/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments`
   *
   */
  create: function create(
    body: IEndpoints['POST /me/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments']['body'],
    params?: IEndpoints['POST /me/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments',
      paramDefs: {
        path: ['deviceEnrollmentConfiguration-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /me/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments/{enrollmentConfigurationAssignment-id}`
   *
   * The list of group assignments for the device configuration profile
   */
  get: function get(
    params?: IEndpoints['GET /me/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments/{enrollmentConfigurationAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments/{enrollmentConfigurationAssignment-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments/{enrollmentConfigurationAssignment-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['deviceEnrollmentConfiguration-id', 'enrollmentConfigurationAssignment-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /me/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments/{enrollmentConfigurationAssignment-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /me/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments/{enrollmentConfigurationAssignment-id}']['body'],
    params?: IEndpoints['PATCH /me/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments/{enrollmentConfigurationAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /me/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments/{enrollmentConfigurationAssignment-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/me/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments/{enrollmentConfigurationAssignment-id}',
      paramDefs: {
        path: ['deviceEnrollmentConfiguration-id', 'enrollmentConfigurationAssignment-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /me/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments/{enrollmentConfigurationAssignment-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /me/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments/{enrollmentConfigurationAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /me/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments/{enrollmentConfigurationAssignment-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/me/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments/{enrollmentConfigurationAssignment-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['deviceEnrollmentConfiguration-id', 'enrollmentConfigurationAssignment-id'],
      },
      params,
    };
  },
};

export const createEnrollmentNotificationConfiguration = {
  /**
   * `POST /me/deviceEnrollmentConfigurations/createEnrollmentNotificationConfiguration`
   *
   */
  create: function create(
    body: IEndpoints['POST /me/deviceEnrollmentConfigurations/createEnrollmentNotificationConfiguration']['body']
  ): EndpointRequest<
    IEndpoints['POST /me/deviceEnrollmentConfigurations/createEnrollmentNotificationConfiguration']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/deviceEnrollmentConfigurations/createEnrollmentNotificationConfiguration',
      body,
    };
  },
};

export const hasPayloadLinks = {
  /**
   * `POST /me/deviceEnrollmentConfigurations/hasPayloadLinks`
   *
   */
  create: function create(
    body: IEndpoints['POST /me/deviceEnrollmentConfigurations/hasPayloadLinks']['body']
  ): EndpointRequest<
    IEndpoints['POST /me/deviceEnrollmentConfigurations/hasPayloadLinks']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/deviceEnrollmentConfigurations/hasPayloadLinks',
      body,
    };
  },
};

export const setPriority = {
  /**
   * `POST /me/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/setPriority`
   *
   */
  create: function create(
    body: IEndpoints['POST /me/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/setPriority']['body'],
    params?: IEndpoints['POST /me/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/setPriority']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/setPriority']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/setPriority',
      paramDefs: {
        path: ['deviceEnrollmentConfiguration-id'],
      },
      params,
      body,
    };
  },
};
