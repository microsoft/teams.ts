import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}': Operation<
    '/users/{user-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}',
    'delete'
  >;
  'GET /users/{user-id}/informationProtection/threatAssessmentRequests': Operation<
    '/users/{user-id}/informationProtection/threatAssessmentRequests',
    'get'
  >;
  'GET /users/{user-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}': Operation<
    '/users/{user-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}',
    'get'
  >;
  'PATCH /users/{user-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}': Operation<
    '/users/{user-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}',
    'patch'
  >;
  'POST /users/{user-id}/informationProtection/threatAssessmentRequests': Operation<
    '/users/{user-id}/informationProtection/threatAssessmentRequests',
    'post'
  >;
  'GET /users/{user-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results': Operation<
    '/users/{user-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results',
    'get'
  >;
  'POST /users/{user-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results': Operation<
    '/users/{user-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results',
    'post'
  >;
  'GET /users/{user-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}': Operation<
    '/users/{user-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}',
    'get'
  >;
  'PATCH /users/{user-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}': Operation<
    '/users/{user-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}',
    'patch'
  >;
  'DELETE /users/{user-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}': Operation<
    '/users/{user-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}',
    'delete'
  >;
}

/**
 * `DELETE /users/{user-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['user-id', 'threatAssessmentRequest-id'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/informationProtection/threatAssessmentRequests`
 *
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/informationProtection/threatAssessmentRequests']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/informationProtection/threatAssessmentRequests']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/informationProtection/threatAssessmentRequests',
    paramDefs: {
      path: ['user-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}',
    paramDefs: {
      path: ['user-id', 'threatAssessmentRequest-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /users/{user-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}',
    paramDefs: {
      path: ['user-id', 'threatAssessmentRequest-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/informationProtection/threatAssessmentRequests`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/informationProtection/threatAssessmentRequests']['body'],
  params?: IEndpoints['POST /users/{user-id}/informationProtection/threatAssessmentRequests']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/informationProtection/threatAssessmentRequests']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/informationProtection/threatAssessmentRequests',
    paramDefs: {
      path: ['user-id'],
    },
    params,
    body,
  };
}

export const results = {
  /**
   * `GET /users/{user-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results`
   *
   * A collection of threat assessment results. Read-only. By default, a GET /threatAssessmentRequests/{id} does not return this property unless you apply $expand on it.
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id', 'threatAssessmentRequest-id'],
      },
      params,
    };
  },
  /**
   * `POST /users/{user-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results`
   *
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results']['body'],
    params?: IEndpoints['POST /users/{user-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results',
      paramDefs: {
        path: ['user-id', 'threatAssessmentRequest-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /users/{user-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}`
   *
   * A collection of threat assessment results. Read-only. By default, a GET /threatAssessmentRequests/{id} does not return this property unless you apply $expand on it.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'threatAssessmentRequest-id', 'threatAssessmentResult-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /users/{user-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /users/{user-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}']['body'],
    params?: IEndpoints['PATCH /users/{user-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /users/{user-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/users/{user-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}',
      paramDefs: {
        path: ['user-id', 'threatAssessmentRequest-id', 'threatAssessmentResult-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /users/{user-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /users/{user-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /users/{user-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/users/{user-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['user-id', 'threatAssessmentRequest-id', 'threatAssessmentResult-id'],
      },
      params,
    };
  },
};
