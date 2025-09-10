import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}',
    'delete'
  >;
  'GET /groups/{group-id}/sites/{site-id}/informationProtection/threatAssessmentRequests': Operation<
    '/groups/{group-id}/sites/{site-id}/informationProtection/threatAssessmentRequests',
    'get'
  >;
  'GET /groups/{group-id}/sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}',
    'patch'
  >;
  'POST /groups/{group-id}/sites/{site-id}/informationProtection/threatAssessmentRequests': Operation<
    '/groups/{group-id}/sites/{site-id}/informationProtection/threatAssessmentRequests',
    'post'
  >;
  'GET /groups/{group-id}/sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results': Operation<
    '/groups/{group-id}/sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results',
    'get'
  >;
  'POST /groups/{group-id}/sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results': Operation<
    '/groups/{group-id}/sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results',
    'post'
  >;
  'GET /groups/{group-id}/sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}',
    'patch'
  >;
  'DELETE /groups/{group-id}/sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}',
    'delete'
  >;
}

/**
 * `DELETE /groups/{group-id}/sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/groups/{group-id}/sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['group-id', 'site-id', 'threatAssessmentRequest-id'],
    },
    params,
  };
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/informationProtection/threatAssessmentRequests`
 *
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/informationProtection/threatAssessmentRequests']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/sites/{site-id}/informationProtection/threatAssessmentRequests']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/informationProtection/threatAssessmentRequests',
    paramDefs: {
      path: ['group-id', 'site-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}',
    paramDefs: {
      path: ['group-id', 'site-id', 'threatAssessmentRequest-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /groups/{group-id}/sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/groups/{group-id}/sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}',
    paramDefs: {
      path: ['group-id', 'site-id', 'threatAssessmentRequest-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /groups/{group-id}/sites/{site-id}/informationProtection/threatAssessmentRequests`
 *
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/sites/{site-id}/informationProtection/threatAssessmentRequests']['body'],
  params?: IEndpoints['POST /groups/{group-id}/sites/{site-id}/informationProtection/threatAssessmentRequests']['parameters']
): EndpointRequest<
  IEndpoints['POST /groups/{group-id}/sites/{site-id}/informationProtection/threatAssessmentRequests']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/groups/{group-id}/sites/{site-id}/informationProtection/threatAssessmentRequests',
    paramDefs: {
      path: ['group-id', 'site-id'],
    },
    params,
    body,
  };
}

export const results = {
  /**
   * `GET /groups/{group-id}/sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results`
   *
   * A collection of threat assessment results. Read-only. By default, a GET /threatAssessmentRequests/{id} does not return this property unless you apply $expand on it.
   */
  list: function list(
    params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /groups/{group-id}/sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/groups/{group-id}/sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['group-id', 'site-id', 'threatAssessmentRequest-id'],
      },
      params,
    };
  },
  /**
   * `POST /groups/{group-id}/sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results`
   *
   */
  create: function create(
    body: IEndpoints['POST /groups/{group-id}/sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results']['body'],
    params?: IEndpoints['POST /groups/{group-id}/sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /groups/{group-id}/sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/groups/{group-id}/sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results',
      paramDefs: {
        path: ['group-id', 'site-id', 'threatAssessmentRequest-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /groups/{group-id}/sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}`
   *
   * A collection of threat assessment results. Read-only. By default, a GET /threatAssessmentRequests/{id} does not return this property unless you apply $expand on it.
   */
  get: function get(
    params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /groups/{group-id}/sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/groups/{group-id}/sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['group-id', 'site-id', 'threatAssessmentRequest-id', 'threatAssessmentResult-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /groups/{group-id}/sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}']['body'],
    params?: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/groups/{group-id}/sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}',
      paramDefs: {
        path: ['group-id', 'site-id', 'threatAssessmentRequest-id', 'threatAssessmentResult-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /groups/{group-id}/sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/groups/{group-id}/sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['group-id', 'site-id', 'threatAssessmentRequest-id', 'threatAssessmentResult-id'],
      },
      params,
    };
  },
};
