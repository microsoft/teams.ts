import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /subscriptions/{subscription-id}/reauthorize': Operation<
    '/subscriptions/{subscription-id}/reauthorize',
    'post'
  >;
}

/**
 * `POST /subscriptions/{subscription-id}/reauthorize`
 *
 * Reauthorize a subscription when you receive a reauthorizationRequired challenge.
 */
export function create(
  body: IEndpoints['POST /subscriptions/{subscription-id}/reauthorize']['body'],
  params?: IEndpoints['POST /subscriptions/{subscription-id}/reauthorize']['parameters']
): EndpointRequest<IEndpoints['POST /subscriptions/{subscription-id}/reauthorize']['response']> {
  return {
    method: 'post',
    path: '/subscriptions/{subscription-id}/reauthorize',
    paramDefs: [{ name: 'subscription-id', in: 'path' }],
    params,
    body,
  };
}
