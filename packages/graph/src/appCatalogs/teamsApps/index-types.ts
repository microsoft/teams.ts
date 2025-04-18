// DO NOT EDIT THIS FILE
import type { Operation } from './../../common.ts';

export interface Endpoints {
  /**
   * Delete an app from an organization&#x27;s app catalog (the tenant app catalog). To delete an app, the distributionMethod property for the app must be set to organization. You can also use this API to remove a submitted app from the review process.
   */
  'DELETE /appCatalogs/teamsApps/{teamsApp-id}': Operation<
    '/appCatalogs/teamsApps/{teamsApp-id}',
    'delete'
  >;
  /**
   * List apps from the Microsoft Teams app catalog, including apps from the Microsoft Teams store and apps from your organization&#x27;s app catalog (the tenant app catalog). To get apps from your organization&#x27;s app catalog only, specify organization as the distributionMethod in the request.
   */
  'GET /appCatalogs/teamsApps': Operation<'/appCatalogs/teamsApps', 'get'>;
  /**
   */
  'GET /appCatalogs/teamsApps/{teamsApp-id}': Operation<
    '/appCatalogs/teamsApps/{teamsApp-id}',
    'get'
  >;
  /**
   */
  'PATCH /appCatalogs/teamsApps/{teamsApp-id}': Operation<
    '/appCatalogs/teamsApps/{teamsApp-id}',
    'patch'
  >;
  /**
   * Publish an app to the Microsoft Teams app catalog.
Specifically, this API publishes the app to your organization&#x27;s catalog (the tenant app catalog);
the created resource has a distributionMethod property value of organization. The requiresReview property allows any user to submit an app for review by an administrator. Admins can approve or reject these apps via this API or the Microsoft Teams admin center.
   */
  'POST /appCatalogs/teamsApps': Operation<'/appCatalogs/teamsApps', 'post'>;
}
