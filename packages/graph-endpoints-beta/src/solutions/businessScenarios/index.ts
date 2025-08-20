export * as planner from './planner';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /solutions/businessScenarios/{businessScenario-id}': Operation<
    '/solutions/businessScenarios/{businessScenario-id}',
    'delete'
  >;
  'GET /solutions/businessScenarios': Operation<'/solutions/businessScenarios', 'get'>;
  'GET /solutions/businessScenarios/{businessScenario-id}': Operation<
    '/solutions/businessScenarios/{businessScenario-id}',
    'get'
  >;
  'PATCH /solutions/businessScenarios/{businessScenario-id}': Operation<
    '/solutions/businessScenarios/{businessScenario-id}',
    'patch'
  >;
  'POST /solutions/businessScenarios': Operation<'/solutions/businessScenarios', 'post'>;
}

/**
 * `DELETE /solutions/businessScenarios/{businessScenario-id}`
 *
 * Delete a businessScenario object. The deletion of a scenario causes all data associated with the scenario to be deleted.
 */
export function del(
  params?: IEndpoints['DELETE /solutions/businessScenarios/{businessScenario-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /solutions/businessScenarios/{businessScenario-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/solutions/businessScenarios/{businessScenario-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'businessScenario-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /solutions/businessScenarios`
 *
 * Get a list of all businessScenario objects in an organization.
 */
export function list(
  params?: IEndpoints['GET /solutions/businessScenarios']['parameters']
): EndpointRequest<IEndpoints['GET /solutions/businessScenarios']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/solutions/businessScenarios',
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
 * `GET /solutions/businessScenarios/{businessScenario-id}`
 *
 * Read the properties and relationships of a businessScenario object.
 */
export function get(
  params?: IEndpoints['GET /solutions/businessScenarios/{businessScenario-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /solutions/businessScenarios/{businessScenario-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/solutions/businessScenarios/{businessScenario-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'businessScenario-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /solutions/businessScenarios/{businessScenario-id}`
 *
 * Update the properties of a businessScenario object.
 */
export function update(
  body: IEndpoints['PATCH /solutions/businessScenarios/{businessScenario-id}']['body'],
  params?: IEndpoints['PATCH /solutions/businessScenarios/{businessScenario-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /solutions/businessScenarios/{businessScenario-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/solutions/businessScenarios/{businessScenario-id}',
    paramDefs: [{ name: 'businessScenario-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /solutions/businessScenarios`
 *
 * Create a new businessScenario object.
 */
export function create(
  body: IEndpoints['POST /solutions/businessScenarios']['body'],
  params?: IEndpoints['POST /solutions/businessScenarios']['parameters']
): EndpointRequest<IEndpoints['POST /solutions/businessScenarios']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/solutions/businessScenarios',
    paramDefs: [],
    params,
    body,
  };
}
