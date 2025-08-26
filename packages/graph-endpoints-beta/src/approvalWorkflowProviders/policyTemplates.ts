import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /approvalWorkflowProviders/{approvalWorkflowProvider-id}/policyTemplates/{governancePolicyTemplate-id}': Operation<
    '/approvalWorkflowProviders/{approvalWorkflowProvider-id}/policyTemplates/{governancePolicyTemplate-id}',
    'delete'
  >;
  'GET /approvalWorkflowProviders/{approvalWorkflowProvider-id}/policyTemplates': Operation<
    '/approvalWorkflowProviders/{approvalWorkflowProvider-id}/policyTemplates',
    'get'
  >;
  'GET /approvalWorkflowProviders/{approvalWorkflowProvider-id}/policyTemplates/{governancePolicyTemplate-id}': Operation<
    '/approvalWorkflowProviders/{approvalWorkflowProvider-id}/policyTemplates/{governancePolicyTemplate-id}',
    'get'
  >;
  'PATCH /approvalWorkflowProviders/{approvalWorkflowProvider-id}/policyTemplates/{governancePolicyTemplate-id}': Operation<
    '/approvalWorkflowProviders/{approvalWorkflowProvider-id}/policyTemplates/{governancePolicyTemplate-id}',
    'patch'
  >;
  'POST /approvalWorkflowProviders/{approvalWorkflowProvider-id}/policyTemplates': Operation<
    '/approvalWorkflowProviders/{approvalWorkflowProvider-id}/policyTemplates',
    'post'
  >;
}

/**
 * `DELETE /approvalWorkflowProviders/{approvalWorkflowProvider-id}/policyTemplates/{governancePolicyTemplate-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /approvalWorkflowProviders/{approvalWorkflowProvider-id}/policyTemplates/{governancePolicyTemplate-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /approvalWorkflowProviders/{approvalWorkflowProvider-id}/policyTemplates/{governancePolicyTemplate-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/approvalWorkflowProviders/{approvalWorkflowProvider-id}/policyTemplates/{governancePolicyTemplate-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'approvalWorkflowProvider-id', in: 'path' },
      { name: 'governancePolicyTemplate-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /approvalWorkflowProviders/{approvalWorkflowProvider-id}/policyTemplates`
 *
 */
export function list(
  params?: IEndpoints['GET /approvalWorkflowProviders/{approvalWorkflowProvider-id}/policyTemplates']['parameters']
): EndpointRequest<
  IEndpoints['GET /approvalWorkflowProviders/{approvalWorkflowProvider-id}/policyTemplates']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/approvalWorkflowProviders/{approvalWorkflowProvider-id}/policyTemplates',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'approvalWorkflowProvider-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /approvalWorkflowProviders/{approvalWorkflowProvider-id}/policyTemplates/{governancePolicyTemplate-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /approvalWorkflowProviders/{approvalWorkflowProvider-id}/policyTemplates/{governancePolicyTemplate-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /approvalWorkflowProviders/{approvalWorkflowProvider-id}/policyTemplates/{governancePolicyTemplate-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/approvalWorkflowProviders/{approvalWorkflowProvider-id}/policyTemplates/{governancePolicyTemplate-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'approvalWorkflowProvider-id', in: 'path' },
      { name: 'governancePolicyTemplate-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /approvalWorkflowProviders/{approvalWorkflowProvider-id}/policyTemplates/{governancePolicyTemplate-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /approvalWorkflowProviders/{approvalWorkflowProvider-id}/policyTemplates/{governancePolicyTemplate-id}']['body'],
  params?: IEndpoints['PATCH /approvalWorkflowProviders/{approvalWorkflowProvider-id}/policyTemplates/{governancePolicyTemplate-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /approvalWorkflowProviders/{approvalWorkflowProvider-id}/policyTemplates/{governancePolicyTemplate-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/approvalWorkflowProviders/{approvalWorkflowProvider-id}/policyTemplates/{governancePolicyTemplate-id}',
    paramDefs: [
      { name: 'approvalWorkflowProvider-id', in: 'path' },
      { name: 'governancePolicyTemplate-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /approvalWorkflowProviders/{approvalWorkflowProvider-id}/policyTemplates`
 *
 */
export function create(
  body: IEndpoints['POST /approvalWorkflowProviders/{approvalWorkflowProvider-id}/policyTemplates']['body'],
  params?: IEndpoints['POST /approvalWorkflowProviders/{approvalWorkflowProvider-id}/policyTemplates']['parameters']
): EndpointRequest<
  IEndpoints['POST /approvalWorkflowProviders/{approvalWorkflowProvider-id}/policyTemplates']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/approvalWorkflowProviders/{approvalWorkflowProvider-id}/policyTemplates',
    paramDefs: [{ name: 'approvalWorkflowProvider-id', in: 'path' }],
    params,
    body,
  };
}
