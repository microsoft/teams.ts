import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /security/hostSecurityProfiles/{hostSecurityProfile-id}': Operation<
    '/security/hostSecurityProfiles/{hostSecurityProfile-id}',
    'delete'
  >;
  'GET /security/hostSecurityProfiles': Operation<'/security/hostSecurityProfiles', 'get'>;
  'GET /security/hostSecurityProfiles/{hostSecurityProfile-id}': Operation<
    '/security/hostSecurityProfiles/{hostSecurityProfile-id}',
    'get'
  >;
  'PATCH /security/hostSecurityProfiles/{hostSecurityProfile-id}': Operation<
    '/security/hostSecurityProfiles/{hostSecurityProfile-id}',
    'patch'
  >;
  'POST /security/hostSecurityProfiles': Operation<'/security/hostSecurityProfiles', 'post'>;
}

/**
 * `DELETE /security/hostSecurityProfiles/{hostSecurityProfile-id}`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /security/hostSecurityProfiles/{hostSecurityProfile-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /security/hostSecurityProfiles/{hostSecurityProfile-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/security/hostSecurityProfiles/{hostSecurityProfile-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'hostSecurityProfile-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /security/hostSecurityProfiles`
 *
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /security/hostSecurityProfiles']['parameters']
): EndpointRequest<IEndpoints['GET /security/hostSecurityProfiles']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/hostSecurityProfiles',
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
 * `GET /security/hostSecurityProfiles/{hostSecurityProfile-id}`
 *
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /security/hostSecurityProfiles/{hostSecurityProfile-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/hostSecurityProfiles/{hostSecurityProfile-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/hostSecurityProfiles/{hostSecurityProfile-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'hostSecurityProfile-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /security/hostSecurityProfiles/{hostSecurityProfile-id}`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /security/hostSecurityProfiles/{hostSecurityProfile-id}']['body'],
  params?: IEndpoints['PATCH /security/hostSecurityProfiles/{hostSecurityProfile-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /security/hostSecurityProfiles/{hostSecurityProfile-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/security/hostSecurityProfiles/{hostSecurityProfile-id}',
    paramDefs: [{ name: 'hostSecurityProfile-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /security/hostSecurityProfiles`
 *
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /security/hostSecurityProfiles']['body'],
  params?: IEndpoints['POST /security/hostSecurityProfiles']['parameters']
): EndpointRequest<IEndpoints['POST /security/hostSecurityProfiles']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/security/hostSecurityProfiles',
    paramDefs: [],
    params,
    body,
  };
}
