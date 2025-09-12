import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/threatIntelligence/vulnerabilities/{vulnerability-id}': Operation<
    '/security/threatIntelligence/vulnerabilities/{vulnerability-id}',
    'delete'
  >;
  'GET /security/threatIntelligence/vulnerabilities': Operation<
    '/security/threatIntelligence/vulnerabilities',
    'get'
  >;
  'GET /security/threatIntelligence/vulnerabilities/{vulnerability-id}': Operation<
    '/security/threatIntelligence/vulnerabilities/{vulnerability-id}',
    'get'
  >;
  'PATCH /security/threatIntelligence/vulnerabilities/{vulnerability-id}': Operation<
    '/security/threatIntelligence/vulnerabilities/{vulnerability-id}',
    'patch'
  >;
  'POST /security/threatIntelligence/vulnerabilities': Operation<
    '/security/threatIntelligence/vulnerabilities',
    'post'
  >;
  'GET /security/threatIntelligence/vulnerabilities/{vulnerability-id}/articles': Operation<
    '/security/threatIntelligence/vulnerabilities/{vulnerability-id}/articles',
    'get'
  >;
  'GET /security/threatIntelligence/vulnerabilities/{vulnerability-id}/articles/{article-id}': Operation<
    '/security/threatIntelligence/vulnerabilities/{vulnerability-id}/articles/{article-id}',
    'get'
  >;
  'GET /security/threatIntelligence/vulnerabilities/{vulnerability-id}/components': Operation<
    '/security/threatIntelligence/vulnerabilities/{vulnerability-id}/components',
    'get'
  >;
  'POST /security/threatIntelligence/vulnerabilities/{vulnerability-id}/components': Operation<
    '/security/threatIntelligence/vulnerabilities/{vulnerability-id}/components',
    'post'
  >;
  'GET /security/threatIntelligence/vulnerabilities/{vulnerability-id}/components/{vulnerabilityComponent-id}': Operation<
    '/security/threatIntelligence/vulnerabilities/{vulnerability-id}/components/{vulnerabilityComponent-id}',
    'get'
  >;
  'PATCH /security/threatIntelligence/vulnerabilities/{vulnerability-id}/components/{vulnerabilityComponent-id}': Operation<
    '/security/threatIntelligence/vulnerabilities/{vulnerability-id}/components/{vulnerabilityComponent-id}',
    'patch'
  >;
  'DELETE /security/threatIntelligence/vulnerabilities/{vulnerability-id}/components/{vulnerabilityComponent-id}': Operation<
    '/security/threatIntelligence/vulnerabilities/{vulnerability-id}/components/{vulnerabilityComponent-id}',
    'delete'
  >;
}

/**
 * `DELETE /security/threatIntelligence/vulnerabilities/{vulnerability-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /security/threatIntelligence/vulnerabilities/{vulnerability-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /security/threatIntelligence/vulnerabilities/{vulnerability-id}']['response']
> {
  return {
    method: 'delete',
    path: '/security/threatIntelligence/vulnerabilities/{vulnerability-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['vulnerability-id'],
    },
    params,
  };
}

/**
 * `GET /security/threatIntelligence/vulnerabilities`
 *
 * Read the properties and relationships of a vulnerability object.
 */
export function list(
  params?: IEndpoints['GET /security/threatIntelligence/vulnerabilities']['parameters']
): EndpointRequest<IEndpoints['GET /security/threatIntelligence/vulnerabilities']['response']> {
  return {
    method: 'get',
    path: '/security/threatIntelligence/vulnerabilities',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /security/threatIntelligence/vulnerabilities/{vulnerability-id}`
 *
 * Read the properties and relationships of a vulnerability object.
 */
export function get(
  params?: IEndpoints['GET /security/threatIntelligence/vulnerabilities/{vulnerability-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/threatIntelligence/vulnerabilities/{vulnerability-id}']['response']
> {
  return {
    method: 'get',
    path: '/security/threatIntelligence/vulnerabilities/{vulnerability-id}',
    paramDefs: {
      path: ['vulnerability-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /security/threatIntelligence/vulnerabilities/{vulnerability-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/threatIntelligence/vulnerabilities/{vulnerability-id}']['body'],
  params?: IEndpoints['PATCH /security/threatIntelligence/vulnerabilities/{vulnerability-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /security/threatIntelligence/vulnerabilities/{vulnerability-id}']['response']
> {
  return {
    method: 'patch',
    path: '/security/threatIntelligence/vulnerabilities/{vulnerability-id}',
    paramDefs: {
      path: ['vulnerability-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /security/threatIntelligence/vulnerabilities`
 *
 */
export function create(
  body: IEndpoints['POST /security/threatIntelligence/vulnerabilities']['body']
): EndpointRequest<IEndpoints['POST /security/threatIntelligence/vulnerabilities']['response']> {
  return {
    method: 'post',
    path: '/security/threatIntelligence/vulnerabilities',
    body,
  };
}

export const articles = {
  /**
   * `GET /security/threatIntelligence/vulnerabilities/{vulnerability-id}/articles`
   *
   * Articles related to this vulnerability.
   */
  list: function list(
    params?: IEndpoints['GET /security/threatIntelligence/vulnerabilities/{vulnerability-id}/articles']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/threatIntelligence/vulnerabilities/{vulnerability-id}/articles']['response']
  > {
    return {
      method: 'get',
      path: '/security/threatIntelligence/vulnerabilities/{vulnerability-id}/articles',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['vulnerability-id'],
      },
      params,
    };
  },
  /**
   * `GET /security/threatIntelligence/vulnerabilities/{vulnerability-id}/articles/{article-id}`
   *
   * Articles related to this vulnerability.
   */
  get: function get(
    params?: IEndpoints['GET /security/threatIntelligence/vulnerabilities/{vulnerability-id}/articles/{article-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/threatIntelligence/vulnerabilities/{vulnerability-id}/articles/{article-id}']['response']
  > {
    return {
      method: 'get',
      path: '/security/threatIntelligence/vulnerabilities/{vulnerability-id}/articles/{article-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['vulnerability-id', 'article-id'],
      },
      params,
    };
  },
};

export const components = {
  /**
   * `GET /security/threatIntelligence/vulnerabilities/{vulnerability-id}/components`
   *
   * Get a list of vulnerabilityComponent objects related to a known vulnerability.
   */
  list: function list(
    params?: IEndpoints['GET /security/threatIntelligence/vulnerabilities/{vulnerability-id}/components']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/threatIntelligence/vulnerabilities/{vulnerability-id}/components']['response']
  > {
    return {
      method: 'get',
      path: '/security/threatIntelligence/vulnerabilities/{vulnerability-id}/components',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['vulnerability-id'],
      },
      params,
    };
  },
  /**
   * `POST /security/threatIntelligence/vulnerabilities/{vulnerability-id}/components`
   *
   */
  create: function create(
    body: IEndpoints['POST /security/threatIntelligence/vulnerabilities/{vulnerability-id}/components']['body'],
    params?: IEndpoints['POST /security/threatIntelligence/vulnerabilities/{vulnerability-id}/components']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /security/threatIntelligence/vulnerabilities/{vulnerability-id}/components']['response']
  > {
    return {
      method: 'post',
      path: '/security/threatIntelligence/vulnerabilities/{vulnerability-id}/components',
      paramDefs: {
        path: ['vulnerability-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /security/threatIntelligence/vulnerabilities/{vulnerability-id}/components/{vulnerabilityComponent-id}`
   *
   * Read the properties and relationships of a vulnerabilityComponent object.
   */
  get: function get(
    params?: IEndpoints['GET /security/threatIntelligence/vulnerabilities/{vulnerability-id}/components/{vulnerabilityComponent-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/threatIntelligence/vulnerabilities/{vulnerability-id}/components/{vulnerabilityComponent-id}']['response']
  > {
    return {
      method: 'get',
      path: '/security/threatIntelligence/vulnerabilities/{vulnerability-id}/components/{vulnerabilityComponent-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['vulnerability-id', 'vulnerabilityComponent-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /security/threatIntelligence/vulnerabilities/{vulnerability-id}/components/{vulnerabilityComponent-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /security/threatIntelligence/vulnerabilities/{vulnerability-id}/components/{vulnerabilityComponent-id}']['body'],
    params?: IEndpoints['PATCH /security/threatIntelligence/vulnerabilities/{vulnerability-id}/components/{vulnerabilityComponent-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /security/threatIntelligence/vulnerabilities/{vulnerability-id}/components/{vulnerabilityComponent-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/security/threatIntelligence/vulnerabilities/{vulnerability-id}/components/{vulnerabilityComponent-id}',
      paramDefs: {
        path: ['vulnerability-id', 'vulnerabilityComponent-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /security/threatIntelligence/vulnerabilities/{vulnerability-id}/components/{vulnerabilityComponent-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /security/threatIntelligence/vulnerabilities/{vulnerability-id}/components/{vulnerabilityComponent-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /security/threatIntelligence/vulnerabilities/{vulnerability-id}/components/{vulnerabilityComponent-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/security/threatIntelligence/vulnerabilities/{vulnerability-id}/components/{vulnerabilityComponent-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['vulnerability-id', 'vulnerabilityComponent-id'],
      },
      params,
    };
  },
};
