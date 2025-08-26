import type { EndpointRequest, Operation } from './types/common.ts';

export interface IEndpoints {
  'DELETE /payloadResponse/{payloadResponse-id}': Operation<
    '/payloadResponse/{payloadResponse-id}',
    'delete'
  >;
  'GET /payloadResponse': Operation<'/payloadResponse', 'get'>;
  'GET /payloadResponse/{payloadResponse-id}': Operation<
    '/payloadResponse/{payloadResponse-id}',
    'get'
  >;
  'PATCH /payloadResponse/{payloadResponse-id}': Operation<
    '/payloadResponse/{payloadResponse-id}',
    'patch'
  >;
  'POST /payloadResponse': Operation<'/payloadResponse', 'post'>;
}

/**
 * `DELETE /payloadResponse/{payloadResponse-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /payloadResponse/{payloadResponse-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /payloadResponse/{payloadResponse-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/payloadResponse/{payloadResponse-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'payloadResponse-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /payloadResponse`
 *
 */
export function get(
  params?: IEndpoints['GET /payloadResponse']['parameters']
): EndpointRequest<IEndpoints['GET /payloadResponse']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/payloadResponse',
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
 * `GET /payloadResponse/{payloadResponse-id}`
 *
 */
export function get$1(
  params?: IEndpoints['GET /payloadResponse/{payloadResponse-id}']['parameters']
): EndpointRequest<IEndpoints['GET /payloadResponse/{payloadResponse-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/payloadResponse/{payloadResponse-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'payloadResponse-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /payloadResponse/{payloadResponse-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /payloadResponse/{payloadResponse-id}']['body'],
  params?: IEndpoints['PATCH /payloadResponse/{payloadResponse-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /payloadResponse/{payloadResponse-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/payloadResponse/{payloadResponse-id}',
    paramDefs: [{ name: 'payloadResponse-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /payloadResponse`
 *
 */
export function create(
  body: IEndpoints['POST /payloadResponse']['body'],
  params?: IEndpoints['POST /payloadResponse']['parameters']
): EndpointRequest<IEndpoints['POST /payloadResponse']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/payloadResponse',
    paramDefs: [],
    params,
    body,
  };
}
