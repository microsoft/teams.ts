import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /tenantRelationships/managedTenants/managementTemplateSteps/{managementTemplateStep-id}/acceptedVersion': Operation<
    '/tenantRelationships/managedTenants/managementTemplateSteps/{managementTemplateStep-id}/acceptedVersion',
    'get'
  >;
}

/**
 * `GET /tenantRelationships/managedTenants/managementTemplateSteps/{managementTemplateStep-id}/acceptedVersion`
 *
 */
export function get(
  params?: IEndpoints['GET /tenantRelationships/managedTenants/managementTemplateSteps/{managementTemplateStep-id}/acceptedVersion']['parameters']
): EndpointRequest<
  IEndpoints['GET /tenantRelationships/managedTenants/managementTemplateSteps/{managementTemplateStep-id}/acceptedVersion']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/tenantRelationships/managedTenants/managementTemplateSteps/{managementTemplateStep-id}/acceptedVersion',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'managementTemplateStep-id', in: 'path' },
    ],
    params,
  };
}
