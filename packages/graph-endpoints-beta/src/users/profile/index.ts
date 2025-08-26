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
  'DELETE /users/{user-id}/profile': Operation<'/users/{user-id}/profile', 'delete'>;
  'GET /users/{user-id}/profile': Operation<'/users/{user-id}/profile', 'get'>;
  'PATCH /users/{user-id}/profile': Operation<'/users/{user-id}/profile', 'patch'>;
}

/**
 * `DELETE /users/{user-id}/profile`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/profile']['parameters']
): EndpointRequest<IEndpoints['DELETE /users/{user-id}/profile']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/profile',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/profile`
 *
 * Represents properties that are descriptive of a user in a tenant.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/profile']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/profile']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/profile',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/profile`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/profile']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/profile']['parameters']
): EndpointRequest<IEndpoints['PATCH /users/{user-id}/profile']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/profile',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
