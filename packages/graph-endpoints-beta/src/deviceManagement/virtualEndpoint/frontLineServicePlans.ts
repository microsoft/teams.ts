import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/virtualEndpoint/frontLineServicePlans/{cloudPcFrontLineServicePlan-id}': Operation<
    '/deviceManagement/virtualEndpoint/frontLineServicePlans/{cloudPcFrontLineServicePlan-id}',
    'delete'
  >;
  'GET /deviceManagement/virtualEndpoint/frontLineServicePlans': Operation<
    '/deviceManagement/virtualEndpoint/frontLineServicePlans',
    'get'
  >;
  'GET /deviceManagement/virtualEndpoint/frontLineServicePlans/{cloudPcFrontLineServicePlan-id}': Operation<
    '/deviceManagement/virtualEndpoint/frontLineServicePlans/{cloudPcFrontLineServicePlan-id}',
    'get'
  >;
  'PATCH /deviceManagement/virtualEndpoint/frontLineServicePlans/{cloudPcFrontLineServicePlan-id}': Operation<
    '/deviceManagement/virtualEndpoint/frontLineServicePlans/{cloudPcFrontLineServicePlan-id}',
    'patch'
  >;
  'POST /deviceManagement/virtualEndpoint/frontLineServicePlans': Operation<
    '/deviceManagement/virtualEndpoint/frontLineServicePlans',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/virtualEndpoint/frontLineServicePlans/{cloudPcFrontLineServicePlan-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/virtualEndpoint/frontLineServicePlans/{cloudPcFrontLineServicePlan-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/virtualEndpoint/frontLineServicePlans/{cloudPcFrontLineServicePlan-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/virtualEndpoint/frontLineServicePlans/{cloudPcFrontLineServicePlan-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'cloudPcFrontLineServicePlan-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/virtualEndpoint/frontLineServicePlans`
 *
 * Get a list of the cloudPcFrontLineServicePlan objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/virtualEndpoint/frontLineServicePlans']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/virtualEndpoint/frontLineServicePlans']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/virtualEndpoint/frontLineServicePlans',
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
 * `GET /deviceManagement/virtualEndpoint/frontLineServicePlans/{cloudPcFrontLineServicePlan-id}`
 *
 * Get the properties and relationships of a cloudPcFrontLineServicePlan object.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/virtualEndpoint/frontLineServicePlans/{cloudPcFrontLineServicePlan-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/virtualEndpoint/frontLineServicePlans/{cloudPcFrontLineServicePlan-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/virtualEndpoint/frontLineServicePlans/{cloudPcFrontLineServicePlan-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'cloudPcFrontLineServicePlan-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/virtualEndpoint/frontLineServicePlans/{cloudPcFrontLineServicePlan-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/virtualEndpoint/frontLineServicePlans/{cloudPcFrontLineServicePlan-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/virtualEndpoint/frontLineServicePlans/{cloudPcFrontLineServicePlan-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/virtualEndpoint/frontLineServicePlans/{cloudPcFrontLineServicePlan-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/virtualEndpoint/frontLineServicePlans/{cloudPcFrontLineServicePlan-id}',
    paramDefs: [{ name: 'cloudPcFrontLineServicePlan-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/virtualEndpoint/frontLineServicePlans`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/virtualEndpoint/frontLineServicePlans']['body'],
  params?: IEndpoints['POST /deviceManagement/virtualEndpoint/frontLineServicePlans']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/virtualEndpoint/frontLineServicePlans']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/virtualEndpoint/frontLineServicePlans',
    paramDefs: [],
    params,
    body,
  };
}
