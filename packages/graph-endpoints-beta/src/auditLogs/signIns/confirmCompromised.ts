import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /auditLogs/signIns/confirmCompromised': Operation<
    '/auditLogs/signIns/confirmCompromised',
    'post'
  >;
}

/**
 * `POST /auditLogs/signIns/confirmCompromised`
 *
 * Allow admins to mark an event in the Microsoft Entra sign-in logs as risky. Events marked as risky by an admin are immediately flagged as high risk in Microsoft Entra ID Protection, overriding previous risk states. Admins can confirm that events flagged as risky by Microsoft Entra ID Protection are in fact risky. For details about investigating Identity Protection risks, see How to investigate risk.
 */
export function create(
  body: IEndpoints['POST /auditLogs/signIns/confirmCompromised']['body'],
  params?: IEndpoints['POST /auditLogs/signIns/confirmCompromised']['parameters']
): EndpointRequest<IEndpoints['POST /auditLogs/signIns/confirmCompromised']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/auditLogs/signIns/confirmCompromised',
    paramDefs: [],
    params,
    body,
  };
}
