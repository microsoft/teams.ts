export * as contactInsights from './contactInsights';
export * as itemInsights from './itemInsights';
export * as microsoftApplicationDataAccess from './microsoftApplicationDataAccess';
export * as peopleInsights from './peopleInsights';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /organization/{organization-id}/settings': Operation<
    '/organization/{organization-id}/settings',
    'delete'
  >;
  'GET /organization/{organization-id}/settings': Operation<
    '/organization/{organization-id}/settings',
    'get'
  >;
  'PATCH /organization/{organization-id}/settings': Operation<
    '/organization/{organization-id}/settings',
    'patch'
  >;
}

/**
 * `DELETE /organization/{organization-id}/settings`
 *
 */
export function del(
  params?: IEndpoints['DELETE /organization/{organization-id}/settings']['parameters']
): EndpointRequest<IEndpoints['DELETE /organization/{organization-id}/settings']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/organization/{organization-id}/settings',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'organization-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /organization/{organization-id}/settings`
 *
 * Retrieve the properties and relationships of organizationSettings object. Nullable.
 */
export function list(
  params?: IEndpoints['GET /organization/{organization-id}/settings']['parameters']
): EndpointRequest<IEndpoints['GET /organization/{organization-id}/settings']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/organization/{organization-id}/settings',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'organization-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /organization/{organization-id}/settings`
 *
 */
export function update(
  body: IEndpoints['PATCH /organization/{organization-id}/settings']['body'],
  params?: IEndpoints['PATCH /organization/{organization-id}/settings']['parameters']
): EndpointRequest<IEndpoints['PATCH /organization/{organization-id}/settings']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/organization/{organization-id}/settings',
    paramDefs: [{ name: 'organization-id', in: 'path' }],
    params,
    body,
  };
}
