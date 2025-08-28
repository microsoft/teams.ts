import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /security/cloudAppSecurityProfiles/{cloudAppSecurityProfile-id}': Operation<
    '/security/cloudAppSecurityProfiles/{cloudAppSecurityProfile-id}',
    'delete'
  >;
  'GET /security/cloudAppSecurityProfiles': Operation<'/security/cloudAppSecurityProfiles', 'get'>;
  'GET /security/cloudAppSecurityProfiles/{cloudAppSecurityProfile-id}': Operation<
    '/security/cloudAppSecurityProfiles/{cloudAppSecurityProfile-id}',
    'get'
  >;
  'PATCH /security/cloudAppSecurityProfiles/{cloudAppSecurityProfile-id}': Operation<
    '/security/cloudAppSecurityProfiles/{cloudAppSecurityProfile-id}',
    'patch'
  >;
  'POST /security/cloudAppSecurityProfiles': Operation<
    '/security/cloudAppSecurityProfiles',
    'post'
  >;
}

/**
 * `DELETE /security/cloudAppSecurityProfiles/{cloudAppSecurityProfile-id}`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /security/cloudAppSecurityProfiles/{cloudAppSecurityProfile-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /security/cloudAppSecurityProfiles/{cloudAppSecurityProfile-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/security/cloudAppSecurityProfiles/{cloudAppSecurityProfile-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'cloudAppSecurityProfile-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /security/cloudAppSecurityProfiles`
 *
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /security/cloudAppSecurityProfiles']['parameters']
): EndpointRequest<IEndpoints['GET /security/cloudAppSecurityProfiles']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/cloudAppSecurityProfiles',
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
 * `GET /security/cloudAppSecurityProfiles/{cloudAppSecurityProfile-id}`
 *
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /security/cloudAppSecurityProfiles/{cloudAppSecurityProfile-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/cloudAppSecurityProfiles/{cloudAppSecurityProfile-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/cloudAppSecurityProfiles/{cloudAppSecurityProfile-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'cloudAppSecurityProfile-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /security/cloudAppSecurityProfiles/{cloudAppSecurityProfile-id}`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /security/cloudAppSecurityProfiles/{cloudAppSecurityProfile-id}']['body'],
  params?: IEndpoints['PATCH /security/cloudAppSecurityProfiles/{cloudAppSecurityProfile-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /security/cloudAppSecurityProfiles/{cloudAppSecurityProfile-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/security/cloudAppSecurityProfiles/{cloudAppSecurityProfile-id}',
    paramDefs: [{ name: 'cloudAppSecurityProfile-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /security/cloudAppSecurityProfiles`
 *
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /security/cloudAppSecurityProfiles']['body'],
  params?: IEndpoints['POST /security/cloudAppSecurityProfiles']['parameters']
): EndpointRequest<IEndpoints['POST /security/cloudAppSecurityProfiles']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/security/cloudAppSecurityProfiles',
    paramDefs: [],
    params,
    body,
  };
}
