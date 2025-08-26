import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/reports/getUnhealthyFirewallReport': Operation<
    '/deviceManagement/reports/getUnhealthyFirewallReport',
    'post'
  >;
}

/**
 * `POST /deviceManagement/reports/getUnhealthyFirewallReport`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/reports/getUnhealthyFirewallReport']['body'],
  params?: IEndpoints['POST /deviceManagement/reports/getUnhealthyFirewallReport']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/reports/getUnhealthyFirewallReport']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/reports/getUnhealthyFirewallReport',
    paramDefs: [],
    params,
    body,
  };
}
