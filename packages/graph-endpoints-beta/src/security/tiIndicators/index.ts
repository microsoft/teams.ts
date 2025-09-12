import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/tiIndicators/{tiIndicator-id}': Operation<
    '/security/tiIndicators/{tiIndicator-id}',
    'delete'
  >;
  'GET /security/tiIndicators': Operation<'/security/tiIndicators', 'get'>;
  'GET /security/tiIndicators/{tiIndicator-id}': Operation<
    '/security/tiIndicators/{tiIndicator-id}',
    'get'
  >;
  'PATCH /security/tiIndicators/{tiIndicator-id}': Operation<
    '/security/tiIndicators/{tiIndicator-id}',
    'patch'
  >;
  'POST /security/tiIndicators': Operation<'/security/tiIndicators', 'post'>;
  'POST /security/tiIndicators/deleteTiIndicators': Operation<
    '/security/tiIndicators/deleteTiIndicators',
    'post'
  >;
  'POST /security/tiIndicators/deleteTiIndicatorsByExternalId': Operation<
    '/security/tiIndicators/deleteTiIndicatorsByExternalId',
    'post'
  >;
  'POST /security/tiIndicators/submitTiIndicators': Operation<
    '/security/tiIndicators/submitTiIndicators',
    'post'
  >;
  'POST /security/tiIndicators/updateTiIndicators': Operation<
    '/security/tiIndicators/updateTiIndicators',
    'post'
  >;
}

/**
 * `DELETE /security/tiIndicators/{tiIndicator-id}`
 *
 * Delete a tiIndicator object.
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /security/tiIndicators/{tiIndicator-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /security/tiIndicators/{tiIndicator-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/security/tiIndicators/{tiIndicator-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['tiIndicator-id'],
    },
    params,
  };
}

/**
 * `GET /security/tiIndicators`
 *
 * Retrieve a list of tiIndicator objects.
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /security/tiIndicators']['parameters']
): EndpointRequest<IEndpoints['GET /security/tiIndicators']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/tiIndicators',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /security/tiIndicators/{tiIndicator-id}`
 *
 * Retrieve the properties and relationships of a tiIndicator object.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /security/tiIndicators/{tiIndicator-id}']['parameters']
): EndpointRequest<IEndpoints['GET /security/tiIndicators/{tiIndicator-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/tiIndicators/{tiIndicator-id}',
    paramDefs: {
      path: ['tiIndicator-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /security/tiIndicators/{tiIndicator-id}`
 *
 * Update the properties of a tiIndicator object.
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /security/tiIndicators/{tiIndicator-id}']['body'],
  params?: IEndpoints['PATCH /security/tiIndicators/{tiIndicator-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /security/tiIndicators/{tiIndicator-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/security/tiIndicators/{tiIndicator-id}',
    paramDefs: {
      path: ['tiIndicator-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /security/tiIndicators`
 *
 * Create a new tiIndicator object.
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /security/tiIndicators']['body']
): EndpointRequest<IEndpoints['POST /security/tiIndicators']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/security/tiIndicators',
    body,
  };
}

export const deleteTiIndicators = {
  /**
   * `POST /security/tiIndicators/deleteTiIndicators`
   *
   * Delete multiple threat intelligence (TI) indicators in one request instead of multiple requests.
   * @deprecated
   */
  create: function create(
    body: IEndpoints['POST /security/tiIndicators/deleteTiIndicators']['body']
  ): EndpointRequest<IEndpoints['POST /security/tiIndicators/deleteTiIndicators']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/security/tiIndicators/deleteTiIndicators',
      body,
    };
  },
};

export const deleteTiIndicatorsByExternalId = {
  /**
   * `POST /security/tiIndicators/deleteTiIndicatorsByExternalId`
   *
   * Delete multiple threat intelligence (TI) indicators in one request instead of multiple requests, when the request contains external IDs instead of IDs.
   * @deprecated
   */
  create: function create(
    body: IEndpoints['POST /security/tiIndicators/deleteTiIndicatorsByExternalId']['body']
  ): EndpointRequest<
    IEndpoints['POST /security/tiIndicators/deleteTiIndicatorsByExternalId']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/security/tiIndicators/deleteTiIndicatorsByExternalId',
      body,
    };
  },
};

export const submitTiIndicators = {
  /**
   * `POST /security/tiIndicators/submitTiIndicators`
   *
   * Upload multiple threat intelligence (TI) indicators in one request instead of multiple requests.
   * @deprecated
   */
  create: function create(
    body: IEndpoints['POST /security/tiIndicators/submitTiIndicators']['body']
  ): EndpointRequest<IEndpoints['POST /security/tiIndicators/submitTiIndicators']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/security/tiIndicators/submitTiIndicators',
      body,
    };
  },
};

export const updateTiIndicators = {
  /**
   * `POST /security/tiIndicators/updateTiIndicators`
   *
   * Update multiple threat intelligence (TI) indicators in one request instead of multiple requests.
   * @deprecated
   */
  create: function create(
    body: IEndpoints['POST /security/tiIndicators/updateTiIndicators']['body']
  ): EndpointRequest<IEndpoints['POST /security/tiIndicators/updateTiIndicators']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/security/tiIndicators/updateTiIndicators',
      body,
    };
  },
};
