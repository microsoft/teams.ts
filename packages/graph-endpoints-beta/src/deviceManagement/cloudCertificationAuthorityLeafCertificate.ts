import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/cloudCertificationAuthorityLeafCertificate/{cloudCertificationAuthorityLeafCertificate-id}': Operation<
    '/deviceManagement/cloudCertificationAuthorityLeafCertificate/{cloudCertificationAuthorityLeafCertificate-id}',
    'delete'
  >;
  'GET /deviceManagement/cloudCertificationAuthorityLeafCertificate': Operation<
    '/deviceManagement/cloudCertificationAuthorityLeafCertificate',
    'get'
  >;
  'GET /deviceManagement/cloudCertificationAuthorityLeafCertificate/{cloudCertificationAuthorityLeafCertificate-id}': Operation<
    '/deviceManagement/cloudCertificationAuthorityLeafCertificate/{cloudCertificationAuthorityLeafCertificate-id}',
    'get'
  >;
  'PATCH /deviceManagement/cloudCertificationAuthorityLeafCertificate/{cloudCertificationAuthorityLeafCertificate-id}': Operation<
    '/deviceManagement/cloudCertificationAuthorityLeafCertificate/{cloudCertificationAuthorityLeafCertificate-id}',
    'patch'
  >;
  'POST /deviceManagement/cloudCertificationAuthorityLeafCertificate': Operation<
    '/deviceManagement/cloudCertificationAuthorityLeafCertificate',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/cloudCertificationAuthorityLeafCertificate/{cloudCertificationAuthorityLeafCertificate-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/cloudCertificationAuthorityLeafCertificate/{cloudCertificationAuthorityLeafCertificate-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/cloudCertificationAuthorityLeafCertificate/{cloudCertificationAuthorityLeafCertificate-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/cloudCertificationAuthorityLeafCertificate/{cloudCertificationAuthorityLeafCertificate-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'cloudCertificationAuthorityLeafCertificate-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/cloudCertificationAuthorityLeafCertificate`
 *
 * Collection of CloudCertificationAuthorityLeafCertificate records associated with account.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/cloudCertificationAuthorityLeafCertificate']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/cloudCertificationAuthorityLeafCertificate']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/cloudCertificationAuthorityLeafCertificate',
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
 * `GET /deviceManagement/cloudCertificationAuthorityLeafCertificate/{cloudCertificationAuthorityLeafCertificate-id}`
 *
 * Collection of CloudCertificationAuthorityLeafCertificate records associated with account.
 */
export function get$1(
  params?: IEndpoints['GET /deviceManagement/cloudCertificationAuthorityLeafCertificate/{cloudCertificationAuthorityLeafCertificate-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/cloudCertificationAuthorityLeafCertificate/{cloudCertificationAuthorityLeafCertificate-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/cloudCertificationAuthorityLeafCertificate/{cloudCertificationAuthorityLeafCertificate-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'cloudCertificationAuthorityLeafCertificate-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/cloudCertificationAuthorityLeafCertificate/{cloudCertificationAuthorityLeafCertificate-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/cloudCertificationAuthorityLeafCertificate/{cloudCertificationAuthorityLeafCertificate-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/cloudCertificationAuthorityLeafCertificate/{cloudCertificationAuthorityLeafCertificate-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/cloudCertificationAuthorityLeafCertificate/{cloudCertificationAuthorityLeafCertificate-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/cloudCertificationAuthorityLeafCertificate/{cloudCertificationAuthorityLeafCertificate-id}',
    paramDefs: [{ name: 'cloudCertificationAuthorityLeafCertificate-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/cloudCertificationAuthorityLeafCertificate`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/cloudCertificationAuthorityLeafCertificate']['body'],
  params?: IEndpoints['POST /deviceManagement/cloudCertificationAuthorityLeafCertificate']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/cloudCertificationAuthorityLeafCertificate']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/cloudCertificationAuthorityLeafCertificate',
    paramDefs: [],
    params,
    body,
  };
}
