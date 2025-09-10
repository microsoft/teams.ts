import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /identity/b2cUserFlows/{b2cIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}': Operation<
    '/identity/b2cUserFlows/{b2cIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}',
    'delete'
  >;
  'GET /identity/b2cUserFlows/{b2cIdentityUserFlow-id}/languages': Operation<
    '/identity/b2cUserFlows/{b2cIdentityUserFlow-id}/languages',
    'get'
  >;
  'GET /identity/b2cUserFlows/{b2cIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}': Operation<
    '/identity/b2cUserFlows/{b2cIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}',
    'get'
  >;
  'PATCH /identity/b2cUserFlows/{b2cIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}': Operation<
    '/identity/b2cUserFlows/{b2cIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}',
    'patch'
  >;
  'POST /identity/b2cUserFlows/{b2cIdentityUserFlow-id}/languages': Operation<
    '/identity/b2cUserFlows/{b2cIdentityUserFlow-id}/languages',
    'post'
  >;
  'GET /identity/b2cUserFlows/{b2cIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}/defaultPages': Operation<
    '/identity/b2cUserFlows/{b2cIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}/defaultPages',
    'get'
  >;
  'POST /identity/b2cUserFlows/{b2cIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}/defaultPages': Operation<
    '/identity/b2cUserFlows/{b2cIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}/defaultPages',
    'post'
  >;
  'GET /identity/b2cUserFlows/{b2cIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}/defaultPages/{userFlowLanguagePage-id}': Operation<
    '/identity/b2cUserFlows/{b2cIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}/defaultPages/{userFlowLanguagePage-id}',
    'get'
  >;
  'PATCH /identity/b2cUserFlows/{b2cIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}/defaultPages/{userFlowLanguagePage-id}': Operation<
    '/identity/b2cUserFlows/{b2cIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}/defaultPages/{userFlowLanguagePage-id}',
    'patch'
  >;
  'DELETE /identity/b2cUserFlows/{b2cIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}/defaultPages/{userFlowLanguagePage-id}': Operation<
    '/identity/b2cUserFlows/{b2cIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}/defaultPages/{userFlowLanguagePage-id}',
    'delete'
  >;
  'GET /identity/b2cUserFlows/{b2cIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}/overridesPages': Operation<
    '/identity/b2cUserFlows/{b2cIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}/overridesPages',
    'get'
  >;
  'POST /identity/b2cUserFlows/{b2cIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}/overridesPages': Operation<
    '/identity/b2cUserFlows/{b2cIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}/overridesPages',
    'post'
  >;
  'GET /identity/b2cUserFlows/{b2cIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}/overridesPages/{userFlowLanguagePage-id}': Operation<
    '/identity/b2cUserFlows/{b2cIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}/overridesPages/{userFlowLanguagePage-id}',
    'get'
  >;
  'PATCH /identity/b2cUserFlows/{b2cIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}/overridesPages/{userFlowLanguagePage-id}': Operation<
    '/identity/b2cUserFlows/{b2cIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}/overridesPages/{userFlowLanguagePage-id}',
    'patch'
  >;
  'DELETE /identity/b2cUserFlows/{b2cIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}/overridesPages/{userFlowLanguagePage-id}': Operation<
    '/identity/b2cUserFlows/{b2cIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}/overridesPages/{userFlowLanguagePage-id}',
    'delete'
  >;
}

/**
 * `DELETE /identity/b2cUserFlows/{b2cIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}`
 *
 * Deletes a userFlowLanguageConfiguration object from a Azure AD B2C user flow. Note: You cannot delete languages from an Microsoft Entra user flow.
 */
export function del(
  params?: IEndpoints['DELETE /identity/b2cUserFlows/{b2cIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /identity/b2cUserFlows/{b2cIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/identity/b2cUserFlows/{b2cIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['b2cIdentityUserFlow-id', 'userFlowLanguageConfiguration-id'],
    },
    params,
  };
}

/**
 * `GET /identity/b2cUserFlows/{b2cIdentityUserFlow-id}/languages`
 *
 * Retrieve a list of languages supported for customization in an Azure AD B2C user flow. Note: To retrieve a list of languages supported for customization, you must first enable language customization on your Azure AD B2C user flow. For more information, see Update b2cIdentityUserFlow.
 */
export function list(
  params?: IEndpoints['GET /identity/b2cUserFlows/{b2cIdentityUserFlow-id}/languages']['parameters']
): EndpointRequest<
  IEndpoints['GET /identity/b2cUserFlows/{b2cIdentityUserFlow-id}/languages']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identity/b2cUserFlows/{b2cIdentityUserFlow-id}/languages',
    paramDefs: {
      path: ['b2cIdentityUserFlow-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /identity/b2cUserFlows/{b2cIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}`
 *
 * Read the properties and relationships of a userFlowLanguageConfiguration object. These objects represent a language available in a user flow. Note: To retrieve a language supported for customization, you must first enable language customization on your Azure AD B2C user flow. For more information, see Update b2cIdentityUserFlow. Language customization is enabled by default in Microsoft Entra user flows.
 */
export function get(
  params?: IEndpoints['GET /identity/b2cUserFlows/{b2cIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /identity/b2cUserFlows/{b2cIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identity/b2cUserFlows/{b2cIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}',
    paramDefs: {
      path: ['b2cIdentityUserFlow-id', 'userFlowLanguageConfiguration-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /identity/b2cUserFlows/{b2cIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}`
 *
 * This method is used to create or update a custom language in an Azure AD B2C user flow. Note: You must enable language customization in the Azure AD B2C user flow before you can create a custom language. For more information, see Update b2cIdentityUserFlow.
 */
export function update(
  body: IEndpoints['PATCH /identity/b2cUserFlows/{b2cIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}']['body'],
  params?: IEndpoints['PATCH /identity/b2cUserFlows/{b2cIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /identity/b2cUserFlows/{b2cIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/identity/b2cUserFlows/{b2cIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}',
    paramDefs: {
      path: ['b2cIdentityUserFlow-id', 'userFlowLanguageConfiguration-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /identity/b2cUserFlows/{b2cIdentityUserFlow-id}/languages`
 *
 */
export function create(
  body: IEndpoints['POST /identity/b2cUserFlows/{b2cIdentityUserFlow-id}/languages']['body'],
  params?: IEndpoints['POST /identity/b2cUserFlows/{b2cIdentityUserFlow-id}/languages']['parameters']
): EndpointRequest<
  IEndpoints['POST /identity/b2cUserFlows/{b2cIdentityUserFlow-id}/languages']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/identity/b2cUserFlows/{b2cIdentityUserFlow-id}/languages',
    paramDefs: {
      path: ['b2cIdentityUserFlow-id'],
    },
    params,
    body,
  };
}

export const defaultPages = {
  /**
   * `GET /identity/b2cUserFlows/{b2cIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}/defaultPages`
   *
   * Get the userFlowLanguagePage resources from the defaultPages navigation property. These contain the values shown to the user in a default user journey of a user flow.
   */
  list: function list(
    params?: IEndpoints['GET /identity/b2cUserFlows/{b2cIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}/defaultPages']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identity/b2cUserFlows/{b2cIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}/defaultPages']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/identity/b2cUserFlows/{b2cIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}/defaultPages',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['b2cIdentityUserFlow-id', 'userFlowLanguageConfiguration-id'],
      },
      params,
    };
  },
  /**
   * `POST /identity/b2cUserFlows/{b2cIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}/defaultPages`
   *
   */
  create: function create(
    body: IEndpoints['POST /identity/b2cUserFlows/{b2cIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}/defaultPages']['body'],
    params?: IEndpoints['POST /identity/b2cUserFlows/{b2cIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}/defaultPages']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /identity/b2cUserFlows/{b2cIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}/defaultPages']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/identity/b2cUserFlows/{b2cIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}/defaultPages',
      paramDefs: {
        path: ['b2cIdentityUserFlow-id', 'userFlowLanguageConfiguration-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /identity/b2cUserFlows/{b2cIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}/defaultPages/{userFlowLanguagePage-id}`
   *
   * Collection of pages with the default content to display in a user flow for a specified language. This collection doesn&#x27;t allow any kind of modification.
   */
  get: function get(
    params?: IEndpoints['GET /identity/b2cUserFlows/{b2cIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}/defaultPages/{userFlowLanguagePage-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identity/b2cUserFlows/{b2cIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}/defaultPages/{userFlowLanguagePage-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/identity/b2cUserFlows/{b2cIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}/defaultPages/{userFlowLanguagePage-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: [
          'b2cIdentityUserFlow-id',
          'userFlowLanguageConfiguration-id',
          'userFlowLanguagePage-id',
        ],
      },
      params,
    };
  },
  /**
   * `PATCH /identity/b2cUserFlows/{b2cIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}/defaultPages/{userFlowLanguagePage-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /identity/b2cUserFlows/{b2cIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}/defaultPages/{userFlowLanguagePage-id}']['body'],
    params?: IEndpoints['PATCH /identity/b2cUserFlows/{b2cIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}/defaultPages/{userFlowLanguagePage-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /identity/b2cUserFlows/{b2cIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}/defaultPages/{userFlowLanguagePage-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/identity/b2cUserFlows/{b2cIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}/defaultPages/{userFlowLanguagePage-id}',
      paramDefs: {
        path: [
          'b2cIdentityUserFlow-id',
          'userFlowLanguageConfiguration-id',
          'userFlowLanguagePage-id',
        ],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /identity/b2cUserFlows/{b2cIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}/defaultPages/{userFlowLanguagePage-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /identity/b2cUserFlows/{b2cIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}/defaultPages/{userFlowLanguagePage-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /identity/b2cUserFlows/{b2cIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}/defaultPages/{userFlowLanguagePage-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/identity/b2cUserFlows/{b2cIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}/defaultPages/{userFlowLanguagePage-id}',
      paramDefs: {
        header: ['If-Match'],
        path: [
          'b2cIdentityUserFlow-id',
          'userFlowLanguageConfiguration-id',
          'userFlowLanguagePage-id',
        ],
      },
      params,
    };
  },
};

export const overridesPages = {
  /**
   * `GET /identity/b2cUserFlows/{b2cIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}/overridesPages`
   *
   * Get the userFlowLanguagePage resources from the overridesPages navigation property. These pages are used to customize the values shown to the user during a user journey in a user flow.
   */
  list: function list(
    params?: IEndpoints['GET /identity/b2cUserFlows/{b2cIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}/overridesPages']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identity/b2cUserFlows/{b2cIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}/overridesPages']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/identity/b2cUserFlows/{b2cIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}/overridesPages',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['b2cIdentityUserFlow-id', 'userFlowLanguageConfiguration-id'],
      },
      params,
    };
  },
  /**
   * `POST /identity/b2cUserFlows/{b2cIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}/overridesPages`
   *
   */
  create: function create(
    body: IEndpoints['POST /identity/b2cUserFlows/{b2cIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}/overridesPages']['body'],
    params?: IEndpoints['POST /identity/b2cUserFlows/{b2cIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}/overridesPages']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /identity/b2cUserFlows/{b2cIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}/overridesPages']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/identity/b2cUserFlows/{b2cIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}/overridesPages',
      paramDefs: {
        path: ['b2cIdentityUserFlow-id', 'userFlowLanguageConfiguration-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /identity/b2cUserFlows/{b2cIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}/overridesPages/{userFlowLanguagePage-id}`
   *
   * Collection of pages with the overrides messages to display in a user flow for a specified language. This collection only allows to modify the content of the page, any other modification isn&#x27;t allowed (creation or deletion of pages).
   */
  get: function get(
    params?: IEndpoints['GET /identity/b2cUserFlows/{b2cIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}/overridesPages/{userFlowLanguagePage-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identity/b2cUserFlows/{b2cIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}/overridesPages/{userFlowLanguagePage-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/identity/b2cUserFlows/{b2cIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}/overridesPages/{userFlowLanguagePage-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: [
          'b2cIdentityUserFlow-id',
          'userFlowLanguageConfiguration-id',
          'userFlowLanguagePage-id',
        ],
      },
      params,
    };
  },
  /**
   * `PATCH /identity/b2cUserFlows/{b2cIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}/overridesPages/{userFlowLanguagePage-id}`
   *
   * Update the values in an userFlowLanguagePage object. You may only update the values in an overridesPage, which is used to customize the values shown to a user during a user journey defined by a user flow.
   */
  update: function update(
    body: IEndpoints['PATCH /identity/b2cUserFlows/{b2cIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}/overridesPages/{userFlowLanguagePage-id}']['body'],
    params?: IEndpoints['PATCH /identity/b2cUserFlows/{b2cIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}/overridesPages/{userFlowLanguagePage-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /identity/b2cUserFlows/{b2cIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}/overridesPages/{userFlowLanguagePage-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/identity/b2cUserFlows/{b2cIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}/overridesPages/{userFlowLanguagePage-id}',
      paramDefs: {
        path: [
          'b2cIdentityUserFlow-id',
          'userFlowLanguageConfiguration-id',
          'userFlowLanguagePage-id',
        ],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /identity/b2cUserFlows/{b2cIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}/overridesPages/{userFlowLanguagePage-id}`
   *
   * Delete the values in an userFlowLanguagePage object. You may only delete the values in an overridesPage, which is used to customize the values shown to a user during a user journey defined by a user flow.
   */
  del: function del(
    params?: IEndpoints['DELETE /identity/b2cUserFlows/{b2cIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}/overridesPages/{userFlowLanguagePage-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /identity/b2cUserFlows/{b2cIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}/overridesPages/{userFlowLanguagePage-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/identity/b2cUserFlows/{b2cIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}/overridesPages/{userFlowLanguagePage-id}',
      paramDefs: {
        header: ['If-Match'],
        path: [
          'b2cIdentityUserFlow-id',
          'userFlowLanguageConfiguration-id',
          'userFlowLanguagePage-id',
        ],
      },
      params,
    };
  },
};
