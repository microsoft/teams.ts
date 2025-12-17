export * as authenticationStrength from './authenticationStrength';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /identity/conditionalAccess/authenticationContextClassReferences': Operation<
    '/identity/conditionalAccess/authenticationContextClassReferences',
    'get'
  >;
  'POST /identity/conditionalAccess/authenticationContextClassReferences': Operation<
    '/identity/conditionalAccess/authenticationContextClassReferences',
    'post'
  >;
  'GET /identity/conditionalAccess/authenticationContextClassReferences/{authenticationContextClassReference-id}': Operation<
    '/identity/conditionalAccess/authenticationContextClassReferences/{authenticationContextClassReference-id}',
    'get'
  >;
  'PATCH /identity/conditionalAccess/authenticationContextClassReferences/{authenticationContextClassReference-id}': Operation<
    '/identity/conditionalAccess/authenticationContextClassReferences/{authenticationContextClassReference-id}',
    'patch'
  >;
  'DELETE /identity/conditionalAccess/authenticationContextClassReferences/{authenticationContextClassReference-id}': Operation<
    '/identity/conditionalAccess/authenticationContextClassReferences/{authenticationContextClassReference-id}',
    'delete'
  >;
  'POST /identity/conditionalAccess/evaluate': Operation<
    '/identity/conditionalAccess/evaluate',
    'post'
  >;
  'GET /identity/conditionalAccess/namedLocations': Operation<
    '/identity/conditionalAccess/namedLocations',
    'get'
  >;
  'POST /identity/conditionalAccess/namedLocations': Operation<
    '/identity/conditionalAccess/namedLocations',
    'post'
  >;
  'GET /identity/conditionalAccess/namedLocations/{namedLocation-id}': Operation<
    '/identity/conditionalAccess/namedLocations/{namedLocation-id}',
    'get'
  >;
  'PATCH /identity/conditionalAccess/namedLocations/{namedLocation-id}': Operation<
    '/identity/conditionalAccess/namedLocations/{namedLocation-id}',
    'patch'
  >;
  'DELETE /identity/conditionalAccess/namedLocations/{namedLocation-id}': Operation<
    '/identity/conditionalAccess/namedLocations/{namedLocation-id}',
    'delete'
  >;
  'GET /identity/conditionalAccess/policies': Operation<
    '/identity/conditionalAccess/policies',
    'get'
  >;
  'POST /identity/conditionalAccess/policies': Operation<
    '/identity/conditionalAccess/policies',
    'post'
  >;
  'GET /identity/conditionalAccess/policies/{conditionalAccessPolicy-id}': Operation<
    '/identity/conditionalAccess/policies/{conditionalAccessPolicy-id}',
    'get'
  >;
  'PATCH /identity/conditionalAccess/policies/{conditionalAccessPolicy-id}': Operation<
    '/identity/conditionalAccess/policies/{conditionalAccessPolicy-id}',
    'patch'
  >;
  'DELETE /identity/conditionalAccess/policies/{conditionalAccessPolicy-id}': Operation<
    '/identity/conditionalAccess/policies/{conditionalAccessPolicy-id}',
    'delete'
  >;
  'GET /identity/conditionalAccess/templates': Operation<
    '/identity/conditionalAccess/templates',
    'get'
  >;
  'GET /identity/conditionalAccess/templates/{conditionalAccessTemplate-id}': Operation<
    '/identity/conditionalAccess/templates/{conditionalAccessTemplate-id}',
    'get'
  >;
}

export const authenticationContextClassReferences = {
  /**
   * `GET /identity/conditionalAccess/authenticationContextClassReferences`
   *
   * Retrieve a list of authenticationContextClassReference objects.
   */
  list: function list(
    params?: IEndpoints['GET /identity/conditionalAccess/authenticationContextClassReferences']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identity/conditionalAccess/authenticationContextClassReferences']['response']
  > {
    return {
      method: 'get',
      path: '/identity/conditionalAccess/authenticationContextClassReferences',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /identity/conditionalAccess/authenticationContextClassReferences`
   *
   */
  create: function create(
    body: IEndpoints['POST /identity/conditionalAccess/authenticationContextClassReferences']['body']
  ): EndpointRequest<
    IEndpoints['POST /identity/conditionalAccess/authenticationContextClassReferences']['response']
  > {
    return {
      method: 'post',
      path: '/identity/conditionalAccess/authenticationContextClassReferences',
      body,
    };
  },
  /**
   * `GET /identity/conditionalAccess/authenticationContextClassReferences/{authenticationContextClassReference-id}`
   *
   * Retrieve the properties and relationships of a authenticationContextClassReference object.
   */
  get: function get(
    params?: IEndpoints['GET /identity/conditionalAccess/authenticationContextClassReferences/{authenticationContextClassReference-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identity/conditionalAccess/authenticationContextClassReferences/{authenticationContextClassReference-id}']['response']
  > {
    return {
      method: 'get',
      path: '/identity/conditionalAccess/authenticationContextClassReferences/{authenticationContextClassReference-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['authenticationContextClassReference-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /identity/conditionalAccess/authenticationContextClassReferences/{authenticationContextClassReference-id}`
   *
   * Create an authenticationContextClassReference object, if the ID has not been used. If ID has been used, this call updates the authenticationContextClassReference object.
   */
  update: function update(
    body: IEndpoints['PATCH /identity/conditionalAccess/authenticationContextClassReferences/{authenticationContextClassReference-id}']['body'],
    params?: IEndpoints['PATCH /identity/conditionalAccess/authenticationContextClassReferences/{authenticationContextClassReference-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /identity/conditionalAccess/authenticationContextClassReferences/{authenticationContextClassReference-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/identity/conditionalAccess/authenticationContextClassReferences/{authenticationContextClassReference-id}',
      paramDefs: {
        path: ['authenticationContextClassReference-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /identity/conditionalAccess/authenticationContextClassReferences/{authenticationContextClassReference-id}`
   *
   * Delete an authenticationContextClassReference object that&#x27;s not published or used by a conditional access policy.
   */
  del: function del(
    params?: IEndpoints['DELETE /identity/conditionalAccess/authenticationContextClassReferences/{authenticationContextClassReference-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /identity/conditionalAccess/authenticationContextClassReferences/{authenticationContextClassReference-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/identity/conditionalAccess/authenticationContextClassReferences/{authenticationContextClassReference-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['authenticationContextClassReference-id'],
      },
      params,
    };
  },
};

export const evaluate = {
  /**
   * `POST /identity/conditionalAccess/evaluate`
   *
   * Evaluates the applicability of Conditional Access Policies in your tenant based on the provided sign-in properties.
   */
  create: function create(
    body: IEndpoints['POST /identity/conditionalAccess/evaluate']['body']
  ): EndpointRequest<IEndpoints['POST /identity/conditionalAccess/evaluate']['response']> {
    return {
      method: 'post',
      path: '/identity/conditionalAccess/evaluate',
      body,
    };
  },
};

export const namedLocations = {
  /**
   * `GET /identity/conditionalAccess/namedLocations`
   *
   * Get a list of namedLocation objects.
   */
  list: function list(
    params?: IEndpoints['GET /identity/conditionalAccess/namedLocations']['parameters']
  ): EndpointRequest<IEndpoints['GET /identity/conditionalAccess/namedLocations']['response']> {
    return {
      method: 'get',
      path: '/identity/conditionalAccess/namedLocations',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /identity/conditionalAccess/namedLocations`
   *
   * Create a new namedLocation object. Named locations can be either ipNamedLocation or countryNamedLocation objects.
   */
  create: function create(
    body: IEndpoints['POST /identity/conditionalAccess/namedLocations']['body']
  ): EndpointRequest<IEndpoints['POST /identity/conditionalAccess/namedLocations']['response']> {
    return {
      method: 'post',
      path: '/identity/conditionalAccess/namedLocations',
      body,
    };
  },
  /**
   * `GET /identity/conditionalAccess/namedLocations/{namedLocation-id}`
   *
   * Retrieve the properties and relationships of a countryNamedLocation object.
   */
  get: function get(
    params?: IEndpoints['GET /identity/conditionalAccess/namedLocations/{namedLocation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identity/conditionalAccess/namedLocations/{namedLocation-id}']['response']
  > {
    return {
      method: 'get',
      path: '/identity/conditionalAccess/namedLocations/{namedLocation-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['namedLocation-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /identity/conditionalAccess/namedLocations/{namedLocation-id}`
   *
   * Update the properties of a countryNamedLocation object.
   */
  update: function update(
    body: IEndpoints['PATCH /identity/conditionalAccess/namedLocations/{namedLocation-id}']['body'],
    params?: IEndpoints['PATCH /identity/conditionalAccess/namedLocations/{namedLocation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /identity/conditionalAccess/namedLocations/{namedLocation-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/identity/conditionalAccess/namedLocations/{namedLocation-id}',
      paramDefs: {
        path: ['namedLocation-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /identity/conditionalAccess/namedLocations/{namedLocation-id}`
   *
   * Delete a countryNamedLocation object.
   */
  del: function del(
    params?: IEndpoints['DELETE /identity/conditionalAccess/namedLocations/{namedLocation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /identity/conditionalAccess/namedLocations/{namedLocation-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/identity/conditionalAccess/namedLocations/{namedLocation-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['namedLocation-id'],
      },
      params,
    };
  },
};

export const policies = {
  /**
   * `GET /identity/conditionalAccess/policies`
   *
   * Retrieve a list of conditionalAccessPolicy objects.
   */
  list: function list(
    params?: IEndpoints['GET /identity/conditionalAccess/policies']['parameters']
  ): EndpointRequest<IEndpoints['GET /identity/conditionalAccess/policies']['response']> {
    return {
      method: 'get',
      path: '/identity/conditionalAccess/policies',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /identity/conditionalAccess/policies`
   *
   * Create a new conditionalAccessPolicy.
   */
  create: function create(
    body: IEndpoints['POST /identity/conditionalAccess/policies']['body']
  ): EndpointRequest<IEndpoints['POST /identity/conditionalAccess/policies']['response']> {
    return {
      method: 'post',
      path: '/identity/conditionalAccess/policies',
      body,
    };
  },
  /**
   * `GET /identity/conditionalAccess/policies/{conditionalAccessPolicy-id}`
   *
   * Retrieve the properties and relationships of a conditionalAccessPolicy object.
   */
  get: function get(
    params?: IEndpoints['GET /identity/conditionalAccess/policies/{conditionalAccessPolicy-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identity/conditionalAccess/policies/{conditionalAccessPolicy-id}']['response']
  > {
    return {
      method: 'get',
      path: '/identity/conditionalAccess/policies/{conditionalAccessPolicy-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['conditionalAccessPolicy-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /identity/conditionalAccess/policies/{conditionalAccessPolicy-id}`
   *
   * Update the properties of a conditionalAccessPolicy object.
   */
  update: function update(
    body: IEndpoints['PATCH /identity/conditionalAccess/policies/{conditionalAccessPolicy-id}']['body'],
    params?: IEndpoints['PATCH /identity/conditionalAccess/policies/{conditionalAccessPolicy-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /identity/conditionalAccess/policies/{conditionalAccessPolicy-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/identity/conditionalAccess/policies/{conditionalAccessPolicy-id}',
      paramDefs: {
        path: ['conditionalAccessPolicy-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /identity/conditionalAccess/policies/{conditionalAccessPolicy-id}`
   *
   * Delete a conditionalAccessPolicy object.
   */
  del: function del(
    params?: IEndpoints['DELETE /identity/conditionalAccess/policies/{conditionalAccessPolicy-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /identity/conditionalAccess/policies/{conditionalAccessPolicy-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/identity/conditionalAccess/policies/{conditionalAccessPolicy-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['conditionalAccessPolicy-id'],
      },
      params,
    };
  },
};

export const templates = {
  /**
   * `GET /identity/conditionalAccess/templates`
   *
   * Get a list of the conditionalAccessTemplate objects and their properties.
   */
  list: function list(
    params?: IEndpoints['GET /identity/conditionalAccess/templates']['parameters']
  ): EndpointRequest<IEndpoints['GET /identity/conditionalAccess/templates']['response']> {
    return {
      method: 'get',
      path: '/identity/conditionalAccess/templates',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `GET /identity/conditionalAccess/templates/{conditionalAccessTemplate-id}`
   *
   * Read the properties and relationships of a conditionalAccessTemplate object.
   */
  get: function get(
    params?: IEndpoints['GET /identity/conditionalAccess/templates/{conditionalAccessTemplate-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identity/conditionalAccess/templates/{conditionalAccessTemplate-id}']['response']
  > {
    return {
      method: 'get',
      path: '/identity/conditionalAccess/templates/{conditionalAccessTemplate-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['conditionalAccessTemplate-id'],
      },
      params,
    };
  },
};
