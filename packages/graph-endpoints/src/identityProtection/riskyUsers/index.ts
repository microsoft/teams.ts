import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /identityProtection/riskyUsers/{riskyUser-id}': Operation<
    '/identityProtection/riskyUsers/{riskyUser-id}',
    'delete'
  >;
  'GET /identityProtection/riskyUsers': Operation<'/identityProtection/riskyUsers', 'get'>;
  'GET /identityProtection/riskyUsers/{riskyUser-id}': Operation<
    '/identityProtection/riskyUsers/{riskyUser-id}',
    'get'
  >;
  'PATCH /identityProtection/riskyUsers/{riskyUser-id}': Operation<
    '/identityProtection/riskyUsers/{riskyUser-id}',
    'patch'
  >;
  'POST /identityProtection/riskyUsers': Operation<'/identityProtection/riskyUsers', 'post'>;
  'POST /identityProtection/riskyUsers/confirmCompromised': Operation<
    '/identityProtection/riskyUsers/confirmCompromised',
    'post'
  >;
  'POST /identityProtection/riskyUsers/confirmSafe': Operation<
    '/identityProtection/riskyUsers/confirmSafe',
    'post'
  >;
  'POST /identityProtection/riskyUsers/dismiss': Operation<
    '/identityProtection/riskyUsers/dismiss',
    'post'
  >;
  'GET /identityProtection/riskyUsers/{riskyUser-id}/history': Operation<
    '/identityProtection/riskyUsers/{riskyUser-id}/history',
    'get'
  >;
  'POST /identityProtection/riskyUsers/{riskyUser-id}/history': Operation<
    '/identityProtection/riskyUsers/{riskyUser-id}/history',
    'post'
  >;
  'GET /identityProtection/riskyUsers/{riskyUser-id}/history/{riskyUserHistoryItem-id}': Operation<
    '/identityProtection/riskyUsers/{riskyUser-id}/history/{riskyUserHistoryItem-id}',
    'get'
  >;
  'PATCH /identityProtection/riskyUsers/{riskyUser-id}/history/{riskyUserHistoryItem-id}': Operation<
    '/identityProtection/riskyUsers/{riskyUser-id}/history/{riskyUserHistoryItem-id}',
    'patch'
  >;
  'DELETE /identityProtection/riskyUsers/{riskyUser-id}/history/{riskyUserHistoryItem-id}': Operation<
    '/identityProtection/riskyUsers/{riskyUser-id}/history/{riskyUserHistoryItem-id}',
    'delete'
  >;
}

/**
 * `DELETE /identityProtection/riskyUsers/{riskyUser-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /identityProtection/riskyUsers/{riskyUser-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /identityProtection/riskyUsers/{riskyUser-id}']['response']> {
  return {
    method: 'delete',
    path: '/identityProtection/riskyUsers/{riskyUser-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['riskyUser-id'],
    },
    params,
  };
}

/**
 * `GET /identityProtection/riskyUsers`
 *
 * Get a list of the riskyUser objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /identityProtection/riskyUsers']['parameters']
): EndpointRequest<IEndpoints['GET /identityProtection/riskyUsers']['response']> {
  return {
    method: 'get',
    path: '/identityProtection/riskyUsers',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /identityProtection/riskyUsers/{riskyUser-id}`
 *
 * Read the properties and relationships of a riskyUser object.
 */
export function get(
  params?: IEndpoints['GET /identityProtection/riskyUsers/{riskyUser-id}']['parameters']
): EndpointRequest<IEndpoints['GET /identityProtection/riskyUsers/{riskyUser-id}']['response']> {
  return {
    method: 'get',
    path: '/identityProtection/riskyUsers/{riskyUser-id}',
    paramDefs: {
      path: ['riskyUser-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /identityProtection/riskyUsers/{riskyUser-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /identityProtection/riskyUsers/{riskyUser-id}']['body'],
  params?: IEndpoints['PATCH /identityProtection/riskyUsers/{riskyUser-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /identityProtection/riskyUsers/{riskyUser-id}']['response']> {
  return {
    method: 'patch',
    path: '/identityProtection/riskyUsers/{riskyUser-id}',
    paramDefs: {
      path: ['riskyUser-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /identityProtection/riskyUsers`
 *
 */
export function create(
  body: IEndpoints['POST /identityProtection/riskyUsers']['body']
): EndpointRequest<IEndpoints['POST /identityProtection/riskyUsers']['response']> {
  return {
    method: 'post',
    path: '/identityProtection/riskyUsers',
    body,
  };
}

export const confirmCompromised = {
  /**
   * `POST /identityProtection/riskyUsers/confirmCompromised`
   *
   * Confirm one or more riskyUser objects as compromised. This action sets the targeted user&#x27;s risk level to high.
   */
  create: function create(
    body: IEndpoints['POST /identityProtection/riskyUsers/confirmCompromised']['body']
  ): EndpointRequest<
    IEndpoints['POST /identityProtection/riskyUsers/confirmCompromised']['response']
  > {
    return {
      method: 'post',
      path: '/identityProtection/riskyUsers/confirmCompromised',
      body,
    };
  },
};

export const confirmSafe = {
  /**
   * `POST /identityProtection/riskyUsers/confirmSafe`
   *
   * Confirm one or more riskyUser objects as safe. This action sets the targeted user&#x27;s risk level to none.
   */
  create: function create(
    body: IEndpoints['POST /identityProtection/riskyUsers/confirmSafe']['body']
  ): EndpointRequest<IEndpoints['POST /identityProtection/riskyUsers/confirmSafe']['response']> {
    return {
      method: 'post',
      path: '/identityProtection/riskyUsers/confirmSafe',
      body,
    };
  },
};

export const dismiss = {
  /**
   * `POST /identityProtection/riskyUsers/dismiss`
   *
   * Dismiss the risk of one or more riskyUser objects. This action sets the targeted user&#x27;s risk level to none.
   */
  create: function create(
    body: IEndpoints['POST /identityProtection/riskyUsers/dismiss']['body']
  ): EndpointRequest<IEndpoints['POST /identityProtection/riskyUsers/dismiss']['response']> {
    return {
      method: 'post',
      path: '/identityProtection/riskyUsers/dismiss',
      body,
    };
  },
};

export const history = {
  /**
   * `GET /identityProtection/riskyUsers/{riskyUser-id}/history`
   *
   * Get the riskyUserHistoryItems from the history navigation property.
   */
  get: function get(
    params?: IEndpoints['GET /identityProtection/riskyUsers/{riskyUser-id}/history']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityProtection/riskyUsers/{riskyUser-id}/history']['response']
  > {
    return {
      method: 'get',
      path: '/identityProtection/riskyUsers/{riskyUser-id}/history',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['riskyUser-id'],
      },
      params,
    };
  },
  /**
   * `POST /identityProtection/riskyUsers/{riskyUser-id}/history`
   *
   */
  create: function create(
    body: IEndpoints['POST /identityProtection/riskyUsers/{riskyUser-id}/history']['body'],
    params?: IEndpoints['POST /identityProtection/riskyUsers/{riskyUser-id}/history']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /identityProtection/riskyUsers/{riskyUser-id}/history']['response']
  > {
    return {
      method: 'post',
      path: '/identityProtection/riskyUsers/{riskyUser-id}/history',
      paramDefs: {
        path: ['riskyUser-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /identityProtection/riskyUsers/{riskyUser-id}/history/{riskyUserHistoryItem-id}`
   *
   * The activity related to user risk level change
   */
  get$1: function get$1(
    params?: IEndpoints['GET /identityProtection/riskyUsers/{riskyUser-id}/history/{riskyUserHistoryItem-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityProtection/riskyUsers/{riskyUser-id}/history/{riskyUserHistoryItem-id}']['response']
  > {
    return {
      method: 'get',
      path: '/identityProtection/riskyUsers/{riskyUser-id}/history/{riskyUserHistoryItem-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['riskyUser-id', 'riskyUserHistoryItem-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /identityProtection/riskyUsers/{riskyUser-id}/history/{riskyUserHistoryItem-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /identityProtection/riskyUsers/{riskyUser-id}/history/{riskyUserHistoryItem-id}']['body'],
    params?: IEndpoints['PATCH /identityProtection/riskyUsers/{riskyUser-id}/history/{riskyUserHistoryItem-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /identityProtection/riskyUsers/{riskyUser-id}/history/{riskyUserHistoryItem-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/identityProtection/riskyUsers/{riskyUser-id}/history/{riskyUserHistoryItem-id}',
      paramDefs: {
        path: ['riskyUser-id', 'riskyUserHistoryItem-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /identityProtection/riskyUsers/{riskyUser-id}/history/{riskyUserHistoryItem-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /identityProtection/riskyUsers/{riskyUser-id}/history/{riskyUserHistoryItem-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /identityProtection/riskyUsers/{riskyUser-id}/history/{riskyUserHistoryItem-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/identityProtection/riskyUsers/{riskyUser-id}/history/{riskyUserHistoryItem-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['riskyUser-id', 'riskyUserHistoryItem-id'],
      },
      params,
    };
  },
};
