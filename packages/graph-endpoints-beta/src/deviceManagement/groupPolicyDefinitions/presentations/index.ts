export * as definition from './definition';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/presentations/{groupPolicyPresentation-id}': Operation<
    '/deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/presentations/{groupPolicyPresentation-id}',
    'delete'
  >;
  'GET /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/presentations': Operation<
    '/deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/presentations',
    'get'
  >;
  'GET /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/presentations/{groupPolicyPresentation-id}': Operation<
    '/deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/presentations/{groupPolicyPresentation-id}',
    'get'
  >;
  'PATCH /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/presentations/{groupPolicyPresentation-id}': Operation<
    '/deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/presentations/{groupPolicyPresentation-id}',
    'patch'
  >;
  'POST /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/presentations': Operation<
    '/deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/presentations',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/presentations/{groupPolicyPresentation-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/presentations/{groupPolicyPresentation-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/presentations/{groupPolicyPresentation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/presentations/{groupPolicyPresentation-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'groupPolicyDefinition-id', in: 'path' },
      { name: 'groupPolicyPresentation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/presentations`
 *
 * The group policy presentations associated with the definition.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/presentations']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/presentations']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/presentations',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'groupPolicyDefinition-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/presentations/{groupPolicyPresentation-id}`
 *
 * The group policy presentations associated with the definition.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/presentations/{groupPolicyPresentation-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/presentations/{groupPolicyPresentation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/presentations/{groupPolicyPresentation-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'groupPolicyDefinition-id', in: 'path' },
      { name: 'groupPolicyPresentation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/presentations/{groupPolicyPresentation-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/presentations/{groupPolicyPresentation-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/presentations/{groupPolicyPresentation-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/presentations/{groupPolicyPresentation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/presentations/{groupPolicyPresentation-id}',
    paramDefs: [
      { name: 'groupPolicyDefinition-id', in: 'path' },
      { name: 'groupPolicyPresentation-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/presentations`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/presentations']['body'],
  params?: IEndpoints['POST /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/presentations']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/presentations']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/presentations',
    paramDefs: [{ name: 'groupPolicyDefinition-id', in: 'path' }],
    params,
    body,
  };
}
