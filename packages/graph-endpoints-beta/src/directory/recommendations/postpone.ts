import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /directory/recommendations/{recommendation-id}/postpone': Operation<
    '/directory/recommendations/{recommendation-id}/postpone',
    'post'
  >;
}

/**
 * `POST /directory/recommendations/{recommendation-id}/postpone`
 *
 * Postpone action on a recommendation object to a specified future date and time by marking its status as postponed. On the date and time provided, Microsoft Entra ID will automatically update the status of the recommendation object to active again.
 */
export function create(
  body: IEndpoints['POST /directory/recommendations/{recommendation-id}/postpone']['body'],
  params?: IEndpoints['POST /directory/recommendations/{recommendation-id}/postpone']['parameters']
): EndpointRequest<
  IEndpoints['POST /directory/recommendations/{recommendation-id}/postpone']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/directory/recommendations/{recommendation-id}/postpone',
    paramDefs: [{ name: 'recommendation-id', in: 'path' }],
    params,
    body,
  };
}
