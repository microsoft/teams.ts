import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /directory/inboundSharedUserProfiles/{inboundSharedUserProfile-userId}/exportPersonalData': Operation<
    '/directory/inboundSharedUserProfiles/{inboundSharedUserProfile-userId}/exportPersonalData',
    'post'
  >;
}

/**
 * `POST /directory/inboundSharedUserProfiles/{inboundSharedUserProfile-userId}/exportPersonalData`
 *
 * Create a request to export the personal data for an inboundSharedUserProfile.
 */
export function create(
  body: IEndpoints['POST /directory/inboundSharedUserProfiles/{inboundSharedUserProfile-userId}/exportPersonalData']['body'],
  params?: IEndpoints['POST /directory/inboundSharedUserProfiles/{inboundSharedUserProfile-userId}/exportPersonalData']['parameters']
): EndpointRequest<
  IEndpoints['POST /directory/inboundSharedUserProfiles/{inboundSharedUserProfile-userId}/exportPersonalData']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/directory/inboundSharedUserProfiles/{inboundSharedUserProfile-userId}/exportPersonalData',
    paramDefs: [{ name: 'inboundSharedUserProfile-userId', in: 'path' }],
    params,
    body,
  };
}
