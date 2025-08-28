import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/reports/getUnhealthyDefenderAgentsReport': Operation<
    '/deviceManagement/reports/getUnhealthyDefenderAgentsReport',
    'post'
  >;
}

/**
 * `POST /deviceManagement/reports/getUnhealthyDefenderAgentsReport`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/reports/getUnhealthyDefenderAgentsReport']['body'],
  params?: IEndpoints['POST /deviceManagement/reports/getUnhealthyDefenderAgentsReport']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/reports/getUnhealthyDefenderAgentsReport']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/reports/getUnhealthyDefenderAgentsReport',
    paramDefs: [],
    params,
    body,
  };
}
