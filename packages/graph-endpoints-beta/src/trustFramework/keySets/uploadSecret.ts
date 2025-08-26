import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /trustFramework/keySets/{trustFrameworkKeySet-id}/uploadSecret': Operation<
    '/trustFramework/keySets/{trustFrameworkKeySet-id}/uploadSecret',
    'post'
  >;
}

/**
 * `POST /trustFramework/keySets/{trustFrameworkKeySet-id}/uploadSecret`
 *
 * Upload a plain text secret to a trustFrameworkKeyset. Examples of secrets are application secrets in Microsoft Entra ID, Google, Facebook, or any other identity provider. his method returns trustFrameworkKey.
 */
export function create(
  body: IEndpoints['POST /trustFramework/keySets/{trustFrameworkKeySet-id}/uploadSecret']['body'],
  params?: IEndpoints['POST /trustFramework/keySets/{trustFrameworkKeySet-id}/uploadSecret']['parameters']
): EndpointRequest<
  IEndpoints['POST /trustFramework/keySets/{trustFrameworkKeySet-id}/uploadSecret']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/trustFramework/keySets/{trustFrameworkKeySet-id}/uploadSecret',
    paramDefs: [{ name: 'trustFrameworkKeySet-id', in: 'path' }],
    params,
    body,
  };
}
