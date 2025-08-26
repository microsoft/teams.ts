import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /directory/certificateAuthorities/mutualTlsOauthConfigurations/{mutualTlsOauthConfiguration-id}': Operation<
    '/directory/certificateAuthorities/mutualTlsOauthConfigurations/{mutualTlsOauthConfiguration-id}',
    'delete'
  >;
  'GET /directory/certificateAuthorities/mutualTlsOauthConfigurations': Operation<
    '/directory/certificateAuthorities/mutualTlsOauthConfigurations',
    'get'
  >;
  'GET /directory/certificateAuthorities/mutualTlsOauthConfigurations/{mutualTlsOauthConfiguration-id}': Operation<
    '/directory/certificateAuthorities/mutualTlsOauthConfigurations/{mutualTlsOauthConfiguration-id}',
    'get'
  >;
  'PATCH /directory/certificateAuthorities/mutualTlsOauthConfigurations/{mutualTlsOauthConfiguration-id}': Operation<
    '/directory/certificateAuthorities/mutualTlsOauthConfigurations/{mutualTlsOauthConfiguration-id}',
    'patch'
  >;
  'POST /directory/certificateAuthorities/mutualTlsOauthConfigurations': Operation<
    '/directory/certificateAuthorities/mutualTlsOauthConfigurations',
    'post'
  >;
}

/**
 * `DELETE /directory/certificateAuthorities/mutualTlsOauthConfigurations/{mutualTlsOauthConfiguration-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /directory/certificateAuthorities/mutualTlsOauthConfigurations/{mutualTlsOauthConfiguration-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /directory/certificateAuthorities/mutualTlsOauthConfigurations/{mutualTlsOauthConfiguration-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/directory/certificateAuthorities/mutualTlsOauthConfigurations/{mutualTlsOauthConfiguration-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'mutualTlsOauthConfiguration-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /directory/certificateAuthorities/mutualTlsOauthConfigurations`
 *
 * Get a list of the available mutualTlsOauthConfiguration resources.
 */
export function list(
  params?: IEndpoints['GET /directory/certificateAuthorities/mutualTlsOauthConfigurations']['parameters']
): EndpointRequest<
  IEndpoints['GET /directory/certificateAuthorities/mutualTlsOauthConfigurations']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/directory/certificateAuthorities/mutualTlsOauthConfigurations',
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
 * `GET /directory/certificateAuthorities/mutualTlsOauthConfigurations/{mutualTlsOauthConfiguration-id}`
 *
 * Get the properties and relationships of the specified mutualTlsOauthConfiguration resource.
 */
export function get(
  params?: IEndpoints['GET /directory/certificateAuthorities/mutualTlsOauthConfigurations/{mutualTlsOauthConfiguration-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /directory/certificateAuthorities/mutualTlsOauthConfigurations/{mutualTlsOauthConfiguration-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/directory/certificateAuthorities/mutualTlsOauthConfigurations/{mutualTlsOauthConfiguration-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'mutualTlsOauthConfiguration-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /directory/certificateAuthorities/mutualTlsOauthConfigurations/{mutualTlsOauthConfiguration-id}`
 *
 * Update the specified mutualTlsOauthConfiguration resource. You can only update the following two properties: displayName, certificateAuthority. To update a subset of objects in the certificateAuthorities collection, first get the complete list, make your modifications, and then repost the entire contents of the certificateAuthorities attribute list in the request body. Excluding a subset of objects removes them from the collection.
 */
export function update(
  body: IEndpoints['PATCH /directory/certificateAuthorities/mutualTlsOauthConfigurations/{mutualTlsOauthConfiguration-id}']['body'],
  params?: IEndpoints['PATCH /directory/certificateAuthorities/mutualTlsOauthConfigurations/{mutualTlsOauthConfiguration-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /directory/certificateAuthorities/mutualTlsOauthConfigurations/{mutualTlsOauthConfiguration-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/directory/certificateAuthorities/mutualTlsOauthConfigurations/{mutualTlsOauthConfiguration-id}',
    paramDefs: [{ name: 'mutualTlsOauthConfiguration-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /directory/certificateAuthorities/mutualTlsOauthConfigurations`
 *
 * Create a mutualTlsOauthConfiguration resource that contains a specified certificate authority object.
 */
export function create(
  body: IEndpoints['POST /directory/certificateAuthorities/mutualTlsOauthConfigurations']['body'],
  params?: IEndpoints['POST /directory/certificateAuthorities/mutualTlsOauthConfigurations']['parameters']
): EndpointRequest<
  IEndpoints['POST /directory/certificateAuthorities/mutualTlsOauthConfigurations']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/directory/certificateAuthorities/mutualTlsOauthConfigurations',
    paramDefs: [],
    params,
    body,
  };
}
