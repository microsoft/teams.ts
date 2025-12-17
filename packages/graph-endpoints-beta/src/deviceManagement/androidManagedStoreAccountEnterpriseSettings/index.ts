import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/androidManagedStoreAccountEnterpriseSettings': Operation<
    '/deviceManagement/androidManagedStoreAccountEnterpriseSettings',
    'delete'
  >;
  'GET /deviceManagement/androidManagedStoreAccountEnterpriseSettings': Operation<
    '/deviceManagement/androidManagedStoreAccountEnterpriseSettings',
    'get'
  >;
  'PATCH /deviceManagement/androidManagedStoreAccountEnterpriseSettings': Operation<
    '/deviceManagement/androidManagedStoreAccountEnterpriseSettings',
    'patch'
  >;
  'POST /deviceManagement/androidManagedStoreAccountEnterpriseSettings/addApps': Operation<
    '/deviceManagement/androidManagedStoreAccountEnterpriseSettings/addApps',
    'post'
  >;
  'POST /deviceManagement/androidManagedStoreAccountEnterpriseSettings/approveApps': Operation<
    '/deviceManagement/androidManagedStoreAccountEnterpriseSettings/approveApps',
    'post'
  >;
  'POST /deviceManagement/androidManagedStoreAccountEnterpriseSettings/completeSignup': Operation<
    '/deviceManagement/androidManagedStoreAccountEnterpriseSettings/completeSignup',
    'post'
  >;
  'POST /deviceManagement/androidManagedStoreAccountEnterpriseSettings/createGooglePlayWebToken': Operation<
    '/deviceManagement/androidManagedStoreAccountEnterpriseSettings/createGooglePlayWebToken',
    'post'
  >;
  'POST /deviceManagement/androidManagedStoreAccountEnterpriseSettings/requestEnterpriseUpgradeUrl': Operation<
    '/deviceManagement/androidManagedStoreAccountEnterpriseSettings/requestEnterpriseUpgradeUrl',
    'post'
  >;
  'POST /deviceManagement/androidManagedStoreAccountEnterpriseSettings/requestSignupUrl': Operation<
    '/deviceManagement/androidManagedStoreAccountEnterpriseSettings/requestSignupUrl',
    'post'
  >;
  'POST /deviceManagement/androidManagedStoreAccountEnterpriseSettings/setAndroidDeviceOwnerFullyManagedEnrollmentState': Operation<
    '/deviceManagement/androidManagedStoreAccountEnterpriseSettings/setAndroidDeviceOwnerFullyManagedEnrollmentState',
    'post'
  >;
  'POST /deviceManagement/androidManagedStoreAccountEnterpriseSettings/setStoreLayout': Operation<
    '/deviceManagement/androidManagedStoreAccountEnterpriseSettings/setStoreLayout',
    'post'
  >;
  'POST /deviceManagement/androidManagedStoreAccountEnterpriseSettings/syncApps': Operation<
    '/deviceManagement/androidManagedStoreAccountEnterpriseSettings/syncApps',
    'post'
  >;
  'POST /deviceManagement/androidManagedStoreAccountEnterpriseSettings/unbind': Operation<
    '/deviceManagement/androidManagedStoreAccountEnterpriseSettings/unbind',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/androidManagedStoreAccountEnterpriseSettings`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/androidManagedStoreAccountEnterpriseSettings']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/androidManagedStoreAccountEnterpriseSettings']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/androidManagedStoreAccountEnterpriseSettings',
    paramDefs: {
      header: ['If-Match'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/androidManagedStoreAccountEnterpriseSettings`
 *
 * The singleton Android managed store account enterprise settings entity.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/androidManagedStoreAccountEnterpriseSettings']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/androidManagedStoreAccountEnterpriseSettings']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/androidManagedStoreAccountEnterpriseSettings',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /deviceManagement/androidManagedStoreAccountEnterpriseSettings`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/androidManagedStoreAccountEnterpriseSettings']['body']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/androidManagedStoreAccountEnterpriseSettings']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/androidManagedStoreAccountEnterpriseSettings',
    body,
  };
}

export const addApps = {
  /**
   * `POST /deviceManagement/androidManagedStoreAccountEnterpriseSettings/addApps`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/androidManagedStoreAccountEnterpriseSettings/addApps']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/androidManagedStoreAccountEnterpriseSettings/addApps']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/androidManagedStoreAccountEnterpriseSettings/addApps',
      body,
    };
  },
};

export const approveApps = {
  /**
   * `POST /deviceManagement/androidManagedStoreAccountEnterpriseSettings/approveApps`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/androidManagedStoreAccountEnterpriseSettings/approveApps']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/androidManagedStoreAccountEnterpriseSettings/approveApps']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/androidManagedStoreAccountEnterpriseSettings/approveApps',
      body,
    };
  },
};

export const completeSignup = {
  /**
   * `POST /deviceManagement/androidManagedStoreAccountEnterpriseSettings/completeSignup`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/androidManagedStoreAccountEnterpriseSettings/completeSignup']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/androidManagedStoreAccountEnterpriseSettings/completeSignup']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/androidManagedStoreAccountEnterpriseSettings/completeSignup',
      body,
    };
  },
};

export const createGooglePlayWebToken = {
  /**
   * `POST /deviceManagement/androidManagedStoreAccountEnterpriseSettings/createGooglePlayWebToken`
   *
   * Generates a web token that is used in an embeddable component.
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/androidManagedStoreAccountEnterpriseSettings/createGooglePlayWebToken']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/androidManagedStoreAccountEnterpriseSettings/createGooglePlayWebToken']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/androidManagedStoreAccountEnterpriseSettings/createGooglePlayWebToken',
      body,
    };
  },
};

export const requestEnterpriseUpgradeUrl = {
  /**
   * `POST /deviceManagement/androidManagedStoreAccountEnterpriseSettings/requestEnterpriseUpgradeUrl`
   *
   */
  create: function create(): EndpointRequest<
    IEndpoints['POST /deviceManagement/androidManagedStoreAccountEnterpriseSettings/requestEnterpriseUpgradeUrl']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/androidManagedStoreAccountEnterpriseSettings/requestEnterpriseUpgradeUrl',
    };
  },
};

export const requestSignupUrl = {
  /**
   * `POST /deviceManagement/androidManagedStoreAccountEnterpriseSettings/requestSignupUrl`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/androidManagedStoreAccountEnterpriseSettings/requestSignupUrl']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/androidManagedStoreAccountEnterpriseSettings/requestSignupUrl']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/androidManagedStoreAccountEnterpriseSettings/requestSignupUrl',
      body,
    };
  },
};

export const setAndroidDeviceOwnerFullyManagedEnrollmentState = {
  /**
   * `POST /deviceManagement/androidManagedStoreAccountEnterpriseSettings/setAndroidDeviceOwnerFullyManagedEnrollmentState`
   *
   * Sets the AndroidManagedStoreAccountEnterpriseSettings AndroidDeviceOwnerFullyManagedEnrollmentEnabled to the given value.
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/androidManagedStoreAccountEnterpriseSettings/setAndroidDeviceOwnerFullyManagedEnrollmentState']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/androidManagedStoreAccountEnterpriseSettings/setAndroidDeviceOwnerFullyManagedEnrollmentState']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/androidManagedStoreAccountEnterpriseSettings/setAndroidDeviceOwnerFullyManagedEnrollmentState',
      body,
    };
  },
};

export const setStoreLayout = {
  /**
   * `POST /deviceManagement/androidManagedStoreAccountEnterpriseSettings/setStoreLayout`
   *
   * Sets the Managed Google Play store layout type via Google EMM API.
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/androidManagedStoreAccountEnterpriseSettings/setStoreLayout']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/androidManagedStoreAccountEnterpriseSettings/setStoreLayout']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/androidManagedStoreAccountEnterpriseSettings/setStoreLayout',
      body,
    };
  },
};

export const syncApps = {
  /**
   * `POST /deviceManagement/androidManagedStoreAccountEnterpriseSettings/syncApps`
   *
   */
  create: function create(): EndpointRequest<
    IEndpoints['POST /deviceManagement/androidManagedStoreAccountEnterpriseSettings/syncApps']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/androidManagedStoreAccountEnterpriseSettings/syncApps',
    };
  },
};

export const unbind = {
  /**
   * `POST /deviceManagement/androidManagedStoreAccountEnterpriseSettings/unbind`
   *
   */
  create: function create(): EndpointRequest<
    IEndpoints['POST /deviceManagement/androidManagedStoreAccountEnterpriseSettings/unbind']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/androidManagedStoreAccountEnterpriseSettings/unbind',
    };
  },
};
