import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /admin/people': Operation<'/admin/people', 'get'>;
  'GET /admin/people/itemInsights': Operation<'/admin/people/itemInsights', 'get'>;
  'PATCH /admin/people/itemInsights': Operation<'/admin/people/itemInsights', 'patch'>;
  'DELETE /admin/people/itemInsights': Operation<'/admin/people/itemInsights', 'delete'>;
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
  'GET /admin/people/pronouns': Operation<'/admin/people/pronouns', 'get'>;
  'PATCH /admin/people/pronouns': Operation<'/admin/people/pronouns', 'patch'>;
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
    method: 'get',
    path: '/admin/people',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

export const itemInsights = {
  /**
   * `GET /admin/people/itemInsights`
   *
   * Get the properties of an insightsSettings object to display or return item insights in an organization. To learn how to customize the privacy of item insights in an organization, see Customize item insights privacy in Microsoft Graph.
   */
  list: function list(
    params?: IEndpoints['GET /admin/people/itemInsights']['parameters']
  ): EndpointRequest<IEndpoints['GET /admin/people/itemInsights']['response']> {
    return {
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
   * Update privacy settings to display or return the specified type of insights in an organization. Currently, itemInsights is the only supported type of settings. To learn more about customizing insights privacy for your organization, see Customize item insights privacy in Microsoft Graph.
   */
  update: function update(
    body: IEndpoints['PATCH /admin/people/itemInsights']['body']
  ): EndpointRequest<IEndpoints['PATCH /admin/people/itemInsights']['response']> {
    return {
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
      method: 'delete',
      path: '/admin/people/itemInsights',
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
      method: 'patch',
      path: '/admin/people/pronouns',
      body,
    };
  },
};
