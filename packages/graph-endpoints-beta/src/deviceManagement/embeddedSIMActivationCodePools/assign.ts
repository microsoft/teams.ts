import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/assign': Operation<
    '/deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/assign',
    'post'
  >;
}

/**
 * `POST /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/assign`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/assign']['body'],
  params?: IEndpoints['POST /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/assign']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/assign']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/assign',
    paramDefs: [{ name: 'embeddedSIMActivationCodePool-id', in: 'path' }],
    params,
    body,
  };
}
