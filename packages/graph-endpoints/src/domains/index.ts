import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /domains/{domain-id}': Operation<'/domains/{domain-id}', 'delete'>;
  'GET /domains': Operation<'/domains', 'get'>;
  'GET /domains/{domain-id}': Operation<'/domains/{domain-id}', 'get'>;
  'PATCH /domains/{domain-id}': Operation<'/domains/{domain-id}', 'patch'>;
  'POST /domains': Operation<'/domains', 'post'>;
  'GET /domains/{domain-id}/domainNameReferences': Operation<
    '/domains/{domain-id}/domainNameReferences',
    'get'
  >;
  'GET /domains/{domain-id}/domainNameReferences/{directoryObject-id}': Operation<
    '/domains/{domain-id}/domainNameReferences/{directoryObject-id}',
    'get'
  >;
  'GET /domains/{domain-id}/federationConfiguration': Operation<
    '/domains/{domain-id}/federationConfiguration',
    'get'
  >;
  'POST /domains/{domain-id}/federationConfiguration': Operation<
    '/domains/{domain-id}/federationConfiguration',
    'post'
  >;
  'GET /domains/{domain-id}/federationConfiguration/{internalDomainFederation-id}': Operation<
    '/domains/{domain-id}/federationConfiguration/{internalDomainFederation-id}',
    'get'
  >;
  'PATCH /domains/{domain-id}/federationConfiguration/{internalDomainFederation-id}': Operation<
    '/domains/{domain-id}/federationConfiguration/{internalDomainFederation-id}',
    'patch'
  >;
  'DELETE /domains/{domain-id}/federationConfiguration/{internalDomainFederation-id}': Operation<
    '/domains/{domain-id}/federationConfiguration/{internalDomainFederation-id}',
    'delete'
  >;
  'POST /domains/{domain-id}/forceDelete': Operation<'/domains/{domain-id}/forceDelete', 'post'>;
  'POST /domains/{domain-id}/promote': Operation<'/domains/{domain-id}/promote', 'post'>;
  'GET /domains/{domain-id}/rootDomain': Operation<'/domains/{domain-id}/rootDomain', 'get'>;
  'GET /domains/{domain-id}/serviceConfigurationRecords': Operation<
    '/domains/{domain-id}/serviceConfigurationRecords',
    'get'
  >;
  'POST /domains/{domain-id}/serviceConfigurationRecords': Operation<
    '/domains/{domain-id}/serviceConfigurationRecords',
    'post'
  >;
  'GET /domains/{domain-id}/serviceConfigurationRecords/{domainDnsRecord-id}': Operation<
    '/domains/{domain-id}/serviceConfigurationRecords/{domainDnsRecord-id}',
    'get'
  >;
  'PATCH /domains/{domain-id}/serviceConfigurationRecords/{domainDnsRecord-id}': Operation<
    '/domains/{domain-id}/serviceConfigurationRecords/{domainDnsRecord-id}',
    'patch'
  >;
  'DELETE /domains/{domain-id}/serviceConfigurationRecords/{domainDnsRecord-id}': Operation<
    '/domains/{domain-id}/serviceConfigurationRecords/{domainDnsRecord-id}',
    'delete'
  >;
  'GET /domains/{domain-id}/verificationDnsRecords': Operation<
    '/domains/{domain-id}/verificationDnsRecords',
    'get'
  >;
  'POST /domains/{domain-id}/verificationDnsRecords': Operation<
    '/domains/{domain-id}/verificationDnsRecords',
    'post'
  >;
  'GET /domains/{domain-id}/verificationDnsRecords/{domainDnsRecord-id}': Operation<
    '/domains/{domain-id}/verificationDnsRecords/{domainDnsRecord-id}',
    'get'
  >;
  'PATCH /domains/{domain-id}/verificationDnsRecords/{domainDnsRecord-id}': Operation<
    '/domains/{domain-id}/verificationDnsRecords/{domainDnsRecord-id}',
    'patch'
  >;
  'DELETE /domains/{domain-id}/verificationDnsRecords/{domainDnsRecord-id}': Operation<
    '/domains/{domain-id}/verificationDnsRecords/{domainDnsRecord-id}',
    'delete'
  >;
  'POST /domains/{domain-id}/verify': Operation<'/domains/{domain-id}/verify', 'post'>;
}

/**
 * `DELETE /domains/{domain-id}`
 *
 * Delete a domain from a tenant.
 */
export function del(
  params?: IEndpoints['DELETE /domains/{domain-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /domains/{domain-id}']['response']> {
  return {
    method: 'delete',
    path: '/domains/{domain-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['domain-id'],
    },
    params,
  };
}

/**
 * `GET /domains`
 *
 * Retrieve a list of domain objects.
 */
export function list(
  params?: IEndpoints['GET /domains']['parameters']
): EndpointRequest<IEndpoints['GET /domains']['response']> {
  return {
    method: 'get',
    path: '/domains',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /domains/{domain-id}`
 *
 * Retrieve the properties and relationships of domain object.
 */
export function get(
  params?: IEndpoints['GET /domains/{domain-id}']['parameters']
): EndpointRequest<IEndpoints['GET /domains/{domain-id}']['response']> {
  return {
    method: 'get',
    path: '/domains/{domain-id}',
    paramDefs: {
      path: ['domain-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /domains/{domain-id}`
 *
 * Update the properties of domain object. Only verified domains can be updated.
 */
export function update(
  body: IEndpoints['PATCH /domains/{domain-id}']['body'],
  params?: IEndpoints['PATCH /domains/{domain-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /domains/{domain-id}']['response']> {
  return {
    method: 'patch',
    path: '/domains/{domain-id}',
    paramDefs: {
      path: ['domain-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /domains`
 *
 * Adds a domain to the tenant. Important: You cannot use an associated domain with your Microsoft Entra tenant until ownership is verified. See List verificationDnsRecords for details. Root domains require verification. For example, contoso.com requires verification. If a root domain is verified, subdomains of the root domain are automatically verified. For example, subdomain.contoso.com is automatically be verified if contoso.com has been verified.
 */
export function create(
  body: IEndpoints['POST /domains']['body']
): EndpointRequest<IEndpoints['POST /domains']['response']> {
  return {
    method: 'post',
    path: '/domains',
    body,
  };
}

export const domainNameReferences = {
  /**
   * `GET /domains/{domain-id}/domainNameReferences`
   *
   * Retrieve a list of directoryObject with a reference to the domain. The returned list will contain all directory objects that have a dependency on the domain.
   */
  list: function list(
    params?: IEndpoints['GET /domains/{domain-id}/domainNameReferences']['parameters']
  ): EndpointRequest<IEndpoints['GET /domains/{domain-id}/domainNameReferences']['response']> {
    return {
      method: 'get',
      path: '/domains/{domain-id}/domainNameReferences',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['domain-id'],
      },
      params,
    };
  },
  /**
   * `GET /domains/{domain-id}/domainNameReferences/{directoryObject-id}`
   *
   * The objects such as users and groups that reference the domain ID. Read-only, Nullable. Doesn&#x27;t support $expand. Supports $filter by the OData type of objects returned. For example, /domains/{domainId}/domainNameReferences/microsoft.graph.user and /domains/{domainId}/domainNameReferences/microsoft.graph.group.
   */
  get: function get(
    params?: IEndpoints['GET /domains/{domain-id}/domainNameReferences/{directoryObject-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /domains/{domain-id}/domainNameReferences/{directoryObject-id}']['response']
  > {
    return {
      method: 'get',
      path: '/domains/{domain-id}/domainNameReferences/{directoryObject-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['domain-id', 'directoryObject-id'],
      },
      params,
    };
  },
};

export const federationConfiguration = {
  /**
   * `GET /domains/{domain-id}/federationConfiguration`
   *
   * Read the properties of the internalDomainFederation objects for the domain. This API returns only one object in the collection.
   */
  get: function get(
    params?: IEndpoints['GET /domains/{domain-id}/federationConfiguration']['parameters']
  ): EndpointRequest<IEndpoints['GET /domains/{domain-id}/federationConfiguration']['response']> {
    return {
      method: 'get',
      path: '/domains/{domain-id}/federationConfiguration',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['domain-id'],
      },
      params,
    };
  },
  /**
   * `POST /domains/{domain-id}/federationConfiguration`
   *
   * Create a new internalDomainFederation object.
   */
  create: function create(
    body: IEndpoints['POST /domains/{domain-id}/federationConfiguration']['body'],
    params?: IEndpoints['POST /domains/{domain-id}/federationConfiguration']['parameters']
  ): EndpointRequest<IEndpoints['POST /domains/{domain-id}/federationConfiguration']['response']> {
    return {
      method: 'post',
      path: '/domains/{domain-id}/federationConfiguration',
      paramDefs: {
        path: ['domain-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /domains/{domain-id}/federationConfiguration/{internalDomainFederation-id}`
   *
   * Read the properties and relationships of an internalDomainFederation object.
   */
  get$1: function get$1(
    params?: IEndpoints['GET /domains/{domain-id}/federationConfiguration/{internalDomainFederation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /domains/{domain-id}/federationConfiguration/{internalDomainFederation-id}']['response']
  > {
    return {
      method: 'get',
      path: '/domains/{domain-id}/federationConfiguration/{internalDomainFederation-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['domain-id', 'internalDomainFederation-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /domains/{domain-id}/federationConfiguration/{internalDomainFederation-id}`
   *
   * Update the properties of an internalDomainFederation object.
   */
  update: function update(
    body: IEndpoints['PATCH /domains/{domain-id}/federationConfiguration/{internalDomainFederation-id}']['body'],
    params?: IEndpoints['PATCH /domains/{domain-id}/federationConfiguration/{internalDomainFederation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /domains/{domain-id}/federationConfiguration/{internalDomainFederation-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/domains/{domain-id}/federationConfiguration/{internalDomainFederation-id}',
      paramDefs: {
        path: ['domain-id', 'internalDomainFederation-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /domains/{domain-id}/federationConfiguration/{internalDomainFederation-id}`
   *
   * Delete an internalDomainFederation object.
   */
  del: function del(
    params?: IEndpoints['DELETE /domains/{domain-id}/federationConfiguration/{internalDomainFederation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /domains/{domain-id}/federationConfiguration/{internalDomainFederation-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/domains/{domain-id}/federationConfiguration/{internalDomainFederation-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['domain-id', 'internalDomainFederation-id'],
      },
      params,
    };
  },
};

export const forceDelete = {
  /**
   * `POST /domains/{domain-id}/forceDelete`
   *
   * Delete a domain using an asynchronous long-running operation. Before performing this operation, you must update or remove any references to Exchange as the provisioning service. The following actions are performed as part of this operation: After the domain deletion completes, API operations for the deleted domain return an HTTP 404 status code. To verify deletion of a domain, you can perform a get domain operation.
   */
  create: function create(
    body: IEndpoints['POST /domains/{domain-id}/forceDelete']['body'],
    params?: IEndpoints['POST /domains/{domain-id}/forceDelete']['parameters']
  ): EndpointRequest<IEndpoints['POST /domains/{domain-id}/forceDelete']['response']> {
    return {
      method: 'post',
      path: '/domains/{domain-id}/forceDelete',
      paramDefs: {
        path: ['domain-id'],
      },
      params,
      body,
    };
  },
};

export const promote = {
  /**
   * `POST /domains/{domain-id}/promote`
   *
   * Promote a verified subdomain to the root domain. A verified domain has its isVerified property set to true.
   */
  create: function create(
    params?: IEndpoints['POST /domains/{domain-id}/promote']['parameters']
  ): EndpointRequest<IEndpoints['POST /domains/{domain-id}/promote']['response']> {
    return {
      method: 'post',
      path: '/domains/{domain-id}/promote',
      paramDefs: {
        path: ['domain-id'],
      },
      params,
    };
  },
};

export const rootDomain = {
  /**
   * `GET /domains/{domain-id}/rootDomain`
   *
   * Get the root domain of a subdomain. This API returns a single object.
   */
  get: function get(
    params?: IEndpoints['GET /domains/{domain-id}/rootDomain']['parameters']
  ): EndpointRequest<IEndpoints['GET /domains/{domain-id}/rootDomain']['response']> {
    return {
      method: 'get',
      path: '/domains/{domain-id}/rootDomain',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['domain-id'],
      },
      params,
    };
  },
};

export const serviceConfigurationRecords = {
  /**
   * `GET /domains/{domain-id}/serviceConfigurationRecords`
   *
   * Retrieves a list of domainDnsRecord objects needed to enable services for the domain. Use the returned list to add records to the zone file of the domain. This can be done through the domain registrar or DNS server configuration.
   */
  list: function list(
    params?: IEndpoints['GET /domains/{domain-id}/serviceConfigurationRecords']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /domains/{domain-id}/serviceConfigurationRecords']['response']
  > {
    return {
      method: 'get',
      path: '/domains/{domain-id}/serviceConfigurationRecords',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['domain-id'],
      },
      params,
    };
  },
  /**
   * `POST /domains/{domain-id}/serviceConfigurationRecords`
   *
   */
  create: function create(
    body: IEndpoints['POST /domains/{domain-id}/serviceConfigurationRecords']['body'],
    params?: IEndpoints['POST /domains/{domain-id}/serviceConfigurationRecords']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /domains/{domain-id}/serviceConfigurationRecords']['response']
  > {
    return {
      method: 'post',
      path: '/domains/{domain-id}/serviceConfigurationRecords',
      paramDefs: {
        path: ['domain-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /domains/{domain-id}/serviceConfigurationRecords/{domainDnsRecord-id}`
   *
   * DNS records the customer adds to the DNS zone file of the domain before the domain can be used by Microsoft Online services. Read-only, Nullable. Doesn&#x27;t support $expand.
   */
  get: function get(
    params?: IEndpoints['GET /domains/{domain-id}/serviceConfigurationRecords/{domainDnsRecord-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /domains/{domain-id}/serviceConfigurationRecords/{domainDnsRecord-id}']['response']
  > {
    return {
      method: 'get',
      path: '/domains/{domain-id}/serviceConfigurationRecords/{domainDnsRecord-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['domain-id', 'domainDnsRecord-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /domains/{domain-id}/serviceConfigurationRecords/{domainDnsRecord-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /domains/{domain-id}/serviceConfigurationRecords/{domainDnsRecord-id}']['body'],
    params?: IEndpoints['PATCH /domains/{domain-id}/serviceConfigurationRecords/{domainDnsRecord-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /domains/{domain-id}/serviceConfigurationRecords/{domainDnsRecord-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/domains/{domain-id}/serviceConfigurationRecords/{domainDnsRecord-id}',
      paramDefs: {
        path: ['domain-id', 'domainDnsRecord-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /domains/{domain-id}/serviceConfigurationRecords/{domainDnsRecord-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /domains/{domain-id}/serviceConfigurationRecords/{domainDnsRecord-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /domains/{domain-id}/serviceConfigurationRecords/{domainDnsRecord-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/domains/{domain-id}/serviceConfigurationRecords/{domainDnsRecord-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['domain-id', 'domainDnsRecord-id'],
      },
      params,
    };
  },
};

export const verificationDnsRecords = {
  /**
   * `GET /domains/{domain-id}/verificationDnsRecords`
   *
   * Retrieve a list of domainDnsRecord objects. You cannot use an associated domain with your Microsoft Entra tenant until ownership is verified. To verify the ownership of the domain, retrieve the domain verification records and add the details to the zone file of the domain. This can be done through the domain registrar or DNS server configuration. Root domains require verification. For example, contoso.com requires verification. If a root domain is verified, subdomains of the root domain are automatically verified. For example, subdomain.contoso.com is automatically be verified if contoso.com has been verified.
   */
  list: function list(
    params?: IEndpoints['GET /domains/{domain-id}/verificationDnsRecords']['parameters']
  ): EndpointRequest<IEndpoints['GET /domains/{domain-id}/verificationDnsRecords']['response']> {
    return {
      method: 'get',
      path: '/domains/{domain-id}/verificationDnsRecords',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['domain-id'],
      },
      params,
    };
  },
  /**
   * `POST /domains/{domain-id}/verificationDnsRecords`
   *
   */
  create: function create(
    body: IEndpoints['POST /domains/{domain-id}/verificationDnsRecords']['body'],
    params?: IEndpoints['POST /domains/{domain-id}/verificationDnsRecords']['parameters']
  ): EndpointRequest<IEndpoints['POST /domains/{domain-id}/verificationDnsRecords']['response']> {
    return {
      method: 'post',
      path: '/domains/{domain-id}/verificationDnsRecords',
      paramDefs: {
        path: ['domain-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /domains/{domain-id}/verificationDnsRecords/{domainDnsRecord-id}`
   *
   * DNS records that the customer adds to the DNS zone file of the domain before the customer can complete domain ownership verification with Microsoft Entra ID. Read-only, Nullable. Doesn&#x27;t support $expand.
   */
  get: function get(
    params?: IEndpoints['GET /domains/{domain-id}/verificationDnsRecords/{domainDnsRecord-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /domains/{domain-id}/verificationDnsRecords/{domainDnsRecord-id}']['response']
  > {
    return {
      method: 'get',
      path: '/domains/{domain-id}/verificationDnsRecords/{domainDnsRecord-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['domain-id', 'domainDnsRecord-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /domains/{domain-id}/verificationDnsRecords/{domainDnsRecord-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /domains/{domain-id}/verificationDnsRecords/{domainDnsRecord-id}']['body'],
    params?: IEndpoints['PATCH /domains/{domain-id}/verificationDnsRecords/{domainDnsRecord-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /domains/{domain-id}/verificationDnsRecords/{domainDnsRecord-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/domains/{domain-id}/verificationDnsRecords/{domainDnsRecord-id}',
      paramDefs: {
        path: ['domain-id', 'domainDnsRecord-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /domains/{domain-id}/verificationDnsRecords/{domainDnsRecord-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /domains/{domain-id}/verificationDnsRecords/{domainDnsRecord-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /domains/{domain-id}/verificationDnsRecords/{domainDnsRecord-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/domains/{domain-id}/verificationDnsRecords/{domainDnsRecord-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['domain-id', 'domainDnsRecord-id'],
      },
      params,
    };
  },
};

export const verify = {
  /**
   * `POST /domains/{domain-id}/verify`
   *
   * Validate the ownership of a domain. This operation only applies to an unverified domain. For an unverified domain, the isVerified property is false.
   */
  create: function create(
    params?: IEndpoints['POST /domains/{domain-id}/verify']['parameters']
  ): EndpointRequest<IEndpoints['POST /domains/{domain-id}/verify']['response']> {
    return {
      method: 'post',
      path: '/domains/{domain-id}/verify',
      paramDefs: {
        path: ['domain-id'],
      },
      params,
    };
  },
};
