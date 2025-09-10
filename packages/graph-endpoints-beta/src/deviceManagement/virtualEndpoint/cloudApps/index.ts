import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/virtualEndpoint/cloudApps/{cloudPcCloudApp-id}': Operation<
    '/deviceManagement/virtualEndpoint/cloudApps/{cloudPcCloudApp-id}',
    'delete'
  >;
  'GET /deviceManagement/virtualEndpoint/cloudApps': Operation<
    '/deviceManagement/virtualEndpoint/cloudApps',
    'get'
  >;
  'GET /deviceManagement/virtualEndpoint/cloudApps/{cloudPcCloudApp-id}': Operation<
    '/deviceManagement/virtualEndpoint/cloudApps/{cloudPcCloudApp-id}',
    'get'
  >;
  'PATCH /deviceManagement/virtualEndpoint/cloudApps/{cloudPcCloudApp-id}': Operation<
    '/deviceManagement/virtualEndpoint/cloudApps/{cloudPcCloudApp-id}',
    'patch'
  >;
  'POST /deviceManagement/virtualEndpoint/cloudApps': Operation<
    '/deviceManagement/virtualEndpoint/cloudApps',
    'post'
  >;
  'POST /deviceManagement/virtualEndpoint/cloudApps/publish': Operation<
    '/deviceManagement/virtualEndpoint/cloudApps/publish',
    'post'
  >;
  'POST /deviceManagement/virtualEndpoint/cloudApps/reset': Operation<
    '/deviceManagement/virtualEndpoint/cloudApps/reset',
    'post'
  >;
  'POST /deviceManagement/virtualEndpoint/cloudApps/unpublish': Operation<
    '/deviceManagement/virtualEndpoint/cloudApps/unpublish',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/virtualEndpoint/cloudApps/{cloudPcCloudApp-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/virtualEndpoint/cloudApps/{cloudPcCloudApp-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/virtualEndpoint/cloudApps/{cloudPcCloudApp-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/virtualEndpoint/cloudApps/{cloudPcCloudApp-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['cloudPcCloudApp-id'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/virtualEndpoint/cloudApps`
 *
 * List all the cloudPcCloudApp objects filtered by a provision policy ID.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/virtualEndpoint/cloudApps']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/virtualEndpoint/cloudApps']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/virtualEndpoint/cloudApps',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/virtualEndpoint/cloudApps/{cloudPcCloudApp-id}`
 *
 * Read the properties of a specific cloudPcCloudApp object.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/virtualEndpoint/cloudApps/{cloudPcCloudApp-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/virtualEndpoint/cloudApps/{cloudPcCloudApp-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/virtualEndpoint/cloudApps/{cloudPcCloudApp-id}',
    paramDefs: {
      path: ['cloudPcCloudApp-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /deviceManagement/virtualEndpoint/cloudApps/{cloudPcCloudApp-id}`
 *
 * Update the properties of a cloudPcCloudApp object, such as the display name or icon path.
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/virtualEndpoint/cloudApps/{cloudPcCloudApp-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/virtualEndpoint/cloudApps/{cloudPcCloudApp-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/virtualEndpoint/cloudApps/{cloudPcCloudApp-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/virtualEndpoint/cloudApps/{cloudPcCloudApp-id}',
    paramDefs: {
      path: ['cloudPcCloudApp-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/virtualEndpoint/cloudApps`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/virtualEndpoint/cloudApps']['body']
): EndpointRequest<IEndpoints['POST /deviceManagement/virtualEndpoint/cloudApps']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/virtualEndpoint/cloudApps',
    body,
  };
}

export const publish = {
  /**
   * `POST /deviceManagement/virtualEndpoint/cloudApps/publish`
   *
   * Publish a cloudPcCloudApp object to make it available to end users through their portal, such as the Windows App.
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/virtualEndpoint/cloudApps/publish']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/virtualEndpoint/cloudApps/publish']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/virtualEndpoint/cloudApps/publish',
      body,
    };
  },
};

export const reset = {
  /**
   * `POST /deviceManagement/virtualEndpoint/cloudApps/reset`
   *
   * Reset the app details of the cloudPcCloudApp object to the app details of the initially discovered app that this cloud app is mapped to. This action requires the Microsoft.CloudPC/CloudApps/Update permission.
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/virtualEndpoint/cloudApps/reset']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/virtualEndpoint/cloudApps/reset']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/virtualEndpoint/cloudApps/reset',
      body,
    };
  },
};

export const unpublish = {
  /**
   * `POST /deviceManagement/virtualEndpoint/cloudApps/unpublish`
   *
   * Unpublish a cloudPcCloudApp to remove it from the end-user portal, for example, the Windows App. When a cloud app is unpublished, any changes made to its app details are reverted and reset to the values of the discovered app it&#x27;s linked to.
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/virtualEndpoint/cloudApps/unpublish']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/virtualEndpoint/cloudApps/unpublish']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/virtualEndpoint/cloudApps/unpublish',
      body,
    };
  },
};
