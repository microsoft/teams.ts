import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /reports/authenticationMethods': Operation<'/reports/authenticationMethods', 'delete'>;
  'GET /reports/authenticationMethods': Operation<'/reports/authenticationMethods', 'get'>;
  'PATCH /reports/authenticationMethods': Operation<'/reports/authenticationMethods', 'patch'>;
  'GET /reports/authenticationMethods/userEventsSummary': Operation<
    '/reports/authenticationMethods/userEventsSummary',
    'get'
  >;
  'POST /reports/authenticationMethods/userEventsSummary': Operation<
    '/reports/authenticationMethods/userEventsSummary',
    'post'
  >;
  'GET /reports/authenticationMethods/userEventsSummary/{userEventsSummary-id}': Operation<
    '/reports/authenticationMethods/userEventsSummary/{userEventsSummary-id}',
    'get'
  >;
  'PATCH /reports/authenticationMethods/userEventsSummary/{userEventsSummary-id}': Operation<
    '/reports/authenticationMethods/userEventsSummary/{userEventsSummary-id}',
    'patch'
  >;
  'DELETE /reports/authenticationMethods/userEventsSummary/{userEventsSummary-id}': Operation<
    '/reports/authenticationMethods/userEventsSummary/{userEventsSummary-id}',
    'delete'
  >;
  'GET /reports/authenticationMethods/userMfaSignInSummary': Operation<
    '/reports/authenticationMethods/userMfaSignInSummary',
    'get'
  >;
  'POST /reports/authenticationMethods/userMfaSignInSummary': Operation<
    '/reports/authenticationMethods/userMfaSignInSummary',
    'post'
  >;
  'GET /reports/authenticationMethods/userMfaSignInSummary/{userMfaSignInSummary-id}': Operation<
    '/reports/authenticationMethods/userMfaSignInSummary/{userMfaSignInSummary-id}',
    'get'
  >;
  'PATCH /reports/authenticationMethods/userMfaSignInSummary/{userMfaSignInSummary-id}': Operation<
    '/reports/authenticationMethods/userMfaSignInSummary/{userMfaSignInSummary-id}',
    'patch'
  >;
  'DELETE /reports/authenticationMethods/userMfaSignInSummary/{userMfaSignInSummary-id}': Operation<
    '/reports/authenticationMethods/userMfaSignInSummary/{userMfaSignInSummary-id}',
    'delete'
  >;
  'GET /reports/authenticationMethods/userPasswordResetsAndChangesSummary': Operation<
    '/reports/authenticationMethods/userPasswordResetsAndChangesSummary',
    'get'
  >;
  'POST /reports/authenticationMethods/userPasswordResetsAndChangesSummary': Operation<
    '/reports/authenticationMethods/userPasswordResetsAndChangesSummary',
    'post'
  >;
  'GET /reports/authenticationMethods/userPasswordResetsAndChangesSummary/{userPasswordResetsAndChangesSummary-id}': Operation<
    '/reports/authenticationMethods/userPasswordResetsAndChangesSummary/{userPasswordResetsAndChangesSummary-id}',
    'get'
  >;
  'PATCH /reports/authenticationMethods/userPasswordResetsAndChangesSummary/{userPasswordResetsAndChangesSummary-id}': Operation<
    '/reports/authenticationMethods/userPasswordResetsAndChangesSummary/{userPasswordResetsAndChangesSummary-id}',
    'patch'
  >;
  'DELETE /reports/authenticationMethods/userPasswordResetsAndChangesSummary/{userPasswordResetsAndChangesSummary-id}': Operation<
    '/reports/authenticationMethods/userPasswordResetsAndChangesSummary/{userPasswordResetsAndChangesSummary-id}',
    'delete'
  >;
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
    ver: 'beta',
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
    ver: 'beta',
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
    ver: 'beta',
    method: 'patch',
    path: '/reports/authenticationMethods',
    body,
  };
}

export const userEventsSummary = {
  /**
   * `GET /reports/authenticationMethods/userEventsSummary`
   *
   * Get a list of the user SSPR and MFA registration and reset events as defined in the usereventssummary object.
   */
  get: function get(
    params?: IEndpoints['GET /reports/authenticationMethods/userEventsSummary']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /reports/authenticationMethods/userEventsSummary']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/reports/authenticationMethods/userEventsSummary',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /reports/authenticationMethods/userEventsSummary`
   *
   */
  create: function create(
    body: IEndpoints['POST /reports/authenticationMethods/userEventsSummary']['body']
  ): EndpointRequest<
    IEndpoints['POST /reports/authenticationMethods/userEventsSummary']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/reports/authenticationMethods/userEventsSummary',
      body,
    };
  },
  /**
   * `GET /reports/authenticationMethods/userEventsSummary/{userEventsSummary-id}`
   *
   * Represents a specific user MFA/SSPR registration or reset event, including whether the event was successful, which authentication method was targeted, and failure reason if any.
   */
  get$1: function get$1(
    params?: IEndpoints['GET /reports/authenticationMethods/userEventsSummary/{userEventsSummary-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /reports/authenticationMethods/userEventsSummary/{userEventsSummary-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/reports/authenticationMethods/userEventsSummary/{userEventsSummary-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['userEventsSummary-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /reports/authenticationMethods/userEventsSummary/{userEventsSummary-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /reports/authenticationMethods/userEventsSummary/{userEventsSummary-id}']['body'],
    params?: IEndpoints['PATCH /reports/authenticationMethods/userEventsSummary/{userEventsSummary-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /reports/authenticationMethods/userEventsSummary/{userEventsSummary-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/reports/authenticationMethods/userEventsSummary/{userEventsSummary-id}',
      paramDefs: {
        path: ['userEventsSummary-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /reports/authenticationMethods/userEventsSummary/{userEventsSummary-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /reports/authenticationMethods/userEventsSummary/{userEventsSummary-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /reports/authenticationMethods/userEventsSummary/{userEventsSummary-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/reports/authenticationMethods/userEventsSummary/{userEventsSummary-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['userEventsSummary-id'],
      },
      params,
    };
  },
};

export const userMfaSignInSummary = {
  /**
   * `GET /reports/authenticationMethods/userMfaSignInSummary`
   *
   * Get the summary of MFA vs non-MFA sign-in events for a specified time window, as defined in the userMfaSignInSummary object.
   */
  get: function get(
    params?: IEndpoints['GET /reports/authenticationMethods/userMfaSignInSummary']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /reports/authenticationMethods/userMfaSignInSummary']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/reports/authenticationMethods/userMfaSignInSummary',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /reports/authenticationMethods/userMfaSignInSummary`
   *
   */
  create: function create(
    body: IEndpoints['POST /reports/authenticationMethods/userMfaSignInSummary']['body']
  ): EndpointRequest<
    IEndpoints['POST /reports/authenticationMethods/userMfaSignInSummary']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/reports/authenticationMethods/userMfaSignInSummary',
      body,
    };
  },
  /**
   * `GET /reports/authenticationMethods/userMfaSignInSummary/{userMfaSignInSummary-id}`
   *
   * Represents the total count of MFA vs non-MFA sign-in counts for a specified period.
   */
  get$1: function get$1(
    params?: IEndpoints['GET /reports/authenticationMethods/userMfaSignInSummary/{userMfaSignInSummary-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /reports/authenticationMethods/userMfaSignInSummary/{userMfaSignInSummary-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/reports/authenticationMethods/userMfaSignInSummary/{userMfaSignInSummary-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['userMfaSignInSummary-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /reports/authenticationMethods/userMfaSignInSummary/{userMfaSignInSummary-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /reports/authenticationMethods/userMfaSignInSummary/{userMfaSignInSummary-id}']['body'],
    params?: IEndpoints['PATCH /reports/authenticationMethods/userMfaSignInSummary/{userMfaSignInSummary-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /reports/authenticationMethods/userMfaSignInSummary/{userMfaSignInSummary-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/reports/authenticationMethods/userMfaSignInSummary/{userMfaSignInSummary-id}',
      paramDefs: {
        path: ['userMfaSignInSummary-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /reports/authenticationMethods/userMfaSignInSummary/{userMfaSignInSummary-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /reports/authenticationMethods/userMfaSignInSummary/{userMfaSignInSummary-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /reports/authenticationMethods/userMfaSignInSummary/{userMfaSignInSummary-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/reports/authenticationMethods/userMfaSignInSummary/{userMfaSignInSummary-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['userMfaSignInSummary-id'],
      },
      params,
    };
  },
};

export const userPasswordResetsAndChangesSummary = {
  /**
   * `GET /reports/authenticationMethods/userPasswordResetsAndChangesSummary`
   *
   * Gets a list of password resets and changes that occurred in a given aggregation window as defined in the userPasswordResetsAndChangesSummary object.
   */
  get: function get(
    params?: IEndpoints['GET /reports/authenticationMethods/userPasswordResetsAndChangesSummary']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /reports/authenticationMethods/userPasswordResetsAndChangesSummary']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/reports/authenticationMethods/userPasswordResetsAndChangesSummary',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /reports/authenticationMethods/userPasswordResetsAndChangesSummary`
   *
   */
  create: function create(
    body: IEndpoints['POST /reports/authenticationMethods/userPasswordResetsAndChangesSummary']['body']
  ): EndpointRequest<
    IEndpoints['POST /reports/authenticationMethods/userPasswordResetsAndChangesSummary']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/reports/authenticationMethods/userPasswordResetsAndChangesSummary',
      body,
    };
  },
  /**
   * `GET /reports/authenticationMethods/userPasswordResetsAndChangesSummary/{userPasswordResetsAndChangesSummary-id}`
   *
   * Represents the summary of password resets and changes for a specific day. This includes the number of password resets that were self-service and those triggered by an administrator.
   */
  get$1: function get$1(
    params?: IEndpoints['GET /reports/authenticationMethods/userPasswordResetsAndChangesSummary/{userPasswordResetsAndChangesSummary-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /reports/authenticationMethods/userPasswordResetsAndChangesSummary/{userPasswordResetsAndChangesSummary-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/reports/authenticationMethods/userPasswordResetsAndChangesSummary/{userPasswordResetsAndChangesSummary-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['userPasswordResetsAndChangesSummary-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /reports/authenticationMethods/userPasswordResetsAndChangesSummary/{userPasswordResetsAndChangesSummary-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /reports/authenticationMethods/userPasswordResetsAndChangesSummary/{userPasswordResetsAndChangesSummary-id}']['body'],
    params?: IEndpoints['PATCH /reports/authenticationMethods/userPasswordResetsAndChangesSummary/{userPasswordResetsAndChangesSummary-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /reports/authenticationMethods/userPasswordResetsAndChangesSummary/{userPasswordResetsAndChangesSummary-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/reports/authenticationMethods/userPasswordResetsAndChangesSummary/{userPasswordResetsAndChangesSummary-id}',
      paramDefs: {
        path: ['userPasswordResetsAndChangesSummary-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /reports/authenticationMethods/userPasswordResetsAndChangesSummary/{userPasswordResetsAndChangesSummary-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /reports/authenticationMethods/userPasswordResetsAndChangesSummary/{userPasswordResetsAndChangesSummary-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /reports/authenticationMethods/userPasswordResetsAndChangesSummary/{userPasswordResetsAndChangesSummary-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/reports/authenticationMethods/userPasswordResetsAndChangesSummary/{userPasswordResetsAndChangesSummary-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['userPasswordResetsAndChangesSummary-id'],
      },
      params,
    };
  },
};

export const userRegistrationDetails = {
  /**
   * `GET /reports/authenticationMethods/userRegistrationDetails`
   *
   * Get a list of the authentication methods registered for a user  as defined in the userRegistrationDetails object. This method doesn&#x27;t work for disabled users.
   */
  list: function list(
    params?: IEndpoints['GET /reports/authenticationMethods/userRegistrationDetails']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /reports/authenticationMethods/userRegistrationDetails']['response']
  > {
    return {
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
