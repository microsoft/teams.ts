import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/planner/plans/{plannerPlan-id}/moveToContainer': Operation<
    '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/planner/plans/{plannerPlan-id}/moveToContainer',
    'post'
  >;
}

/**
 * `POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/planner/plans/{plannerPlan-id}/moveToContainer`
 *
 * Move a planner plan object from one planner plan container to another. Planner plans can only be moved from a user container to a group container.
 */
export function create(
  body: IEndpoints['POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/planner/plans/{plannerPlan-id}/moveToContainer']['body'],
  params?: IEndpoints['POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/planner/plans/{plannerPlan-id}/moveToContainer']['parameters']
): EndpointRequest<
  IEndpoints['POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/planner/plans/{plannerPlan-id}/moveToContainer']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/planner/plans/{plannerPlan-id}/moveToContainer',
    paramDefs: [
      { name: 'teamTemplateDefinition-id', in: 'path' },
      { name: 'plannerPlan-id', in: 'path' },
    ],
    params,
    body,
  };
}
