import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/attackSimulation/trainings/{training-id}': Operation<
    '/security/attackSimulation/trainings/{training-id}',
    'delete'
  >;
  'GET /security/attackSimulation/trainings': Operation<
    '/security/attackSimulation/trainings',
    'get'
  >;
  'GET /security/attackSimulation/trainings/{training-id}': Operation<
    '/security/attackSimulation/trainings/{training-id}',
    'get'
  >;
  'PATCH /security/attackSimulation/trainings/{training-id}': Operation<
    '/security/attackSimulation/trainings/{training-id}',
    'patch'
  >;
  'POST /security/attackSimulation/trainings': Operation<
    '/security/attackSimulation/trainings',
    'post'
  >;
  'GET /security/attackSimulation/trainings/{training-id}/languageDetails': Operation<
    '/security/attackSimulation/trainings/{training-id}/languageDetails',
    'get'
  >;
  'POST /security/attackSimulation/trainings/{training-id}/languageDetails': Operation<
    '/security/attackSimulation/trainings/{training-id}/languageDetails',
    'post'
  >;
  'GET /security/attackSimulation/trainings/{training-id}/languageDetails/{trainingLanguageDetail-id}': Operation<
    '/security/attackSimulation/trainings/{training-id}/languageDetails/{trainingLanguageDetail-id}',
    'get'
  >;
  'PATCH /security/attackSimulation/trainings/{training-id}/languageDetails/{trainingLanguageDetail-id}': Operation<
    '/security/attackSimulation/trainings/{training-id}/languageDetails/{trainingLanguageDetail-id}',
    'patch'
  >;
  'DELETE /security/attackSimulation/trainings/{training-id}/languageDetails/{trainingLanguageDetail-id}': Operation<
    '/security/attackSimulation/trainings/{training-id}/languageDetails/{trainingLanguageDetail-id}',
    'delete'
  >;
}

/**
 * `DELETE /security/attackSimulation/trainings/{training-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /security/attackSimulation/trainings/{training-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /security/attackSimulation/trainings/{training-id}']['response']
> {
  return {
    method: 'delete',
    path: '/security/attackSimulation/trainings/{training-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['training-id'],
    },
    params,
  };
}

/**
 * `GET /security/attackSimulation/trainings`
 *
 * Get a list of the training objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /security/attackSimulation/trainings']['parameters']
): EndpointRequest<IEndpoints['GET /security/attackSimulation/trainings']['response']> {
  return {
    method: 'get',
    path: '/security/attackSimulation/trainings',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /security/attackSimulation/trainings/{training-id}`
 *
 * Get an attack simulation training for a tenant.
 */
export function get(
  params?: IEndpoints['GET /security/attackSimulation/trainings/{training-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/attackSimulation/trainings/{training-id}']['response']
> {
  return {
    method: 'get',
    path: '/security/attackSimulation/trainings/{training-id}',
    paramDefs: {
      path: ['training-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /security/attackSimulation/trainings/{training-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/attackSimulation/trainings/{training-id}']['body'],
  params?: IEndpoints['PATCH /security/attackSimulation/trainings/{training-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /security/attackSimulation/trainings/{training-id}']['response']
> {
  return {
    method: 'patch',
    path: '/security/attackSimulation/trainings/{training-id}',
    paramDefs: {
      path: ['training-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /security/attackSimulation/trainings`
 *
 */
export function create(
  body: IEndpoints['POST /security/attackSimulation/trainings']['body']
): EndpointRequest<IEndpoints['POST /security/attackSimulation/trainings']['response']> {
  return {
    method: 'post',
    path: '/security/attackSimulation/trainings',
    body,
  };
}

export const languageDetails = {
  /**
   * `GET /security/attackSimulation/trainings/{training-id}/languageDetails`
   *
   * Get the language details about an attack simulation training for a tenant.
   */
  list: function list(
    params?: IEndpoints['GET /security/attackSimulation/trainings/{training-id}/languageDetails']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/attackSimulation/trainings/{training-id}/languageDetails']['response']
  > {
    return {
      method: 'get',
      path: '/security/attackSimulation/trainings/{training-id}/languageDetails',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['training-id'],
      },
      params,
    };
  },
  /**
   * `POST /security/attackSimulation/trainings/{training-id}/languageDetails`
   *
   */
  create: function create(
    body: IEndpoints['POST /security/attackSimulation/trainings/{training-id}/languageDetails']['body'],
    params?: IEndpoints['POST /security/attackSimulation/trainings/{training-id}/languageDetails']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /security/attackSimulation/trainings/{training-id}/languageDetails']['response']
  > {
    return {
      method: 'post',
      path: '/security/attackSimulation/trainings/{training-id}/languageDetails',
      paramDefs: {
        path: ['training-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /security/attackSimulation/trainings/{training-id}/languageDetails/{trainingLanguageDetail-id}`
   *
   * Get the language details about an attack simulation training for a tenant.
   */
  get: function get(
    params?: IEndpoints['GET /security/attackSimulation/trainings/{training-id}/languageDetails/{trainingLanguageDetail-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/attackSimulation/trainings/{training-id}/languageDetails/{trainingLanguageDetail-id}']['response']
  > {
    return {
      method: 'get',
      path: '/security/attackSimulation/trainings/{training-id}/languageDetails/{trainingLanguageDetail-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['training-id', 'trainingLanguageDetail-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /security/attackSimulation/trainings/{training-id}/languageDetails/{trainingLanguageDetail-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /security/attackSimulation/trainings/{training-id}/languageDetails/{trainingLanguageDetail-id}']['body'],
    params?: IEndpoints['PATCH /security/attackSimulation/trainings/{training-id}/languageDetails/{trainingLanguageDetail-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /security/attackSimulation/trainings/{training-id}/languageDetails/{trainingLanguageDetail-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/security/attackSimulation/trainings/{training-id}/languageDetails/{trainingLanguageDetail-id}',
      paramDefs: {
        path: ['training-id', 'trainingLanguageDetail-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /security/attackSimulation/trainings/{training-id}/languageDetails/{trainingLanguageDetail-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /security/attackSimulation/trainings/{training-id}/languageDetails/{trainingLanguageDetail-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /security/attackSimulation/trainings/{training-id}/languageDetails/{trainingLanguageDetail-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/security/attackSimulation/trainings/{training-id}/languageDetails/{trainingLanguageDetail-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['training-id', 'trainingLanguageDetail-id'],
      },
      params,
    };
  },
};
