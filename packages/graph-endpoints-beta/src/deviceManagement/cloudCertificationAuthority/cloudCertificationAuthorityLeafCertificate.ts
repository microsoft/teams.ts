import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/cloudCertificationAuthorityLeafCertificate': Operation<
    '/deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/cloudCertificationAuthorityLeafCertificate',
    'get'
  >;
  'GET /deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/cloudCertificationAuthorityLeafCertificate/{cloudCertificationAuthorityLeafCertificate-id}': Operation<
    '/deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/cloudCertificationAuthorityLeafCertificate/{cloudCertificationAuthorityLeafCertificate-id}',
    'get'
  >;
}

/**
 * `GET /deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/cloudCertificationAuthorityLeafCertificate`
 *
 * Required OData property to expose leaf certificate API.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/cloudCertificationAuthorityLeafCertificate']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/cloudCertificationAuthorityLeafCertificate']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/cloudCertificationAuthorityLeafCertificate',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'cloudCertificationAuthority-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/cloudCertificationAuthorityLeafCertificate/{cloudCertificationAuthorityLeafCertificate-id}`
 *
 * Required OData property to expose leaf certificate API.
 */
export function get$1(
  params?: IEndpoints['GET /deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/cloudCertificationAuthorityLeafCertificate/{cloudCertificationAuthorityLeafCertificate-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/cloudCertificationAuthorityLeafCertificate/{cloudCertificationAuthorityLeafCertificate-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/cloudCertificationAuthorityLeafCertificate/{cloudCertificationAuthorityLeafCertificate-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'cloudCertificationAuthority-id', in: 'path' },
      { name: 'cloudCertificationAuthorityLeafCertificate-id', in: 'path' },
    ],
    params,
  };
}
