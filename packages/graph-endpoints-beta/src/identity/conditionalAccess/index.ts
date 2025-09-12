export * as authenticationStrength from './authenticationStrength';
export * as authenticationStrengths from './authenticationStrengths';
export * as deletedItems from './deletedItems';
export * as namedLocations from './namedLocations';
export * as policies from './policies';

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
      ver: 'beta',
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
   * Create a new authenticationContextClassReference.
   */
  create: function create(
    body: IEndpoints['POST /identity/conditionalAccess/authenticationContextClassReferences']['body']
  ): EndpointRequest<
    IEndpoints['POST /identity/conditionalAccess/authenticationContextClassReferences']['response']
  > {
    return {
      ver: 'beta',
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
      ver: 'beta',
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
   * Update the properties of an authenticationContextClassReference object.
   */
  update: function update(
    body: IEndpoints['PATCH /identity/conditionalAccess/authenticationContextClassReferences/{authenticationContextClassReference-id}']['body'],
    params?: IEndpoints['PATCH /identity/conditionalAccess/authenticationContextClassReferences/{authenticationContextClassReference-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /identity/conditionalAccess/authenticationContextClassReferences/{authenticationContextClassReference-id}']['response']
  > {
    return {
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
      method: 'post',
      path: '/identity/conditionalAccess/evaluate',
      body,
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
      ver: 'beta',
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
      ver: 'beta',
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
