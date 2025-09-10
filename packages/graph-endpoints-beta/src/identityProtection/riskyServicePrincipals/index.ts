import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /identityProtection/riskyServicePrincipals/{riskyServicePrincipal-id}': Operation<
    '/identityProtection/riskyServicePrincipals/{riskyServicePrincipal-id}',
    'delete'
  >;
  'GET /identityProtection/riskyServicePrincipals': Operation<
    '/identityProtection/riskyServicePrincipals',
    'get'
  >;
  'GET /identityProtection/riskyServicePrincipals/{riskyServicePrincipal-id}': Operation<
    '/identityProtection/riskyServicePrincipals/{riskyServicePrincipal-id}',
    'get'
  >;
  'PATCH /identityProtection/riskyServicePrincipals/{riskyServicePrincipal-id}': Operation<
    '/identityProtection/riskyServicePrincipals/{riskyServicePrincipal-id}',
    'patch'
  >;
  'POST /identityProtection/riskyServicePrincipals': Operation<
    '/identityProtection/riskyServicePrincipals',
    'post'
  >;
  'POST /identityProtection/riskyServicePrincipals/confirmCompromised': Operation<
    '/identityProtection/riskyServicePrincipals/confirmCompromised',
    'post'
  >;
  'POST /identityProtection/riskyServicePrincipals/dismiss': Operation<
    '/identityProtection/riskyServicePrincipals/dismiss',
    'post'
  >;
  'GET /identityProtection/riskyServicePrincipals/{riskyServicePrincipal-id}/history': Operation<
    '/identityProtection/riskyServicePrincipals/{riskyServicePrincipal-id}/history',
    'get'
  >;
  'POST /identityProtection/riskyServicePrincipals/{riskyServicePrincipal-id}/history': Operation<
    '/identityProtection/riskyServicePrincipals/{riskyServicePrincipal-id}/history',
    'post'
  >;
  'GET /identityProtection/riskyServicePrincipals/{riskyServicePrincipal-id}/history/{riskyServicePrincipalHistoryItem-id}': Operation<
    '/identityProtection/riskyServicePrincipals/{riskyServicePrincipal-id}/history/{riskyServicePrincipalHistoryItem-id}',
    'get'
  >;
  'PATCH /identityProtection/riskyServicePrincipals/{riskyServicePrincipal-id}/history/{riskyServicePrincipalHistoryItem-id}': Operation<
    '/identityProtection/riskyServicePrincipals/{riskyServicePrincipal-id}/history/{riskyServicePrincipalHistoryItem-id}',
    'patch'
  >;
  'DELETE /identityProtection/riskyServicePrincipals/{riskyServicePrincipal-id}/history/{riskyServicePrincipalHistoryItem-id}': Operation<
    '/identityProtection/riskyServicePrincipals/{riskyServicePrincipal-id}/history/{riskyServicePrincipalHistoryItem-id}',
    'delete'
  >;
}

/**
 * `DELETE /identityProtection/riskyServicePrincipals/{riskyServicePrincipal-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /identityProtection/riskyServicePrincipals/{riskyServicePrincipal-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /identityProtection/riskyServicePrincipals/{riskyServicePrincipal-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/identityProtection/riskyServicePrincipals/{riskyServicePrincipal-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['riskyServicePrincipal-id'],
    },
    params,
  };
}

/**
 * `GET /identityProtection/riskyServicePrincipals`
 *
 * Retrieve the properties and relationships of riskyServicePrincipal objects.
 */
export function list(
  params?: IEndpoints['GET /identityProtection/riskyServicePrincipals']['parameters']
): EndpointRequest<IEndpoints['GET /identityProtection/riskyServicePrincipals']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identityProtection/riskyServicePrincipals',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /identityProtection/riskyServicePrincipals/{riskyServicePrincipal-id}`
 *
 * Read the properties and relationships of a riskyServicePrincipal object.
 */
export function get(
  params?: IEndpoints['GET /identityProtection/riskyServicePrincipals/{riskyServicePrincipal-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityProtection/riskyServicePrincipals/{riskyServicePrincipal-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identityProtection/riskyServicePrincipals/{riskyServicePrincipal-id}',
    paramDefs: {
      path: ['riskyServicePrincipal-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /identityProtection/riskyServicePrincipals/{riskyServicePrincipal-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /identityProtection/riskyServicePrincipals/{riskyServicePrincipal-id}']['body'],
  params?: IEndpoints['PATCH /identityProtection/riskyServicePrincipals/{riskyServicePrincipal-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /identityProtection/riskyServicePrincipals/{riskyServicePrincipal-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/identityProtection/riskyServicePrincipals/{riskyServicePrincipal-id}',
    paramDefs: {
      path: ['riskyServicePrincipal-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /identityProtection/riskyServicePrincipals`
 *
 */
export function create(
  body: IEndpoints['POST /identityProtection/riskyServicePrincipals']['body']
): EndpointRequest<IEndpoints['POST /identityProtection/riskyServicePrincipals']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/identityProtection/riskyServicePrincipals',
    body,
  };
}

export const confirmCompromised = {
  /**
   * `POST /identityProtection/riskyServicePrincipals/confirmCompromised`
   *
   * Confirm one or more riskyServicePrincipal objects as compromised. This action sets the targeted service principal account&#x27;s risk level to high.
   */
  create: function create(
    body: IEndpoints['POST /identityProtection/riskyServicePrincipals/confirmCompromised']['body']
  ): EndpointRequest<
    IEndpoints['POST /identityProtection/riskyServicePrincipals/confirmCompromised']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/identityProtection/riskyServicePrincipals/confirmCompromised',
      body,
    };
  },
};

export const dismiss = {
  /**
   * `POST /identityProtection/riskyServicePrincipals/dismiss`
   *
   * Dismiss the risk of one or more riskyServicePrincipal objects. This action sets the targeted service principal account&#x27;s risk level to none. You can dismiss up to 60 service principal accounts in one request.
   */
  create: function create(
    body: IEndpoints['POST /identityProtection/riskyServicePrincipals/dismiss']['body']
  ): EndpointRequest<
    IEndpoints['POST /identityProtection/riskyServicePrincipals/dismiss']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/identityProtection/riskyServicePrincipals/dismiss',
      body,
    };
  },
};

export const history = {
  /**
   * `GET /identityProtection/riskyServicePrincipals/{riskyServicePrincipal-id}/history`
   *
   * Get the risk history of a riskyServicePrincipal object.
   */
  get: function get(
    params?: IEndpoints['GET /identityProtection/riskyServicePrincipals/{riskyServicePrincipal-id}/history']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityProtection/riskyServicePrincipals/{riskyServicePrincipal-id}/history']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/identityProtection/riskyServicePrincipals/{riskyServicePrincipal-id}/history',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['riskyServicePrincipal-id'],
      },
      params,
    };
  },
  /**
   * `POST /identityProtection/riskyServicePrincipals/{riskyServicePrincipal-id}/history`
   *
   */
  create: function create(
    body: IEndpoints['POST /identityProtection/riskyServicePrincipals/{riskyServicePrincipal-id}/history']['body'],
    params?: IEndpoints['POST /identityProtection/riskyServicePrincipals/{riskyServicePrincipal-id}/history']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /identityProtection/riskyServicePrincipals/{riskyServicePrincipal-id}/history']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/identityProtection/riskyServicePrincipals/{riskyServicePrincipal-id}/history',
      paramDefs: {
        path: ['riskyServicePrincipal-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /identityProtection/riskyServicePrincipals/{riskyServicePrincipal-id}/history/{riskyServicePrincipalHistoryItem-id}`
   *
   * Represents the risk history of Microsoft Entra service principals.
   */
  get$1: function get$1(
    params?: IEndpoints['GET /identityProtection/riskyServicePrincipals/{riskyServicePrincipal-id}/history/{riskyServicePrincipalHistoryItem-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityProtection/riskyServicePrincipals/{riskyServicePrincipal-id}/history/{riskyServicePrincipalHistoryItem-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/identityProtection/riskyServicePrincipals/{riskyServicePrincipal-id}/history/{riskyServicePrincipalHistoryItem-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['riskyServicePrincipal-id', 'riskyServicePrincipalHistoryItem-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /identityProtection/riskyServicePrincipals/{riskyServicePrincipal-id}/history/{riskyServicePrincipalHistoryItem-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /identityProtection/riskyServicePrincipals/{riskyServicePrincipal-id}/history/{riskyServicePrincipalHistoryItem-id}']['body'],
    params?: IEndpoints['PATCH /identityProtection/riskyServicePrincipals/{riskyServicePrincipal-id}/history/{riskyServicePrincipalHistoryItem-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /identityProtection/riskyServicePrincipals/{riskyServicePrincipal-id}/history/{riskyServicePrincipalHistoryItem-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/identityProtection/riskyServicePrincipals/{riskyServicePrincipal-id}/history/{riskyServicePrincipalHistoryItem-id}',
      paramDefs: {
        path: ['riskyServicePrincipal-id', 'riskyServicePrincipalHistoryItem-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /identityProtection/riskyServicePrincipals/{riskyServicePrincipal-id}/history/{riskyServicePrincipalHistoryItem-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /identityProtection/riskyServicePrincipals/{riskyServicePrincipal-id}/history/{riskyServicePrincipalHistoryItem-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /identityProtection/riskyServicePrincipals/{riskyServicePrincipal-id}/history/{riskyServicePrincipalHistoryItem-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/identityProtection/riskyServicePrincipals/{riskyServicePrincipal-id}/history/{riskyServicePrincipalHistoryItem-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['riskyServicePrincipal-id', 'riskyServicePrincipalHistoryItem-id'],
      },
      params,
    };
  },
};
