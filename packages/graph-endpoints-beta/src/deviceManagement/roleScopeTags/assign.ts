import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/roleScopeTags/{roleScopeTag-id}/assign': Operation<
    '/deviceManagement/roleScopeTags/{roleScopeTag-id}/assign',
    'post'
  >;
}

/**
 * `POST /deviceManagement/roleScopeTags/{roleScopeTag-id}/assign`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/roleScopeTags/{roleScopeTag-id}/assign']['body'],
  params?: IEndpoints['POST /deviceManagement/roleScopeTags/{roleScopeTag-id}/assign']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/roleScopeTags/{roleScopeTag-id}/assign']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/roleScopeTags/{roleScopeTag-id}/assign',
    paramDefs: [{ name: 'roleScopeTag-id', in: 'path' }],
    params,
    body,
  };
}
