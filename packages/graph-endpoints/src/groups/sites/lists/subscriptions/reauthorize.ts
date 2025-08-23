import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'POST /groups/{group-id}/sites/{site-id}/lists/{list-id}/subscriptions/{subscription-id}/reauthorize': Operation<
    '/groups/{group-id}/sites/{site-id}/lists/{list-id}/subscriptions/{subscription-id}/reauthorize',
    'post'
  >;
}

/**
 * `POST /groups/{group-id}/sites/{site-id}/lists/{list-id}/subscriptions/{subscription-id}/reauthorize`
 *
 * Reauthorize a subscription when you receive a reauthorizationRequired challenge.
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/sites/{site-id}/lists/{list-id}/subscriptions/{subscription-id}/reauthorize']['body'],
  params?: IEndpoints['POST /groups/{group-id}/sites/{site-id}/lists/{list-id}/subscriptions/{subscription-id}/reauthorize']['parameters']
): EndpointRequest<
  IEndpoints['POST /groups/{group-id}/sites/{site-id}/lists/{list-id}/subscriptions/{subscription-id}/reauthorize']['response']
> {
  return {
    method: 'post',
    path: '/groups/{group-id}/sites/{site-id}/lists/{list-id}/subscriptions/{subscription-id}/reauthorize',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
      { name: 'list-id', in: 'path' },
      { name: 'subscription-id', in: 'path' },
    ],
    params,
    body,
  };
}
