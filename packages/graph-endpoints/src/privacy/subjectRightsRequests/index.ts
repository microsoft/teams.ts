export * as approvers from './approvers';
export * as collaborators from './collaborators';
export * as notes from './notes';
export * as team from './team';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /privacy/subjectRightsRequests/{subjectRightsRequest-id}': Operation<
    '/privacy/subjectRightsRequests/{subjectRightsRequest-id}',
    'delete'
  >;
  'GET /privacy/subjectRightsRequests': Operation<'/privacy/subjectRightsRequests', 'get'>;
  'GET /privacy/subjectRightsRequests/{subjectRightsRequest-id}': Operation<
    '/privacy/subjectRightsRequests/{subjectRightsRequest-id}',
    'get'
  >;
  'PATCH /privacy/subjectRightsRequests/{subjectRightsRequest-id}': Operation<
    '/privacy/subjectRightsRequests/{subjectRightsRequest-id}',
    'patch'
  >;
  'POST /privacy/subjectRightsRequests': Operation<'/privacy/subjectRightsRequests', 'post'>;
}

/**
 * `DELETE /privacy/subjectRightsRequests/{subjectRightsRequest-id}`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /privacy/subjectRightsRequests/{subjectRightsRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /privacy/subjectRightsRequests/{subjectRightsRequest-id}']['response']
> {
  return {
    method: 'delete',
    path: '/privacy/subjectRightsRequests/{subjectRightsRequest-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'subjectRightsRequest-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /privacy/subjectRightsRequests`
 *
 * Get a list of subjectRightsRequest objects and their properties.
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /privacy/subjectRightsRequests']['parameters']
): EndpointRequest<IEndpoints['GET /privacy/subjectRightsRequests']['response']> {
  return {
    method: 'get',
    path: '/privacy/subjectRightsRequests',
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
 * `GET /privacy/subjectRightsRequests/{subjectRightsRequest-id}`
 *
 * Read the properties and relationships of a subjectRightsRequest object.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /privacy/subjectRightsRequests/{subjectRightsRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /privacy/subjectRightsRequests/{subjectRightsRequest-id}']['response']
> {
  return {
    method: 'get',
    path: '/privacy/subjectRightsRequests/{subjectRightsRequest-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'subjectRightsRequest-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /privacy/subjectRightsRequests/{subjectRightsRequest-id}`
 *
 * Update the properties of a subjectRightsRequest object.
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /privacy/subjectRightsRequests/{subjectRightsRequest-id}']['body'],
  params?: IEndpoints['PATCH /privacy/subjectRightsRequests/{subjectRightsRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /privacy/subjectRightsRequests/{subjectRightsRequest-id}']['response']
> {
  return {
    method: 'patch',
    path: '/privacy/subjectRightsRequests/{subjectRightsRequest-id}',
    paramDefs: [{ name: 'subjectRightsRequest-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /privacy/subjectRightsRequests`
 *
 * Create a new subjectRightsRequest object.
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /privacy/subjectRightsRequests']['body'],
  params?: IEndpoints['POST /privacy/subjectRightsRequests']['parameters']
): EndpointRequest<IEndpoints['POST /privacy/subjectRightsRequests']['response']> {
  return {
    method: 'post',
    path: '/privacy/subjectRightsRequests',
    paramDefs: [],
    params,
    body,
  };
}
