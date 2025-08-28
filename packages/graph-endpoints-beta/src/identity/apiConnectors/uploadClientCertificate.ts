import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /identity/apiConnectors/{identityApiConnector-id}/uploadClientCertificate': Operation<
    '/identity/apiConnectors/{identityApiConnector-id}/uploadClientCertificate',
    'post'
  >;
}

/**
 * `POST /identity/apiConnectors/{identityApiConnector-id}/uploadClientCertificate`
 *
 * Upload a PKCS 12 format key (.pfx) to an API connector&#x27;s authentication configuration. The input is a base-64 encoded value of the PKCS 12 certificate contents. This method returns an apiConnector.
 */
export function create(
  body: IEndpoints['POST /identity/apiConnectors/{identityApiConnector-id}/uploadClientCertificate']['body'],
  params?: IEndpoints['POST /identity/apiConnectors/{identityApiConnector-id}/uploadClientCertificate']['parameters']
): EndpointRequest<
  IEndpoints['POST /identity/apiConnectors/{identityApiConnector-id}/uploadClientCertificate']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/identity/apiConnectors/{identityApiConnector-id}/uploadClientCertificate',
    paramDefs: [{ name: 'identityApiConnector-id', in: 'path' }],
    params,
    body,
  };
}
