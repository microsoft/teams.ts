import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'GET /tenantRelationships/managedTenants/managementTemplateStepVersions/{managementTemplateStepVersion-id}/deployments/{managementTemplateStepDeployment-id}/templateStepVersion': Operation<
    '/tenantRelationships/managedTenants/managementTemplateStepVersions/{managementTemplateStepVersion-id}/deployments/{managementTemplateStepDeployment-id}/templateStepVersion',
    'get'
  >;
}

/**
 * `GET /tenantRelationships/managedTenants/managementTemplateStepVersions/{managementTemplateStepVersion-id}/deployments/{managementTemplateStepDeployment-id}/templateStepVersion`
 *
 */
export function get(
  params?: IEndpoints['GET /tenantRelationships/managedTenants/managementTemplateStepVersions/{managementTemplateStepVersion-id}/deployments/{managementTemplateStepDeployment-id}/templateStepVersion']['parameters']
): EndpointRequest<
  IEndpoints['GET /tenantRelationships/managedTenants/managementTemplateStepVersions/{managementTemplateStepVersion-id}/deployments/{managementTemplateStepDeployment-id}/templateStepVersion']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/tenantRelationships/managedTenants/managementTemplateStepVersions/{managementTemplateStepVersion-id}/deployments/{managementTemplateStepDeployment-id}/templateStepVersion',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'managementTemplateStepVersion-id', in: 'path' },
      { name: 'managementTemplateStepDeployment-id', in: 'path' },
    ],
    params,
  };
}
