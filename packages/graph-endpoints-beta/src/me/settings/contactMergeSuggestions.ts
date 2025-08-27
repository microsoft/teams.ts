import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/settings/contactMergeSuggestions': Operation<
    '/me/settings/contactMergeSuggestions',
    'delete'
  >;
  'GET /me/settings/contactMergeSuggestions': Operation<
    '/me/settings/contactMergeSuggestions',
    'get'
  >;
  'PATCH /me/settings/contactMergeSuggestions': Operation<
    '/me/settings/contactMergeSuggestions',
    'patch'
  >;
}

/**
 * `DELETE /me/settings/contactMergeSuggestions`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/settings/contactMergeSuggestions']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/settings/contactMergeSuggestions']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/settings/contactMergeSuggestions',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /me/settings/contactMergeSuggestions`
 *
 * Read the properties and relationships of a contactMergeSuggestions object.
 */
export function list(
  params?: IEndpoints['GET /me/settings/contactMergeSuggestions']['parameters']
): EndpointRequest<IEndpoints['GET /me/settings/contactMergeSuggestions']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/settings/contactMergeSuggestions',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /me/settings/contactMergeSuggestions`
 *
 * Update the properties of a contactMergeSuggestions object.
 */
export function update(
  body: IEndpoints['PATCH /me/settings/contactMergeSuggestions']['body'],
  params?: IEndpoints['PATCH /me/settings/contactMergeSuggestions']['parameters']
): EndpointRequest<IEndpoints['PATCH /me/settings/contactMergeSuggestions']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/settings/contactMergeSuggestions',
    paramDefs: [],
    params,
    body,
  };
}
