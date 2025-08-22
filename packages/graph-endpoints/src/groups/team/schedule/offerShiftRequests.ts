import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/team/schedule/offerShiftRequests/{offerShiftRequest-id}': Operation<
    '/groups/{group-id}/team/schedule/offerShiftRequests/{offerShiftRequest-id}',
    'delete'
  >;
  'GET /groups/{group-id}/team/schedule/offerShiftRequests': Operation<
    '/groups/{group-id}/team/schedule/offerShiftRequests',
    'get'
  >;
  'GET /groups/{group-id}/team/schedule/offerShiftRequests/{offerShiftRequest-id}': Operation<
    '/groups/{group-id}/team/schedule/offerShiftRequests/{offerShiftRequest-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/team/schedule/offerShiftRequests/{offerShiftRequest-id}': Operation<
    '/groups/{group-id}/team/schedule/offerShiftRequests/{offerShiftRequest-id}',
    'patch'
  >;
  'POST /groups/{group-id}/team/schedule/offerShiftRequests': Operation<
    '/groups/{group-id}/team/schedule/offerShiftRequests',
    'post'
  >;
}

/**
 * `DELETE /groups/{group-id}/team/schedule/offerShiftRequests/{offerShiftRequest-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/team/schedule/offerShiftRequests/{offerShiftRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /groups/{group-id}/team/schedule/offerShiftRequests/{offerShiftRequest-id}']['response']
> {
  return {
    method: 'delete',
    path: '/groups/{group-id}/team/schedule/offerShiftRequests/{offerShiftRequest-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'group-id', in: 'path' },
      { name: 'offerShiftRequest-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/team/schedule/offerShiftRequests`
 *
 * The offer requests for shifts in the schedule.
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/team/schedule/offerShiftRequests']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/team/schedule/offerShiftRequests']['response']
> {
  return {
    method: 'get',
    path: '/groups/{group-id}/team/schedule/offerShiftRequests',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/team/schedule/offerShiftRequests/{offerShiftRequest-id}`
 *
 * The offer requests for shifts in the schedule.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/team/schedule/offerShiftRequests/{offerShiftRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/team/schedule/offerShiftRequests/{offerShiftRequest-id}']['response']
> {
  return {
    method: 'get',
    path: '/groups/{group-id}/team/schedule/offerShiftRequests/{offerShiftRequest-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
      { name: 'offerShiftRequest-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /groups/{group-id}/team/schedule/offerShiftRequests/{offerShiftRequest-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/team/schedule/offerShiftRequests/{offerShiftRequest-id}']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/team/schedule/offerShiftRequests/{offerShiftRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /groups/{group-id}/team/schedule/offerShiftRequests/{offerShiftRequest-id}']['response']
> {
  return {
    method: 'patch',
    path: '/groups/{group-id}/team/schedule/offerShiftRequests/{offerShiftRequest-id}',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'offerShiftRequest-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /groups/{group-id}/team/schedule/offerShiftRequests`
 *
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/team/schedule/offerShiftRequests']['body'],
  params?: IEndpoints['POST /groups/{group-id}/team/schedule/offerShiftRequests']['parameters']
): EndpointRequest<
  IEndpoints['POST /groups/{group-id}/team/schedule/offerShiftRequests']['response']
> {
  return {
    method: 'post',
    path: '/groups/{group-id}/team/schedule/offerShiftRequests',
    paramDefs: [{ name: 'group-id', in: 'path' }],
    params,
    body,
  };
}
