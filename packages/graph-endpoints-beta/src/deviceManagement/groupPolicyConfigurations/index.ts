export * as definitionValues from './definitionValues';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}': Operation<
    '/deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}',
    'delete'
  >;
  'GET /deviceManagement/groupPolicyConfigurations': Operation<
    '/deviceManagement/groupPolicyConfigurations',
    'get'
  >;
  'GET /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}': Operation<
    '/deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}',
    'get'
  >;
  'PATCH /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}': Operation<
    '/deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}',
    'patch'
  >;
  'POST /deviceManagement/groupPolicyConfigurations': Operation<
    '/deviceManagement/groupPolicyConfigurations',
    'post'
  >;
  'POST /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/assign': Operation<
    '/deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/assign',
    'post'
  >;
  'GET /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/assignments': Operation<
    '/deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/assignments',
    'get'
  >;
  'POST /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/assignments': Operation<
    '/deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/assignments',
    'post'
  >;
  'GET /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/assignments/{groupPolicyConfigurationAssignment-id}': Operation<
    '/deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/assignments/{groupPolicyConfigurationAssignment-id}',
    'get'
  >;
  'PATCH /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/assignments/{groupPolicyConfigurationAssignment-id}': Operation<
    '/deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/assignments/{groupPolicyConfigurationAssignment-id}',
    'patch'
  >;
  'DELETE /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/assignments/{groupPolicyConfigurationAssignment-id}': Operation<
    '/deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/assignments/{groupPolicyConfigurationAssignment-id}',
    'delete'
  >;
  'POST /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/updateDefinitionValues': Operation<
    '/deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/updateDefinitionValues',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['groupPolicyConfiguration-id'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/groupPolicyConfigurations`
 *
 * The group policy configurations created by this account.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/groupPolicyConfigurations']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/groupPolicyConfigurations']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/groupPolicyConfigurations',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}`
 *
 * The group policy configurations created by this account.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}',
    paramDefs: {
      path: ['groupPolicyConfiguration-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}',
    paramDefs: {
      path: ['groupPolicyConfiguration-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/groupPolicyConfigurations`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/groupPolicyConfigurations']['body']
): EndpointRequest<IEndpoints['POST /deviceManagement/groupPolicyConfigurations']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/groupPolicyConfigurations',
    body,
  };
}

export const assign = {
  /**
   * `POST /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/assign`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/assign']['body'],
    params?: IEndpoints['POST /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/assign']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/assign']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/assign',
      paramDefs: {
        path: ['groupPolicyConfiguration-id'],
      },
      params,
      body,
    };
  },
};

export const assignments = {
  /**
   * `GET /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/assignments`
   *
   * The list of group assignments for the configuration.
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/assignments']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/assignments']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/assignments',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['groupPolicyConfiguration-id'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/assignments`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/assignments']['body'],
    params?: IEndpoints['POST /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/assignments']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/assignments']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/assignments',
      paramDefs: {
        path: ['groupPolicyConfiguration-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/assignments/{groupPolicyConfigurationAssignment-id}`
   *
   * The list of group assignments for the configuration.
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/assignments/{groupPolicyConfigurationAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/assignments/{groupPolicyConfigurationAssignment-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/assignments/{groupPolicyConfigurationAssignment-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['groupPolicyConfiguration-id', 'groupPolicyConfigurationAssignment-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/assignments/{groupPolicyConfigurationAssignment-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/assignments/{groupPolicyConfigurationAssignment-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/assignments/{groupPolicyConfigurationAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/assignments/{groupPolicyConfigurationAssignment-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/assignments/{groupPolicyConfigurationAssignment-id}',
      paramDefs: {
        path: ['groupPolicyConfiguration-id', 'groupPolicyConfigurationAssignment-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/assignments/{groupPolicyConfigurationAssignment-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/assignments/{groupPolicyConfigurationAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/assignments/{groupPolicyConfigurationAssignment-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/assignments/{groupPolicyConfigurationAssignment-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['groupPolicyConfiguration-id', 'groupPolicyConfigurationAssignment-id'],
      },
      params,
    };
  },
};

export const updateDefinitionValues = {
  /**
   * `POST /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/updateDefinitionValues`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/updateDefinitionValues']['body'],
    params?: IEndpoints['POST /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/updateDefinitionValues']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/updateDefinitionValues']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/updateDefinitionValues',
      paramDefs: {
        path: ['groupPolicyConfiguration-id'],
      },
      params,
      body,
    };
  },
};
