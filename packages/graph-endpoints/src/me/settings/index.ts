export * as storage from './storage';
export * as windows from './windows';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/settings': Operation<'/me/settings', 'delete'>;
  'GET /me/settings': Operation<'/me/settings', 'get'>;
  'PATCH /me/settings': Operation<'/me/settings', 'patch'>;
  'GET /me/settings/itemInsights': Operation<'/me/settings/itemInsights', 'get'>;
  'PATCH /me/settings/itemInsights': Operation<'/me/settings/itemInsights', 'patch'>;
  'DELETE /me/settings/itemInsights': Operation<'/me/settings/itemInsights', 'delete'>;
  'GET /me/settings/shiftPreferences': Operation<'/me/settings/shiftPreferences', 'get'>;
  'PATCH /me/settings/shiftPreferences': Operation<'/me/settings/shiftPreferences', 'patch'>;
  'DELETE /me/settings/shiftPreferences': Operation<'/me/settings/shiftPreferences', 'delete'>;
}

/**
 * `DELETE /me/settings`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/settings']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/settings']['response']> {
  return {
    method: 'delete',
    path: '/me/settings',
    paramDefs: {
      header: ['If-Match'],
    },
    params,
  };
}

/**
  * `GET /me/settings`
  *
  * Read the user and organization userSettings object.
To learn how to update the properties of the userSettings object, see update user settings.
  */
export function list(
  params?: IEndpoints['GET /me/settings']['parameters']
): EndpointRequest<IEndpoints['GET /me/settings']['response']> {
  return {
    method: 'get',
    path: '/me/settings',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
  * `PATCH /me/settings`
  *
  * Update the properties of the userSettings object. 
Users in the same organization can have different settings based on their preference or on the organization policies. 
To get the user current settings, see current user settings. 
  */
export function update(
  body: IEndpoints['PATCH /me/settings']['body']
): EndpointRequest<IEndpoints['PATCH /me/settings']['response']> {
  return {
    method: 'patch',
    path: '/me/settings',
    body,
  };
}

export const itemInsights = {
  /**
   * `GET /me/settings/itemInsights`
   *
   * Get the user-customizable privacy settings for itemInsights and meeting hours insights.
   */
  list: function list(
    params?: IEndpoints['GET /me/settings/itemInsights']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/settings/itemInsights']['response']> {
    return {
      method: 'get',
      path: '/me/settings/itemInsights',
      paramDefs: {
        query: ['$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `PATCH /me/settings/itemInsights`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /me/settings/itemInsights']['body']
  ): EndpointRequest<IEndpoints['PATCH /me/settings/itemInsights']['response']> {
    return {
      method: 'patch',
      path: '/me/settings/itemInsights',
      body,
    };
  },
  /**
   * `DELETE /me/settings/itemInsights`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /me/settings/itemInsights']['parameters']
  ): EndpointRequest<IEndpoints['DELETE /me/settings/itemInsights']['response']> {
    return {
      method: 'delete',
      path: '/me/settings/itemInsights',
      paramDefs: {
        header: ['If-Match'],
      },
      params,
    };
  },
};

export const shiftPreferences = {
  /**
   * `GET /me/settings/shiftPreferences`
   *
   */
  list: function list(
    params?: IEndpoints['GET /me/settings/shiftPreferences']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/settings/shiftPreferences']['response']> {
    return {
      method: 'get',
      path: '/me/settings/shiftPreferences',
      paramDefs: {
        query: ['$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `PATCH /me/settings/shiftPreferences`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /me/settings/shiftPreferences']['body']
  ): EndpointRequest<IEndpoints['PATCH /me/settings/shiftPreferences']['response']> {
    return {
      method: 'patch',
      path: '/me/settings/shiftPreferences',
      body,
    };
  },
  /**
   * `DELETE /me/settings/shiftPreferences`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /me/settings/shiftPreferences']['parameters']
  ): EndpointRequest<IEndpoints['DELETE /me/settings/shiftPreferences']['response']> {
    return {
      method: 'delete',
      path: '/me/settings/shiftPreferences',
      paramDefs: {
        header: ['If-Match'],
      },
      params,
    };
  },
};
