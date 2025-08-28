import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /me/mailFolders/{mailFolder-id}/messages/{message-id}/forward': Operation<
    '/me/mailFolders/{mailFolder-id}/messages/{message-id}/forward',
    'post'
  >;
}

/**
  * `POST /me/mailFolders/{mailFolder-id}/messages/{message-id}/forward`
  *
  * Forward a message using either JSON or MIME format. When using JSON format, you can:
- Specify either a comment or the body property of the message parameter. Specifying both will return an HTTP 400 Bad Request error.
- Specify either the toRecipients parameter or the toRecipients property of the message parameter. Specifying both or specifying neither will return an HTTP 400 Bad Request error. When using MIME format:
- Provide the applicable Internet message headers and the MIME content, all encoded in base64 format in the request body.
- Add any attachments and S/MIME properties to the MIME content. This method saves the message in the Sent Items folder. Alternatively, create a draft to forward a message, and send it later.
  */
export function create(
  body: IEndpoints['POST /me/mailFolders/{mailFolder-id}/messages/{message-id}/forward']['body'],
  params?: IEndpoints['POST /me/mailFolders/{mailFolder-id}/messages/{message-id}/forward']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/mailFolders/{mailFolder-id}/messages/{message-id}/forward']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/mailFolders/{mailFolder-id}/messages/{message-id}/forward',
    paramDefs: [
      { name: 'mailFolder-id', in: 'path' },
      { name: 'message-id', in: 'path' },
    ],
    params,
    body,
  };
}
