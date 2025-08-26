export * as languageDetails from './languageDetails';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/attackSimulation/trainings/{training-id}': Operation<
    '/security/attackSimulation/trainings/{training-id}',
    'delete'
  >;
  'GET /security/attackSimulation/trainings': Operation<
    '/security/attackSimulation/trainings',
    'get'
  >;
  'GET /security/attackSimulation/trainings/{training-id}': Operation<
    '/security/attackSimulation/trainings/{training-id}',
    'get'
  >;
  'PATCH /security/attackSimulation/trainings/{training-id}': Operation<
    '/security/attackSimulation/trainings/{training-id}',
    'patch'
  >;
  'POST /security/attackSimulation/trainings': Operation<
    '/security/attackSimulation/trainings',
    'post'
  >;
}

/**
 * `DELETE /security/attackSimulation/trainings/{training-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /security/attackSimulation/trainings/{training-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /security/attackSimulation/trainings/{training-id}']['response']
> {
  return {
    method: 'delete',
    path: '/security/attackSimulation/trainings/{training-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'training-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /security/attackSimulation/trainings`
 *
 * Get a list of the training objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /security/attackSimulation/trainings']['parameters']
): EndpointRequest<IEndpoints['GET /security/attackSimulation/trainings']['response']> {
  return {
    method: 'get',
    path: '/security/attackSimulation/trainings',
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
 * `GET /security/attackSimulation/trainings/{training-id}`
 *
 * Get an attack simulation training for a tenant.
 */
export function get(
  params?: IEndpoints['GET /security/attackSimulation/trainings/{training-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/attackSimulation/trainings/{training-id}']['response']
> {
  return {
    method: 'get',
    path: '/security/attackSimulation/trainings/{training-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'training-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /security/attackSimulation/trainings/{training-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/attackSimulation/trainings/{training-id}']['body'],
  params?: IEndpoints['PATCH /security/attackSimulation/trainings/{training-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /security/attackSimulation/trainings/{training-id}']['response']
> {
  return {
    method: 'patch',
    path: '/security/attackSimulation/trainings/{training-id}',
    paramDefs: [{ name: 'training-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /security/attackSimulation/trainings`
 *
 */
export function create(
  body: IEndpoints['POST /security/attackSimulation/trainings']['body'],
  params?: IEndpoints['POST /security/attackSimulation/trainings']['parameters']
): EndpointRequest<IEndpoints['POST /security/attackSimulation/trainings']['response']> {
  return {
    method: 'post',
    path: '/security/attackSimulation/trainings',
    paramDefs: [],
    params,
    body,
  };
}
