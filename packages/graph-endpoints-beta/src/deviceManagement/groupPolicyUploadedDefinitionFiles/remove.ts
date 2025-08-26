import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/remove': Operation<
    '/deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/remove',
    'post'
  >;
}

/**
 * `POST /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/remove`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/remove']['body'],
  params?: IEndpoints['POST /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/remove']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/remove']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/remove',
    paramDefs: [{ name: 'groupPolicyUploadedDefinitionFile-id', in: 'path' }],
    params,
    body,
  };
}
