import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/androidForWorkSettings/requestSignupUrl': Operation<
    '/deviceManagement/androidForWorkSettings/requestSignupUrl',
    'post'
  >;
}

/**
 * `POST /deviceManagement/androidForWorkSettings/requestSignupUrl`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/androidForWorkSettings/requestSignupUrl']['body'],
  params?: IEndpoints['POST /deviceManagement/androidForWorkSettings/requestSignupUrl']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/androidForWorkSettings/requestSignupUrl']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/androidForWorkSettings/requestSignupUrl',
    paramDefs: [],
    params,
    body,
  };
}
