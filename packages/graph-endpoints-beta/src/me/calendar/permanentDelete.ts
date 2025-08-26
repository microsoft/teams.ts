import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /me/calendar/permanentDelete': Operation<'/me/calendar/permanentDelete', 'post'>;
}

/**
 * `POST /me/calendar/permanentDelete`
 *
 * Permanently delete a calendar folder and the events that it contains and remove them from the mailbox. For more information about item retention, see Configure Deleted Item retention and Recoverable Items quotas.
 */
export function create(
  body: IEndpoints['POST /me/calendar/permanentDelete']['body'],
  params?: IEndpoints['POST /me/calendar/permanentDelete']['parameters']
): EndpointRequest<IEndpoints['POST /me/calendar/permanentDelete']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/calendar/permanentDelete',
    paramDefs: [],
    params,
    body,
  };
}
