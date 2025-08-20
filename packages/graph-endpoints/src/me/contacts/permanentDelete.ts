import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /me/contacts/{contact-id}/permanentDelete': Operation<
    '/me/contacts/{contact-id}/permanentDelete',
    'post'
  >;
}

/**
 * `POST /me/contacts/{contact-id}/permanentDelete`
 *
 */
export function create(
  body: IEndpoints['POST /me/contacts/{contact-id}/permanentDelete']['body'],
  params?: IEndpoints['POST /me/contacts/{contact-id}/permanentDelete']['parameters']
): EndpointRequest<IEndpoints['POST /me/contacts/{contact-id}/permanentDelete']['response']> {
  return {
    method: 'post',
    path: '/me/contacts/{contact-id}/permanentDelete',
    paramDefs: [{ name: 'contact-id', in: 'path' }],
    params,
    body,
  };
}
