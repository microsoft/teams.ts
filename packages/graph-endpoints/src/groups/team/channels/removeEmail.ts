import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /groups/{group-id}/team/channels/{channel-id}/removeEmail': Operation<
    '/groups/{group-id}/team/channels/{channel-id}/removeEmail',
    'post'
  >;
}

/**
 * `POST /groups/{group-id}/team/channels/{channel-id}/removeEmail`
 *
 * Remove the email address of a channel. You can remove an email address only if it was provisioned using the provisionEmail method or through the Microsoft Teams client.
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/team/channels/{channel-id}/removeEmail']['body'],
  params?: IEndpoints['POST /groups/{group-id}/team/channels/{channel-id}/removeEmail']['parameters']
): EndpointRequest<
  IEndpoints['POST /groups/{group-id}/team/channels/{channel-id}/removeEmail']['response']
> {
  return {
    method: 'post',
    path: '/groups/{group-id}/team/channels/{channel-id}/removeEmail',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
    ],
    params,
    body,
  };
}
