import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /directory/outboundSharedUserProfiles/{outboundSharedUserProfile-userId}/tenants/{tenantReference-tenantId}/removePersonalData': Operation<
    '/directory/outboundSharedUserProfiles/{outboundSharedUserProfile-userId}/tenants/{tenantReference-tenantId}/removePersonalData',
    'post'
  >;
}

/**
 * `POST /directory/outboundSharedUserProfiles/{outboundSharedUserProfile-userId}/tenants/{tenantReference-tenantId}/removePersonalData`
 *
 * Create a request to remove the personal data for an outboundSharedUserProfile.
 */
export function create(
  body: IEndpoints['POST /directory/outboundSharedUserProfiles/{outboundSharedUserProfile-userId}/tenants/{tenantReference-tenantId}/removePersonalData']['body'],
  params?: IEndpoints['POST /directory/outboundSharedUserProfiles/{outboundSharedUserProfile-userId}/tenants/{tenantReference-tenantId}/removePersonalData']['parameters']
): EndpointRequest<
  IEndpoints['POST /directory/outboundSharedUserProfiles/{outboundSharedUserProfile-userId}/tenants/{tenantReference-tenantId}/removePersonalData']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/directory/outboundSharedUserProfiles/{outboundSharedUserProfile-userId}/tenants/{tenantReference-tenantId}/removePersonalData',
    paramDefs: [
      { name: 'outboundSharedUserProfile-userId', in: 'path' },
      { name: 'tenantReference-tenantId', in: 'path' },
    ],
    params,
    body,
  };
}
