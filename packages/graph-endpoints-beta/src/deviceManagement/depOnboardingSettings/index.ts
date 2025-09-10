export * as enrollmentProfiles from './enrollmentProfiles';
export * as importedAppleDeviceIdentities from './importedAppleDeviceIdentities';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}': Operation<
    '/deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}',
    'delete'
  >;
  'GET /deviceManagement/depOnboardingSettings': Operation<
    '/deviceManagement/depOnboardingSettings',
    'get'
  >;
  'GET /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}': Operation<
    '/deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}',
    'get'
  >;
  'PATCH /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}': Operation<
    '/deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}',
    'patch'
  >;
  'POST /deviceManagement/depOnboardingSettings': Operation<
    '/deviceManagement/depOnboardingSettings',
    'post'
  >;
  'GET /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/defaultIosEnrollmentProfile': Operation<
    '/deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/defaultIosEnrollmentProfile',
    'get'
  >;
  'GET /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/defaultMacOsEnrollmentProfile': Operation<
    '/deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/defaultMacOsEnrollmentProfile',
    'get'
  >;
  'GET /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/defaultTvOSEnrollmentProfile': Operation<
    '/deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/defaultTvOSEnrollmentProfile',
    'get'
  >;
  'GET /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/defaultVisionOSEnrollmentProfile': Operation<
    '/deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/defaultVisionOSEnrollmentProfile',
    'get'
  >;
  'POST /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/generateEncryptionPublicKey': Operation<
    '/deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/generateEncryptionPublicKey',
    'post'
  >;
  'POST /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/shareForSchoolDataSyncService': Operation<
    '/deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/shareForSchoolDataSyncService',
    'post'
  >;
  'POST /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/syncWithAppleDeviceEnrollmentProgram': Operation<
    '/deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/syncWithAppleDeviceEnrollmentProgram',
    'post'
  >;
  'POST /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/unshareForSchoolDataSyncService': Operation<
    '/deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/unshareForSchoolDataSyncService',
    'post'
  >;
  'POST /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/uploadDepToken': Operation<
    '/deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/uploadDepToken',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['depOnboardingSetting-id'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/depOnboardingSettings`
 *
 * This collections of multiple DEP tokens per-tenant.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/depOnboardingSettings']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/depOnboardingSettings']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/depOnboardingSettings',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}`
 *
 * This collections of multiple DEP tokens per-tenant.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}',
    paramDefs: {
      path: ['depOnboardingSetting-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}',
    paramDefs: {
      path: ['depOnboardingSetting-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/depOnboardingSettings`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/depOnboardingSettings']['body']
): EndpointRequest<IEndpoints['POST /deviceManagement/depOnboardingSettings']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/depOnboardingSettings',
    body,
  };
}

export const defaultIosEnrollmentProfile = {
  /**
   * `GET /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/defaultIosEnrollmentProfile`
   *
   * Default iOS Enrollment Profile
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/defaultIosEnrollmentProfile']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/defaultIosEnrollmentProfile']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/defaultIosEnrollmentProfile',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['depOnboardingSetting-id'],
      },
      params,
    };
  },
};

export const defaultMacOsEnrollmentProfile = {
  /**
   * `GET /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/defaultMacOsEnrollmentProfile`
   *
   * Default MacOs Enrollment Profile
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/defaultMacOsEnrollmentProfile']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/defaultMacOsEnrollmentProfile']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/defaultMacOsEnrollmentProfile',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['depOnboardingSetting-id'],
      },
      params,
    };
  },
};

export const defaultTvOSEnrollmentProfile = {
  /**
   * `GET /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/defaultTvOSEnrollmentProfile`
   *
   * Default TvOS Enrollment Profile
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/defaultTvOSEnrollmentProfile']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/defaultTvOSEnrollmentProfile']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/defaultTvOSEnrollmentProfile',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['depOnboardingSetting-id'],
      },
      params,
    };
  },
};

export const defaultVisionOSEnrollmentProfile = {
  /**
   * `GET /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/defaultVisionOSEnrollmentProfile`
   *
   * Default VisionOS Enrollment Profile
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/defaultVisionOSEnrollmentProfile']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/defaultVisionOSEnrollmentProfile']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/defaultVisionOSEnrollmentProfile',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['depOnboardingSetting-id'],
      },
      params,
    };
  },
};

export const generateEncryptionPublicKey = {
  /**
   * `POST /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/generateEncryptionPublicKey`
   *
   * Generate a public key to use to encrypt the Apple device enrollment program token
   */
  create: function create(
    params?: IEndpoints['POST /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/generateEncryptionPublicKey']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/generateEncryptionPublicKey']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/generateEncryptionPublicKey',
      paramDefs: {
        path: ['depOnboardingSetting-id'],
      },
      params,
    };
  },
};

export const shareForSchoolDataSyncService = {
  /**
   * `POST /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/shareForSchoolDataSyncService`
   *
   */
  create: function create(
    params?: IEndpoints['POST /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/shareForSchoolDataSyncService']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/shareForSchoolDataSyncService']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/shareForSchoolDataSyncService',
      paramDefs: {
        path: ['depOnboardingSetting-id'],
      },
      params,
    };
  },
};

export const syncWithAppleDeviceEnrollmentProgram = {
  /**
   * `POST /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/syncWithAppleDeviceEnrollmentProgram`
   *
   * Synchronizes between Apple Device Enrollment Program and Intune
   */
  create: function create(
    params?: IEndpoints['POST /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/syncWithAppleDeviceEnrollmentProgram']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/syncWithAppleDeviceEnrollmentProgram']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/syncWithAppleDeviceEnrollmentProgram',
      paramDefs: {
        path: ['depOnboardingSetting-id'],
      },
      params,
    };
  },
};

export const unshareForSchoolDataSyncService = {
  /**
   * `POST /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/unshareForSchoolDataSyncService`
   *
   */
  create: function create(
    params?: IEndpoints['POST /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/unshareForSchoolDataSyncService']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/unshareForSchoolDataSyncService']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/unshareForSchoolDataSyncService',
      paramDefs: {
        path: ['depOnboardingSetting-id'],
      },
      params,
    };
  },
};

export const uploadDepToken = {
  /**
   * `POST /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/uploadDepToken`
   *
   * Uploads a new Device Enrollment Program token
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/uploadDepToken']['body'],
    params?: IEndpoints['POST /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/uploadDepToken']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/uploadDepToken']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/uploadDepToken',
      paramDefs: {
        path: ['depOnboardingSetting-id'],
      },
      params,
      body,
    };
  },
};
