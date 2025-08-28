export * as assign from './assign';
export * as assignments from './assignments';
export * as deviceStates from './deviceStates';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}': Operation<
    '/deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}',
    'delete'
  >;
  'GET /deviceManagement/embeddedSIMActivationCodePools': Operation<
    '/deviceManagement/embeddedSIMActivationCodePools',
    'get'
  >;
  'GET /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}': Operation<
    '/deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}',
    'get'
  >;
  'PATCH /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}': Operation<
    '/deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}',
    'patch'
  >;
  'POST /deviceManagement/embeddedSIMActivationCodePools': Operation<
    '/deviceManagement/embeddedSIMActivationCodePools',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'embeddedSIMActivationCodePool-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/embeddedSIMActivationCodePools`
 *
 * The embedded SIM activation code pools created by this account.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/embeddedSIMActivationCodePools']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/embeddedSIMActivationCodePools']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/embeddedSIMActivationCodePools',
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
 * `GET /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}`
 *
 * The embedded SIM activation code pools created by this account.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'embeddedSIMActivationCodePool-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}',
    paramDefs: [{ name: 'embeddedSIMActivationCodePool-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/embeddedSIMActivationCodePools`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/embeddedSIMActivationCodePools']['body'],
  params?: IEndpoints['POST /deviceManagement/embeddedSIMActivationCodePools']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/embeddedSIMActivationCodePools']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/embeddedSIMActivationCodePools',
    paramDefs: [],
    params,
    body,
  };
}
