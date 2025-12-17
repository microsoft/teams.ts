export * as sensors from './sensors';
export * as settings from './settings';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/identities': Operation<'/security/identities', 'delete'>;
  'GET /security/identities': Operation<'/security/identities', 'get'>;
  'PATCH /security/identities': Operation<'/security/identities', 'patch'>;
  'GET /security/identities/healthIssues': Operation<'/security/identities/healthIssues', 'get'>;
  'POST /security/identities/healthIssues': Operation<'/security/identities/healthIssues', 'post'>;
  'GET /security/identities/healthIssues/{healthIssue-id}': Operation<
    '/security/identities/healthIssues/{healthIssue-id}',
    'get'
  >;
  'PATCH /security/identities/healthIssues/{healthIssue-id}': Operation<
    '/security/identities/healthIssues/{healthIssue-id}',
    'patch'
  >;
  'DELETE /security/identities/healthIssues/{healthIssue-id}': Operation<
    '/security/identities/healthIssues/{healthIssue-id}',
    'delete'
  >;
  'GET /security/identities/identityAccounts': Operation<
    '/security/identities/identityAccounts',
    'get'
  >;
  'POST /security/identities/identityAccounts': Operation<
    '/security/identities/identityAccounts',
    'post'
  >;
  'GET /security/identities/identityAccounts/{identityAccounts-id}': Operation<
    '/security/identities/identityAccounts/{identityAccounts-id}',
    'get'
  >;
  'PATCH /security/identities/identityAccounts/{identityAccounts-id}': Operation<
    '/security/identities/identityAccounts/{identityAccounts-id}',
    'patch'
  >;
  'DELETE /security/identities/identityAccounts/{identityAccounts-id}': Operation<
    '/security/identities/identityAccounts/{identityAccounts-id}',
    'delete'
  >;
  'GET /security/identities/sensorCandidateActivationConfiguration': Operation<
    '/security/identities/sensorCandidateActivationConfiguration',
    'get'
  >;
  'PATCH /security/identities/sensorCandidateActivationConfiguration': Operation<
    '/security/identities/sensorCandidateActivationConfiguration',
    'patch'
  >;
  'DELETE /security/identities/sensorCandidateActivationConfiguration': Operation<
    '/security/identities/sensorCandidateActivationConfiguration',
    'delete'
  >;
  'GET /security/identities/sensorCandidates': Operation<
    '/security/identities/sensorCandidates',
    'get'
  >;
  'POST /security/identities/sensorCandidates': Operation<
    '/security/identities/sensorCandidates',
    'post'
  >;
  'GET /security/identities/sensorCandidates/{sensorCandidate-id}': Operation<
    '/security/identities/sensorCandidates/{sensorCandidate-id}',
    'get'
  >;
  'PATCH /security/identities/sensorCandidates/{sensorCandidate-id}': Operation<
    '/security/identities/sensorCandidates/{sensorCandidate-id}',
    'patch'
  >;
  'DELETE /security/identities/sensorCandidates/{sensorCandidate-id}': Operation<
    '/security/identities/sensorCandidates/{sensorCandidate-id}',
    'delete'
  >;
}

/**
 * `DELETE /security/identities`
 *
 */
export function del(
  params?: IEndpoints['DELETE /security/identities']['parameters']
): EndpointRequest<IEndpoints['DELETE /security/identities']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/security/identities',
    paramDefs: {
      header: ['If-Match'],
    },
    params,
  };
}

/**
 * `GET /security/identities`
 *
 * A container for security identities APIs.
 */
export function list(
  params?: IEndpoints['GET /security/identities']['parameters']
): EndpointRequest<IEndpoints['GET /security/identities']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/identities',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /security/identities`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/identities']['body']
): EndpointRequest<IEndpoints['PATCH /security/identities']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/security/identities',
    body,
  };
}

export const healthIssues = {
  /**
   * `GET /security/identities/healthIssues`
   *
   * Get a list of health issue objects and their properties.
   */
  list: function list(
    params?: IEndpoints['GET /security/identities/healthIssues']['parameters']
  ): EndpointRequest<IEndpoints['GET /security/identities/healthIssues']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/security/identities/healthIssues',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /security/identities/healthIssues`
   *
   */
  create: function create(
    body: IEndpoints['POST /security/identities/healthIssues']['body']
  ): EndpointRequest<IEndpoints['POST /security/identities/healthIssues']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/security/identities/healthIssues',
      body,
    };
  },
  /**
   * `GET /security/identities/healthIssues/{healthIssue-id}`
   *
   * Read the properties and relationships of a healthIssue object.
   */
  get: function get(
    params?: IEndpoints['GET /security/identities/healthIssues/{healthIssue-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/identities/healthIssues/{healthIssue-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/security/identities/healthIssues/{healthIssue-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['healthIssue-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /security/identities/healthIssues/{healthIssue-id}`
   *
   * Update the properties of a healthIssue object.
   */
  update: function update(
    body: IEndpoints['PATCH /security/identities/healthIssues/{healthIssue-id}']['body'],
    params?: IEndpoints['PATCH /security/identities/healthIssues/{healthIssue-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /security/identities/healthIssues/{healthIssue-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/security/identities/healthIssues/{healthIssue-id}',
      paramDefs: {
        path: ['healthIssue-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /security/identities/healthIssues/{healthIssue-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /security/identities/healthIssues/{healthIssue-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /security/identities/healthIssues/{healthIssue-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/security/identities/healthIssues/{healthIssue-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['healthIssue-id'],
      },
      params,
    };
  },
};

export const identityAccounts = {
  /**
   * `GET /security/identities/identityAccounts`
   *
   * Get a list of the identityAccounts objects and their properties.
   */
  list: function list(
    params?: IEndpoints['GET /security/identities/identityAccounts']['parameters']
  ): EndpointRequest<IEndpoints['GET /security/identities/identityAccounts']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/security/identities/identityAccounts',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /security/identities/identityAccounts`
   *
   */
  create: function create(
    body: IEndpoints['POST /security/identities/identityAccounts']['body']
  ): EndpointRequest<IEndpoints['POST /security/identities/identityAccounts']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/security/identities/identityAccounts',
      body,
    };
  },
  /**
   * `GET /security/identities/identityAccounts/{identityAccounts-id}`
   *
   * Read the properties and relationships of a single identity security account object. This allows retrieving information about available identity accounts.
   */
  get: function get(
    params?: IEndpoints['GET /security/identities/identityAccounts/{identityAccounts-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/identities/identityAccounts/{identityAccounts-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/security/identities/identityAccounts/{identityAccounts-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['identityAccounts-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /security/identities/identityAccounts/{identityAccounts-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /security/identities/identityAccounts/{identityAccounts-id}']['body'],
    params?: IEndpoints['PATCH /security/identities/identityAccounts/{identityAccounts-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /security/identities/identityAccounts/{identityAccounts-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/security/identities/identityAccounts/{identityAccounts-id}',
      paramDefs: {
        path: ['identityAccounts-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /security/identities/identityAccounts/{identityAccounts-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /security/identities/identityAccounts/{identityAccounts-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /security/identities/identityAccounts/{identityAccounts-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/security/identities/identityAccounts/{identityAccounts-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['identityAccounts-id'],
      },
      params,
    };
  },
};

export const sensorCandidateActivationConfiguration = {
  /**
   * `GET /security/identities/sensorCandidateActivationConfiguration`
   *
   * Read the properties and relationships of microsoft.graph.security.sensorCandidateActivationConfiguration object.
   */
  get: function get(
    params?: IEndpoints['GET /security/identities/sensorCandidateActivationConfiguration']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/identities/sensorCandidateActivationConfiguration']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/security/identities/sensorCandidateActivationConfiguration',
      paramDefs: {
        query: ['$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `PATCH /security/identities/sensorCandidateActivationConfiguration`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /security/identities/sensorCandidateActivationConfiguration']['body']
  ): EndpointRequest<
    IEndpoints['PATCH /security/identities/sensorCandidateActivationConfiguration']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/security/identities/sensorCandidateActivationConfiguration',
      body,
    };
  },
  /**
   * `DELETE /security/identities/sensorCandidateActivationConfiguration`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /security/identities/sensorCandidateActivationConfiguration']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /security/identities/sensorCandidateActivationConfiguration']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/security/identities/sensorCandidateActivationConfiguration',
      paramDefs: {
        header: ['If-Match'],
      },
      params,
    };
  },
};

export const sensorCandidates = {
  /**
   * `GET /security/identities/sensorCandidates`
   *
   * Get a list of the sensorCandidate objects and their properties.
   */
  list: function list(
    params?: IEndpoints['GET /security/identities/sensorCandidates']['parameters']
  ): EndpointRequest<IEndpoints['GET /security/identities/sensorCandidates']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/security/identities/sensorCandidates',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /security/identities/sensorCandidates`
   *
   */
  create: function create(
    body: IEndpoints['POST /security/identities/sensorCandidates']['body']
  ): EndpointRequest<IEndpoints['POST /security/identities/sensorCandidates']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/security/identities/sensorCandidates',
      body,
    };
  },
  /**
   * `GET /security/identities/sensorCandidates/{sensorCandidate-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /security/identities/sensorCandidates/{sensorCandidate-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/identities/sensorCandidates/{sensorCandidate-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/security/identities/sensorCandidates/{sensorCandidate-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['sensorCandidate-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /security/identities/sensorCandidates/{sensorCandidate-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /security/identities/sensorCandidates/{sensorCandidate-id}']['body'],
    params?: IEndpoints['PATCH /security/identities/sensorCandidates/{sensorCandidate-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /security/identities/sensorCandidates/{sensorCandidate-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/security/identities/sensorCandidates/{sensorCandidate-id}',
      paramDefs: {
        path: ['sensorCandidate-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /security/identities/sensorCandidates/{sensorCandidate-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /security/identities/sensorCandidates/{sensorCandidate-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /security/identities/sensorCandidates/{sensorCandidate-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/security/identities/sensorCandidates/{sensorCandidate-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['sensorCandidate-id'],
      },
      params,
    };
  },
};
