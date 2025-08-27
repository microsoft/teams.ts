import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /me/contacts/{contact-id}/photo': Operation<'/me/contacts/{contact-id}/photo', 'get'>;
  'PATCH /me/contacts/{contact-id}/photo': Operation<'/me/contacts/{contact-id}/photo', 'patch'>;
}

/**
 * `GET /me/contacts/{contact-id}/photo`
 *
 * Optional contact picture. You can get or set a photo for a contact.
 */
export function get(
  params?: IEndpoints['GET /me/contacts/{contact-id}/photo']['parameters']
): EndpointRequest<IEndpoints['GET /me/contacts/{contact-id}/photo']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/contacts/{contact-id}/photo',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'contact-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/contacts/{contact-id}/photo`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/contacts/{contact-id}/photo']['body'],
  params?: IEndpoints['PATCH /me/contacts/{contact-id}/photo']['parameters']
): EndpointRequest<IEndpoints['PATCH /me/contacts/{contact-id}/photo']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/contacts/{contact-id}/photo',
    paramDefs: [{ name: 'contact-id', in: 'path' }],
    params,
    body,
  };
}
