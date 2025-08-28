import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /approvalWorkflowProviders/{approvalWorkflowProvider-id}/businessFlows/{businessFlow-id}/recordDecisions': Operation<
    '/approvalWorkflowProviders/{approvalWorkflowProvider-id}/businessFlows/{businessFlow-id}/recordDecisions',
    'post'
  >;
}

/**
 * `POST /approvalWorkflowProviders/{approvalWorkflowProvider-id}/businessFlows/{businessFlow-id}/recordDecisions`
 *
 */
export function create(
  body: IEndpoints['POST /approvalWorkflowProviders/{approvalWorkflowProvider-id}/businessFlows/{businessFlow-id}/recordDecisions']['body'],
  params?: IEndpoints['POST /approvalWorkflowProviders/{approvalWorkflowProvider-id}/businessFlows/{businessFlow-id}/recordDecisions']['parameters']
): EndpointRequest<
  IEndpoints['POST /approvalWorkflowProviders/{approvalWorkflowProvider-id}/businessFlows/{businessFlow-id}/recordDecisions']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/approvalWorkflowProviders/{approvalWorkflowProvider-id}/businessFlows/{businessFlow-id}/recordDecisions',
    paramDefs: [
      { name: 'approvalWorkflowProvider-id', in: 'path' },
      { name: 'businessFlow-id', in: 'path' },
    ],
    params,
    body,
  };
}
