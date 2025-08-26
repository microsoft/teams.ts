export * as provisioningFlows from './provisioningFlows';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /external/industryData/outboundProvisioningFlowSets/{outboundProvisioningFlowSet-id}': Operation<
    '/external/industryData/outboundProvisioningFlowSets/{outboundProvisioningFlowSet-id}',
    'delete'
  >;
  'GET /external/industryData/outboundProvisioningFlowSets': Operation<
    '/external/industryData/outboundProvisioningFlowSets',
    'get'
  >;
  'GET /external/industryData/outboundProvisioningFlowSets/{outboundProvisioningFlowSet-id}': Operation<
    '/external/industryData/outboundProvisioningFlowSets/{outboundProvisioningFlowSet-id}',
    'get'
  >;
  'PATCH /external/industryData/outboundProvisioningFlowSets/{outboundProvisioningFlowSet-id}': Operation<
    '/external/industryData/outboundProvisioningFlowSets/{outboundProvisioningFlowSet-id}',
    'patch'
  >;
  'POST /external/industryData/outboundProvisioningFlowSets': Operation<
    '/external/industryData/outboundProvisioningFlowSets',
    'post'
  >;
}

/**
 * `DELETE /external/industryData/outboundProvisioningFlowSets/{outboundProvisioningFlowSet-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /external/industryData/outboundProvisioningFlowSets/{outboundProvisioningFlowSet-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /external/industryData/outboundProvisioningFlowSets/{outboundProvisioningFlowSet-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/external/industryData/outboundProvisioningFlowSets/{outboundProvisioningFlowSet-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'outboundProvisioningFlowSet-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /external/industryData/outboundProvisioningFlowSets`
 *
 * Get a list of the outboundProvisioningFlowSet objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /external/industryData/outboundProvisioningFlowSets']['parameters']
): EndpointRequest<
  IEndpoints['GET /external/industryData/outboundProvisioningFlowSets']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/external/industryData/outboundProvisioningFlowSets',
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
 * `GET /external/industryData/outboundProvisioningFlowSets/{outboundProvisioningFlowSet-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /external/industryData/outboundProvisioningFlowSets/{outboundProvisioningFlowSet-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /external/industryData/outboundProvisioningFlowSets/{outboundProvisioningFlowSet-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/external/industryData/outboundProvisioningFlowSets/{outboundProvisioningFlowSet-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'outboundProvisioningFlowSet-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /external/industryData/outboundProvisioningFlowSets/{outboundProvisioningFlowSet-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /external/industryData/outboundProvisioningFlowSets/{outboundProvisioningFlowSet-id}']['body'],
  params?: IEndpoints['PATCH /external/industryData/outboundProvisioningFlowSets/{outboundProvisioningFlowSet-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /external/industryData/outboundProvisioningFlowSets/{outboundProvisioningFlowSet-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/external/industryData/outboundProvisioningFlowSets/{outboundProvisioningFlowSet-id}',
    paramDefs: [{ name: 'outboundProvisioningFlowSet-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /external/industryData/outboundProvisioningFlowSets`
 *
 */
export function create(
  body: IEndpoints['POST /external/industryData/outboundProvisioningFlowSets']['body'],
  params?: IEndpoints['POST /external/industryData/outboundProvisioningFlowSets']['parameters']
): EndpointRequest<
  IEndpoints['POST /external/industryData/outboundProvisioningFlowSets']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/external/industryData/outboundProvisioningFlowSets',
    paramDefs: [],
    params,
    body,
  };
}
