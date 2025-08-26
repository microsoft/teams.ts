export * as branding from './branding';
export * as certificateBasedAuthConfiguration from './certificateBasedAuthConfiguration';
export * as checkMemberGroups from './checkMemberGroups';
export * as checkMemberObjects from './checkMemberObjects';
export * as extensions from './extensions';
export * as getByIds from './getByIds';
export * as getMemberGroups from './getMemberGroups';
export * as getMemberObjects from './getMemberObjects';
export * as getUserOwnedObjects from './getUserOwnedObjects';
export * as partnerInformation from './partnerInformation';
export * as restore from './restore';
export * as setMobileDeviceManagementAuthority from './setMobileDeviceManagementAuthority';
export * as settings from './settings';
export * as validateProperties from './validateProperties';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /organization/{organization-id}': Operation<'/organization/{organization-id}', 'delete'>;
  'GET /organization': Operation<'/organization', 'get'>;
  'GET /organization/{organization-id}': Operation<'/organization/{organization-id}', 'get'>;
  'PATCH /organization/{organization-id}': Operation<'/organization/{organization-id}', 'patch'>;
  'POST /organization': Operation<'/organization', 'post'>;
}

/**
 * `DELETE /organization/{organization-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /organization/{organization-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /organization/{organization-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/organization/{organization-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'organization-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /organization`
 *
 * Retrieve a list of organization objects. There&#x27;s only one organization object in the collection.
 */
export function get(
  params?: IEndpoints['GET /organization']['parameters']
): EndpointRequest<IEndpoints['GET /organization']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/organization',
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
 * `GET /organization/{organization-id}`
 *
 * Get the properties and relationships of the currently authenticated organization. Since the organization resource supports extensions, you can also use the GET operation to get custom properties and extension data in an organization instance.
 */
export function get$1(
  params?: IEndpoints['GET /organization/{organization-id}']['parameters']
): EndpointRequest<IEndpoints['GET /organization/{organization-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/organization/{organization-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'organization-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /organization/{organization-id}`
 *
 * Update the properties of the currently authenticated organization. In this case, organization is defined as a collection of exactly one record, and so its ID must be specified in the request.  The ID is also known as the tenantId of the organization.
 */
export function update(
  body: IEndpoints['PATCH /organization/{organization-id}']['body'],
  params?: IEndpoints['PATCH /organization/{organization-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /organization/{organization-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/organization/{organization-id}',
    paramDefs: [{ name: 'organization-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /organization`
 *
 */
export function create(
  body: IEndpoints['POST /organization']['body'],
  params?: IEndpoints['POST /organization']['parameters']
): EndpointRequest<IEndpoints['POST /organization']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/organization',
    paramDefs: [],
    params,
    body,
  };
}
