import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /trustFramework/keySets/{trustFrameworkKeySet-id}/uploadCertificate': Operation<
    '/trustFramework/keySets/{trustFrameworkKeySet-id}/uploadCertificate',
    'post'
  >;
}

/**
 * `POST /trustFramework/keySets/{trustFrameworkKeySet-id}/uploadCertificate`
 *
 * Upload a certificate to a trustFrameworkKeyset. The input is a base-64 encoded value of the certificate contents. This method returns trustFrameworkKey.
 */
export function create(
  body: IEndpoints['POST /trustFramework/keySets/{trustFrameworkKeySet-id}/uploadCertificate']['body'],
  params?: IEndpoints['POST /trustFramework/keySets/{trustFrameworkKeySet-id}/uploadCertificate']['parameters']
): EndpointRequest<
  IEndpoints['POST /trustFramework/keySets/{trustFrameworkKeySet-id}/uploadCertificate']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/trustFramework/keySets/{trustFrameworkKeySet-id}/uploadCertificate',
    paramDefs: [{ name: 'trustFrameworkKeySet-id', in: 'path' }],
    params,
    body,
  };
}
