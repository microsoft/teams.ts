import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /organization/{organization-id}/settings/contactInsights': Operation<
    '/organization/{organization-id}/settings/contactInsights',
    'delete'
  >;
  'GET /organization/{organization-id}/settings/contactInsights': Operation<
    '/organization/{organization-id}/settings/contactInsights',
    'get'
  >;
  'PATCH /organization/{organization-id}/settings/contactInsights': Operation<
    '/organization/{organization-id}/settings/contactInsights',
    'patch'
  >;
}

/**
 * `DELETE /organization/{organization-id}/settings/contactInsights`
 *
 */
export function del(
  params?: IEndpoints['DELETE /organization/{organization-id}/settings/contactInsights']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /organization/{organization-id}/settings/contactInsights']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/organization/{organization-id}/settings/contactInsights',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'organization-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /organization/{organization-id}/settings/contactInsights`
 *
 * Get the properties of an insightsSettings object for displaying or returning contact insights in an organization.
 */
export function list(
  params?: IEndpoints['GET /organization/{organization-id}/settings/contactInsights']['parameters']
): EndpointRequest<
  IEndpoints['GET /organization/{organization-id}/settings/contactInsights']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/organization/{organization-id}/settings/contactInsights',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'organization-id', in: 'path' },
    ],
    params,
  };
}

/**
  * `PATCH /organization/{organization-id}/settings/contactInsights`
  *
  * Update privacy settings to display or return the specified type of insights in an organization. The type of settings can be contact insights, item insights, or people insights. To learn more about customizing insights privacy for your organization, see:
-  Customize item insights privacy 
-  Customize people insights privacy
  */
export function update(
  body: IEndpoints['PATCH /organization/{organization-id}/settings/contactInsights']['body'],
  params?: IEndpoints['PATCH /organization/{organization-id}/settings/contactInsights']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /organization/{organization-id}/settings/contactInsights']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/organization/{organization-id}/settings/contactInsights',
    paramDefs: [{ name: 'organization-id', in: 'path' }],
    params,
    body,
  };
}
