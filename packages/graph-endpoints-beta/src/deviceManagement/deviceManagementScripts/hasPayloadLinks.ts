import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/deviceManagementScripts/hasPayloadLinks': Operation<
    '/deviceManagement/deviceManagementScripts/hasPayloadLinks',
    'post'
  >;
}

/**
 * `POST /deviceManagement/deviceManagementScripts/hasPayloadLinks`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/deviceManagementScripts/hasPayloadLinks']['body'],
  params?: IEndpoints['POST /deviceManagement/deviceManagementScripts/hasPayloadLinks']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/deviceManagementScripts/hasPayloadLinks']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/deviceManagementScripts/hasPayloadLinks',
    paramDefs: [],
    params,
    body,
  };
}
