import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/privilegeManagementElevations/{privilegeManagementElevation-id}': Operation<
    '/deviceManagement/privilegeManagementElevations/{privilegeManagementElevation-id}',
    'delete'
  >;
  'GET /deviceManagement/privilegeManagementElevations': Operation<
    '/deviceManagement/privilegeManagementElevations',
    'get'
  >;
  'GET /deviceManagement/privilegeManagementElevations/{privilegeManagementElevation-id}': Operation<
    '/deviceManagement/privilegeManagementElevations/{privilegeManagementElevation-id}',
    'get'
  >;
  'PATCH /deviceManagement/privilegeManagementElevations/{privilegeManagementElevation-id}': Operation<
    '/deviceManagement/privilegeManagementElevations/{privilegeManagementElevation-id}',
    'patch'
  >;
  'POST /deviceManagement/privilegeManagementElevations': Operation<
    '/deviceManagement/privilegeManagementElevations',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/privilegeManagementElevations/{privilegeManagementElevation-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/privilegeManagementElevations/{privilegeManagementElevation-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/privilegeManagementElevations/{privilegeManagementElevation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/privilegeManagementElevations/{privilegeManagementElevation-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'privilegeManagementElevation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/privilegeManagementElevations`
 *
 * The endpoint privilege management elevation event entity contains elevation details.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/privilegeManagementElevations']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/privilegeManagementElevations']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/privilegeManagementElevations',
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
 * `GET /deviceManagement/privilegeManagementElevations/{privilegeManagementElevation-id}`
 *
 * The endpoint privilege management elevation event entity contains elevation details.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/privilegeManagementElevations/{privilegeManagementElevation-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/privilegeManagementElevations/{privilegeManagementElevation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/privilegeManagementElevations/{privilegeManagementElevation-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'privilegeManagementElevation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/privilegeManagementElevations/{privilegeManagementElevation-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/privilegeManagementElevations/{privilegeManagementElevation-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/privilegeManagementElevations/{privilegeManagementElevation-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/privilegeManagementElevations/{privilegeManagementElevation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/privilegeManagementElevations/{privilegeManagementElevation-id}',
    paramDefs: [{ name: 'privilegeManagementElevation-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/privilegeManagementElevations`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/privilegeManagementElevations']['body'],
  params?: IEndpoints['POST /deviceManagement/privilegeManagementElevations']['parameters']
): EndpointRequest<IEndpoints['POST /deviceManagement/privilegeManagementElevations']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/privilegeManagementElevations',
    paramDefs: [],
    params,
    body,
  };
}
