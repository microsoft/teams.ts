import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /networkAccess/settings': Operation<'/networkAccess/settings', 'delete'>;
  'GET /networkAccess/settings': Operation<'/networkAccess/settings', 'get'>;
  'PATCH /networkAccess/settings': Operation<'/networkAccess/settings', 'patch'>;
  'GET /networkAccess/settings/conditionalAccess': Operation<
    '/networkAccess/settings/conditionalAccess',
    'get'
  >;
  'PATCH /networkAccess/settings/conditionalAccess': Operation<
    '/networkAccess/settings/conditionalAccess',
    'patch'
  >;
  'DELETE /networkAccess/settings/conditionalAccess': Operation<
    '/networkAccess/settings/conditionalAccess',
    'delete'
  >;
  'GET /networkAccess/settings/crossTenantAccess': Operation<
    '/networkAccess/settings/crossTenantAccess',
    'get'
  >;
  'PATCH /networkAccess/settings/crossTenantAccess': Operation<
    '/networkAccess/settings/crossTenantAccess',
    'patch'
  >;
  'DELETE /networkAccess/settings/crossTenantAccess': Operation<
    '/networkAccess/settings/crossTenantAccess',
    'delete'
  >;
  'GET /networkAccess/settings/customBlockPage': Operation<
    '/networkAccess/settings/customBlockPage',
    'get'
  >;
  'PATCH /networkAccess/settings/customBlockPage': Operation<
    '/networkAccess/settings/customBlockPage',
    'patch'
  >;
  'DELETE /networkAccess/settings/customBlockPage': Operation<
    '/networkAccess/settings/customBlockPage',
    'delete'
  >;
  'GET /networkAccess/settings/forwardingOptions': Operation<
    '/networkAccess/settings/forwardingOptions',
    'get'
  >;
  'PATCH /networkAccess/settings/forwardingOptions': Operation<
    '/networkAccess/settings/forwardingOptions',
    'patch'
  >;
  'DELETE /networkAccess/settings/forwardingOptions': Operation<
    '/networkAccess/settings/forwardingOptions',
    'delete'
  >;
}

/**
 * `DELETE /networkAccess/settings`
 *
 */
export function del(
  params?: IEndpoints['DELETE /networkAccess/settings']['parameters']
): EndpointRequest<IEndpoints['DELETE /networkAccess/settings']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/networkAccess/settings',
    paramDefs: {
      header: ['If-Match'],
    },
    params,
  };
}

/**
 * `GET /networkAccess/settings`
 *
 * Global Secure Access settings.
 */
export function list(
  params?: IEndpoints['GET /networkAccess/settings']['parameters']
): EndpointRequest<IEndpoints['GET /networkAccess/settings']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/networkAccess/settings',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /networkAccess/settings`
 *
 */
export function update(
  body: IEndpoints['PATCH /networkAccess/settings']['body']
): EndpointRequest<IEndpoints['PATCH /networkAccess/settings']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/networkAccess/settings',
    body,
  };
}

export const conditionalAccess = {
  /**
   * `GET /networkAccess/settings/conditionalAccess`
   *
   * Retrieve the conditional access settings, which include the preservation of the original source IP address in network traffic for accurate identification and tracking, and the establishment of scalable network connectivity through the Global Secure Access services.
   */
  list: function list(
    params?: IEndpoints['GET /networkAccess/settings/conditionalAccess']['parameters']
  ): EndpointRequest<IEndpoints['GET /networkAccess/settings/conditionalAccess']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/networkAccess/settings/conditionalAccess',
      paramDefs: {
        query: ['$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `PATCH /networkAccess/settings/conditionalAccess`
   *
   * Update the conditional access settings to include the preservation of the original source IP address in network traffic for accurate identification and tracking, as well as the establishment of scalable network connectivity through the Global Secure Access services.
   */
  update: function update(
    body: IEndpoints['PATCH /networkAccess/settings/conditionalAccess']['body']
  ): EndpointRequest<IEndpoints['PATCH /networkAccess/settings/conditionalAccess']['response']> {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/networkAccess/settings/conditionalAccess',
      body,
    };
  },
  /**
   * `DELETE /networkAccess/settings/conditionalAccess`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /networkAccess/settings/conditionalAccess']['parameters']
  ): EndpointRequest<IEndpoints['DELETE /networkAccess/settings/conditionalAccess']['response']> {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/networkAccess/settings/conditionalAccess',
      paramDefs: {
        header: ['If-Match'],
      },
      params,
    };
  },
};

export const crossTenantAccess = {
  /**
   * `GET /networkAccess/settings/crossTenantAccess`
   *
   * Retrieve the cross-tenant access settings, which include network packet tagging to enforce Tenant Restrictions Policies (TRv2 Policies) aimed at preventing data exfiltration to external tenants.
   */
  list: function list(
    params?: IEndpoints['GET /networkAccess/settings/crossTenantAccess']['parameters']
  ): EndpointRequest<IEndpoints['GET /networkAccess/settings/crossTenantAccess']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/networkAccess/settings/crossTenantAccess',
      paramDefs: {
        query: ['$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `PATCH /networkAccess/settings/crossTenantAccess`
   *
   * Update the cross-tenant access settings to include network packet tagging for enforcing Tenant Restrictions Policies (TRv2 Policies) that prevent data exfiltration to external tenants.
   */
  update: function update(
    body: IEndpoints['PATCH /networkAccess/settings/crossTenantAccess']['body']
  ): EndpointRequest<IEndpoints['PATCH /networkAccess/settings/crossTenantAccess']['response']> {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/networkAccess/settings/crossTenantAccess',
      body,
    };
  },
  /**
   * `DELETE /networkAccess/settings/crossTenantAccess`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /networkAccess/settings/crossTenantAccess']['parameters']
  ): EndpointRequest<IEndpoints['DELETE /networkAccess/settings/crossTenantAccess']['response']> {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/networkAccess/settings/crossTenantAccess',
      paramDefs: {
        header: ['If-Match'],
      },
      params,
    };
  },
};

export const customBlockPage = {
  /**
   * `GET /networkAccess/settings/customBlockPage`
   *
   */
  get: function get(
    params?: IEndpoints['GET /networkAccess/settings/customBlockPage']['parameters']
  ): EndpointRequest<IEndpoints['GET /networkAccess/settings/customBlockPage']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/networkAccess/settings/customBlockPage',
      paramDefs: {
        query: ['$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `PATCH /networkAccess/settings/customBlockPage`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /networkAccess/settings/customBlockPage']['body']
  ): EndpointRequest<IEndpoints['PATCH /networkAccess/settings/customBlockPage']['response']> {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/networkAccess/settings/customBlockPage',
      body,
    };
  },
  /**
   * `DELETE /networkAccess/settings/customBlockPage`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /networkAccess/settings/customBlockPage']['parameters']
  ): EndpointRequest<IEndpoints['DELETE /networkAccess/settings/customBlockPage']['response']> {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/networkAccess/settings/customBlockPage',
      paramDefs: {
        header: ['If-Match'],
      },
      params,
    };
  },
};

export const forwardingOptions = {
  /**
   * `GET /networkAccess/settings/forwardingOptions`
   *
   * Retrieve the forwarding options for the tenant, with a specific focus on the &#x27;skipDnsLookupState&#x27; flag. This flag determines whether DNS lookup will be skipped, allowing Microsoft 365 traffic to be forwarded directly to the Front Door using the client-resolved destination.
   */
  list: function list(
    params?: IEndpoints['GET /networkAccess/settings/forwardingOptions']['parameters']
  ): EndpointRequest<IEndpoints['GET /networkAccess/settings/forwardingOptions']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/networkAccess/settings/forwardingOptions',
      paramDefs: {
        query: ['$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `PATCH /networkAccess/settings/forwardingOptions`
   *
   * the forwarding options for the tenant, with a specific focus on the skipDnsLookupState flag. This flag determines whether DNS lookup will be skipped, allowing Microsoft 365 traffic to be forwarded directly to the Front Door using the client-resolved destination.
   */
  update: function update(
    body: IEndpoints['PATCH /networkAccess/settings/forwardingOptions']['body']
  ): EndpointRequest<IEndpoints['PATCH /networkAccess/settings/forwardingOptions']['response']> {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/networkAccess/settings/forwardingOptions',
      body,
    };
  },
  /**
   * `DELETE /networkAccess/settings/forwardingOptions`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /networkAccess/settings/forwardingOptions']['parameters']
  ): EndpointRequest<IEndpoints['DELETE /networkAccess/settings/forwardingOptions']['response']> {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/networkAccess/settings/forwardingOptions',
      paramDefs: {
        header: ['If-Match'],
      },
      params,
    };
  },
};
