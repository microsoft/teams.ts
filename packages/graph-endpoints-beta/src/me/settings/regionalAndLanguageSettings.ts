import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/settings/regionalAndLanguageSettings': Operation<
    '/me/settings/regionalAndLanguageSettings',
    'delete'
  >;
  'GET /me/settings/regionalAndLanguageSettings': Operation<
    '/me/settings/regionalAndLanguageSettings',
    'get'
  >;
  'PATCH /me/settings/regionalAndLanguageSettings': Operation<
    '/me/settings/regionalAndLanguageSettings',
    'patch'
  >;
}

/**
 * `DELETE /me/settings/regionalAndLanguageSettings`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/settings/regionalAndLanguageSettings']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/settings/regionalAndLanguageSettings']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/settings/regionalAndLanguageSettings',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /me/settings/regionalAndLanguageSettings`
 *
 * Retrieve the properties of a user&#x27;s regionalAndLanguageSettings.
 */
export function list(
  params?: IEndpoints['GET /me/settings/regionalAndLanguageSettings']['parameters']
): EndpointRequest<IEndpoints['GET /me/settings/regionalAndLanguageSettings']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/settings/regionalAndLanguageSettings',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /me/settings/regionalAndLanguageSettings`
 *
 * Update some or all of the properties of a regionalAndLanguageSettings object.
 */
export function update(
  body: IEndpoints['PATCH /me/settings/regionalAndLanguageSettings']['body'],
  params?: IEndpoints['PATCH /me/settings/regionalAndLanguageSettings']['parameters']
): EndpointRequest<IEndpoints['PATCH /me/settings/regionalAndLanguageSettings']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/settings/regionalAndLanguageSettings',
    paramDefs: [],
    params,
    body,
  };
}
