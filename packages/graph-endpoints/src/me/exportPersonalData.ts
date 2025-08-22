import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /me/exportPersonalData': Operation<'/me/exportPersonalData', 'post'>;
}

/**
 * `POST /me/exportPersonalData`
 *
 * Submit a data policy operation request from a company administrator or an application to export an organizational user&#x27;s data. This data includes the user&#x27;s data stored in OneDrive and their activity reports. For more information about exporting data while complying with regulations, see Data Subject Requests and the GDPR and CCPA.
 */
export function create(
  body: IEndpoints['POST /me/exportPersonalData']['body'],
  params?: IEndpoints['POST /me/exportPersonalData']['parameters']
): EndpointRequest<IEndpoints['POST /me/exportPersonalData']['response']> {
  return {
    method: 'post',
    path: '/me/exportPersonalData',
    paramDefs: [],
    params,
    body,
  };
}
