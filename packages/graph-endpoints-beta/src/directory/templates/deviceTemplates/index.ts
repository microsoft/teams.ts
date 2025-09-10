import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /directory/templates/deviceTemplates/{deviceTemplate-id}': Operation<
    '/directory/templates/deviceTemplates/{deviceTemplate-id}',
    'delete'
  >;
  'GET /directory/templates/deviceTemplates': Operation<
    '/directory/templates/deviceTemplates',
    'get'
  >;
  'GET /directory/templates/deviceTemplates/{deviceTemplate-id}': Operation<
    '/directory/templates/deviceTemplates/{deviceTemplate-id}',
    'get'
  >;
  'PATCH /directory/templates/deviceTemplates/{deviceTemplate-id}': Operation<
    '/directory/templates/deviceTemplates/{deviceTemplate-id}',
    'patch'
  >;
  'POST /directory/templates/deviceTemplates': Operation<
    '/directory/templates/deviceTemplates',
    'post'
  >;
  'POST /directory/templates/deviceTemplates/{deviceTemplate-id}/createDeviceFromTemplate': Operation<
    '/directory/templates/deviceTemplates/{deviceTemplate-id}/createDeviceFromTemplate',
    'post'
  >;
  'GET /directory/templates/deviceTemplates/{deviceTemplate-id}/deviceInstances': Operation<
    '/directory/templates/deviceTemplates/{deviceTemplate-id}/deviceInstances',
    'get'
  >;
  'GET /directory/templates/deviceTemplates/{deviceTemplate-id}/deviceInstances/{device-id}': Operation<
    '/directory/templates/deviceTemplates/{deviceTemplate-id}/deviceInstances/{device-id}',
    'get'
  >;
  'GET /directory/templates/deviceTemplates/{deviceTemplate-id}/owners': Operation<
    '/directory/templates/deviceTemplates/{deviceTemplate-id}/owners',
    'get'
  >;
  'GET /directory/templates/deviceTemplates/{deviceTemplate-id}/owners/{directoryObject-id}': Operation<
    '/directory/templates/deviceTemplates/{deviceTemplate-id}/owners/{directoryObject-id}',
    'get'
  >;
}

/**
 * `DELETE /directory/templates/deviceTemplates/{deviceTemplate-id}`
 *
 * Delete a registered deviceTemplate. You must first delete all devices linked to the template before deleting the template itself. Only registered owners of the template can perform this operation.
 */
export function del(
  params?: IEndpoints['DELETE /directory/templates/deviceTemplates/{deviceTemplate-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /directory/templates/deviceTemplates/{deviceTemplate-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/directory/templates/deviceTemplates/{deviceTemplate-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['deviceTemplate-id'],
    },
    params,
  };
}

/**
 * `GET /directory/templates/deviceTemplates`
 *
 * Get a list of deviceTemplate objects registered in the directory.
 */
export function list(
  params?: IEndpoints['GET /directory/templates/deviceTemplates']['parameters']
): EndpointRequest<IEndpoints['GET /directory/templates/deviceTemplates']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/directory/templates/deviceTemplates',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /directory/templates/deviceTemplates/{deviceTemplate-id}`
 *
 * Get the properties and relationships of a deviceTemplate object.
 */
export function get(
  params?: IEndpoints['GET /directory/templates/deviceTemplates/{deviceTemplate-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /directory/templates/deviceTemplates/{deviceTemplate-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/directory/templates/deviceTemplates/{deviceTemplate-id}',
    paramDefs: {
      path: ['deviceTemplate-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /directory/templates/deviceTemplates/{deviceTemplate-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /directory/templates/deviceTemplates/{deviceTemplate-id}']['body'],
  params?: IEndpoints['PATCH /directory/templates/deviceTemplates/{deviceTemplate-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /directory/templates/deviceTemplates/{deviceTemplate-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/directory/templates/deviceTemplates/{deviceTemplate-id}',
    paramDefs: {
      path: ['deviceTemplate-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /directory/templates/deviceTemplates`
 *
 * Create a new deviceTemplate used to identify attributes and manage a group of devices with similar characteristics.
 */
export function create(
  body: IEndpoints['POST /directory/templates/deviceTemplates']['body']
): EndpointRequest<IEndpoints['POST /directory/templates/deviceTemplates']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/directory/templates/deviceTemplates',
    body,
  };
}

export const createDeviceFromTemplate = {
  /**
   * `POST /directory/templates/deviceTemplates/{deviceTemplate-id}/createDeviceFromTemplate`
   *
   * Create a new device from a deviceTemplate.
   */
  create: function create(
    body: IEndpoints['POST /directory/templates/deviceTemplates/{deviceTemplate-id}/createDeviceFromTemplate']['body'],
    params?: IEndpoints['POST /directory/templates/deviceTemplates/{deviceTemplate-id}/createDeviceFromTemplate']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /directory/templates/deviceTemplates/{deviceTemplate-id}/createDeviceFromTemplate']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/directory/templates/deviceTemplates/{deviceTemplate-id}/createDeviceFromTemplate',
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
   * `GET /directory/templates/deviceTemplates/{deviceTemplate-id}/deviceInstances`
   *
   * Collection of device objects created based on this template.
   */
  list: function list(
    params?: IEndpoints['GET /directory/templates/deviceTemplates/{deviceTemplate-id}/deviceInstances']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /directory/templates/deviceTemplates/{deviceTemplate-id}/deviceInstances']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/directory/templates/deviceTemplates/{deviceTemplate-id}/deviceInstances',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['deviceTemplate-id'],
      },
      params,
    };
  },
  /**
   * `GET /directory/templates/deviceTemplates/{deviceTemplate-id}/deviceInstances/{device-id}`
   *
   * Collection of device objects created based on this template.
   */
  get: function get(
    params?: IEndpoints['GET /directory/templates/deviceTemplates/{deviceTemplate-id}/deviceInstances/{device-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /directory/templates/deviceTemplates/{deviceTemplate-id}/deviceInstances/{device-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/directory/templates/deviceTemplates/{deviceTemplate-id}/deviceInstances/{device-id}',
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
   * `GET /directory/templates/deviceTemplates/{deviceTemplate-id}/owners`
   *
   * Get a list of owners for a deviceTemplate object. Owners can be represented as service principals, users, or applications.
   */
  list: function list(
    params?: IEndpoints['GET /directory/templates/deviceTemplates/{deviceTemplate-id}/owners']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /directory/templates/deviceTemplates/{deviceTemplate-id}/owners']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/directory/templates/deviceTemplates/{deviceTemplate-id}/owners',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['deviceTemplate-id'],
      },
      params,
    };
  },
  /**
   * `GET /directory/templates/deviceTemplates/{deviceTemplate-id}/owners/{directoryObject-id}`
   *
   * Collection of directory objects that can manage the device template and the related deviceInstances. Owners can be represented as service principals, users, or applications. An owner has full privileges over the device template and doesn&#x27;t require other administrator roles to create, update, or delete devices from this template, as well as to add or remove template owners. There can be a maximum of 100 owners on a device template.  Supports $expand.
   */
  get: function get(
    params?: IEndpoints['GET /directory/templates/deviceTemplates/{deviceTemplate-id}/owners/{directoryObject-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /directory/templates/deviceTemplates/{deviceTemplate-id}/owners/{directoryObject-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/directory/templates/deviceTemplates/{deviceTemplate-id}/owners/{directoryObject-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['deviceTemplate-id', 'directoryObject-id'],
      },
      params,
    };
  },
};
