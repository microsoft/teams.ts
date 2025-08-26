export * as applications from './applications';
export * as members from './members';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/connectorGroups/{connectorGroup-id}': Operation<
    '/onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/connectorGroups/{connectorGroup-id}',
    'delete'
  >;
  'GET /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/connectorGroups': Operation<
    '/onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/connectorGroups',
    'get'
  >;
  'GET /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/connectorGroups/{connectorGroup-id}': Operation<
    '/onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/connectorGroups/{connectorGroup-id}',
    'get'
  >;
  'PATCH /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/connectorGroups/{connectorGroup-id}': Operation<
    '/onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/connectorGroups/{connectorGroup-id}',
    'patch'
  >;
  'POST /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/connectorGroups': Operation<
    '/onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/connectorGroups',
    'post'
  >;
}

/**
 * `DELETE /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/connectorGroups/{connectorGroup-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/connectorGroups/{connectorGroup-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/connectorGroups/{connectorGroup-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/connectorGroups/{connectorGroup-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'onPremisesPublishingProfile-id', in: 'path' },
      { name: 'connectorGroup-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/connectorGroups`
 *
 * List of existing connectorGroup objects for applications published through Application Proxy. Read-only. Nullable.
 */
export function list(
  params?: IEndpoints['GET /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/connectorGroups']['parameters']
): EndpointRequest<
  IEndpoints['GET /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/connectorGroups']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/connectorGroups',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'onPremisesPublishingProfile-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/connectorGroups/{connectorGroup-id}`
 *
 * List of existing connectorGroup objects for applications published through Application Proxy. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/connectorGroups/{connectorGroup-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/connectorGroups/{connectorGroup-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/connectorGroups/{connectorGroup-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'onPremisesPublishingProfile-id', in: 'path' },
      { name: 'connectorGroup-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/connectorGroups/{connectorGroup-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/connectorGroups/{connectorGroup-id}']['body'],
  params?: IEndpoints['PATCH /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/connectorGroups/{connectorGroup-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/connectorGroups/{connectorGroup-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/connectorGroups/{connectorGroup-id}',
    paramDefs: [
      { name: 'onPremisesPublishingProfile-id', in: 'path' },
      { name: 'connectorGroup-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/connectorGroups`
 *
 */
export function create(
  body: IEndpoints['POST /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/connectorGroups']['body'],
  params?: IEndpoints['POST /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/connectorGroups']['parameters']
): EndpointRequest<
  IEndpoints['POST /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/connectorGroups']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/connectorGroups',
    paramDefs: [{ name: 'onPremisesPublishingProfile-id', in: 'path' }],
    params,
    body,
  };
}
