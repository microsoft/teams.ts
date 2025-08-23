import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceAppManagement/mobileApps/{mobileApp-id}/assign': Operation<
    '/deviceAppManagement/mobileApps/{mobileApp-id}/assign',
    'post'
  >;
}

/**
 * `POST /deviceAppManagement/mobileApps/{mobileApp-id}/assign`
 *
 */
export function create(
  body: IEndpoints['POST /deviceAppManagement/mobileApps/{mobileApp-id}/assign']['body'],
  params?: IEndpoints['POST /deviceAppManagement/mobileApps/{mobileApp-id}/assign']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceAppManagement/mobileApps/{mobileApp-id}/assign']['response']
> {
  return {
    method: 'post',
    path: '/deviceAppManagement/mobileApps/{mobileApp-id}/assign',
    paramDefs: [{ name: 'mobileApp-id', in: 'path' }],
    params,
    body,
  };
}
