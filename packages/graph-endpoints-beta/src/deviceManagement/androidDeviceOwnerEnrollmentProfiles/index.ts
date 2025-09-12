import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/androidDeviceOwnerEnrollmentProfiles/{androidDeviceOwnerEnrollmentProfile-id}': Operation<
    '/deviceManagement/androidDeviceOwnerEnrollmentProfiles/{androidDeviceOwnerEnrollmentProfile-id}',
    'delete'
  >;
  'GET /deviceManagement/androidDeviceOwnerEnrollmentProfiles': Operation<
    '/deviceManagement/androidDeviceOwnerEnrollmentProfiles',
    'get'
  >;
  'GET /deviceManagement/androidDeviceOwnerEnrollmentProfiles/{androidDeviceOwnerEnrollmentProfile-id}': Operation<
    '/deviceManagement/androidDeviceOwnerEnrollmentProfiles/{androidDeviceOwnerEnrollmentProfile-id}',
    'get'
  >;
  'PATCH /deviceManagement/androidDeviceOwnerEnrollmentProfiles/{androidDeviceOwnerEnrollmentProfile-id}': Operation<
    '/deviceManagement/androidDeviceOwnerEnrollmentProfiles/{androidDeviceOwnerEnrollmentProfile-id}',
    'patch'
  >;
  'POST /deviceManagement/androidDeviceOwnerEnrollmentProfiles': Operation<
    '/deviceManagement/androidDeviceOwnerEnrollmentProfiles',
    'post'
  >;
  'POST /deviceManagement/androidDeviceOwnerEnrollmentProfiles/{androidDeviceOwnerEnrollmentProfile-id}/clearEnrollmentTimeDeviceMembershipTarget': Operation<
    '/deviceManagement/androidDeviceOwnerEnrollmentProfiles/{androidDeviceOwnerEnrollmentProfile-id}/clearEnrollmentTimeDeviceMembershipTarget',
    'post'
  >;
  'POST /deviceManagement/androidDeviceOwnerEnrollmentProfiles/{androidDeviceOwnerEnrollmentProfile-id}/createToken': Operation<
    '/deviceManagement/androidDeviceOwnerEnrollmentProfiles/{androidDeviceOwnerEnrollmentProfile-id}/createToken',
    'post'
  >;
  'POST /deviceManagement/androidDeviceOwnerEnrollmentProfiles/{androidDeviceOwnerEnrollmentProfile-id}/retrieveEnrollmentTimeDeviceMembershipTarget': Operation<
    '/deviceManagement/androidDeviceOwnerEnrollmentProfiles/{androidDeviceOwnerEnrollmentProfile-id}/retrieveEnrollmentTimeDeviceMembershipTarget',
    'post'
  >;
  'POST /deviceManagement/androidDeviceOwnerEnrollmentProfiles/{androidDeviceOwnerEnrollmentProfile-id}/revokeToken': Operation<
    '/deviceManagement/androidDeviceOwnerEnrollmentProfiles/{androidDeviceOwnerEnrollmentProfile-id}/revokeToken',
    'post'
  >;
  'POST /deviceManagement/androidDeviceOwnerEnrollmentProfiles/{androidDeviceOwnerEnrollmentProfile-id}/setEnrollmentTimeDeviceMembershipTarget': Operation<
    '/deviceManagement/androidDeviceOwnerEnrollmentProfiles/{androidDeviceOwnerEnrollmentProfile-id}/setEnrollmentTimeDeviceMembershipTarget',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/androidDeviceOwnerEnrollmentProfiles/{androidDeviceOwnerEnrollmentProfile-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/androidDeviceOwnerEnrollmentProfiles/{androidDeviceOwnerEnrollmentProfile-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/androidDeviceOwnerEnrollmentProfiles/{androidDeviceOwnerEnrollmentProfile-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/androidDeviceOwnerEnrollmentProfiles/{androidDeviceOwnerEnrollmentProfile-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['androidDeviceOwnerEnrollmentProfile-id'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/androidDeviceOwnerEnrollmentProfiles`
 *
 * Android device owner enrollment profile entities.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/androidDeviceOwnerEnrollmentProfiles']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/androidDeviceOwnerEnrollmentProfiles']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/androidDeviceOwnerEnrollmentProfiles',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/androidDeviceOwnerEnrollmentProfiles/{androidDeviceOwnerEnrollmentProfile-id}`
 *
 * Android device owner enrollment profile entities.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/androidDeviceOwnerEnrollmentProfiles/{androidDeviceOwnerEnrollmentProfile-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/androidDeviceOwnerEnrollmentProfiles/{androidDeviceOwnerEnrollmentProfile-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/androidDeviceOwnerEnrollmentProfiles/{androidDeviceOwnerEnrollmentProfile-id}',
    paramDefs: {
      path: ['androidDeviceOwnerEnrollmentProfile-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /deviceManagement/androidDeviceOwnerEnrollmentProfiles/{androidDeviceOwnerEnrollmentProfile-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/androidDeviceOwnerEnrollmentProfiles/{androidDeviceOwnerEnrollmentProfile-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/androidDeviceOwnerEnrollmentProfiles/{androidDeviceOwnerEnrollmentProfile-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/androidDeviceOwnerEnrollmentProfiles/{androidDeviceOwnerEnrollmentProfile-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/androidDeviceOwnerEnrollmentProfiles/{androidDeviceOwnerEnrollmentProfile-id}',
    paramDefs: {
      path: ['androidDeviceOwnerEnrollmentProfile-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/androidDeviceOwnerEnrollmentProfiles`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/androidDeviceOwnerEnrollmentProfiles']['body']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/androidDeviceOwnerEnrollmentProfiles']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/androidDeviceOwnerEnrollmentProfiles',
    body,
  };
}

export const clearEnrollmentTimeDeviceMembershipTarget = {
  /**
   * `POST /deviceManagement/androidDeviceOwnerEnrollmentProfiles/{androidDeviceOwnerEnrollmentProfile-id}/clearEnrollmentTimeDeviceMembershipTarget`
   *
   */
  create: function create(
    params?: IEndpoints['POST /deviceManagement/androidDeviceOwnerEnrollmentProfiles/{androidDeviceOwnerEnrollmentProfile-id}/clearEnrollmentTimeDeviceMembershipTarget']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/androidDeviceOwnerEnrollmentProfiles/{androidDeviceOwnerEnrollmentProfile-id}/clearEnrollmentTimeDeviceMembershipTarget']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/androidDeviceOwnerEnrollmentProfiles/{androidDeviceOwnerEnrollmentProfile-id}/clearEnrollmentTimeDeviceMembershipTarget',
      paramDefs: {
        path: ['androidDeviceOwnerEnrollmentProfile-id'],
      },
      params,
    };
  },
};

export const createToken = {
  /**
   * `POST /deviceManagement/androidDeviceOwnerEnrollmentProfiles/{androidDeviceOwnerEnrollmentProfile-id}/createToken`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/androidDeviceOwnerEnrollmentProfiles/{androidDeviceOwnerEnrollmentProfile-id}/createToken']['body'],
    params?: IEndpoints['POST /deviceManagement/androidDeviceOwnerEnrollmentProfiles/{androidDeviceOwnerEnrollmentProfile-id}/createToken']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/androidDeviceOwnerEnrollmentProfiles/{androidDeviceOwnerEnrollmentProfile-id}/createToken']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/androidDeviceOwnerEnrollmentProfiles/{androidDeviceOwnerEnrollmentProfile-id}/createToken',
      paramDefs: {
        path: ['androidDeviceOwnerEnrollmentProfile-id'],
      },
      params,
      body,
    };
  },
};

export const retrieveEnrollmentTimeDeviceMembershipTarget = {
  /**
   * `POST /deviceManagement/androidDeviceOwnerEnrollmentProfiles/{androidDeviceOwnerEnrollmentProfile-id}/retrieveEnrollmentTimeDeviceMembershipTarget`
   *
   */
  create: function create(
    params?: IEndpoints['POST /deviceManagement/androidDeviceOwnerEnrollmentProfiles/{androidDeviceOwnerEnrollmentProfile-id}/retrieveEnrollmentTimeDeviceMembershipTarget']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/androidDeviceOwnerEnrollmentProfiles/{androidDeviceOwnerEnrollmentProfile-id}/retrieveEnrollmentTimeDeviceMembershipTarget']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/androidDeviceOwnerEnrollmentProfiles/{androidDeviceOwnerEnrollmentProfile-id}/retrieveEnrollmentTimeDeviceMembershipTarget',
      paramDefs: {
        path: ['androidDeviceOwnerEnrollmentProfile-id'],
      },
      params,
    };
  },
};

export const revokeToken = {
  /**
   * `POST /deviceManagement/androidDeviceOwnerEnrollmentProfiles/{androidDeviceOwnerEnrollmentProfile-id}/revokeToken`
   *
   */
  create: function create(
    params?: IEndpoints['POST /deviceManagement/androidDeviceOwnerEnrollmentProfiles/{androidDeviceOwnerEnrollmentProfile-id}/revokeToken']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/androidDeviceOwnerEnrollmentProfiles/{androidDeviceOwnerEnrollmentProfile-id}/revokeToken']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/androidDeviceOwnerEnrollmentProfiles/{androidDeviceOwnerEnrollmentProfile-id}/revokeToken',
      paramDefs: {
        path: ['androidDeviceOwnerEnrollmentProfile-id'],
      },
      params,
    };
  },
};

export const setEnrollmentTimeDeviceMembershipTarget = {
  /**
   * `POST /deviceManagement/androidDeviceOwnerEnrollmentProfiles/{androidDeviceOwnerEnrollmentProfile-id}/setEnrollmentTimeDeviceMembershipTarget`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/androidDeviceOwnerEnrollmentProfiles/{androidDeviceOwnerEnrollmentProfile-id}/setEnrollmentTimeDeviceMembershipTarget']['body'],
    params?: IEndpoints['POST /deviceManagement/androidDeviceOwnerEnrollmentProfiles/{androidDeviceOwnerEnrollmentProfile-id}/setEnrollmentTimeDeviceMembershipTarget']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/androidDeviceOwnerEnrollmentProfiles/{androidDeviceOwnerEnrollmentProfile-id}/setEnrollmentTimeDeviceMembershipTarget']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/androidDeviceOwnerEnrollmentProfiles/{androidDeviceOwnerEnrollmentProfile-id}/setEnrollmentTimeDeviceMembershipTarget',
      paramDefs: {
        path: ['androidDeviceOwnerEnrollmentProfile-id'],
      },
      params,
      body,
    };
  },
};
