import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/certificateConnectorDetails/{certificateConnectorDetails-id}/getHealthMetricTimeSeries': Operation<
    '/deviceManagement/certificateConnectorDetails/{certificateConnectorDetails-id}/getHealthMetricTimeSeries',
    'post'
  >;
}

/**
 * `POST /deviceManagement/certificateConnectorDetails/{certificateConnectorDetails-id}/getHealthMetricTimeSeries`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/certificateConnectorDetails/{certificateConnectorDetails-id}/getHealthMetricTimeSeries']['body'],
  params?: IEndpoints['POST /deviceManagement/certificateConnectorDetails/{certificateConnectorDetails-id}/getHealthMetricTimeSeries']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/certificateConnectorDetails/{certificateConnectorDetails-id}/getHealthMetricTimeSeries']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/certificateConnectorDetails/{certificateConnectorDetails-id}/getHealthMetricTimeSeries',
    paramDefs: [{ name: 'certificateConnectorDetails-id', in: 'path' }],
    params,
    body,
  };
}
