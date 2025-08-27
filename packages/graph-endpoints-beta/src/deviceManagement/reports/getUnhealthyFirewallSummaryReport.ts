import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/reports/getUnhealthyFirewallSummaryReport': Operation<
    '/deviceManagement/reports/getUnhealthyFirewallSummaryReport',
    'post'
  >;
}

/**
 * `POST /deviceManagement/reports/getUnhealthyFirewallSummaryReport`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/reports/getUnhealthyFirewallSummaryReport']['body'],
  params?: IEndpoints['POST /deviceManagement/reports/getUnhealthyFirewallSummaryReport']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/reports/getUnhealthyFirewallSummaryReport']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/reports/getUnhealthyFirewallSummaryReport',
    paramDefs: [],
    params,
    body,
  };
}
