import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /privacy/subjectRightsRequests/{subjectRightsRequest-id}/collaborators/{user-id}/mailboxSettings': Operation<
    '/privacy/subjectRightsRequests/{subjectRightsRequest-id}/collaborators/{user-id}/mailboxSettings',
    'get'
  >;
  'PATCH /privacy/subjectRightsRequests/{subjectRightsRequest-id}/collaborators/{user-id}/mailboxSettings': Operation<
    '/privacy/subjectRightsRequests/{subjectRightsRequest-id}/collaborators/{user-id}/mailboxSettings',
    'patch'
  >;
}

/**
 * `GET /privacy/subjectRightsRequests/{subjectRightsRequest-id}/collaborators/{user-id}/mailboxSettings`
 *
 * Settings for the primary mailbox of the signed-in user. You can get or update settings for sending automatic replies to incoming messages, locale, and time zone. For more information, see User preferences for languages and regional formats. Returned only on $select.
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /privacy/subjectRightsRequests/{subjectRightsRequest-id}/collaborators/{user-id}/mailboxSettings']['parameters']
): EndpointRequest<
  IEndpoints['GET /privacy/subjectRightsRequests/{subjectRightsRequest-id}/collaborators/{user-id}/mailboxSettings']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/privacy/subjectRightsRequests/{subjectRightsRequest-id}/collaborators/{user-id}/mailboxSettings',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'subjectRightsRequest-id', in: 'path' },
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /privacy/subjectRightsRequests/{subjectRightsRequest-id}/collaborators/{user-id}/mailboxSettings`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /privacy/subjectRightsRequests/{subjectRightsRequest-id}/collaborators/{user-id}/mailboxSettings']['body'],
  params?: IEndpoints['PATCH /privacy/subjectRightsRequests/{subjectRightsRequest-id}/collaborators/{user-id}/mailboxSettings']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /privacy/subjectRightsRequests/{subjectRightsRequest-id}/collaborators/{user-id}/mailboxSettings']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/privacy/subjectRightsRequests/{subjectRightsRequest-id}/collaborators/{user-id}/mailboxSettings',
    paramDefs: [
      { name: 'subjectRightsRequest-id', in: 'path' },
      { name: 'user-id', in: 'path' },
    ],
    params,
    body,
  };
}
