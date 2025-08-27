import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/dataDiscovery/cloudAppDiscovery/uploadedStreams/{cloudAppDiscoveryReport-id}': Operation<
    '/security/dataDiscovery/cloudAppDiscovery/uploadedStreams/{cloudAppDiscoveryReport-id}',
    'delete'
  >;
  'GET /security/dataDiscovery/cloudAppDiscovery/uploadedStreams': Operation<
    '/security/dataDiscovery/cloudAppDiscovery/uploadedStreams',
    'get'
  >;
  'GET /security/dataDiscovery/cloudAppDiscovery/uploadedStreams/{cloudAppDiscoveryReport-id}': Operation<
    '/security/dataDiscovery/cloudAppDiscovery/uploadedStreams/{cloudAppDiscoveryReport-id}',
    'get'
  >;
  'PATCH /security/dataDiscovery/cloudAppDiscovery/uploadedStreams/{cloudAppDiscoveryReport-id}': Operation<
    '/security/dataDiscovery/cloudAppDiscovery/uploadedStreams/{cloudAppDiscoveryReport-id}',
    'patch'
  >;
  'POST /security/dataDiscovery/cloudAppDiscovery/uploadedStreams': Operation<
    '/security/dataDiscovery/cloudAppDiscovery/uploadedStreams',
    'post'
  >;
}

/**
 * `DELETE /security/dataDiscovery/cloudAppDiscovery/uploadedStreams/{cloudAppDiscoveryReport-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /security/dataDiscovery/cloudAppDiscovery/uploadedStreams/{cloudAppDiscoveryReport-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /security/dataDiscovery/cloudAppDiscovery/uploadedStreams/{cloudAppDiscoveryReport-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/security/dataDiscovery/cloudAppDiscovery/uploadedStreams/{cloudAppDiscoveryReport-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'cloudAppDiscoveryReport-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /security/dataDiscovery/cloudAppDiscovery/uploadedStreams`
 *
 * Get visibility into all the manually uploaded streams from your firewalls and proxies.
 */
export function list(
  params?: IEndpoints['GET /security/dataDiscovery/cloudAppDiscovery/uploadedStreams']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/dataDiscovery/cloudAppDiscovery/uploadedStreams']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/dataDiscovery/cloudAppDiscovery/uploadedStreams',
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
 * `GET /security/dataDiscovery/cloudAppDiscovery/uploadedStreams/{cloudAppDiscoveryReport-id}`
 *
 * A collection of streams available for generating cloud discovery report.
 */
export function get(
  params?: IEndpoints['GET /security/dataDiscovery/cloudAppDiscovery/uploadedStreams/{cloudAppDiscoveryReport-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/dataDiscovery/cloudAppDiscovery/uploadedStreams/{cloudAppDiscoveryReport-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/dataDiscovery/cloudAppDiscovery/uploadedStreams/{cloudAppDiscoveryReport-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'cloudAppDiscoveryReport-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /security/dataDiscovery/cloudAppDiscovery/uploadedStreams/{cloudAppDiscoveryReport-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/dataDiscovery/cloudAppDiscovery/uploadedStreams/{cloudAppDiscoveryReport-id}']['body'],
  params?: IEndpoints['PATCH /security/dataDiscovery/cloudAppDiscovery/uploadedStreams/{cloudAppDiscoveryReport-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /security/dataDiscovery/cloudAppDiscovery/uploadedStreams/{cloudAppDiscoveryReport-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/security/dataDiscovery/cloudAppDiscovery/uploadedStreams/{cloudAppDiscoveryReport-id}',
    paramDefs: [{ name: 'cloudAppDiscoveryReport-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /security/dataDiscovery/cloudAppDiscovery/uploadedStreams`
 *
 */
export function create(
  body: IEndpoints['POST /security/dataDiscovery/cloudAppDiscovery/uploadedStreams']['body'],
  params?: IEndpoints['POST /security/dataDiscovery/cloudAppDiscovery/uploadedStreams']['parameters']
): EndpointRequest<
  IEndpoints['POST /security/dataDiscovery/cloudAppDiscovery/uploadedStreams']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/security/dataDiscovery/cloudAppDiscovery/uploadedStreams',
    paramDefs: [],
    params,
    body,
  };
}
