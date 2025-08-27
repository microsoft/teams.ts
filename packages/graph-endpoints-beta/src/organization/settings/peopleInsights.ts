import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /organization/{organization-id}/settings/peopleInsights': Operation<
    '/organization/{organization-id}/settings/peopleInsights',
    'delete'
  >;
  'GET /organization/{organization-id}/settings/peopleInsights': Operation<
    '/organization/{organization-id}/settings/peopleInsights',
    'get'
  >;
  'PATCH /organization/{organization-id}/settings/peopleInsights': Operation<
    '/organization/{organization-id}/settings/peopleInsights',
    'patch'
  >;
}

/**
 * `DELETE /organization/{organization-id}/settings/peopleInsights`
 *
 */
export function del(
  params?: IEndpoints['DELETE /organization/{organization-id}/settings/peopleInsights']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /organization/{organization-id}/settings/peopleInsights']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/organization/{organization-id}/settings/peopleInsights',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'organization-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /organization/{organization-id}/settings/peopleInsights`
 *
 * Get the properties of an insightsSettings object for displaying or returning people insights in an organization. To learn how to customize privacy for people insights in an organization, see Customize people insights privacy in Microsoft Graph.
 */
export function list(
  params?: IEndpoints['GET /organization/{organization-id}/settings/peopleInsights']['parameters']
): EndpointRequest<
  IEndpoints['GET /organization/{organization-id}/settings/peopleInsights']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/organization/{organization-id}/settings/peopleInsights',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'organization-id', in: 'path' },
    ],
    params,
  };
}

/**
  * `PATCH /organization/{organization-id}/settings/peopleInsights`
  *
  * Update privacy settings to display or return the specified type of insights in an organization. The type of settings can be contact insights, item insights, or people insights. To learn more about customizing insights privacy for your organization, see:
-  Customize item insights privacy 
-  Customize people insights privacy
  */
export function update(
  body: IEndpoints['PATCH /organization/{organization-id}/settings/peopleInsights']['body'],
  params?: IEndpoints['PATCH /organization/{organization-id}/settings/peopleInsights']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /organization/{organization-id}/settings/peopleInsights']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/organization/{organization-id}/settings/peopleInsights',
    paramDefs: [{ name: 'organization-id', in: 'path' }],
    params,
    body,
  };
}
