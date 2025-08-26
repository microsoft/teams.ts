import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /me/mailFolders/{mailFolder-id}/messages/{message-id}/replyAll': Operation<
    '/me/mailFolders/{mailFolder-id}/messages/{message-id}/replyAll',
    'post'
  >;
}

/**
  * `POST /me/mailFolders/{mailFolder-id}/messages/{message-id}/replyAll`
  *
  * Reply to all recipients of a message using either JSON or MIME format. When using JSON format:
- Specify either a comment or the body property of the message parameter. Specifying both will return an HTTP 400 Bad Request error.
- If the original message specifies a recipient in the replyTo property, per Internet Message Format (RFC 2822), send the reply to the recipients in replyTo and not the recipient in the from property. When using MIME format:
- Provide the applicable Internet message headers and the MIME content, all encoded in base64 format in the request body.
- Add any attachments and S/MIME properties to the MIME content. This method saves the message in the Sent Items folder. Alternatively, create a draft to reply-all to a message and send it later.
  */
export function create(
  body: IEndpoints['POST /me/mailFolders/{mailFolder-id}/messages/{message-id}/replyAll']['body'],
  params?: IEndpoints['POST /me/mailFolders/{mailFolder-id}/messages/{message-id}/replyAll']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/mailFolders/{mailFolder-id}/messages/{message-id}/replyAll']['response']
> {
  return {
    method: 'post',
    path: '/me/mailFolders/{mailFolder-id}/messages/{message-id}/replyAll',
    paramDefs: [
      { name: 'mailFolder-id', in: 'path' },
      { name: 'message-id', in: 'path' },
    ],
    params,
    body,
  };
}
