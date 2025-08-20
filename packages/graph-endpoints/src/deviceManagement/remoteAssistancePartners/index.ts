export * as beginOnboarding from './beginOnboarding';
export * as disconnect from './disconnect';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/remoteAssistancePartners/{remoteAssistancePartner-id}': Operation<
    '/deviceManagement/remoteAssistancePartners/{remoteAssistancePartner-id}',
    'delete'
  >;
  'GET /deviceManagement/remoteAssistancePartners': Operation<
    '/deviceManagement/remoteAssistancePartners',
    'get'
  >;
  'GET /deviceManagement/remoteAssistancePartners/{remoteAssistancePartner-id}': Operation<
    '/deviceManagement/remoteAssistancePartners/{remoteAssistancePartner-id}',
    'get'
  >;
  'PATCH /deviceManagement/remoteAssistancePartners/{remoteAssistancePartner-id}': Operation<
    '/deviceManagement/remoteAssistancePartners/{remoteAssistancePartner-id}',
    'patch'
  >;
  'POST /deviceManagement/remoteAssistancePartners': Operation<
    '/deviceManagement/remoteAssistancePartners',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/remoteAssistancePartners/{remoteAssistancePartner-id}`
 *
 * Deletes a remoteAssistancePartner.
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/remoteAssistancePartners/{remoteAssistancePartner-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/remoteAssistancePartners/{remoteAssistancePartner-id}']['response']
> {
  return {
    method: 'delete',
    path: '/deviceManagement/remoteAssistancePartners/{remoteAssistancePartner-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'remoteAssistancePartner-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/remoteAssistancePartners`
 *
 * List properties and relationships of the remoteAssistancePartner objects.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/remoteAssistancePartners']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/remoteAssistancePartners']['response']> {
  return {
    method: 'get',
    path: '/deviceManagement/remoteAssistancePartners',
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
 * `GET /deviceManagement/remoteAssistancePartners/{remoteAssistancePartner-id}`
 *
 * Read properties and relationships of the remoteAssistancePartner object.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/remoteAssistancePartners/{remoteAssistancePartner-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/remoteAssistancePartners/{remoteAssistancePartner-id}']['response']
> {
  return {
    method: 'get',
    path: '/deviceManagement/remoteAssistancePartners/{remoteAssistancePartner-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'remoteAssistancePartner-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/remoteAssistancePartners/{remoteAssistancePartner-id}`
 *
 * Update the properties of a remoteAssistancePartner object.
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/remoteAssistancePartners/{remoteAssistancePartner-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/remoteAssistancePartners/{remoteAssistancePartner-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/remoteAssistancePartners/{remoteAssistancePartner-id}']['response']
> {
  return {
    method: 'patch',
    path: '/deviceManagement/remoteAssistancePartners/{remoteAssistancePartner-id}',
    paramDefs: [{ name: 'remoteAssistancePartner-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/remoteAssistancePartners`
 *
 * Create a new remoteAssistancePartner object.
 */
export function create(
  body: IEndpoints['POST /deviceManagement/remoteAssistancePartners']['body'],
  params?: IEndpoints['POST /deviceManagement/remoteAssistancePartners']['parameters']
): EndpointRequest<IEndpoints['POST /deviceManagement/remoteAssistancePartners']['response']> {
  return {
    method: 'post',
    path: '/deviceManagement/remoteAssistancePartners',
    paramDefs: [],
    params,
    body,
  };
}
