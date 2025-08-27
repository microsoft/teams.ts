import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceAppManagement/mobileApps/validateXml': Operation<
    '/deviceAppManagement/mobileApps/validateXml',
    'post'
  >;
}

/**
 * `POST /deviceAppManagement/mobileApps/validateXml`
 *
 */
export function create(
  body: IEndpoints['POST /deviceAppManagement/mobileApps/validateXml']['body'],
  params?: IEndpoints['POST /deviceAppManagement/mobileApps/validateXml']['parameters']
): EndpointRequest<IEndpoints['POST /deviceAppManagement/mobileApps/validateXml']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceAppManagement/mobileApps/validateXml',
    paramDefs: [],
    params,
    body,
  };
}
