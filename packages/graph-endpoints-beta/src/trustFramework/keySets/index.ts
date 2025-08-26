export * as generateKey from './generateKey';
export * as uploadCertificate from './uploadCertificate';
export * as uploadPkcs12 from './uploadPkcs12';
export * as uploadSecret from './uploadSecret';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /trustFramework/keySets/{trustFrameworkKeySet-id}': Operation<
    '/trustFramework/keySets/{trustFrameworkKeySet-id}',
    'delete'
  >;
  'GET /trustFramework/keySets': Operation<'/trustFramework/keySets', 'get'>;
  'GET /trustFramework/keySets/{trustFrameworkKeySet-id}': Operation<
    '/trustFramework/keySets/{trustFrameworkKeySet-id}',
    'get'
  >;
  'PATCH /trustFramework/keySets/{trustFrameworkKeySet-id}': Operation<
    '/trustFramework/keySets/{trustFrameworkKeySet-id}',
    'patch'
  >;
  'POST /trustFramework/keySets': Operation<'/trustFramework/keySets', 'post'>;
}

/**
 * `DELETE /trustFramework/keySets/{trustFrameworkKeySet-id}`
 *
 * Delete a trustFrameworkKeySet.
 */
export function del(
  params?: IEndpoints['DELETE /trustFramework/keySets/{trustFrameworkKeySet-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /trustFramework/keySets/{trustFrameworkKeySet-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/trustFramework/keySets/{trustFrameworkKeySet-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'trustFrameworkKeySet-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /trustFramework/keySets`
 *
 * Retrieve a list of trustFrameworkKeySets.
 */
export function list(
  params?: IEndpoints['GET /trustFramework/keySets']['parameters']
): EndpointRequest<IEndpoints['GET /trustFramework/keySets']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/trustFramework/keySets',
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
 * `GET /trustFramework/keySets/{trustFrameworkKeySet-id}`
 *
 * Retrieve the properties and associations for a Trustframeworkkeyset.
 */
export function get(
  params?: IEndpoints['GET /trustFramework/keySets/{trustFrameworkKeySet-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /trustFramework/keySets/{trustFrameworkKeySet-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/trustFramework/keySets/{trustFrameworkKeySet-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'trustFrameworkKeySet-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /trustFramework/keySets/{trustFrameworkKeySet-id}`
 *
 * Update the properties of a trustFrameworkKeyset. This operation will replace the content of an existing keyset. Specifying the ID in the request payload is optional.
 */
export function update(
  body: IEndpoints['PATCH /trustFramework/keySets/{trustFrameworkKeySet-id}']['body'],
  params?: IEndpoints['PATCH /trustFramework/keySets/{trustFrameworkKeySet-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /trustFramework/keySets/{trustFrameworkKeySet-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/trustFramework/keySets/{trustFrameworkKeySet-id}',
    paramDefs: [{ name: 'trustFrameworkKeySet-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /trustFramework/keySets`
 *
 * Create a new trustFrameworkKeySet. The ID of the trustFrameworkKeySet is expected in the create request; however, it can be modified by the service. The modified ID will be available in the response and in the location header.
 */
export function create(
  body: IEndpoints['POST /trustFramework/keySets']['body'],
  params?: IEndpoints['POST /trustFramework/keySets']['parameters']
): EndpointRequest<IEndpoints['POST /trustFramework/keySets']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/trustFramework/keySets',
    paramDefs: [],
    params,
    body,
  };
}
