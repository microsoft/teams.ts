import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}': Operation<
    '/sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}',
    'delete'
  >;
  'GET /sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results': Operation<
    '/sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results',
    'get'
  >;
  'GET /sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}': Operation<
    '/sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}',
    'get'
  >;
  'PATCH /sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}': Operation<
    '/sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}',
    'patch'
  >;
  'POST /sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results': Operation<
    '/sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results',
    'post'
  >;
}

/**
 * `DELETE /sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'site-id', in: 'path' },
      { name: 'threatAssessmentRequest-id', in: 'path' },
      { name: 'threatAssessmentResult-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results`
 *
 * A collection of threat assessment results. Read-only. By default, a GET /threatAssessmentRequests/{id} does not return this property unless you apply $expand on it.
 */
export function list(
  params?: IEndpoints['GET /sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results']['parameters']
): EndpointRequest<
  IEndpoints['GET /sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results',
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
      { name: 'threatAssessmentRequest-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}`
 *
 * A collection of threat assessment results. Read-only. By default, a GET /threatAssessmentRequests/{id} does not return this property unless you apply $expand on it.
 */
export function get(
  params?: IEndpoints['GET /sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'site-id', in: 'path' },
      { name: 'threatAssessmentRequest-id', in: 'path' },
      { name: 'threatAssessmentResult-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}']['body'],
  params?: IEndpoints['PATCH /sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}',
    paramDefs: [
      { name: 'site-id', in: 'path' },
      { name: 'threatAssessmentRequest-id', in: 'path' },
      { name: 'threatAssessmentResult-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results`
 *
 */
export function create(
  body: IEndpoints['POST /sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results']['body'],
  params?: IEndpoints['POST /sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results']['parameters']
): EndpointRequest<
  IEndpoints['POST /sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/sites/{site-id}/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results',
    paramDefs: [
      { name: 'site-id', in: 'path' },
      { name: 'threatAssessmentRequest-id', in: 'path' },
    ],
    params,
    body,
  };
}
