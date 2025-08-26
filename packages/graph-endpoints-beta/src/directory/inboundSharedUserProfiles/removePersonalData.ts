import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /directory/inboundSharedUserProfiles/{inboundSharedUserProfile-userId}/removePersonalData': Operation<
    '/directory/inboundSharedUserProfiles/{inboundSharedUserProfile-userId}/removePersonalData',
    'post'
  >;
}

/**
 * `POST /directory/inboundSharedUserProfiles/{inboundSharedUserProfile-userId}/removePersonalData`
 *
 * Create a request to remove the personal data for an inboundSharedUserProfile.
 */
export function create(
  body: IEndpoints['POST /directory/inboundSharedUserProfiles/{inboundSharedUserProfile-userId}/removePersonalData']['body'],
  params?: IEndpoints['POST /directory/inboundSharedUserProfiles/{inboundSharedUserProfile-userId}/removePersonalData']['parameters']
): EndpointRequest<
  IEndpoints['POST /directory/inboundSharedUserProfiles/{inboundSharedUserProfile-userId}/removePersonalData']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/directory/inboundSharedUserProfiles/{inboundSharedUserProfile-userId}/removePersonalData',
    paramDefs: [{ name: 'inboundSharedUserProfile-userId', in: 'path' }],
    params,
    body,
  };
}
