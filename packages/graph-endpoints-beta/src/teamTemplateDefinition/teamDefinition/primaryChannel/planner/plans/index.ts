export * as archive from './archive';
export * as buckets from './buckets';
export * as details from './details';
export * as moveToContainer from './moveToContainer';
export * as tasks from './tasks';
export * as unarchive from './unarchive';

import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/planner/plans/{plannerPlan-id}': Operation<
    '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/planner/plans/{plannerPlan-id}',
    'delete'
  >;
  'GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/planner/plans': Operation<
    '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/planner/plans',
    'get'
  >;
  'GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/planner/plans/{plannerPlan-id}': Operation<
    '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/planner/plans/{plannerPlan-id}',
    'get'
  >;
  'PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/planner/plans/{plannerPlan-id}': Operation<
    '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/planner/plans/{plannerPlan-id}',
    'patch'
  >;
  'POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/planner/plans': Operation<
    '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/planner/plans',
    'post'
  >;
}

/**
 * `DELETE /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/planner/plans/{plannerPlan-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/planner/plans/{plannerPlan-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/planner/plans/{plannerPlan-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/planner/plans/{plannerPlan-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'teamTemplateDefinition-id', in: 'path' },
      { name: 'plannerPlan-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/planner/plans`
 *
 * A collection of plannerPlan objects owned by the Teams channel. Currently, only shared channels are supported. Read-only. Nullable.
 */
export function list(
  params?: IEndpoints['GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/planner/plans']['parameters']
): EndpointRequest<
  IEndpoints['GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/planner/plans']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/planner/plans',
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
    ],
    params,
  };
}

/**
 * `GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/planner/plans/{plannerPlan-id}`
 *
 * A collection of plannerPlan objects owned by the Teams channel. Currently, only shared channels are supported. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/planner/plans/{plannerPlan-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/planner/plans/{plannerPlan-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/planner/plans/{plannerPlan-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'teamTemplateDefinition-id', in: 'path' },
      { name: 'plannerPlan-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/planner/plans/{plannerPlan-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/planner/plans/{plannerPlan-id}']['body'],
  params?: IEndpoints['PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/planner/plans/{plannerPlan-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/planner/plans/{plannerPlan-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/planner/plans/{plannerPlan-id}',
    paramDefs: [
      { name: 'teamTemplateDefinition-id', in: 'path' },
      { name: 'plannerPlan-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/planner/plans`
 *
 */
export function create(
  body: IEndpoints['POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/planner/plans']['body'],
  params?: IEndpoints['POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/planner/plans']['parameters']
): EndpointRequest<
  IEndpoints['POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/planner/plans']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/planner/plans',
    paramDefs: [{ name: 'teamTemplateDefinition-id', in: 'path' }],
    params,
    body,
  };
}
