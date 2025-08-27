import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /groups/{group-id}/unsubscribeByMail': Operation<
    '/groups/{group-id}/unsubscribeByMail',
    'post'
  >;
}

/**
 * `POST /groups/{group-id}/unsubscribeByMail`
 *
 * Calling this method disables the current user to receive email notifications for this group about new posts, events, and files in that group. Supported for Microsoft 365 groups only.
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/unsubscribeByMail']['body'],
  params?: IEndpoints['POST /groups/{group-id}/unsubscribeByMail']['parameters']
): EndpointRequest<IEndpoints['POST /groups/{group-id}/unsubscribeByMail']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/groups/{group-id}/unsubscribeByMail',
    paramDefs: [{ name: 'group-id', in: 'path' }],
    params,
    body,
  };
}
