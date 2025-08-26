import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /security/ipSecurityProfiles/{ipSecurityProfile-id}': Operation<
    '/security/ipSecurityProfiles/{ipSecurityProfile-id}',
    'delete'
  >;
  'GET /security/ipSecurityProfiles': Operation<'/security/ipSecurityProfiles', 'get'>;
  'GET /security/ipSecurityProfiles/{ipSecurityProfile-id}': Operation<
    '/security/ipSecurityProfiles/{ipSecurityProfile-id}',
    'get'
  >;
  'PATCH /security/ipSecurityProfiles/{ipSecurityProfile-id}': Operation<
    '/security/ipSecurityProfiles/{ipSecurityProfile-id}',
    'patch'
  >;
  'POST /security/ipSecurityProfiles': Operation<'/security/ipSecurityProfiles', 'post'>;
}

/**
 * `DELETE /security/ipSecurityProfiles/{ipSecurityProfile-id}`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /security/ipSecurityProfiles/{ipSecurityProfile-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /security/ipSecurityProfiles/{ipSecurityProfile-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/security/ipSecurityProfiles/{ipSecurityProfile-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'ipSecurityProfile-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /security/ipSecurityProfiles`
 *
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /security/ipSecurityProfiles']['parameters']
): EndpointRequest<IEndpoints['GET /security/ipSecurityProfiles']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/ipSecurityProfiles',
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
 * `GET /security/ipSecurityProfiles/{ipSecurityProfile-id}`
 *
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /security/ipSecurityProfiles/{ipSecurityProfile-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/ipSecurityProfiles/{ipSecurityProfile-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/ipSecurityProfiles/{ipSecurityProfile-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'ipSecurityProfile-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /security/ipSecurityProfiles/{ipSecurityProfile-id}`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /security/ipSecurityProfiles/{ipSecurityProfile-id}']['body'],
  params?: IEndpoints['PATCH /security/ipSecurityProfiles/{ipSecurityProfile-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /security/ipSecurityProfiles/{ipSecurityProfile-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/security/ipSecurityProfiles/{ipSecurityProfile-id}',
    paramDefs: [{ name: 'ipSecurityProfile-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /security/ipSecurityProfiles`
 *
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /security/ipSecurityProfiles']['body'],
  params?: IEndpoints['POST /security/ipSecurityProfiles']['parameters']
): EndpointRequest<IEndpoints['POST /security/ipSecurityProfiles']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/security/ipSecurityProfiles',
    paramDefs: [],
    params,
    body,
  };
}
