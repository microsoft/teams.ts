import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/connectorGroups/{connectorGroup-id}/applications': Operation<
    '/onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/connectorGroups/{connectorGroup-id}/applications',
    'get'
  >;
  'GET /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/connectorGroups/{connectorGroup-id}/applications/{application-id}': Operation<
    '/onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/connectorGroups/{connectorGroup-id}/applications/{application-id}',
    'get'
  >;
  'GET /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/connectorGroups/{connectorGroup-id}/applications/{application-id}/logo': Operation<
    '/onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/connectorGroups/{connectorGroup-id}/applications/{application-id}/logo',
    'get'
  >;
  'PUT /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/connectorGroups/{connectorGroup-id}/applications/{application-id}/logo': Operation<
    '/onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/connectorGroups/{connectorGroup-id}/applications/{application-id}/logo',
    'put'
  >;
  'DELETE /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/connectorGroups/{connectorGroup-id}/applications/{application-id}/logo': Operation<
    '/onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/connectorGroups/{connectorGroup-id}/applications/{application-id}/logo',
    'delete'
  >;
}

/**
 * `GET /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/connectorGroups/{connectorGroup-id}/applications`
 *
 */
export function list(
  params?: IEndpoints['GET /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/connectorGroups/{connectorGroup-id}/applications']['parameters']
): EndpointRequest<
  IEndpoints['GET /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/connectorGroups/{connectorGroup-id}/applications']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/connectorGroups/{connectorGroup-id}/applications',
    paramDefs: {
      path: ['onPremisesPublishingProfile-id', 'connectorGroup-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/connectorGroups/{connectorGroup-id}/applications/{application-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/connectorGroups/{connectorGroup-id}/applications/{application-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/connectorGroups/{connectorGroup-id}/applications/{application-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/connectorGroups/{connectorGroup-id}/applications/{application-id}',
    paramDefs: {
      path: ['onPremisesPublishingProfile-id', 'connectorGroup-id', 'application-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

export const logo = {
  /**
   * `GET /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/connectorGroups/{connectorGroup-id}/applications/{application-id}/logo`
   *
   * The main logo for the application. Not nullable.
   */
  get: function get(
    params?: IEndpoints['GET /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/connectorGroups/{connectorGroup-id}/applications/{application-id}/logo']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/connectorGroups/{connectorGroup-id}/applications/{application-id}/logo']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/connectorGroups/{connectorGroup-id}/applications/{application-id}/logo',
      paramDefs: {
        path: ['onPremisesPublishingProfile-id', 'connectorGroup-id', 'application-id'],
      },
      params,
    };
  },
  /**
   * `PUT /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/connectorGroups/{connectorGroup-id}/applications/{application-id}/logo`
   *
   * The main logo for the application. Not nullable.
   */
  set: function set(
    body: IEndpoints['PUT /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/connectorGroups/{connectorGroup-id}/applications/{application-id}/logo']['body'],
    params?: IEndpoints['PUT /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/connectorGroups/{connectorGroup-id}/applications/{application-id}/logo']['parameters']
  ): EndpointRequest<
    IEndpoints['PUT /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/connectorGroups/{connectorGroup-id}/applications/{application-id}/logo']['response']
  > {
    return {
      ver: 'beta',
      method: 'put',
      path: '/onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/connectorGroups/{connectorGroup-id}/applications/{application-id}/logo',
      paramDefs: {
        path: ['onPremisesPublishingProfile-id', 'connectorGroup-id', 'application-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/connectorGroups/{connectorGroup-id}/applications/{application-id}/logo`
   *
   * The main logo for the application. Not nullable.
   */
  del: function del(
    params?: IEndpoints['DELETE /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/connectorGroups/{connectorGroup-id}/applications/{application-id}/logo']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/connectorGroups/{connectorGroup-id}/applications/{application-id}/logo']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/connectorGroups/{connectorGroup-id}/applications/{application-id}/logo',
      paramDefs: {
        header: ['If-Match'],
        path: ['onPremisesPublishingProfile-id', 'connectorGroup-id', 'application-id'],
      },
      params,
    };
  },
};
