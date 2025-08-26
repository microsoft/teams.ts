import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /teams/{team-id}/schedule/offerShiftRequests/{offerShiftRequest-id}': Operation<
    '/teams/{team-id}/schedule/offerShiftRequests/{offerShiftRequest-id}',
    'delete'
  >;
  'GET /teams/{team-id}/schedule/offerShiftRequests': Operation<
    '/teams/{team-id}/schedule/offerShiftRequests',
    'get'
  >;
  'GET /teams/{team-id}/schedule/offerShiftRequests/{offerShiftRequest-id}': Operation<
    '/teams/{team-id}/schedule/offerShiftRequests/{offerShiftRequest-id}',
    'get'
  >;
  'PATCH /teams/{team-id}/schedule/offerShiftRequests/{offerShiftRequest-id}': Operation<
    '/teams/{team-id}/schedule/offerShiftRequests/{offerShiftRequest-id}',
    'patch'
  >;
  'POST /teams/{team-id}/schedule/offerShiftRequests': Operation<
    '/teams/{team-id}/schedule/offerShiftRequests',
    'post'
  >;
}

/**
 * `DELETE /teams/{team-id}/schedule/offerShiftRequests/{offerShiftRequest-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /teams/{team-id}/schedule/offerShiftRequests/{offerShiftRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /teams/{team-id}/schedule/offerShiftRequests/{offerShiftRequest-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/teams/{team-id}/schedule/offerShiftRequests/{offerShiftRequest-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'team-id', in: 'path' },
      { name: 'offerShiftRequest-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /teams/{team-id}/schedule/offerShiftRequests`
 *
 * Retrieve the properties and relationships of all offerShiftRequest objects in a team.
 */
export function list(
  params?: IEndpoints['GET /teams/{team-id}/schedule/offerShiftRequests']['parameters']
): EndpointRequest<IEndpoints['GET /teams/{team-id}/schedule/offerShiftRequests']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teams/{team-id}/schedule/offerShiftRequests',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'team-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /teams/{team-id}/schedule/offerShiftRequests/{offerShiftRequest-id}`
 *
 * Retrieve the properties and relationships of an offerShiftRequest object.
 */
export function get(
  params?: IEndpoints['GET /teams/{team-id}/schedule/offerShiftRequests/{offerShiftRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /teams/{team-id}/schedule/offerShiftRequests/{offerShiftRequest-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teams/{team-id}/schedule/offerShiftRequests/{offerShiftRequest-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'team-id', in: 'path' },
      { name: 'offerShiftRequest-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /teams/{team-id}/schedule/offerShiftRequests/{offerShiftRequest-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /teams/{team-id}/schedule/offerShiftRequests/{offerShiftRequest-id}']['body'],
  params?: IEndpoints['PATCH /teams/{team-id}/schedule/offerShiftRequests/{offerShiftRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /teams/{team-id}/schedule/offerShiftRequests/{offerShiftRequest-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/teams/{team-id}/schedule/offerShiftRequests/{offerShiftRequest-id}',
    paramDefs: [
      { name: 'team-id', in: 'path' },
      { name: 'offerShiftRequest-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /teams/{team-id}/schedule/offerShiftRequests`
 *
 * Create an instance of an offerShiftRequest.
 */
export function create(
  body: IEndpoints['POST /teams/{team-id}/schedule/offerShiftRequests']['body'],
  params?: IEndpoints['POST /teams/{team-id}/schedule/offerShiftRequests']['parameters']
): EndpointRequest<IEndpoints['POST /teams/{team-id}/schedule/offerShiftRequests']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/teams/{team-id}/schedule/offerShiftRequests',
    paramDefs: [{ name: 'team-id', in: 'path' }],
    params,
    body,
  };
}
