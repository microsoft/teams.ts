export * as cancelSecurityAction from './cancelSecurityAction';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/securityActions/{securityAction-id}': Operation<
    '/security/securityActions/{securityAction-id}',
    'delete'
  >;
  'GET /security/securityActions': Operation<'/security/securityActions', 'get'>;
  'GET /security/securityActions/{securityAction-id}': Operation<
    '/security/securityActions/{securityAction-id}',
    'get'
  >;
  'PATCH /security/securityActions/{securityAction-id}': Operation<
    '/security/securityActions/{securityAction-id}',
    'patch'
  >;
  'POST /security/securityActions': Operation<'/security/securityActions', 'post'>;
}

/**
 * `DELETE /security/securityActions/{securityAction-id}`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /security/securityActions/{securityAction-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /security/securityActions/{securityAction-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/security/securityActions/{securityAction-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'securityAction-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /security/securityActions`
 *
 * Retrieve a list of securityAction objects.
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /security/securityActions']['parameters']
): EndpointRequest<IEndpoints['GET /security/securityActions']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/securityActions',
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
 * `GET /security/securityActions/{securityAction-id}`
 *
 * Retrieve the properties and relationships of a securityAction object.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /security/securityActions/{securityAction-id}']['parameters']
): EndpointRequest<IEndpoints['GET /security/securityActions/{securityAction-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/securityActions/{securityAction-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'securityAction-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /security/securityActions/{securityAction-id}`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /security/securityActions/{securityAction-id}']['body'],
  params?: IEndpoints['PATCH /security/securityActions/{securityAction-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /security/securityActions/{securityAction-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/security/securityActions/{securityAction-id}',
    paramDefs: [{ name: 'securityAction-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /security/securityActions`
 *
 * Create a new securityAction object.
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /security/securityActions']['body'],
  params?: IEndpoints['POST /security/securityActions']['parameters']
): EndpointRequest<IEndpoints['POST /security/securityActions']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/security/securityActions',
    paramDefs: [],
    params,
    body,
  };
}
