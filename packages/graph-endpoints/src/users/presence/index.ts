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
   * Clear the application&#x27;s presence session for a user. If it is the user&#x27;s only presence session, the user&#x27;s presence will change to Offline/Offline. For details about presences sessions, see presence: setPresence.
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/presence/clearPresence']['body'],
    params?: IEndpoints['POST /users/{user-id}/presence/clearPresence']['parameters']
  ): EndpointRequest<IEndpoints['POST /users/{user-id}/presence/clearPresence']['response']> {
    return {
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
   * Set the state of a user&#x27;s presence session as an application. For more information about presence sessions, states permutations, and timeouts, see Manage presence state using the Microsoft Graph API.
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/presence/setPresence']['body'],
    params?: IEndpoints['POST /users/{user-id}/presence/setPresence']['parameters']
  ): EndpointRequest<IEndpoints['POST /users/{user-id}/presence/setPresence']['response']> {
    return {
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
   * Set the preferred availability and activity status for a user. If the preferred presence of a user is set, the user&#x27;s presence shows as the preferred status. Preferred presence takes effect only when at least one presence session exists for the user. Otherwise, the user&#x27;s presence shows as Offline. A presence session is created as a result of a successful setPresence operation, or if the user is signed in on a Microsoft Teams client. For more details, see presence sessions and time-out and expiration.
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/presence/setUserPreferredPresence']['body'],
    params?: IEndpoints['POST /users/{user-id}/presence/setUserPreferredPresence']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/presence/setUserPreferredPresence']['response']
  > {
    return {
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
