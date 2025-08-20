import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /security/domainSecurityProfiles/{domainSecurityProfile-id}': Operation<
    '/security/domainSecurityProfiles/{domainSecurityProfile-id}',
    'delete'
  >;
  'GET /security/domainSecurityProfiles': Operation<'/security/domainSecurityProfiles', 'get'>;
  'GET /security/domainSecurityProfiles/{domainSecurityProfile-id}': Operation<
    '/security/domainSecurityProfiles/{domainSecurityProfile-id}',
    'get'
  >;
  'PATCH /security/domainSecurityProfiles/{domainSecurityProfile-id}': Operation<
    '/security/domainSecurityProfiles/{domainSecurityProfile-id}',
    'patch'
  >;
  'POST /security/domainSecurityProfiles': Operation<'/security/domainSecurityProfiles', 'post'>;
}

/**
 * `DELETE /security/domainSecurityProfiles/{domainSecurityProfile-id}`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /security/domainSecurityProfiles/{domainSecurityProfile-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /security/domainSecurityProfiles/{domainSecurityProfile-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/security/domainSecurityProfiles/{domainSecurityProfile-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'domainSecurityProfile-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /security/domainSecurityProfiles`
 *
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /security/domainSecurityProfiles']['parameters']
): EndpointRequest<IEndpoints['GET /security/domainSecurityProfiles']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/domainSecurityProfiles',
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
 * `GET /security/domainSecurityProfiles/{domainSecurityProfile-id}`
 *
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /security/domainSecurityProfiles/{domainSecurityProfile-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/domainSecurityProfiles/{domainSecurityProfile-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/domainSecurityProfiles/{domainSecurityProfile-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'domainSecurityProfile-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /security/domainSecurityProfiles/{domainSecurityProfile-id}`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /security/domainSecurityProfiles/{domainSecurityProfile-id}']['body'],
  params?: IEndpoints['PATCH /security/domainSecurityProfiles/{domainSecurityProfile-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /security/domainSecurityProfiles/{domainSecurityProfile-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/security/domainSecurityProfiles/{domainSecurityProfile-id}',
    paramDefs: [{ name: 'domainSecurityProfile-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /security/domainSecurityProfiles`
 *
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /security/domainSecurityProfiles']['body'],
  params?: IEndpoints['POST /security/domainSecurityProfiles']['parameters']
): EndpointRequest<IEndpoints['POST /security/domainSecurityProfiles']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/security/domainSecurityProfiles',
    paramDefs: [],
    params,
    body,
  };
}
