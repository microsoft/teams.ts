import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/assign': Operation<
    '/deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/assign',
    'post'
  >;
}

/**
 * `POST /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/assign`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/assign']['body'],
  params?: IEndpoints['POST /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/assign']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/assign']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/assign',
    paramDefs: [{ name: 'hardwareConfiguration-id', in: 'path' }],
    params,
    body,
  };
}
