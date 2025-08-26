import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /trustFramework/keySets/{trustFrameworkKeySet-id}/generateKey': Operation<
    '/trustFramework/keySets/{trustFrameworkKeySet-id}/generateKey',
    'post'
  >;
}

/**
 * `POST /trustFramework/keySets/{trustFrameworkKeySet-id}/generateKey`
 *
 * Generate a trustFrameworkKey and a secret automatically in the trustFrameworkKeyset. The caller doesn&#x27;t have to provide a secret.
 */
export function create(
  body: IEndpoints['POST /trustFramework/keySets/{trustFrameworkKeySet-id}/generateKey']['body'],
  params?: IEndpoints['POST /trustFramework/keySets/{trustFrameworkKeySet-id}/generateKey']['parameters']
): EndpointRequest<
  IEndpoints['POST /trustFramework/keySets/{trustFrameworkKeySet-id}/generateKey']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/trustFramework/keySets/{trustFrameworkKeySet-id}/generateKey',
    paramDefs: [{ name: 'trustFrameworkKeySet-id', in: 'path' }],
    params,
    body,
  };
}
