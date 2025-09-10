import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'GET /identity/authenticationEventsFlows/{authenticationEventsFlow-id}/conditions/applications/includeApplications': Operation<
    '/identity/authenticationEventsFlows/{authenticationEventsFlow-id}/conditions/applications/includeApplications',
    'get'
  >;
  'POST /identity/authenticationEventsFlows/{authenticationEventsFlow-id}/conditions/applications/includeApplications': Operation<
    '/identity/authenticationEventsFlows/{authenticationEventsFlow-id}/conditions/applications/includeApplications',
    'post'
  >;
  'GET /identity/authenticationEventsFlows/{authenticationEventsFlow-id}/conditions/applications/includeApplications/{authenticationConditionApplication-appId}': Operation<
    '/identity/authenticationEventsFlows/{authenticationEventsFlow-id}/conditions/applications/includeApplications/{authenticationConditionApplication-appId}',
    'get'
  >;
  'PATCH /identity/authenticationEventsFlows/{authenticationEventsFlow-id}/conditions/applications/includeApplications/{authenticationConditionApplication-appId}': Operation<
    '/identity/authenticationEventsFlows/{authenticationEventsFlow-id}/conditions/applications/includeApplications/{authenticationConditionApplication-appId}',
    'patch'
  >;
  'DELETE /identity/authenticationEventsFlows/{authenticationEventsFlow-id}/conditions/applications/includeApplications/{authenticationConditionApplication-appId}': Operation<
    '/identity/authenticationEventsFlows/{authenticationEventsFlow-id}/conditions/applications/includeApplications/{authenticationConditionApplication-appId}',
    'delete'
  >;
}

export const includeApplications = {
  /**
   * `GET /identity/authenticationEventsFlows/{authenticationEventsFlow-id}/conditions/applications/includeApplications`
   *
   * List the applications linked to an external identities self-service sign up user flow that&#x27;s represented by an externalUsersSelfServiceSignupEventsFlow object. These are the applications for which the authentication experience that&#x27;s defined by the user flow is enabled. To find the user flow that&#x27;s linked to an application, see Example 4: List user flow associated with specific application ID.
   */
  list: function list(
    params?: IEndpoints['GET /identity/authenticationEventsFlows/{authenticationEventsFlow-id}/conditions/applications/includeApplications']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identity/authenticationEventsFlows/{authenticationEventsFlow-id}/conditions/applications/includeApplications']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/identity/authenticationEventsFlows/{authenticationEventsFlow-id}/conditions/applications/includeApplications',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['authenticationEventsFlow-id'],
      },
      params,
    };
  },
  /**
   * `POST /identity/authenticationEventsFlows/{authenticationEventsFlow-id}/conditions/applications/includeApplications`
   *
   * Add or link an application to an external identities self-service sign up user flow that&#x27;s represented by an externalUsersSelfServiceSignupEventsFlow object. This enables the authentication experience that&#x27;s defined by the user flow to be enabled for the application. An application can only be linked to one user flow. The app must have an associated service principal in the tenant.
   */
  create: function create(
    body: IEndpoints['POST /identity/authenticationEventsFlows/{authenticationEventsFlow-id}/conditions/applications/includeApplications']['body'],
    params?: IEndpoints['POST /identity/authenticationEventsFlows/{authenticationEventsFlow-id}/conditions/applications/includeApplications']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /identity/authenticationEventsFlows/{authenticationEventsFlow-id}/conditions/applications/includeApplications']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/identity/authenticationEventsFlows/{authenticationEventsFlow-id}/conditions/applications/includeApplications',
      paramDefs: {
        path: ['authenticationEventsFlow-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /identity/authenticationEventsFlows/{authenticationEventsFlow-id}/conditions/applications/includeApplications/{authenticationConditionApplication-appId}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /identity/authenticationEventsFlows/{authenticationEventsFlow-id}/conditions/applications/includeApplications/{authenticationConditionApplication-appId}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identity/authenticationEventsFlows/{authenticationEventsFlow-id}/conditions/applications/includeApplications/{authenticationConditionApplication-appId}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/identity/authenticationEventsFlows/{authenticationEventsFlow-id}/conditions/applications/includeApplications/{authenticationConditionApplication-appId}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['authenticationEventsFlow-id', 'authenticationConditionApplication-appId'],
      },
      params,
    };
  },
  /**
   * `PATCH /identity/authenticationEventsFlows/{authenticationEventsFlow-id}/conditions/applications/includeApplications/{authenticationConditionApplication-appId}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /identity/authenticationEventsFlows/{authenticationEventsFlow-id}/conditions/applications/includeApplications/{authenticationConditionApplication-appId}']['body'],
    params?: IEndpoints['PATCH /identity/authenticationEventsFlows/{authenticationEventsFlow-id}/conditions/applications/includeApplications/{authenticationConditionApplication-appId}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /identity/authenticationEventsFlows/{authenticationEventsFlow-id}/conditions/applications/includeApplications/{authenticationConditionApplication-appId}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/identity/authenticationEventsFlows/{authenticationEventsFlow-id}/conditions/applications/includeApplications/{authenticationConditionApplication-appId}',
      paramDefs: {
        path: ['authenticationEventsFlow-id', 'authenticationConditionApplication-appId'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /identity/authenticationEventsFlows/{authenticationEventsFlow-id}/conditions/applications/includeApplications/{authenticationConditionApplication-appId}`
   *
   * Remove or unlink an application from an external identities self-service sign-up user flow that&#x27;s represented by an externalUsersSelfServiceSignupEventsFlow object. This disables the authentication experience that&#x27;s defined by the user flow for the application.
   */
  del: function del(
    params?: IEndpoints['DELETE /identity/authenticationEventsFlows/{authenticationEventsFlow-id}/conditions/applications/includeApplications/{authenticationConditionApplication-appId}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /identity/authenticationEventsFlows/{authenticationEventsFlow-id}/conditions/applications/includeApplications/{authenticationConditionApplication-appId}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/identity/authenticationEventsFlows/{authenticationEventsFlow-id}/conditions/applications/includeApplications/{authenticationConditionApplication-appId}',
      paramDefs: {
        header: ['If-Match'],
        path: ['authenticationEventsFlow-id', 'authenticationConditionApplication-appId'],
      },
      params,
    };
  },
};
