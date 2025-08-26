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
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/remoteAssistancePartners/{remoteAssistancePartner-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/remoteAssistancePartners/{remoteAssistancePartner-id}']['response']
> {
  return {
    ver: 'beta',
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
 * The remote assist partners.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/remoteAssistancePartners']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/remoteAssistancePartners']['response']> {
  return {
    ver: 'beta',
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
 * The remote assist partners.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/remoteAssistancePartners/{remoteAssistancePartner-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/remoteAssistancePartners/{remoteAssistancePartner-id}']['response']
> {
  return {
    ver: 'beta',
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
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/remoteAssistancePartners/{remoteAssistancePartner-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/remoteAssistancePartners/{remoteAssistancePartner-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/remoteAssistancePartners/{remoteAssistancePartner-id}']['response']
> {
  return {
    ver: 'beta',
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
 */
export function create(
  body: IEndpoints['POST /deviceManagement/remoteAssistancePartners']['body'],
  params?: IEndpoints['POST /deviceManagement/remoteAssistancePartners']['parameters']
): EndpointRequest<IEndpoints['POST /deviceManagement/remoteAssistancePartners']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/remoteAssistancePartners',
    paramDefs: [],
    params,
    body,
  };
}
