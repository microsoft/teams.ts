import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}': Operation<
    '/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}',
    'delete'
  >;
  'GET /informationProtection/threatAssessmentRequests': Operation<
    '/informationProtection/threatAssessmentRequests',
    'get'
  >;
  'GET /informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}': Operation<
    '/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}',
    'get'
  >;
  'PATCH /informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}': Operation<
    '/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}',
    'patch'
  >;
  'POST /informationProtection/threatAssessmentRequests': Operation<
    '/informationProtection/threatAssessmentRequests',
    'post'
  >;
  'GET /informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results': Operation<
    '/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results',
    'get'
  >;
  'POST /informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results': Operation<
    '/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results',
    'post'
  >;
  'GET /informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}': Operation<
    '/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}',
    'get'
  >;
  'PATCH /informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}': Operation<
    '/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}',
    'patch'
  >;
  'DELETE /informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}': Operation<
    '/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}',
    'delete'
  >;
}

/**
 * `DELETE /informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}']['response']
> {
  return {
    method: 'delete',
    path: '/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['threatAssessmentRequest-id'],
    },
    params,
  };
}

/**
 * `GET /informationProtection/threatAssessmentRequests`
 *
 * Retrieve a list of threatAssessmentRequest objects. A threat assessment request can be one of the following types:
 */
export function list(
  params?: IEndpoints['GET /informationProtection/threatAssessmentRequests']['parameters']
): EndpointRequest<IEndpoints['GET /informationProtection/threatAssessmentRequests']['response']> {
  return {
    method: 'get',
    path: '/informationProtection/threatAssessmentRequests',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}`
 *
 * Retrieve the properties and relationships of a specified threatAssessmentRequest object. A threat assessment request can be one of the following types:
 */
export function get(
  params?: IEndpoints['GET /informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}']['response']
> {
  return {
    method: 'get',
    path: '/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}',
    paramDefs: {
      path: ['threatAssessmentRequest-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}']['body'],
  params?: IEndpoints['PATCH /informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}']['response']
> {
  return {
    method: 'patch',
    path: '/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}',
    paramDefs: {
      path: ['threatAssessmentRequest-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /informationProtection/threatAssessmentRequests`
 *
 * Create a new threat assessment request. A threat assessment request can be one of the following types:
 */
export function create(
  body: IEndpoints['POST /informationProtection/threatAssessmentRequests']['body']
): EndpointRequest<IEndpoints['POST /informationProtection/threatAssessmentRequests']['response']> {
  return {
    method: 'post',
    path: '/informationProtection/threatAssessmentRequests',
    body,
  };
}

export const results = {
  /**
   * `GET /informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results`
   *
   * A collection of threat assessment results. Read-only. By default, a GET /threatAssessmentRequests/{id} does not return this property unless you apply $expand on it.
   */
  list: function list(
    params?: IEndpoints['GET /informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results']['response']
  > {
    return {
      method: 'get',
      path: '/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['threatAssessmentRequest-id'],
      },
      params,
    };
  },
  /**
   * `POST /informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results`
   *
   */
  create: function create(
    body: IEndpoints['POST /informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results']['body'],
    params?: IEndpoints['POST /informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results']['response']
  > {
    return {
      method: 'post',
      path: '/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results',
      paramDefs: {
        path: ['threatAssessmentRequest-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}`
   *
   * A collection of threat assessment results. Read-only. By default, a GET /threatAssessmentRequests/{id} does not return this property unless you apply $expand on it.
   */
  get: function get(
    params?: IEndpoints['GET /informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}']['response']
  > {
    return {
      method: 'get',
      path: '/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['threatAssessmentRequest-id', 'threatAssessmentResult-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}']['body'],
    params?: IEndpoints['PATCH /informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}',
      paramDefs: {
        path: ['threatAssessmentRequest-id', 'threatAssessmentResult-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['threatAssessmentRequest-id', 'threatAssessmentResult-id'],
      },
      params,
    };
  },
};
