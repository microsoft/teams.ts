export * as agentGroups from './agentGroups';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/publishedResources/{publishedResource-id}': Operation<
    '/onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/publishedResources/{publishedResource-id}',
    'delete'
  >;
  'GET /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/publishedResources': Operation<
    '/onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/publishedResources',
    'get'
  >;
  'GET /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/publishedResources/{publishedResource-id}': Operation<
    '/onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/publishedResources/{publishedResource-id}',
    'get'
  >;
  'PATCH /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/publishedResources/{publishedResource-id}': Operation<
    '/onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/publishedResources/{publishedResource-id}',
    'patch'
  >;
  'POST /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/publishedResources': Operation<
    '/onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/publishedResources',
    'post'
  >;
}

/**
 * `DELETE /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/publishedResources/{publishedResource-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/publishedResources/{publishedResource-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/publishedResources/{publishedResource-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/publishedResources/{publishedResource-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'onPremisesPublishingProfile-id', in: 'path' },
      { name: 'publishedResource-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/publishedResources`
 *
 * Retrieve a list of publishedResource objects.
 */
export function list(
  params?: IEndpoints['GET /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/publishedResources']['parameters']
): EndpointRequest<
  IEndpoints['GET /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/publishedResources']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/publishedResources',
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
 * `GET /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/publishedResources/{publishedResource-id}`
 *
 * List of existing publishedResource objects. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/publishedResources/{publishedResource-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/publishedResources/{publishedResource-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/publishedResources/{publishedResource-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'onPremisesPublishingProfile-id', in: 'path' },
      { name: 'publishedResource-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/publishedResources/{publishedResource-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/publishedResources/{publishedResource-id}']['body'],
  params?: IEndpoints['PATCH /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/publishedResources/{publishedResource-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/publishedResources/{publishedResource-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/publishedResources/{publishedResource-id}',
    paramDefs: [
      { name: 'onPremisesPublishingProfile-id', in: 'path' },
      { name: 'publishedResource-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/publishedResources`
 *
 */
export function create(
  body: IEndpoints['POST /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/publishedResources']['body'],
  params?: IEndpoints['POST /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/publishedResources']['parameters']
): EndpointRequest<
  IEndpoints['POST /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/publishedResources']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/publishedResources',
    paramDefs: [{ name: 'onPremisesPublishingProfile-id', in: 'path' }],
    params,
    body,
  };
}
