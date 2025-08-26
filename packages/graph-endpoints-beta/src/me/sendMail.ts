import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /me/sendMail': Operation<'/me/sendMail', 'post'>;
}

/**
 * `POST /me/sendMail`
 *
 * Send the message specified in the request body using either JSON or MIME format. When using JSON format, you can include an attachment and use a mention to call out another user in the new message. When using MIME format: This method saves the message in the Sent Items folder. Alternatively, create a draft message to send later. To learn more about the steps involved in the backend before a mail is delivered to recipients, see here.
 */
export function create(
  body: IEndpoints['POST /me/sendMail']['body'],
  params?: IEndpoints['POST /me/sendMail']['parameters']
): EndpointRequest<IEndpoints['POST /me/sendMail']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/sendMail',
    paramDefs: [],
    params,
    body,
  };
}
