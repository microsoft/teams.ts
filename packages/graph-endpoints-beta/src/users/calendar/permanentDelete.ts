import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/calendar/permanentDelete': Operation<
    '/users/{user-id}/calendar/permanentDelete',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/calendar/permanentDelete`
 *
 * Permanently delete a calendar folder and the events that it contains and remove them from the mailbox. For more information about item retention, see Configure Deleted Item retention and Recoverable Items quotas.
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/calendar/permanentDelete']['body'],
  params?: IEndpoints['POST /users/{user-id}/calendar/permanentDelete']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/calendar/permanentDelete']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/calendar/permanentDelete',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
