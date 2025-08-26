import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/connectorGroups/{connectorGroup-id}/applications/{application-id}/logo': Operation<
    '/onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/connectorGroups/{connectorGroup-id}/applications/{application-id}/logo',
    'delete'
  >;
  'GET /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/connectorGroups/{connectorGroup-id}/applications/{application-id}/logo': Operation<
    '/onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/connectorGroups/{connectorGroup-id}/applications/{application-id}/logo',
    'get'
  >;
  'PUT /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/connectorGroups/{connectorGroup-id}/applications/{application-id}/logo': Operation<
    '/onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/connectorGroups/{connectorGroup-id}/applications/{application-id}/logo',
    'put'
  >;
}

/**
 * `DELETE /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/connectorGroups/{connectorGroup-id}/applications/{application-id}/logo`
 *
 * The main logo for the application. Not nullable.
 */
export function del(
  params?: IEndpoints['DELETE /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/connectorGroups/{connectorGroup-id}/applications/{application-id}/logo']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/connectorGroups/{connectorGroup-id}/applications/{application-id}/logo']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/connectorGroups/{connectorGroup-id}/applications/{application-id}/logo',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'onPremisesPublishingProfile-id', in: 'path' },
      { name: 'connectorGroup-id', in: 'path' },
      { name: 'application-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/connectorGroups/{connectorGroup-id}/applications/{application-id}/logo`
 *
 * The main logo for the application. Not nullable.
 */
export function get(
  params?: IEndpoints['GET /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/connectorGroups/{connectorGroup-id}/applications/{application-id}/logo']['parameters']
): EndpointRequest<
  IEndpoints['GET /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/connectorGroups/{connectorGroup-id}/applications/{application-id}/logo']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/connectorGroups/{connectorGroup-id}/applications/{application-id}/logo',
    paramDefs: [
      { name: 'onPremisesPublishingProfile-id', in: 'path' },
      { name: 'connectorGroup-id', in: 'path' },
      { name: 'application-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PUT /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/connectorGroups/{connectorGroup-id}/applications/{application-id}/logo`
 *
 * The main logo for the application. Not nullable.
 */
export function set(
  body: IEndpoints['PUT /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/connectorGroups/{connectorGroup-id}/applications/{application-id}/logo']['body'],
  params?: IEndpoints['PUT /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/connectorGroups/{connectorGroup-id}/applications/{application-id}/logo']['parameters']
): EndpointRequest<
  IEndpoints['PUT /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/connectorGroups/{connectorGroup-id}/applications/{application-id}/logo']['response']
> {
  return {
    ver: 'beta',
    method: 'put',
    path: '/onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/connectorGroups/{connectorGroup-id}/applications/{application-id}/logo',
    paramDefs: [
      { name: 'onPremisesPublishingProfile-id', in: 'path' },
      { name: 'connectorGroup-id', in: 'path' },
      { name: 'application-id', in: 'path' },
    ],
    params,
    body,
  };
}
