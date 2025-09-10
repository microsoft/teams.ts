import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}': Operation<
    '/sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}',
    'delete'
  >;
  'GET /sites/{site-id}/informationProtection/threatAssessmentRequests': Operation<
    '/sites/{site-id}/informationProtection/threatAssessmentRequests',
    'get'
  >;
  'GET /sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}': Operation<
    '/sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}',
    'get'
  >;
  'PATCH /sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}': Operation<
    '/sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}',
    'patch'
  >;
  'POST /sites/{site-id}/informationProtection/threatAssessmentRequests': Operation<
    '/sites/{site-id}/informationProtection/threatAssessmentRequests',
    'post'
  >;
  'GET /sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results': Operation<
    '/sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results',
    'get'
  >;
  'POST /sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results': Operation<
    '/sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results',
    'post'
  >;
  'GET /sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}': Operation<
    '/sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}',
    'get'
  >;
  'PATCH /sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}': Operation<
    '/sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}',
    'patch'
  >;
  'DELETE /sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}': Operation<
    '/sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}',
    'delete'
  >;
}

/**
 * `DELETE /sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['site-id', 'threatAssessmentRequest-id'],
    },
    params,
  };
}

/**
 * `GET /sites/{site-id}/informationProtection/threatAssessmentRequests`
 *
 */
export function list(
  params?: IEndpoints['GET /sites/{site-id}/informationProtection/threatAssessmentRequests']['parameters']
): EndpointRequest<
  IEndpoints['GET /sites/{site-id}/informationProtection/threatAssessmentRequests']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/sites/{site-id}/informationProtection/threatAssessmentRequests',
    paramDefs: {
      path: ['site-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}',
    paramDefs: {
      path: ['site-id', 'threatAssessmentRequest-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}']['body'],
  params?: IEndpoints['PATCH /sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}',
    paramDefs: {
      path: ['site-id', 'threatAssessmentRequest-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /sites/{site-id}/informationProtection/threatAssessmentRequests`
 *
 */
export function create(
  body: IEndpoints['POST /sites/{site-id}/informationProtection/threatAssessmentRequests']['body'],
  params?: IEndpoints['POST /sites/{site-id}/informationProtection/threatAssessmentRequests']['parameters']
): EndpointRequest<
  IEndpoints['POST /sites/{site-id}/informationProtection/threatAssessmentRequests']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/sites/{site-id}/informationProtection/threatAssessmentRequests',
    paramDefs: {
      path: ['site-id'],
    },
    params,
    body,
  };
}

export const results = {
  /**
   * `GET /sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results`
   *
   * A collection of threat assessment results. Read-only. By default, a GET /threatAssessmentRequests/{id} does not return this property unless you apply $expand on it.
   */
  list: function list(
    params?: IEndpoints['GET /sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['site-id', 'threatAssessmentRequest-id'],
      },
      params,
    };
  },
  /**
   * `POST /sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results`
   *
   */
  create: function create(
    body: IEndpoints['POST /sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results']['body'],
    params?: IEndpoints['POST /sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results',
      paramDefs: {
        path: ['site-id', 'threatAssessmentRequest-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}`
   *
   * A collection of threat assessment results. Read-only. By default, a GET /threatAssessmentRequests/{id} does not return this property unless you apply $expand on it.
   */
  get: function get(
    params?: IEndpoints['GET /sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['site-id', 'threatAssessmentRequest-id', 'threatAssessmentResult-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}']['body'],
    params?: IEndpoints['PATCH /sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}',
      paramDefs: {
        path: ['site-id', 'threatAssessmentRequest-id', 'threatAssessmentResult-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['site-id', 'threatAssessmentRequest-id', 'threatAssessmentResult-id'],
      },
      params,
    };
  },
};
