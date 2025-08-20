import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /groups/{group-id}/subscribeByMail': Operation<
    '/groups/{group-id}/subscribeByMail',
    'post'
  >;
}

/**
 * `POST /groups/{group-id}/subscribeByMail`
 *
 * Calling this method will enable the current user to receive email notifications for this group, about new posts, events, and files in that group. Supported for Microsoft 365 groups only.
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/subscribeByMail']['body'],
  params?: IEndpoints['POST /groups/{group-id}/subscribeByMail']['parameters']
): EndpointRequest<IEndpoints['POST /groups/{group-id}/subscribeByMail']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/groups/{group-id}/subscribeByMail',
    paramDefs: [{ name: 'group-id', in: 'path' }],
    params,
    body,
  };
}
