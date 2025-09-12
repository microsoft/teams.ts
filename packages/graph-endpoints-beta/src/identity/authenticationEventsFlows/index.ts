export * as conditions from './conditions';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /identity/authenticationEventsFlows/{authenticationEventsFlow-id}': Operation<
    '/identity/authenticationEventsFlows/{authenticationEventsFlow-id}',
    'delete'
  >;
  'GET /identity/authenticationEventsFlows': Operation<
    '/identity/authenticationEventsFlows',
    'get'
  >;
  'GET /identity/authenticationEventsFlows/{authenticationEventsFlow-id}': Operation<
    '/identity/authenticationEventsFlows/{authenticationEventsFlow-id}',
    'get'
  >;
  'PATCH /identity/authenticationEventsFlows/{authenticationEventsFlow-id}': Operation<
    '/identity/authenticationEventsFlows/{authenticationEventsFlow-id}',
    'patch'
  >;
  'POST /identity/authenticationEventsFlows': Operation<
    '/identity/authenticationEventsFlows',
    'post'
  >;
}

/**
 * `DELETE /identity/authenticationEventsFlows/{authenticationEventsFlow-id}`
 *
 * Delete a specific authenticationEventsFlow resource by ID. Only externalUsersSelfServiceSignupEventsFlow object types are available.
 */
export function del(
  params?: IEndpoints['DELETE /identity/authenticationEventsFlows/{authenticationEventsFlow-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /identity/authenticationEventsFlows/{authenticationEventsFlow-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/identity/authenticationEventsFlows/{authenticationEventsFlow-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['authenticationEventsFlow-id'],
    },
    params,
  };
}

/**
 * `GET /identity/authenticationEventsFlows`
 *
 * Get a collection of authentication events policies that are derived from authenticationEventsFlow. Only the externalUsersSelfServiceSignupEventsFlow object type is returned.
 */
export function list(
  params?: IEndpoints['GET /identity/authenticationEventsFlows']['parameters']
): EndpointRequest<IEndpoints['GET /identity/authenticationEventsFlows']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identity/authenticationEventsFlows',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /identity/authenticationEventsFlows/{authenticationEventsFlow-id}`
 *
 * Retrieve the properties and relationships of a specific authenticationEventsFlow object by ID. Only externalUsersSelfServiceSignupEventsFlow object types are available.
 */
export function get(
  params?: IEndpoints['GET /identity/authenticationEventsFlows/{authenticationEventsFlow-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /identity/authenticationEventsFlows/{authenticationEventsFlow-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identity/authenticationEventsFlows/{authenticationEventsFlow-id}',
    paramDefs: {
      path: ['authenticationEventsFlow-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
  * `PATCH /identity/authenticationEventsFlows/{authenticationEventsFlow-id}`
  *
  * Update the properties of an authenticationEventsFlow object by ID. You must specify the @odata.type property and the value of the authenticationEventsFlow object type to update. The following derived subtypes are supported:
- externalUsersSelfServiceSignupEventsFlow
  */
export function update(
  body: IEndpoints['PATCH /identity/authenticationEventsFlows/{authenticationEventsFlow-id}']['body'],
  params?: IEndpoints['PATCH /identity/authenticationEventsFlows/{authenticationEventsFlow-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /identity/authenticationEventsFlows/{authenticationEventsFlow-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/identity/authenticationEventsFlows/{authenticationEventsFlow-id}',
    paramDefs: {
      path: ['authenticationEventsFlow-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /identity/authenticationEventsFlows`
 *
 * Create a new authenticationEventsFlow object that is of the type specified in the request body. You can create only an externalUsersSelfServiceSignupEventsFlow object type.
 */
export function create(
  body: IEndpoints['POST /identity/authenticationEventsFlows']['body']
): EndpointRequest<IEndpoints['POST /identity/authenticationEventsFlows']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/identity/authenticationEventsFlows',
    body,
  };
}
