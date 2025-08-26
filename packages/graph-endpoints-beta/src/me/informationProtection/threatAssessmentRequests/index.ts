export * as results from './results';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}': Operation<
    '/me/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}',
    'delete'
  >;
  'GET /me/informationProtection/threatAssessmentRequests': Operation<
    '/me/informationProtection/threatAssessmentRequests',
    'get'
  >;
  'GET /me/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}': Operation<
    '/me/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}',
    'get'
  >;
  'PATCH /me/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}': Operation<
    '/me/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}',
    'patch'
  >;
  'POST /me/informationProtection/threatAssessmentRequests': Operation<
    '/me/informationProtection/threatAssessmentRequests',
    'post'
  >;
}

/**
 * `DELETE /me/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'threatAssessmentRequest-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/informationProtection/threatAssessmentRequests`
 *
 */
export function list(
  params?: IEndpoints['GET /me/informationProtection/threatAssessmentRequests']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/informationProtection/threatAssessmentRequests']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/informationProtection/threatAssessmentRequests',
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
 * `GET /me/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /me/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'threatAssessmentRequest-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}']['body'],
  params?: IEndpoints['PATCH /me/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}',
    paramDefs: [{ name: 'threatAssessmentRequest-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /me/informationProtection/threatAssessmentRequests`
 *
 */
export function create(
  body: IEndpoints['POST /me/informationProtection/threatAssessmentRequests']['body'],
  params?: IEndpoints['POST /me/informationProtection/threatAssessmentRequests']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/informationProtection/threatAssessmentRequests']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/informationProtection/threatAssessmentRequests',
    paramDefs: [],
    params,
    body,
  };
}
