import type { EndpointRequest, Operation } from './types/common.ts';

export interface IEndpoints {
  'DELETE /riskDetections/{riskDetection-id}': Operation<
    '/riskDetections/{riskDetection-id}',
    'delete'
  >;
  'GET /riskDetections': Operation<'/riskDetections', 'get'>;
  'GET /riskDetections/{riskDetection-id}': Operation<'/riskDetections/{riskDetection-id}', 'get'>;
  'PATCH /riskDetections/{riskDetection-id}': Operation<
    '/riskDetections/{riskDetection-id}',
    'patch'
  >;
  'POST /riskDetections': Operation<'/riskDetections', 'post'>;
}

/**
 * `DELETE /riskDetections/{riskDetection-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /riskDetections/{riskDetection-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /riskDetections/{riskDetection-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/riskDetections/{riskDetection-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'riskDetection-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /riskDetections`
 *
 * Retrieve the properties of a collection of riskDetection objects.
 */
export function list(
  params?: IEndpoints['GET /riskDetections']['parameters']
): EndpointRequest<IEndpoints['GET /riskDetections']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/riskDetections',
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
 * `GET /riskDetections/{riskDetection-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /riskDetections/{riskDetection-id}']['parameters']
): EndpointRequest<IEndpoints['GET /riskDetections/{riskDetection-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/riskDetections/{riskDetection-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'riskDetection-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /riskDetections/{riskDetection-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /riskDetections/{riskDetection-id}']['body'],
  params?: IEndpoints['PATCH /riskDetections/{riskDetection-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /riskDetections/{riskDetection-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/riskDetections/{riskDetection-id}',
    paramDefs: [{ name: 'riskDetection-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /riskDetections`
 *
 */
export function create(
  body: IEndpoints['POST /riskDetections']['body'],
  params?: IEndpoints['POST /riskDetections']['parameters']
): EndpointRequest<IEndpoints['POST /riskDetections']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/riskDetections',
    paramDefs: [],
    params,
    body,
  };
}
