export * as appDefinitions from './appDefinitions';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /appCatalogs/teamsApps/{teamsApp-id}': Operation<
    '/appCatalogs/teamsApps/{teamsApp-id}',
    'delete'
  >;
  'GET /appCatalogs/teamsApps': Operation<'/appCatalogs/teamsApps', 'get'>;
  'GET /appCatalogs/teamsApps/{teamsApp-id}': Operation<
    '/appCatalogs/teamsApps/{teamsApp-id}',
    'get'
  >;
  'PATCH /appCatalogs/teamsApps/{teamsApp-id}': Operation<
    '/appCatalogs/teamsApps/{teamsApp-id}',
    'patch'
  >;
  'POST /appCatalogs/teamsApps': Operation<'/appCatalogs/teamsApps', 'post'>;
}

/**
 * `DELETE /appCatalogs/teamsApps/{teamsApp-id}`
 *
 * Delete an app from an organization&#x27;s app catalog (the tenant app catalog). To delete an app, the distributionMethod property for the app must be set to organization. You can also use this API to remove a submitted app from the review process.
 */
export function del(
  params?: IEndpoints['DELETE /appCatalogs/teamsApps/{teamsApp-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /appCatalogs/teamsApps/{teamsApp-id}']['response']> {
  return {
    method: 'delete',
    path: '/appCatalogs/teamsApps/{teamsApp-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['teamsApp-id'],
    },
    params,
  };
}

/**
 * `GET /appCatalogs/teamsApps`
 *
 * List apps from the Microsoft Teams app catalog, including apps from the Microsoft Teams store and apps from your organization&#x27;s app catalog (the tenant app catalog). To get apps from your organization&#x27;s app catalog only, specify organization as the distributionMethod in the request.
 */
export function list(
  params?: IEndpoints['GET /appCatalogs/teamsApps']['parameters']
): EndpointRequest<IEndpoints['GET /appCatalogs/teamsApps']['response']> {
  return {
    method: 'get',
    path: '/appCatalogs/teamsApps',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /appCatalogs/teamsApps/{teamsApp-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /appCatalogs/teamsApps/{teamsApp-id}']['parameters']
): EndpointRequest<IEndpoints['GET /appCatalogs/teamsApps/{teamsApp-id}']['response']> {
  return {
    method: 'get',
    path: '/appCatalogs/teamsApps/{teamsApp-id}',
    paramDefs: {
      path: ['teamsApp-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /appCatalogs/teamsApps/{teamsApp-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /appCatalogs/teamsApps/{teamsApp-id}']['body'],
  params?: IEndpoints['PATCH /appCatalogs/teamsApps/{teamsApp-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /appCatalogs/teamsApps/{teamsApp-id}']['response']> {
  return {
    method: 'patch',
    path: '/appCatalogs/teamsApps/{teamsApp-id}',
    paramDefs: {
      path: ['teamsApp-id'],
    },
    params,
    body,
  };
}

/**
  * `POST /appCatalogs/teamsApps`
  *
  * Publish an app to the Microsoft Teams app catalog.
Specifically, this API publishes the app to your organization&#x27;s catalog (the tenant app catalog);
the created resource has a distributionMethod property value of organization. The requiresReview property allows any user to submit an app for review by an administrator. Admins can approve or reject these apps via this API or the Microsoft Teams admin center.
  */
export function create(
  body: IEndpoints['POST /appCatalogs/teamsApps']['body']
): EndpointRequest<IEndpoints['POST /appCatalogs/teamsApps']['response']> {
  return {
    method: 'post',
    path: '/appCatalogs/teamsApps',
    body,
  };
}
