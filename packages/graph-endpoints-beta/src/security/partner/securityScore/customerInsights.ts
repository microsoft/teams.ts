import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/partner/securityScore/customerInsights/{customerInsight-tenantId}': Operation<
    '/security/partner/securityScore/customerInsights/{customerInsight-tenantId}',
    'delete'
  >;
  'GET /security/partner/securityScore/customerInsights': Operation<
    '/security/partner/securityScore/customerInsights',
    'get'
  >;
  'GET /security/partner/securityScore/customerInsights/{customerInsight-tenantId}': Operation<
    '/security/partner/securityScore/customerInsights/{customerInsight-tenantId}',
    'get'
  >;
  'PATCH /security/partner/securityScore/customerInsights/{customerInsight-tenantId}': Operation<
    '/security/partner/securityScore/customerInsights/{customerInsight-tenantId}',
    'patch'
  >;
  'POST /security/partner/securityScore/customerInsights': Operation<
    '/security/partner/securityScore/customerInsights',
    'post'
  >;
}

/**
 * `DELETE /security/partner/securityScore/customerInsights/{customerInsight-tenantId}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /security/partner/securityScore/customerInsights/{customerInsight-tenantId}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /security/partner/securityScore/customerInsights/{customerInsight-tenantId}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/security/partner/securityScore/customerInsights/{customerInsight-tenantId}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'customerInsight-tenantId', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /security/partner/securityScore/customerInsights`
 *
 * Get a list of the customerInsight objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /security/partner/securityScore/customerInsights']['parameters']
): EndpointRequest<IEndpoints['GET /security/partner/securityScore/customerInsights']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/partner/securityScore/customerInsights',
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
 * `GET /security/partner/securityScore/customerInsights/{customerInsight-tenantId}`
 *
 * Contains customer-specific information for certain requirements.
 */
export function get(
  params?: IEndpoints['GET /security/partner/securityScore/customerInsights/{customerInsight-tenantId}']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/partner/securityScore/customerInsights/{customerInsight-tenantId}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/partner/securityScore/customerInsights/{customerInsight-tenantId}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'customerInsight-tenantId', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /security/partner/securityScore/customerInsights/{customerInsight-tenantId}`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/partner/securityScore/customerInsights/{customerInsight-tenantId}']['body'],
  params?: IEndpoints['PATCH /security/partner/securityScore/customerInsights/{customerInsight-tenantId}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /security/partner/securityScore/customerInsights/{customerInsight-tenantId}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/security/partner/securityScore/customerInsights/{customerInsight-tenantId}',
    paramDefs: [{ name: 'customerInsight-tenantId', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /security/partner/securityScore/customerInsights`
 *
 */
export function create(
  body: IEndpoints['POST /security/partner/securityScore/customerInsights']['body'],
  params?: IEndpoints['POST /security/partner/securityScore/customerInsights']['parameters']
): EndpointRequest<
  IEndpoints['POST /security/partner/securityScore/customerInsights']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/security/partner/securityScore/customerInsights',
    paramDefs: [],
    params,
    body,
  };
}
