import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /me/messages/{message-id}/reportMessage': Operation<
    '/me/messages/{message-id}/reportMessage',
    'post'
  >;
}

/**
 * `POST /me/messages/{message-id}/reportMessage`
 *
 */
export function create(
  body: IEndpoints['POST /me/messages/{message-id}/reportMessage']['body'],
  params?: IEndpoints['POST /me/messages/{message-id}/reportMessage']['parameters']
): EndpointRequest<IEndpoints['POST /me/messages/{message-id}/reportMessage']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/messages/{message-id}/reportMessage',
    paramDefs: [{ name: 'message-id', in: 'path' }],
    params,
    body,
  };
}
