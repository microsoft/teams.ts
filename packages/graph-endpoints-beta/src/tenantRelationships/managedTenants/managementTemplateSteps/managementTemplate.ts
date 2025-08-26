import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /tenantRelationships/managedTenants/managementTemplateSteps/{managementTemplateStep-id}/managementTemplate': Operation<
    '/tenantRelationships/managedTenants/managementTemplateSteps/{managementTemplateStep-id}/managementTemplate',
    'get'
  >;
}

/**
 * `GET /tenantRelationships/managedTenants/managementTemplateSteps/{managementTemplateStep-id}/managementTemplate`
 *
 */
export function get(
  params?: IEndpoints['GET /tenantRelationships/managedTenants/managementTemplateSteps/{managementTemplateStep-id}/managementTemplate']['parameters']
): EndpointRequest<
  IEndpoints['GET /tenantRelationships/managedTenants/managementTemplateSteps/{managementTemplateStep-id}/managementTemplate']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/tenantRelationships/managedTenants/managementTemplateSteps/{managementTemplateStep-id}/managementTemplate',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'managementTemplateStep-id', in: 'path' },
    ],
    params,
  };
}
