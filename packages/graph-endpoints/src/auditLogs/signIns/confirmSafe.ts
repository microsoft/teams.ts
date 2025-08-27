import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /auditLogs/signIns/confirmSafe': Operation<'/auditLogs/signIns/confirmSafe', 'post'>;
}

/**
 * `POST /auditLogs/signIns/confirmSafe`
 *
 * Mark an event in Microsoft Entra sign-in logs as safe. Admins can either mark the events flagged as risky by Microsoft Entra ID Protection as safe, or they can mark unflagged events as safe. For details about investigating Identity Protection risks, see How to investigate risk.
 */
export function create(
  body: IEndpoints['POST /auditLogs/signIns/confirmSafe']['body'],
  params?: IEndpoints['POST /auditLogs/signIns/confirmSafe']['parameters']
): EndpointRequest<IEndpoints['POST /auditLogs/signIns/confirmSafe']['response']> {
  return {
    method: 'post',
    path: '/auditLogs/signIns/confirmSafe',
    paramDefs: [],
    params,
    body,
  };
}
