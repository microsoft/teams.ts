import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/partner/securityScore/requirements/{securityRequirement-id}': Operation<
    '/security/partner/securityScore/requirements/{securityRequirement-id}',
    'delete'
  >;
  'GET /security/partner/securityScore/requirements': Operation<
    '/security/partner/securityScore/requirements',
    'get'
  >;
  'GET /security/partner/securityScore/requirements/{securityRequirement-id}': Operation<
    '/security/partner/securityScore/requirements/{securityRequirement-id}',
    'get'
  >;
  'PATCH /security/partner/securityScore/requirements/{securityRequirement-id}': Operation<
    '/security/partner/securityScore/requirements/{securityRequirement-id}',
    'patch'
  >;
  'POST /security/partner/securityScore/requirements': Operation<
    '/security/partner/securityScore/requirements',
    'post'
  >;
}

/**
 * `DELETE /security/partner/securityScore/requirements/{securityRequirement-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /security/partner/securityScore/requirements/{securityRequirement-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /security/partner/securityScore/requirements/{securityRequirement-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/security/partner/securityScore/requirements/{securityRequirement-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'securityRequirement-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /security/partner/securityScore/requirements`
 *
 * Get a list of securityRequirement objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /security/partner/securityScore/requirements']['parameters']
): EndpointRequest<IEndpoints['GET /security/partner/securityScore/requirements']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/partner/securityScore/requirements',
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
 * `GET /security/partner/securityScore/requirements/{securityRequirement-id}`
 *
 * Read the properties and relationships of a securityRequirement object.
 */
export function get(
  params?: IEndpoints['GET /security/partner/securityScore/requirements/{securityRequirement-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/partner/securityScore/requirements/{securityRequirement-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/partner/securityScore/requirements/{securityRequirement-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'securityRequirement-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /security/partner/securityScore/requirements/{securityRequirement-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/partner/securityScore/requirements/{securityRequirement-id}']['body'],
  params?: IEndpoints['PATCH /security/partner/securityScore/requirements/{securityRequirement-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /security/partner/securityScore/requirements/{securityRequirement-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/security/partner/securityScore/requirements/{securityRequirement-id}',
    paramDefs: [{ name: 'securityRequirement-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /security/partner/securityScore/requirements`
 *
 */
export function create(
  body: IEndpoints['POST /security/partner/securityScore/requirements']['body'],
  params?: IEndpoints['POST /security/partner/securityScore/requirements']['parameters']
): EndpointRequest<IEndpoints['POST /security/partner/securityScore/requirements']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/security/partner/securityScore/requirements',
    paramDefs: [],
    params,
    body,
  };
}
