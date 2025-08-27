import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /domains/{domain-id}/promoteToInitial': Operation<
    '/domains/{domain-id}/promoteToInitial',
    'post'
  >;
}

/**
 * `POST /domains/{domain-id}/promoteToInitial`
 *
 */
export function create(
  body: IEndpoints['POST /domains/{domain-id}/promoteToInitial']['body'],
  params?: IEndpoints['POST /domains/{domain-id}/promoteToInitial']['parameters']
): EndpointRequest<IEndpoints['POST /domains/{domain-id}/promoteToInitial']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/domains/{domain-id}/promoteToInitial',
    paramDefs: [{ name: 'domain-id', in: 'path' }],
    params,
    body,
  };
}
