import type { EndpointRequest, Operation } from './../../../../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}/bucketTaskBoardFormat': Operation<
    '/teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}/bucketTaskBoardFormat',
    'delete'
  >;
  'GET /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}/bucketTaskBoardFormat': Operation<
    '/teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}/bucketTaskBoardFormat',
    'get'
  >;
  'PATCH /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}/bucketTaskBoardFormat': Operation<
    '/teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}/bucketTaskBoardFormat',
    'patch'
  >;
}

/**
 * `DELETE /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}/bucketTaskBoardFormat`
 *
 */
export function del(
  params?: IEndpoints['DELETE /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}/bucketTaskBoardFormat']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}/bucketTaskBoardFormat']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}/bucketTaskBoardFormat',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'teamTemplate-id', in: 'path' },
      { name: 'teamTemplateDefinition-id', in: 'path' },
      { name: 'plannerPlan-id', in: 'path' },
      { name: 'plannerTask-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}/bucketTaskBoardFormat`
 *
 * Read-only. Nullable. Used to render the task correctly in the task board view when grouped by bucket.
 */
export function get(
  params?: IEndpoints['GET /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}/bucketTaskBoardFormat']['parameters']
): EndpointRequest<
  IEndpoints['GET /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}/bucketTaskBoardFormat']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}/bucketTaskBoardFormat',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'teamTemplate-id', in: 'path' },
      { name: 'teamTemplateDefinition-id', in: 'path' },
      { name: 'plannerPlan-id', in: 'path' },
      { name: 'plannerTask-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}/bucketTaskBoardFormat`
 *
 */
export function update(
  body: IEndpoints['PATCH /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}/bucketTaskBoardFormat']['body'],
  params?: IEndpoints['PATCH /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}/bucketTaskBoardFormat']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}/bucketTaskBoardFormat']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}/bucketTaskBoardFormat',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'teamTemplate-id', in: 'path' },
      { name: 'teamTemplateDefinition-id', in: 'path' },
      { name: 'plannerPlan-id', in: 'path' },
      { name: 'plannerTask-id', in: 'path' },
    ],
    params,
    body,
  };
}
