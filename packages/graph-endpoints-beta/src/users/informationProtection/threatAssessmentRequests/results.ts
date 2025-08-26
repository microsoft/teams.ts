import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}': Operation<
    '/users/{user-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}',
    'delete'
  >;
  'GET /users/{user-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results': Operation<
    '/users/{user-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results',
    'get'
  >;
  'GET /users/{user-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}': Operation<
    '/users/{user-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}',
    'get'
  >;
  'PATCH /users/{user-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}': Operation<
    '/users/{user-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}',
    'patch'
  >;
  'POST /users/{user-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results': Operation<
    '/users/{user-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results',
    'post'
  >;
}

/**
 * `DELETE /users/{user-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'threatAssessmentRequest-id', in: 'path' },
      { name: 'threatAssessmentResult-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results`
 *
 * A collection of threat assessment results. Read-only. By default, a GET /threatAssessmentRequests/{id} does not return this property unless you apply $expand on it.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results',
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
      { name: 'threatAssessmentRequest-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}`
 *
 * A collection of threat assessment results. Read-only. By default, a GET /threatAssessmentRequests/{id} does not return this property unless you apply $expand on it.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'threatAssessmentRequest-id', in: 'path' },
      { name: 'threatAssessmentResult-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'threatAssessmentRequest-id', in: 'path' },
      { name: 'threatAssessmentResult-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results']['body'],
  params?: IEndpoints['POST /users/{user-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'threatAssessmentRequest-id', in: 'path' },
    ],
    params,
    body,
  };
}
