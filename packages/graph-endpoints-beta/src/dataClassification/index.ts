export * as exactMatchDataStores from './exactMatchDataStores';
export * as sensitivityLabels from './sensitivityLabels';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /dataClassification': Operation<'/dataClassification', 'get'>;
  'PATCH /dataClassification': Operation<'/dataClassification', 'patch'>;
  'POST /dataClassification/classifyExactMatches': Operation<
    '/dataClassification/classifyExactMatches',
    'post'
  >;
  'POST /dataClassification/classifyFile': Operation<'/dataClassification/classifyFile', 'post'>;
  'GET /dataClassification/classifyFileJobs': Operation<
    '/dataClassification/classifyFileJobs',
    'get'
  >;
  'POST /dataClassification/classifyFileJobs': Operation<
    '/dataClassification/classifyFileJobs',
    'post'
  >;
  'GET /dataClassification/classifyFileJobs/{jobResponseBase-id}': Operation<
    '/dataClassification/classifyFileJobs/{jobResponseBase-id}',
    'get'
  >;
  'PATCH /dataClassification/classifyFileJobs/{jobResponseBase-id}': Operation<
    '/dataClassification/classifyFileJobs/{jobResponseBase-id}',
    'patch'
  >;
  'DELETE /dataClassification/classifyFileJobs/{jobResponseBase-id}': Operation<
    '/dataClassification/classifyFileJobs/{jobResponseBase-id}',
    'delete'
  >;
  'GET /dataClassification/classifyTextJobs': Operation<
    '/dataClassification/classifyTextJobs',
    'get'
  >;
  'POST /dataClassification/classifyTextJobs': Operation<
    '/dataClassification/classifyTextJobs',
    'post'
  >;
  'GET /dataClassification/classifyTextJobs/{jobResponseBase-id}': Operation<
    '/dataClassification/classifyTextJobs/{jobResponseBase-id}',
    'get'
  >;
  'PATCH /dataClassification/classifyTextJobs/{jobResponseBase-id}': Operation<
    '/dataClassification/classifyTextJobs/{jobResponseBase-id}',
    'patch'
  >;
  'DELETE /dataClassification/classifyTextJobs/{jobResponseBase-id}': Operation<
    '/dataClassification/classifyTextJobs/{jobResponseBase-id}',
    'delete'
  >;
  'GET /dataClassification/evaluateDlpPoliciesJobs': Operation<
    '/dataClassification/evaluateDlpPoliciesJobs',
    'get'
  >;
  'POST /dataClassification/evaluateDlpPoliciesJobs': Operation<
    '/dataClassification/evaluateDlpPoliciesJobs',
    'post'
  >;
  'GET /dataClassification/evaluateDlpPoliciesJobs/{jobResponseBase-id}': Operation<
    '/dataClassification/evaluateDlpPoliciesJobs/{jobResponseBase-id}',
    'get'
  >;
  'PATCH /dataClassification/evaluateDlpPoliciesJobs/{jobResponseBase-id}': Operation<
    '/dataClassification/evaluateDlpPoliciesJobs/{jobResponseBase-id}',
    'patch'
  >;
  'DELETE /dataClassification/evaluateDlpPoliciesJobs/{jobResponseBase-id}': Operation<
    '/dataClassification/evaluateDlpPoliciesJobs/{jobResponseBase-id}',
    'delete'
  >;
  'GET /dataClassification/evaluateLabelJobs': Operation<
    '/dataClassification/evaluateLabelJobs',
    'get'
  >;
  'POST /dataClassification/evaluateLabelJobs': Operation<
    '/dataClassification/evaluateLabelJobs',
    'post'
  >;
  'GET /dataClassification/evaluateLabelJobs/{jobResponseBase-id}': Operation<
    '/dataClassification/evaluateLabelJobs/{jobResponseBase-id}',
    'get'
  >;
  'PATCH /dataClassification/evaluateLabelJobs/{jobResponseBase-id}': Operation<
    '/dataClassification/evaluateLabelJobs/{jobResponseBase-id}',
    'patch'
  >;
  'DELETE /dataClassification/evaluateLabelJobs/{jobResponseBase-id}': Operation<
    '/dataClassification/evaluateLabelJobs/{jobResponseBase-id}',
    'delete'
  >;
  'GET /dataClassification/exactMatchUploadAgents': Operation<
    '/dataClassification/exactMatchUploadAgents',
    'get'
  >;
  'POST /dataClassification/exactMatchUploadAgents': Operation<
    '/dataClassification/exactMatchUploadAgents',
    'post'
  >;
  'GET /dataClassification/exactMatchUploadAgents/{exactMatchUploadAgent-id}': Operation<
    '/dataClassification/exactMatchUploadAgents/{exactMatchUploadAgent-id}',
    'get'
  >;
  'PATCH /dataClassification/exactMatchUploadAgents/{exactMatchUploadAgent-id}': Operation<
    '/dataClassification/exactMatchUploadAgents/{exactMatchUploadAgent-id}',
    'patch'
  >;
  'DELETE /dataClassification/exactMatchUploadAgents/{exactMatchUploadAgent-id}': Operation<
    '/dataClassification/exactMatchUploadAgents/{exactMatchUploadAgent-id}',
    'delete'
  >;
  'GET /dataClassification/jobs': Operation<'/dataClassification/jobs', 'get'>;
  'POST /dataClassification/jobs': Operation<'/dataClassification/jobs', 'post'>;
  'GET /dataClassification/jobs/{jobResponseBase-id}': Operation<
    '/dataClassification/jobs/{jobResponseBase-id}',
    'get'
  >;
  'PATCH /dataClassification/jobs/{jobResponseBase-id}': Operation<
    '/dataClassification/jobs/{jobResponseBase-id}',
    'patch'
  >;
  'DELETE /dataClassification/jobs/{jobResponseBase-id}': Operation<
    '/dataClassification/jobs/{jobResponseBase-id}',
    'delete'
  >;
  'GET /dataClassification/sensitiveTypes': Operation<'/dataClassification/sensitiveTypes', 'get'>;
  'POST /dataClassification/sensitiveTypes': Operation<
    '/dataClassification/sensitiveTypes',
    'post'
  >;
  'GET /dataClassification/sensitiveTypes/{sensitiveType-id}': Operation<
    '/dataClassification/sensitiveTypes/{sensitiveType-id}',
    'get'
  >;
  'PATCH /dataClassification/sensitiveTypes/{sensitiveType-id}': Operation<
    '/dataClassification/sensitiveTypes/{sensitiveType-id}',
    'patch'
  >;
  'DELETE /dataClassification/sensitiveTypes/{sensitiveType-id}': Operation<
    '/dataClassification/sensitiveTypes/{sensitiveType-id}',
    'delete'
  >;
}

/**
 * `GET /dataClassification`
 *
 */
export function get(
  params?: IEndpoints['GET /dataClassification']['parameters']
): EndpointRequest<IEndpoints['GET /dataClassification']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/dataClassification',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /dataClassification`
 *
 */
export function update(
  body: IEndpoints['PATCH /dataClassification']['body']
): EndpointRequest<IEndpoints['PATCH /dataClassification']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/dataClassification',
    body,
  };
}

export const classifyExactMatches = {
  /**
   * `POST /dataClassification/classifyExactMatches`
   *
   */
  create: function create(
    body: IEndpoints['POST /dataClassification/classifyExactMatches']['body']
  ): EndpointRequest<IEndpoints['POST /dataClassification/classifyExactMatches']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/dataClassification/classifyExactMatches',
      body,
    };
  },
};

export const classifyFile = {
  /**
   * `POST /dataClassification/classifyFile`
   *
   */
  create: function create(
    body: IEndpoints['POST /dataClassification/classifyFile']['body']
  ): EndpointRequest<IEndpoints['POST /dataClassification/classifyFile']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/dataClassification/classifyFile',
      body,
    };
  },
};

export const classifyFileJobs = {
  /**
   * `GET /dataClassification/classifyFileJobs`
   *
   */
  list: function list(
    params?: IEndpoints['GET /dataClassification/classifyFileJobs']['parameters']
  ): EndpointRequest<IEndpoints['GET /dataClassification/classifyFileJobs']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/dataClassification/classifyFileJobs',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /dataClassification/classifyFileJobs`
   *
   */
  create: function create(
    body: IEndpoints['POST /dataClassification/classifyFileJobs']['body']
  ): EndpointRequest<IEndpoints['POST /dataClassification/classifyFileJobs']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/dataClassification/classifyFileJobs',
      body,
    };
  },
  /**
   * `GET /dataClassification/classifyFileJobs/{jobResponseBase-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /dataClassification/classifyFileJobs/{jobResponseBase-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /dataClassification/classifyFileJobs/{jobResponseBase-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/dataClassification/classifyFileJobs/{jobResponseBase-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['jobResponseBase-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /dataClassification/classifyFileJobs/{jobResponseBase-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /dataClassification/classifyFileJobs/{jobResponseBase-id}']['body'],
    params?: IEndpoints['PATCH /dataClassification/classifyFileJobs/{jobResponseBase-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /dataClassification/classifyFileJobs/{jobResponseBase-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/dataClassification/classifyFileJobs/{jobResponseBase-id}',
      paramDefs: {
        path: ['jobResponseBase-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /dataClassification/classifyFileJobs/{jobResponseBase-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /dataClassification/classifyFileJobs/{jobResponseBase-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /dataClassification/classifyFileJobs/{jobResponseBase-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/dataClassification/classifyFileJobs/{jobResponseBase-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['jobResponseBase-id'],
      },
      params,
    };
  },
};

export const classifyTextJobs = {
  /**
   * `GET /dataClassification/classifyTextJobs`
   *
   */
  list: function list(
    params?: IEndpoints['GET /dataClassification/classifyTextJobs']['parameters']
  ): EndpointRequest<IEndpoints['GET /dataClassification/classifyTextJobs']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/dataClassification/classifyTextJobs',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /dataClassification/classifyTextJobs`
   *
   */
  create: function create(
    body: IEndpoints['POST /dataClassification/classifyTextJobs']['body']
  ): EndpointRequest<IEndpoints['POST /dataClassification/classifyTextJobs']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/dataClassification/classifyTextJobs',
      body,
    };
  },
  /**
   * `GET /dataClassification/classifyTextJobs/{jobResponseBase-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /dataClassification/classifyTextJobs/{jobResponseBase-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /dataClassification/classifyTextJobs/{jobResponseBase-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/dataClassification/classifyTextJobs/{jobResponseBase-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['jobResponseBase-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /dataClassification/classifyTextJobs/{jobResponseBase-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /dataClassification/classifyTextJobs/{jobResponseBase-id}']['body'],
    params?: IEndpoints['PATCH /dataClassification/classifyTextJobs/{jobResponseBase-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /dataClassification/classifyTextJobs/{jobResponseBase-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/dataClassification/classifyTextJobs/{jobResponseBase-id}',
      paramDefs: {
        path: ['jobResponseBase-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /dataClassification/classifyTextJobs/{jobResponseBase-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /dataClassification/classifyTextJobs/{jobResponseBase-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /dataClassification/classifyTextJobs/{jobResponseBase-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/dataClassification/classifyTextJobs/{jobResponseBase-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['jobResponseBase-id'],
      },
      params,
    };
  },
};

export const evaluateDlpPoliciesJobs = {
  /**
   * `GET /dataClassification/evaluateDlpPoliciesJobs`
   *
   */
  list: function list(
    params?: IEndpoints['GET /dataClassification/evaluateDlpPoliciesJobs']['parameters']
  ): EndpointRequest<IEndpoints['GET /dataClassification/evaluateDlpPoliciesJobs']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/dataClassification/evaluateDlpPoliciesJobs',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /dataClassification/evaluateDlpPoliciesJobs`
   *
   */
  create: function create(
    body: IEndpoints['POST /dataClassification/evaluateDlpPoliciesJobs']['body']
  ): EndpointRequest<IEndpoints['POST /dataClassification/evaluateDlpPoliciesJobs']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/dataClassification/evaluateDlpPoliciesJobs',
      body,
    };
  },
  /**
   * `GET /dataClassification/evaluateDlpPoliciesJobs/{jobResponseBase-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /dataClassification/evaluateDlpPoliciesJobs/{jobResponseBase-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /dataClassification/evaluateDlpPoliciesJobs/{jobResponseBase-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/dataClassification/evaluateDlpPoliciesJobs/{jobResponseBase-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['jobResponseBase-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /dataClassification/evaluateDlpPoliciesJobs/{jobResponseBase-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /dataClassification/evaluateDlpPoliciesJobs/{jobResponseBase-id}']['body'],
    params?: IEndpoints['PATCH /dataClassification/evaluateDlpPoliciesJobs/{jobResponseBase-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /dataClassification/evaluateDlpPoliciesJobs/{jobResponseBase-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/dataClassification/evaluateDlpPoliciesJobs/{jobResponseBase-id}',
      paramDefs: {
        path: ['jobResponseBase-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /dataClassification/evaluateDlpPoliciesJobs/{jobResponseBase-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /dataClassification/evaluateDlpPoliciesJobs/{jobResponseBase-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /dataClassification/evaluateDlpPoliciesJobs/{jobResponseBase-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/dataClassification/evaluateDlpPoliciesJobs/{jobResponseBase-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['jobResponseBase-id'],
      },
      params,
    };
  },
};

export const evaluateLabelJobs = {
  /**
   * `GET /dataClassification/evaluateLabelJobs`
   *
   */
  list: function list(
    params?: IEndpoints['GET /dataClassification/evaluateLabelJobs']['parameters']
  ): EndpointRequest<IEndpoints['GET /dataClassification/evaluateLabelJobs']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/dataClassification/evaluateLabelJobs',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /dataClassification/evaluateLabelJobs`
   *
   */
  create: function create(
    body: IEndpoints['POST /dataClassification/evaluateLabelJobs']['body']
  ): EndpointRequest<IEndpoints['POST /dataClassification/evaluateLabelJobs']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/dataClassification/evaluateLabelJobs',
      body,
    };
  },
  /**
   * `GET /dataClassification/evaluateLabelJobs/{jobResponseBase-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /dataClassification/evaluateLabelJobs/{jobResponseBase-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /dataClassification/evaluateLabelJobs/{jobResponseBase-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/dataClassification/evaluateLabelJobs/{jobResponseBase-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['jobResponseBase-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /dataClassification/evaluateLabelJobs/{jobResponseBase-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /dataClassification/evaluateLabelJobs/{jobResponseBase-id}']['body'],
    params?: IEndpoints['PATCH /dataClassification/evaluateLabelJobs/{jobResponseBase-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /dataClassification/evaluateLabelJobs/{jobResponseBase-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/dataClassification/evaluateLabelJobs/{jobResponseBase-id}',
      paramDefs: {
        path: ['jobResponseBase-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /dataClassification/evaluateLabelJobs/{jobResponseBase-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /dataClassification/evaluateLabelJobs/{jobResponseBase-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /dataClassification/evaluateLabelJobs/{jobResponseBase-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/dataClassification/evaluateLabelJobs/{jobResponseBase-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['jobResponseBase-id'],
      },
      params,
    };
  },
};

export const exactMatchUploadAgents = {
  /**
   * `GET /dataClassification/exactMatchUploadAgents`
   *
   */
  list: function list(
    params?: IEndpoints['GET /dataClassification/exactMatchUploadAgents']['parameters']
  ): EndpointRequest<IEndpoints['GET /dataClassification/exactMatchUploadAgents']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/dataClassification/exactMatchUploadAgents',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /dataClassification/exactMatchUploadAgents`
   *
   */
  create: function create(
    body: IEndpoints['POST /dataClassification/exactMatchUploadAgents']['body']
  ): EndpointRequest<IEndpoints['POST /dataClassification/exactMatchUploadAgents']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/dataClassification/exactMatchUploadAgents',
      body,
    };
  },
  /**
   * `GET /dataClassification/exactMatchUploadAgents/{exactMatchUploadAgent-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /dataClassification/exactMatchUploadAgents/{exactMatchUploadAgent-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /dataClassification/exactMatchUploadAgents/{exactMatchUploadAgent-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/dataClassification/exactMatchUploadAgents/{exactMatchUploadAgent-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['exactMatchUploadAgent-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /dataClassification/exactMatchUploadAgents/{exactMatchUploadAgent-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /dataClassification/exactMatchUploadAgents/{exactMatchUploadAgent-id}']['body'],
    params?: IEndpoints['PATCH /dataClassification/exactMatchUploadAgents/{exactMatchUploadAgent-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /dataClassification/exactMatchUploadAgents/{exactMatchUploadAgent-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/dataClassification/exactMatchUploadAgents/{exactMatchUploadAgent-id}',
      paramDefs: {
        path: ['exactMatchUploadAgent-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /dataClassification/exactMatchUploadAgents/{exactMatchUploadAgent-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /dataClassification/exactMatchUploadAgents/{exactMatchUploadAgent-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /dataClassification/exactMatchUploadAgents/{exactMatchUploadAgent-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/dataClassification/exactMatchUploadAgents/{exactMatchUploadAgent-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['exactMatchUploadAgent-id'],
      },
      params,
    };
  },
};

export const jobs = {
  /**
   * `GET /dataClassification/jobs`
   *
   */
  list: function list(
    params?: IEndpoints['GET /dataClassification/jobs']['parameters']
  ): EndpointRequest<IEndpoints['GET /dataClassification/jobs']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/dataClassification/jobs',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /dataClassification/jobs`
   *
   */
  create: function create(
    body: IEndpoints['POST /dataClassification/jobs']['body']
  ): EndpointRequest<IEndpoints['POST /dataClassification/jobs']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/dataClassification/jobs',
      body,
    };
  },
  /**
   * `GET /dataClassification/jobs/{jobResponseBase-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /dataClassification/jobs/{jobResponseBase-id}']['parameters']
  ): EndpointRequest<IEndpoints['GET /dataClassification/jobs/{jobResponseBase-id}']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/dataClassification/jobs/{jobResponseBase-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['jobResponseBase-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /dataClassification/jobs/{jobResponseBase-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /dataClassification/jobs/{jobResponseBase-id}']['body'],
    params?: IEndpoints['PATCH /dataClassification/jobs/{jobResponseBase-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /dataClassification/jobs/{jobResponseBase-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/dataClassification/jobs/{jobResponseBase-id}',
      paramDefs: {
        path: ['jobResponseBase-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /dataClassification/jobs/{jobResponseBase-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /dataClassification/jobs/{jobResponseBase-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /dataClassification/jobs/{jobResponseBase-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/dataClassification/jobs/{jobResponseBase-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['jobResponseBase-id'],
      },
      params,
    };
  },
};

export const sensitiveTypes = {
  /**
   * `GET /dataClassification/sensitiveTypes`
   *
   */
  list: function list(
    params?: IEndpoints['GET /dataClassification/sensitiveTypes']['parameters']
  ): EndpointRequest<IEndpoints['GET /dataClassification/sensitiveTypes']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/dataClassification/sensitiveTypes',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /dataClassification/sensitiveTypes`
   *
   */
  create: function create(
    body: IEndpoints['POST /dataClassification/sensitiveTypes']['body']
  ): EndpointRequest<IEndpoints['POST /dataClassification/sensitiveTypes']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/dataClassification/sensitiveTypes',
      body,
    };
  },
  /**
   * `GET /dataClassification/sensitiveTypes/{sensitiveType-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /dataClassification/sensitiveTypes/{sensitiveType-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /dataClassification/sensitiveTypes/{sensitiveType-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/dataClassification/sensitiveTypes/{sensitiveType-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['sensitiveType-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /dataClassification/sensitiveTypes/{sensitiveType-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /dataClassification/sensitiveTypes/{sensitiveType-id}']['body'],
    params?: IEndpoints['PATCH /dataClassification/sensitiveTypes/{sensitiveType-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /dataClassification/sensitiveTypes/{sensitiveType-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/dataClassification/sensitiveTypes/{sensitiveType-id}',
      paramDefs: {
        path: ['sensitiveType-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /dataClassification/sensitiveTypes/{sensitiveType-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /dataClassification/sensitiveTypes/{sensitiveType-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /dataClassification/sensitiveTypes/{sensitiveType-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/dataClassification/sensitiveTypes/{sensitiveType-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['sensitiveType-id'],
      },
      params,
    };
  },
};
