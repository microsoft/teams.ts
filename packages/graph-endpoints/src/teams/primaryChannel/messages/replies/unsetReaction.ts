import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'POST /teams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}/unsetReaction': Operation<
    '/teams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}/unsetReaction',
    'post'
  >;
}

/**
 * `POST /teams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}/unsetReaction`
 *
 */
export function create(
  body: IEndpoints['POST /teams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}/unsetReaction']['body'],
  params?: IEndpoints['POST /teams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}/unsetReaction']['parameters']
): EndpointRequest<
  IEndpoints['POST /teams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}/unsetReaction']['response']
> {
  return {
    method: 'post',
    path: '/teams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}/unsetReaction',
    paramDefs: [
      { name: 'team-id', in: 'path' },
      { name: 'chatMessage-id', in: 'path' },
      { name: 'chatMessage-id1', in: 'path' },
    ],
    params,
    body,
  };
}
