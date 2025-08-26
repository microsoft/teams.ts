import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /security/alerts/updateAlerts': Operation<'/security/alerts/updateAlerts', 'post'>;
}

/**
 * `POST /security/alerts/updateAlerts`
 *
 * Update multiple alerts in one request instead of multiple requests.
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /security/alerts/updateAlerts']['body'],
  params?: IEndpoints['POST /security/alerts/updateAlerts']['parameters']
): EndpointRequest<IEndpoints['POST /security/alerts/updateAlerts']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/security/alerts/updateAlerts',
    paramDefs: [],
    params,
    body,
  };
}
