import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /identityProtection/servicePrincipalRiskDetections/{servicePrincipalRiskDetection-id}': Operation<
    '/identityProtection/servicePrincipalRiskDetections/{servicePrincipalRiskDetection-id}',
    'delete'
  >;
  'GET /identityProtection/servicePrincipalRiskDetections': Operation<
    '/identityProtection/servicePrincipalRiskDetections',
    'get'
  >;
  'GET /identityProtection/servicePrincipalRiskDetections/{servicePrincipalRiskDetection-id}': Operation<
    '/identityProtection/servicePrincipalRiskDetections/{servicePrincipalRiskDetection-id}',
    'get'
  >;
  'PATCH /identityProtection/servicePrincipalRiskDetections/{servicePrincipalRiskDetection-id}': Operation<
    '/identityProtection/servicePrincipalRiskDetections/{servicePrincipalRiskDetection-id}',
    'patch'
  >;
  'POST /identityProtection/servicePrincipalRiskDetections': Operation<
    '/identityProtection/servicePrincipalRiskDetections',
    'post'
  >;
}

/**
 * `DELETE /identityProtection/servicePrincipalRiskDetections/{servicePrincipalRiskDetection-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /identityProtection/servicePrincipalRiskDetections/{servicePrincipalRiskDetection-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /identityProtection/servicePrincipalRiskDetections/{servicePrincipalRiskDetection-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/identityProtection/servicePrincipalRiskDetections/{servicePrincipalRiskDetection-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'servicePrincipalRiskDetection-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /identityProtection/servicePrincipalRiskDetections`
 *
 * Retrieve the properties of a collection of servicePrincipalRiskDetection objects.
 */
export function list(
  params?: IEndpoints['GET /identityProtection/servicePrincipalRiskDetections']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityProtection/servicePrincipalRiskDetections']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identityProtection/servicePrincipalRiskDetections',
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
 * `GET /identityProtection/servicePrincipalRiskDetections/{servicePrincipalRiskDetection-id}`
 *
 * Read the properties and relationships of a servicePrincipalRiskDetection object.
 */
export function get(
  params?: IEndpoints['GET /identityProtection/servicePrincipalRiskDetections/{servicePrincipalRiskDetection-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityProtection/servicePrincipalRiskDetections/{servicePrincipalRiskDetection-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identityProtection/servicePrincipalRiskDetections/{servicePrincipalRiskDetection-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'servicePrincipalRiskDetection-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /identityProtection/servicePrincipalRiskDetections/{servicePrincipalRiskDetection-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /identityProtection/servicePrincipalRiskDetections/{servicePrincipalRiskDetection-id}']['body'],
  params?: IEndpoints['PATCH /identityProtection/servicePrincipalRiskDetections/{servicePrincipalRiskDetection-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /identityProtection/servicePrincipalRiskDetections/{servicePrincipalRiskDetection-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/identityProtection/servicePrincipalRiskDetections/{servicePrincipalRiskDetection-id}',
    paramDefs: [{ name: 'servicePrincipalRiskDetection-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /identityProtection/servicePrincipalRiskDetections`
 *
 */
export function create(
  body: IEndpoints['POST /identityProtection/servicePrincipalRiskDetections']['body'],
  params?: IEndpoints['POST /identityProtection/servicePrincipalRiskDetections']['parameters']
): EndpointRequest<
  IEndpoints['POST /identityProtection/servicePrincipalRiskDetections']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/identityProtection/servicePrincipalRiskDetections',
    paramDefs: [],
    params,
    body,
  };
}
