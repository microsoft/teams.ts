import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}': Operation<
    '/me/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}',
    'delete'
  >;
  'GET /me/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results': Operation<
    '/me/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results',
    'get'
  >;
  'GET /me/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}': Operation<
    '/me/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}',
    'get'
  >;
  'PATCH /me/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}': Operation<
    '/me/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}',
    'patch'
  >;
  'POST /me/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results': Operation<
    '/me/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results',
    'post'
  >;
}

/**
 * `DELETE /me/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'threatAssessmentRequest-id', in: 'path' },
      { name: 'threatAssessmentResult-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results`
 *
 * A collection of threat assessment results. Read-only. By default, a GET /threatAssessmentRequests/{id} does not return this property unless you apply $expand on it.
 */
export function list(
  params?: IEndpoints['GET /me/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'threatAssessmentRequest-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}`
 *
 * A collection of threat assessment results. Read-only. By default, a GET /threatAssessmentRequests/{id} does not return this property unless you apply $expand on it.
 */
export function get(
  params?: IEndpoints['GET /me/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'threatAssessmentRequest-id', in: 'path' },
      { name: 'threatAssessmentResult-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}']['body'],
  params?: IEndpoints['PATCH /me/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}',
    paramDefs: [
      { name: 'threatAssessmentRequest-id', in: 'path' },
      { name: 'threatAssessmentResult-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /me/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results`
 *
 */
export function create(
  body: IEndpoints['POST /me/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results']['body'],
  params?: IEndpoints['POST /me/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results',
    paramDefs: [{ name: 'threatAssessmentRequest-id', in: 'path' }],
    params,
    body,
  };
}
