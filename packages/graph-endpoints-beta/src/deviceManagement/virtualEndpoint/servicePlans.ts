import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/virtualEndpoint/servicePlans/{cloudPcServicePlan-id}': Operation<
    '/deviceManagement/virtualEndpoint/servicePlans/{cloudPcServicePlan-id}',
    'delete'
  >;
  'GET /deviceManagement/virtualEndpoint/servicePlans': Operation<
    '/deviceManagement/virtualEndpoint/servicePlans',
    'get'
  >;
  'GET /deviceManagement/virtualEndpoint/servicePlans/{cloudPcServicePlan-id}': Operation<
    '/deviceManagement/virtualEndpoint/servicePlans/{cloudPcServicePlan-id}',
    'get'
  >;
  'PATCH /deviceManagement/virtualEndpoint/servicePlans/{cloudPcServicePlan-id}': Operation<
    '/deviceManagement/virtualEndpoint/servicePlans/{cloudPcServicePlan-id}',
    'patch'
  >;
  'POST /deviceManagement/virtualEndpoint/servicePlans': Operation<
    '/deviceManagement/virtualEndpoint/servicePlans',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/virtualEndpoint/servicePlans/{cloudPcServicePlan-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/virtualEndpoint/servicePlans/{cloudPcServicePlan-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/virtualEndpoint/servicePlans/{cloudPcServicePlan-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/virtualEndpoint/servicePlans/{cloudPcServicePlan-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'cloudPcServicePlan-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/virtualEndpoint/servicePlans`
 *
 * List the currently available service plans that an organization can purchase for their Cloud PCs. For examples of currently available service plans, see Windows 365 compare plans and pricing. Currently, Microsoft Graph API is available for Windows 365 Enterprise.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/virtualEndpoint/servicePlans']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/virtualEndpoint/servicePlans']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/virtualEndpoint/servicePlans',
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
 * `GET /deviceManagement/virtualEndpoint/servicePlans/{cloudPcServicePlan-id}`
 *
 * Cloud PC service plans.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/virtualEndpoint/servicePlans/{cloudPcServicePlan-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/virtualEndpoint/servicePlans/{cloudPcServicePlan-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/virtualEndpoint/servicePlans/{cloudPcServicePlan-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'cloudPcServicePlan-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/virtualEndpoint/servicePlans/{cloudPcServicePlan-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/virtualEndpoint/servicePlans/{cloudPcServicePlan-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/virtualEndpoint/servicePlans/{cloudPcServicePlan-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/virtualEndpoint/servicePlans/{cloudPcServicePlan-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/virtualEndpoint/servicePlans/{cloudPcServicePlan-id}',
    paramDefs: [{ name: 'cloudPcServicePlan-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/virtualEndpoint/servicePlans`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/virtualEndpoint/servicePlans']['body'],
  params?: IEndpoints['POST /deviceManagement/virtualEndpoint/servicePlans']['parameters']
): EndpointRequest<IEndpoints['POST /deviceManagement/virtualEndpoint/servicePlans']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/virtualEndpoint/servicePlans',
    paramDefs: [],
    params,
    body,
  };
}
