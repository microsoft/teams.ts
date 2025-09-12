import type { EndpointRequest, Operation } from './../../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /admin/windows/updates/deployments/{deployment-id}/audience/applicableContent/{applicableContent-catalogEntryId}': Operation<
    '/admin/windows/updates/deployments/{deployment-id}/audience/applicableContent/{applicableContent-catalogEntryId}',
    'delete'
  >;
  'GET /admin/windows/updates/deployments/{deployment-id}/audience/applicableContent': Operation<
    '/admin/windows/updates/deployments/{deployment-id}/audience/applicableContent',
    'get'
  >;
  'GET /admin/windows/updates/deployments/{deployment-id}/audience/applicableContent/{applicableContent-catalogEntryId}': Operation<
    '/admin/windows/updates/deployments/{deployment-id}/audience/applicableContent/{applicableContent-catalogEntryId}',
    'get'
  >;
  'PATCH /admin/windows/updates/deployments/{deployment-id}/audience/applicableContent/{applicableContent-catalogEntryId}': Operation<
    '/admin/windows/updates/deployments/{deployment-id}/audience/applicableContent/{applicableContent-catalogEntryId}',
    'patch'
  >;
  'POST /admin/windows/updates/deployments/{deployment-id}/audience/applicableContent': Operation<
    '/admin/windows/updates/deployments/{deployment-id}/audience/applicableContent',
    'post'
  >;
  'GET /admin/windows/updates/deployments/{deployment-id}/audience/applicableContent/{applicableContent-catalogEntryId}/catalogEntry': Operation<
    '/admin/windows/updates/deployments/{deployment-id}/audience/applicableContent/{applicableContent-catalogEntryId}/catalogEntry',
    'get'
  >;
  'GET /admin/windows/updates/deployments/{deployment-id}/audience/applicableContent/{applicableContent-catalogEntryId}/matchedDevices': Operation<
    '/admin/windows/updates/deployments/{deployment-id}/audience/applicableContent/{applicableContent-catalogEntryId}/matchedDevices',
    'get'
  >;
  'POST /admin/windows/updates/deployments/{deployment-id}/audience/applicableContent/{applicableContent-catalogEntryId}/matchedDevices': Operation<
    '/admin/windows/updates/deployments/{deployment-id}/audience/applicableContent/{applicableContent-catalogEntryId}/matchedDevices',
    'post'
  >;
  'GET /admin/windows/updates/deployments/{deployment-id}/audience/applicableContent/{applicableContent-catalogEntryId}/matchedDevices/{applicableContentDeviceMatch-deviceId}': Operation<
    '/admin/windows/updates/deployments/{deployment-id}/audience/applicableContent/{applicableContent-catalogEntryId}/matchedDevices/{applicableContentDeviceMatch-deviceId}',
    'get'
  >;
  'PATCH /admin/windows/updates/deployments/{deployment-id}/audience/applicableContent/{applicableContent-catalogEntryId}/matchedDevices/{applicableContentDeviceMatch-deviceId}': Operation<
    '/admin/windows/updates/deployments/{deployment-id}/audience/applicableContent/{applicableContent-catalogEntryId}/matchedDevices/{applicableContentDeviceMatch-deviceId}',
    'patch'
  >;
  'DELETE /admin/windows/updates/deployments/{deployment-id}/audience/applicableContent/{applicableContent-catalogEntryId}/matchedDevices/{applicableContentDeviceMatch-deviceId}': Operation<
    '/admin/windows/updates/deployments/{deployment-id}/audience/applicableContent/{applicableContent-catalogEntryId}/matchedDevices/{applicableContentDeviceMatch-deviceId}',
    'delete'
  >;
}

/**
 * `DELETE /admin/windows/updates/deployments/{deployment-id}/audience/applicableContent/{applicableContent-catalogEntryId}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /admin/windows/updates/deployments/{deployment-id}/audience/applicableContent/{applicableContent-catalogEntryId}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /admin/windows/updates/deployments/{deployment-id}/audience/applicableContent/{applicableContent-catalogEntryId}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/admin/windows/updates/deployments/{deployment-id}/audience/applicableContent/{applicableContent-catalogEntryId}',
    paramDefs: {
      header: ['If-Match'],
      path: ['deployment-id', 'applicableContent-catalogEntryId'],
    },
    params,
  };
}

/**
 * `GET /admin/windows/updates/deployments/{deployment-id}/audience/applicableContent`
 *
 * Content eligible to deploy to devices in the audience. Not nullable. Read-only.
 */
export function get(
  params?: IEndpoints['GET /admin/windows/updates/deployments/{deployment-id}/audience/applicableContent']['parameters']
): EndpointRequest<
  IEndpoints['GET /admin/windows/updates/deployments/{deployment-id}/audience/applicableContent']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/windows/updates/deployments/{deployment-id}/audience/applicableContent',
    paramDefs: {
      path: ['deployment-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /admin/windows/updates/deployments/{deployment-id}/audience/applicableContent/{applicableContent-catalogEntryId}`
 *
 * Content eligible to deploy to devices in the audience. Not nullable. Read-only.
 */
export function get$1(
  params?: IEndpoints['GET /admin/windows/updates/deployments/{deployment-id}/audience/applicableContent/{applicableContent-catalogEntryId}']['parameters']
): EndpointRequest<
  IEndpoints['GET /admin/windows/updates/deployments/{deployment-id}/audience/applicableContent/{applicableContent-catalogEntryId}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/windows/updates/deployments/{deployment-id}/audience/applicableContent/{applicableContent-catalogEntryId}',
    paramDefs: {
      path: ['deployment-id', 'applicableContent-catalogEntryId'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /admin/windows/updates/deployments/{deployment-id}/audience/applicableContent/{applicableContent-catalogEntryId}`
 *
 */
export function update(
  body: IEndpoints['PATCH /admin/windows/updates/deployments/{deployment-id}/audience/applicableContent/{applicableContent-catalogEntryId}']['body'],
  params?: IEndpoints['PATCH /admin/windows/updates/deployments/{deployment-id}/audience/applicableContent/{applicableContent-catalogEntryId}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /admin/windows/updates/deployments/{deployment-id}/audience/applicableContent/{applicableContent-catalogEntryId}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/admin/windows/updates/deployments/{deployment-id}/audience/applicableContent/{applicableContent-catalogEntryId}',
    paramDefs: {
      path: ['deployment-id', 'applicableContent-catalogEntryId'],
    },
    params,
    body,
  };
}

/**
 * `POST /admin/windows/updates/deployments/{deployment-id}/audience/applicableContent`
 *
 */
export function create(
  body: IEndpoints['POST /admin/windows/updates/deployments/{deployment-id}/audience/applicableContent']['body'],
  params?: IEndpoints['POST /admin/windows/updates/deployments/{deployment-id}/audience/applicableContent']['parameters']
): EndpointRequest<
  IEndpoints['POST /admin/windows/updates/deployments/{deployment-id}/audience/applicableContent']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/admin/windows/updates/deployments/{deployment-id}/audience/applicableContent',
    paramDefs: {
      path: ['deployment-id'],
    },
    params,
    body,
  };
}

export const catalogEntry = {
  /**
   * `GET /admin/windows/updates/deployments/{deployment-id}/audience/applicableContent/{applicableContent-catalogEntryId}/catalogEntry`
   *
   * Catalog entry for the update or content.
   */
  get: function get(
    params?: IEndpoints['GET /admin/windows/updates/deployments/{deployment-id}/audience/applicableContent/{applicableContent-catalogEntryId}/catalogEntry']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /admin/windows/updates/deployments/{deployment-id}/audience/applicableContent/{applicableContent-catalogEntryId}/catalogEntry']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/admin/windows/updates/deployments/{deployment-id}/audience/applicableContent/{applicableContent-catalogEntryId}/catalogEntry',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['deployment-id', 'applicableContent-catalogEntryId'],
      },
      params,
    };
  },
};

export const matchedDevices = {
  /**
   * `GET /admin/windows/updates/deployments/{deployment-id}/audience/applicableContent/{applicableContent-catalogEntryId}/matchedDevices`
   *
   * Collection of devices and recommendations for applicable catalog content.
   */
  list: function list(
    params?: IEndpoints['GET /admin/windows/updates/deployments/{deployment-id}/audience/applicableContent/{applicableContent-catalogEntryId}/matchedDevices']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /admin/windows/updates/deployments/{deployment-id}/audience/applicableContent/{applicableContent-catalogEntryId}/matchedDevices']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/admin/windows/updates/deployments/{deployment-id}/audience/applicableContent/{applicableContent-catalogEntryId}/matchedDevices',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['deployment-id', 'applicableContent-catalogEntryId'],
      },
      params,
    };
  },
  /**
   * `POST /admin/windows/updates/deployments/{deployment-id}/audience/applicableContent/{applicableContent-catalogEntryId}/matchedDevices`
   *
   */
  create: function create(
    body: IEndpoints['POST /admin/windows/updates/deployments/{deployment-id}/audience/applicableContent/{applicableContent-catalogEntryId}/matchedDevices']['body'],
    params?: IEndpoints['POST /admin/windows/updates/deployments/{deployment-id}/audience/applicableContent/{applicableContent-catalogEntryId}/matchedDevices']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /admin/windows/updates/deployments/{deployment-id}/audience/applicableContent/{applicableContent-catalogEntryId}/matchedDevices']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/admin/windows/updates/deployments/{deployment-id}/audience/applicableContent/{applicableContent-catalogEntryId}/matchedDevices',
      paramDefs: {
        path: ['deployment-id', 'applicableContent-catalogEntryId'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /admin/windows/updates/deployments/{deployment-id}/audience/applicableContent/{applicableContent-catalogEntryId}/matchedDevices/{applicableContentDeviceMatch-deviceId}`
   *
   * Collection of devices and recommendations for applicable catalog content.
   */
  get: function get(
    params?: IEndpoints['GET /admin/windows/updates/deployments/{deployment-id}/audience/applicableContent/{applicableContent-catalogEntryId}/matchedDevices/{applicableContentDeviceMatch-deviceId}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /admin/windows/updates/deployments/{deployment-id}/audience/applicableContent/{applicableContent-catalogEntryId}/matchedDevices/{applicableContentDeviceMatch-deviceId}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/admin/windows/updates/deployments/{deployment-id}/audience/applicableContent/{applicableContent-catalogEntryId}/matchedDevices/{applicableContentDeviceMatch-deviceId}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: [
          'deployment-id',
          'applicableContent-catalogEntryId',
          'applicableContentDeviceMatch-deviceId',
        ],
      },
      params,
    };
  },
  /**
   * `PATCH /admin/windows/updates/deployments/{deployment-id}/audience/applicableContent/{applicableContent-catalogEntryId}/matchedDevices/{applicableContentDeviceMatch-deviceId}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /admin/windows/updates/deployments/{deployment-id}/audience/applicableContent/{applicableContent-catalogEntryId}/matchedDevices/{applicableContentDeviceMatch-deviceId}']['body'],
    params?: IEndpoints['PATCH /admin/windows/updates/deployments/{deployment-id}/audience/applicableContent/{applicableContent-catalogEntryId}/matchedDevices/{applicableContentDeviceMatch-deviceId}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /admin/windows/updates/deployments/{deployment-id}/audience/applicableContent/{applicableContent-catalogEntryId}/matchedDevices/{applicableContentDeviceMatch-deviceId}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/admin/windows/updates/deployments/{deployment-id}/audience/applicableContent/{applicableContent-catalogEntryId}/matchedDevices/{applicableContentDeviceMatch-deviceId}',
      paramDefs: {
        path: [
          'deployment-id',
          'applicableContent-catalogEntryId',
          'applicableContentDeviceMatch-deviceId',
        ],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /admin/windows/updates/deployments/{deployment-id}/audience/applicableContent/{applicableContent-catalogEntryId}/matchedDevices/{applicableContentDeviceMatch-deviceId}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /admin/windows/updates/deployments/{deployment-id}/audience/applicableContent/{applicableContent-catalogEntryId}/matchedDevices/{applicableContentDeviceMatch-deviceId}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /admin/windows/updates/deployments/{deployment-id}/audience/applicableContent/{applicableContent-catalogEntryId}/matchedDevices/{applicableContentDeviceMatch-deviceId}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/admin/windows/updates/deployments/{deployment-id}/audience/applicableContent/{applicableContent-catalogEntryId}/matchedDevices/{applicableContentDeviceMatch-deviceId}',
      paramDefs: {
        header: ['If-Match'],
        path: [
          'deployment-id',
          'applicableContent-catalogEntryId',
          'applicableContentDeviceMatch-deviceId',
        ],
      },
      params,
    };
  },
};
