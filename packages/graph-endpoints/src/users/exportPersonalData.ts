import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/exportPersonalData': Operation<
    '/users/{user-id}/exportPersonalData',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/exportPersonalData`
 *
 * Submit a data policy operation request from a company administrator or an application to export an organizational user&#x27;s data. This data includes the user&#x27;s data stored in OneDrive and their activity reports. For more information about exporting data while complying with regulations, see Data Subject Requests and the GDPR and CCPA.
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/exportPersonalData']['body'],
  params?: IEndpoints['POST /users/{user-id}/exportPersonalData']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/exportPersonalData']['response']> {
  return {
    method: 'post',
    path: '/users/{user-id}/exportPersonalData',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
