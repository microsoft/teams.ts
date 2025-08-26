import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /trustFramework/keySets/{trustFrameworkKeySet-id}/uploadPkcs12': Operation<
    '/trustFramework/keySets/{trustFrameworkKeySet-id}/uploadPkcs12',
    'post'
  >;
}

/**
 * `POST /trustFramework/keySets/{trustFrameworkKeySet-id}/uploadPkcs12`
 *
 * Upload a PKCS12 format key (PFX) to a trustFrameworkKeyset. The input is a base-64 encoded value of the Pfx certificate contents. This method returns trustFrameworkKey.
 */
export function create(
  body: IEndpoints['POST /trustFramework/keySets/{trustFrameworkKeySet-id}/uploadPkcs12']['body'],
  params?: IEndpoints['POST /trustFramework/keySets/{trustFrameworkKeySet-id}/uploadPkcs12']['parameters']
): EndpointRequest<
  IEndpoints['POST /trustFramework/keySets/{trustFrameworkKeySet-id}/uploadPkcs12']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/trustFramework/keySets/{trustFrameworkKeySet-id}/uploadPkcs12',
    paramDefs: [{ name: 'trustFrameworkKeySet-id', in: 'path' }],
    params,
    body,
  };
}
