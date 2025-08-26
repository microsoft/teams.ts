import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceAppManagement/policySets/{policySet-id}/assignments/{policySetAssignment-id}': Operation<
    '/deviceAppManagement/policySets/{policySet-id}/assignments/{policySetAssignment-id}',
    'delete'
  >;
  'GET /deviceAppManagement/policySets/{policySet-id}/assignments': Operation<
    '/deviceAppManagement/policySets/{policySet-id}/assignments',
    'get'
  >;
  'GET /deviceAppManagement/policySets/{policySet-id}/assignments/{policySetAssignment-id}': Operation<
    '/deviceAppManagement/policySets/{policySet-id}/assignments/{policySetAssignment-id}',
    'get'
  >;
  'PATCH /deviceAppManagement/policySets/{policySet-id}/assignments/{policySetAssignment-id}': Operation<
    '/deviceAppManagement/policySets/{policySet-id}/assignments/{policySetAssignment-id}',
    'patch'
  >;
  'POST /deviceAppManagement/policySets/{policySet-id}/assignments': Operation<
    '/deviceAppManagement/policySets/{policySet-id}/assignments',
    'post'
  >;
}

/**
 * `DELETE /deviceAppManagement/policySets/{policySet-id}/assignments/{policySetAssignment-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceAppManagement/policySets/{policySet-id}/assignments/{policySetAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceAppManagement/policySets/{policySet-id}/assignments/{policySetAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceAppManagement/policySets/{policySet-id}/assignments/{policySetAssignment-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'policySet-id', in: 'path' },
      { name: 'policySetAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceAppManagement/policySets/{policySet-id}/assignments`
 *
 * Assignments of the PolicySet.
 */
export function list(
  params?: IEndpoints['GET /deviceAppManagement/policySets/{policySet-id}/assignments']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceAppManagement/policySets/{policySet-id}/assignments']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceAppManagement/policySets/{policySet-id}/assignments',
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
 * `GET /deviceAppManagement/policySets/{policySet-id}/assignments/{policySetAssignment-id}`
 *
 * Assignments of the PolicySet.
 */
export function get(
  params?: IEndpoints['GET /deviceAppManagement/policySets/{policySet-id}/assignments/{policySetAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceAppManagement/policySets/{policySet-id}/assignments/{policySetAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceAppManagement/policySets/{policySet-id}/assignments/{policySetAssignment-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'policySet-id', in: 'path' },
      { name: 'policySetAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceAppManagement/policySets/{policySet-id}/assignments/{policySetAssignment-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceAppManagement/policySets/{policySet-id}/assignments/{policySetAssignment-id}']['body'],
  params?: IEndpoints['PATCH /deviceAppManagement/policySets/{policySet-id}/assignments/{policySetAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceAppManagement/policySets/{policySet-id}/assignments/{policySetAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceAppManagement/policySets/{policySet-id}/assignments/{policySetAssignment-id}',
    paramDefs: [
      { name: 'policySet-id', in: 'path' },
      { name: 'policySetAssignment-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /deviceAppManagement/policySets/{policySet-id}/assignments`
 *
 */
export function create(
  body: IEndpoints['POST /deviceAppManagement/policySets/{policySet-id}/assignments']['body'],
  params?: IEndpoints['POST /deviceAppManagement/policySets/{policySet-id}/assignments']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceAppManagement/policySets/{policySet-id}/assignments']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceAppManagement/policySets/{policySet-id}/assignments',
    paramDefs: [{ name: 'policySet-id', in: 'path' }],
    params,
    body,
  };
}
