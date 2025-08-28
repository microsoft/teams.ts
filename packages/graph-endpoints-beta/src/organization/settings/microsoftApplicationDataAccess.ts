import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /organization/{organization-id}/settings/microsoftApplicationDataAccess': Operation<
    '/organization/{organization-id}/settings/microsoftApplicationDataAccess',
    'delete'
  >;
  'GET /organization/{organization-id}/settings/microsoftApplicationDataAccess': Operation<
    '/organization/{organization-id}/settings/microsoftApplicationDataAccess',
    'get'
  >;
  'PATCH /organization/{organization-id}/settings/microsoftApplicationDataAccess': Operation<
    '/organization/{organization-id}/settings/microsoftApplicationDataAccess',
    'patch'
  >;
}

/**
 * `DELETE /organization/{organization-id}/settings/microsoftApplicationDataAccess`
 *
 */
export function del(
  params?: IEndpoints['DELETE /organization/{organization-id}/settings/microsoftApplicationDataAccess']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /organization/{organization-id}/settings/microsoftApplicationDataAccess']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/organization/{organization-id}/settings/microsoftApplicationDataAccess',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'organization-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /organization/{organization-id}/settings/microsoftApplicationDataAccess`
 *
 * Get the settings in a microsoftApplicationDataAccessSettings object that specify access from Microsoft applications to Microsoft 365 user data in an organization.
 */
export function list(
  params?: IEndpoints['GET /organization/{organization-id}/settings/microsoftApplicationDataAccess']['parameters']
): EndpointRequest<
  IEndpoints['GET /organization/{organization-id}/settings/microsoftApplicationDataAccess']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/organization/{organization-id}/settings/microsoftApplicationDataAccess',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'organization-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /organization/{organization-id}/settings/microsoftApplicationDataAccess`
 *
 * Update the settings in a microsoftApplicationDataAccessSettings object that specify access from Microsoft applications to Microsoft 365 user data in an organization.
 */
export function update(
  body: IEndpoints['PATCH /organization/{organization-id}/settings/microsoftApplicationDataAccess']['body'],
  params?: IEndpoints['PATCH /organization/{organization-id}/settings/microsoftApplicationDataAccess']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /organization/{organization-id}/settings/microsoftApplicationDataAccess']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/organization/{organization-id}/settings/microsoftApplicationDataAccess',
    paramDefs: [{ name: 'organization-id', in: 'path' }],
    params,
    body,
  };
}
