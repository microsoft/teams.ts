import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/deviceCompliancePolicies/hasPayloadLinks': Operation<
    '/deviceManagement/deviceCompliancePolicies/hasPayloadLinks',
    'post'
  >;
}

/**
 * `POST /deviceManagement/deviceCompliancePolicies/hasPayloadLinks`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/deviceCompliancePolicies/hasPayloadLinks']['body'],
  params?: IEndpoints['POST /deviceManagement/deviceCompliancePolicies/hasPayloadLinks']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/deviceCompliancePolicies/hasPayloadLinks']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/deviceCompliancePolicies/hasPayloadLinks',
    paramDefs: [],
    params,
    body,
  };
}
