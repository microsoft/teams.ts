import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/deviceHealthScripts/enableGlobalScripts': Operation<
    '/deviceManagement/deviceHealthScripts/enableGlobalScripts',
    'post'
  >;
}

/**
 * `POST /deviceManagement/deviceHealthScripts/enableGlobalScripts`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/deviceHealthScripts/enableGlobalScripts']['body'],
  params?: IEndpoints['POST /deviceManagement/deviceHealthScripts/enableGlobalScripts']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/deviceHealthScripts/enableGlobalScripts']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/deviceHealthScripts/enableGlobalScripts',
    paramDefs: [],
    params,
    body,
  };
}
