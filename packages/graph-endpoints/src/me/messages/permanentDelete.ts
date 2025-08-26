import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /me/messages/{message-id}/permanentDelete': Operation<
    '/me/messages/{message-id}/permanentDelete',
    'post'
  >;
}

/**
 * `POST /me/messages/{message-id}/permanentDelete`
 *
 */
export function create(
  body: IEndpoints['POST /me/messages/{message-id}/permanentDelete']['body'],
  params?: IEndpoints['POST /me/messages/{message-id}/permanentDelete']['parameters']
): EndpointRequest<IEndpoints['POST /me/messages/{message-id}/permanentDelete']['response']> {
  return {
    method: 'post',
    path: '/me/messages/{message-id}/permanentDelete',
    paramDefs: [{ name: 'message-id', in: 'path' }],
    params,
    body,
  };
}
