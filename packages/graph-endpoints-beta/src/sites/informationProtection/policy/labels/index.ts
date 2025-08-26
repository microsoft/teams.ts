export * as evaluateApplication from './evaluateApplication';
export * as evaluateClassificationResults from './evaluateClassificationResults';
export * as evaluateRemoval from './evaluateRemoval';
export * as extractLabel from './extractLabel';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /sites/{site-id}/informationProtection/policy/labels/{informationProtectionLabel-id}': Operation<
    '/sites/{site-id}/informationProtection/policy/labels/{informationProtectionLabel-id}',
    'delete'
  >;
  'GET /sites/{site-id}/informationProtection/policy/labels': Operation<
    '/sites/{site-id}/informationProtection/policy/labels',
    'get'
  >;
  'GET /sites/{site-id}/informationProtection/policy/labels/{informationProtectionLabel-id}': Operation<
    '/sites/{site-id}/informationProtection/policy/labels/{informationProtectionLabel-id}',
    'get'
  >;
  'PATCH /sites/{site-id}/informationProtection/policy/labels/{informationProtectionLabel-id}': Operation<
    '/sites/{site-id}/informationProtection/policy/labels/{informationProtectionLabel-id}',
    'patch'
  >;
  'POST /sites/{site-id}/informationProtection/policy/labels': Operation<
    '/sites/{site-id}/informationProtection/policy/labels',
    'post'
  >;
}

/**
 * `DELETE /sites/{site-id}/informationProtection/policy/labels/{informationProtectionLabel-id}`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /sites/{site-id}/informationProtection/policy/labels/{informationProtectionLabel-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /sites/{site-id}/informationProtection/policy/labels/{informationProtectionLabel-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/sites/{site-id}/informationProtection/policy/labels/{informationProtectionLabel-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'site-id', in: 'path' },
      { name: 'informationProtectionLabel-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /sites/{site-id}/informationProtection/policy/labels`
 *
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /sites/{site-id}/informationProtection/policy/labels']['parameters']
): EndpointRequest<
  IEndpoints['GET /sites/{site-id}/informationProtection/policy/labels']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/sites/{site-id}/informationProtection/policy/labels',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'site-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /sites/{site-id}/informationProtection/policy/labels/{informationProtectionLabel-id}`
 *
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /sites/{site-id}/informationProtection/policy/labels/{informationProtectionLabel-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /sites/{site-id}/informationProtection/policy/labels/{informationProtectionLabel-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/sites/{site-id}/informationProtection/policy/labels/{informationProtectionLabel-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'site-id', in: 'path' },
      { name: 'informationProtectionLabel-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /sites/{site-id}/informationProtection/policy/labels/{informationProtectionLabel-id}`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /sites/{site-id}/informationProtection/policy/labels/{informationProtectionLabel-id}']['body'],
  params?: IEndpoints['PATCH /sites/{site-id}/informationProtection/policy/labels/{informationProtectionLabel-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /sites/{site-id}/informationProtection/policy/labels/{informationProtectionLabel-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/sites/{site-id}/informationProtection/policy/labels/{informationProtectionLabel-id}',
    paramDefs: [
      { name: 'site-id', in: 'path' },
      { name: 'informationProtectionLabel-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /sites/{site-id}/informationProtection/policy/labels`
 *
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /sites/{site-id}/informationProtection/policy/labels']['body'],
  params?: IEndpoints['POST /sites/{site-id}/informationProtection/policy/labels']['parameters']
): EndpointRequest<
  IEndpoints['POST /sites/{site-id}/informationProtection/policy/labels']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/sites/{site-id}/informationProtection/policy/labels',
    paramDefs: [{ name: 'site-id', in: 'path' }],
    params,
    body,
  };
}
