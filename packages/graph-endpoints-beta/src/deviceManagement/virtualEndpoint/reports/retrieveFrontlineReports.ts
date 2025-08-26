import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/virtualEndpoint/reports/retrieveFrontlineReports': Operation<
    '/deviceManagement/virtualEndpoint/reports/retrieveFrontlineReports',
    'post'
  >;
}

/**
 * `POST /deviceManagement/virtualEndpoint/reports/retrieveFrontlineReports`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/virtualEndpoint/reports/retrieveFrontlineReports']['body'],
  params?: IEndpoints['POST /deviceManagement/virtualEndpoint/reports/retrieveFrontlineReports']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/virtualEndpoint/reports/retrieveFrontlineReports']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/virtualEndpoint/reports/retrieveFrontlineReports',
    paramDefs: [],
    params,
    body,
  };
}
