import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/groupPolicyOperations/{groupPolicyOperation-id}': Operation<
    '/deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/groupPolicyOperations/{groupPolicyOperation-id}',
    'delete'
  >;
  'GET /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/groupPolicyOperations': Operation<
    '/deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/groupPolicyOperations',
    'get'
  >;
  'GET /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/groupPolicyOperations/{groupPolicyOperation-id}': Operation<
    '/deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/groupPolicyOperations/{groupPolicyOperation-id}',
    'get'
  >;
  'PATCH /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/groupPolicyOperations/{groupPolicyOperation-id}': Operation<
    '/deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/groupPolicyOperations/{groupPolicyOperation-id}',
    'patch'
  >;
  'POST /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/groupPolicyOperations': Operation<
    '/deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/groupPolicyOperations',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/groupPolicyOperations/{groupPolicyOperation-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/groupPolicyOperations/{groupPolicyOperation-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/groupPolicyOperations/{groupPolicyOperation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/groupPolicyOperations/{groupPolicyOperation-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'groupPolicyUploadedDefinitionFile-id', in: 'path' },
      { name: 'groupPolicyOperation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/groupPolicyOperations`
 *
 * The list of operations on the uploaded ADMX file.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/groupPolicyOperations']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/groupPolicyOperations']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/groupPolicyOperations',
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
 * `GET /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/groupPolicyOperations/{groupPolicyOperation-id}`
 *
 * The list of operations on the uploaded ADMX file.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/groupPolicyOperations/{groupPolicyOperation-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/groupPolicyOperations/{groupPolicyOperation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/groupPolicyOperations/{groupPolicyOperation-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'groupPolicyUploadedDefinitionFile-id', in: 'path' },
      { name: 'groupPolicyOperation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/groupPolicyOperations/{groupPolicyOperation-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/groupPolicyOperations/{groupPolicyOperation-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/groupPolicyOperations/{groupPolicyOperation-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/groupPolicyOperations/{groupPolicyOperation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/groupPolicyOperations/{groupPolicyOperation-id}',
    paramDefs: [
      { name: 'groupPolicyUploadedDefinitionFile-id', in: 'path' },
      { name: 'groupPolicyOperation-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/groupPolicyOperations`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/groupPolicyOperations']['body'],
  params?: IEndpoints['POST /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/groupPolicyOperations']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/groupPolicyOperations']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/groupPolicyOperations',
    paramDefs: [{ name: 'groupPolicyUploadedDefinitionFile-id', in: 'path' }],
    params,
    body,
  };
}
