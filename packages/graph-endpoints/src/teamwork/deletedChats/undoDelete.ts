import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /teamwork/deletedChats/{deletedChat-id}/undoDelete': Operation<
    '/teamwork/deletedChats/{deletedChat-id}/undoDelete',
    'post'
  >;
}

/**
 * `POST /teamwork/deletedChats/{deletedChat-id}/undoDelete`
 *
 * Restore a  deletedChat to an active chat.
 */
export function create(
  body: IEndpoints['POST /teamwork/deletedChats/{deletedChat-id}/undoDelete']['body'],
  params?: IEndpoints['POST /teamwork/deletedChats/{deletedChat-id}/undoDelete']['parameters']
): EndpointRequest<
  IEndpoints['POST /teamwork/deletedChats/{deletedChat-id}/undoDelete']['response']
> {
  return {
    method: 'post',
    path: '/teamwork/deletedChats/{deletedChat-id}/undoDelete',
    paramDefs: [{ name: 'deletedChat-id', in: 'path' }],
    params,
    body,
  };
}
