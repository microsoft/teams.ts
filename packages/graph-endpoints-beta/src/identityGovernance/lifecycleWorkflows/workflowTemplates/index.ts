export * as tasks from './tasks';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /identityGovernance/lifecycleWorkflows/workflowTemplates': Operation<
    '/identityGovernance/lifecycleWorkflows/workflowTemplates',
    'get'
  >;
  'GET /identityGovernance/lifecycleWorkflows/workflowTemplates/{workflowTemplate-id}': Operation<
    '/identityGovernance/lifecycleWorkflows/workflowTemplates/{workflowTemplate-id}',
    'get'
  >;
}

/**
 * `GET /identityGovernance/lifecycleWorkflows/workflowTemplates`
 *
 * Get a list of the workflowTemplate objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /identityGovernance/lifecycleWorkflows/workflowTemplates']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/lifecycleWorkflows/workflowTemplates']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identityGovernance/lifecycleWorkflows/workflowTemplates',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/lifecycleWorkflows/workflowTemplates/{workflowTemplate-id}`
 *
 * Read the properties and relationships of a workflowTemplate object.
 */
export function get(
  params?: IEndpoints['GET /identityGovernance/lifecycleWorkflows/workflowTemplates/{workflowTemplate-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/lifecycleWorkflows/workflowTemplates/{workflowTemplate-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identityGovernance/lifecycleWorkflows/workflowTemplates/{workflowTemplate-id}',
    paramDefs: {
      path: ['workflowTemplate-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}
