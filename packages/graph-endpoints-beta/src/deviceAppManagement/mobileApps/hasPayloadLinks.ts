import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceAppManagement/mobileApps/hasPayloadLinks': Operation<
    '/deviceAppManagement/mobileApps/hasPayloadLinks',
    'post'
  >;
}

/**
 * `POST /deviceAppManagement/mobileApps/hasPayloadLinks`
 *
 */
export function create(
  body: IEndpoints['POST /deviceAppManagement/mobileApps/hasPayloadLinks']['body'],
  params?: IEndpoints['POST /deviceAppManagement/mobileApps/hasPayloadLinks']['parameters']
): EndpointRequest<IEndpoints['POST /deviceAppManagement/mobileApps/hasPayloadLinks']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceAppManagement/mobileApps/hasPayloadLinks',
    paramDefs: [],
    params,
    body,
  };
}
