import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /directory/deviceLocalCredentials/{deviceLocalCredentialInfo-id}': Operation<
    '/directory/deviceLocalCredentials/{deviceLocalCredentialInfo-id}',
    'delete'
  >;
  'GET /directory/deviceLocalCredentials': Operation<'/directory/deviceLocalCredentials', 'get'>;
  'GET /directory/deviceLocalCredentials/{deviceLocalCredentialInfo-id}': Operation<
    '/directory/deviceLocalCredentials/{deviceLocalCredentialInfo-id}',
    'get'
  >;
  'PATCH /directory/deviceLocalCredentials/{deviceLocalCredentialInfo-id}': Operation<
    '/directory/deviceLocalCredentials/{deviceLocalCredentialInfo-id}',
    'patch'
  >;
  'POST /directory/deviceLocalCredentials': Operation<'/directory/deviceLocalCredentials', 'post'>;
}

/**
 * `DELETE /directory/deviceLocalCredentials/{deviceLocalCredentialInfo-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /directory/deviceLocalCredentials/{deviceLocalCredentialInfo-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /directory/deviceLocalCredentials/{deviceLocalCredentialInfo-id}']['response']
> {
  return {
    method: 'delete',
    path: '/directory/deviceLocalCredentials/{deviceLocalCredentialInfo-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'deviceLocalCredentialInfo-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /directory/deviceLocalCredentials`
 *
 * Get a list of the deviceLocalCredentialInfo objects and their properties, excluding the credentials property.
 */
export function list(
  params?: IEndpoints['GET /directory/deviceLocalCredentials']['parameters']
): EndpointRequest<IEndpoints['GET /directory/deviceLocalCredentials']['response']> {
  return {
    method: 'get',
    path: '/directory/deviceLocalCredentials',
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
 * `GET /directory/deviceLocalCredentials/{deviceLocalCredentialInfo-id}`
 *
 * Retrieve the properties of a deviceLocalCredentialInfo for a specified device object.
 */
export function get(
  params?: IEndpoints['GET /directory/deviceLocalCredentials/{deviceLocalCredentialInfo-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /directory/deviceLocalCredentials/{deviceLocalCredentialInfo-id}']['response']
> {
  return {
    method: 'get',
    path: '/directory/deviceLocalCredentials/{deviceLocalCredentialInfo-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceLocalCredentialInfo-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /directory/deviceLocalCredentials/{deviceLocalCredentialInfo-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /directory/deviceLocalCredentials/{deviceLocalCredentialInfo-id}']['body'],
  params?: IEndpoints['PATCH /directory/deviceLocalCredentials/{deviceLocalCredentialInfo-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /directory/deviceLocalCredentials/{deviceLocalCredentialInfo-id}']['response']
> {
  return {
    method: 'patch',
    path: '/directory/deviceLocalCredentials/{deviceLocalCredentialInfo-id}',
    paramDefs: [{ name: 'deviceLocalCredentialInfo-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /directory/deviceLocalCredentials`
 *
 */
export function create(
  body: IEndpoints['POST /directory/deviceLocalCredentials']['body'],
  params?: IEndpoints['POST /directory/deviceLocalCredentials']['parameters']
): EndpointRequest<IEndpoints['POST /directory/deviceLocalCredentials']['response']> {
  return {
    method: 'post',
    path: '/directory/deviceLocalCredentials',
    paramDefs: [],
    params,
    body,
  };
}
