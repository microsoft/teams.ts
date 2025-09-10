import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/virtualEndpoint/userSettings/{cloudPcUserSetting-id}': Operation<
    '/deviceManagement/virtualEndpoint/userSettings/{cloudPcUserSetting-id}',
    'delete'
  >;
  'GET /deviceManagement/virtualEndpoint/userSettings': Operation<
    '/deviceManagement/virtualEndpoint/userSettings',
    'get'
  >;
  'GET /deviceManagement/virtualEndpoint/userSettings/{cloudPcUserSetting-id}': Operation<
    '/deviceManagement/virtualEndpoint/userSettings/{cloudPcUserSetting-id}',
    'get'
  >;
  'PATCH /deviceManagement/virtualEndpoint/userSettings/{cloudPcUserSetting-id}': Operation<
    '/deviceManagement/virtualEndpoint/userSettings/{cloudPcUserSetting-id}',
    'patch'
  >;
  'POST /deviceManagement/virtualEndpoint/userSettings': Operation<
    '/deviceManagement/virtualEndpoint/userSettings',
    'post'
  >;
  'POST /deviceManagement/virtualEndpoint/userSettings/{cloudPcUserSetting-id}/assign': Operation<
    '/deviceManagement/virtualEndpoint/userSettings/{cloudPcUserSetting-id}/assign',
    'post'
  >;
  'GET /deviceManagement/virtualEndpoint/userSettings/{cloudPcUserSetting-id}/assignments': Operation<
    '/deviceManagement/virtualEndpoint/userSettings/{cloudPcUserSetting-id}/assignments',
    'get'
  >;
  'POST /deviceManagement/virtualEndpoint/userSettings/{cloudPcUserSetting-id}/assignments': Operation<
    '/deviceManagement/virtualEndpoint/userSettings/{cloudPcUserSetting-id}/assignments',
    'post'
  >;
  'GET /deviceManagement/virtualEndpoint/userSettings/{cloudPcUserSetting-id}/assignments/{cloudPcUserSettingAssignment-id}': Operation<
    '/deviceManagement/virtualEndpoint/userSettings/{cloudPcUserSetting-id}/assignments/{cloudPcUserSettingAssignment-id}',
    'get'
  >;
  'PATCH /deviceManagement/virtualEndpoint/userSettings/{cloudPcUserSetting-id}/assignments/{cloudPcUserSettingAssignment-id}': Operation<
    '/deviceManagement/virtualEndpoint/userSettings/{cloudPcUserSetting-id}/assignments/{cloudPcUserSettingAssignment-id}',
    'patch'
  >;
  'DELETE /deviceManagement/virtualEndpoint/userSettings/{cloudPcUserSetting-id}/assignments/{cloudPcUserSettingAssignment-id}': Operation<
    '/deviceManagement/virtualEndpoint/userSettings/{cloudPcUserSetting-id}/assignments/{cloudPcUserSettingAssignment-id}',
    'delete'
  >;
}

/**
 * `DELETE /deviceManagement/virtualEndpoint/userSettings/{cloudPcUserSetting-id}`
 *
 * Delete a cloudPcUserSetting object.
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/virtualEndpoint/userSettings/{cloudPcUserSetting-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/virtualEndpoint/userSettings/{cloudPcUserSetting-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/virtualEndpoint/userSettings/{cloudPcUserSetting-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['cloudPcUserSetting-id'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/virtualEndpoint/userSettings`
 *
 * Retrieve a list of cloudPcUserSetting objects.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/virtualEndpoint/userSettings']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/virtualEndpoint/userSettings']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/virtualEndpoint/userSettings',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/virtualEndpoint/userSettings/{cloudPcUserSetting-id}`
 *
 * Read the properties and relationships of a cloudPcUserSetting object.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/virtualEndpoint/userSettings/{cloudPcUserSetting-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/virtualEndpoint/userSettings/{cloudPcUserSetting-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/virtualEndpoint/userSettings/{cloudPcUserSetting-id}',
    paramDefs: {
      path: ['cloudPcUserSetting-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /deviceManagement/virtualEndpoint/userSettings/{cloudPcUserSetting-id}`
 *
 * Update the properties of a cloudPcUserSetting object.
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/virtualEndpoint/userSettings/{cloudPcUserSetting-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/virtualEndpoint/userSettings/{cloudPcUserSetting-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/virtualEndpoint/userSettings/{cloudPcUserSetting-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/virtualEndpoint/userSettings/{cloudPcUserSetting-id}',
    paramDefs: {
      path: ['cloudPcUserSetting-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/virtualEndpoint/userSettings`
 *
 * Create a new cloudPcUserSetting object.
 */
export function create(
  body: IEndpoints['POST /deviceManagement/virtualEndpoint/userSettings']['body']
): EndpointRequest<IEndpoints['POST /deviceManagement/virtualEndpoint/userSettings']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/virtualEndpoint/userSettings',
    body,
  };
}

export const assign = {
  /**
   * `POST /deviceManagement/virtualEndpoint/userSettings/{cloudPcUserSetting-id}/assign`
   *
   * Assign a cloudPcUserSetting to user groups.
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/virtualEndpoint/userSettings/{cloudPcUserSetting-id}/assign']['body'],
    params?: IEndpoints['POST /deviceManagement/virtualEndpoint/userSettings/{cloudPcUserSetting-id}/assign']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/virtualEndpoint/userSettings/{cloudPcUserSetting-id}/assign']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/virtualEndpoint/userSettings/{cloudPcUserSetting-id}/assign',
      paramDefs: {
        path: ['cloudPcUserSetting-id'],
      },
      params,
      body,
    };
  },
};

export const assignments = {
  /**
   * `GET /deviceManagement/virtualEndpoint/userSettings/{cloudPcUserSetting-id}/assignments`
   *
   * Represents the set of Microsoft 365 groups and security groups in Microsoft Entra ID that have cloudPCUserSetting assigned. Returned only on $expand. For an example, see Get cloudPcUserSettingample.
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/virtualEndpoint/userSettings/{cloudPcUserSetting-id}/assignments']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/virtualEndpoint/userSettings/{cloudPcUserSetting-id}/assignments']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/virtualEndpoint/userSettings/{cloudPcUserSetting-id}/assignments',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['cloudPcUserSetting-id'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/virtualEndpoint/userSettings/{cloudPcUserSetting-id}/assignments`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/virtualEndpoint/userSettings/{cloudPcUserSetting-id}/assignments']['body'],
    params?: IEndpoints['POST /deviceManagement/virtualEndpoint/userSettings/{cloudPcUserSetting-id}/assignments']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/virtualEndpoint/userSettings/{cloudPcUserSetting-id}/assignments']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/virtualEndpoint/userSettings/{cloudPcUserSetting-id}/assignments',
      paramDefs: {
        path: ['cloudPcUserSetting-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /deviceManagement/virtualEndpoint/userSettings/{cloudPcUserSetting-id}/assignments/{cloudPcUserSettingAssignment-id}`
   *
   * Represents the set of Microsoft 365 groups and security groups in Microsoft Entra ID that have cloudPCUserSetting assigned. Returned only on $expand. For an example, see Get cloudPcUserSettingample.
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/virtualEndpoint/userSettings/{cloudPcUserSetting-id}/assignments/{cloudPcUserSettingAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/virtualEndpoint/userSettings/{cloudPcUserSetting-id}/assignments/{cloudPcUserSettingAssignment-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/virtualEndpoint/userSettings/{cloudPcUserSetting-id}/assignments/{cloudPcUserSettingAssignment-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['cloudPcUserSetting-id', 'cloudPcUserSettingAssignment-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/virtualEndpoint/userSettings/{cloudPcUserSetting-id}/assignments/{cloudPcUserSettingAssignment-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/virtualEndpoint/userSettings/{cloudPcUserSetting-id}/assignments/{cloudPcUserSettingAssignment-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/virtualEndpoint/userSettings/{cloudPcUserSetting-id}/assignments/{cloudPcUserSettingAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/virtualEndpoint/userSettings/{cloudPcUserSetting-id}/assignments/{cloudPcUserSettingAssignment-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/virtualEndpoint/userSettings/{cloudPcUserSetting-id}/assignments/{cloudPcUserSettingAssignment-id}',
      paramDefs: {
        path: ['cloudPcUserSetting-id', 'cloudPcUserSettingAssignment-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/virtualEndpoint/userSettings/{cloudPcUserSetting-id}/assignments/{cloudPcUserSettingAssignment-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/virtualEndpoint/userSettings/{cloudPcUserSetting-id}/assignments/{cloudPcUserSettingAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/virtualEndpoint/userSettings/{cloudPcUserSetting-id}/assignments/{cloudPcUserSettingAssignment-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/virtualEndpoint/userSettings/{cloudPcUserSetting-id}/assignments/{cloudPcUserSettingAssignment-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['cloudPcUserSetting-id', 'cloudPcUserSettingAssignment-id'],
      },
      params,
    };
  },
};
