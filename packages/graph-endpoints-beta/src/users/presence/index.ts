import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/presence': Operation<'/users/{user-id}/presence', 'delete'>;
  'GET /users/{user-id}/presence': Operation<'/users/{user-id}/presence', 'get'>;
  'PATCH /users/{user-id}/presence': Operation<'/users/{user-id}/presence', 'patch'>;
  'POST /users/{user-id}/presence/clearPresence': Operation<
    '/users/{user-id}/presence/clearPresence',
    'post'
  >;
  'POST /users/{user-id}/presence/clearUserPreferredPresence': Operation<
    '/users/{user-id}/presence/clearUserPreferredPresence',
    'post'
  >;
  'POST /users/{user-id}/presence/setPresence': Operation<
    '/users/{user-id}/presence/setPresence',
    'post'
  >;
  'POST /users/{user-id}/presence/setStatusMessage': Operation<
    '/users/{user-id}/presence/setStatusMessage',
    'post'
  >;
  'POST /users/{user-id}/presence/setUserPreferredPresence': Operation<
    '/users/{user-id}/presence/setUserPreferredPresence',
    'post'
  >;
}

/**
 * `DELETE /users/{user-id}/presence`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/presence']['parameters']
): EndpointRequest<IEndpoints['DELETE /users/{user-id}/presence']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/presence',
    paramDefs: {
      header: ['If-Match'],
      path: ['user-id'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/presence`
 *
 * Get a user&#x27;s presence information.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/presence']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/presence']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/presence',
    paramDefs: {
      path: ['user-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /users/{user-id}/presence`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/presence']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/presence']['parameters']
): EndpointRequest<IEndpoints['PATCH /users/{user-id}/presence']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/presence',
    paramDefs: {
      path: ['user-id'],
    },
    params,
    body,
  };
}

export const clearPresence = {
  /**
   * `POST /users/{user-id}/presence/clearPresence`
   *
   * Clear a presence session of an application for a user. If it is the user&#x27;s only presence session, a successful clearPresence changes the user&#x27;s presence to Offline/Offline. Read more about presence sessions and their time-out and expiration.
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/presence/clearPresence']['body'],
    params?: IEndpoints['POST /users/{user-id}/presence/clearPresence']['parameters']
  ): EndpointRequest<IEndpoints['POST /users/{user-id}/presence/clearPresence']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/presence/clearPresence',
      paramDefs: {
        path: ['user-id'],
      },
      params,
      body,
    };
  },
};

export const clearUserPreferredPresence = {
  /**
   * `POST /users/{user-id}/presence/clearUserPreferredPresence`
   *
   * Clear the preferred availability and activity status for a user.
   */
  create: function create(
    params?: IEndpoints['POST /users/{user-id}/presence/clearUserPreferredPresence']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/presence/clearUserPreferredPresence']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/presence/clearUserPreferredPresence',
      paramDefs: {
        path: ['user-id'],
      },
      params,
    };
  },
};

export const setPresence = {
  /**
   * `POST /users/{user-id}/presence/setPresence`
   *
   * Set the availability and activity status in a presence session of an application for a user.  For more information about presence sessions, states permutations, and timeouts, see Manage presence state using the Microsoft Graph API.
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/presence/setPresence']['body'],
    params?: IEndpoints['POST /users/{user-id}/presence/setPresence']['parameters']
  ): EndpointRequest<IEndpoints['POST /users/{user-id}/presence/setPresence']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/presence/setPresence',
      paramDefs: {
        path: ['user-id'],
      },
      params,
      body,
    };
  },
};

export const setStatusMessage = {
  /**
   * `POST /users/{user-id}/presence/setStatusMessage`
   *
   * Set a presence status message for a user. An optional expiration date and time can be supplied.
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/presence/setStatusMessage']['body'],
    params?: IEndpoints['POST /users/{user-id}/presence/setStatusMessage']['parameters']
  ): EndpointRequest<IEndpoints['POST /users/{user-id}/presence/setStatusMessage']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/presence/setStatusMessage',
      paramDefs: {
        path: ['user-id'],
      },
      params,
      body,
    };
  },
};

export const setUserPreferredPresence = {
  /**
   * `POST /users/{user-id}/presence/setUserPreferredPresence`
   *
   * Set the preferred availability and activity status for a user. If the preferred presence of a user is set, the user&#x27;s presence is the preferred presence. Preferred presence takes effect only when there is at least one presence session of the user. Otherwise, the user&#x27;s presence stays as Offline. A presence session can be created as a result of a successful setPresence operation, or if the user is signed in on a Teams client.  Read more about presence sessions and their time-out and expiration.
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/presence/setUserPreferredPresence']['body'],
    params?: IEndpoints['POST /users/{user-id}/presence/setUserPreferredPresence']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/presence/setUserPreferredPresence']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/presence/setUserPreferredPresence',
      paramDefs: {
        path: ['user-id'],
      },
      params,
      body,
    };
  },
};
