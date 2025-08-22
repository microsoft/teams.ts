import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/sendMail': Operation<'/users/{user-id}/sendMail', 'post'>;
}

/**
 * `POST /users/{user-id}/sendMail`
 *
 * Send the message specified in the request body using either JSON or MIME format. When using JSON format, you can include a file attachment in the same sendMail action call. When using MIME format: This method saves the message in the Sent Items folder. Alternatively, create a draft message to send later. To learn more about the steps involved in the backend before a mail is delivered to recipients, see here.
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/sendMail']['body'],
  params?: IEndpoints['POST /users/{user-id}/sendMail']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/sendMail']['response']> {
  return {
    method: 'post',
    path: '/users/{user-id}/sendMail',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
