import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/attackSimulation/landingPages/{landingPage-id}': Operation<
    '/security/attackSimulation/landingPages/{landingPage-id}',
    'delete'
  >;
  'GET /security/attackSimulation/landingPages': Operation<
    '/security/attackSimulation/landingPages',
    'get'
  >;
  'GET /security/attackSimulation/landingPages/{landingPage-id}': Operation<
    '/security/attackSimulation/landingPages/{landingPage-id}',
    'get'
  >;
  'PATCH /security/attackSimulation/landingPages/{landingPage-id}': Operation<
    '/security/attackSimulation/landingPages/{landingPage-id}',
    'patch'
  >;
  'POST /security/attackSimulation/landingPages': Operation<
    '/security/attackSimulation/landingPages',
    'post'
  >;
  'GET /security/attackSimulation/landingPages/{landingPage-id}/details': Operation<
    '/security/attackSimulation/landingPages/{landingPage-id}/details',
    'get'
  >;
  'POST /security/attackSimulation/landingPages/{landingPage-id}/details': Operation<
    '/security/attackSimulation/landingPages/{landingPage-id}/details',
    'post'
  >;
  'GET /security/attackSimulation/landingPages/{landingPage-id}/details/{landingPageDetail-id}': Operation<
    '/security/attackSimulation/landingPages/{landingPage-id}/details/{landingPageDetail-id}',
    'get'
  >;
  'PATCH /security/attackSimulation/landingPages/{landingPage-id}/details/{landingPageDetail-id}': Operation<
    '/security/attackSimulation/landingPages/{landingPage-id}/details/{landingPageDetail-id}',
    'patch'
  >;
  'DELETE /security/attackSimulation/landingPages/{landingPage-id}/details/{landingPageDetail-id}': Operation<
    '/security/attackSimulation/landingPages/{landingPage-id}/details/{landingPageDetail-id}',
    'delete'
  >;
}

/**
 * `DELETE /security/attackSimulation/landingPages/{landingPage-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /security/attackSimulation/landingPages/{landingPage-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /security/attackSimulation/landingPages/{landingPage-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/security/attackSimulation/landingPages/{landingPage-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['landingPage-id'],
    },
    params,
  };
}

/**
 * `GET /security/attackSimulation/landingPages`
 *
 * Get a list of the landingPage objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /security/attackSimulation/landingPages']['parameters']
): EndpointRequest<IEndpoints['GET /security/attackSimulation/landingPages']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/attackSimulation/landingPages',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /security/attackSimulation/landingPages/{landingPage-id}`
 *
 * Represents an attack simulation training landing page.
 */
export function get(
  params?: IEndpoints['GET /security/attackSimulation/landingPages/{landingPage-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/attackSimulation/landingPages/{landingPage-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/attackSimulation/landingPages/{landingPage-id}',
    paramDefs: {
      path: ['landingPage-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /security/attackSimulation/landingPages/{landingPage-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/attackSimulation/landingPages/{landingPage-id}']['body'],
  params?: IEndpoints['PATCH /security/attackSimulation/landingPages/{landingPage-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /security/attackSimulation/landingPages/{landingPage-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/security/attackSimulation/landingPages/{landingPage-id}',
    paramDefs: {
      path: ['landingPage-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /security/attackSimulation/landingPages`
 *
 */
export function create(
  body: IEndpoints['POST /security/attackSimulation/landingPages']['body']
): EndpointRequest<IEndpoints['POST /security/attackSimulation/landingPages']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/security/attackSimulation/landingPages',
    body,
  };
}

export const details = {
  /**
   * `GET /security/attackSimulation/landingPages/{landingPage-id}/details`
   *
   * The detail information for a landing page associated with a simulation during its creation.
   */
  list: function list(
    params?: IEndpoints['GET /security/attackSimulation/landingPages/{landingPage-id}/details']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/attackSimulation/landingPages/{landingPage-id}/details']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/security/attackSimulation/landingPages/{landingPage-id}/details',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['landingPage-id'],
      },
      params,
    };
  },
  /**
   * `POST /security/attackSimulation/landingPages/{landingPage-id}/details`
   *
   */
  create: function create(
    body: IEndpoints['POST /security/attackSimulation/landingPages/{landingPage-id}/details']['body'],
    params?: IEndpoints['POST /security/attackSimulation/landingPages/{landingPage-id}/details']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /security/attackSimulation/landingPages/{landingPage-id}/details']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/security/attackSimulation/landingPages/{landingPage-id}/details',
      paramDefs: {
        path: ['landingPage-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /security/attackSimulation/landingPages/{landingPage-id}/details/{landingPageDetail-id}`
   *
   * The detail information for a landing page associated with a simulation during its creation.
   */
  get: function get(
    params?: IEndpoints['GET /security/attackSimulation/landingPages/{landingPage-id}/details/{landingPageDetail-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/attackSimulation/landingPages/{landingPage-id}/details/{landingPageDetail-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/security/attackSimulation/landingPages/{landingPage-id}/details/{landingPageDetail-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['landingPage-id', 'landingPageDetail-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /security/attackSimulation/landingPages/{landingPage-id}/details/{landingPageDetail-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /security/attackSimulation/landingPages/{landingPage-id}/details/{landingPageDetail-id}']['body'],
    params?: IEndpoints['PATCH /security/attackSimulation/landingPages/{landingPage-id}/details/{landingPageDetail-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /security/attackSimulation/landingPages/{landingPage-id}/details/{landingPageDetail-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/security/attackSimulation/landingPages/{landingPage-id}/details/{landingPageDetail-id}',
      paramDefs: {
        path: ['landingPage-id', 'landingPageDetail-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /security/attackSimulation/landingPages/{landingPage-id}/details/{landingPageDetail-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /security/attackSimulation/landingPages/{landingPage-id}/details/{landingPageDetail-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /security/attackSimulation/landingPages/{landingPage-id}/details/{landingPageDetail-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/security/attackSimulation/landingPages/{landingPage-id}/details/{landingPageDetail-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['landingPage-id', 'landingPageDetail-id'],
      },
      params,
    };
  },
};
