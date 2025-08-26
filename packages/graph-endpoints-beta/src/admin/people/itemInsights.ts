import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /admin/people/itemInsights': Operation<'/admin/people/itemInsights', 'delete'>;
  'GET /admin/people/itemInsights': Operation<'/admin/people/itemInsights', 'get'>;
  'PATCH /admin/people/itemInsights': Operation<'/admin/people/itemInsights', 'patch'>;
}

/**
 * `DELETE /admin/people/itemInsights`
 *
 */
export function del(
  params?: IEndpoints['DELETE /admin/people/itemInsights']['parameters']
): EndpointRequest<IEndpoints['DELETE /admin/people/itemInsights']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/admin/people/itemInsights',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /admin/people/itemInsights`
 *
 * Get the properties of an insightsSettings object for displaying or returning item insights in an organization. To learn how to customize the privacy of item insights in an organization, see Customize item insights privacy in Microsoft Graph.
 */
export function list(
  params?: IEndpoints['GET /admin/people/itemInsights']['parameters']
): EndpointRequest<IEndpoints['GET /admin/people/itemInsights']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/people/itemInsights',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
  * `PATCH /admin/people/itemInsights`
  *
  * Update privacy settings to display or return the specified type of insights in an organization. The type of settings can be contact insights, item insights, or people insights. To learn more about customizing insights privacy for your organization, see:
-  Customize item insights privacy 
-  Customize people insights privacy
  */
export function update(
  body: IEndpoints['PATCH /admin/people/itemInsights']['body'],
  params?: IEndpoints['PATCH /admin/people/itemInsights']['parameters']
): EndpointRequest<IEndpoints['PATCH /admin/people/itemInsights']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/admin/people/itemInsights',
    paramDefs: [],
    params,
    body,
  };
}
