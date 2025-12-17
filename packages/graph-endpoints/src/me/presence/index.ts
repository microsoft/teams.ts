import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/presence': Operation<'/me/presence', 'delete'>;
  'GET /me/presence': Operation<'/me/presence', 'get'>;
  'PATCH /me/presence': Operation<'/me/presence', 'patch'>;
  'POST /me/presence/clearPresence': Operation<'/me/presence/clearPresence', 'post'>;
  'POST /me/presence/clearUserPreferredPresence': Operation<
    '/me/presence/clearUserPreferredPresence',
    'post'
  >;
  'POST /me/presence/setPresence': Operation<'/me/presence/setPresence', 'post'>;
  'POST /me/presence/setStatusMessage': Operation<'/me/presence/setStatusMessage', 'post'>;
  'POST /me/presence/setUserPreferredPresence': Operation<
    '/me/presence/setUserPreferredPresence',
    'post'
  >;
}

/**
 * `DELETE /me/presence`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/presence']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/presence']['response']> {
  return {
    method: 'delete',
    path: '/me/presence',
    paramDefs: {
      header: ['If-Match'],
    },
    params,
  };
}

/**
 * `GET /me/presence`
 *
 * Get a user&#x27;s presence information.
 */
export function get(
  params?: IEndpoints['GET /me/presence']['parameters']
): EndpointRequest<IEndpoints['GET /me/presence']['response']> {
  return {
    method: 'get',
    path: '/me/presence',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /me/presence`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/presence']['body']
): EndpointRequest<IEndpoints['PATCH /me/presence']['response']> {
  return {
    method: 'patch',
    path: '/me/presence',
    body,
  };
}

export const clearPresence = {
  /**
   * `POST /me/presence/clearPresence`
   *
   * Clear the application&#x27;s presence session for a user. If it is the user&#x27;s only presence session, the user&#x27;s presence will change to Offline/Offline. For details about presences sessions, see presence: setPresence.
   */
  create: function create(
    body: IEndpoints['POST /me/presence/clearPresence']['body']
  ): EndpointRequest<IEndpoints['POST /me/presence/clearPresence']['response']> {
    return {
      method: 'post',
      path: '/me/presence/clearPresence',
      body,
    };
  },
};

export const clearUserPreferredPresence = {
  /**
   * `POST /me/presence/clearUserPreferredPresence`
   *
   * Clear the preferred availability and activity status for a user.
   */
  create: function create(): EndpointRequest<
    IEndpoints['POST /me/presence/clearUserPreferredPresence']['response']
  > {
    return {
      method: 'post',
      path: '/me/presence/clearUserPreferredPresence',
    };
  },
};

export const setPresence = {
  /**
   * `POST /me/presence/setPresence`
   *
   * Set the state of a user&#x27;s presence session as an application. For more information about presence sessions, states permutations, and timeouts, see Manage presence state using the Microsoft Graph API.
   */
  create: function create(
    body: IEndpoints['POST /me/presence/setPresence']['body']
  ): EndpointRequest<IEndpoints['POST /me/presence/setPresence']['response']> {
    return {
      method: 'post',
      path: '/me/presence/setPresence',
      body,
    };
  },
};

export const setStatusMessage = {
  /**
   * `POST /me/presence/setStatusMessage`
   *
   * Set a presence status message for a user. An optional expiration date and time can be supplied.
   */
  create: function create(
    body: IEndpoints['POST /me/presence/setStatusMessage']['body']
  ): EndpointRequest<IEndpoints['POST /me/presence/setStatusMessage']['response']> {
    return {
      method: 'post',
      path: '/me/presence/setStatusMessage',
      body,
    };
  },
};

export const setUserPreferredPresence = {
  /**
   * `POST /me/presence/setUserPreferredPresence`
   *
   * Set the preferred availability and activity status for a user. If the preferred presence of a user is set, the user&#x27;s presence shows as the preferred status. Preferred presence takes effect only when at least one presence session exists for the user. Otherwise, the user&#x27;s presence shows as Offline. A presence session is created as a result of a successful setPresence operation, or if the user is signed in on a Microsoft Teams client. For more details, see presence sessions and time-out and expiration.
   */
  create: function create(
    body: IEndpoints['POST /me/presence/setUserPreferredPresence']['body']
  ): EndpointRequest<IEndpoints['POST /me/presence/setUserPreferredPresence']['response']> {
    return {
      method: 'post',
      path: '/me/presence/setUserPreferredPresence',
      body,
    };
  },
};
