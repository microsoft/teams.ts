export * as category from './category';
export * as definitionFile from './definitionFile';
export * as presentations from './presentations';
export * as previousVersionDefinition from './previousVersionDefinition';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/nextVersionDefinition': Operation<
    '/deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/nextVersionDefinition',
    'delete'
  >;
  'GET /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/nextVersionDefinition': Operation<
    '/deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/nextVersionDefinition',
    'get'
  >;
  'PATCH /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/nextVersionDefinition': Operation<
    '/deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/nextVersionDefinition',
    'patch'
  >;
}

/**
 * `DELETE /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/nextVersionDefinition`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/nextVersionDefinition']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/nextVersionDefinition']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/nextVersionDefinition',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'groupPolicyDefinition-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/nextVersionDefinition`
 *
 * Definition of the next version of this definition
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/nextVersionDefinition']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/nextVersionDefinition']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/nextVersionDefinition',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'groupPolicyDefinition-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/nextVersionDefinition`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/nextVersionDefinition']['body'],
  params?: IEndpoints['PATCH /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/nextVersionDefinition']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/nextVersionDefinition']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/nextVersionDefinition',
    paramDefs: [{ name: 'groupPolicyDefinition-id', in: 'path' }],
    params,
    body,
  };
}
