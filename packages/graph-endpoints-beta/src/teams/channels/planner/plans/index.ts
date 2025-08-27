export * as archive from './archive';
export * as buckets from './buckets';
export * as details from './details';
export * as moveToContainer from './moveToContainer';
export * as tasks from './tasks';
export * as unarchive from './unarchive';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}': Operation<
    '/teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}',
    'delete'
  >;
  'GET /teams/{team-id}/channels/{channel-id}/planner/plans': Operation<
    '/teams/{team-id}/channels/{channel-id}/planner/plans',
    'get'
  >;
  'GET /teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}': Operation<
    '/teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}',
    'get'
  >;
  'PATCH /teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}': Operation<
    '/teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}',
    'patch'
  >;
  'POST /teams/{team-id}/channels/{channel-id}/planner/plans': Operation<
    '/teams/{team-id}/channels/{channel-id}/planner/plans',
    'post'
  >;
}

/**
 * `DELETE /teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'team-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
      { name: 'plannerPlan-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /teams/{team-id}/channels/{channel-id}/planner/plans`
 *
 * Get a list of plannerPlan objects owned by a shared channel in Teams.
 */
export function list(
  params?: IEndpoints['GET /teams/{team-id}/channels/{channel-id}/planner/plans']['parameters']
): EndpointRequest<
  IEndpoints['GET /teams/{team-id}/channels/{channel-id}/planner/plans']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teams/{team-id}/channels/{channel-id}/planner/plans',
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
      { name: 'channel-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}`
 *
 * A collection of plannerPlan objects owned by the Teams channel. Currently, only shared channels are supported. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'team-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
      { name: 'plannerPlan-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}']['body'],
  params?: IEndpoints['PATCH /teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}',
    paramDefs: [
      { name: 'team-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
      { name: 'plannerPlan-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /teams/{team-id}/channels/{channel-id}/planner/plans`
 *
 */
export function create(
  body: IEndpoints['POST /teams/{team-id}/channels/{channel-id}/planner/plans']['body'],
  params?: IEndpoints['POST /teams/{team-id}/channels/{channel-id}/planner/plans']['parameters']
): EndpointRequest<
  IEndpoints['POST /teams/{team-id}/channels/{channel-id}/planner/plans']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/teams/{team-id}/channels/{channel-id}/planner/plans',
    paramDefs: [
      { name: 'team-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
    ],
    params,
    body,
  };
}
