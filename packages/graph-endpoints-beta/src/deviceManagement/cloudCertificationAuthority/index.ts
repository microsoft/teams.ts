import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}': Operation<
    '/deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}',
    'delete'
  >;
  'GET /deviceManagement/cloudCertificationAuthority': Operation<
    '/deviceManagement/cloudCertificationAuthority',
    'get'
  >;
  'GET /deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}': Operation<
    '/deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}',
    'get'
  >;
  'PATCH /deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}': Operation<
    '/deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}',
    'patch'
  >;
  'POST /deviceManagement/cloudCertificationAuthority': Operation<
    '/deviceManagement/cloudCertificationAuthority',
    'post'
  >;
  'POST /deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/changeCloudCertificationAuthorityStatus': Operation<
    '/deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/changeCloudCertificationAuthorityStatus',
    'post'
  >;
  'GET /deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/cloudCertificationAuthorityLeafCertificate': Operation<
    '/deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/cloudCertificationAuthorityLeafCertificate',
    'get'
  >;
  'GET /deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/cloudCertificationAuthorityLeafCertificate/{cloudCertificationAuthorityLeafCertificate-id}': Operation<
    '/deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/cloudCertificationAuthorityLeafCertificate/{cloudCertificationAuthorityLeafCertificate-id}',
    'get'
  >;
  'POST /deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/getAllCloudCertificationAuthority': Operation<
    '/deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/getAllCloudCertificationAuthority',
    'post'
  >;
  'POST /deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/getAllCloudCertificationAuthorityLeafCertificates': Operation<
    '/deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/getAllCloudCertificationAuthorityLeafCertificates',
    'post'
  >;
  'POST /deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/getCloudCertificationAuthority': Operation<
    '/deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/getCloudCertificationAuthority',
    'post'
  >;
  'POST /deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/patchCloudCertificationAuthority': Operation<
    '/deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/patchCloudCertificationAuthority',
    'post'
  >;
  'POST /deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/postCloudCertificationAuthority': Operation<
    '/deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/postCloudCertificationAuthority',
    'post'
  >;
  'POST /deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/revokeCloudCertificationAuthorityCertificate': Operation<
    '/deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/revokeCloudCertificationAuthorityCertificate',
    'post'
  >;
  'POST /deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/revokeLeafCertificate': Operation<
    '/deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/revokeLeafCertificate',
    'post'
  >;
  'POST /deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/revokeLeafCertificateBySerialNumber': Operation<
    '/deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/revokeLeafCertificateBySerialNumber',
    'post'
  >;
  'POST /deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/searchCloudCertificationAuthorityLeafCertificateBySerialNumber': Operation<
    '/deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/searchCloudCertificationAuthorityLeafCertificateBySerialNumber',
    'post'
  >;
  'POST /deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/uploadExternallySignedCertificationAuthorityCertificate': Operation<
    '/deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/uploadExternallySignedCertificationAuthorityCertificate',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['cloudCertificationAuthority-id'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/cloudCertificationAuthority`
 *
 * Collection of CloudCertificationAuthority records associated with account.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/cloudCertificationAuthority']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/cloudCertificationAuthority']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/cloudCertificationAuthority',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}`
 *
 * Collection of CloudCertificationAuthority records associated with account.
 */
export function get$1(
  params?: IEndpoints['GET /deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}',
    paramDefs: {
      path: ['cloudCertificationAuthority-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}',
    paramDefs: {
      path: ['cloudCertificationAuthority-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/cloudCertificationAuthority`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/cloudCertificationAuthority']['body']
): EndpointRequest<IEndpoints['POST /deviceManagement/cloudCertificationAuthority']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/cloudCertificationAuthority',
    body,
  };
}

export const changeCloudCertificationAuthorityStatus = {
  /**
   * `POST /deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/changeCloudCertificationAuthorityStatus`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/changeCloudCertificationAuthorityStatus']['body'],
    params?: IEndpoints['POST /deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/changeCloudCertificationAuthorityStatus']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/changeCloudCertificationAuthorityStatus']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/changeCloudCertificationAuthorityStatus',
      paramDefs: {
        path: ['cloudCertificationAuthority-id'],
      },
      params,
      body,
    };
  },
};

export const cloudCertificationAuthorityLeafCertificate = {
  /**
   * `GET /deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/cloudCertificationAuthorityLeafCertificate`
   *
   * Required OData property to expose leaf certificate API.
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/cloudCertificationAuthorityLeafCertificate']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/cloudCertificationAuthorityLeafCertificate']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/cloudCertificationAuthorityLeafCertificate',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['cloudCertificationAuthority-id'],
      },
      params,
    };
  },
  /**
   * `GET /deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/cloudCertificationAuthorityLeafCertificate/{cloudCertificationAuthorityLeafCertificate-id}`
   *
   * Required OData property to expose leaf certificate API.
   */
  get$1: function get$1(
    params?: IEndpoints['GET /deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/cloudCertificationAuthorityLeafCertificate/{cloudCertificationAuthorityLeafCertificate-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/cloudCertificationAuthorityLeafCertificate/{cloudCertificationAuthorityLeafCertificate-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/cloudCertificationAuthorityLeafCertificate/{cloudCertificationAuthorityLeafCertificate-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['cloudCertificationAuthority-id', 'cloudCertificationAuthorityLeafCertificate-id'],
      },
      params,
    };
  },
};

export const getAllCloudCertificationAuthority = {
  /**
   * `POST /deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/getAllCloudCertificationAuthority`
   *
   */
  create: function create(
    params?: IEndpoints['POST /deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/getAllCloudCertificationAuthority']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/getAllCloudCertificationAuthority']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/getAllCloudCertificationAuthority',
      paramDefs: {
        path: ['cloudCertificationAuthority-id'],
      },
      params,
    };
  },
};

export const getAllCloudCertificationAuthorityLeafCertificates = {
  /**
   * `POST /deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/getAllCloudCertificationAuthorityLeafCertificates`
   *
   */
  create: function create(
    params?: IEndpoints['POST /deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/getAllCloudCertificationAuthorityLeafCertificates']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/getAllCloudCertificationAuthorityLeafCertificates']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/getAllCloudCertificationAuthorityLeafCertificates',
      paramDefs: {
        path: ['cloudCertificationAuthority-id'],
      },
      params,
    };
  },
};

export const getCloudCertificationAuthority = {
  /**
   * `POST /deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/getCloudCertificationAuthority`
   *
   */
  create: function create(
    params?: IEndpoints['POST /deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/getCloudCertificationAuthority']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/getCloudCertificationAuthority']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/getCloudCertificationAuthority',
      paramDefs: {
        path: ['cloudCertificationAuthority-id'],
      },
      params,
    };
  },
};

export const patchCloudCertificationAuthority = {
  /**
   * `POST /deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/patchCloudCertificationAuthority`
   *
   */
  create: function create(
    params?: IEndpoints['POST /deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/patchCloudCertificationAuthority']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/patchCloudCertificationAuthority']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/patchCloudCertificationAuthority',
      paramDefs: {
        path: ['cloudCertificationAuthority-id'],
      },
      params,
    };
  },
};

export const postCloudCertificationAuthority = {
  /**
   * `POST /deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/postCloudCertificationAuthority`
   *
   */
  create: function create(
    params?: IEndpoints['POST /deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/postCloudCertificationAuthority']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/postCloudCertificationAuthority']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/postCloudCertificationAuthority',
      paramDefs: {
        path: ['cloudCertificationAuthority-id'],
      },
      params,
    };
  },
};

export const revokeCloudCertificationAuthorityCertificate = {
  /**
   * `POST /deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/revokeCloudCertificationAuthorityCertificate`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/revokeCloudCertificationAuthorityCertificate']['body'],
    params?: IEndpoints['POST /deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/revokeCloudCertificationAuthorityCertificate']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/revokeCloudCertificationAuthorityCertificate']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/revokeCloudCertificationAuthorityCertificate',
      paramDefs: {
        path: ['cloudCertificationAuthority-id'],
      },
      params,
      body,
    };
  },
};

export const revokeLeafCertificate = {
  /**
   * `POST /deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/revokeLeafCertificate`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/revokeLeafCertificate']['body'],
    params?: IEndpoints['POST /deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/revokeLeafCertificate']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/revokeLeafCertificate']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/revokeLeafCertificate',
      paramDefs: {
        path: ['cloudCertificationAuthority-id'],
      },
      params,
      body,
    };
  },
};

export const revokeLeafCertificateBySerialNumber = {
  /**
   * `POST /deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/revokeLeafCertificateBySerialNumber`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/revokeLeafCertificateBySerialNumber']['body'],
    params?: IEndpoints['POST /deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/revokeLeafCertificateBySerialNumber']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/revokeLeafCertificateBySerialNumber']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/revokeLeafCertificateBySerialNumber',
      paramDefs: {
        path: ['cloudCertificationAuthority-id'],
      },
      params,
      body,
    };
  },
};

export const searchCloudCertificationAuthorityLeafCertificateBySerialNumber = {
  /**
   * `POST /deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/searchCloudCertificationAuthorityLeafCertificateBySerialNumber`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/searchCloudCertificationAuthorityLeafCertificateBySerialNumber']['body'],
    params?: IEndpoints['POST /deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/searchCloudCertificationAuthorityLeafCertificateBySerialNumber']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/searchCloudCertificationAuthorityLeafCertificateBySerialNumber']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/searchCloudCertificationAuthorityLeafCertificateBySerialNumber',
      paramDefs: {
        path: ['cloudCertificationAuthority-id'],
      },
      params,
      body,
    };
  },
};

export const uploadExternallySignedCertificationAuthorityCertificate = {
  /**
   * `POST /deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/uploadExternallySignedCertificationAuthorityCertificate`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/uploadExternallySignedCertificationAuthorityCertificate']['body'],
    params?: IEndpoints['POST /deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/uploadExternallySignedCertificationAuthorityCertificate']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/uploadExternallySignedCertificationAuthorityCertificate']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/uploadExternallySignedCertificationAuthorityCertificate',
      paramDefs: {
        path: ['cloudCertificationAuthority-id'],
      },
      params,
      body,
    };
  },
};
