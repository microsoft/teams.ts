import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /identityProtection/riskDetections/{riskDetection-id}': Operation<
    '/identityProtection/riskDetections/{riskDetection-id}',
    'delete'
  >;
  'GET /identityProtection/riskDetections': Operation<'/identityProtection/riskDetections', 'get'>;
  'GET /identityProtection/riskDetections/{riskDetection-id}': Operation<
    '/identityProtection/riskDetections/{riskDetection-id}',
    'get'
  >;
  'PATCH /identityProtection/riskDetections/{riskDetection-id}': Operation<
    '/identityProtection/riskDetections/{riskDetection-id}',
    'patch'
  >;
  'POST /identityProtection/riskDetections': Operation<
    '/identityProtection/riskDetections',
    'post'
  >;
}

/**
 * `DELETE /identityProtection/riskDetections/{riskDetection-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /identityProtection/riskDetections/{riskDetection-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /identityProtection/riskDetections/{riskDetection-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/identityProtection/riskDetections/{riskDetection-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'riskDetection-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /identityProtection/riskDetections`
 *
 * Retrieve the properties of a collection of riskDetection objects.
 */
export function list(
  params?: IEndpoints['GET /identityProtection/riskDetections']['parameters']
): EndpointRequest<IEndpoints['GET /identityProtection/riskDetections']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identityProtection/riskDetections',
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
 * `GET /identityProtection/riskDetections/{riskDetection-id}`
 *
 * Retrieve the properties of a collection of riskDetection objects.
 */
export function get(
  params?: IEndpoints['GET /identityProtection/riskDetections/{riskDetection-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityProtection/riskDetections/{riskDetection-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identityProtection/riskDetections/{riskDetection-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'riskDetection-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /identityProtection/riskDetections/{riskDetection-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /identityProtection/riskDetections/{riskDetection-id}']['body'],
  params?: IEndpoints['PATCH /identityProtection/riskDetections/{riskDetection-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /identityProtection/riskDetections/{riskDetection-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/identityProtection/riskDetections/{riskDetection-id}',
    paramDefs: [{ name: 'riskDetection-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /identityProtection/riskDetections`
 *
 */
export function create(
  body: IEndpoints['POST /identityProtection/riskDetections']['body'],
  params?: IEndpoints['POST /identityProtection/riskDetections']['parameters']
): EndpointRequest<IEndpoints['POST /identityProtection/riskDetections']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/identityProtection/riskDetections',
    paramDefs: [],
    params,
    body,
  };
}
