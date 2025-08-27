import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/removeLanguageFiles': Operation<
    '/deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/removeLanguageFiles',
    'post'
  >;
}

/**
 * `POST /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/removeLanguageFiles`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/removeLanguageFiles']['body'],
  params?: IEndpoints['POST /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/removeLanguageFiles']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/removeLanguageFiles']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/removeLanguageFiles',
    paramDefs: [{ name: 'groupPolicyUploadedDefinitionFile-id', in: 'path' }],
    params,
    body,
  };
}
