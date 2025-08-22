export * as directoryAudits from './directoryAudits';
export * as provisioning from './provisioning';
export * as signIns from './signIns';

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
    method: 'patch',
    path: '/auditLogs',
    paramDefs: [],
    params,
    body,
  };
}
