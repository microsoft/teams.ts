import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/intuneBrandingProfiles/{intuneBrandingProfile-id}/assign': Operation<
    '/deviceManagement/intuneBrandingProfiles/{intuneBrandingProfile-id}/assign',
    'post'
  >;
}

/**
 * `POST /deviceManagement/intuneBrandingProfiles/{intuneBrandingProfile-id}/assign`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/intuneBrandingProfiles/{intuneBrandingProfile-id}/assign']['body'],
  params?: IEndpoints['POST /deviceManagement/intuneBrandingProfiles/{intuneBrandingProfile-id}/assign']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/intuneBrandingProfiles/{intuneBrandingProfile-id}/assign']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/intuneBrandingProfiles/{intuneBrandingProfile-id}/assign',
    paramDefs: [{ name: 'intuneBrandingProfile-id', in: 'path' }],
    params,
    body,
  };
}
