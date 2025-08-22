export * as indicators from './indicators';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/threatIntelligence/intelProfiles/{intelligenceProfile-id}': Operation<
    '/security/threatIntelligence/intelProfiles/{intelligenceProfile-id}',
    'delete'
  >;
  'GET /security/threatIntelligence/intelProfiles': Operation<
    '/security/threatIntelligence/intelProfiles',
    'get'
  >;
  'GET /security/threatIntelligence/intelProfiles/{intelligenceProfile-id}': Operation<
    '/security/threatIntelligence/intelProfiles/{intelligenceProfile-id}',
    'get'
  >;
  'PATCH /security/threatIntelligence/intelProfiles/{intelligenceProfile-id}': Operation<
    '/security/threatIntelligence/intelProfiles/{intelligenceProfile-id}',
    'patch'
  >;
  'POST /security/threatIntelligence/intelProfiles': Operation<
    '/security/threatIntelligence/intelProfiles',
    'post'
  >;
}

/**
 * `DELETE /security/threatIntelligence/intelProfiles/{intelligenceProfile-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /security/threatIntelligence/intelProfiles/{intelligenceProfile-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /security/threatIntelligence/intelProfiles/{intelligenceProfile-id}']['response']
> {
  return {
    method: 'delete',
    path: '/security/threatIntelligence/intelProfiles/{intelligenceProfile-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'intelligenceProfile-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /security/threatIntelligence/intelProfiles`
 *
 * Get a list of the intelligenceProfile objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /security/threatIntelligence/intelProfiles']['parameters']
): EndpointRequest<IEndpoints['GET /security/threatIntelligence/intelProfiles']['response']> {
  return {
    method: 'get',
    path: '/security/threatIntelligence/intelProfiles',
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
 * `GET /security/threatIntelligence/intelProfiles/{intelligenceProfile-id}`
 *
 * Read the properties and relationships of a intelligenceProfile object.
 */
export function get(
  params?: IEndpoints['GET /security/threatIntelligence/intelProfiles/{intelligenceProfile-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/threatIntelligence/intelProfiles/{intelligenceProfile-id}']['response']
> {
  return {
    method: 'get',
    path: '/security/threatIntelligence/intelProfiles/{intelligenceProfile-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'intelligenceProfile-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /security/threatIntelligence/intelProfiles/{intelligenceProfile-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/threatIntelligence/intelProfiles/{intelligenceProfile-id}']['body'],
  params?: IEndpoints['PATCH /security/threatIntelligence/intelProfiles/{intelligenceProfile-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /security/threatIntelligence/intelProfiles/{intelligenceProfile-id}']['response']
> {
  return {
    method: 'patch',
    path: '/security/threatIntelligence/intelProfiles/{intelligenceProfile-id}',
    paramDefs: [{ name: 'intelligenceProfile-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /security/threatIntelligence/intelProfiles`
 *
 */
export function create(
  body: IEndpoints['POST /security/threatIntelligence/intelProfiles']['body'],
  params?: IEndpoints['POST /security/threatIntelligence/intelProfiles']['parameters']
): EndpointRequest<IEndpoints['POST /security/threatIntelligence/intelProfiles']['response']> {
  return {
    method: 'post',
    path: '/security/threatIntelligence/intelProfiles',
    paramDefs: [],
    params,
    body,
  };
}
