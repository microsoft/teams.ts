export * as evaluateApplication from './evaluateApplication';
export * as evaluateClassificationResults from './evaluateClassificationResults';
export * as evaluateRemoval from './evaluateRemoval';
export * as extractLabel from './extractLabel';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/informationProtection/policy/labels/{informationProtectionLabel-id}': Operation<
    '/me/informationProtection/policy/labels/{informationProtectionLabel-id}',
    'delete'
  >;
  'GET /me/informationProtection/policy/labels': Operation<
    '/me/informationProtection/policy/labels',
    'get'
  >;
  'GET /me/informationProtection/policy/labels/{informationProtectionLabel-id}': Operation<
    '/me/informationProtection/policy/labels/{informationProtectionLabel-id}',
    'get'
  >;
  'PATCH /me/informationProtection/policy/labels/{informationProtectionLabel-id}': Operation<
    '/me/informationProtection/policy/labels/{informationProtectionLabel-id}',
    'patch'
  >;
  'POST /me/informationProtection/policy/labels': Operation<
    '/me/informationProtection/policy/labels',
    'post'
  >;
}

/**
 * `DELETE /me/informationProtection/policy/labels/{informationProtectionLabel-id}`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /me/informationProtection/policy/labels/{informationProtectionLabel-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/informationProtection/policy/labels/{informationProtectionLabel-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/informationProtection/policy/labels/{informationProtectionLabel-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'informationProtectionLabel-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/informationProtection/policy/labels`
 *
 * Get a collection of information protection labels available to the user or to the organization.
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /me/informationProtection/policy/labels']['parameters']
): EndpointRequest<IEndpoints['GET /me/informationProtection/policy/labels']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/informationProtection/policy/labels',
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
 * `GET /me/informationProtection/policy/labels/{informationProtectionLabel-id}`
 *
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /me/informationProtection/policy/labels/{informationProtectionLabel-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/informationProtection/policy/labels/{informationProtectionLabel-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/informationProtection/policy/labels/{informationProtectionLabel-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'informationProtectionLabel-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/informationProtection/policy/labels/{informationProtectionLabel-id}`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /me/informationProtection/policy/labels/{informationProtectionLabel-id}']['body'],
  params?: IEndpoints['PATCH /me/informationProtection/policy/labels/{informationProtectionLabel-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/informationProtection/policy/labels/{informationProtectionLabel-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/informationProtection/policy/labels/{informationProtectionLabel-id}',
    paramDefs: [{ name: 'informationProtectionLabel-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /me/informationProtection/policy/labels`
 *
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /me/informationProtection/policy/labels']['body'],
  params?: IEndpoints['POST /me/informationProtection/policy/labels']['parameters']
): EndpointRequest<IEndpoints['POST /me/informationProtection/policy/labels']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/informationProtection/policy/labels',
    paramDefs: [],
    params,
    body,
  };
}
