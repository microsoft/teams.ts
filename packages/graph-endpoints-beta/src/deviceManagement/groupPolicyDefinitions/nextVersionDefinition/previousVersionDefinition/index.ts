export * as category from './category';
export * as definitionFile from './definitionFile';
export * as presentations from './presentations';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/nextVersionDefinition/previousVersionDefinition': Operation<
    '/deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/nextVersionDefinition/previousVersionDefinition',
    'delete'
  >;
  'GET /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/nextVersionDefinition/previousVersionDefinition': Operation<
    '/deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/nextVersionDefinition/previousVersionDefinition',
    'get'
  >;
  'PATCH /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/nextVersionDefinition/previousVersionDefinition': Operation<
    '/deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/nextVersionDefinition/previousVersionDefinition',
    'patch'
  >;
}

/**
 * `DELETE /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/nextVersionDefinition/previousVersionDefinition`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/nextVersionDefinition/previousVersionDefinition']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/nextVersionDefinition/previousVersionDefinition']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/nextVersionDefinition/previousVersionDefinition',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'groupPolicyDefinition-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/nextVersionDefinition/previousVersionDefinition`
 *
 * Definition of the previous version of this definition
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/nextVersionDefinition/previousVersionDefinition']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/nextVersionDefinition/previousVersionDefinition']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/nextVersionDefinition/previousVersionDefinition',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'groupPolicyDefinition-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/nextVersionDefinition/previousVersionDefinition`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/nextVersionDefinition/previousVersionDefinition']['body'],
  params?: IEndpoints['PATCH /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/nextVersionDefinition/previousVersionDefinition']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/nextVersionDefinition/previousVersionDefinition']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/nextVersionDefinition/previousVersionDefinition',
    paramDefs: [{ name: 'groupPolicyDefinition-id', in: 'path' }],
    params,
    body,
  };
}
