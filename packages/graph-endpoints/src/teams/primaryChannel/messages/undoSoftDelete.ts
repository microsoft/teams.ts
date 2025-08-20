import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /teams/{team-id}/primaryChannel/messages/{chatMessage-id}/undoSoftDelete': Operation<
    '/teams/{team-id}/primaryChannel/messages/{chatMessage-id}/undoSoftDelete',
    'post'
  >;
}

/**
 * `POST /teams/{team-id}/primaryChannel/messages/{chatMessage-id}/undoSoftDelete`
 *
 * Undo soft deletion of a single chatMessage or a chat message reply in a channel or a chat.
 */
export function create(
  body: IEndpoints['POST /teams/{team-id}/primaryChannel/messages/{chatMessage-id}/undoSoftDelete']['body'],
  params?: IEndpoints['POST /teams/{team-id}/primaryChannel/messages/{chatMessage-id}/undoSoftDelete']['parameters']
): EndpointRequest<
  IEndpoints['POST /teams/{team-id}/primaryChannel/messages/{chatMessage-id}/undoSoftDelete']['response']
> {
  return {
    method: 'post',
    path: '/teams/{team-id}/primaryChannel/messages/{chatMessage-id}/undoSoftDelete',
    paramDefs: [
      { name: 'team-id', in: 'path' },
      { name: 'chatMessage-id', in: 'path' },
    ],
    params,
    body,
  };
}
