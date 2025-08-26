import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /auditLogs/signIns/dismiss': Operation<'/auditLogs/signIns/dismiss', 'post'>;
}

/**
 * `POST /auditLogs/signIns/dismiss`
 *
 * Mark an event in Microsoft Entra sign-in logs as dismissed. For details about investigating Identity Protection risks, see How to investigate risk.
 */
export function create(
  body: IEndpoints['POST /auditLogs/signIns/dismiss']['body'],
  params?: IEndpoints['POST /auditLogs/signIns/dismiss']['parameters']
): EndpointRequest<IEndpoints['POST /auditLogs/signIns/dismiss']['response']> {
  return {
    method: 'post',
    path: '/auditLogs/signIns/dismiss',
    paramDefs: [],
    params,
    body,
  };
}
