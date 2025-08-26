export * as agentGroups from './agentGroups';
export * as agents from './agents';
export * as applicationSegments from './applicationSegments';
export * as connectorGroups from './connectorGroups';
export * as connectors from './connectors';
export * as publishedResources from './publishedResources';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}': Operation<
    '/onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}',
    'delete'
  >;
  'GET /onPremisesPublishingProfiles': Operation<'/onPremisesPublishingProfiles', 'get'>;
  'GET /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}': Operation<
    '/onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}',
    'get'
  >;
  'PATCH /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}': Operation<
    '/onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}',
    'patch'
  >;
  'POST /onPremisesPublishingProfiles': Operation<'/onPremisesPublishingProfiles', 'post'>;
}

/**
 * `DELETE /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'onPremisesPublishingProfile-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /onPremisesPublishingProfiles`
 *
 */
export function list(
  params?: IEndpoints['GET /onPremisesPublishingProfiles']['parameters']
): EndpointRequest<IEndpoints['GET /onPremisesPublishingProfiles']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/onPremisesPublishingProfiles',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `GET /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'onPremisesPublishingProfile-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}']['body'],
  params?: IEndpoints['PATCH /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}',
    paramDefs: [{ name: 'onPremisesPublishingProfile-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /onPremisesPublishingProfiles`
 *
 */
export function create(
  body: IEndpoints['POST /onPremisesPublishingProfiles']['body'],
  params?: IEndpoints['POST /onPremisesPublishingProfiles']['parameters']
): EndpointRequest<IEndpoints['POST /onPremisesPublishingProfiles']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/onPremisesPublishingProfiles',
    paramDefs: [],
    params,
    body,
  };
}
