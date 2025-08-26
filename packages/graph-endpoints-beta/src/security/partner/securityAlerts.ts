import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/partner/securityAlerts/{partnerSecurityAlert-id}': Operation<
    '/security/partner/securityAlerts/{partnerSecurityAlert-id}',
    'delete'
  >;
  'GET /security/partner/securityAlerts': Operation<'/security/partner/securityAlerts', 'get'>;
  'GET /security/partner/securityAlerts/{partnerSecurityAlert-id}': Operation<
    '/security/partner/securityAlerts/{partnerSecurityAlert-id}',
    'get'
  >;
  'PATCH /security/partner/securityAlerts/{partnerSecurityAlert-id}': Operation<
    '/security/partner/securityAlerts/{partnerSecurityAlert-id}',
    'patch'
  >;
  'POST /security/partner/securityAlerts': Operation<'/security/partner/securityAlerts', 'post'>;
}

/**
 * `DELETE /security/partner/securityAlerts/{partnerSecurityAlert-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /security/partner/securityAlerts/{partnerSecurityAlert-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /security/partner/securityAlerts/{partnerSecurityAlert-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/security/partner/securityAlerts/{partnerSecurityAlert-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'partnerSecurityAlert-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /security/partner/securityAlerts`
 *
 * Get a list of the partnerSecurityAlert objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /security/partner/securityAlerts']['parameters']
): EndpointRequest<IEndpoints['GET /security/partner/securityAlerts']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/partner/securityAlerts',
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
 * `GET /security/partner/securityAlerts/{partnerSecurityAlert-id}`
 *
 * Read the properties and relationships of a partnerSecurityAlert object.
 */
export function get(
  params?: IEndpoints['GET /security/partner/securityAlerts/{partnerSecurityAlert-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/partner/securityAlerts/{partnerSecurityAlert-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/partner/securityAlerts/{partnerSecurityAlert-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'partnerSecurityAlert-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /security/partner/securityAlerts/{partnerSecurityAlert-id}`
 *
 * Update the properties of a partnerSecurityAlert object.
 */
export function update(
  body: IEndpoints['PATCH /security/partner/securityAlerts/{partnerSecurityAlert-id}']['body'],
  params?: IEndpoints['PATCH /security/partner/securityAlerts/{partnerSecurityAlert-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /security/partner/securityAlerts/{partnerSecurityAlert-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/security/partner/securityAlerts/{partnerSecurityAlert-id}',
    paramDefs: [{ name: 'partnerSecurityAlert-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /security/partner/securityAlerts`
 *
 */
export function create(
  body: IEndpoints['POST /security/partner/securityAlerts']['body'],
  params?: IEndpoints['POST /security/partner/securityAlerts']['parameters']
): EndpointRequest<IEndpoints['POST /security/partner/securityAlerts']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/security/partner/securityAlerts',
    paramDefs: [],
    params,
    body,
  };
}
