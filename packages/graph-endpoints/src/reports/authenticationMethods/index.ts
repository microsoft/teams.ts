import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /reports/authenticationMethods': Operation<'/reports/authenticationMethods', 'delete'>;
  'GET /reports/authenticationMethods': Operation<'/reports/authenticationMethods', 'get'>;
  'PATCH /reports/authenticationMethods': Operation<'/reports/authenticationMethods', 'patch'>;
  'GET /reports/authenticationMethods/userRegistrationDetails': Operation<
    '/reports/authenticationMethods/userRegistrationDetails',
    'get'
  >;
  'POST /reports/authenticationMethods/userRegistrationDetails': Operation<
    '/reports/authenticationMethods/userRegistrationDetails',
    'post'
  >;
  'GET /reports/authenticationMethods/userRegistrationDetails/{userRegistrationDetails-id}': Operation<
    '/reports/authenticationMethods/userRegistrationDetails/{userRegistrationDetails-id}',
    'get'
  >;
  'PATCH /reports/authenticationMethods/userRegistrationDetails/{userRegistrationDetails-id}': Operation<
    '/reports/authenticationMethods/userRegistrationDetails/{userRegistrationDetails-id}',
    'patch'
  >;
  'DELETE /reports/authenticationMethods/userRegistrationDetails/{userRegistrationDetails-id}': Operation<
    '/reports/authenticationMethods/userRegistrationDetails/{userRegistrationDetails-id}',
    'delete'
  >;
}

/**
 * `DELETE /reports/authenticationMethods`
 *
 */
export function del(
  params?: IEndpoints['DELETE /reports/authenticationMethods']['parameters']
): EndpointRequest<IEndpoints['DELETE /reports/authenticationMethods']['response']> {
  return {
    method: 'delete',
    path: '/reports/authenticationMethods',
    paramDefs: {
      header: ['If-Match'],
    },
    params,
  };
}

/**
 * `GET /reports/authenticationMethods`
 *
 * Container for navigation properties for Microsoft Entra authentication methods resources.
 */
export function list(
  params?: IEndpoints['GET /reports/authenticationMethods']['parameters']
): EndpointRequest<IEndpoints['GET /reports/authenticationMethods']['response']> {
  return {
    method: 'get',
    path: '/reports/authenticationMethods',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /reports/authenticationMethods`
 *
 */
export function update(
  body: IEndpoints['PATCH /reports/authenticationMethods']['body']
): EndpointRequest<IEndpoints['PATCH /reports/authenticationMethods']['response']> {
  return {
    method: 'patch',
    path: '/reports/authenticationMethods',
    body,
  };
}

export const userRegistrationDetails = {
  /**
   * `GET /reports/authenticationMethods/userRegistrationDetails`
   *
   * Get a list of the authentication methods registered for a user as defined in the userRegistrationDetails object. This method doesn&#x27;t work for disabled users.
   */
  list: function list(
    params?: IEndpoints['GET /reports/authenticationMethods/userRegistrationDetails']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /reports/authenticationMethods/userRegistrationDetails']['response']
  > {
    return {
      method: 'get',
      path: '/reports/authenticationMethods/userRegistrationDetails',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /reports/authenticationMethods/userRegistrationDetails`
   *
   */
  create: function create(
    body: IEndpoints['POST /reports/authenticationMethods/userRegistrationDetails']['body']
  ): EndpointRequest<
    IEndpoints['POST /reports/authenticationMethods/userRegistrationDetails']['response']
  > {
    return {
      method: 'post',
      path: '/reports/authenticationMethods/userRegistrationDetails',
      body,
    };
  },
  /**
   * `GET /reports/authenticationMethods/userRegistrationDetails/{userRegistrationDetails-id}`
   *
   * Read the properties and relationships of a userRegistrationDetails object.
   */
  get: function get(
    params?: IEndpoints['GET /reports/authenticationMethods/userRegistrationDetails/{userRegistrationDetails-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /reports/authenticationMethods/userRegistrationDetails/{userRegistrationDetails-id}']['response']
  > {
    return {
      method: 'get',
      path: '/reports/authenticationMethods/userRegistrationDetails/{userRegistrationDetails-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['userRegistrationDetails-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /reports/authenticationMethods/userRegistrationDetails/{userRegistrationDetails-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /reports/authenticationMethods/userRegistrationDetails/{userRegistrationDetails-id}']['body'],
    params?: IEndpoints['PATCH /reports/authenticationMethods/userRegistrationDetails/{userRegistrationDetails-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /reports/authenticationMethods/userRegistrationDetails/{userRegistrationDetails-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/reports/authenticationMethods/userRegistrationDetails/{userRegistrationDetails-id}',
      paramDefs: {
        path: ['userRegistrationDetails-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /reports/authenticationMethods/userRegistrationDetails/{userRegistrationDetails-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /reports/authenticationMethods/userRegistrationDetails/{userRegistrationDetails-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /reports/authenticationMethods/userRegistrationDetails/{userRegistrationDetails-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/reports/authenticationMethods/userRegistrationDetails/{userRegistrationDetails-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['userRegistrationDetails-id'],
      },
      params,
    };
  },
};
