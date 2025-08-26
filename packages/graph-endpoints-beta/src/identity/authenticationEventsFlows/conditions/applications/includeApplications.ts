import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /identity/authenticationEventsFlows/{authenticationEventsFlow-id}/conditions/applications/includeApplications/{authenticationConditionApplication-appId}': Operation<
    '/identity/authenticationEventsFlows/{authenticationEventsFlow-id}/conditions/applications/includeApplications/{authenticationConditionApplication-appId}',
    'delete'
  >;
  'GET /identity/authenticationEventsFlows/{authenticationEventsFlow-id}/conditions/applications/includeApplications': Operation<
    '/identity/authenticationEventsFlows/{authenticationEventsFlow-id}/conditions/applications/includeApplications',
    'get'
  >;
  'GET /identity/authenticationEventsFlows/{authenticationEventsFlow-id}/conditions/applications/includeApplications/{authenticationConditionApplication-appId}': Operation<
    '/identity/authenticationEventsFlows/{authenticationEventsFlow-id}/conditions/applications/includeApplications/{authenticationConditionApplication-appId}',
    'get'
  >;
  'PATCH /identity/authenticationEventsFlows/{authenticationEventsFlow-id}/conditions/applications/includeApplications/{authenticationConditionApplication-appId}': Operation<
    '/identity/authenticationEventsFlows/{authenticationEventsFlow-id}/conditions/applications/includeApplications/{authenticationConditionApplication-appId}',
    'patch'
  >;
  'POST /identity/authenticationEventsFlows/{authenticationEventsFlow-id}/conditions/applications/includeApplications': Operation<
    '/identity/authenticationEventsFlows/{authenticationEventsFlow-id}/conditions/applications/includeApplications',
    'post'
  >;
}

/**
 * `DELETE /identity/authenticationEventsFlows/{authenticationEventsFlow-id}/conditions/applications/includeApplications/{authenticationConditionApplication-appId}`
 *
 * Remove or unlink an application from an external identities self-service sign-up user flow that&#x27;s represented by an externalUsersSelfServiceSignupEventsFlow object. This disables the authentication experience that&#x27;s defined by the user flow for the application.
 */
export function del(
  params?: IEndpoints['DELETE /identity/authenticationEventsFlows/{authenticationEventsFlow-id}/conditions/applications/includeApplications/{authenticationConditionApplication-appId}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /identity/authenticationEventsFlows/{authenticationEventsFlow-id}/conditions/applications/includeApplications/{authenticationConditionApplication-appId}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/identity/authenticationEventsFlows/{authenticationEventsFlow-id}/conditions/applications/includeApplications/{authenticationConditionApplication-appId}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'authenticationEventsFlow-id', in: 'path' },
      { name: 'authenticationConditionApplication-appId', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /identity/authenticationEventsFlows/{authenticationEventsFlow-id}/conditions/applications/includeApplications`
 *
 * List the applications linked to an external identities self-service sign up user flow that&#x27;s represented by an externalUsersSelfServiceSignupEventsFlow object. These are the applications for which the authentication experience that&#x27;s defined by the user flow is enabled. To find the user flow that&#x27;s linked to an application, see Example 4: List user flow associated with specific application ID.
 */
export function list(
  params?: IEndpoints['GET /identity/authenticationEventsFlows/{authenticationEventsFlow-id}/conditions/applications/includeApplications']['parameters']
): EndpointRequest<
  IEndpoints['GET /identity/authenticationEventsFlows/{authenticationEventsFlow-id}/conditions/applications/includeApplications']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identity/authenticationEventsFlows/{authenticationEventsFlow-id}/conditions/applications/includeApplications',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'authenticationEventsFlow-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /identity/authenticationEventsFlows/{authenticationEventsFlow-id}/conditions/applications/includeApplications/{authenticationConditionApplication-appId}`
 *
 */
export function get(
  params?: IEndpoints['GET /identity/authenticationEventsFlows/{authenticationEventsFlow-id}/conditions/applications/includeApplications/{authenticationConditionApplication-appId}']['parameters']
): EndpointRequest<
  IEndpoints['GET /identity/authenticationEventsFlows/{authenticationEventsFlow-id}/conditions/applications/includeApplications/{authenticationConditionApplication-appId}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identity/authenticationEventsFlows/{authenticationEventsFlow-id}/conditions/applications/includeApplications/{authenticationConditionApplication-appId}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'authenticationEventsFlow-id', in: 'path' },
      { name: 'authenticationConditionApplication-appId', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /identity/authenticationEventsFlows/{authenticationEventsFlow-id}/conditions/applications/includeApplications/{authenticationConditionApplication-appId}`
 *
 */
export function update(
  body: IEndpoints['PATCH /identity/authenticationEventsFlows/{authenticationEventsFlow-id}/conditions/applications/includeApplications/{authenticationConditionApplication-appId}']['body'],
  params?: IEndpoints['PATCH /identity/authenticationEventsFlows/{authenticationEventsFlow-id}/conditions/applications/includeApplications/{authenticationConditionApplication-appId}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /identity/authenticationEventsFlows/{authenticationEventsFlow-id}/conditions/applications/includeApplications/{authenticationConditionApplication-appId}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/identity/authenticationEventsFlows/{authenticationEventsFlow-id}/conditions/applications/includeApplications/{authenticationConditionApplication-appId}',
    paramDefs: [
      { name: 'authenticationEventsFlow-id', in: 'path' },
      { name: 'authenticationConditionApplication-appId', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /identity/authenticationEventsFlows/{authenticationEventsFlow-id}/conditions/applications/includeApplications`
 *
 * Add or link an application to an external identities self-service sign up user flow that&#x27;s represented by an externalUsersSelfServiceSignupEventsFlow object. This enables the authentication experience that&#x27;s defined by the user flow to be enabled for the application. An application can only be linked to one user flow. The app must have an associated service principal in the tenant.
 */
export function create(
  body: IEndpoints['POST /identity/authenticationEventsFlows/{authenticationEventsFlow-id}/conditions/applications/includeApplications']['body'],
  params?: IEndpoints['POST /identity/authenticationEventsFlows/{authenticationEventsFlow-id}/conditions/applications/includeApplications']['parameters']
): EndpointRequest<
  IEndpoints['POST /identity/authenticationEventsFlows/{authenticationEventsFlow-id}/conditions/applications/includeApplications']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/identity/authenticationEventsFlows/{authenticationEventsFlow-id}/conditions/applications/includeApplications',
    paramDefs: [{ name: 'authenticationEventsFlow-id', in: 'path' }],
    params,
    body,
  };
}
