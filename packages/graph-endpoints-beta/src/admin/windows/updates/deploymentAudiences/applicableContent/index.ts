import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/applicableContent/{applicableContent-catalogEntryId}': Operation<
    '/admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/applicableContent/{applicableContent-catalogEntryId}',
    'delete'
  >;
  'GET /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/applicableContent': Operation<
    '/admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/applicableContent',
    'get'
  >;
  'GET /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/applicableContent/{applicableContent-catalogEntryId}': Operation<
    '/admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/applicableContent/{applicableContent-catalogEntryId}',
    'get'
  >;
  'PATCH /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/applicableContent/{applicableContent-catalogEntryId}': Operation<
    '/admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/applicableContent/{applicableContent-catalogEntryId}',
    'patch'
  >;
  'POST /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/applicableContent': Operation<
    '/admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/applicableContent',
    'post'
  >;
  'GET /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/applicableContent/{applicableContent-catalogEntryId}/catalogEntry': Operation<
    '/admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/applicableContent/{applicableContent-catalogEntryId}/catalogEntry',
    'get'
  >;
  'GET /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/applicableContent/{applicableContent-catalogEntryId}/matchedDevices': Operation<
    '/admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/applicableContent/{applicableContent-catalogEntryId}/matchedDevices',
    'get'
  >;
  'POST /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/applicableContent/{applicableContent-catalogEntryId}/matchedDevices': Operation<
    '/admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/applicableContent/{applicableContent-catalogEntryId}/matchedDevices',
    'post'
  >;
  'GET /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/applicableContent/{applicableContent-catalogEntryId}/matchedDevices/{applicableContentDeviceMatch-deviceId}': Operation<
    '/admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/applicableContent/{applicableContent-catalogEntryId}/matchedDevices/{applicableContentDeviceMatch-deviceId}',
    'get'
  >;
  'PATCH /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/applicableContent/{applicableContent-catalogEntryId}/matchedDevices/{applicableContentDeviceMatch-deviceId}': Operation<
    '/admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/applicableContent/{applicableContent-catalogEntryId}/matchedDevices/{applicableContentDeviceMatch-deviceId}',
    'patch'
  >;
  'DELETE /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/applicableContent/{applicableContent-catalogEntryId}/matchedDevices/{applicableContentDeviceMatch-deviceId}': Operation<
    '/admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/applicableContent/{applicableContent-catalogEntryId}/matchedDevices/{applicableContentDeviceMatch-deviceId}',
    'delete'
  >;
}

/**
 * `DELETE /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/applicableContent/{applicableContent-catalogEntryId}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/applicableContent/{applicableContent-catalogEntryId}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/applicableContent/{applicableContent-catalogEntryId}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/applicableContent/{applicableContent-catalogEntryId}',
    paramDefs: {
      header: ['If-Match'],
      path: ['deploymentAudience-id', 'applicableContent-catalogEntryId'],
    },
    params,
  };
}

/**
 * `GET /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/applicableContent`
 *
 * Content eligible to deploy to devices in the audience. Not nullable. Read-only.
 */
export function get(
  params?: IEndpoints['GET /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/applicableContent']['parameters']
): EndpointRequest<
  IEndpoints['GET /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/applicableContent']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/applicableContent',
    paramDefs: {
      path: ['deploymentAudience-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/applicableContent/{applicableContent-catalogEntryId}`
 *
 * Content eligible to deploy to devices in the audience. Not nullable. Read-only.
 */
export function get$1(
  params?: IEndpoints['GET /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/applicableContent/{applicableContent-catalogEntryId}']['parameters']
): EndpointRequest<
  IEndpoints['GET /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/applicableContent/{applicableContent-catalogEntryId}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/applicableContent/{applicableContent-catalogEntryId}',
    paramDefs: {
      path: ['deploymentAudience-id', 'applicableContent-catalogEntryId'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/applicableContent/{applicableContent-catalogEntryId}`
 *
 */
export function update(
  body: IEndpoints['PATCH /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/applicableContent/{applicableContent-catalogEntryId}']['body'],
  params?: IEndpoints['PATCH /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/applicableContent/{applicableContent-catalogEntryId}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/applicableContent/{applicableContent-catalogEntryId}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/applicableContent/{applicableContent-catalogEntryId}',
    paramDefs: {
      path: ['deploymentAudience-id', 'applicableContent-catalogEntryId'],
    },
    params,
    body,
  };
}

/**
 * `POST /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/applicableContent`
 *
 */
export function create(
  body: IEndpoints['POST /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/applicableContent']['body'],
  params?: IEndpoints['POST /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/applicableContent']['parameters']
): EndpointRequest<
  IEndpoints['POST /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/applicableContent']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/applicableContent',
    paramDefs: {
      path: ['deploymentAudience-id'],
    },
    params,
    body,
  };
}

export const catalogEntry = {
  /**
   * `GET /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/applicableContent/{applicableContent-catalogEntryId}/catalogEntry`
   *
   * Catalog entry for the update or content.
   */
  get: function get(
    params?: IEndpoints['GET /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/applicableContent/{applicableContent-catalogEntryId}/catalogEntry']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/applicableContent/{applicableContent-catalogEntryId}/catalogEntry']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/applicableContent/{applicableContent-catalogEntryId}/catalogEntry',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['deploymentAudience-id', 'applicableContent-catalogEntryId'],
      },
      params,
    };
  },
};

export const matchedDevices = {
  /**
   * `GET /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/applicableContent/{applicableContent-catalogEntryId}/matchedDevices`
   *
   * Collection of devices and recommendations for applicable catalog content.
   */
  list: function list(
    params?: IEndpoints['GET /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/applicableContent/{applicableContent-catalogEntryId}/matchedDevices']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/applicableContent/{applicableContent-catalogEntryId}/matchedDevices']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/applicableContent/{applicableContent-catalogEntryId}/matchedDevices',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['deploymentAudience-id', 'applicableContent-catalogEntryId'],
      },
      params,
    };
  },
  /**
   * `POST /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/applicableContent/{applicableContent-catalogEntryId}/matchedDevices`
   *
   */
  create: function create(
    body: IEndpoints['POST /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/applicableContent/{applicableContent-catalogEntryId}/matchedDevices']['body'],
    params?: IEndpoints['POST /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/applicableContent/{applicableContent-catalogEntryId}/matchedDevices']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/applicableContent/{applicableContent-catalogEntryId}/matchedDevices']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/applicableContent/{applicableContent-catalogEntryId}/matchedDevices',
      paramDefs: {
        path: ['deploymentAudience-id', 'applicableContent-catalogEntryId'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/applicableContent/{applicableContent-catalogEntryId}/matchedDevices/{applicableContentDeviceMatch-deviceId}`
   *
   * Collection of devices and recommendations for applicable catalog content.
   */
  get: function get(
    params?: IEndpoints['GET /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/applicableContent/{applicableContent-catalogEntryId}/matchedDevices/{applicableContentDeviceMatch-deviceId}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/applicableContent/{applicableContent-catalogEntryId}/matchedDevices/{applicableContentDeviceMatch-deviceId}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/applicableContent/{applicableContent-catalogEntryId}/matchedDevices/{applicableContentDeviceMatch-deviceId}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: [
          'deploymentAudience-id',
          'applicableContent-catalogEntryId',
          'applicableContentDeviceMatch-deviceId',
        ],
      },
      params,
    };
  },
  /**
   * `PATCH /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/applicableContent/{applicableContent-catalogEntryId}/matchedDevices/{applicableContentDeviceMatch-deviceId}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/applicableContent/{applicableContent-catalogEntryId}/matchedDevices/{applicableContentDeviceMatch-deviceId}']['body'],
    params?: IEndpoints['PATCH /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/applicableContent/{applicableContent-catalogEntryId}/matchedDevices/{applicableContentDeviceMatch-deviceId}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/applicableContent/{applicableContent-catalogEntryId}/matchedDevices/{applicableContentDeviceMatch-deviceId}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/applicableContent/{applicableContent-catalogEntryId}/matchedDevices/{applicableContentDeviceMatch-deviceId}',
      paramDefs: {
        path: [
          'deploymentAudience-id',
          'applicableContent-catalogEntryId',
          'applicableContentDeviceMatch-deviceId',
        ],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/applicableContent/{applicableContent-catalogEntryId}/matchedDevices/{applicableContentDeviceMatch-deviceId}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/applicableContent/{applicableContent-catalogEntryId}/matchedDevices/{applicableContentDeviceMatch-deviceId}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/applicableContent/{applicableContent-catalogEntryId}/matchedDevices/{applicableContentDeviceMatch-deviceId}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/applicableContent/{applicableContent-catalogEntryId}/matchedDevices/{applicableContentDeviceMatch-deviceId}',
      paramDefs: {
        header: ['If-Match'],
        path: [
          'deploymentAudience-id',
          'applicableContent-catalogEntryId',
          'applicableContentDeviceMatch-deviceId',
        ],
      },
      params,
    };
  },
};
