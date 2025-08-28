import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /security/subjectRightsRequests/{subjectRightsRequest-id}/collaborators/{user-id}/mailboxSettings': Operation<
    '/security/subjectRightsRequests/{subjectRightsRequest-id}/collaborators/{user-id}/mailboxSettings',
    'get'
  >;
  'PATCH /security/subjectRightsRequests/{subjectRightsRequest-id}/collaborators/{user-id}/mailboxSettings': Operation<
    '/security/subjectRightsRequests/{subjectRightsRequest-id}/collaborators/{user-id}/mailboxSettings',
    'patch'
  >;
}

/**
 * `GET /security/subjectRightsRequests/{subjectRightsRequest-id}/collaborators/{user-id}/mailboxSettings`
 *
 * Settings for the primary mailbox of the signed-in user. You can get or update settings for sending automatic replies to incoming messages, locale, and time zone. For more information, see User preferences for languages and regional formats. Returned only on $select.
 */
export function list(
  params?: IEndpoints['GET /security/subjectRightsRequests/{subjectRightsRequest-id}/collaborators/{user-id}/mailboxSettings']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/subjectRightsRequests/{subjectRightsRequest-id}/collaborators/{user-id}/mailboxSettings']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/subjectRightsRequests/{subjectRightsRequest-id}/collaborators/{user-id}/mailboxSettings',
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
 * `PATCH /security/subjectRightsRequests/{subjectRightsRequest-id}/collaborators/{user-id}/mailboxSettings`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/subjectRightsRequests/{subjectRightsRequest-id}/collaborators/{user-id}/mailboxSettings']['body'],
  params?: IEndpoints['PATCH /security/subjectRightsRequests/{subjectRightsRequest-id}/collaborators/{user-id}/mailboxSettings']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /security/subjectRightsRequests/{subjectRightsRequest-id}/collaborators/{user-id}/mailboxSettings']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/security/subjectRightsRequests/{subjectRightsRequest-id}/collaborators/{user-id}/mailboxSettings',
    paramDefs: [
      { name: 'subjectRightsRequest-id', in: 'path' },
      { name: 'user-id', in: 'path' },
    ],
    params,
    body,
  };
}
