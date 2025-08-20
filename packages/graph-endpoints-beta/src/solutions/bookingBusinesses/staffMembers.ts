import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /solutions/bookingBusinesses/{bookingBusiness-id}/staffMembers/{bookingStaffMember-id}': Operation<
    '/solutions/bookingBusinesses/{bookingBusiness-id}/staffMembers/{bookingStaffMember-id}',
    'delete'
  >;
  'GET /solutions/bookingBusinesses/{bookingBusiness-id}/staffMembers': Operation<
    '/solutions/bookingBusinesses/{bookingBusiness-id}/staffMembers',
    'get'
  >;
  'GET /solutions/bookingBusinesses/{bookingBusiness-id}/staffMembers/{bookingStaffMember-id}': Operation<
    '/solutions/bookingBusinesses/{bookingBusiness-id}/staffMembers/{bookingStaffMember-id}',
    'get'
  >;
  'PATCH /solutions/bookingBusinesses/{bookingBusiness-id}/staffMembers/{bookingStaffMember-id}': Operation<
    '/solutions/bookingBusinesses/{bookingBusiness-id}/staffMembers/{bookingStaffMember-id}',
    'patch'
  >;
  'POST /solutions/bookingBusinesses/{bookingBusiness-id}/staffMembers': Operation<
    '/solutions/bookingBusinesses/{bookingBusiness-id}/staffMembers',
    'post'
  >;
}

/**
 * `DELETE /solutions/bookingBusinesses/{bookingBusiness-id}/staffMembers/{bookingStaffMember-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /solutions/bookingBusinesses/{bookingBusiness-id}/staffMembers/{bookingStaffMember-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /solutions/bookingBusinesses/{bookingBusiness-id}/staffMembers/{bookingStaffMember-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/solutions/bookingBusinesses/{bookingBusiness-id}/staffMembers/{bookingStaffMember-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'bookingBusiness-id', in: 'path' },
      { name: 'bookingStaffMember-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /solutions/bookingBusinesses/{bookingBusiness-id}/staffMembers`
 *
 * All the staff members that provide services in this business. Read-only. Nullable.
 */
export function list(
  params?: IEndpoints['GET /solutions/bookingBusinesses/{bookingBusiness-id}/staffMembers']['parameters']
): EndpointRequest<
  IEndpoints['GET /solutions/bookingBusinesses/{bookingBusiness-id}/staffMembers']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/solutions/bookingBusinesses/{bookingBusiness-id}/staffMembers',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'bookingBusiness-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /solutions/bookingBusinesses/{bookingBusiness-id}/staffMembers/{bookingStaffMember-id}`
 *
 * All the staff members that provide services in this business. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /solutions/bookingBusinesses/{bookingBusiness-id}/staffMembers/{bookingStaffMember-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /solutions/bookingBusinesses/{bookingBusiness-id}/staffMembers/{bookingStaffMember-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/solutions/bookingBusinesses/{bookingBusiness-id}/staffMembers/{bookingStaffMember-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'bookingBusiness-id', in: 'path' },
      { name: 'bookingStaffMember-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /solutions/bookingBusinesses/{bookingBusiness-id}/staffMembers/{bookingStaffMember-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /solutions/bookingBusinesses/{bookingBusiness-id}/staffMembers/{bookingStaffMember-id}']['body'],
  params?: IEndpoints['PATCH /solutions/bookingBusinesses/{bookingBusiness-id}/staffMembers/{bookingStaffMember-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /solutions/bookingBusinesses/{bookingBusiness-id}/staffMembers/{bookingStaffMember-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/solutions/bookingBusinesses/{bookingBusiness-id}/staffMembers/{bookingStaffMember-id}',
    paramDefs: [
      { name: 'bookingBusiness-id', in: 'path' },
      { name: 'bookingStaffMember-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /solutions/bookingBusinesses/{bookingBusiness-id}/staffMembers`
 *
 */
export function create(
  body: IEndpoints['POST /solutions/bookingBusinesses/{bookingBusiness-id}/staffMembers']['body'],
  params?: IEndpoints['POST /solutions/bookingBusinesses/{bookingBusiness-id}/staffMembers']['parameters']
): EndpointRequest<
  IEndpoints['POST /solutions/bookingBusinesses/{bookingBusiness-id}/staffMembers']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/solutions/bookingBusinesses/{bookingBusiness-id}/staffMembers',
    paramDefs: [{ name: 'bookingBusiness-id', in: 'path' }],
    params,
    body,
  };
}
