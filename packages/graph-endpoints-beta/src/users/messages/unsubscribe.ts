import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/messages/{message-id}/unsubscribe': Operation<
    '/users/{user-id}/messages/{message-id}/unsubscribe',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/messages/{message-id}/unsubscribe`
 *
 * Submits an email request on behalf of the signed-in user to unsubscribe from an email distribution list. Uses the information in the List-Unsubscribe header. Message senders can use mailing lists in a user-friendly way by including an option for recipients to opt out. They can do so by specifying the List-Unsubscribe header in each message following RFC-2369. Note In particular, for the unsubscribe action to work, the sender must specify mailto: and not URL-based unsubscribe information. Setting that header would also set the unsubscribeEnabled property of the message instance to true, and the unsubscribeData property to the header data. If the unsubscribeEnabled property of a message is true, you can use the unsubscribe action to unsubscribe the user from similar future messages as managed by the message sender. A successful unsubscribe action moves the message to the Deleted Items folder. The actual exclusion of the user from future mail distribution is managed by the sender.
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/messages/{message-id}/unsubscribe']['body'],
  params?: IEndpoints['POST /users/{user-id}/messages/{message-id}/unsubscribe']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/messages/{message-id}/unsubscribe']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/messages/{message-id}/unsubscribe',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'message-id', in: 'path' },
    ],
    params,
    body,
  };
}
