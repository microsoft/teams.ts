import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /solutions/bookingBusinesses/{bookingBusiness-id}/staffMembers/{bookingStaffMemberBase-id}': Operation<
    '/solutions/bookingBusinesses/{bookingBusiness-id}/staffMembers/{bookingStaffMemberBase-id}',
    'delete'
  >;
  'GET /solutions/bookingBusinesses/{bookingBusiness-id}/staffMembers': Operation<
    '/solutions/bookingBusinesses/{bookingBusiness-id}/staffMembers',
    'get'
  >;
  'GET /solutions/bookingBusinesses/{bookingBusiness-id}/staffMembers/{bookingStaffMemberBase-id}': Operation<
    '/solutions/bookingBusinesses/{bookingBusiness-id}/staffMembers/{bookingStaffMemberBase-id}',
    'get'
  >;
  'PATCH /solutions/bookingBusinesses/{bookingBusiness-id}/staffMembers/{bookingStaffMemberBase-id}': Operation<
    '/solutions/bookingBusinesses/{bookingBusiness-id}/staffMembers/{bookingStaffMemberBase-id}',
    'patch'
  >;
  'POST /solutions/bookingBusinesses/{bookingBusiness-id}/staffMembers': Operation<
    '/solutions/bookingBusinesses/{bookingBusiness-id}/staffMembers',
    'post'
  >;
}

/**
 * `DELETE /solutions/bookingBusinesses/{bookingBusiness-id}/staffMembers/{bookingStaffMemberBase-id}`
 *
 * Delete a bookingStaffMember in the specified bookingBusiness.
 */
export function del(
  params?: IEndpoints['DELETE /solutions/bookingBusinesses/{bookingBusiness-id}/staffMembers/{bookingStaffMemberBase-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /solutions/bookingBusinesses/{bookingBusiness-id}/staffMembers/{bookingStaffMemberBase-id}']['response']
> {
  return {
    method: 'delete',
    path: '/solutions/bookingBusinesses/{bookingBusiness-id}/staffMembers/{bookingStaffMemberBase-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'bookingBusiness-id', in: 'path' },
      { name: 'bookingStaffMemberBase-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /solutions/bookingBusinesses/{bookingBusiness-id}/staffMembers`
 *
 * Get a list of bookingStaffMember objects in the specified bookingBusiness.
 */
export function list(
  params?: IEndpoints['GET /solutions/bookingBusinesses/{bookingBusiness-id}/staffMembers']['parameters']
): EndpointRequest<
  IEndpoints['GET /solutions/bookingBusinesses/{bookingBusiness-id}/staffMembers']['response']
> {
  return {
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
 * `GET /solutions/bookingBusinesses/{bookingBusiness-id}/staffMembers/{bookingStaffMemberBase-id}`
 *
 * Get the properties and relationships of a bookingStaffMember in the specified bookingBusiness.
 */
export function get(
  params?: IEndpoints['GET /solutions/bookingBusinesses/{bookingBusiness-id}/staffMembers/{bookingStaffMemberBase-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /solutions/bookingBusinesses/{bookingBusiness-id}/staffMembers/{bookingStaffMemberBase-id}']['response']
> {
  return {
    method: 'get',
    path: '/solutions/bookingBusinesses/{bookingBusiness-id}/staffMembers/{bookingStaffMemberBase-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'bookingBusiness-id', in: 'path' },
      { name: 'bookingStaffMemberBase-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /solutions/bookingBusinesses/{bookingBusiness-id}/staffMembers/{bookingStaffMemberBase-id}`
 *
 * Update the properties of a bookingStaffMember in the specified bookingBusiness.
 */
export function update(
  body: IEndpoints['PATCH /solutions/bookingBusinesses/{bookingBusiness-id}/staffMembers/{bookingStaffMemberBase-id}']['body'],
  params?: IEndpoints['PATCH /solutions/bookingBusinesses/{bookingBusiness-id}/staffMembers/{bookingStaffMemberBase-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /solutions/bookingBusinesses/{bookingBusiness-id}/staffMembers/{bookingStaffMemberBase-id}']['response']
> {
  return {
    method: 'patch',
    path: '/solutions/bookingBusinesses/{bookingBusiness-id}/staffMembers/{bookingStaffMemberBase-id}',
    paramDefs: [
      { name: 'bookingBusiness-id', in: 'path' },
      { name: 'bookingStaffMemberBase-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /solutions/bookingBusinesses/{bookingBusiness-id}/staffMembers`
 *
 * Create a new bookingStaffMember in the specified bookingBusiness.
 */
export function create(
  body: IEndpoints['POST /solutions/bookingBusinesses/{bookingBusiness-id}/staffMembers']['body'],
  params?: IEndpoints['POST /solutions/bookingBusinesses/{bookingBusiness-id}/staffMembers']['parameters']
): EndpointRequest<
  IEndpoints['POST /solutions/bookingBusinesses/{bookingBusiness-id}/staffMembers']['response']
> {
  return {
    method: 'post',
    path: '/solutions/bookingBusinesses/{bookingBusiness-id}/staffMembers',
    paramDefs: [{ name: 'bookingBusiness-id', in: 'path' }],
    params,
    body,
  };
}
