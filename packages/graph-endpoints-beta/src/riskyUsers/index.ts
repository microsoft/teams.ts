import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /riskyUsers/{riskyUser-id}': Operation<'/riskyUsers/{riskyUser-id}', 'delete'>;
  'GET /riskyUsers': Operation<'/riskyUsers', 'get'>;
  'GET /riskyUsers/{riskyUser-id}': Operation<'/riskyUsers/{riskyUser-id}', 'get'>;
  'PATCH /riskyUsers/{riskyUser-id}': Operation<'/riskyUsers/{riskyUser-id}', 'patch'>;
  'POST /riskyUsers': Operation<'/riskyUsers', 'post'>;
  'POST /riskyUsers/confirmCompromised': Operation<'/riskyUsers/confirmCompromised', 'post'>;
  'POST /riskyUsers/confirmSafe': Operation<'/riskyUsers/confirmSafe', 'post'>;
  'POST /riskyUsers/dismiss': Operation<'/riskyUsers/dismiss', 'post'>;
  'GET /riskyUsers/{riskyUser-id}/history': Operation<'/riskyUsers/{riskyUser-id}/history', 'get'>;
  'POST /riskyUsers/{riskyUser-id}/history': Operation<
    '/riskyUsers/{riskyUser-id}/history',
    'post'
  >;
  'GET /riskyUsers/{riskyUser-id}/history/{riskyUserHistoryItem-id}': Operation<
    '/riskyUsers/{riskyUser-id}/history/{riskyUserHistoryItem-id}',
    'get'
  >;
  'PATCH /riskyUsers/{riskyUser-id}/history/{riskyUserHistoryItem-id}': Operation<
    '/riskyUsers/{riskyUser-id}/history/{riskyUserHistoryItem-id}',
    'patch'
  >;
  'DELETE /riskyUsers/{riskyUser-id}/history/{riskyUserHistoryItem-id}': Operation<
    '/riskyUsers/{riskyUser-id}/history/{riskyUserHistoryItem-id}',
    'delete'
  >;
}

/**
 * `DELETE /riskyUsers/{riskyUser-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /riskyUsers/{riskyUser-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /riskyUsers/{riskyUser-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/riskyUsers/{riskyUser-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['riskyUser-id'],
    },
    params,
  };
}

/**
 * `GET /riskyUsers`
 *
 * Retrieve the properties and relationships of a collection of riskyUser objects.
 */
export function list(
  params?: IEndpoints['GET /riskyUsers']['parameters']
): EndpointRequest<IEndpoints['GET /riskyUsers']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/riskyUsers',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /riskyUsers/{riskyUser-id}`
 *
 * Retrieve the properties and relationships of a riskyUser object.
 */
export function get(
  params?: IEndpoints['GET /riskyUsers/{riskyUser-id}']['parameters']
): EndpointRequest<IEndpoints['GET /riskyUsers/{riskyUser-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/riskyUsers/{riskyUser-id}',
    paramDefs: {
      path: ['riskyUser-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /riskyUsers/{riskyUser-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /riskyUsers/{riskyUser-id}']['body'],
  params?: IEndpoints['PATCH /riskyUsers/{riskyUser-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /riskyUsers/{riskyUser-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/riskyUsers/{riskyUser-id}',
    paramDefs: {
      path: ['riskyUser-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /riskyUsers`
 *
 */
export function create(
  body: IEndpoints['POST /riskyUsers']['body']
): EndpointRequest<IEndpoints['POST /riskyUsers']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/riskyUsers',
    body,
  };
}

export const confirmCompromised = {
  /**
   * `POST /riskyUsers/confirmCompromised`
   *
   * Confirm one or more riskyUser objects as compromised. This action sets the targeted user&#x27;s risk level to high.
   */
  create: function create(
    body: IEndpoints['POST /riskyUsers/confirmCompromised']['body']
  ): EndpointRequest<IEndpoints['POST /riskyUsers/confirmCompromised']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/riskyUsers/confirmCompromised',
      body,
    };
  },
};

export const confirmSafe = {
  /**
   * `POST /riskyUsers/confirmSafe`
   *
   * Confirm one or more riskyUser objects as safe. This action sets the targeted user&#x27;s risk level to none.
   */
  create: function create(
    body: IEndpoints['POST /riskyUsers/confirmSafe']['body']
  ): EndpointRequest<IEndpoints['POST /riskyUsers/confirmSafe']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/riskyUsers/confirmSafe',
      body,
    };
  },
};

export const dismiss = {
  /**
   * `POST /riskyUsers/dismiss`
   *
   * Dismiss the risk of one or more riskyUser objects. This action sets the targeted user&#x27;s risk level to none. The maximum count of users to dismiss in one call is 60.
   */
  create: function create(
    body: IEndpoints['POST /riskyUsers/dismiss']['body']
  ): EndpointRequest<IEndpoints['POST /riskyUsers/dismiss']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/riskyUsers/dismiss',
      body,
    };
  },
};

export const history = {
  /**
   * `GET /riskyUsers/{riskyUser-id}/history`
   *
   * Get the risk history of a riskyUser resource.
   */
  get: function get(
    params?: IEndpoints['GET /riskyUsers/{riskyUser-id}/history']['parameters']
  ): EndpointRequest<IEndpoints['GET /riskyUsers/{riskyUser-id}/history']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/riskyUsers/{riskyUser-id}/history',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['riskyUser-id'],
      },
      params,
    };
  },
  /**
   * `POST /riskyUsers/{riskyUser-id}/history`
   *
   */
  create: function create(
    body: IEndpoints['POST /riskyUsers/{riskyUser-id}/history']['body'],
    params?: IEndpoints['POST /riskyUsers/{riskyUser-id}/history']['parameters']
  ): EndpointRequest<IEndpoints['POST /riskyUsers/{riskyUser-id}/history']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/riskyUsers/{riskyUser-id}/history',
      paramDefs: {
        path: ['riskyUser-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /riskyUsers/{riskyUser-id}/history/{riskyUserHistoryItem-id}`
   *
   * Get a riskyUserHistoryItem object of a riskyUser.
   */
  get$1: function get$1(
    params?: IEndpoints['GET /riskyUsers/{riskyUser-id}/history/{riskyUserHistoryItem-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /riskyUsers/{riskyUser-id}/history/{riskyUserHistoryItem-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/riskyUsers/{riskyUser-id}/history/{riskyUserHistoryItem-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['riskyUser-id', 'riskyUserHistoryItem-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /riskyUsers/{riskyUser-id}/history/{riskyUserHistoryItem-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /riskyUsers/{riskyUser-id}/history/{riskyUserHistoryItem-id}']['body'],
    params?: IEndpoints['PATCH /riskyUsers/{riskyUser-id}/history/{riskyUserHistoryItem-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /riskyUsers/{riskyUser-id}/history/{riskyUserHistoryItem-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/riskyUsers/{riskyUser-id}/history/{riskyUserHistoryItem-id}',
      paramDefs: {
        path: ['riskyUser-id', 'riskyUserHistoryItem-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /riskyUsers/{riskyUser-id}/history/{riskyUserHistoryItem-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /riskyUsers/{riskyUser-id}/history/{riskyUserHistoryItem-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /riskyUsers/{riskyUser-id}/history/{riskyUserHistoryItem-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/riskyUsers/{riskyUser-id}/history/{riskyUserHistoryItem-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['riskyUser-id', 'riskyUserHistoryItem-id'],
      },
      params,
    };
  },
};
