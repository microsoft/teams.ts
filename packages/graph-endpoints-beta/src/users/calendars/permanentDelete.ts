import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/calendars/{calendar-id}/permanentDelete': Operation<
    '/users/{user-id}/calendars/{calendar-id}/permanentDelete',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/calendars/{calendar-id}/permanentDelete`
 *
 * Permanently delete a calendar folder and the events that it contains and remove them from the mailbox. For more information about item retention, see Configure Deleted Item retention and Recoverable Items quotas.
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/calendars/{calendar-id}/permanentDelete']['body'],
  params?: IEndpoints['POST /users/{user-id}/calendars/{calendar-id}/permanentDelete']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/calendars/{calendar-id}/permanentDelete']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/calendars/{calendar-id}/permanentDelete',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'calendar-id', in: 'path' },
    ],
    params,
    body,
  };
}
