import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/deviceConfigurations/hasPayloadLinks': Operation<
    '/deviceManagement/deviceConfigurations/hasPayloadLinks',
    'post'
  >;
}

/**
 * `POST /deviceManagement/deviceConfigurations/hasPayloadLinks`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/deviceConfigurations/hasPayloadLinks']['body'],
  params?: IEndpoints['POST /deviceManagement/deviceConfigurations/hasPayloadLinks']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/deviceConfigurations/hasPayloadLinks']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/deviceConfigurations/hasPayloadLinks',
    paramDefs: [],
    params,
    body,
  };
}
