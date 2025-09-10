import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/threatIntelligence/hosts/{host-id}': Operation<
    '/security/threatIntelligence/hosts/{host-id}',
    'delete'
  >;
  'GET /security/threatIntelligence/hosts': Operation<'/security/threatIntelligence/hosts', 'get'>;
  'GET /security/threatIntelligence/hosts/{host-id}': Operation<
    '/security/threatIntelligence/hosts/{host-id}',
    'get'
  >;
  'PATCH /security/threatIntelligence/hosts/{host-id}': Operation<
    '/security/threatIntelligence/hosts/{host-id}',
    'patch'
  >;
  'POST /security/threatIntelligence/hosts': Operation<
    '/security/threatIntelligence/hosts',
    'post'
  >;
  'GET /security/threatIntelligence/hosts/{host-id}/childHostPairs': Operation<
    '/security/threatIntelligence/hosts/{host-id}/childHostPairs',
    'get'
  >;
  'GET /security/threatIntelligence/hosts/{host-id}/childHostPairs/{hostPair-id}': Operation<
    '/security/threatIntelligence/hosts/{host-id}/childHostPairs/{hostPair-id}',
    'get'
  >;
  'GET /security/threatIntelligence/hosts/{host-id}/components': Operation<
    '/security/threatIntelligence/hosts/{host-id}/components',
    'get'
  >;
  'GET /security/threatIntelligence/hosts/{host-id}/components/{hostComponent-id}': Operation<
    '/security/threatIntelligence/hosts/{host-id}/components/{hostComponent-id}',
    'get'
  >;
  'GET /security/threatIntelligence/hosts/{host-id}/cookies': Operation<
    '/security/threatIntelligence/hosts/{host-id}/cookies',
    'get'
  >;
  'GET /security/threatIntelligence/hosts/{host-id}/cookies/{hostCookie-id}': Operation<
    '/security/threatIntelligence/hosts/{host-id}/cookies/{hostCookie-id}',
    'get'
  >;
  'GET /security/threatIntelligence/hosts/{host-id}/hostPairs': Operation<
    '/security/threatIntelligence/hosts/{host-id}/hostPairs',
    'get'
  >;
  'GET /security/threatIntelligence/hosts/{host-id}/hostPairs/{hostPair-id}': Operation<
    '/security/threatIntelligence/hosts/{host-id}/hostPairs/{hostPair-id}',
    'get'
  >;
  'GET /security/threatIntelligence/hosts/{host-id}/parentHostPairs': Operation<
    '/security/threatIntelligence/hosts/{host-id}/parentHostPairs',
    'get'
  >;
  'GET /security/threatIntelligence/hosts/{host-id}/parentHostPairs/{hostPair-id}': Operation<
    '/security/threatIntelligence/hosts/{host-id}/parentHostPairs/{hostPair-id}',
    'get'
  >;
  'GET /security/threatIntelligence/hosts/{host-id}/passiveDns': Operation<
    '/security/threatIntelligence/hosts/{host-id}/passiveDns',
    'get'
  >;
  'GET /security/threatIntelligence/hosts/{host-id}/passiveDns/{passiveDnsRecord-id}': Operation<
    '/security/threatIntelligence/hosts/{host-id}/passiveDns/{passiveDnsRecord-id}',
    'get'
  >;
  'GET /security/threatIntelligence/hosts/{host-id}/passiveDnsReverse': Operation<
    '/security/threatIntelligence/hosts/{host-id}/passiveDnsReverse',
    'get'
  >;
  'GET /security/threatIntelligence/hosts/{host-id}/passiveDnsReverse/{passiveDnsRecord-id}': Operation<
    '/security/threatIntelligence/hosts/{host-id}/passiveDnsReverse/{passiveDnsRecord-id}',
    'get'
  >;
  'GET /security/threatIntelligence/hosts/{host-id}/ports': Operation<
    '/security/threatIntelligence/hosts/{host-id}/ports',
    'get'
  >;
  'GET /security/threatIntelligence/hosts/{host-id}/ports/{hostPort-id}': Operation<
    '/security/threatIntelligence/hosts/{host-id}/ports/{hostPort-id}',
    'get'
  >;
  'GET /security/threatIntelligence/hosts/{host-id}/reputation': Operation<
    '/security/threatIntelligence/hosts/{host-id}/reputation',
    'get'
  >;
  'PATCH /security/threatIntelligence/hosts/{host-id}/reputation': Operation<
    '/security/threatIntelligence/hosts/{host-id}/reputation',
    'patch'
  >;
  'DELETE /security/threatIntelligence/hosts/{host-id}/reputation': Operation<
    '/security/threatIntelligence/hosts/{host-id}/reputation',
    'delete'
  >;
  'GET /security/threatIntelligence/hosts/{host-id}/sslCertificates': Operation<
    '/security/threatIntelligence/hosts/{host-id}/sslCertificates',
    'get'
  >;
  'GET /security/threatIntelligence/hosts/{host-id}/sslCertificates/{hostSslCertificate-id}': Operation<
    '/security/threatIntelligence/hosts/{host-id}/sslCertificates/{hostSslCertificate-id}',
    'get'
  >;
  'GET /security/threatIntelligence/hosts/{host-id}/subdomains': Operation<
    '/security/threatIntelligence/hosts/{host-id}/subdomains',
    'get'
  >;
  'GET /security/threatIntelligence/hosts/{host-id}/subdomains/{subdomain-id}': Operation<
    '/security/threatIntelligence/hosts/{host-id}/subdomains/{subdomain-id}',
    'get'
  >;
  'GET /security/threatIntelligence/hosts/{host-id}/trackers': Operation<
    '/security/threatIntelligence/hosts/{host-id}/trackers',
    'get'
  >;
  'GET /security/threatIntelligence/hosts/{host-id}/trackers/{hostTracker-id}': Operation<
    '/security/threatIntelligence/hosts/{host-id}/trackers/{hostTracker-id}',
    'get'
  >;
  'GET /security/threatIntelligence/hosts/{host-id}/whois': Operation<
    '/security/threatIntelligence/hosts/{host-id}/whois',
    'get'
  >;
}

/**
 * `DELETE /security/threatIntelligence/hosts/{host-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /security/threatIntelligence/hosts/{host-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /security/threatIntelligence/hosts/{host-id}']['response']> {
  return {
    method: 'delete',
    path: '/security/threatIntelligence/hosts/{host-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['host-id'],
    },
    params,
  };
}

/**
 * `GET /security/threatIntelligence/hosts`
 *
 * Read the properties and relationships of a host object. The host resource is the abstract base type that returns an implementation. A host can be of one of the following types:
 */
export function list(
  params?: IEndpoints['GET /security/threatIntelligence/hosts']['parameters']
): EndpointRequest<IEndpoints['GET /security/threatIntelligence/hosts']['response']> {
  return {
    method: 'get',
    path: '/security/threatIntelligence/hosts',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /security/threatIntelligence/hosts/{host-id}`
 *
 * Read the properties and relationships of a host object. The host resource is the abstract base type that returns an implementation. A host can be of one of the following types:
 */
export function get(
  params?: IEndpoints['GET /security/threatIntelligence/hosts/{host-id}']['parameters']
): EndpointRequest<IEndpoints['GET /security/threatIntelligence/hosts/{host-id}']['response']> {
  return {
    method: 'get',
    path: '/security/threatIntelligence/hosts/{host-id}',
    paramDefs: {
      path: ['host-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /security/threatIntelligence/hosts/{host-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/threatIntelligence/hosts/{host-id}']['body'],
  params?: IEndpoints['PATCH /security/threatIntelligence/hosts/{host-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /security/threatIntelligence/hosts/{host-id}']['response']> {
  return {
    method: 'patch',
    path: '/security/threatIntelligence/hosts/{host-id}',
    paramDefs: {
      path: ['host-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /security/threatIntelligence/hosts`
 *
 */
export function create(
  body: IEndpoints['POST /security/threatIntelligence/hosts']['body']
): EndpointRequest<IEndpoints['POST /security/threatIntelligence/hosts']['response']> {
  return {
    method: 'post',
    path: '/security/threatIntelligence/hosts',
    body,
  };
}

export const childHostPairs = {
  /**
   * `GET /security/threatIntelligence/hosts/{host-id}/childHostPairs`
   *
   * Get the list of hostPair resources associated with a host, where that host is the *parent* and has an outgoing pairing to a *child*.
   */
  list: function list(
    params?: IEndpoints['GET /security/threatIntelligence/hosts/{host-id}/childHostPairs']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/threatIntelligence/hosts/{host-id}/childHostPairs']['response']
  > {
    return {
      method: 'get',
      path: '/security/threatIntelligence/hosts/{host-id}/childHostPairs',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['host-id'],
      },
      params,
    };
  },
  /**
   * `GET /security/threatIntelligence/hosts/{host-id}/childHostPairs/{hostPair-id}`
   *
   * The hostPairs that are resources associated with a host, where that host is the parentHost and has an outgoing pairing to a childHost.
   */
  get: function get(
    params?: IEndpoints['GET /security/threatIntelligence/hosts/{host-id}/childHostPairs/{hostPair-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/threatIntelligence/hosts/{host-id}/childHostPairs/{hostPair-id}']['response']
  > {
    return {
      method: 'get',
      path: '/security/threatIntelligence/hosts/{host-id}/childHostPairs/{hostPair-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['host-id', 'hostPair-id'],
      },
      params,
    };
  },
};

export const components = {
  /**
   * `GET /security/threatIntelligence/hosts/{host-id}/components`
   *
   * Get a list of hostComponent resources.
   */
  list: function list(
    params?: IEndpoints['GET /security/threatIntelligence/hosts/{host-id}/components']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/threatIntelligence/hosts/{host-id}/components']['response']
  > {
    return {
      method: 'get',
      path: '/security/threatIntelligence/hosts/{host-id}/components',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['host-id'],
      },
      params,
    };
  },
  /**
   * `GET /security/threatIntelligence/hosts/{host-id}/components/{hostComponent-id}`
   *
   * The hostComponents that are associated with this host.
   */
  get: function get(
    params?: IEndpoints['GET /security/threatIntelligence/hosts/{host-id}/components/{hostComponent-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/threatIntelligence/hosts/{host-id}/components/{hostComponent-id}']['response']
  > {
    return {
      method: 'get',
      path: '/security/threatIntelligence/hosts/{host-id}/components/{hostComponent-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['host-id', 'hostComponent-id'],
      },
      params,
    };
  },
};

export const cookies = {
  /**
   * `GET /security/threatIntelligence/hosts/{host-id}/cookies`
   *
   * Get a list of hostCookie resources.
   */
  list: function list(
    params?: IEndpoints['GET /security/threatIntelligence/hosts/{host-id}/cookies']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/threatIntelligence/hosts/{host-id}/cookies']['response']
  > {
    return {
      method: 'get',
      path: '/security/threatIntelligence/hosts/{host-id}/cookies',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['host-id'],
      },
      params,
    };
  },
  /**
   * `GET /security/threatIntelligence/hosts/{host-id}/cookies/{hostCookie-id}`
   *
   * The hostCookies that are associated with this host.
   */
  get: function get(
    params?: IEndpoints['GET /security/threatIntelligence/hosts/{host-id}/cookies/{hostCookie-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/threatIntelligence/hosts/{host-id}/cookies/{hostCookie-id}']['response']
  > {
    return {
      method: 'get',
      path: '/security/threatIntelligence/hosts/{host-id}/cookies/{hostCookie-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['host-id', 'hostCookie-id'],
      },
      params,
    };
  },
};

export const hostPairs = {
  /**
   * `GET /security/threatIntelligence/hosts/{host-id}/hostPairs`
   *
   * Get the list of hostPair resources associated with a host, where that host is *either* the *parent* or the *child*.
   */
  list: function list(
    params?: IEndpoints['GET /security/threatIntelligence/hosts/{host-id}/hostPairs']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/threatIntelligence/hosts/{host-id}/hostPairs']['response']
  > {
    return {
      method: 'get',
      path: '/security/threatIntelligence/hosts/{host-id}/hostPairs',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['host-id'],
      },
      params,
    };
  },
  /**
   * `GET /security/threatIntelligence/hosts/{host-id}/hostPairs/{hostPair-id}`
   *
   * The hostPairs that are associated with this host, where this host is either the parentHost or childHost.
   */
  get: function get(
    params?: IEndpoints['GET /security/threatIntelligence/hosts/{host-id}/hostPairs/{hostPair-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/threatIntelligence/hosts/{host-id}/hostPairs/{hostPair-id}']['response']
  > {
    return {
      method: 'get',
      path: '/security/threatIntelligence/hosts/{host-id}/hostPairs/{hostPair-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['host-id', 'hostPair-id'],
      },
      params,
    };
  },
};

export const parentHostPairs = {
  /**
   * `GET /security/threatIntelligence/hosts/{host-id}/parentHostPairs`
   *
   * Get the list of hostPair resources associated with a host, where that host is the *child* and has an incoming pairing with a *parent*.
   */
  list: function list(
    params?: IEndpoints['GET /security/threatIntelligence/hosts/{host-id}/parentHostPairs']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/threatIntelligence/hosts/{host-id}/parentHostPairs']['response']
  > {
    return {
      method: 'get',
      path: '/security/threatIntelligence/hosts/{host-id}/parentHostPairs',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['host-id'],
      },
      params,
    };
  },
  /**
   * `GET /security/threatIntelligence/hosts/{host-id}/parentHostPairs/{hostPair-id}`
   *
   * The hostPairs that are associated with a host, where that host is the childHost and has an incoming pairing with a parentHost.
   */
  get: function get(
    params?: IEndpoints['GET /security/threatIntelligence/hosts/{host-id}/parentHostPairs/{hostPair-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/threatIntelligence/hosts/{host-id}/parentHostPairs/{hostPair-id}']['response']
  > {
    return {
      method: 'get',
      path: '/security/threatIntelligence/hosts/{host-id}/parentHostPairs/{hostPair-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['host-id', 'hostPair-id'],
      },
      params,
    };
  },
};

export const passiveDns = {
  /**
   * `GET /security/threatIntelligence/hosts/{host-id}/passiveDns`
   *
   * Get a list of passiveDnsRecord resources associated with a host. This method is a forward DNS lookup that queries the IP address of the specified host using its hostname.
   */
  list: function list(
    params?: IEndpoints['GET /security/threatIntelligence/hosts/{host-id}/passiveDns']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/threatIntelligence/hosts/{host-id}/passiveDns']['response']
  > {
    return {
      method: 'get',
      path: '/security/threatIntelligence/hosts/{host-id}/passiveDns',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['host-id'],
      },
      params,
    };
  },
  /**
   * `GET /security/threatIntelligence/hosts/{host-id}/passiveDns/{passiveDnsRecord-id}`
   *
   * Passive DNS retrieval about this host.
   */
  get: function get(
    params?: IEndpoints['GET /security/threatIntelligence/hosts/{host-id}/passiveDns/{passiveDnsRecord-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/threatIntelligence/hosts/{host-id}/passiveDns/{passiveDnsRecord-id}']['response']
  > {
    return {
      method: 'get',
      path: '/security/threatIntelligence/hosts/{host-id}/passiveDns/{passiveDnsRecord-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['host-id', 'passiveDnsRecord-id'],
      },
      params,
    };
  },
};

export const passiveDnsReverse = {
  /**
   * `GET /security/threatIntelligence/hosts/{host-id}/passiveDnsReverse`
   *
   * Get a collection of passiveDnsRecord resources from a reverse passive DNS retrieval.  A reverse DNS lookup queries the hostname of a host using an IP address.
   */
  get: function get(
    params?: IEndpoints['GET /security/threatIntelligence/hosts/{host-id}/passiveDnsReverse']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/threatIntelligence/hosts/{host-id}/passiveDnsReverse']['response']
  > {
    return {
      method: 'get',
      path: '/security/threatIntelligence/hosts/{host-id}/passiveDnsReverse',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['host-id'],
      },
      params,
    };
  },
  /**
   * `GET /security/threatIntelligence/hosts/{host-id}/passiveDnsReverse/{passiveDnsRecord-id}`
   *
   * Reverse passive DNS retrieval about this host.
   */
  get$1: function get$1(
    params?: IEndpoints['GET /security/threatIntelligence/hosts/{host-id}/passiveDnsReverse/{passiveDnsRecord-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/threatIntelligence/hosts/{host-id}/passiveDnsReverse/{passiveDnsRecord-id}']['response']
  > {
    return {
      method: 'get',
      path: '/security/threatIntelligence/hosts/{host-id}/passiveDnsReverse/{passiveDnsRecord-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['host-id', 'passiveDnsRecord-id'],
      },
      params,
    };
  },
};

export const ports = {
  /**
   * `GET /security/threatIntelligence/hosts/{host-id}/ports`
   *
   * Get the list of hostPort resources associated with a host.
   */
  list: function list(
    params?: IEndpoints['GET /security/threatIntelligence/hosts/{host-id}/ports']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/threatIntelligence/hosts/{host-id}/ports']['response']
  > {
    return {
      method: 'get',
      path: '/security/threatIntelligence/hosts/{host-id}/ports',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['host-id'],
      },
      params,
    };
  },
  /**
   * `GET /security/threatIntelligence/hosts/{host-id}/ports/{hostPort-id}`
   *
   * The hostPorts associated with a host.
   */
  get: function get(
    params?: IEndpoints['GET /security/threatIntelligence/hosts/{host-id}/ports/{hostPort-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/threatIntelligence/hosts/{host-id}/ports/{hostPort-id}']['response']
  > {
    return {
      method: 'get',
      path: '/security/threatIntelligence/hosts/{host-id}/ports/{hostPort-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['host-id', 'hostPort-id'],
      },
      params,
    };
  },
};

export const reputation = {
  /**
   * `GET /security/threatIntelligence/hosts/{host-id}/reputation`
   *
   * Get the properties and relationships of a hostReputation object.
   */
  get: function get(
    params?: IEndpoints['GET /security/threatIntelligence/hosts/{host-id}/reputation']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/threatIntelligence/hosts/{host-id}/reputation']['response']
  > {
    return {
      method: 'get',
      path: '/security/threatIntelligence/hosts/{host-id}/reputation',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['host-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /security/threatIntelligence/hosts/{host-id}/reputation`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /security/threatIntelligence/hosts/{host-id}/reputation']['body'],
    params?: IEndpoints['PATCH /security/threatIntelligence/hosts/{host-id}/reputation']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /security/threatIntelligence/hosts/{host-id}/reputation']['response']
  > {
    return {
      method: 'patch',
      path: '/security/threatIntelligence/hosts/{host-id}/reputation',
      paramDefs: {
        path: ['host-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /security/threatIntelligence/hosts/{host-id}/reputation`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /security/threatIntelligence/hosts/{host-id}/reputation']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /security/threatIntelligence/hosts/{host-id}/reputation']['response']
  > {
    return {
      method: 'delete',
      path: '/security/threatIntelligence/hosts/{host-id}/reputation',
      paramDefs: {
        header: ['If-Match'],
        path: ['host-id'],
      },
      params,
    };
  },
};

export const sslCertificates = {
  /**
   * `GET /security/threatIntelligence/hosts/{host-id}/sslCertificates`
   *
   * Get a list of hostSslCertificate objects from the host navigation property.
   */
  list: function list(
    params?: IEndpoints['GET /security/threatIntelligence/hosts/{host-id}/sslCertificates']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/threatIntelligence/hosts/{host-id}/sslCertificates']['response']
  > {
    return {
      method: 'get',
      path: '/security/threatIntelligence/hosts/{host-id}/sslCertificates',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['host-id'],
      },
      params,
    };
  },
  /**
   * `GET /security/threatIntelligence/hosts/{host-id}/sslCertificates/{hostSslCertificate-id}`
   *
   * The hostSslCertificates that are associated with this host.
   */
  get: function get(
    params?: IEndpoints['GET /security/threatIntelligence/hosts/{host-id}/sslCertificates/{hostSslCertificate-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/threatIntelligence/hosts/{host-id}/sslCertificates/{hostSslCertificate-id}']['response']
  > {
    return {
      method: 'get',
      path: '/security/threatIntelligence/hosts/{host-id}/sslCertificates/{hostSslCertificate-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['host-id', 'hostSslCertificate-id'],
      },
      params,
    };
  },
};

export const subdomains = {
  /**
   * `GET /security/threatIntelligence/hosts/{host-id}/subdomains`
   *
   * Get the list of subdomain resources associated with a host.
   */
  list: function list(
    params?: IEndpoints['GET /security/threatIntelligence/hosts/{host-id}/subdomains']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/threatIntelligence/hosts/{host-id}/subdomains']['response']
  > {
    return {
      method: 'get',
      path: '/security/threatIntelligence/hosts/{host-id}/subdomains',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['host-id'],
      },
      params,
    };
  },
  /**
   * `GET /security/threatIntelligence/hosts/{host-id}/subdomains/{subdomain-id}`
   *
   * The subdomains that are associated with this host.
   */
  get: function get(
    params?: IEndpoints['GET /security/threatIntelligence/hosts/{host-id}/subdomains/{subdomain-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/threatIntelligence/hosts/{host-id}/subdomains/{subdomain-id}']['response']
  > {
    return {
      method: 'get',
      path: '/security/threatIntelligence/hosts/{host-id}/subdomains/{subdomain-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['host-id', 'subdomain-id'],
      },
      params,
    };
  },
};

export const trackers = {
  /**
   * `GET /security/threatIntelligence/hosts/{host-id}/trackers`
   *
   * Get a list of hostTracker resources.
   */
  list: function list(
    params?: IEndpoints['GET /security/threatIntelligence/hosts/{host-id}/trackers']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/threatIntelligence/hosts/{host-id}/trackers']['response']
  > {
    return {
      method: 'get',
      path: '/security/threatIntelligence/hosts/{host-id}/trackers',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['host-id'],
      },
      params,
    };
  },
  /**
   * `GET /security/threatIntelligence/hosts/{host-id}/trackers/{hostTracker-id}`
   *
   * The hostTrackers that are associated with this host.
   */
  get: function get(
    params?: IEndpoints['GET /security/threatIntelligence/hosts/{host-id}/trackers/{hostTracker-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/threatIntelligence/hosts/{host-id}/trackers/{hostTracker-id}']['response']
  > {
    return {
      method: 'get',
      path: '/security/threatIntelligence/hosts/{host-id}/trackers/{hostTracker-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['host-id', 'hostTracker-id'],
      },
      params,
    };
  },
};

export const whois = {
  /**
  * `GET /security/threatIntelligence/hosts/{host-id}/whois`
  *
  * Get the specified whoisRecord resource.  Specify the desired whoisRecord in one of the following two ways:
- Identify a host and get its current whoisRecord. 
- Specify an id value to get the corresponding whoisRecord.
  */
  list: function list(
    params?: IEndpoints['GET /security/threatIntelligence/hosts/{host-id}/whois']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/threatIntelligence/hosts/{host-id}/whois']['response']
  > {
    return {
      method: 'get',
      path: '/security/threatIntelligence/hosts/{host-id}/whois',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['host-id'],
      },
      params,
    };
  },
};
