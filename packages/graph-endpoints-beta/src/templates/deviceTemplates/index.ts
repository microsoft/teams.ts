import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /templates/deviceTemplates/{deviceTemplate-id}': Operation<
    '/templates/deviceTemplates/{deviceTemplate-id}',
    'delete'
  >;
  'GET /templates/deviceTemplates': Operation<'/templates/deviceTemplates', 'get'>;
  'GET /templates/deviceTemplates/{deviceTemplate-id}': Operation<
    '/templates/deviceTemplates/{deviceTemplate-id}',
    'get'
  >;
  'PATCH /templates/deviceTemplates/{deviceTemplate-id}': Operation<
    '/templates/deviceTemplates/{deviceTemplate-id}',
    'patch'
  >;
  'POST /templates/deviceTemplates': Operation<'/templates/deviceTemplates', 'post'>;
  'POST /templates/deviceTemplates/{deviceTemplate-id}/createDeviceFromTemplate': Operation<
    '/templates/deviceTemplates/{deviceTemplate-id}/createDeviceFromTemplate',
    'post'
  >;
  'GET /templates/deviceTemplates/{deviceTemplate-id}/deviceInstances': Operation<
    '/templates/deviceTemplates/{deviceTemplate-id}/deviceInstances',
    'get'
  >;
  'GET /templates/deviceTemplates/{deviceTemplate-id}/deviceInstances/{device-id}': Operation<
    '/templates/deviceTemplates/{deviceTemplate-id}/deviceInstances/{device-id}',
    'get'
  >;
  'GET /templates/deviceTemplates/{deviceTemplate-id}/owners': Operation<
    '/templates/deviceTemplates/{deviceTemplate-id}/owners',
    'get'
  >;
  'GET /templates/deviceTemplates/{deviceTemplate-id}/owners/{directoryObject-id}': Operation<
    '/templates/deviceTemplates/{deviceTemplate-id}/owners/{directoryObject-id}',
    'get'
  >;
}

/**
 * `DELETE /templates/deviceTemplates/{deviceTemplate-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /templates/deviceTemplates/{deviceTemplate-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /templates/deviceTemplates/{deviceTemplate-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/templates/deviceTemplates/{deviceTemplate-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['deviceTemplate-id'],
    },
    params,
  };
}

/**
 * `GET /templates/deviceTemplates`
 *
 * Defines the templates that are common to a set of device objects, such as IoT devices.
 */
export function list(
  params?: IEndpoints['GET /templates/deviceTemplates']['parameters']
): EndpointRequest<IEndpoints['GET /templates/deviceTemplates']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/templates/deviceTemplates',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /templates/deviceTemplates/{deviceTemplate-id}`
 *
 * Defines the templates that are common to a set of device objects, such as IoT devices.
 */
export function get(
  params?: IEndpoints['GET /templates/deviceTemplates/{deviceTemplate-id}']['parameters']
): EndpointRequest<IEndpoints['GET /templates/deviceTemplates/{deviceTemplate-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/templates/deviceTemplates/{deviceTemplate-id}',
    paramDefs: {
      path: ['deviceTemplate-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /templates/deviceTemplates/{deviceTemplate-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /templates/deviceTemplates/{deviceTemplate-id}']['body'],
  params?: IEndpoints['PATCH /templates/deviceTemplates/{deviceTemplate-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /templates/deviceTemplates/{deviceTemplate-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/templates/deviceTemplates/{deviceTemplate-id}',
    paramDefs: {
      path: ['deviceTemplate-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /templates/deviceTemplates`
 *
 */
export function create(
  body: IEndpoints['POST /templates/deviceTemplates']['body']
): EndpointRequest<IEndpoints['POST /templates/deviceTemplates']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/templates/deviceTemplates',
    body,
  };
}

export const createDeviceFromTemplate = {
  /**
   * `POST /templates/deviceTemplates/{deviceTemplate-id}/createDeviceFromTemplate`
   *
   * Create a new device from a deviceTemplate.
   */
  create: function create(
    body: IEndpoints['POST /templates/deviceTemplates/{deviceTemplate-id}/createDeviceFromTemplate']['body'],
    params?: IEndpoints['POST /templates/deviceTemplates/{deviceTemplate-id}/createDeviceFromTemplate']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /templates/deviceTemplates/{deviceTemplate-id}/createDeviceFromTemplate']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/templates/deviceTemplates/{deviceTemplate-id}/createDeviceFromTemplate',
      paramDefs: {
        path: ['deviceTemplate-id'],
      },
      params,
      body,
    };
  },
};

export const deviceInstances = {
  /**
   * `GET /templates/deviceTemplates/{deviceTemplate-id}/deviceInstances`
   *
   * Collection of device objects created based on this template.
   */
  list: function list(
    params?: IEndpoints['GET /templates/deviceTemplates/{deviceTemplate-id}/deviceInstances']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /templates/deviceTemplates/{deviceTemplate-id}/deviceInstances']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/templates/deviceTemplates/{deviceTemplate-id}/deviceInstances',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['deviceTemplate-id'],
      },
      params,
    };
  },
  /**
   * `GET /templates/deviceTemplates/{deviceTemplate-id}/deviceInstances/{device-id}`
   *
   * Collection of device objects created based on this template.
   */
  get: function get(
    params?: IEndpoints['GET /templates/deviceTemplates/{deviceTemplate-id}/deviceInstances/{device-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /templates/deviceTemplates/{deviceTemplate-id}/deviceInstances/{device-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/templates/deviceTemplates/{deviceTemplate-id}/deviceInstances/{device-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['deviceTemplate-id', 'device-id'],
      },
      params,
    };
  },
};

export const owners = {
  /**
   * `GET /templates/deviceTemplates/{deviceTemplate-id}/owners`
   *
   * Collection of directory objects that can manage the device template and the related deviceInstances. Owners can be represented as service principals, users, or applications. An owner has full privileges over the device template and doesn&#x27;t require other administrator roles to create, update, or delete devices from this template, as well as to add or remove template owners. There can be a maximum of 100 owners on a device template.  Supports $expand.
   */
  list: function list(
    params?: IEndpoints['GET /templates/deviceTemplates/{deviceTemplate-id}/owners']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /templates/deviceTemplates/{deviceTemplate-id}/owners']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/templates/deviceTemplates/{deviceTemplate-id}/owners',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['deviceTemplate-id'],
      },
      params,
    };
  },
  /**
   * `GET /templates/deviceTemplates/{deviceTemplate-id}/owners/{directoryObject-id}`
   *
   * Collection of directory objects that can manage the device template and the related deviceInstances. Owners can be represented as service principals, users, or applications. An owner has full privileges over the device template and doesn&#x27;t require other administrator roles to create, update, or delete devices from this template, as well as to add or remove template owners. There can be a maximum of 100 owners on a device template.  Supports $expand.
   */
  get: function get(
    params?: IEndpoints['GET /templates/deviceTemplates/{deviceTemplate-id}/owners/{directoryObject-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /templates/deviceTemplates/{deviceTemplate-id}/owners/{directoryObject-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/templates/deviceTemplates/{deviceTemplate-id}/owners/{directoryObject-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['deviceTemplate-id', 'directoryObject-id'],
      },
      params,
    };
  },
};
