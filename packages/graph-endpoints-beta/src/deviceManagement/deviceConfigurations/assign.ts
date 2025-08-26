import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/assign': Operation<
    '/deviceManagement/deviceConfigurations/{deviceConfiguration-id}/assign',
    'post'
  >;
}

/**
 * `POST /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/assign`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/assign']['body'],
  params?: IEndpoints['POST /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/assign']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/assign']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/deviceConfigurations/{deviceConfiguration-id}/assign',
    paramDefs: [{ name: 'deviceConfiguration-id', in: 'path' }],
    params,
    body,
  };
}
