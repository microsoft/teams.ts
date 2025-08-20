export * as contactMergeSuggestions from './contactMergeSuggestions';
export * as exchange from './exchange';
export * as itemInsights from './itemInsights';
export * as regionalAndLanguageSettings from './regionalAndLanguageSettings';
export * as shiftPreferences from './shiftPreferences';
export * as storage from './storage';
export * as windows from './windows';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/settings': Operation<'/me/settings', 'delete'>;
  'GET /me/settings': Operation<'/me/settings', 'get'>;
  'PATCH /me/settings': Operation<'/me/settings', 'patch'>;
}

/**
 * `DELETE /me/settings`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/settings']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/settings']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/settings',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /me/settings`
 *
 */
export function list(
  params?: IEndpoints['GET /me/settings']['parameters']
): EndpointRequest<IEndpoints['GET /me/settings']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/settings',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /me/settings`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/settings']['body'],
  params?: IEndpoints['PATCH /me/settings']['parameters']
): EndpointRequest<IEndpoints['PATCH /me/settings']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/settings',
    paramDefs: [],
    params,
    body,
  };
}
