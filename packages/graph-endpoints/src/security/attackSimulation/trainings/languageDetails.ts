import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/attackSimulation/trainings/{training-id}/languageDetails/{trainingLanguageDetail-id}': Operation<
    '/security/attackSimulation/trainings/{training-id}/languageDetails/{trainingLanguageDetail-id}',
    'delete'
  >;
  'GET /security/attackSimulation/trainings/{training-id}/languageDetails': Operation<
    '/security/attackSimulation/trainings/{training-id}/languageDetails',
    'get'
  >;
  'GET /security/attackSimulation/trainings/{training-id}/languageDetails/{trainingLanguageDetail-id}': Operation<
    '/security/attackSimulation/trainings/{training-id}/languageDetails/{trainingLanguageDetail-id}',
    'get'
  >;
  'PATCH /security/attackSimulation/trainings/{training-id}/languageDetails/{trainingLanguageDetail-id}': Operation<
    '/security/attackSimulation/trainings/{training-id}/languageDetails/{trainingLanguageDetail-id}',
    'patch'
  >;
  'POST /security/attackSimulation/trainings/{training-id}/languageDetails': Operation<
    '/security/attackSimulation/trainings/{training-id}/languageDetails',
    'post'
  >;
}

/**
 * `DELETE /security/attackSimulation/trainings/{training-id}/languageDetails/{trainingLanguageDetail-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /security/attackSimulation/trainings/{training-id}/languageDetails/{trainingLanguageDetail-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /security/attackSimulation/trainings/{training-id}/languageDetails/{trainingLanguageDetail-id}']['response']
> {
  return {
    method: 'delete',
    path: '/security/attackSimulation/trainings/{training-id}/languageDetails/{trainingLanguageDetail-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'training-id', in: 'path' },
      { name: 'trainingLanguageDetail-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /security/attackSimulation/trainings/{training-id}/languageDetails`
 *
 * Get the language details about an attack simulation training for a tenant.
 */
export function list(
  params?: IEndpoints['GET /security/attackSimulation/trainings/{training-id}/languageDetails']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/attackSimulation/trainings/{training-id}/languageDetails']['response']
> {
  return {
    method: 'get',
    path: '/security/attackSimulation/trainings/{training-id}/languageDetails',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'training-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /security/attackSimulation/trainings/{training-id}/languageDetails/{trainingLanguageDetail-id}`
 *
 * Get the language details about an attack simulation training for a tenant.
 */
export function get(
  params?: IEndpoints['GET /security/attackSimulation/trainings/{training-id}/languageDetails/{trainingLanguageDetail-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/attackSimulation/trainings/{training-id}/languageDetails/{trainingLanguageDetail-id}']['response']
> {
  return {
    method: 'get',
    path: '/security/attackSimulation/trainings/{training-id}/languageDetails/{trainingLanguageDetail-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'training-id', in: 'path' },
      { name: 'trainingLanguageDetail-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /security/attackSimulation/trainings/{training-id}/languageDetails/{trainingLanguageDetail-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/attackSimulation/trainings/{training-id}/languageDetails/{trainingLanguageDetail-id}']['body'],
  params?: IEndpoints['PATCH /security/attackSimulation/trainings/{training-id}/languageDetails/{trainingLanguageDetail-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /security/attackSimulation/trainings/{training-id}/languageDetails/{trainingLanguageDetail-id}']['response']
> {
  return {
    method: 'patch',
    path: '/security/attackSimulation/trainings/{training-id}/languageDetails/{trainingLanguageDetail-id}',
    paramDefs: [
      { name: 'training-id', in: 'path' },
      { name: 'trainingLanguageDetail-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /security/attackSimulation/trainings/{training-id}/languageDetails`
 *
 */
export function create(
  body: IEndpoints['POST /security/attackSimulation/trainings/{training-id}/languageDetails']['body'],
  params?: IEndpoints['POST /security/attackSimulation/trainings/{training-id}/languageDetails']['parameters']
): EndpointRequest<
  IEndpoints['POST /security/attackSimulation/trainings/{training-id}/languageDetails']['response']
> {
  return {
    method: 'post',
    path: '/security/attackSimulation/trainings/{training-id}/languageDetails',
    paramDefs: [{ name: 'training-id', in: 'path' }],
    params,
    body,
  };
}
