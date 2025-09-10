import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /organization/{organization-id}/settings': Operation<
    '/organization/{organization-id}/settings',
    'delete'
  >;
  'GET /organization/{organization-id}/settings': Operation<
    '/organization/{organization-id}/settings',
    'get'
  >;
  'PATCH /organization/{organization-id}/settings': Operation<
    '/organization/{organization-id}/settings',
    'patch'
  >;
  'GET /organization/{organization-id}/settings/contactInsights': Operation<
    '/organization/{organization-id}/settings/contactInsights',
    'get'
  >;
  'PATCH /organization/{organization-id}/settings/contactInsights': Operation<
    '/organization/{organization-id}/settings/contactInsights',
    'patch'
  >;
  'DELETE /organization/{organization-id}/settings/contactInsights': Operation<
    '/organization/{organization-id}/settings/contactInsights',
    'delete'
  >;
  'GET /organization/{organization-id}/settings/itemInsights': Operation<
    '/organization/{organization-id}/settings/itemInsights',
    'get'
  >;
  'PATCH /organization/{organization-id}/settings/itemInsights': Operation<
    '/organization/{organization-id}/settings/itemInsights',
    'patch'
  >;
  'DELETE /organization/{organization-id}/settings/itemInsights': Operation<
    '/organization/{organization-id}/settings/itemInsights',
    'delete'
  >;
  'GET /organization/{organization-id}/settings/microsoftApplicationDataAccess': Operation<
    '/organization/{organization-id}/settings/microsoftApplicationDataAccess',
    'get'
  >;
  'PATCH /organization/{organization-id}/settings/microsoftApplicationDataAccess': Operation<
    '/organization/{organization-id}/settings/microsoftApplicationDataAccess',
    'patch'
  >;
  'DELETE /organization/{organization-id}/settings/microsoftApplicationDataAccess': Operation<
    '/organization/{organization-id}/settings/microsoftApplicationDataAccess',
    'delete'
  >;
  'GET /organization/{organization-id}/settings/peopleInsights': Operation<
    '/organization/{organization-id}/settings/peopleInsights',
    'get'
  >;
  'PATCH /organization/{organization-id}/settings/peopleInsights': Operation<
    '/organization/{organization-id}/settings/peopleInsights',
    'patch'
  >;
  'DELETE /organization/{organization-id}/settings/peopleInsights': Operation<
    '/organization/{organization-id}/settings/peopleInsights',
    'delete'
  >;
}

/**
 * `DELETE /organization/{organization-id}/settings`
 *
 */
export function del(
  params?: IEndpoints['DELETE /organization/{organization-id}/settings']['parameters']
): EndpointRequest<IEndpoints['DELETE /organization/{organization-id}/settings']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/organization/{organization-id}/settings',
    paramDefs: {
      header: ['If-Match'],
      path: ['organization-id'],
    },
    params,
  };
}

/**
 * `GET /organization/{organization-id}/settings`
 *
 * Retrieve the properties and relationships of organizationSettings object. Nullable.
 */
export function list(
  params?: IEndpoints['GET /organization/{organization-id}/settings']['parameters']
): EndpointRequest<IEndpoints['GET /organization/{organization-id}/settings']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/organization/{organization-id}/settings',
    paramDefs: {
      path: ['organization-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /organization/{organization-id}/settings`
 *
 */
export function update(
  body: IEndpoints['PATCH /organization/{organization-id}/settings']['body'],
  params?: IEndpoints['PATCH /organization/{organization-id}/settings']['parameters']
): EndpointRequest<IEndpoints['PATCH /organization/{organization-id}/settings']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/organization/{organization-id}/settings',
    paramDefs: {
      path: ['organization-id'],
    },
    params,
    body,
  };
}

export const contactInsights = {
  /**
   * `GET /organization/{organization-id}/settings/contactInsights`
   *
   * Get the properties of an insightsSettings object for displaying or returning contact insights in an organization.
   */
  list: function list(
    params?: IEndpoints['GET /organization/{organization-id}/settings/contactInsights']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /organization/{organization-id}/settings/contactInsights']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/organization/{organization-id}/settings/contactInsights',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['organization-id'],
      },
      params,
    };
  },
  /**
  * `PATCH /organization/{organization-id}/settings/contactInsights`
  *
  * Update privacy settings to display or return the specified type of insights in an organization. The type of settings can be contact insights, item insights, or people insights. To learn more about customizing insights privacy for your organization, see:
-  Customize item insights privacy 
-  Customize people insights privacy
  */
  update: function update(
    body: IEndpoints['PATCH /organization/{organization-id}/settings/contactInsights']['body'],
    params?: IEndpoints['PATCH /organization/{organization-id}/settings/contactInsights']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /organization/{organization-id}/settings/contactInsights']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/organization/{organization-id}/settings/contactInsights',
      paramDefs: {
        path: ['organization-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /organization/{organization-id}/settings/contactInsights`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /organization/{organization-id}/settings/contactInsights']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /organization/{organization-id}/settings/contactInsights']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/organization/{organization-id}/settings/contactInsights',
      paramDefs: {
        header: ['If-Match'],
        path: ['organization-id'],
      },
      params,
    };
  },
};

export const itemInsights = {
  /**
   * `GET /organization/{organization-id}/settings/itemInsights`
   *
   * Get the properties of an insightsSettings object for displaying or returning item insights in an organization. To learn how to customize the privacy of item insights in an organization, see Customize item insights privacy.
   * @deprecated
   */
  list: function list(
    params?: IEndpoints['GET /organization/{organization-id}/settings/itemInsights']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /organization/{organization-id}/settings/itemInsights']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/organization/{organization-id}/settings/itemInsights',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['organization-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /organization/{organization-id}/settings/itemInsights`
   *
   * @deprecated
   */
  update: function update(
    body: IEndpoints['PATCH /organization/{organization-id}/settings/itemInsights']['body'],
    params?: IEndpoints['PATCH /organization/{organization-id}/settings/itemInsights']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /organization/{organization-id}/settings/itemInsights']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/organization/{organization-id}/settings/itemInsights',
      paramDefs: {
        path: ['organization-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /organization/{organization-id}/settings/itemInsights`
   *
   * @deprecated
   */
  del: function del(
    params?: IEndpoints['DELETE /organization/{organization-id}/settings/itemInsights']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /organization/{organization-id}/settings/itemInsights']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/organization/{organization-id}/settings/itemInsights',
      paramDefs: {
        header: ['If-Match'],
        path: ['organization-id'],
      },
      params,
    };
  },
};

export const microsoftApplicationDataAccess = {
  /**
   * `GET /organization/{organization-id}/settings/microsoftApplicationDataAccess`
   *
   * Get the settings in a microsoftApplicationDataAccessSettings object that specify access from Microsoft applications to Microsoft 365 user data in an organization.
   */
  list: function list(
    params?: IEndpoints['GET /organization/{organization-id}/settings/microsoftApplicationDataAccess']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /organization/{organization-id}/settings/microsoftApplicationDataAccess']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/organization/{organization-id}/settings/microsoftApplicationDataAccess',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['organization-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /organization/{organization-id}/settings/microsoftApplicationDataAccess`
   *
   * Update the settings in a microsoftApplicationDataAccessSettings object that specify access from Microsoft applications to Microsoft 365 user data in an organization.
   */
  update: function update(
    body: IEndpoints['PATCH /organization/{organization-id}/settings/microsoftApplicationDataAccess']['body'],
    params?: IEndpoints['PATCH /organization/{organization-id}/settings/microsoftApplicationDataAccess']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /organization/{organization-id}/settings/microsoftApplicationDataAccess']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/organization/{organization-id}/settings/microsoftApplicationDataAccess',
      paramDefs: {
        path: ['organization-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /organization/{organization-id}/settings/microsoftApplicationDataAccess`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /organization/{organization-id}/settings/microsoftApplicationDataAccess']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /organization/{organization-id}/settings/microsoftApplicationDataAccess']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/organization/{organization-id}/settings/microsoftApplicationDataAccess',
      paramDefs: {
        header: ['If-Match'],
        path: ['organization-id'],
      },
      params,
    };
  },
};

export const peopleInsights = {
  /**
   * `GET /organization/{organization-id}/settings/peopleInsights`
   *
   * Get the properties of an insightsSettings object for displaying or returning people insights in an organization. To learn how to customize privacy for people insights in an organization, see Customize people insights privacy in Microsoft Graph.
   */
  list: function list(
    params?: IEndpoints['GET /organization/{organization-id}/settings/peopleInsights']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /organization/{organization-id}/settings/peopleInsights']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/organization/{organization-id}/settings/peopleInsights',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['organization-id'],
      },
      params,
    };
  },
  /**
  * `PATCH /organization/{organization-id}/settings/peopleInsights`
  *
  * Update privacy settings to display or return the specified type of insights in an organization. The type of settings can be contact insights, item insights, or people insights. To learn more about customizing insights privacy for your organization, see:
-  Customize item insights privacy 
-  Customize people insights privacy
  */
  update: function update(
    body: IEndpoints['PATCH /organization/{organization-id}/settings/peopleInsights']['body'],
    params?: IEndpoints['PATCH /organization/{organization-id}/settings/peopleInsights']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /organization/{organization-id}/settings/peopleInsights']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/organization/{organization-id}/settings/peopleInsights',
      paramDefs: {
        path: ['organization-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /organization/{organization-id}/settings/peopleInsights`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /organization/{organization-id}/settings/peopleInsights']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /organization/{organization-id}/settings/peopleInsights']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/organization/{organization-id}/settings/peopleInsights',
      paramDefs: {
        header: ['If-Match'],
        path: ['organization-id'],
      },
      params,
    };
  },
};
