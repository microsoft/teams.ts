import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /directory/customSecurityAttributeDefinitions/{customSecurityAttributeDefinition-id}': Operation<
    '/directory/customSecurityAttributeDefinitions/{customSecurityAttributeDefinition-id}',
    'delete'
  >;
  'GET /directory/customSecurityAttributeDefinitions': Operation<
    '/directory/customSecurityAttributeDefinitions',
    'get'
  >;
  'GET /directory/customSecurityAttributeDefinitions/{customSecurityAttributeDefinition-id}': Operation<
    '/directory/customSecurityAttributeDefinitions/{customSecurityAttributeDefinition-id}',
    'get'
  >;
  'PATCH /directory/customSecurityAttributeDefinitions/{customSecurityAttributeDefinition-id}': Operation<
    '/directory/customSecurityAttributeDefinitions/{customSecurityAttributeDefinition-id}',
    'patch'
  >;
  'POST /directory/customSecurityAttributeDefinitions': Operation<
    '/directory/customSecurityAttributeDefinitions',
    'post'
  >;
  'GET /directory/customSecurityAttributeDefinitions/{customSecurityAttributeDefinition-id}/allowedValues': Operation<
    '/directory/customSecurityAttributeDefinitions/{customSecurityAttributeDefinition-id}/allowedValues',
    'get'
  >;
  'POST /directory/customSecurityAttributeDefinitions/{customSecurityAttributeDefinition-id}/allowedValues': Operation<
    '/directory/customSecurityAttributeDefinitions/{customSecurityAttributeDefinition-id}/allowedValues',
    'post'
  >;
  'GET /directory/customSecurityAttributeDefinitions/{customSecurityAttributeDefinition-id}/allowedValues/{allowedValue-id}': Operation<
    '/directory/customSecurityAttributeDefinitions/{customSecurityAttributeDefinition-id}/allowedValues/{allowedValue-id}',
    'get'
  >;
  'PATCH /directory/customSecurityAttributeDefinitions/{customSecurityAttributeDefinition-id}/allowedValues/{allowedValue-id}': Operation<
    '/directory/customSecurityAttributeDefinitions/{customSecurityAttributeDefinition-id}/allowedValues/{allowedValue-id}',
    'patch'
  >;
  'DELETE /directory/customSecurityAttributeDefinitions/{customSecurityAttributeDefinition-id}/allowedValues/{allowedValue-id}': Operation<
    '/directory/customSecurityAttributeDefinitions/{customSecurityAttributeDefinition-id}/allowedValues/{allowedValue-id}',
    'delete'
  >;
}

/**
 * `DELETE /directory/customSecurityAttributeDefinitions/{customSecurityAttributeDefinition-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /directory/customSecurityAttributeDefinitions/{customSecurityAttributeDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /directory/customSecurityAttributeDefinitions/{customSecurityAttributeDefinition-id}']['response']
> {
  return {
    method: 'delete',
    path: '/directory/customSecurityAttributeDefinitions/{customSecurityAttributeDefinition-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['customSecurityAttributeDefinition-id'],
    },
    params,
  };
}

/**
 * `GET /directory/customSecurityAttributeDefinitions`
 *
 * Get a list of the customSecurityAttributeDefinition objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /directory/customSecurityAttributeDefinitions']['parameters']
): EndpointRequest<IEndpoints['GET /directory/customSecurityAttributeDefinitions']['response']> {
  return {
    method: 'get',
    path: '/directory/customSecurityAttributeDefinitions',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /directory/customSecurityAttributeDefinitions/{customSecurityAttributeDefinition-id}`
 *
 * Read the properties and relationships of a customSecurityAttributeDefinition object.
 */
export function get(
  params?: IEndpoints['GET /directory/customSecurityAttributeDefinitions/{customSecurityAttributeDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /directory/customSecurityAttributeDefinitions/{customSecurityAttributeDefinition-id}']['response']
> {
  return {
    method: 'get',
    path: '/directory/customSecurityAttributeDefinitions/{customSecurityAttributeDefinition-id}',
    paramDefs: {
      path: ['customSecurityAttributeDefinition-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /directory/customSecurityAttributeDefinitions/{customSecurityAttributeDefinition-id}`
 *
 * Update the properties of a customSecurityAttributeDefinition object.
 */
export function update(
  body: IEndpoints['PATCH /directory/customSecurityAttributeDefinitions/{customSecurityAttributeDefinition-id}']['body'],
  params?: IEndpoints['PATCH /directory/customSecurityAttributeDefinitions/{customSecurityAttributeDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /directory/customSecurityAttributeDefinitions/{customSecurityAttributeDefinition-id}']['response']
> {
  return {
    method: 'patch',
    path: '/directory/customSecurityAttributeDefinitions/{customSecurityAttributeDefinition-id}',
    paramDefs: {
      path: ['customSecurityAttributeDefinition-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /directory/customSecurityAttributeDefinitions`
 *
 * Create a new customSecurityAttributeDefinition object.
 */
export function create(
  body: IEndpoints['POST /directory/customSecurityAttributeDefinitions']['body']
): EndpointRequest<IEndpoints['POST /directory/customSecurityAttributeDefinitions']['response']> {
  return {
    method: 'post',
    path: '/directory/customSecurityAttributeDefinitions',
    body,
  };
}

export const allowedValues = {
  /**
   * `GET /directory/customSecurityAttributeDefinitions/{customSecurityAttributeDefinition-id}/allowedValues`
   *
   * Get a list of the allowedValue objects and their properties.
   */
  list: function list(
    params?: IEndpoints['GET /directory/customSecurityAttributeDefinitions/{customSecurityAttributeDefinition-id}/allowedValues']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /directory/customSecurityAttributeDefinitions/{customSecurityAttributeDefinition-id}/allowedValues']['response']
  > {
    return {
      method: 'get',
      path: '/directory/customSecurityAttributeDefinitions/{customSecurityAttributeDefinition-id}/allowedValues',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['customSecurityAttributeDefinition-id'],
      },
      params,
    };
  },
  /**
   * `POST /directory/customSecurityAttributeDefinitions/{customSecurityAttributeDefinition-id}/allowedValues`
   *
   * Create a new allowedValue object.
   */
  create: function create(
    body: IEndpoints['POST /directory/customSecurityAttributeDefinitions/{customSecurityAttributeDefinition-id}/allowedValues']['body'],
    params?: IEndpoints['POST /directory/customSecurityAttributeDefinitions/{customSecurityAttributeDefinition-id}/allowedValues']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /directory/customSecurityAttributeDefinitions/{customSecurityAttributeDefinition-id}/allowedValues']['response']
  > {
    return {
      method: 'post',
      path: '/directory/customSecurityAttributeDefinitions/{customSecurityAttributeDefinition-id}/allowedValues',
      paramDefs: {
        path: ['customSecurityAttributeDefinition-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /directory/customSecurityAttributeDefinitions/{customSecurityAttributeDefinition-id}/allowedValues/{allowedValue-id}`
   *
   * Read the properties and relationships of an allowedValue object.
   */
  get: function get(
    params?: IEndpoints['GET /directory/customSecurityAttributeDefinitions/{customSecurityAttributeDefinition-id}/allowedValues/{allowedValue-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /directory/customSecurityAttributeDefinitions/{customSecurityAttributeDefinition-id}/allowedValues/{allowedValue-id}']['response']
  > {
    return {
      method: 'get',
      path: '/directory/customSecurityAttributeDefinitions/{customSecurityAttributeDefinition-id}/allowedValues/{allowedValue-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['customSecurityAttributeDefinition-id', 'allowedValue-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /directory/customSecurityAttributeDefinitions/{customSecurityAttributeDefinition-id}/allowedValues/{allowedValue-id}`
   *
   * Update the properties of an allowedValue object.
   */
  update: function update(
    body: IEndpoints['PATCH /directory/customSecurityAttributeDefinitions/{customSecurityAttributeDefinition-id}/allowedValues/{allowedValue-id}']['body'],
    params?: IEndpoints['PATCH /directory/customSecurityAttributeDefinitions/{customSecurityAttributeDefinition-id}/allowedValues/{allowedValue-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /directory/customSecurityAttributeDefinitions/{customSecurityAttributeDefinition-id}/allowedValues/{allowedValue-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/directory/customSecurityAttributeDefinitions/{customSecurityAttributeDefinition-id}/allowedValues/{allowedValue-id}',
      paramDefs: {
        path: ['customSecurityAttributeDefinition-id', 'allowedValue-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /directory/customSecurityAttributeDefinitions/{customSecurityAttributeDefinition-id}/allowedValues/{allowedValue-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /directory/customSecurityAttributeDefinitions/{customSecurityAttributeDefinition-id}/allowedValues/{allowedValue-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /directory/customSecurityAttributeDefinitions/{customSecurityAttributeDefinition-id}/allowedValues/{allowedValue-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/directory/customSecurityAttributeDefinitions/{customSecurityAttributeDefinition-id}/allowedValues/{allowedValue-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['customSecurityAttributeDefinition-id', 'allowedValue-id'],
      },
      params,
    };
  },
};
