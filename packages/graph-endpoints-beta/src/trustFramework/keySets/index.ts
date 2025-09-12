import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /trustFramework/keySets/{trustFrameworkKeySet-id}': Operation<
    '/trustFramework/keySets/{trustFrameworkKeySet-id}',
    'delete'
  >;
  'GET /trustFramework/keySets': Operation<'/trustFramework/keySets', 'get'>;
  'GET /trustFramework/keySets/{trustFrameworkKeySet-id}': Operation<
    '/trustFramework/keySets/{trustFrameworkKeySet-id}',
    'get'
  >;
  'PATCH /trustFramework/keySets/{trustFrameworkKeySet-id}': Operation<
    '/trustFramework/keySets/{trustFrameworkKeySet-id}',
    'patch'
  >;
  'POST /trustFramework/keySets': Operation<'/trustFramework/keySets', 'post'>;
  'POST /trustFramework/keySets/{trustFrameworkKeySet-id}/generateKey': Operation<
    '/trustFramework/keySets/{trustFrameworkKeySet-id}/generateKey',
    'post'
  >;
  'POST /trustFramework/keySets/{trustFrameworkKeySet-id}/uploadCertificate': Operation<
    '/trustFramework/keySets/{trustFrameworkKeySet-id}/uploadCertificate',
    'post'
  >;
  'POST /trustFramework/keySets/{trustFrameworkKeySet-id}/uploadPkcs12': Operation<
    '/trustFramework/keySets/{trustFrameworkKeySet-id}/uploadPkcs12',
    'post'
  >;
  'POST /trustFramework/keySets/{trustFrameworkKeySet-id}/uploadSecret': Operation<
    '/trustFramework/keySets/{trustFrameworkKeySet-id}/uploadSecret',
    'post'
  >;
}

/**
 * `DELETE /trustFramework/keySets/{trustFrameworkKeySet-id}`
 *
 * Delete a trustFrameworkKeySet.
 */
export function del(
  params?: IEndpoints['DELETE /trustFramework/keySets/{trustFrameworkKeySet-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /trustFramework/keySets/{trustFrameworkKeySet-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/trustFramework/keySets/{trustFrameworkKeySet-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['trustFrameworkKeySet-id'],
    },
    params,
  };
}

/**
 * `GET /trustFramework/keySets`
 *
 * Retrieve a list of trustFrameworkKeySets.
 */
export function list(
  params?: IEndpoints['GET /trustFramework/keySets']['parameters']
): EndpointRequest<IEndpoints['GET /trustFramework/keySets']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/trustFramework/keySets',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /trustFramework/keySets/{trustFrameworkKeySet-id}`
 *
 * Retrieve the properties and associations for a Trustframeworkkeyset.
 */
export function get(
  params?: IEndpoints['GET /trustFramework/keySets/{trustFrameworkKeySet-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /trustFramework/keySets/{trustFrameworkKeySet-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/trustFramework/keySets/{trustFrameworkKeySet-id}',
    paramDefs: {
      path: ['trustFrameworkKeySet-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /trustFramework/keySets/{trustFrameworkKeySet-id}`
 *
 * Update the properties of a trustFrameworkKeyset. This operation will replace the content of an existing keyset. Specifying the ID in the request payload is optional.
 */
export function update(
  body: IEndpoints['PATCH /trustFramework/keySets/{trustFrameworkKeySet-id}']['body'],
  params?: IEndpoints['PATCH /trustFramework/keySets/{trustFrameworkKeySet-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /trustFramework/keySets/{trustFrameworkKeySet-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/trustFramework/keySets/{trustFrameworkKeySet-id}',
    paramDefs: {
      path: ['trustFrameworkKeySet-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /trustFramework/keySets`
 *
 * Create a new trustFrameworkKeySet. The ID of the trustFrameworkKeySet is expected in the create request; however, it can be modified by the service. The modified ID will be available in the response and in the location header.
 */
export function create(
  body: IEndpoints['POST /trustFramework/keySets']['body']
): EndpointRequest<IEndpoints['POST /trustFramework/keySets']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/trustFramework/keySets',
    body,
  };
}

export const generateKey = {
  /**
   * `POST /trustFramework/keySets/{trustFrameworkKeySet-id}/generateKey`
   *
   * Generate a trustFrameworkKey and a secret automatically in the trustFrameworkKeyset. The caller doesn&#x27;t have to provide a secret.
   */
  create: function create(
    body: IEndpoints['POST /trustFramework/keySets/{trustFrameworkKeySet-id}/generateKey']['body'],
    params?: IEndpoints['POST /trustFramework/keySets/{trustFrameworkKeySet-id}/generateKey']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /trustFramework/keySets/{trustFrameworkKeySet-id}/generateKey']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/trustFramework/keySets/{trustFrameworkKeySet-id}/generateKey',
      paramDefs: {
        path: ['trustFrameworkKeySet-id'],
      },
      params,
      body,
    };
  },
};

export const uploadCertificate = {
  /**
   * `POST /trustFramework/keySets/{trustFrameworkKeySet-id}/uploadCertificate`
   *
   * Upload a certificate to a trustFrameworkKeyset. The input is a base-64 encoded value of the certificate contents. This method returns trustFrameworkKey.
   */
  create: function create(
    body: IEndpoints['POST /trustFramework/keySets/{trustFrameworkKeySet-id}/uploadCertificate']['body'],
    params?: IEndpoints['POST /trustFramework/keySets/{trustFrameworkKeySet-id}/uploadCertificate']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /trustFramework/keySets/{trustFrameworkKeySet-id}/uploadCertificate']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/trustFramework/keySets/{trustFrameworkKeySet-id}/uploadCertificate',
      paramDefs: {
        path: ['trustFrameworkKeySet-id'],
      },
      params,
      body,
    };
  },
};

export const uploadPkcs12 = {
  /**
   * `POST /trustFramework/keySets/{trustFrameworkKeySet-id}/uploadPkcs12`
   *
   * Upload a PKCS12 format key (PFX) to a trustFrameworkKeyset. The input is a base-64 encoded value of the Pfx certificate contents. This method returns trustFrameworkKey.
   */
  create: function create(
    body: IEndpoints['POST /trustFramework/keySets/{trustFrameworkKeySet-id}/uploadPkcs12']['body'],
    params?: IEndpoints['POST /trustFramework/keySets/{trustFrameworkKeySet-id}/uploadPkcs12']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /trustFramework/keySets/{trustFrameworkKeySet-id}/uploadPkcs12']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/trustFramework/keySets/{trustFrameworkKeySet-id}/uploadPkcs12',
      paramDefs: {
        path: ['trustFrameworkKeySet-id'],
      },
      params,
      body,
    };
  },
};

export const uploadSecret = {
  /**
   * `POST /trustFramework/keySets/{trustFrameworkKeySet-id}/uploadSecret`
   *
   * Upload a plain text secret to a trustFrameworkKeyset. Examples of secrets are application secrets in Microsoft Entra ID, Google, Facebook, or any other identity provider. his method returns trustFrameworkKey.
   */
  create: function create(
    body: IEndpoints['POST /trustFramework/keySets/{trustFrameworkKeySet-id}/uploadSecret']['body'],
    params?: IEndpoints['POST /trustFramework/keySets/{trustFrameworkKeySet-id}/uploadSecret']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /trustFramework/keySets/{trustFrameworkKeySet-id}/uploadSecret']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/trustFramework/keySets/{trustFrameworkKeySet-id}/uploadSecret',
      paramDefs: {
        path: ['trustFrameworkKeySet-id'],
      },
      params,
      body,
    };
  },
};
