export * as account from './account';
export * as addresses from './addresses';
export * as anniversaries from './anniversaries';
export * as awards from './awards';
export * as certifications from './certifications';
export * as educationalActivities from './educationalActivities';
export * as emails from './emails';
export * as interests from './interests';
export * as languages from './languages';
export * as names from './names';
export * as notes from './notes';
export * as patents from './patents';
export * as phones from './phones';
export * as positions from './positions';
export * as projects from './projects';
export * as publications from './publications';
export * as skills from './skills';
export * as webAccounts from './webAccounts';
export * as websites from './websites';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/profile': Operation<'/me/profile', 'delete'>;
  'GET /me/profile': Operation<'/me/profile', 'get'>;
  'PATCH /me/profile': Operation<'/me/profile', 'patch'>;
}

/**
 * `DELETE /me/profile`
 *
 * Delete a profile object from a user&#x27;s account.
 */
export function del(
  params?: IEndpoints['DELETE /me/profile']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/profile']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/profile',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /me/profile`
 *
 * Retrieve the properties and relationships of a profile object for a given user. The profile resource exposes various rich properties that are descriptive of the user as relationships, for example, anniversaries and education activities. To get one of these navigation properties, use the corresponding GET method on that property. See the methods exposed by profile.
 */
export function get(
  params?: IEndpoints['GET /me/profile']['parameters']
): EndpointRequest<IEndpoints['GET /me/profile']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/profile',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /me/profile`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/profile']['body'],
  params?: IEndpoints['PATCH /me/profile']['parameters']
): EndpointRequest<IEndpoints['PATCH /me/profile']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/profile',
    paramDefs: [],
    params,
    body,
  };
}
