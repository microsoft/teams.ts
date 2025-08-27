export * as results from './results';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}': Operation<
    '/users/{user-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}',
    'delete'
  >;
  'GET /users/{user-id}/informationProtection/threatAssessmentRequests': Operation<
    '/users/{user-id}/informationProtection/threatAssessmentRequests',
    'get'
  >;
  'GET /users/{user-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}': Operation<
    '/users/{user-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}',
    'get'
  >;
  'PATCH /users/{user-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}': Operation<
    '/users/{user-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}',
    'patch'
  >;
  'POST /users/{user-id}/informationProtection/threatAssessmentRequests': Operation<
    '/users/{user-id}/informationProtection/threatAssessmentRequests',
    'post'
  >;
}

/**
 * `DELETE /users/{user-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'threatAssessmentRequest-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/informationProtection/threatAssessmentRequests`
 *
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/informationProtection/threatAssessmentRequests']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/informationProtection/threatAssessmentRequests']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/informationProtection/threatAssessmentRequests',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'threatAssessmentRequest-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'threatAssessmentRequest-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/informationProtection/threatAssessmentRequests`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/informationProtection/threatAssessmentRequests']['body'],
  params?: IEndpoints['POST /users/{user-id}/informationProtection/threatAssessmentRequests']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/informationProtection/threatAssessmentRequests']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/informationProtection/threatAssessmentRequests',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
