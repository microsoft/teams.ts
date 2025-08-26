import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/assignments/{embeddedSIMActivationCodePoolAssignment-id}': Operation<
    '/deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/assignments/{embeddedSIMActivationCodePoolAssignment-id}',
    'delete'
  >;
  'GET /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/assignments': Operation<
    '/deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/assignments',
    'get'
  >;
  'GET /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/assignments/{embeddedSIMActivationCodePoolAssignment-id}': Operation<
    '/deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/assignments/{embeddedSIMActivationCodePoolAssignment-id}',
    'get'
  >;
  'PATCH /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/assignments/{embeddedSIMActivationCodePoolAssignment-id}': Operation<
    '/deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/assignments/{embeddedSIMActivationCodePoolAssignment-id}',
    'patch'
  >;
  'POST /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/assignments': Operation<
    '/deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/assignments',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/assignments/{embeddedSIMActivationCodePoolAssignment-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/assignments/{embeddedSIMActivationCodePoolAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/assignments/{embeddedSIMActivationCodePoolAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/assignments/{embeddedSIMActivationCodePoolAssignment-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'embeddedSIMActivationCodePool-id', in: 'path' },
      { name: 'embeddedSIMActivationCodePoolAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/assignments`
 *
 * Navigational property to a list of targets to which this pool is assigned.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/assignments']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/assignments']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/assignments',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'embeddedSIMActivationCodePool-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/assignments/{embeddedSIMActivationCodePoolAssignment-id}`
 *
 * Navigational property to a list of targets to which this pool is assigned.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/assignments/{embeddedSIMActivationCodePoolAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/assignments/{embeddedSIMActivationCodePoolAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/assignments/{embeddedSIMActivationCodePoolAssignment-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'embeddedSIMActivationCodePool-id', in: 'path' },
      { name: 'embeddedSIMActivationCodePoolAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/assignments/{embeddedSIMActivationCodePoolAssignment-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/assignments/{embeddedSIMActivationCodePoolAssignment-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/assignments/{embeddedSIMActivationCodePoolAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/assignments/{embeddedSIMActivationCodePoolAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/assignments/{embeddedSIMActivationCodePoolAssignment-id}',
    paramDefs: [
      { name: 'embeddedSIMActivationCodePool-id', in: 'path' },
      { name: 'embeddedSIMActivationCodePoolAssignment-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/assignments`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/assignments']['body'],
  params?: IEndpoints['POST /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/assignments']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/assignments']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/assignments',
    paramDefs: [{ name: 'embeddedSIMActivationCodePool-id', in: 'path' }],
    params,
    body,
  };
}
