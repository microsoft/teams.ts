import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/settings/regionalAndLanguageSettings': Operation<
    '/users/{user-id}/settings/regionalAndLanguageSettings',
    'delete'
  >;
  'GET /users/{user-id}/settings/regionalAndLanguageSettings': Operation<
    '/users/{user-id}/settings/regionalAndLanguageSettings',
    'get'
  >;
  'PATCH /users/{user-id}/settings/regionalAndLanguageSettings': Operation<
    '/users/{user-id}/settings/regionalAndLanguageSettings',
    'patch'
  >;
}

/**
 * `DELETE /users/{user-id}/settings/regionalAndLanguageSettings`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/settings/regionalAndLanguageSettings']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/settings/regionalAndLanguageSettings']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/settings/regionalAndLanguageSettings',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/settings/regionalAndLanguageSettings`
 *
 * The user&#x27;s preferences for languages, regional locale and date/time formatting.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/settings/regionalAndLanguageSettings']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/settings/regionalAndLanguageSettings']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/settings/regionalAndLanguageSettings',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/settings/regionalAndLanguageSettings`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/settings/regionalAndLanguageSettings']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/settings/regionalAndLanguageSettings']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/settings/regionalAndLanguageSettings']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/settings/regionalAndLanguageSettings',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
