import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /tenantRelationships/managedTenants/managementTemplateStepVersions/{managementTemplateStepVersion-id}/templateStep': Operation<
    '/tenantRelationships/managedTenants/managementTemplateStepVersions/{managementTemplateStepVersion-id}/templateStep',
    'get'
  >;
}

/**
 * `GET /tenantRelationships/managedTenants/managementTemplateStepVersions/{managementTemplateStepVersion-id}/templateStep`
 *
 */
export function get(
  params?: IEndpoints['GET /tenantRelationships/managedTenants/managementTemplateStepVersions/{managementTemplateStepVersion-id}/templateStep']['parameters']
): EndpointRequest<
  IEndpoints['GET /tenantRelationships/managedTenants/managementTemplateStepVersions/{managementTemplateStepVersion-id}/templateStep']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/tenantRelationships/managedTenants/managementTemplateStepVersions/{managementTemplateStepVersion-id}/templateStep',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'managementTemplateStepVersion-id', in: 'path' },
    ],
    params,
  };
}
