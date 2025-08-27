export * as addLanguageFiles from './addLanguageFiles';
export * as definitions from './definitions';
export * as groupPolicyOperations from './groupPolicyOperations';
export * as remove from './remove';
export * as removeLanguageFiles from './removeLanguageFiles';
export * as updateLanguageFiles from './updateLanguageFiles';
export * as uploadNewVersion from './uploadNewVersion';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}': Operation<
    '/deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}',
    'delete'
  >;
  'GET /deviceManagement/groupPolicyUploadedDefinitionFiles': Operation<
    '/deviceManagement/groupPolicyUploadedDefinitionFiles',
    'get'
  >;
  'GET /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}': Operation<
    '/deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}',
    'get'
  >;
  'PATCH /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}': Operation<
    '/deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}',
    'patch'
  >;
  'POST /deviceManagement/groupPolicyUploadedDefinitionFiles': Operation<
    '/deviceManagement/groupPolicyUploadedDefinitionFiles',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'groupPolicyUploadedDefinitionFile-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/groupPolicyUploadedDefinitionFiles`
 *
 * The available group policy uploaded definition files for this account.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/groupPolicyUploadedDefinitionFiles']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/groupPolicyUploadedDefinitionFiles']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/groupPolicyUploadedDefinitionFiles',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}`
 *
 * The available group policy uploaded definition files for this account.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'groupPolicyUploadedDefinitionFile-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}',
    paramDefs: [{ name: 'groupPolicyUploadedDefinitionFile-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/groupPolicyUploadedDefinitionFiles`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/groupPolicyUploadedDefinitionFiles']['body'],
  params?: IEndpoints['POST /deviceManagement/groupPolicyUploadedDefinitionFiles']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/groupPolicyUploadedDefinitionFiles']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/groupPolicyUploadedDefinitionFiles',
    paramDefs: [],
    params,
    body,
  };
}
