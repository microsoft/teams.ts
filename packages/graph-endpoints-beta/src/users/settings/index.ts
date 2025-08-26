export * as contactMergeSuggestions from './contactMergeSuggestions';
export * as exchange from './exchange';
export * as itemInsights from './itemInsights';
export * as regionalAndLanguageSettings from './regionalAndLanguageSettings';
export * as shiftPreferences from './shiftPreferences';
export * as storage from './storage';
export * as windows from './windows';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/settings': Operation<'/users/{user-id}/settings', 'delete'>;
  'GET /users/{user-id}/settings': Operation<'/users/{user-id}/settings', 'get'>;
  'PATCH /users/{user-id}/settings': Operation<'/users/{user-id}/settings', 'patch'>;
}

/**
 * `DELETE /users/{user-id}/settings`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/settings']['parameters']
): EndpointRequest<IEndpoints['DELETE /users/{user-id}/settings']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/settings',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/settings`
 *
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/settings']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/settings']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/settings',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/settings`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/settings']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/settings']['parameters']
): EndpointRequest<IEndpoints['PATCH /users/{user-id}/settings']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/settings',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
