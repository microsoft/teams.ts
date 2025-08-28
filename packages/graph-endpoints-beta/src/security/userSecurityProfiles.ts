import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /security/userSecurityProfiles/{userSecurityProfile-id}': Operation<
    '/security/userSecurityProfiles/{userSecurityProfile-id}',
    'delete'
  >;
  'GET /security/userSecurityProfiles': Operation<'/security/userSecurityProfiles', 'get'>;
  'GET /security/userSecurityProfiles/{userSecurityProfile-id}': Operation<
    '/security/userSecurityProfiles/{userSecurityProfile-id}',
    'get'
  >;
  'PATCH /security/userSecurityProfiles/{userSecurityProfile-id}': Operation<
    '/security/userSecurityProfiles/{userSecurityProfile-id}',
    'patch'
  >;
  'POST /security/userSecurityProfiles': Operation<'/security/userSecurityProfiles', 'post'>;
}

/**
 * `DELETE /security/userSecurityProfiles/{userSecurityProfile-id}`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /security/userSecurityProfiles/{userSecurityProfile-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /security/userSecurityProfiles/{userSecurityProfile-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/security/userSecurityProfiles/{userSecurityProfile-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'userSecurityProfile-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /security/userSecurityProfiles`
 *
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /security/userSecurityProfiles']['parameters']
): EndpointRequest<IEndpoints['GET /security/userSecurityProfiles']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/userSecurityProfiles',
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
 * `GET /security/userSecurityProfiles/{userSecurityProfile-id}`
 *
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /security/userSecurityProfiles/{userSecurityProfile-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/userSecurityProfiles/{userSecurityProfile-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/userSecurityProfiles/{userSecurityProfile-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'userSecurityProfile-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /security/userSecurityProfiles/{userSecurityProfile-id}`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /security/userSecurityProfiles/{userSecurityProfile-id}']['body'],
  params?: IEndpoints['PATCH /security/userSecurityProfiles/{userSecurityProfile-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /security/userSecurityProfiles/{userSecurityProfile-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/security/userSecurityProfiles/{userSecurityProfile-id}',
    paramDefs: [{ name: 'userSecurityProfile-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /security/userSecurityProfiles`
 *
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /security/userSecurityProfiles']['body'],
  params?: IEndpoints['POST /security/userSecurityProfiles']['parameters']
): EndpointRequest<IEndpoints['POST /security/userSecurityProfiles']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/security/userSecurityProfiles',
    paramDefs: [],
    params,
    body,
  };
}
