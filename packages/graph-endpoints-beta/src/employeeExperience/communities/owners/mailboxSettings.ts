import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /employeeExperience/communities/{community-id}/owners/{user-id}/mailboxSettings': Operation<
    '/employeeExperience/communities/{community-id}/owners/{user-id}/mailboxSettings',
    'get'
  >;
  'PATCH /employeeExperience/communities/{community-id}/owners/{user-id}/mailboxSettings': Operation<
    '/employeeExperience/communities/{community-id}/owners/{user-id}/mailboxSettings',
    'patch'
  >;
}

/**
 * `GET /employeeExperience/communities/{community-id}/owners/{user-id}/mailboxSettings`
 *
 * Settings for the primary mailbox of the signed-in user. You can get or update settings for sending automatic replies to incoming messages, locale, and time zone. For more information, see User preferences for languages and regional formats. Returned only on $select.
 */
export function list(
  params?: IEndpoints['GET /employeeExperience/communities/{community-id}/owners/{user-id}/mailboxSettings']['parameters']
): EndpointRequest<
  IEndpoints['GET /employeeExperience/communities/{community-id}/owners/{user-id}/mailboxSettings']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/employeeExperience/communities/{community-id}/owners/{user-id}/mailboxSettings',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'community-id', in: 'path' },
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /employeeExperience/communities/{community-id}/owners/{user-id}/mailboxSettings`
 *
 */
export function update(
  body: IEndpoints['PATCH /employeeExperience/communities/{community-id}/owners/{user-id}/mailboxSettings']['body'],
  params?: IEndpoints['PATCH /employeeExperience/communities/{community-id}/owners/{user-id}/mailboxSettings']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /employeeExperience/communities/{community-id}/owners/{user-id}/mailboxSettings']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/employeeExperience/communities/{community-id}/owners/{user-id}/mailboxSettings',
    paramDefs: [
      { name: 'community-id', in: 'path' },
      { name: 'user-id', in: 'path' },
    ],
    params,
    body,
  };
}
