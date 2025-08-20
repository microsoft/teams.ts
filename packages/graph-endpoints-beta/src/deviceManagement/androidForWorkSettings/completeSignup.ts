import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/androidForWorkSettings/completeSignup': Operation<
    '/deviceManagement/androidForWorkSettings/completeSignup',
    'post'
  >;
}

/**
 * `POST /deviceManagement/androidForWorkSettings/completeSignup`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/androidForWorkSettings/completeSignup']['body'],
  params?: IEndpoints['POST /deviceManagement/androidForWorkSettings/completeSignup']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/androidForWorkSettings/completeSignup']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/androidForWorkSettings/completeSignup',
    paramDefs: [],
    params,
    body,
  };
}
