import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/definitions': Operation<
    '/deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/definitions',
    'get'
  >;
  'GET /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/definitions/{groupPolicyDefinition-id}': Operation<
    '/deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/definitions/{groupPolicyDefinition-id}',
    'get'
  >;
}

/**
 * `GET /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/definitions`
 *
 * The group policy definitions associated with the file.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/definitions']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/definitions']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/definitions',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'groupPolicyUploadedDefinitionFile-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/definitions/{groupPolicyDefinition-id}`
 *
 * The group policy definitions associated with the file.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/definitions/{groupPolicyDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/definitions/{groupPolicyDefinition-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/definitions/{groupPolicyDefinition-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'groupPolicyUploadedDefinitionFile-id', in: 'path' },
      { name: 'groupPolicyDefinition-id', in: 'path' },
    ],
    params,
  };
}
