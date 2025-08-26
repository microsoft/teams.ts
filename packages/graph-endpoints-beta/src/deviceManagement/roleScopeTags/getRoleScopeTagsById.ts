import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/roleScopeTags/getRoleScopeTagsById': Operation<
    '/deviceManagement/roleScopeTags/getRoleScopeTagsById',
    'post'
  >;
}

/**
 * `POST /deviceManagement/roleScopeTags/getRoleScopeTagsById`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/roleScopeTags/getRoleScopeTagsById']['body'],
  params?: IEndpoints['POST /deviceManagement/roleScopeTags/getRoleScopeTagsById']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/roleScopeTags/getRoleScopeTagsById']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/roleScopeTags/getRoleScopeTagsById',
    paramDefs: [],
    params,
    body,
  };
}
