import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/mailFolders/{mailFolder-id}/messages/{message-id}/createReplyAll': Operation<
    '/users/{user-id}/mailFolders/{mailFolder-id}/messages/{message-id}/createReplyAll',
    'post'
  >;
}

/**
  * `POST /users/{user-id}/mailFolders/{mailFolder-id}/messages/{message-id}/createReplyAll`
  *
  * Create a draft to reply to the sender and all recipients of a message in either JSON or MIME format. When using JSON format:
- Specify either a comment or the body property of the message parameter. Specifying both will return an HTTP 400 Bad Request error.
- If the original message specifies a recipient in the replyTo property, per Internet Message Format (RFC 2822), you should send the reply to the recipients in the replyTo and toRecipients properties, and not the recipients in the from and toRecipients properties.
- You can update the draft later to add reply content to the body or change other message properties. When using MIME format:
- Provide the applicable Internet message headers and the MIME content, all encoded in base64 format in the request body.
- Add any attachments and S/MIME properties to the MIME content. Send the draft message in a subsequent operation. Alternatively, reply-all to a message in a single action.
  */
export function create(
  body: IEndpoints['POST /users/{user-id}/mailFolders/{mailFolder-id}/messages/{message-id}/createReplyAll']['body'],
  params?: IEndpoints['POST /users/{user-id}/mailFolders/{mailFolder-id}/messages/{message-id}/createReplyAll']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/mailFolders/{mailFolder-id}/messages/{message-id}/createReplyAll']['response']
> {
  return {
    method: 'post',
    path: '/users/{user-id}/mailFolders/{mailFolder-id}/messages/{message-id}/createReplyAll',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'mailFolder-id', in: 'path' },
      { name: 'message-id', in: 'path' },
    ],
    params,
    body,
  };
}
