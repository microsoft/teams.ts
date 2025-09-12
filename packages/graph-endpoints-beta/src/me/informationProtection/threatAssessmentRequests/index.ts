import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}': Operation<
    '/me/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}',
    'delete'
  >;
  'GET /me/informationProtection/threatAssessmentRequests': Operation<
    '/me/informationProtection/threatAssessmentRequests',
    'get'
  >;
  'GET /me/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}': Operation<
    '/me/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}',
    'get'
  >;
  'PATCH /me/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}': Operation<
    '/me/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}',
    'patch'
  >;
  'POST /me/informationProtection/threatAssessmentRequests': Operation<
    '/me/informationProtection/threatAssessmentRequests',
    'post'
  >;
  'GET /me/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results': Operation<
    '/me/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results',
    'get'
  >;
  'POST /me/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results': Operation<
    '/me/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results',
    'post'
  >;
  'GET /me/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}': Operation<
    '/me/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}',
    'get'
  >;
  'PATCH /me/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}': Operation<
    '/me/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}',
    'patch'
  >;
  'DELETE /me/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}': Operation<
    '/me/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}',
    'delete'
  >;
}

/**
 * `DELETE /me/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['threatAssessmentRequest-id'],
    },
    params,
  };
}

/**
 * `GET /me/informationProtection/threatAssessmentRequests`
 *
 */
export function list(
  params?: IEndpoints['GET /me/informationProtection/threatAssessmentRequests']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/informationProtection/threatAssessmentRequests']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/informationProtection/threatAssessmentRequests',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /me/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /me/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}',
    paramDefs: {
      path: ['threatAssessmentRequest-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /me/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}']['body'],
  params?: IEndpoints['PATCH /me/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}',
    paramDefs: {
      path: ['threatAssessmentRequest-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /me/informationProtection/threatAssessmentRequests`
 *
 */
export function create(
  body: IEndpoints['POST /me/informationProtection/threatAssessmentRequests']['body']
): EndpointRequest<
  IEndpoints['POST /me/informationProtection/threatAssessmentRequests']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/informationProtection/threatAssessmentRequests',
    body,
  };
}

export const results = {
  /**
   * `GET /me/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results`
   *
   * A collection of threat assessment results. Read-only. By default, a GET /threatAssessmentRequests/{id} does not return this property unless you apply $expand on it.
   */
  list: function list(
    params?: IEndpoints['GET /me/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['threatAssessmentRequest-id'],
      },
      params,
    };
  },
  /**
   * `POST /me/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results`
   *
   */
  create: function create(
    body: IEndpoints['POST /me/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results']['body'],
    params?: IEndpoints['POST /me/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results',
      paramDefs: {
        path: ['threatAssessmentRequest-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /me/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}`
   *
   * A collection of threat assessment results. Read-only. By default, a GET /threatAssessmentRequests/{id} does not return this property unless you apply $expand on it.
   */
  get: function get(
    params?: IEndpoints['GET /me/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['threatAssessmentRequest-id', 'threatAssessmentResult-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /me/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /me/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}']['body'],
    params?: IEndpoints['PATCH /me/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /me/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/me/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}',
      paramDefs: {
        path: ['threatAssessmentRequest-id', 'threatAssessmentResult-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /me/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /me/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /me/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/me/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['threatAssessmentRequest-id', 'threatAssessmentResult-id'],
      },
      params,
    };
  },
};
