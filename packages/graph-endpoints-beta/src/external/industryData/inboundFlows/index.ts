export * as dataConnector from './dataConnector';
export * as year from './year';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /external/industryData/inboundFlows/{inboundFlow-id}': Operation<
    '/external/industryData/inboundFlows/{inboundFlow-id}',
    'delete'
  >;
  'GET /external/industryData/inboundFlows': Operation<
    '/external/industryData/inboundFlows',
    'get'
  >;
  'GET /external/industryData/inboundFlows/{inboundFlow-id}': Operation<
    '/external/industryData/inboundFlows/{inboundFlow-id}',
    'get'
  >;
  'PATCH /external/industryData/inboundFlows/{inboundFlow-id}': Operation<
    '/external/industryData/inboundFlows/{inboundFlow-id}',
    'patch'
  >;
  'POST /external/industryData/inboundFlows': Operation<
    '/external/industryData/inboundFlows',
    'post'
  >;
}

/**
 * `DELETE /external/industryData/inboundFlows/{inboundFlow-id}`
 *
 * Delete an inboundFlow object.
 */
export function del(
  params?: IEndpoints['DELETE /external/industryData/inboundFlows/{inboundFlow-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /external/industryData/inboundFlows/{inboundFlow-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/external/industryData/inboundFlows/{inboundFlow-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'inboundFlow-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /external/industryData/inboundFlows`
 *
 * Get a list of the inboundFlow objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /external/industryData/inboundFlows']['parameters']
): EndpointRequest<IEndpoints['GET /external/industryData/inboundFlows']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/external/industryData/inboundFlows',
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
 * `GET /external/industryData/inboundFlows/{inboundFlow-id}`
 *
 * Read the properties and relationships of an inboundFlow object.
 */
export function get(
  params?: IEndpoints['GET /external/industryData/inboundFlows/{inboundFlow-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /external/industryData/inboundFlows/{inboundFlow-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/external/industryData/inboundFlows/{inboundFlow-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'inboundFlow-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /external/industryData/inboundFlows/{inboundFlow-id}`
 *
 * Update the properties of an inboundFileFlow object.
 */
export function update(
  body: IEndpoints['PATCH /external/industryData/inboundFlows/{inboundFlow-id}']['body'],
  params?: IEndpoints['PATCH /external/industryData/inboundFlows/{inboundFlow-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /external/industryData/inboundFlows/{inboundFlow-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/external/industryData/inboundFlows/{inboundFlow-id}',
    paramDefs: [{ name: 'inboundFlow-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /external/industryData/inboundFlows`
 *
 * Create a new inboundApiFlow object.
 */
export function create(
  body: IEndpoints['POST /external/industryData/inboundFlows']['body'],
  params?: IEndpoints['POST /external/industryData/inboundFlows']['parameters']
): EndpointRequest<IEndpoints['POST /external/industryData/inboundFlows']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/external/industryData/inboundFlows',
    paramDefs: [],
    params,
    body,
  };
}
