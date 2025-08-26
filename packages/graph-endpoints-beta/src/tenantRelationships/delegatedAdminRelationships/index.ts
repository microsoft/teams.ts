export * as accessAssignments from './accessAssignments';
export * as operations from './operations';
export * as requests from './requests';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}': Operation<
    '/tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}',
    'delete'
  >;
  'GET /tenantRelationships/delegatedAdminRelationships': Operation<
    '/tenantRelationships/delegatedAdminRelationships',
    'get'
  >;
  'GET /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}': Operation<
    '/tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}',
    'get'
  >;
  'PATCH /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}': Operation<
    '/tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}',
    'patch'
  >;
  'POST /tenantRelationships/delegatedAdminRelationships': Operation<
    '/tenantRelationships/delegatedAdminRelationships',
    'post'
  >;
}

/**
 * `DELETE /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}`
 *
 * Delete a delegatedAdminRelationship object. A relationship can only be deleted if it&#x27;s in the &#x27;created&#x27; status.
 */
export function del(
  params?: IEndpoints['DELETE /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'delegatedAdminRelationship-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /tenantRelationships/delegatedAdminRelationships`
 *
 * Get a list of the delegatedAdminRelationship objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /tenantRelationships/delegatedAdminRelationships']['parameters']
): EndpointRequest<IEndpoints['GET /tenantRelationships/delegatedAdminRelationships']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/tenantRelationships/delegatedAdminRelationships',
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
 * `GET /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}`
 *
 * Read the properties of a delegatedAdminRelationship object.
 */
export function get(
  params?: IEndpoints['GET /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'delegatedAdminRelationship-id', in: 'path' },
    ],
    params,
  };
}

/**
  * `PATCH /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}`
  *
  * Update the properties of a delegatedAdminRelationship object.  The following restrictions apply:
- You can update this relationship when its status property is created.
- You can update the autoExtendDuration property when status is either created or active.
- You can only remove the Microsoft Entra Global Administrator role when the status property is active, which indicates a long-running operation.
  */
export function update(
  body: IEndpoints['PATCH /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}']['body'],
  params?: IEndpoints['PATCH /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}',
    paramDefs: [{ name: 'delegatedAdminRelationship-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /tenantRelationships/delegatedAdminRelationships`
 *
 * Create a new delegatedAdminRelationship object.
 */
export function create(
  body: IEndpoints['POST /tenantRelationships/delegatedAdminRelationships']['body'],
  params?: IEndpoints['POST /tenantRelationships/delegatedAdminRelationships']['parameters']
): EndpointRequest<
  IEndpoints['POST /tenantRelationships/delegatedAdminRelationships']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/tenantRelationships/delegatedAdminRelationships',
    paramDefs: [],
    params,
    body,
  };
}
