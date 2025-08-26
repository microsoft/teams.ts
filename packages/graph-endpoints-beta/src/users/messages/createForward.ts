import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/messages/{message-id}/createForward': Operation<
    '/users/{user-id}/messages/{message-id}/createForward',
    'post'
  >;
}

/**
  * `POST /users/{user-id}/messages/{message-id}/createForward`
  *
  * Create a draft to forward an existing message, in either JSON or MIME format. When using JSON format, you can:
- Specify either a comment or the body property of the message parameter. Specifying both will return an HTTP 400 Bad Request error.
- Specify either the toRecipients parameter or the toRecipients property of the message parameter. Specifying both or specifying neither will return an HTTP 400 Bad Request error.
- Update the draft later to add content to the body or change other message properties. When using MIME format:
- Provide the applicable Internet message headers and the MIME content, all encoded in base64 format in the request body.
- Add any attachments and S/MIME properties to the MIME content. Send the draft message in a subsequent operation. Alternatively, forward a message in a single operation.
  */
export function create(
  body: IEndpoints['POST /users/{user-id}/messages/{message-id}/createForward']['body'],
  params?: IEndpoints['POST /users/{user-id}/messages/{message-id}/createForward']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/messages/{message-id}/createForward']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/messages/{message-id}/createForward',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'message-id', in: 'path' },
    ],
    params,
    body,
  };
}
