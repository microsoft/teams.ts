import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/virtualEndpoint/reports/getFrontlineReport': Operation<
    '/deviceManagement/virtualEndpoint/reports/getFrontlineReport',
    'post'
  >;
}

/**
 * `POST /deviceManagement/virtualEndpoint/reports/getFrontlineReport`
 *
 * Get the Windows 365 Frontline reports, such as real-time or historical data reports.
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /deviceManagement/virtualEndpoint/reports/getFrontlineReport']['body'],
  params?: IEndpoints['POST /deviceManagement/virtualEndpoint/reports/getFrontlineReport']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/virtualEndpoint/reports/getFrontlineReport']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/virtualEndpoint/reports/getFrontlineReport',
    paramDefs: [],
    params,
    body,
  };
}
