import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/reports/getRemoteAssistanceSessionsReport': Operation<
    '/deviceManagement/reports/getRemoteAssistanceSessionsReport',
    'post'
  >;
}

/**
 * `POST /deviceManagement/reports/getRemoteAssistanceSessionsReport`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/reports/getRemoteAssistanceSessionsReport']['body'],
  params?: IEndpoints['POST /deviceManagement/reports/getRemoteAssistanceSessionsReport']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/reports/getRemoteAssistanceSessionsReport']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/reports/getRemoteAssistanceSessionsReport',
    paramDefs: [],
    params,
    body,
  };
}
