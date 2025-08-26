import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/certificateConnectorDetails/{certificateConnectorDetails-id}/getHealthMetrics': Operation<
    '/deviceManagement/certificateConnectorDetails/{certificateConnectorDetails-id}/getHealthMetrics',
    'post'
  >;
}

/**
 * `POST /deviceManagement/certificateConnectorDetails/{certificateConnectorDetails-id}/getHealthMetrics`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/certificateConnectorDetails/{certificateConnectorDetails-id}/getHealthMetrics']['body'],
  params?: IEndpoints['POST /deviceManagement/certificateConnectorDetails/{certificateConnectorDetails-id}/getHealthMetrics']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/certificateConnectorDetails/{certificateConnectorDetails-id}/getHealthMetrics']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/certificateConnectorDetails/{certificateConnectorDetails-id}/getHealthMetrics',
    paramDefs: [{ name: 'certificateConnectorDetails-id', in: 'path' }],
    params,
    body,
  };
}
