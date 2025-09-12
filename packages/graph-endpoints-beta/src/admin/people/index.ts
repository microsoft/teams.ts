import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /admin/people': Operation<'/admin/people', 'delete'>;
  'GET /admin/people': Operation<'/admin/people', 'get'>;
  'PATCH /admin/people': Operation<'/admin/people', 'patch'>;
  'GET /admin/people/itemInsights': Operation<'/admin/people/itemInsights', 'get'>;
  'PATCH /admin/people/itemInsights': Operation<'/admin/people/itemInsights', 'patch'>;
  'DELETE /admin/people/itemInsights': Operation<'/admin/people/itemInsights', 'delete'>;
  'GET /admin/people/namePronunciation': Operation<'/admin/people/namePronunciation', 'get'>;
  'PATCH /admin/people/namePronunciation': Operation<'/admin/people/namePronunciation', 'patch'>;
  'DELETE /admin/people/namePronunciation': Operation<'/admin/people/namePronunciation', 'delete'>;
  'GET /admin/people/photoUpdateSettings': Operation<'/admin/people/photoUpdateSettings', 'get'>;
  'PATCH /admin/people/photoUpdateSettings': Operation<
    '/admin/people/photoUpdateSettings',
    'patch'
  >;
  'DELETE /admin/people/photoUpdateSettings': Operation<
    '/admin/people/photoUpdateSettings',
    'delete'
  >;
  'GET /admin/people/profileCardProperties': Operation<
    '/admin/people/profileCardProperties',
    'get'
  >;
  'POST /admin/people/profileCardProperties': Operation<
    '/admin/people/profileCardProperties',
    'post'
  >;
  'GET /admin/people/profileCardProperties/{profileCardProperty-id}': Operation<
    '/admin/people/profileCardProperties/{profileCardProperty-id}',
    'get'
  >;
  'PATCH /admin/people/profileCardProperties/{profileCardProperty-id}': Operation<
    '/admin/people/profileCardProperties/{profileCardProperty-id}',
    'patch'
  >;
  'DELETE /admin/people/profileCardProperties/{profileCardProperty-id}': Operation<
    '/admin/people/profileCardProperties/{profileCardProperty-id}',
    'delete'
  >;
  'GET /admin/people/profilePropertySettings': Operation<
    '/admin/people/profilePropertySettings',
    'get'
  >;
  'POST /admin/people/profilePropertySettings': Operation<
    '/admin/people/profilePropertySettings',
    'post'
  >;
  'GET /admin/people/profilePropertySettings/{profilePropertySetting-id}': Operation<
    '/admin/people/profilePropertySettings/{profilePropertySetting-id}',
    'get'
  >;
  'PATCH /admin/people/profilePropertySettings/{profilePropertySetting-id}': Operation<
    '/admin/people/profilePropertySettings/{profilePropertySetting-id}',
    'patch'
  >;
  'DELETE /admin/people/profilePropertySettings/{profilePropertySetting-id}': Operation<
    '/admin/people/profilePropertySettings/{profilePropertySetting-id}',
    'delete'
  >;
  'GET /admin/people/profileSources': Operation<'/admin/people/profileSources', 'get'>;
  'POST /admin/people/profileSources': Operation<'/admin/people/profileSources', 'post'>;
  'GET /admin/people/profileSources/{profileSource-id}': Operation<
    '/admin/people/profileSources/{profileSource-id}',
    'get'
  >;
  'PATCH /admin/people/profileSources/{profileSource-id}': Operation<
    '/admin/people/profileSources/{profileSource-id}',
    'patch'
  >;
  'DELETE /admin/people/profileSources/{profileSource-id}': Operation<
    '/admin/people/profileSources/{profileSource-id}',
    'delete'
  >;
  'GET /admin/people/pronouns': Operation<'/admin/people/pronouns', 'get'>;
  'PATCH /admin/people/pronouns': Operation<'/admin/people/pronouns', 'patch'>;
  'DELETE /admin/people/pronouns': Operation<'/admin/people/pronouns', 'delete'>;
}

/**
 * `DELETE /admin/people`
 *
 */
export function del(
  params?: IEndpoints['DELETE /admin/people']['parameters']
): EndpointRequest<IEndpoints['DELETE /admin/people']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/admin/people',
    paramDefs: {
      header: ['If-Match'],
    },
    params,
  };
}

/**
 * `GET /admin/people`
 *
 * Retrieve the properties and relationships of a peopleAdminSettings object.
 */
export function get(
  params?: IEndpoints['GET /admin/people']['parameters']
): EndpointRequest<IEndpoints['GET /admin/people']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/people',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /admin/people`
 *
 */
export function update(
  body: IEndpoints['PATCH /admin/people']['body']
): EndpointRequest<IEndpoints['PATCH /admin/people']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/admin/people',
    body,
  };
}

export const itemInsights = {
  /**
   * `GET /admin/people/itemInsights`
   *
   * Get the properties of an insightsSettings object for displaying or returning item insights in an organization. To learn how to customize the privacy of item insights in an organization, see Customize item insights privacy in Microsoft Graph.
   */
  list: function list(
    params?: IEndpoints['GET /admin/people/itemInsights']['parameters']
  ): EndpointRequest<IEndpoints['GET /admin/people/itemInsights']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/admin/people/itemInsights',
      paramDefs: {
        query: ['$select', '$expand'],
      },
      params,
    };
  },
  /**
  * `PATCH /admin/people/itemInsights`
  *
  * Update privacy settings to display or return the specified type of insights in an organization. The type of settings can be contact insights, item insights, or people insights. To learn more about customizing insights privacy for your organization, see:
-  Customize item insights privacy 
-  Customize people insights privacy
  */
  update: function update(
    body: IEndpoints['PATCH /admin/people/itemInsights']['body']
  ): EndpointRequest<IEndpoints['PATCH /admin/people/itemInsights']['response']> {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/admin/people/itemInsights',
      body,
    };
  },
  /**
   * `DELETE /admin/people/itemInsights`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /admin/people/itemInsights']['parameters']
  ): EndpointRequest<IEndpoints['DELETE /admin/people/itemInsights']['response']> {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/admin/people/itemInsights',
      paramDefs: {
        header: ['If-Match'],
      },
      params,
    };
  },
};

export const namePronunciation = {
  /**
   * `GET /admin/people/namePronunciation`
   *
   * Read the properties and relationships of a namePronunciationSettings object.
   */
  get: function get(
    params?: IEndpoints['GET /admin/people/namePronunciation']['parameters']
  ): EndpointRequest<IEndpoints['GET /admin/people/namePronunciation']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/admin/people/namePronunciation',
      paramDefs: {
        query: ['$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `PATCH /admin/people/namePronunciation`
   *
   * Update the properties of a namePronunciationSettings object.
   */
  update: function update(
    body: IEndpoints['PATCH /admin/people/namePronunciation']['body']
  ): EndpointRequest<IEndpoints['PATCH /admin/people/namePronunciation']['response']> {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/admin/people/namePronunciation',
      body,
    };
  },
  /**
   * `DELETE /admin/people/namePronunciation`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /admin/people/namePronunciation']['parameters']
  ): EndpointRequest<IEndpoints['DELETE /admin/people/namePronunciation']['response']> {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/admin/people/namePronunciation',
      paramDefs: {
        header: ['If-Match'],
      },
      params,
    };
  },
};

export const photoUpdateSettings = {
  /**
   * `GET /admin/people/photoUpdateSettings`
   *
   * Read the properties and relationships of a photoUpdateSettings object.
   */
  list: function list(
    params?: IEndpoints['GET /admin/people/photoUpdateSettings']['parameters']
  ): EndpointRequest<IEndpoints['GET /admin/people/photoUpdateSettings']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/admin/people/photoUpdateSettings',
      paramDefs: {
        query: ['$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `PATCH /admin/people/photoUpdateSettings`
   *
   * Update the properties of a photoUpdateSettings object.
   */
  update: function update(
    body: IEndpoints['PATCH /admin/people/photoUpdateSettings']['body']
  ): EndpointRequest<IEndpoints['PATCH /admin/people/photoUpdateSettings']['response']> {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/admin/people/photoUpdateSettings',
      body,
    };
  },
  /**
   * `DELETE /admin/people/photoUpdateSettings`
   *
   * Delete a photoUpdateSettings object.
   */
  del: function del(
    params?: IEndpoints['DELETE /admin/people/photoUpdateSettings']['parameters']
  ): EndpointRequest<IEndpoints['DELETE /admin/people/photoUpdateSettings']['response']> {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/admin/people/photoUpdateSettings',
      paramDefs: {
        header: ['If-Match'],
      },
      params,
    };
  },
};

export const profileCardProperties = {
  /**
   * `GET /admin/people/profileCardProperties`
   *
   * Get a collection of profileCardProperty resources for an organization. Each resource is identified by its directoryPropertyName property.
   */
  list: function list(
    params?: IEndpoints['GET /admin/people/profileCardProperties']['parameters']
  ): EndpointRequest<IEndpoints['GET /admin/people/profileCardProperties']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/admin/people/profileCardProperties',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /admin/people/profileCardProperties`
   *
   * Create a new profileCardProperty for an organization. The new property is identified by its directoryPropertyName property. For more information about how to add properties to the profile card for an organization, see Add or remove custom attributes on a profile card using the profile card API.
   */
  create: function create(
    body: IEndpoints['POST /admin/people/profileCardProperties']['body']
  ): EndpointRequest<IEndpoints['POST /admin/people/profileCardProperties']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/admin/people/profileCardProperties',
      body,
    };
  },
  /**
   * `GET /admin/people/profileCardProperties/{profileCardProperty-id}`
   *
   * Retrieve the properties of a profileCardProperty entity. The profileCardProperty is identified by its directoryPropertyName property.
   */
  get: function get(
    params?: IEndpoints['GET /admin/people/profileCardProperties/{profileCardProperty-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /admin/people/profileCardProperties/{profileCardProperty-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/admin/people/profileCardProperties/{profileCardProperty-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['profileCardProperty-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /admin/people/profileCardProperties/{profileCardProperty-id}`
   *
   * Update the properties of a profileCardProperty object, identified by its directoryPropertyName property.
   */
  update: function update(
    body: IEndpoints['PATCH /admin/people/profileCardProperties/{profileCardProperty-id}']['body'],
    params?: IEndpoints['PATCH /admin/people/profileCardProperties/{profileCardProperty-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /admin/people/profileCardProperties/{profileCardProperty-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/admin/people/profileCardProperties/{profileCardProperty-id}',
      paramDefs: {
        path: ['profileCardProperty-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /admin/people/profileCardProperties/{profileCardProperty-id}`
   *
   * Delete the profileCardProperty object specified by its directoryPropertyName from the organization&#x27;s profile card, and remove any localized customizations for that property.
   */
  del: function del(
    params?: IEndpoints['DELETE /admin/people/profileCardProperties/{profileCardProperty-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /admin/people/profileCardProperties/{profileCardProperty-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/admin/people/profileCardProperties/{profileCardProperty-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['profileCardProperty-id'],
      },
      params,
    };
  },
};

export const profilePropertySettings = {
  /**
   * `GET /admin/people/profilePropertySettings`
   *
   * Get a collection of profilePropertySetting objects that define the configuration for user profile properties in an organization. The id property identifies each resource object uniquely.
   */
  list: function list(
    params?: IEndpoints['GET /admin/people/profilePropertySettings']['parameters']
  ): EndpointRequest<IEndpoints['GET /admin/people/profilePropertySettings']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/admin/people/profilePropertySettings',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /admin/people/profilePropertySettings`
   *
   * Create a new profilePropertySetting object.
   */
  create: function create(
    body: IEndpoints['POST /admin/people/profilePropertySettings']['body']
  ): EndpointRequest<IEndpoints['POST /admin/people/profilePropertySettings']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/admin/people/profilePropertySettings',
      body,
    };
  },
  /**
   * `GET /admin/people/profilePropertySettings/{profilePropertySetting-id}`
   *
   * Read the properties and relationships of a profilePropertySetting object.
   */
  get: function get(
    params?: IEndpoints['GET /admin/people/profilePropertySettings/{profilePropertySetting-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /admin/people/profilePropertySettings/{profilePropertySetting-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/admin/people/profilePropertySettings/{profilePropertySetting-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['profilePropertySetting-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /admin/people/profilePropertySettings/{profilePropertySetting-id}`
   *
   * Update the properties of a profilePropertySetting object.
   */
  update: function update(
    body: IEndpoints['PATCH /admin/people/profilePropertySettings/{profilePropertySetting-id}']['body'],
    params?: IEndpoints['PATCH /admin/people/profilePropertySettings/{profilePropertySetting-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /admin/people/profilePropertySettings/{profilePropertySetting-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/admin/people/profilePropertySettings/{profilePropertySetting-id}',
      paramDefs: {
        path: ['profilePropertySetting-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /admin/people/profilePropertySettings/{profilePropertySetting-id}`
   *
   * Delete a profilePropertySetting object.
   */
  del: function del(
    params?: IEndpoints['DELETE /admin/people/profilePropertySettings/{profilePropertySetting-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /admin/people/profilePropertySettings/{profilePropertySetting-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/admin/people/profilePropertySettings/{profilePropertySetting-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['profilePropertySetting-id'],
      },
      params,
    };
  },
};

export const profileSources = {
  /**
   * `GET /admin/people/profileSources`
   *
   * Get a list of the profileSource objects and their properties, which represent both external data sources and out-of-the-box Microsoft data sources configured for user profiles in an organization.
   */
  list: function list(
    params?: IEndpoints['GET /admin/people/profileSources']['parameters']
  ): EndpointRequest<IEndpoints['GET /admin/people/profileSources']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/admin/people/profileSources',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /admin/people/profileSources`
   *
   * Create a new profileSource object.
   */
  create: function create(
    body: IEndpoints['POST /admin/people/profileSources']['body']
  ): EndpointRequest<IEndpoints['POST /admin/people/profileSources']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/admin/people/profileSources',
      body,
    };
  },
  /**
   * `GET /admin/people/profileSources/{profileSource-id}`
   *
   * A collection of profile source settings configured by an administrator in an organization.
   */
  get: function get(
    params?: IEndpoints['GET /admin/people/profileSources/{profileSource-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /admin/people/profileSources/{profileSource-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/admin/people/profileSources/{profileSource-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['profileSource-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /admin/people/profileSources/{profileSource-id}`
   *
   * Update the properties of a profileSource object.
   */
  update: function update(
    body: IEndpoints['PATCH /admin/people/profileSources/{profileSource-id}']['body'],
    params?: IEndpoints['PATCH /admin/people/profileSources/{profileSource-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /admin/people/profileSources/{profileSource-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/admin/people/profileSources/{profileSource-id}',
      paramDefs: {
        path: ['profileSource-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /admin/people/profileSources/{profileSource-id}`
   *
   * Delete a profileSource object.
   */
  del: function del(
    params?: IEndpoints['DELETE /admin/people/profileSources/{profileSource-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /admin/people/profileSources/{profileSource-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/admin/people/profileSources/{profileSource-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['profileSource-id'],
      },
      params,
    };
  },
};

export const pronouns = {
  /**
   * `GET /admin/people/pronouns`
   *
   * Get the properties of the pronounsSettings resource for an organization.  For more information on settings to manage pronouns support, see Manage pronouns settings for an organization using the Microsoft Graph API.
   */
  list: function list(
    params?: IEndpoints['GET /admin/people/pronouns']['parameters']
  ): EndpointRequest<IEndpoints['GET /admin/people/pronouns']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/admin/people/pronouns',
      paramDefs: {
        query: ['$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `PATCH /admin/people/pronouns`
   *
   * Update the properties of a pronounsSettings object in an organization. For more information on settings to manage pronouns support, see Manage pronouns settings for an organization using the Microsoft Graph API.
   */
  update: function update(
    body: IEndpoints['PATCH /admin/people/pronouns']['body']
  ): EndpointRequest<IEndpoints['PATCH /admin/people/pronouns']['response']> {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/admin/people/pronouns',
      body,
    };
  },
  /**
   * `DELETE /admin/people/pronouns`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /admin/people/pronouns']['parameters']
  ): EndpointRequest<IEndpoints['DELETE /admin/people/pronouns']['response']> {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/admin/people/pronouns',
      paramDefs: {
        header: ['If-Match'],
      },
      params,
    };
  },
};
