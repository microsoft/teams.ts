import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /sites/{site-id}/pages/{baseSitePage-id}/createdByUser/mailboxSettings': Operation<
    '/sites/{site-id}/pages/{baseSitePage-id}/createdByUser/mailboxSettings',
    'get'
  >;
  'PATCH /sites/{site-id}/pages/{baseSitePage-id}/createdByUser/mailboxSettings': Operation<
    '/sites/{site-id}/pages/{baseSitePage-id}/createdByUser/mailboxSettings',
    'patch'
  >;
}

/**
 * `GET /sites/{site-id}/pages/{baseSitePage-id}/createdByUser/mailboxSettings`
 *
 * Settings for the primary mailbox of the signed-in user. You can get or update settings for sending automatic replies to incoming messages, locale, and time zone. Returned only on $select.
 */
export function list(
  params?: IEndpoints['GET /sites/{site-id}/pages/{baseSitePage-id}/createdByUser/mailboxSettings']['parameters']
): EndpointRequest<
  IEndpoints['GET /sites/{site-id}/pages/{baseSitePage-id}/createdByUser/mailboxSettings']['response']
> {
  return {
    method: 'get',
    path: '/sites/{site-id}/pages/{baseSitePage-id}/createdByUser/mailboxSettings',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'site-id', in: 'path' },
      { name: 'baseSitePage-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /sites/{site-id}/pages/{baseSitePage-id}/createdByUser/mailboxSettings`
 *
 */
export function update(
  body: IEndpoints['PATCH /sites/{site-id}/pages/{baseSitePage-id}/createdByUser/mailboxSettings']['body'],
  params?: IEndpoints['PATCH /sites/{site-id}/pages/{baseSitePage-id}/createdByUser/mailboxSettings']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /sites/{site-id}/pages/{baseSitePage-id}/createdByUser/mailboxSettings']['response']
> {
  return {
    method: 'patch',
    path: '/sites/{site-id}/pages/{baseSitePage-id}/createdByUser/mailboxSettings',
    paramDefs: [
      { name: 'site-id', in: 'path' },
      { name: 'baseSitePage-id', in: 'path' },
    ],
    params,
    body,
  };
}
