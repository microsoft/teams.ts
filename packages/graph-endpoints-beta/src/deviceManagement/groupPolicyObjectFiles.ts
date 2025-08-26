import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/groupPolicyObjectFiles/{groupPolicyObjectFile-id}': Operation<
    '/deviceManagement/groupPolicyObjectFiles/{groupPolicyObjectFile-id}',
    'delete'
  >;
  'GET /deviceManagement/groupPolicyObjectFiles': Operation<
    '/deviceManagement/groupPolicyObjectFiles',
    'get'
  >;
  'GET /deviceManagement/groupPolicyObjectFiles/{groupPolicyObjectFile-id}': Operation<
    '/deviceManagement/groupPolicyObjectFiles/{groupPolicyObjectFile-id}',
    'get'
  >;
  'PATCH /deviceManagement/groupPolicyObjectFiles/{groupPolicyObjectFile-id}': Operation<
    '/deviceManagement/groupPolicyObjectFiles/{groupPolicyObjectFile-id}',
    'patch'
  >;
  'POST /deviceManagement/groupPolicyObjectFiles': Operation<
    '/deviceManagement/groupPolicyObjectFiles',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/groupPolicyObjectFiles/{groupPolicyObjectFile-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/groupPolicyObjectFiles/{groupPolicyObjectFile-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/groupPolicyObjectFiles/{groupPolicyObjectFile-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/groupPolicyObjectFiles/{groupPolicyObjectFile-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'groupPolicyObjectFile-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/groupPolicyObjectFiles`
 *
 * A list of Group Policy Object files uploaded.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/groupPolicyObjectFiles']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/groupPolicyObjectFiles']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/groupPolicyObjectFiles',
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
 * `GET /deviceManagement/groupPolicyObjectFiles/{groupPolicyObjectFile-id}`
 *
 * A list of Group Policy Object files uploaded.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/groupPolicyObjectFiles/{groupPolicyObjectFile-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/groupPolicyObjectFiles/{groupPolicyObjectFile-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/groupPolicyObjectFiles/{groupPolicyObjectFile-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'groupPolicyObjectFile-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/groupPolicyObjectFiles/{groupPolicyObjectFile-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/groupPolicyObjectFiles/{groupPolicyObjectFile-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/groupPolicyObjectFiles/{groupPolicyObjectFile-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/groupPolicyObjectFiles/{groupPolicyObjectFile-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/groupPolicyObjectFiles/{groupPolicyObjectFile-id}',
    paramDefs: [{ name: 'groupPolicyObjectFile-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/groupPolicyObjectFiles`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/groupPolicyObjectFiles']['body'],
  params?: IEndpoints['POST /deviceManagement/groupPolicyObjectFiles']['parameters']
): EndpointRequest<IEndpoints['POST /deviceManagement/groupPolicyObjectFiles']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/groupPolicyObjectFiles',
    paramDefs: [],
    params,
    body,
  };
}
