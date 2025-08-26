import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /external/industryData/outboundProvisioningFlowSets/{outboundProvisioningFlowSet-id}/provisioningFlows/{provisioningFlow-id}': Operation<
    '/external/industryData/outboundProvisioningFlowSets/{outboundProvisioningFlowSet-id}/provisioningFlows/{provisioningFlow-id}',
    'delete'
  >;
  'GET /external/industryData/outboundProvisioningFlowSets/{outboundProvisioningFlowSet-id}/provisioningFlows': Operation<
    '/external/industryData/outboundProvisioningFlowSets/{outboundProvisioningFlowSet-id}/provisioningFlows',
    'get'
  >;
  'GET /external/industryData/outboundProvisioningFlowSets/{outboundProvisioningFlowSet-id}/provisioningFlows/{provisioningFlow-id}': Operation<
    '/external/industryData/outboundProvisioningFlowSets/{outboundProvisioningFlowSet-id}/provisioningFlows/{provisioningFlow-id}',
    'get'
  >;
  'PATCH /external/industryData/outboundProvisioningFlowSets/{outboundProvisioningFlowSet-id}/provisioningFlows/{provisioningFlow-id}': Operation<
    '/external/industryData/outboundProvisioningFlowSets/{outboundProvisioningFlowSet-id}/provisioningFlows/{provisioningFlow-id}',
    'patch'
  >;
  'POST /external/industryData/outboundProvisioningFlowSets/{outboundProvisioningFlowSet-id}/provisioningFlows': Operation<
    '/external/industryData/outboundProvisioningFlowSets/{outboundProvisioningFlowSet-id}/provisioningFlows',
    'post'
  >;
}

/**
 * `DELETE /external/industryData/outboundProvisioningFlowSets/{outboundProvisioningFlowSet-id}/provisioningFlows/{provisioningFlow-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /external/industryData/outboundProvisioningFlowSets/{outboundProvisioningFlowSet-id}/provisioningFlows/{provisioningFlow-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /external/industryData/outboundProvisioningFlowSets/{outboundProvisioningFlowSet-id}/provisioningFlows/{provisioningFlow-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/external/industryData/outboundProvisioningFlowSets/{outboundProvisioningFlowSet-id}/provisioningFlows/{provisioningFlow-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'outboundProvisioningFlowSet-id', in: 'path' },
      { name: 'provisioningFlow-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /external/industryData/outboundProvisioningFlowSets/{outboundProvisioningFlowSet-id}/provisioningFlows`
 *
 * Get a list of the provisioningFlow objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /external/industryData/outboundProvisioningFlowSets/{outboundProvisioningFlowSet-id}/provisioningFlows']['parameters']
): EndpointRequest<
  IEndpoints['GET /external/industryData/outboundProvisioningFlowSets/{outboundProvisioningFlowSet-id}/provisioningFlows']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/external/industryData/outboundProvisioningFlowSets/{outboundProvisioningFlowSet-id}/provisioningFlows',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'outboundProvisioningFlowSet-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /external/industryData/outboundProvisioningFlowSets/{outboundProvisioningFlowSet-id}/provisioningFlows/{provisioningFlow-id}`
 *
 * A flow that provisions relevant records of a given entity type in the Microsoft 365 tenant.
 */
export function get(
  params?: IEndpoints['GET /external/industryData/outboundProvisioningFlowSets/{outboundProvisioningFlowSet-id}/provisioningFlows/{provisioningFlow-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /external/industryData/outboundProvisioningFlowSets/{outboundProvisioningFlowSet-id}/provisioningFlows/{provisioningFlow-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/external/industryData/outboundProvisioningFlowSets/{outboundProvisioningFlowSet-id}/provisioningFlows/{provisioningFlow-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'outboundProvisioningFlowSet-id', in: 'path' },
      { name: 'provisioningFlow-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /external/industryData/outboundProvisioningFlowSets/{outboundProvisioningFlowSet-id}/provisioningFlows/{provisioningFlow-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /external/industryData/outboundProvisioningFlowSets/{outboundProvisioningFlowSet-id}/provisioningFlows/{provisioningFlow-id}']['body'],
  params?: IEndpoints['PATCH /external/industryData/outboundProvisioningFlowSets/{outboundProvisioningFlowSet-id}/provisioningFlows/{provisioningFlow-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /external/industryData/outboundProvisioningFlowSets/{outboundProvisioningFlowSet-id}/provisioningFlows/{provisioningFlow-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/external/industryData/outboundProvisioningFlowSets/{outboundProvisioningFlowSet-id}/provisioningFlows/{provisioningFlow-id}',
    paramDefs: [
      { name: 'outboundProvisioningFlowSet-id', in: 'path' },
      { name: 'provisioningFlow-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /external/industryData/outboundProvisioningFlowSets/{outboundProvisioningFlowSet-id}/provisioningFlows`
 *
 */
export function create(
  body: IEndpoints['POST /external/industryData/outboundProvisioningFlowSets/{outboundProvisioningFlowSet-id}/provisioningFlows']['body'],
  params?: IEndpoints['POST /external/industryData/outboundProvisioningFlowSets/{outboundProvisioningFlowSet-id}/provisioningFlows']['parameters']
): EndpointRequest<
  IEndpoints['POST /external/industryData/outboundProvisioningFlowSets/{outboundProvisioningFlowSet-id}/provisioningFlows']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/external/industryData/outboundProvisioningFlowSets/{outboundProvisioningFlowSet-id}/provisioningFlows',
    paramDefs: [{ name: 'outboundProvisioningFlowSet-id', in: 'path' }],
    params,
    body,
  };
}
