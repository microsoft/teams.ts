import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /users/{user-id}/contactFolders/{contactFolder-id}/contacts/{contact-id}/photo': Operation<
    '/users/{user-id}/contactFolders/{contactFolder-id}/contacts/{contact-id}/photo',
    'get'
  >;
  'PATCH /users/{user-id}/contactFolders/{contactFolder-id}/contacts/{contact-id}/photo': Operation<
    '/users/{user-id}/contactFolders/{contactFolder-id}/contacts/{contact-id}/photo',
    'patch'
  >;
}

/**
 * `GET /users/{user-id}/contactFolders/{contactFolder-id}/contacts/{contact-id}/photo`
 *
 * Optional contact picture. You can get or set a photo for a contact.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/contactFolders/{contactFolder-id}/contacts/{contact-id}/photo']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/contactFolders/{contactFolder-id}/contacts/{contact-id}/photo']['response']
> {
  return {
    method: 'get',
    path: '/users/{user-id}/contactFolders/{contactFolder-id}/contacts/{contact-id}/photo',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'contactFolder-id', in: 'path' },
      { name: 'contact-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/contactFolders/{contactFolder-id}/contacts/{contact-id}/photo`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/contactFolders/{contactFolder-id}/contacts/{contact-id}/photo']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/contactFolders/{contactFolder-id}/contacts/{contact-id}/photo']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/contactFolders/{contactFolder-id}/contacts/{contact-id}/photo']['response']
> {
  return {
    method: 'patch',
    path: '/users/{user-id}/contactFolders/{contactFolder-id}/contacts/{contact-id}/photo',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'contactFolder-id', in: 'path' },
      { name: 'contact-id', in: 'path' },
    ],
    params,
    body,
  };
}
