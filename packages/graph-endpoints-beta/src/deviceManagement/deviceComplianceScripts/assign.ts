import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/assign': Operation<
    '/deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/assign',
    'post'
  >;
}

/**
 * `POST /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/assign`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/assign']['body'],
  params?: IEndpoints['POST /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/assign']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/assign']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/assign',
    paramDefs: [{ name: 'deviceComplianceScript-id', in: 'path' }],
    params,
    body,
  };
}
