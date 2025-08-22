import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/messages/{message-id}/permanentDelete': Operation<
    '/users/{user-id}/messages/{message-id}/permanentDelete',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/messages/{message-id}/permanentDelete`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/messages/{message-id}/permanentDelete']['body'],
  params?: IEndpoints['POST /users/{user-id}/messages/{message-id}/permanentDelete']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/messages/{message-id}/permanentDelete']['response']
> {
  return {
    method: 'post',
    path: '/users/{user-id}/messages/{message-id}/permanentDelete',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'message-id', in: 'path' },
    ],
    params,
    body,
  };
}
