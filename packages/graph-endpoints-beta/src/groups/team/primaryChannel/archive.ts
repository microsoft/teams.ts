import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /groups/{group-id}/team/primaryChannel/archive': Operation<
    '/groups/{group-id}/team/primaryChannel/archive',
    'post'
  >;
}

/**
 * `POST /groups/{group-id}/team/primaryChannel/archive`
 *
 * Archive a channel in a team. When a channel is archived, users can&#x27;t send new messages or react to existing messages in the channel, edit the channel settings, or make other changes to the channel. You can delete an archived channel or add and remove members from it. If you archive a team, its channels are also archived. Archiving is an asynchronous operation; a channel is archived after the asynchronous archiving operation completes successfully, which might occur after the response returns. A channel without an owner or that belongs to a group that has no owner, can&#x27;t be archived. To restore a channel from its archived state, use the channel: unarchive method. A channel can’t be archived or unarchived if its team is archived.
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/team/primaryChannel/archive']['body'],
  params?: IEndpoints['POST /groups/{group-id}/team/primaryChannel/archive']['parameters']
): EndpointRequest<IEndpoints['POST /groups/{group-id}/team/primaryChannel/archive']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/groups/{group-id}/team/primaryChannel/archive',
    paramDefs: [{ name: 'group-id', in: 'path' }],
    params,
    body,
  };
}
