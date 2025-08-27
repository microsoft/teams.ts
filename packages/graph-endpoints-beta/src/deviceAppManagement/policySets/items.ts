import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceAppManagement/policySets/{policySet-id}/items/{policySetItem-id}': Operation<
    '/deviceAppManagement/policySets/{policySet-id}/items/{policySetItem-id}',
    'delete'
  >;
  'GET /deviceAppManagement/policySets/{policySet-id}/items': Operation<
    '/deviceAppManagement/policySets/{policySet-id}/items',
    'get'
  >;
  'GET /deviceAppManagement/policySets/{policySet-id}/items/{policySetItem-id}': Operation<
    '/deviceAppManagement/policySets/{policySet-id}/items/{policySetItem-id}',
    'get'
  >;
  'PATCH /deviceAppManagement/policySets/{policySet-id}/items/{policySetItem-id}': Operation<
    '/deviceAppManagement/policySets/{policySet-id}/items/{policySetItem-id}',
    'patch'
  >;
  'POST /deviceAppManagement/policySets/{policySet-id}/items': Operation<
    '/deviceAppManagement/policySets/{policySet-id}/items',
    'post'
  >;
}

/**
 * `DELETE /deviceAppManagement/policySets/{policySet-id}/items/{policySetItem-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceAppManagement/policySets/{policySet-id}/items/{policySetItem-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceAppManagement/policySets/{policySet-id}/items/{policySetItem-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceAppManagement/policySets/{policySet-id}/items/{policySetItem-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'policySet-id', in: 'path' },
      { name: 'policySetItem-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceAppManagement/policySets/{policySet-id}/items`
 *
 * Items of the PolicySet with maximum count 100.
 */
export function list(
  params?: IEndpoints['GET /deviceAppManagement/policySets/{policySet-id}/items']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceAppManagement/policySets/{policySet-id}/items']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceAppManagement/policySets/{policySet-id}/items',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'policySet-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceAppManagement/policySets/{policySet-id}/items/{policySetItem-id}`
 *
 * Items of the PolicySet with maximum count 100.
 */
export function get(
  params?: IEndpoints['GET /deviceAppManagement/policySets/{policySet-id}/items/{policySetItem-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceAppManagement/policySets/{policySet-id}/items/{policySetItem-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceAppManagement/policySets/{policySet-id}/items/{policySetItem-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'policySet-id', in: 'path' },
      { name: 'policySetItem-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceAppManagement/policySets/{policySet-id}/items/{policySetItem-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceAppManagement/policySets/{policySet-id}/items/{policySetItem-id}']['body'],
  params?: IEndpoints['PATCH /deviceAppManagement/policySets/{policySet-id}/items/{policySetItem-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceAppManagement/policySets/{policySet-id}/items/{policySetItem-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceAppManagement/policySets/{policySet-id}/items/{policySetItem-id}',
    paramDefs: [
      { name: 'policySet-id', in: 'path' },
      { name: 'policySetItem-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /deviceAppManagement/policySets/{policySet-id}/items`
 *
 */
export function create(
  body: IEndpoints['POST /deviceAppManagement/policySets/{policySet-id}/items']['body'],
  params?: IEndpoints['POST /deviceAppManagement/policySets/{policySet-id}/items']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceAppManagement/policySets/{policySet-id}/items']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceAppManagement/policySets/{policySet-id}/items',
    paramDefs: [{ name: 'policySet-id', in: 'path' }],
    params,
    body,
  };
}
