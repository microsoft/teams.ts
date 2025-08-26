import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/settings/contactMergeSuggestions': Operation<
    '/users/{user-id}/settings/contactMergeSuggestions',
    'delete'
  >;
  'GET /users/{user-id}/settings/contactMergeSuggestions': Operation<
    '/users/{user-id}/settings/contactMergeSuggestions',
    'get'
  >;
  'PATCH /users/{user-id}/settings/contactMergeSuggestions': Operation<
    '/users/{user-id}/settings/contactMergeSuggestions',
    'patch'
  >;
}

/**
 * `DELETE /users/{user-id}/settings/contactMergeSuggestions`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/settings/contactMergeSuggestions']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/settings/contactMergeSuggestions']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/settings/contactMergeSuggestions',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/settings/contactMergeSuggestions`
 *
 * The user&#x27;s settings for the visibility of merge suggestion for the duplicate contacts in the user&#x27;s contact list.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/settings/contactMergeSuggestions']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/settings/contactMergeSuggestions']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/settings/contactMergeSuggestions',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/settings/contactMergeSuggestions`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/settings/contactMergeSuggestions']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/settings/contactMergeSuggestions']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/settings/contactMergeSuggestions']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/settings/contactMergeSuggestions',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
