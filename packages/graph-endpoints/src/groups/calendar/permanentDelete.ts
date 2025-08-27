import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /groups/{group-id}/calendar/permanentDelete': Operation<
    '/groups/{group-id}/calendar/permanentDelete',
    'post'
  >;
}

/**
 * `POST /groups/{group-id}/calendar/permanentDelete`
 *
 * Permanently delete a calendar folder and the events that it contains and remove them from the mailbox. For more information about item retention, see Configure deleted item retention and recoverable items quotas.
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/calendar/permanentDelete']['body'],
  params?: IEndpoints['POST /groups/{group-id}/calendar/permanentDelete']['parameters']
): EndpointRequest<IEndpoints['POST /groups/{group-id}/calendar/permanentDelete']['response']> {
  return {
    method: 'post',
    path: '/groups/{group-id}/calendar/permanentDelete',
    paramDefs: [{ name: 'group-id', in: 'path' }],
    params,
    body,
  };
}
