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
  * Delete a specific authenticationEventsFlow resource by ID. This operation also removes or unlinks all applications from the flow, which disables the customized authentication experience defined for the application.  The following derived subtypes are supported:
- externalUsersSelfServiceSignupEventsFlow
  */
export function del(
  params?: IEndpoints['DELETE /identity/authenticationEventsFlows/{authenticationEventsFlow-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /identity/authenticationEventsFlows/{authenticationEventsFlow-id}']['response']
> {
  return {
    method: 'delete',
    path: '/identity/authenticationEventsFlows/{authenticationEventsFlow-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'authenticationEventsFlow-id', in: 'path' },
    ],
    params,
  };
}

/**
  * `GET /identity/authenticationEventsFlows`
  *
  * Get a collection of authentication events policies that are derived from authenticationEventsFlow. The following derived subtypes are supported: 
- externalUsersSelfServiceSignupEventsFlow
  */
export function list(
  params?: IEndpoints['GET /identity/authenticationEventsFlows']['parameters']
): EndpointRequest<IEndpoints['GET /identity/authenticationEventsFlows']['response']> {
  return {
    method: 'get',
    path: '/identity/authenticationEventsFlows',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
  * `GET /identity/authenticationEventsFlows/{authenticationEventsFlow-id}`
  *
  * Retrieve the properties and relationships of a specific authenticationEventsFlow object by ID. The @odata.type property in the response object indicates the type of the object, which can be one of the following derived subtypes:
- externalUsersSelfServiceSignupEventsFlow
  */
export function get(
  params?: IEndpoints['GET /identity/authenticationEventsFlows/{authenticationEventsFlow-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /identity/authenticationEventsFlows/{authenticationEventsFlow-id}']['response']
> {
  return {
    method: 'get',
    path: '/identity/authenticationEventsFlows/{authenticationEventsFlow-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'authenticationEventsFlow-id', in: 'path' },
    ],
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
    method: 'patch',
    path: '/identity/authenticationEventsFlows/{authenticationEventsFlow-id}',
    paramDefs: [{ name: 'authenticationEventsFlow-id', in: 'path' }],
    params,
    body,
  };
}

/**
  * `POST /identity/authenticationEventsFlows`
  *
  * Create a new authenticationEventsFlow object that is of the type specified in the request body. The following derived subtypes are supported:
- externalUsersSelfServiceSignupEventsFlow object type.
  */
export function create(
  body: IEndpoints['POST /identity/authenticationEventsFlows']['body'],
  params?: IEndpoints['POST /identity/authenticationEventsFlows']['parameters']
): EndpointRequest<IEndpoints['POST /identity/authenticationEventsFlows']['response']> {
  return {
    method: 'post',
    path: '/identity/authenticationEventsFlows',
    paramDefs: [],
    params,
    body,
  };
}
