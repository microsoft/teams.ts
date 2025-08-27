import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceAppManagement/mobileApps/{mobileApp-id}/updateRelationships': Operation<
    '/deviceAppManagement/mobileApps/{mobileApp-id}/updateRelationships',
    'post'
  >;
}

/**
 * `POST /deviceAppManagement/mobileApps/{mobileApp-id}/updateRelationships`
 *
 */
export function create(
  body: IEndpoints['POST /deviceAppManagement/mobileApps/{mobileApp-id}/updateRelationships']['body'],
  params?: IEndpoints['POST /deviceAppManagement/mobileApps/{mobileApp-id}/updateRelationships']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceAppManagement/mobileApps/{mobileApp-id}/updateRelationships']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceAppManagement/mobileApps/{mobileApp-id}/updateRelationships',
    paramDefs: [{ name: 'mobileApp-id', in: 'path' }],
    params,
    body,
  };
}
