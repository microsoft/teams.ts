export * as extensions from './extensions';
export * as permanentDelete from './permanentDelete';
export * as photo from './photo';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/contacts/{contact-id}': Operation<'/me/contacts/{contact-id}', 'delete'>;
  'GET /me/contacts': Operation<'/me/contacts', 'get'>;
  'GET /me/contacts/{contact-id}': Operation<'/me/contacts/{contact-id}', 'get'>;
  'PATCH /me/contacts/{contact-id}': Operation<'/me/contacts/{contact-id}', 'patch'>;
  'POST /me/contacts': Operation<'/me/contacts', 'post'>;
}

/**
 * `DELETE /me/contacts/{contact-id}`
 *
 * Delete a contact.
 */
export function del(
  params?: IEndpoints['DELETE /me/contacts/{contact-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/contacts/{contact-id}']['response']> {
  return {
    method: 'delete',
    path: '/me/contacts/{contact-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'contact-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/contacts`
 *
 * Get a contact collection from the default contacts folder of the signed-in user. There are two scenarios where an app can get contacts in another user&#x27;s contact folder:
 */
export function list(
  params?: IEndpoints['GET /me/contacts']['parameters']
): EndpointRequest<IEndpoints['GET /me/contacts']['response']> {
  return {
    method: 'get',
    path: '/me/contacts',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `GET /me/contacts/{contact-id}`
 *
 * Retrieve the properties and relationships of a contact object. There are two scenarios where an app can get a contact in another user&#x27;s contact folder:
 */
export function get(
  params?: IEndpoints['GET /me/contacts/{contact-id}']['parameters']
): EndpointRequest<IEndpoints['GET /me/contacts/{contact-id}']['response']> {
  return {
    method: 'get',
    path: '/me/contacts/{contact-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'contact-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/contacts/{contact-id}`
 *
 * Update the properties of a contact object.
 */
export function update(
  body: IEndpoints['PATCH /me/contacts/{contact-id}']['body'],
  params?: IEndpoints['PATCH /me/contacts/{contact-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /me/contacts/{contact-id}']['response']> {
  return {
    method: 'patch',
    path: '/me/contacts/{contact-id}',
    paramDefs: [{ name: 'contact-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /me/contacts`
 *
 * Add a contact to the root Contacts folder or to the contacts endpoint of another contact folder.
 */
export function create(
  body: IEndpoints['POST /me/contacts']['body'],
  params?: IEndpoints['POST /me/contacts']['parameters']
): EndpointRequest<IEndpoints['POST /me/contacts']['response']> {
  return {
    method: 'post',
    path: '/me/contacts',
    paramDefs: [],
    params,
    body,
  };
}
