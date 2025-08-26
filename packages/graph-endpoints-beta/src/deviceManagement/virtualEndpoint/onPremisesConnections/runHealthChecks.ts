import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/virtualEndpoint/onPremisesConnections/{cloudPcOnPremisesConnection-id}/runHealthChecks': Operation<
    '/deviceManagement/virtualEndpoint/onPremisesConnections/{cloudPcOnPremisesConnection-id}/runHealthChecks',
    'post'
  >;
}

/**
 * `POST /deviceManagement/virtualEndpoint/onPremisesConnections/{cloudPcOnPremisesConnection-id}/runHealthChecks`
 *
 * Run health checks on the cloudPcOnPremisesConnection object. It triggers a new health check for this cloudPcOnPremisesConnection object and change the healthCheckStatus and healthCheckStatusDetails properties when check finished.
 */
export function create(
  body: IEndpoints['POST /deviceManagement/virtualEndpoint/onPremisesConnections/{cloudPcOnPremisesConnection-id}/runHealthChecks']['body'],
  params?: IEndpoints['POST /deviceManagement/virtualEndpoint/onPremisesConnections/{cloudPcOnPremisesConnection-id}/runHealthChecks']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/virtualEndpoint/onPremisesConnections/{cloudPcOnPremisesConnection-id}/runHealthChecks']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/virtualEndpoint/onPremisesConnections/{cloudPcOnPremisesConnection-id}/runHealthChecks',
    paramDefs: [{ name: 'cloudPcOnPremisesConnection-id', in: 'path' }],
    params,
    body,
  };
}
