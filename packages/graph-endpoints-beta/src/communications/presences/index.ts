import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /communications/presences/{presence-id}': Operation<
    '/communications/presences/{presence-id}',
    'delete'
  >;
  'GET /communications/presences': Operation<'/communications/presences', 'get'>;
  'GET /communications/presences/{presence-id}': Operation<
    '/communications/presences/{presence-id}',
    'get'
  >;
  'PATCH /communications/presences/{presence-id}': Operation<
    '/communications/presences/{presence-id}',
    'patch'
  >;
  'POST /communications/presences': Operation<'/communications/presences', 'post'>;
  'POST /communications/presences/{presence-id}/clearPresence': Operation<
    '/communications/presences/{presence-id}/clearPresence',
    'post'
  >;
  'POST /communications/presences/{presence-id}/clearUserPreferredPresence': Operation<
    '/communications/presences/{presence-id}/clearUserPreferredPresence',
    'post'
  >;
  'POST /communications/presences/{presence-id}/setPresence': Operation<
    '/communications/presences/{presence-id}/setPresence',
    'post'
  >;
  'POST /communications/presences/{presence-id}/setStatusMessage': Operation<
    '/communications/presences/{presence-id}/setStatusMessage',
    'post'
  >;
  'POST /communications/presences/{presence-id}/setUserPreferredPresence': Operation<
    '/communications/presences/{presence-id}/setUserPreferredPresence',
    'post'
  >;
}

/**
 * `DELETE /communications/presences/{presence-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /communications/presences/{presence-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /communications/presences/{presence-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/communications/presences/{presence-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['presence-id'],
    },
    params,
  };
}

/**
 * `GET /communications/presences`
 *
 * Get a user&#x27;s presence information.
 */
export function list(
  params?: IEndpoints['GET /communications/presences']['parameters']
): EndpointRequest<IEndpoints['GET /communications/presences']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/communications/presences',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /communications/presences/{presence-id}`
 *
 * Get a user&#x27;s presence information.
 */
export function get(
  params?: IEndpoints['GET /communications/presences/{presence-id}']['parameters']
): EndpointRequest<IEndpoints['GET /communications/presences/{presence-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/communications/presences/{presence-id}',
    paramDefs: {
      path: ['presence-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /communications/presences/{presence-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /communications/presences/{presence-id}']['body'],
  params?: IEndpoints['PATCH /communications/presences/{presence-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /communications/presences/{presence-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/communications/presences/{presence-id}',
    paramDefs: {
      path: ['presence-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /communications/presences`
 *
 */
export function create(
  body: IEndpoints['POST /communications/presences']['body']
): EndpointRequest<IEndpoints['POST /communications/presences']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/communications/presences',
    body,
  };
}

export const clearPresence = {
  /**
   * `POST /communications/presences/{presence-id}/clearPresence`
   *
   * Clear a presence session of an application for a user. If it is the user&#x27;s only presence session, a successful clearPresence changes the user&#x27;s presence to Offline/Offline. Read more about presence sessions and their time-out and expiration.
   */
  create: function create(
    body: IEndpoints['POST /communications/presences/{presence-id}/clearPresence']['body'],
    params?: IEndpoints['POST /communications/presences/{presence-id}/clearPresence']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /communications/presences/{presence-id}/clearPresence']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/communications/presences/{presence-id}/clearPresence',
      paramDefs: {
        path: ['presence-id'],
      },
      params,
      body,
    };
  },
};

export const clearUserPreferredPresence = {
  /**
   * `POST /communications/presences/{presence-id}/clearUserPreferredPresence`
   *
   * Clear the preferred availability and activity status for a user.
   */
  create: function create(
    params?: IEndpoints['POST /communications/presences/{presence-id}/clearUserPreferredPresence']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /communications/presences/{presence-id}/clearUserPreferredPresence']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/communications/presences/{presence-id}/clearUserPreferredPresence',
      paramDefs: {
        path: ['presence-id'],
      },
      params,
    };
  },
};

export const setPresence = {
  /**
   * `POST /communications/presences/{presence-id}/setPresence`
   *
   * Set the availability and activity status in a presence session of an application for a user.  For more information about presence sessions, states permutations, and timeouts, see Manage presence state using the Microsoft Graph API.
   */
  create: function create(
    body: IEndpoints['POST /communications/presences/{presence-id}/setPresence']['body'],
    params?: IEndpoints['POST /communications/presences/{presence-id}/setPresence']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /communications/presences/{presence-id}/setPresence']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/communications/presences/{presence-id}/setPresence',
      paramDefs: {
        path: ['presence-id'],
      },
      params,
      body,
    };
  },
};

export const setStatusMessage = {
  /**
   * `POST /communications/presences/{presence-id}/setStatusMessage`
   *
   * Set a presence status message for a user. An optional expiration date and time can be supplied.
   */
  create: function create(
    body: IEndpoints['POST /communications/presences/{presence-id}/setStatusMessage']['body'],
    params?: IEndpoints['POST /communications/presences/{presence-id}/setStatusMessage']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /communications/presences/{presence-id}/setStatusMessage']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/communications/presences/{presence-id}/setStatusMessage',
      paramDefs: {
        path: ['presence-id'],
      },
      params,
      body,
    };
  },
};

export const setUserPreferredPresence = {
  /**
   * `POST /communications/presences/{presence-id}/setUserPreferredPresence`
   *
   * Set the preferred availability and activity status for a user. If the preferred presence of a user is set, the user&#x27;s presence is the preferred presence. Preferred presence takes effect only when there is at least one presence session of the user. Otherwise, the user&#x27;s presence stays as Offline. A presence session can be created as a result of a successful setPresence operation, or if the user is signed in on a Teams client.  Read more about presence sessions and their time-out and expiration.
   */
  create: function create(
    body: IEndpoints['POST /communications/presences/{presence-id}/setUserPreferredPresence']['body'],
    params?: IEndpoints['POST /communications/presences/{presence-id}/setUserPreferredPresence']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /communications/presences/{presence-id}/setUserPreferredPresence']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/communications/presences/{presence-id}/setUserPreferredPresence',
      paramDefs: {
        path: ['presence-id'],
      },
      params,
      body,
    };
  },
};
