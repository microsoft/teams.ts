export * as customSecurityAttributeAudits from './customSecurityAttributeAudits';
export * as directoryAudits from './directoryAudits';
export * as directoryProvisioning from './directoryProvisioning';
export * as provisioning from './provisioning';
export * as signIns from './signIns';
export * as signUps from './signUps';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /auditLogs': Operation<'/auditLogs', 'get'>;
  'PATCH /auditLogs': Operation<'/auditLogs', 'patch'>;
}

/**
 * `GET /auditLogs`
 *
 */
export function list(
  params?: IEndpoints['GET /auditLogs']['parameters']
): EndpointRequest<IEndpoints['GET /auditLogs']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/auditLogs',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /auditLogs`
 *
 */
export function update(
  body: IEndpoints['PATCH /auditLogs']['body'],
  params?: IEndpoints['PATCH /auditLogs']['parameters']
): EndpointRequest<IEndpoints['PATCH /auditLogs']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/auditLogs',
    paramDefs: [],
    params,
    body,
  };
}
