import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/getMailTips': Operation<'/users/{user-id}/getMailTips', 'post'>;
}

/**
  * `POST /users/{user-id}/getMailTips`
  *
  * Get the MailTips of one or more recipients as available to the signed-in user. Note that by making a POST call to the getMailTips action, you can request specific types of MailTips to
be returned for more than one recipient at one time. The requested MailTips are returned in a mailTips collection.
  */
export function create(
  body: IEndpoints['POST /users/{user-id}/getMailTips']['body'],
  params?: IEndpoints['POST /users/{user-id}/getMailTips']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/getMailTips']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/getMailTips',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
