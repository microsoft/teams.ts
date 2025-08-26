import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/messages/{message-id}/send': Operation<
    '/users/{user-id}/messages/{message-id}/send',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/messages/{message-id}/send`
 *
 * Send an existing draft message. The draft message can be a new message draft, reply draft, reply-all draft, or a forward draft. This method saves the message in the Sent Items folder. Alternatively, send a new message in a single operation.
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/messages/{message-id}/send']['body'],
  params?: IEndpoints['POST /users/{user-id}/messages/{message-id}/send']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/messages/{message-id}/send']['response']> {
  return {
    method: 'post',
    path: '/users/{user-id}/messages/{message-id}/send',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'message-id', in: 'path' },
    ],
    params,
    body,
  };
}
