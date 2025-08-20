export * as results from './results';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}': Operation<
    '/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}',
    'delete'
  >;
  'GET /informationProtection/threatAssessmentRequests': Operation<
    '/informationProtection/threatAssessmentRequests',
    'get'
  >;
  'GET /informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}': Operation<
    '/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}',
    'get'
  >;
  'PATCH /informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}': Operation<
    '/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}',
    'patch'
  >;
  'POST /informationProtection/threatAssessmentRequests': Operation<
    '/informationProtection/threatAssessmentRequests',
    'post'
  >;
}

/**
 * `DELETE /informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'threatAssessmentRequest-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /informationProtection/threatAssessmentRequests`
 *
 * Retrieve a list of threatAssessmentRequest objects. A threat assessment request can be one of the following types:
 */
export function list(
  params?: IEndpoints['GET /informationProtection/threatAssessmentRequests']['parameters']
): EndpointRequest<IEndpoints['GET /informationProtection/threatAssessmentRequests']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/informationProtection/threatAssessmentRequests',
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
 * `GET /informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}`
 *
 * Retrieve the properties and relationships of a specified threatAssessmentRequest object. A threat assessment request can be one of the following types:
 */
export function get(
  params?: IEndpoints['GET /informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'threatAssessmentRequest-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}']['body'],
  params?: IEndpoints['PATCH /informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}',
    paramDefs: [{ name: 'threatAssessmentRequest-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /informationProtection/threatAssessmentRequests`
 *
 * Create a new threat assessment request. A threat assessment request can be one of the following types:
 */
export function create(
  body: IEndpoints['POST /informationProtection/threatAssessmentRequests']['body'],
  params?: IEndpoints['POST /informationProtection/threatAssessmentRequests']['parameters']
): EndpointRequest<IEndpoints['POST /informationProtection/threatAssessmentRequests']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/informationProtection/threatAssessmentRequests',
    paramDefs: [],
    params,
    body,
  };
}
