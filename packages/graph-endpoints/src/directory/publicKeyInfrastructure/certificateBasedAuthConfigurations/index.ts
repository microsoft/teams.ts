export * as certificateAuthorities from './certificateAuthorities';
export * as upload from './upload';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /directory/publicKeyInfrastructure/certificateBasedAuthConfigurations/{certificateBasedAuthPki-id}': Operation<
    '/directory/publicKeyInfrastructure/certificateBasedAuthConfigurations/{certificateBasedAuthPki-id}',
    'delete'
  >;
  'GET /directory/publicKeyInfrastructure/certificateBasedAuthConfigurations': Operation<
    '/directory/publicKeyInfrastructure/certificateBasedAuthConfigurations',
    'get'
  >;
  'GET /directory/publicKeyInfrastructure/certificateBasedAuthConfigurations/{certificateBasedAuthPki-id}': Operation<
    '/directory/publicKeyInfrastructure/certificateBasedAuthConfigurations/{certificateBasedAuthPki-id}',
    'get'
  >;
  'PATCH /directory/publicKeyInfrastructure/certificateBasedAuthConfigurations/{certificateBasedAuthPki-id}': Operation<
    '/directory/publicKeyInfrastructure/certificateBasedAuthConfigurations/{certificateBasedAuthPki-id}',
    'patch'
  >;
  'POST /directory/publicKeyInfrastructure/certificateBasedAuthConfigurations': Operation<
    '/directory/publicKeyInfrastructure/certificateBasedAuthConfigurations',
    'post'
  >;
}

/**
 * `DELETE /directory/publicKeyInfrastructure/certificateBasedAuthConfigurations/{certificateBasedAuthPki-id}`
 *
 * Delete a certificateBasedAuthPki object.
 */
export function del(
  params?: IEndpoints['DELETE /directory/publicKeyInfrastructure/certificateBasedAuthConfigurations/{certificateBasedAuthPki-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /directory/publicKeyInfrastructure/certificateBasedAuthConfigurations/{certificateBasedAuthPki-id}']['response']
> {
  return {
    method: 'delete',
    path: '/directory/publicKeyInfrastructure/certificateBasedAuthConfigurations/{certificateBasedAuthPki-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'certificateBasedAuthPki-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /directory/publicKeyInfrastructure/certificateBasedAuthConfigurations`
 *
 * Get a list of the certificateBasedAuthPki objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /directory/publicKeyInfrastructure/certificateBasedAuthConfigurations']['parameters']
): EndpointRequest<
  IEndpoints['GET /directory/publicKeyInfrastructure/certificateBasedAuthConfigurations']['response']
> {
  return {
    method: 'get',
    path: '/directory/publicKeyInfrastructure/certificateBasedAuthConfigurations',
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
 * `GET /directory/publicKeyInfrastructure/certificateBasedAuthConfigurations/{certificateBasedAuthPki-id}`
 *
 * Read the properties and relationships of a certificateBasedAuthPki object.
 */
export function get(
  params?: IEndpoints['GET /directory/publicKeyInfrastructure/certificateBasedAuthConfigurations/{certificateBasedAuthPki-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /directory/publicKeyInfrastructure/certificateBasedAuthConfigurations/{certificateBasedAuthPki-id}']['response']
> {
  return {
    method: 'get',
    path: '/directory/publicKeyInfrastructure/certificateBasedAuthConfigurations/{certificateBasedAuthPki-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'certificateBasedAuthPki-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /directory/publicKeyInfrastructure/certificateBasedAuthConfigurations/{certificateBasedAuthPki-id}`
 *
 * Update the properties of a certificateBasedAuthPki object.
 */
export function update(
  body: IEndpoints['PATCH /directory/publicKeyInfrastructure/certificateBasedAuthConfigurations/{certificateBasedAuthPki-id}']['body'],
  params?: IEndpoints['PATCH /directory/publicKeyInfrastructure/certificateBasedAuthConfigurations/{certificateBasedAuthPki-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /directory/publicKeyInfrastructure/certificateBasedAuthConfigurations/{certificateBasedAuthPki-id}']['response']
> {
  return {
    method: 'patch',
    path: '/directory/publicKeyInfrastructure/certificateBasedAuthConfigurations/{certificateBasedAuthPki-id}',
    paramDefs: [{ name: 'certificateBasedAuthPki-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /directory/publicKeyInfrastructure/certificateBasedAuthConfigurations`
 *
 * Create a new certificateBasedAuthPki object.
 */
export function create(
  body: IEndpoints['POST /directory/publicKeyInfrastructure/certificateBasedAuthConfigurations']['body'],
  params?: IEndpoints['POST /directory/publicKeyInfrastructure/certificateBasedAuthConfigurations']['parameters']
): EndpointRequest<
  IEndpoints['POST /directory/publicKeyInfrastructure/certificateBasedAuthConfigurations']['response']
> {
  return {
    method: 'post',
    path: '/directory/publicKeyInfrastructure/certificateBasedAuthConfigurations',
    paramDefs: [],
    params,
    body,
  };
}
