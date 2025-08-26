import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /security/fileSecurityProfiles/{fileSecurityProfile-id}': Operation<
    '/security/fileSecurityProfiles/{fileSecurityProfile-id}',
    'delete'
  >;
  'GET /security/fileSecurityProfiles': Operation<'/security/fileSecurityProfiles', 'get'>;
  'GET /security/fileSecurityProfiles/{fileSecurityProfile-id}': Operation<
    '/security/fileSecurityProfiles/{fileSecurityProfile-id}',
    'get'
  >;
  'PATCH /security/fileSecurityProfiles/{fileSecurityProfile-id}': Operation<
    '/security/fileSecurityProfiles/{fileSecurityProfile-id}',
    'patch'
  >;
  'POST /security/fileSecurityProfiles': Operation<'/security/fileSecurityProfiles', 'post'>;
}

/**
 * `DELETE /security/fileSecurityProfiles/{fileSecurityProfile-id}`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /security/fileSecurityProfiles/{fileSecurityProfile-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /security/fileSecurityProfiles/{fileSecurityProfile-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/security/fileSecurityProfiles/{fileSecurityProfile-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'fileSecurityProfile-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /security/fileSecurityProfiles`
 *
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /security/fileSecurityProfiles']['parameters']
): EndpointRequest<IEndpoints['GET /security/fileSecurityProfiles']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/fileSecurityProfiles',
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
 * `GET /security/fileSecurityProfiles/{fileSecurityProfile-id}`
 *
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /security/fileSecurityProfiles/{fileSecurityProfile-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/fileSecurityProfiles/{fileSecurityProfile-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/fileSecurityProfiles/{fileSecurityProfile-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'fileSecurityProfile-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /security/fileSecurityProfiles/{fileSecurityProfile-id}`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /security/fileSecurityProfiles/{fileSecurityProfile-id}']['body'],
  params?: IEndpoints['PATCH /security/fileSecurityProfiles/{fileSecurityProfile-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /security/fileSecurityProfiles/{fileSecurityProfile-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/security/fileSecurityProfiles/{fileSecurityProfile-id}',
    paramDefs: [{ name: 'fileSecurityProfile-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /security/fileSecurityProfiles`
 *
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /security/fileSecurityProfiles']['body'],
  params?: IEndpoints['POST /security/fileSecurityProfiles']['parameters']
): EndpointRequest<IEndpoints['POST /security/fileSecurityProfiles']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/security/fileSecurityProfiles',
    paramDefs: [],
    params,
    body,
  };
}
