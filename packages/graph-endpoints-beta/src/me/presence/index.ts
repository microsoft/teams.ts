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
    ver: 'beta',
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
    ver: 'beta',
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
    ver: 'beta',
    method: 'patch',
    path: '/me/presence',
    body,
  };
}

export const clearPresence = {
  /**
   * `POST /me/presence/clearPresence`
   *
   * Clear a presence session of an application for a user. If it is the user&#x27;s only presence session, a successful clearPresence changes the user&#x27;s presence to Offline/Offline. Read more about presence sessions and their time-out and expiration.
   */
  create: function create(
    body: IEndpoints['POST /me/presence/clearPresence']['body']
  ): EndpointRequest<IEndpoints['POST /me/presence/clearPresence']['response']> {
    return {
      ver: 'beta',
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
      ver: 'beta',
      method: 'post',
      path: '/me/presence/clearUserPreferredPresence',
    };
  },
};

export const setPresence = {
  /**
   * `POST /me/presence/setPresence`
   *
   * Set the availability and activity status in a presence session of an application for a user.  For more information about presence sessions, states permutations, and timeouts, see Manage presence state using the Microsoft Graph API.
   */
  create: function create(
    body: IEndpoints['POST /me/presence/setPresence']['body']
  ): EndpointRequest<IEndpoints['POST /me/presence/setPresence']['response']> {
    return {
      ver: 'beta',
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
      ver: 'beta',
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
   * Set the preferred availability and activity status for a user. If the preferred presence of a user is set, the user&#x27;s presence is the preferred presence. Preferred presence takes effect only when there is at least one presence session of the user. Otherwise, the user&#x27;s presence stays as Offline. A presence session can be created as a result of a successful setPresence operation, or if the user is signed in on a Teams client.  Read more about presence sessions and their time-out and expiration.
   */
  create: function create(
    body: IEndpoints['POST /me/presence/setUserPreferredPresence']['body']
  ): EndpointRequest<IEndpoints['POST /me/presence/setUserPreferredPresence']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/presence/setUserPreferredPresence',
      body,
    };
  },
};
