export * as assignments from './assignments';
export * as getPolicySets from './getPolicySets';
export * as items from './items';
export * as doupdate from './update';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceAppManagement/policySets/{policySet-id}': Operation<
    '/deviceAppManagement/policySets/{policySet-id}',
    'delete'
  >;
  'GET /deviceAppManagement/policySets': Operation<'/deviceAppManagement/policySets', 'get'>;
  'GET /deviceAppManagement/policySets/{policySet-id}': Operation<
    '/deviceAppManagement/policySets/{policySet-id}',
    'get'
  >;
  'PATCH /deviceAppManagement/policySets/{policySet-id}': Operation<
    '/deviceAppManagement/policySets/{policySet-id}',
    'patch'
  >;
  'POST /deviceAppManagement/policySets': Operation<'/deviceAppManagement/policySets', 'post'>;
}

/**
 * `DELETE /deviceAppManagement/policySets/{policySet-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceAppManagement/policySets/{policySet-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceAppManagement/policySets/{policySet-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceAppManagement/policySets/{policySet-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'policySet-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceAppManagement/policySets`
 *
 * The PolicySet of Policies and Applications
 */
export function list(
  params?: IEndpoints['GET /deviceAppManagement/policySets']['parameters']
): EndpointRequest<IEndpoints['GET /deviceAppManagement/policySets']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceAppManagement/policySets',
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
 * `GET /deviceAppManagement/policySets/{policySet-id}`
 *
 * The PolicySet of Policies and Applications
 */
export function get(
  params?: IEndpoints['GET /deviceAppManagement/policySets/{policySet-id}']['parameters']
): EndpointRequest<IEndpoints['GET /deviceAppManagement/policySets/{policySet-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceAppManagement/policySets/{policySet-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'policySet-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceAppManagement/policySets/{policySet-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceAppManagement/policySets/{policySet-id}']['body'],
  params?: IEndpoints['PATCH /deviceAppManagement/policySets/{policySet-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /deviceAppManagement/policySets/{policySet-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceAppManagement/policySets/{policySet-id}',
    paramDefs: [{ name: 'policySet-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceAppManagement/policySets`
 *
 */
export function create(
  body: IEndpoints['POST /deviceAppManagement/policySets']['body'],
  params?: IEndpoints['POST /deviceAppManagement/policySets']['parameters']
): EndpointRequest<IEndpoints['POST /deviceAppManagement/policySets']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceAppManagement/policySets',
    paramDefs: [],
    params,
    body,
  };
}
