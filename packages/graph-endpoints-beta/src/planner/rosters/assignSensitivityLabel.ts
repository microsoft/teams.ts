import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /planner/rosters/{plannerRoster-id}/assignSensitivityLabel': Operation<
    '/planner/rosters/{plannerRoster-id}/assignSensitivityLabel',
    'post'
  >;
}

/**
 * `POST /planner/rosters/{plannerRoster-id}/assignSensitivityLabel`
 *
 * Assign a sensitivity label to a plannerRoster object.
 */
export function create(
  body: IEndpoints['POST /planner/rosters/{plannerRoster-id}/assignSensitivityLabel']['body'],
  params?: IEndpoints['POST /planner/rosters/{plannerRoster-id}/assignSensitivityLabel']['parameters']
): EndpointRequest<
  IEndpoints['POST /planner/rosters/{plannerRoster-id}/assignSensitivityLabel']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/planner/rosters/{plannerRoster-id}/assignSensitivityLabel',
    paramDefs: [{ name: 'plannerRoster-id', in: 'path' }],
    params,
    body,
  };
}
