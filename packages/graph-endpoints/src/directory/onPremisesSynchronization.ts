import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /directory/onPremisesSynchronization/{onPremisesDirectorySynchronization-id}': Operation<
    '/directory/onPremisesSynchronization/{onPremisesDirectorySynchronization-id}',
    'delete'
  >;
  'GET /directory/onPremisesSynchronization': Operation<
    '/directory/onPremisesSynchronization',
    'get'
  >;
  'GET /directory/onPremisesSynchronization/{onPremisesDirectorySynchronization-id}': Operation<
    '/directory/onPremisesSynchronization/{onPremisesDirectorySynchronization-id}',
    'get'
  >;
  'PATCH /directory/onPremisesSynchronization/{onPremisesDirectorySynchronization-id}': Operation<
    '/directory/onPremisesSynchronization/{onPremisesDirectorySynchronization-id}',
    'patch'
  >;
  'POST /directory/onPremisesSynchronization': Operation<
    '/directory/onPremisesSynchronization',
    'post'
  >;
}

/**
 * `DELETE /directory/onPremisesSynchronization/{onPremisesDirectorySynchronization-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /directory/onPremisesSynchronization/{onPremisesDirectorySynchronization-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /directory/onPremisesSynchronization/{onPremisesDirectorySynchronization-id}']['response']
> {
  return {
    method: 'delete',
    path: '/directory/onPremisesSynchronization/{onPremisesDirectorySynchronization-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'onPremisesDirectorySynchronization-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /directory/onPremisesSynchronization`
 *
 * Read the properties and relationships of an onPremisesDirectorySynchronization object.
 */
export function get(
  params?: IEndpoints['GET /directory/onPremisesSynchronization']['parameters']
): EndpointRequest<IEndpoints['GET /directory/onPremisesSynchronization']['response']> {
  return {
    method: 'get',
    path: '/directory/onPremisesSynchronization',
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
 * `GET /directory/onPremisesSynchronization/{onPremisesDirectorySynchronization-id}`
 *
 * Read the properties and relationships of an onPremisesDirectorySynchronization object.
 */
export function get$1(
  params?: IEndpoints['GET /directory/onPremisesSynchronization/{onPremisesDirectorySynchronization-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /directory/onPremisesSynchronization/{onPremisesDirectorySynchronization-id}']['response']
> {
  return {
    method: 'get',
    path: '/directory/onPremisesSynchronization/{onPremisesDirectorySynchronization-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'onPremisesDirectorySynchronization-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /directory/onPremisesSynchronization/{onPremisesDirectorySynchronization-id}`
 *
 * Update the properties of an onPremisesDirectorySynchronization object.
 */
export function update(
  body: IEndpoints['PATCH /directory/onPremisesSynchronization/{onPremisesDirectorySynchronization-id}']['body'],
  params?: IEndpoints['PATCH /directory/onPremisesSynchronization/{onPremisesDirectorySynchronization-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /directory/onPremisesSynchronization/{onPremisesDirectorySynchronization-id}']['response']
> {
  return {
    method: 'patch',
    path: '/directory/onPremisesSynchronization/{onPremisesDirectorySynchronization-id}',
    paramDefs: [{ name: 'onPremisesDirectorySynchronization-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /directory/onPremisesSynchronization`
 *
 */
export function create(
  body: IEndpoints['POST /directory/onPremisesSynchronization']['body'],
  params?: IEndpoints['POST /directory/onPremisesSynchronization']['parameters']
): EndpointRequest<IEndpoints['POST /directory/onPremisesSynchronization']['response']> {
  return {
    method: 'post',
    path: '/directory/onPremisesSynchronization',
    paramDefs: [],
    params,
    body,
  };
}
