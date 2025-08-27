import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /bookingBusinesses/{bookingBusiness-id}/staffMembers/{bookingStaffMember-id}': Operation<
    '/bookingBusinesses/{bookingBusiness-id}/staffMembers/{bookingStaffMember-id}',
    'delete'
  >;
  'GET /bookingBusinesses/{bookingBusiness-id}/staffMembers': Operation<
    '/bookingBusinesses/{bookingBusiness-id}/staffMembers',
    'get'
  >;
  'GET /bookingBusinesses/{bookingBusiness-id}/staffMembers/{bookingStaffMember-id}': Operation<
    '/bookingBusinesses/{bookingBusiness-id}/staffMembers/{bookingStaffMember-id}',
    'get'
  >;
  'PATCH /bookingBusinesses/{bookingBusiness-id}/staffMembers/{bookingStaffMember-id}': Operation<
    '/bookingBusinesses/{bookingBusiness-id}/staffMembers/{bookingStaffMember-id}',
    'patch'
  >;
  'POST /bookingBusinesses/{bookingBusiness-id}/staffMembers': Operation<
    '/bookingBusinesses/{bookingBusiness-id}/staffMembers',
    'post'
  >;
}

/**
 * `DELETE /bookingBusinesses/{bookingBusiness-id}/staffMembers/{bookingStaffMember-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /bookingBusinesses/{bookingBusiness-id}/staffMembers/{bookingStaffMember-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /bookingBusinesses/{bookingBusiness-id}/staffMembers/{bookingStaffMember-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/bookingBusinesses/{bookingBusiness-id}/staffMembers/{bookingStaffMember-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'bookingBusiness-id', in: 'path' },
      { name: 'bookingStaffMember-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /bookingBusinesses/{bookingBusiness-id}/staffMembers`
 *
 * All the staff members that provide services in this business. Read-only. Nullable.
 */
export function list(
  params?: IEndpoints['GET /bookingBusinesses/{bookingBusiness-id}/staffMembers']['parameters']
): EndpointRequest<
  IEndpoints['GET /bookingBusinesses/{bookingBusiness-id}/staffMembers']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/bookingBusinesses/{bookingBusiness-id}/staffMembers',
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
 * `GET /bookingBusinesses/{bookingBusiness-id}/staffMembers/{bookingStaffMember-id}`
 *
 * All the staff members that provide services in this business. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /bookingBusinesses/{bookingBusiness-id}/staffMembers/{bookingStaffMember-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /bookingBusinesses/{bookingBusiness-id}/staffMembers/{bookingStaffMember-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/bookingBusinesses/{bookingBusiness-id}/staffMembers/{bookingStaffMember-id}',
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
 * `PATCH /bookingBusinesses/{bookingBusiness-id}/staffMembers/{bookingStaffMember-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /bookingBusinesses/{bookingBusiness-id}/staffMembers/{bookingStaffMember-id}']['body'],
  params?: IEndpoints['PATCH /bookingBusinesses/{bookingBusiness-id}/staffMembers/{bookingStaffMember-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /bookingBusinesses/{bookingBusiness-id}/staffMembers/{bookingStaffMember-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/bookingBusinesses/{bookingBusiness-id}/staffMembers/{bookingStaffMember-id}',
    paramDefs: [
      { name: 'bookingBusiness-id', in: 'path' },
      { name: 'bookingStaffMember-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /bookingBusinesses/{bookingBusiness-id}/staffMembers`
 *
 */
export function create(
  body: IEndpoints['POST /bookingBusinesses/{bookingBusiness-id}/staffMembers']['body'],
  params?: IEndpoints['POST /bookingBusinesses/{bookingBusiness-id}/staffMembers']['parameters']
): EndpointRequest<
  IEndpoints['POST /bookingBusinesses/{bookingBusiness-id}/staffMembers']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/bookingBusinesses/{bookingBusiness-id}/staffMembers',
    paramDefs: [{ name: 'bookingBusiness-id', in: 'path' }],
    params,
    body,
  };
}
