import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/partner/securityScore': Operation<'/security/partner/securityScore', 'delete'>;
  'GET /security/partner/securityScore': Operation<'/security/partner/securityScore', 'get'>;
  'PATCH /security/partner/securityScore': Operation<'/security/partner/securityScore', 'patch'>;
  'GET /security/partner/securityScore/customerInsights': Operation<
    '/security/partner/securityScore/customerInsights',
    'get'
  >;
  'POST /security/partner/securityScore/customerInsights': Operation<
    '/security/partner/securityScore/customerInsights',
    'post'
  >;
  'GET /security/partner/securityScore/customerInsights/{customerInsight-tenantId}': Operation<
    '/security/partner/securityScore/customerInsights/{customerInsight-tenantId}',
    'get'
  >;
  'PATCH /security/partner/securityScore/customerInsights/{customerInsight-tenantId}': Operation<
    '/security/partner/securityScore/customerInsights/{customerInsight-tenantId}',
    'patch'
  >;
  'DELETE /security/partner/securityScore/customerInsights/{customerInsight-tenantId}': Operation<
    '/security/partner/securityScore/customerInsights/{customerInsight-tenantId}',
    'delete'
  >;
  'GET /security/partner/securityScore/history': Operation<
    '/security/partner/securityScore/history',
    'get'
  >;
  'POST /security/partner/securityScore/history': Operation<
    '/security/partner/securityScore/history',
    'post'
  >;
  'GET /security/partner/securityScore/history/{securityScoreHistory-id}': Operation<
    '/security/partner/securityScore/history/{securityScoreHistory-id}',
    'get'
  >;
  'PATCH /security/partner/securityScore/history/{securityScoreHistory-id}': Operation<
    '/security/partner/securityScore/history/{securityScoreHistory-id}',
    'patch'
  >;
  'DELETE /security/partner/securityScore/history/{securityScoreHistory-id}': Operation<
    '/security/partner/securityScore/history/{securityScoreHistory-id}',
    'delete'
  >;
  'GET /security/partner/securityScore/requirements': Operation<
    '/security/partner/securityScore/requirements',
    'get'
  >;
  'POST /security/partner/securityScore/requirements': Operation<
    '/security/partner/securityScore/requirements',
    'post'
  >;
  'GET /security/partner/securityScore/requirements/{securityRequirement-id}': Operation<
    '/security/partner/securityScore/requirements/{securityRequirement-id}',
    'get'
  >;
  'PATCH /security/partner/securityScore/requirements/{securityRequirement-id}': Operation<
    '/security/partner/securityScore/requirements/{securityRequirement-id}',
    'patch'
  >;
  'DELETE /security/partner/securityScore/requirements/{securityRequirement-id}': Operation<
    '/security/partner/securityScore/requirements/{securityRequirement-id}',
    'delete'
  >;
}

/**
 * `DELETE /security/partner/securityScore`
 *
 */
export function del(
  params?: IEndpoints['DELETE /security/partner/securityScore']['parameters']
): EndpointRequest<IEndpoints['DELETE /security/partner/securityScore']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/security/partner/securityScore',
    paramDefs: {
      header: ['If-Match'],
    },
    params,
  };
}

/**
 * `GET /security/partner/securityScore`
 *
 * Read the properties and relationships of a partnerSecurityScore object.
 */
export function get(
  params?: IEndpoints['GET /security/partner/securityScore']['parameters']
): EndpointRequest<IEndpoints['GET /security/partner/securityScore']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/partner/securityScore',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /security/partner/securityScore`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/partner/securityScore']['body']
): EndpointRequest<IEndpoints['PATCH /security/partner/securityScore']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/security/partner/securityScore',
    body,
  };
}

export const customerInsights = {
  /**
   * `GET /security/partner/securityScore/customerInsights`
   *
   * Get a list of the customerInsight objects and their properties.
   */
  list: function list(
    params?: IEndpoints['GET /security/partner/securityScore/customerInsights']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/partner/securityScore/customerInsights']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/security/partner/securityScore/customerInsights',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /security/partner/securityScore/customerInsights`
   *
   */
  create: function create(
    body: IEndpoints['POST /security/partner/securityScore/customerInsights']['body']
  ): EndpointRequest<
    IEndpoints['POST /security/partner/securityScore/customerInsights']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/security/partner/securityScore/customerInsights',
      body,
    };
  },
  /**
   * `GET /security/partner/securityScore/customerInsights/{customerInsight-tenantId}`
   *
   * Contains customer-specific information for certain requirements.
   */
  get: function get(
    params?: IEndpoints['GET /security/partner/securityScore/customerInsights/{customerInsight-tenantId}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/partner/securityScore/customerInsights/{customerInsight-tenantId}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/security/partner/securityScore/customerInsights/{customerInsight-tenantId}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['customerInsight-tenantId'],
      },
      params,
    };
  },
  /**
   * `PATCH /security/partner/securityScore/customerInsights/{customerInsight-tenantId}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /security/partner/securityScore/customerInsights/{customerInsight-tenantId}']['body'],
    params?: IEndpoints['PATCH /security/partner/securityScore/customerInsights/{customerInsight-tenantId}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /security/partner/securityScore/customerInsights/{customerInsight-tenantId}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/security/partner/securityScore/customerInsights/{customerInsight-tenantId}',
      paramDefs: {
        path: ['customerInsight-tenantId'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /security/partner/securityScore/customerInsights/{customerInsight-tenantId}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /security/partner/securityScore/customerInsights/{customerInsight-tenantId}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /security/partner/securityScore/customerInsights/{customerInsight-tenantId}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/security/partner/securityScore/customerInsights/{customerInsight-tenantId}',
      paramDefs: {
        header: ['If-Match'],
        path: ['customerInsight-tenantId'],
      },
      params,
    };
  },
};

export const history = {
  /**
   * `GET /security/partner/securityScore/history`
   *
   * Get a list of securityScoreHistory entries.
   */
  get: function get(
    params?: IEndpoints['GET /security/partner/securityScore/history']['parameters']
  ): EndpointRequest<IEndpoints['GET /security/partner/securityScore/history']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/security/partner/securityScore/history',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /security/partner/securityScore/history`
   *
   */
  create: function create(
    body: IEndpoints['POST /security/partner/securityScore/history']['body']
  ): EndpointRequest<IEndpoints['POST /security/partner/securityScore/history']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/security/partner/securityScore/history',
      body,
    };
  },
  /**
   * `GET /security/partner/securityScore/history/{securityScoreHistory-id}`
   *
   * Read the properties and relationships of a securityScoreHistory object.
   */
  get$1: function get$1(
    params?: IEndpoints['GET /security/partner/securityScore/history/{securityScoreHistory-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/partner/securityScore/history/{securityScoreHistory-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/security/partner/securityScore/history/{securityScoreHistory-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['securityScoreHistory-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /security/partner/securityScore/history/{securityScoreHistory-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /security/partner/securityScore/history/{securityScoreHistory-id}']['body'],
    params?: IEndpoints['PATCH /security/partner/securityScore/history/{securityScoreHistory-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /security/partner/securityScore/history/{securityScoreHistory-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/security/partner/securityScore/history/{securityScoreHistory-id}',
      paramDefs: {
        path: ['securityScoreHistory-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /security/partner/securityScore/history/{securityScoreHistory-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /security/partner/securityScore/history/{securityScoreHistory-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /security/partner/securityScore/history/{securityScoreHistory-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/security/partner/securityScore/history/{securityScoreHistory-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['securityScoreHistory-id'],
      },
      params,
    };
  },
};

export const requirements = {
  /**
   * `GET /security/partner/securityScore/requirements`
   *
   * Get a list of securityRequirement objects and their properties.
   */
  list: function list(
    params?: IEndpoints['GET /security/partner/securityScore/requirements']['parameters']
  ): EndpointRequest<IEndpoints['GET /security/partner/securityScore/requirements']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/security/partner/securityScore/requirements',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /security/partner/securityScore/requirements`
   *
   */
  create: function create(
    body: IEndpoints['POST /security/partner/securityScore/requirements']['body']
  ): EndpointRequest<IEndpoints['POST /security/partner/securityScore/requirements']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/security/partner/securityScore/requirements',
      body,
    };
  },
  /**
   * `GET /security/partner/securityScore/requirements/{securityRequirement-id}`
   *
   * Read the properties and relationships of a securityRequirement object.
   */
  get: function get(
    params?: IEndpoints['GET /security/partner/securityScore/requirements/{securityRequirement-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/partner/securityScore/requirements/{securityRequirement-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/security/partner/securityScore/requirements/{securityRequirement-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['securityRequirement-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /security/partner/securityScore/requirements/{securityRequirement-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /security/partner/securityScore/requirements/{securityRequirement-id}']['body'],
    params?: IEndpoints['PATCH /security/partner/securityScore/requirements/{securityRequirement-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /security/partner/securityScore/requirements/{securityRequirement-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/security/partner/securityScore/requirements/{securityRequirement-id}',
      paramDefs: {
        path: ['securityRequirement-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /security/partner/securityScore/requirements/{securityRequirement-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /security/partner/securityScore/requirements/{securityRequirement-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /security/partner/securityScore/requirements/{securityRequirement-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/security/partner/securityScore/requirements/{securityRequirement-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['securityRequirement-id'],
      },
      params,
    };
  },
};
