export * as results from './results';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}',
    'delete'
  >;
  'GET /groups/{group-id}/sites/{site-id}/informationProtection/threatAssessmentRequests': Operation<
    '/groups/{group-id}/sites/{site-id}/informationProtection/threatAssessmentRequests',
    'get'
  >;
  'GET /groups/{group-id}/sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}',
    'patch'
  >;
  'POST /groups/{group-id}/sites/{site-id}/informationProtection/threatAssessmentRequests': Operation<
    '/groups/{group-id}/sites/{site-id}/informationProtection/threatAssessmentRequests',
    'post'
  >;
}

/**
 * `DELETE /groups/{group-id}/sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/groups/{group-id}/sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
      { name: 'threatAssessmentRequest-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/informationProtection/threatAssessmentRequests`
 *
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/informationProtection/threatAssessmentRequests']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/sites/{site-id}/informationProtection/threatAssessmentRequests']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/informationProtection/threatAssessmentRequests',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
      { name: 'threatAssessmentRequest-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /groups/{group-id}/sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/groups/{group-id}/sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
      { name: 'threatAssessmentRequest-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /groups/{group-id}/sites/{site-id}/informationProtection/threatAssessmentRequests`
 *
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/sites/{site-id}/informationProtection/threatAssessmentRequests']['body'],
  params?: IEndpoints['POST /groups/{group-id}/sites/{site-id}/informationProtection/threatAssessmentRequests']['parameters']
): EndpointRequest<
  IEndpoints['POST /groups/{group-id}/sites/{site-id}/informationProtection/threatAssessmentRequests']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/groups/{group-id}/sites/{site-id}/informationProtection/threatAssessmentRequests',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
    ],
    params,
    body,
  };
}
