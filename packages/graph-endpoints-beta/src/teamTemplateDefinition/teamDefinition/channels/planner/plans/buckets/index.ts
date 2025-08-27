export * as tasks from './tasks';

import type { EndpointRequest, Operation } from './../../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}': Operation<
    '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}',
    'delete'
  >;
  'GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets': Operation<
    '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets',
    'get'
  >;
  'GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}': Operation<
    '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}',
    'get'
  >;
  'PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}': Operation<
    '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}',
    'patch'
  >;
  'POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets': Operation<
    '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets',
    'post'
  >;
}

/**
 * `DELETE /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'teamTemplateDefinition-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
      { name: 'plannerPlan-id', in: 'path' },
      { name: 'plannerBucket-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets`
 *
 * Collection of buckets in the plan. Read-only. Nullable.
 */
export function list(
  params?: IEndpoints['GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets']['parameters']
): EndpointRequest<
  IEndpoints['GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'teamTemplateDefinition-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
      { name: 'plannerPlan-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}`
 *
 * Collection of buckets in the plan. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'teamTemplateDefinition-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
      { name: 'plannerPlan-id', in: 'path' },
      { name: 'plannerBucket-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}']['body'],
  params?: IEndpoints['PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}',
    paramDefs: [
      { name: 'teamTemplateDefinition-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
      { name: 'plannerPlan-id', in: 'path' },
      { name: 'plannerBucket-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets`
 *
 */
export function create(
  body: IEndpoints['POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets']['body'],
  params?: IEndpoints['POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets']['parameters']
): EndpointRequest<
  IEndpoints['POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets',
    paramDefs: [
      { name: 'teamTemplateDefinition-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
      { name: 'plannerPlan-id', in: 'path' },
    ],
    params,
    body,
  };
}
