import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /applicationTemplates': Operation<'/applicationTemplates', 'get'>;
  'GET /applicationTemplates/{applicationTemplate-id}': Operation<
    '/applicationTemplates/{applicationTemplate-id}',
    'get'
  >;
  'POST /applicationTemplates/{applicationTemplate-id}/instantiate': Operation<
    '/applicationTemplates/{applicationTemplate-id}/instantiate',
    'post'
  >;
}

/**
 * `GET /applicationTemplates`
 *
 * Retrieve a list of applicationTemplate objects from the Microsoft Entra application gallery.
 */
export function list(
  params?: IEndpoints['GET /applicationTemplates']['parameters']
): EndpointRequest<IEndpoints['GET /applicationTemplates']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/applicationTemplates',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /applicationTemplates/{applicationTemplate-id}`
 *
 * Retrieve the properties of an applicationTemplate object.
 */
export function get(
  params?: IEndpoints['GET /applicationTemplates/{applicationTemplate-id}']['parameters']
): EndpointRequest<IEndpoints['GET /applicationTemplates/{applicationTemplate-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/applicationTemplates/{applicationTemplate-id}',
    paramDefs: {
      path: ['applicationTemplate-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

export const instantiate = {
  /**
   * `POST /applicationTemplates/{applicationTemplate-id}/instantiate`
   *
   * Add an instance of an application from the Microsoft Entra application gallery into your directory. For non-gallery apps, use an application template with one of the following IDs to configure different single sign-on (SSO) modes like SAML SSO and password-based SSO.
   */
  create: function create(
    body: IEndpoints['POST /applicationTemplates/{applicationTemplate-id}/instantiate']['body'],
    params?: IEndpoints['POST /applicationTemplates/{applicationTemplate-id}/instantiate']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /applicationTemplates/{applicationTemplate-id}/instantiate']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/applicationTemplates/{applicationTemplate-id}/instantiate',
      paramDefs: {
        path: ['applicationTemplate-id'],
      },
      params,
      body,
    };
  },
};
