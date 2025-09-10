export * as storage from './storage';
export * as windows from './windows';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/settings': Operation<'/users/{user-id}/settings', 'delete'>;
  'GET /users/{user-id}/settings': Operation<'/users/{user-id}/settings', 'get'>;
  'PATCH /users/{user-id}/settings': Operation<'/users/{user-id}/settings', 'patch'>;
  'GET /users/{user-id}/settings/itemInsights': Operation<
    '/users/{user-id}/settings/itemInsights',
    'get'
  >;
  'PATCH /users/{user-id}/settings/itemInsights': Operation<
    '/users/{user-id}/settings/itemInsights',
    'patch'
  >;
  'DELETE /users/{user-id}/settings/itemInsights': Operation<
    '/users/{user-id}/settings/itemInsights',
    'delete'
  >;
  'GET /users/{user-id}/settings/shiftPreferences': Operation<
    '/users/{user-id}/settings/shiftPreferences',
    'get'
  >;
  'PATCH /users/{user-id}/settings/shiftPreferences': Operation<
    '/users/{user-id}/settings/shiftPreferences',
    'patch'
  >;
  'DELETE /users/{user-id}/settings/shiftPreferences': Operation<
    '/users/{user-id}/settings/shiftPreferences',
    'delete'
  >;
}

/**
 * `DELETE /users/{user-id}/settings`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/settings']['parameters']
): EndpointRequest<IEndpoints['DELETE /users/{user-id}/settings']['response']> {
  return {
    method: 'delete',
    path: '/users/{user-id}/settings',
    paramDefs: {
      header: ['If-Match'],
      path: ['user-id'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/settings`
 *
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/settings']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/settings']['response']> {
  return {
    method: 'get',
    path: '/users/{user-id}/settings',
    paramDefs: {
      path: ['user-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /users/{user-id}/settings`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/settings']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/settings']['parameters']
): EndpointRequest<IEndpoints['PATCH /users/{user-id}/settings']['response']> {
  return {
    method: 'patch',
    path: '/users/{user-id}/settings',
    paramDefs: {
      path: ['user-id'],
    },
    params,
    body,
  };
}

export const itemInsights = {
  /**
   * `GET /users/{user-id}/settings/itemInsights`
   *
   * The user&#x27;s settings for the visibility of meeting hour insights, and insights derived between a user and other items in Microsoft 365, such as documents or sites. Get userInsightsSettings through this navigation property.
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/settings/itemInsights']['parameters']
  ): EndpointRequest<IEndpoints['GET /users/{user-id}/settings/itemInsights']['response']> {
    return {
      method: 'get',
      path: '/users/{user-id}/settings/itemInsights',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /users/{user-id}/settings/itemInsights`
   *
   * Update the privacy settings for itemInsights and meeting hours insights of a user.
   */
  update: function update(
    body: IEndpoints['PATCH /users/{user-id}/settings/itemInsights']['body'],
    params?: IEndpoints['PATCH /users/{user-id}/settings/itemInsights']['parameters']
  ): EndpointRequest<IEndpoints['PATCH /users/{user-id}/settings/itemInsights']['response']> {
    return {
      method: 'patch',
      path: '/users/{user-id}/settings/itemInsights',
      paramDefs: {
        path: ['user-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /users/{user-id}/settings/itemInsights`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /users/{user-id}/settings/itemInsights']['parameters']
  ): EndpointRequest<IEndpoints['DELETE /users/{user-id}/settings/itemInsights']['response']> {
    return {
      method: 'delete',
      path: '/users/{user-id}/settings/itemInsights',
      paramDefs: {
        header: ['If-Match'],
        path: ['user-id'],
      },
      params,
    };
  },
};

export const shiftPreferences = {
  /**
   * `GET /users/{user-id}/settings/shiftPreferences`
   *
   * Retrieve the properties and relationships of a shiftPreferences object by ID.
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/settings/shiftPreferences']['parameters']
  ): EndpointRequest<IEndpoints['GET /users/{user-id}/settings/shiftPreferences']['response']> {
    return {
      method: 'get',
      path: '/users/{user-id}/settings/shiftPreferences',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /users/{user-id}/settings/shiftPreferences`
   *
   * Update the properties and relationships of a shiftPreferences object.
   */
  update: function update(
    body: IEndpoints['PATCH /users/{user-id}/settings/shiftPreferences']['body'],
    params?: IEndpoints['PATCH /users/{user-id}/settings/shiftPreferences']['parameters']
  ): EndpointRequest<IEndpoints['PATCH /users/{user-id}/settings/shiftPreferences']['response']> {
    return {
      method: 'patch',
      path: '/users/{user-id}/settings/shiftPreferences',
      paramDefs: {
        path: ['user-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /users/{user-id}/settings/shiftPreferences`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /users/{user-id}/settings/shiftPreferences']['parameters']
  ): EndpointRequest<IEndpoints['DELETE /users/{user-id}/settings/shiftPreferences']['response']> {
    return {
      method: 'delete',
      path: '/users/{user-id}/settings/shiftPreferences',
      paramDefs: {
        header: ['If-Match'],
        path: ['user-id'],
      },
      params,
    };
  },
};
