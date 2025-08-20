import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/androidForWorkSettings/unbind': Operation<
    '/deviceManagement/androidForWorkSettings/unbind',
    'post'
  >;
}

/**
 * `POST /deviceManagement/androidForWorkSettings/unbind`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/androidForWorkSettings/unbind']['body'],
  params?: IEndpoints['POST /deviceManagement/androidForWorkSettings/unbind']['parameters']
): EndpointRequest<IEndpoints['POST /deviceManagement/androidForWorkSettings/unbind']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/androidForWorkSettings/unbind',
    paramDefs: [],
    params,
    body,
  };
}
