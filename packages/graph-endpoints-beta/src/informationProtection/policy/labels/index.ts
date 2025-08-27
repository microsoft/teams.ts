export * as evaluateApplication from './evaluateApplication';
export * as evaluateClassificationResults from './evaluateClassificationResults';
export * as evaluateRemoval from './evaluateRemoval';
export * as extractLabel from './extractLabel';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /informationProtection/policy/labels/{informationProtectionLabel-id}': Operation<
    '/informationProtection/policy/labels/{informationProtectionLabel-id}',
    'delete'
  >;
  'GET /informationProtection/policy/labels': Operation<
    '/informationProtection/policy/labels',
    'get'
  >;
  'GET /informationProtection/policy/labels/{informationProtectionLabel-id}': Operation<
    '/informationProtection/policy/labels/{informationProtectionLabel-id}',
    'get'
  >;
  'PATCH /informationProtection/policy/labels/{informationProtectionLabel-id}': Operation<
    '/informationProtection/policy/labels/{informationProtectionLabel-id}',
    'patch'
  >;
  'POST /informationProtection/policy/labels': Operation<
    '/informationProtection/policy/labels',
    'post'
  >;
}

/**
 * `DELETE /informationProtection/policy/labels/{informationProtectionLabel-id}`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /informationProtection/policy/labels/{informationProtectionLabel-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /informationProtection/policy/labels/{informationProtectionLabel-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/informationProtection/policy/labels/{informationProtectionLabel-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'informationProtectionLabel-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /informationProtection/policy/labels`
 *
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /informationProtection/policy/labels']['parameters']
): EndpointRequest<IEndpoints['GET /informationProtection/policy/labels']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/informationProtection/policy/labels',
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
 * `GET /informationProtection/policy/labels/{informationProtectionLabel-id}`
 *
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /informationProtection/policy/labels/{informationProtectionLabel-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /informationProtection/policy/labels/{informationProtectionLabel-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/informationProtection/policy/labels/{informationProtectionLabel-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'informationProtectionLabel-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /informationProtection/policy/labels/{informationProtectionLabel-id}`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /informationProtection/policy/labels/{informationProtectionLabel-id}']['body'],
  params?: IEndpoints['PATCH /informationProtection/policy/labels/{informationProtectionLabel-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /informationProtection/policy/labels/{informationProtectionLabel-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/informationProtection/policy/labels/{informationProtectionLabel-id}',
    paramDefs: [{ name: 'informationProtectionLabel-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /informationProtection/policy/labels`
 *
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /informationProtection/policy/labels']['body'],
  params?: IEndpoints['POST /informationProtection/policy/labels']['parameters']
): EndpointRequest<IEndpoints['POST /informationProtection/policy/labels']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/informationProtection/policy/labels',
    paramDefs: [],
    params,
    body,
  };
}
