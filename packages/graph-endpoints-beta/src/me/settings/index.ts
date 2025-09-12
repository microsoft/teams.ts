export * as storage from './storage';
export * as windows from './windows';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/settings': Operation<'/me/settings', 'delete'>;
  'GET /me/settings': Operation<'/me/settings', 'get'>;
  'PATCH /me/settings': Operation<'/me/settings', 'patch'>;
  'GET /me/settings/contactMergeSuggestions': Operation<
    '/me/settings/contactMergeSuggestions',
    'get'
  >;
  'PATCH /me/settings/contactMergeSuggestions': Operation<
    '/me/settings/contactMergeSuggestions',
    'patch'
  >;
  'DELETE /me/settings/contactMergeSuggestions': Operation<
    '/me/settings/contactMergeSuggestions',
    'delete'
  >;
  'GET /me/settings/exchange': Operation<'/me/settings/exchange', 'get'>;
  'GET /me/settings/itemInsights': Operation<'/me/settings/itemInsights', 'get'>;
  'PATCH /me/settings/itemInsights': Operation<'/me/settings/itemInsights', 'patch'>;
  'DELETE /me/settings/itemInsights': Operation<'/me/settings/itemInsights', 'delete'>;
  'GET /me/settings/regionalAndLanguageSettings': Operation<
    '/me/settings/regionalAndLanguageSettings',
    'get'
  >;
  'PATCH /me/settings/regionalAndLanguageSettings': Operation<
    '/me/settings/regionalAndLanguageSettings',
    'patch'
  >;
  'DELETE /me/settings/regionalAndLanguageSettings': Operation<
    '/me/settings/regionalAndLanguageSettings',
    'delete'
  >;
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
    ver: 'beta',
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
 */
export function list(
  params?: IEndpoints['GET /me/settings']['parameters']
): EndpointRequest<IEndpoints['GET /me/settings']['response']> {
  return {
    ver: 'beta',
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
 */
export function update(
  body: IEndpoints['PATCH /me/settings']['body']
): EndpointRequest<IEndpoints['PATCH /me/settings']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/settings',
    body,
  };
}

export const contactMergeSuggestions = {
  /**
   * `GET /me/settings/contactMergeSuggestions`
   *
   * Read the properties and relationships of a contactMergeSuggestions object.
   */
  list: function list(
    params?: IEndpoints['GET /me/settings/contactMergeSuggestions']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/settings/contactMergeSuggestions']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/settings/contactMergeSuggestions',
      paramDefs: {
        query: ['$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `PATCH /me/settings/contactMergeSuggestions`
   *
   * Update the properties of a contactMergeSuggestions object.
   */
  update: function update(
    body: IEndpoints['PATCH /me/settings/contactMergeSuggestions']['body']
  ): EndpointRequest<IEndpoints['PATCH /me/settings/contactMergeSuggestions']['response']> {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/me/settings/contactMergeSuggestions',
      body,
    };
  },
  /**
   * `DELETE /me/settings/contactMergeSuggestions`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /me/settings/contactMergeSuggestions']['parameters']
  ): EndpointRequest<IEndpoints['DELETE /me/settings/contactMergeSuggestions']['response']> {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/me/settings/contactMergeSuggestions',
      paramDefs: {
        header: ['If-Match'],
      },
      params,
    };
  },
};

export const exchange = {
  /**
   * `GET /me/settings/exchange`
   *
   * The Exchange settings for mailbox discovery.
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /me/settings/exchange']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/settings/exchange']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/settings/exchange',
      paramDefs: {
        query: ['$select', '$expand'],
      },
      params,
    };
  },
};

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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
      method: 'delete',
      path: '/me/settings/itemInsights',
      paramDefs: {
        header: ['If-Match'],
      },
      params,
    };
  },
};

export const regionalAndLanguageSettings = {
  /**
   * `GET /me/settings/regionalAndLanguageSettings`
   *
   * Retrieve the properties of a user&#x27;s regionalAndLanguageSettings.
   */
  list: function list(
    params?: IEndpoints['GET /me/settings/regionalAndLanguageSettings']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/settings/regionalAndLanguageSettings']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/settings/regionalAndLanguageSettings',
      paramDefs: {
        query: ['$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `PATCH /me/settings/regionalAndLanguageSettings`
   *
   * Update some or all of the properties of a regionalAndLanguageSettings object.
   */
  update: function update(
    body: IEndpoints['PATCH /me/settings/regionalAndLanguageSettings']['body']
  ): EndpointRequest<IEndpoints['PATCH /me/settings/regionalAndLanguageSettings']['response']> {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/me/settings/regionalAndLanguageSettings',
      body,
    };
  },
  /**
   * `DELETE /me/settings/regionalAndLanguageSettings`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /me/settings/regionalAndLanguageSettings']['parameters']
  ): EndpointRequest<IEndpoints['DELETE /me/settings/regionalAndLanguageSettings']['response']> {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/me/settings/regionalAndLanguageSettings',
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
   * The shift preferences for the user.
   */
  list: function list(
    params?: IEndpoints['GET /me/settings/shiftPreferences']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/settings/shiftPreferences']['response']> {
    return {
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
      method: 'delete',
      path: '/me/settings/shiftPreferences',
      paramDefs: {
        header: ['If-Match'],
      },
      params,
    };
  },
};
