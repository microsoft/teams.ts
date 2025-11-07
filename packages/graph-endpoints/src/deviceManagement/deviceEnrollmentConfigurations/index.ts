import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}': Operation<
    '/deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}',
    'delete'
  >;
  'GET /deviceManagement/deviceEnrollmentConfigurations': Operation<
    '/deviceManagement/deviceEnrollmentConfigurations',
    'get'
  >;
  'GET /deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}': Operation<
    '/deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}',
    'get'
  >;
  'PATCH /deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}': Operation<
    '/deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}',
    'patch'
  >;
  'POST /deviceManagement/deviceEnrollmentConfigurations': Operation<
    '/deviceManagement/deviceEnrollmentConfigurations',
    'post'
  >;
  'POST /deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assign': Operation<
    '/deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assign',
    'post'
  >;
  'GET /deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments': Operation<
    '/deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments',
    'get'
  >;
  'POST /deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments': Operation<
    '/deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments',
    'post'
  >;
  'GET /deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments/{enrollmentConfigurationAssignment-id}': Operation<
    '/deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments/{enrollmentConfigurationAssignment-id}',
    'get'
  >;
  'PATCH /deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments/{enrollmentConfigurationAssignment-id}': Operation<
    '/deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments/{enrollmentConfigurationAssignment-id}',
    'patch'
  >;
  'DELETE /deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments/{enrollmentConfigurationAssignment-id}': Operation<
    '/deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments/{enrollmentConfigurationAssignment-id}',
    'delete'
  >;
  'POST /deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/setPriority': Operation<
    '/deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/setPriority',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}']['response']
> {
  return {
    method: 'delete',
    path: '/deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['deviceEnrollmentConfiguration-id'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/deviceEnrollmentConfigurations`
 *
 * The list of device enrollment configurations
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/deviceEnrollmentConfigurations']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/deviceEnrollmentConfigurations']['response']> {
  return {
    method: 'get',
    path: '/deviceManagement/deviceEnrollmentConfigurations',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}`
 *
 * The list of device enrollment configurations
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}']['response']
> {
  return {
    method: 'get',
    path: '/deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}',
    paramDefs: {
      path: ['deviceEnrollmentConfiguration-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}']['response']
> {
  return {
    method: 'patch',
    path: '/deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}',
    paramDefs: {
      path: ['deviceEnrollmentConfiguration-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/deviceEnrollmentConfigurations`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/deviceEnrollmentConfigurations']['body']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/deviceEnrollmentConfigurations']['response']
> {
  return {
    method: 'post',
    path: '/deviceManagement/deviceEnrollmentConfigurations',
    body,
  };
}

export const assign = {
  /**
   * `POST /deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assign`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assign']['body'],
    params?: IEndpoints['POST /deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assign']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assign']['response']
  > {
    return {
      method: 'post',
      path: '/deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assign',
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
   * `GET /deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments`
   *
   * The list of group assignments for the device configuration profile
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments']['response']
  > {
    return {
      method: 'get',
      path: '/deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['deviceEnrollmentConfiguration-id'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments']['body'],
    params?: IEndpoints['POST /deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments']['response']
  > {
    return {
      method: 'post',
      path: '/deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments',
      paramDefs: {
        path: ['deviceEnrollmentConfiguration-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments/{enrollmentConfigurationAssignment-id}`
   *
   * The list of group assignments for the device configuration profile
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments/{enrollmentConfigurationAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments/{enrollmentConfigurationAssignment-id}']['response']
  > {
    return {
      method: 'get',
      path: '/deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments/{enrollmentConfigurationAssignment-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['deviceEnrollmentConfiguration-id', 'enrollmentConfigurationAssignment-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments/{enrollmentConfigurationAssignment-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments/{enrollmentConfigurationAssignment-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments/{enrollmentConfigurationAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments/{enrollmentConfigurationAssignment-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments/{enrollmentConfigurationAssignment-id}',
      paramDefs: {
        path: ['deviceEnrollmentConfiguration-id', 'enrollmentConfigurationAssignment-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments/{enrollmentConfigurationAssignment-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments/{enrollmentConfigurationAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments/{enrollmentConfigurationAssignment-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments/{enrollmentConfigurationAssignment-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['deviceEnrollmentConfiguration-id', 'enrollmentConfigurationAssignment-id'],
      },
      params,
    };
  },
};

export const setPriority = {
  /**
   * `POST /deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/setPriority`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/setPriority']['body'],
    params?: IEndpoints['POST /deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/setPriority']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/setPriority']['response']
  > {
    return {
      method: 'post',
      path: '/deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/setPriority',
      paramDefs: {
        path: ['deviceEnrollmentConfiguration-id'],
      },
      params,
      body,
    };
  },
};
