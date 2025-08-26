export * as approvers from './approvers';
export * as collaborators from './collaborators';
export * as notes from './notes';
export * as team from './team';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/subjectRightsRequests/{subjectRightsRequest-id}': Operation<
    '/security/subjectRightsRequests/{subjectRightsRequest-id}',
    'delete'
  >;
  'GET /security/subjectRightsRequests': Operation<'/security/subjectRightsRequests', 'get'>;
  'GET /security/subjectRightsRequests/{subjectRightsRequest-id}': Operation<
    '/security/subjectRightsRequests/{subjectRightsRequest-id}',
    'get'
  >;
  'PATCH /security/subjectRightsRequests/{subjectRightsRequest-id}': Operation<
    '/security/subjectRightsRequests/{subjectRightsRequest-id}',
    'patch'
  >;
  'POST /security/subjectRightsRequests': Operation<'/security/subjectRightsRequests', 'post'>;
}

/**
 * `DELETE /security/subjectRightsRequests/{subjectRightsRequest-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /security/subjectRightsRequests/{subjectRightsRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /security/subjectRightsRequests/{subjectRightsRequest-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/security/subjectRightsRequests/{subjectRightsRequest-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'subjectRightsRequest-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /security/subjectRightsRequests`
 *
 */
export function list(
  params?: IEndpoints['GET /security/subjectRightsRequests']['parameters']
): EndpointRequest<IEndpoints['GET /security/subjectRightsRequests']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/subjectRightsRequests',
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
 * `GET /security/subjectRightsRequests/{subjectRightsRequest-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /security/subjectRightsRequests/{subjectRightsRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/subjectRightsRequests/{subjectRightsRequest-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/subjectRightsRequests/{subjectRightsRequest-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'subjectRightsRequest-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /security/subjectRightsRequests/{subjectRightsRequest-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/subjectRightsRequests/{subjectRightsRequest-id}']['body'],
  params?: IEndpoints['PATCH /security/subjectRightsRequests/{subjectRightsRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /security/subjectRightsRequests/{subjectRightsRequest-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/security/subjectRightsRequests/{subjectRightsRequest-id}',
    paramDefs: [{ name: 'subjectRightsRequest-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /security/subjectRightsRequests`
 *
 */
export function create(
  body: IEndpoints['POST /security/subjectRightsRequests']['body'],
  params?: IEndpoints['POST /security/subjectRightsRequests']['parameters']
): EndpointRequest<IEndpoints['POST /security/subjectRightsRequests']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/security/subjectRightsRequests',
    paramDefs: [],
    params,
    body,
  };
}
