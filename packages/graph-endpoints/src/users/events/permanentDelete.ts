import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/events/{event-id}/permanentDelete': Operation<
    '/users/{user-id}/events/{event-id}/permanentDelete',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/events/{event-id}/permanentDelete`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/events/{event-id}/permanentDelete']['body'],
  params?: IEndpoints['POST /users/{user-id}/events/{event-id}/permanentDelete']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/events/{event-id}/permanentDelete']['response']
> {
  return {
    method: 'post',
    path: '/users/{user-id}/events/{event-id}/permanentDelete',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'event-id', in: 'path' },
    ],
    params,
    body,
  };
}
