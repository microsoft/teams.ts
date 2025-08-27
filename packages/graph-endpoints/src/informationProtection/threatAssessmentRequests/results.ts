import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}': Operation<
    '/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}',
    'delete'
  >;
  'GET /informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results': Operation<
    '/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results',
    'get'
  >;
  'GET /informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}': Operation<
    '/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}',
    'get'
  >;
  'PATCH /informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}': Operation<
    '/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}',
    'patch'
  >;
  'POST /informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results': Operation<
    '/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results',
    'post'
  >;
}

/**
 * `DELETE /informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}']['response']
> {
  return {
    method: 'delete',
    path: '/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'threatAssessmentRequest-id', in: 'path' },
      { name: 'threatAssessmentResult-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results`
 *
 * A collection of threat assessment results. Read-only. By default, a GET /threatAssessmentRequests/{id} does not return this property unless you apply $expand on it.
 */
export function list(
  params?: IEndpoints['GET /informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results']['parameters']
): EndpointRequest<
  IEndpoints['GET /informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results']['response']
> {
  return {
    method: 'get',
    path: '/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results',
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
 * `GET /informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}`
 *
 * A collection of threat assessment results. Read-only. By default, a GET /threatAssessmentRequests/{id} does not return this property unless you apply $expand on it.
 */
export function get(
  params?: IEndpoints['GET /informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}']['response']
> {
  return {
    method: 'get',
    path: '/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}',
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
 * `PATCH /informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}']['body'],
  params?: IEndpoints['PATCH /informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}']['response']
> {
  return {
    method: 'patch',
    path: '/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}',
    paramDefs: [
      { name: 'threatAssessmentRequest-id', in: 'path' },
      { name: 'threatAssessmentResult-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results`
 *
 */
export function create(
  body: IEndpoints['POST /informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results']['body'],
  params?: IEndpoints['POST /informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results']['parameters']
): EndpointRequest<
  IEndpoints['POST /informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results']['response']
> {
  return {
    method: 'post',
    path: '/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results',
    paramDefs: [{ name: 'threatAssessmentRequest-id', in: 'path' }],
    params,
    body,
  };
}
