import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/androidForWorkSettings/syncApps': Operation<
    '/deviceManagement/androidForWorkSettings/syncApps',
    'post'
  >;
}

/**
 * `POST /deviceManagement/androidForWorkSettings/syncApps`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/androidForWorkSettings/syncApps']['body'],
  params?: IEndpoints['POST /deviceManagement/androidForWorkSettings/syncApps']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/androidForWorkSettings/syncApps']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/androidForWorkSettings/syncApps',
    paramDefs: [],
    params,
    body,
  };
}
