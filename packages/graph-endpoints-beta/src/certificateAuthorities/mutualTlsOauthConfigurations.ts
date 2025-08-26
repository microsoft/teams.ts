import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /certificateAuthorities/mutualTlsOauthConfigurations/{mutualTlsOauthConfiguration-id}': Operation<
    '/certificateAuthorities/mutualTlsOauthConfigurations/{mutualTlsOauthConfiguration-id}',
    'delete'
  >;
  'GET /certificateAuthorities/mutualTlsOauthConfigurations': Operation<
    '/certificateAuthorities/mutualTlsOauthConfigurations',
    'get'
  >;
  'GET /certificateAuthorities/mutualTlsOauthConfigurations/{mutualTlsOauthConfiguration-id}': Operation<
    '/certificateAuthorities/mutualTlsOauthConfigurations/{mutualTlsOauthConfiguration-id}',
    'get'
  >;
  'PATCH /certificateAuthorities/mutualTlsOauthConfigurations/{mutualTlsOauthConfiguration-id}': Operation<
    '/certificateAuthorities/mutualTlsOauthConfigurations/{mutualTlsOauthConfiguration-id}',
    'patch'
  >;
  'POST /certificateAuthorities/mutualTlsOauthConfigurations': Operation<
    '/certificateAuthorities/mutualTlsOauthConfigurations',
    'post'
  >;
}

/**
 * `DELETE /certificateAuthorities/mutualTlsOauthConfigurations/{mutualTlsOauthConfiguration-id}`
 *
 * Delete the specified mutualTlsOauthConfiguration resource. You must first delete the deviceTemplate object that references the ID.
 */
export function del(
  params?: IEndpoints['DELETE /certificateAuthorities/mutualTlsOauthConfigurations/{mutualTlsOauthConfiguration-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /certificateAuthorities/mutualTlsOauthConfigurations/{mutualTlsOauthConfiguration-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/certificateAuthorities/mutualTlsOauthConfigurations/{mutualTlsOauthConfiguration-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'mutualTlsOauthConfiguration-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /certificateAuthorities/mutualTlsOauthConfigurations`
 *
 * Defines the trusted certificate authorities for certificates that can be added to Internet of Things (IoT) devices.
 */
export function list(
  params?: IEndpoints['GET /certificateAuthorities/mutualTlsOauthConfigurations']['parameters']
): EndpointRequest<
  IEndpoints['GET /certificateAuthorities/mutualTlsOauthConfigurations']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/certificateAuthorities/mutualTlsOauthConfigurations',
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
 * `GET /certificateAuthorities/mutualTlsOauthConfigurations/{mutualTlsOauthConfiguration-id}`
 *
 * Defines the trusted certificate authorities for certificates that can be added to Internet of Things (IoT) devices.
 */
export function get(
  params?: IEndpoints['GET /certificateAuthorities/mutualTlsOauthConfigurations/{mutualTlsOauthConfiguration-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /certificateAuthorities/mutualTlsOauthConfigurations/{mutualTlsOauthConfiguration-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/certificateAuthorities/mutualTlsOauthConfigurations/{mutualTlsOauthConfiguration-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'mutualTlsOauthConfiguration-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /certificateAuthorities/mutualTlsOauthConfigurations/{mutualTlsOauthConfiguration-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /certificateAuthorities/mutualTlsOauthConfigurations/{mutualTlsOauthConfiguration-id}']['body'],
  params?: IEndpoints['PATCH /certificateAuthorities/mutualTlsOauthConfigurations/{mutualTlsOauthConfiguration-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /certificateAuthorities/mutualTlsOauthConfigurations/{mutualTlsOauthConfiguration-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/certificateAuthorities/mutualTlsOauthConfigurations/{mutualTlsOauthConfiguration-id}',
    paramDefs: [{ name: 'mutualTlsOauthConfiguration-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /certificateAuthorities/mutualTlsOauthConfigurations`
 *
 */
export function create(
  body: IEndpoints['POST /certificateAuthorities/mutualTlsOauthConfigurations']['body'],
  params?: IEndpoints['POST /certificateAuthorities/mutualTlsOauthConfigurations']['parameters']
): EndpointRequest<
  IEndpoints['POST /certificateAuthorities/mutualTlsOauthConfigurations']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/certificateAuthorities/mutualTlsOauthConfigurations',
    paramDefs: [],
    params,
    body,
  };
}
