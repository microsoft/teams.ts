import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /me/getMailTips': Operation<'/me/getMailTips', 'post'>;
}

/**
  * `POST /me/getMailTips`
  *
  * Get the MailTips of one or more recipients as available to the signed-in user. Note that by making a POST call to the getMailTips action, you can request specific types of MailTips to
be returned for more than one recipient at one time. The requested MailTips are returned in a mailTips collection.
  */
export function create(
  body: IEndpoints['POST /me/getMailTips']['body'],
  params?: IEndpoints['POST /me/getMailTips']['parameters']
): EndpointRequest<IEndpoints['POST /me/getMailTips']['response']> {
  return {
    method: 'post',
    path: '/me/getMailTips',
    paramDefs: [],
    params,
    body,
  };
}
