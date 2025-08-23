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
 * Not yet documented
 */
export function create(
  body: IEndpoints['POST /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/assign']['body'],
  params?: IEndpoints['POST /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/assign']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/assign']['response']
> {
  return {
    method: 'post',
    path: '/deviceManagement/deviceConfigurations/{deviceConfiguration-id}/assign',
    paramDefs: [{ name: 'deviceConfiguration-id', in: 'path' }],
    params,
    body,
  };
}
