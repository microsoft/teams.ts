export * as deletedChats from './deletedChats';
export * as deletedTeams from './deletedTeams';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /teamwork': Operation<'/teamwork', 'get'>;
  'PATCH /teamwork': Operation<'/teamwork', 'patch'>;
  'POST /teamwork/sendActivityNotificationToRecipients': Operation<
    '/teamwork/sendActivityNotificationToRecipients',
    'post'
  >;
  'GET /teamwork/teamsAppSettings': Operation<'/teamwork/teamsAppSettings', 'get'>;
  'PATCH /teamwork/teamsAppSettings': Operation<'/teamwork/teamsAppSettings', 'patch'>;
  'DELETE /teamwork/teamsAppSettings': Operation<'/teamwork/teamsAppSettings', 'delete'>;
  'GET /teamwork/workforceIntegrations': Operation<'/teamwork/workforceIntegrations', 'get'>;
  'POST /teamwork/workforceIntegrations': Operation<'/teamwork/workforceIntegrations', 'post'>;
  'GET /teamwork/workforceIntegrations/{workforceIntegration-id}': Operation<
    '/teamwork/workforceIntegrations/{workforceIntegration-id}',
    'get'
  >;
  'PATCH /teamwork/workforceIntegrations/{workforceIntegration-id}': Operation<
    '/teamwork/workforceIntegrations/{workforceIntegration-id}',
    'patch'
  >;
  'DELETE /teamwork/workforceIntegrations/{workforceIntegration-id}': Operation<
    '/teamwork/workforceIntegrations/{workforceIntegration-id}',
    'delete'
  >;
}

/**
 * `GET /teamwork`
 *
 * Get the properties and relationships of a teamwork object, such as the region of the organization and whether Microsoft Teams is enabled.
 */
export function get(
  params?: IEndpoints['GET /teamwork']['parameters']
): EndpointRequest<IEndpoints['GET /teamwork']['response']> {
  return {
    method: 'get',
    path: '/teamwork',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /teamwork`
 *
 */
export function update(
  body: IEndpoints['PATCH /teamwork']['body']
): EndpointRequest<IEndpoints['PATCH /teamwork']['response']> {
  return {
    method: 'patch',
    path: '/teamwork',
    body,
  };
}

export const sendActivityNotificationToRecipients = {
  /**
   * `POST /teamwork/sendActivityNotificationToRecipients`
   *
   * Send activity feed notifications to multiple users, in bulk.  For more information, see sending Teams activity notifications.
   */
  create: function create(
    body: IEndpoints['POST /teamwork/sendActivityNotificationToRecipients']['body']
  ): EndpointRequest<
    IEndpoints['POST /teamwork/sendActivityNotificationToRecipients']['response']
  > {
    return {
      method: 'post',
      path: '/teamwork/sendActivityNotificationToRecipients',
      body,
    };
  },
};

export const teamsAppSettings = {
  /**
   * `GET /teamwork/teamsAppSettings`
   *
   * Get the tenant-wide teamsAppSettings for all Teams apps in the tenant.
   */
  list: function list(
    params?: IEndpoints['GET /teamwork/teamsAppSettings']['parameters']
  ): EndpointRequest<IEndpoints['GET /teamwork/teamsAppSettings']['response']> {
    return {
      method: 'get',
      path: '/teamwork/teamsAppSettings',
      paramDefs: {
        query: ['$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `PATCH /teamwork/teamsAppSettings`
   *
   * Update the tenant-wide teamsAppSettings for all Teams apps in the tenant.
   */
  update: function update(
    body: IEndpoints['PATCH /teamwork/teamsAppSettings']['body']
  ): EndpointRequest<IEndpoints['PATCH /teamwork/teamsAppSettings']['response']> {
    return {
      method: 'patch',
      path: '/teamwork/teamsAppSettings',
      body,
    };
  },
  /**
   * `DELETE /teamwork/teamsAppSettings`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /teamwork/teamsAppSettings']['parameters']
  ): EndpointRequest<IEndpoints['DELETE /teamwork/teamsAppSettings']['response']> {
    return {
      method: 'delete',
      path: '/teamwork/teamsAppSettings',
      paramDefs: {
        header: ['If-Match'],
      },
      params,
    };
  },
};

export const workforceIntegrations = {
  /**
   * `GET /teamwork/workforceIntegrations`
   *
   * Retrieve a list of workforceIntegration objects.
   */
  list: function list(
    params?: IEndpoints['GET /teamwork/workforceIntegrations']['parameters']
  ): EndpointRequest<IEndpoints['GET /teamwork/workforceIntegrations']['response']> {
    return {
      method: 'get',
      path: '/teamwork/workforceIntegrations',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /teamwork/workforceIntegrations`
   *
   * Create a new workforceIntegration object.
   */
  create: function create(
    body: IEndpoints['POST /teamwork/workforceIntegrations']['body']
  ): EndpointRequest<IEndpoints['POST /teamwork/workforceIntegrations']['response']> {
    return {
      method: 'post',
      path: '/teamwork/workforceIntegrations',
      body,
    };
  },
  /**
   * `GET /teamwork/workforceIntegrations/{workforceIntegration-id}`
   *
   * Retrieve the properties and relationships of a workforceIntegration object.
   */
  get: function get(
    params?: IEndpoints['GET /teamwork/workforceIntegrations/{workforceIntegration-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /teamwork/workforceIntegrations/{workforceIntegration-id}']['response']
  > {
    return {
      method: 'get',
      path: '/teamwork/workforceIntegrations/{workforceIntegration-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['workforceIntegration-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /teamwork/workforceIntegrations/{workforceIntegration-id}`
   *
   * Update the properties of a workforceIntegration object.
   */
  update: function update(
    body: IEndpoints['PATCH /teamwork/workforceIntegrations/{workforceIntegration-id}']['body'],
    params?: IEndpoints['PATCH /teamwork/workforceIntegrations/{workforceIntegration-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /teamwork/workforceIntegrations/{workforceIntegration-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/teamwork/workforceIntegrations/{workforceIntegration-id}',
      paramDefs: {
        path: ['workforceIntegration-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /teamwork/workforceIntegrations/{workforceIntegration-id}`
   *
   * Delete an instance of a workforceIntegration.
   */
  del: function del(
    params?: IEndpoints['DELETE /teamwork/workforceIntegrations/{workforceIntegration-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /teamwork/workforceIntegrations/{workforceIntegration-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/teamwork/workforceIntegrations/{workforceIntegration-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['workforceIntegration-id'],
      },
      params,
    };
  },
};
