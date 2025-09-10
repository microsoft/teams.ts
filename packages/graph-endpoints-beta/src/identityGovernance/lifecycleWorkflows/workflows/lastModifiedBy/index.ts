import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'GET /identityGovernance/lifecycleWorkflows/workflows/{workflow-id}/lastModifiedBy': Operation<
    '/identityGovernance/lifecycleWorkflows/workflows/{workflow-id}/lastModifiedBy',
    'get'
  >;
  'GET /identityGovernance/lifecycleWorkflows/workflows/{workflow-id}/lastModifiedBy/mailboxSettings': Operation<
    '/identityGovernance/lifecycleWorkflows/workflows/{workflow-id}/lastModifiedBy/mailboxSettings',
    'get'
  >;
  'PATCH /identityGovernance/lifecycleWorkflows/workflows/{workflow-id}/lastModifiedBy/mailboxSettings': Operation<
    '/identityGovernance/lifecycleWorkflows/workflows/{workflow-id}/lastModifiedBy/mailboxSettings',
    'patch'
  >;
  'GET /identityGovernance/lifecycleWorkflows/workflows/{workflow-id}/lastModifiedBy/serviceProvisioningErrors': Operation<
    '/identityGovernance/lifecycleWorkflows/workflows/{workflow-id}/lastModifiedBy/serviceProvisioningErrors',
    'get'
  >;
}

/**
 * `GET /identityGovernance/lifecycleWorkflows/workflows/{workflow-id}/lastModifiedBy`
 *
 * The user who last modified the workflow.
 */
export function get(
  params?: IEndpoints['GET /identityGovernance/lifecycleWorkflows/workflows/{workflow-id}/lastModifiedBy']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/lifecycleWorkflows/workflows/{workflow-id}/lastModifiedBy']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identityGovernance/lifecycleWorkflows/workflows/{workflow-id}/lastModifiedBy',
    paramDefs: {
      path: ['workflow-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

export const mailboxSettings = {
  /**
   * `GET /identityGovernance/lifecycleWorkflows/workflows/{workflow-id}/lastModifiedBy/mailboxSettings`
   *
   * Settings for the primary mailbox of the signed-in user. You can get or update settings for sending automatic replies to incoming messages, locale, and time zone. For more information, see User preferences for languages and regional formats. Returned only on $select.
   */
  list: function list(
    params?: IEndpoints['GET /identityGovernance/lifecycleWorkflows/workflows/{workflow-id}/lastModifiedBy/mailboxSettings']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/lifecycleWorkflows/workflows/{workflow-id}/lastModifiedBy/mailboxSettings']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/identityGovernance/lifecycleWorkflows/workflows/{workflow-id}/lastModifiedBy/mailboxSettings',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['workflow-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /identityGovernance/lifecycleWorkflows/workflows/{workflow-id}/lastModifiedBy/mailboxSettings`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /identityGovernance/lifecycleWorkflows/workflows/{workflow-id}/lastModifiedBy/mailboxSettings']['body'],
    params?: IEndpoints['PATCH /identityGovernance/lifecycleWorkflows/workflows/{workflow-id}/lastModifiedBy/mailboxSettings']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /identityGovernance/lifecycleWorkflows/workflows/{workflow-id}/lastModifiedBy/mailboxSettings']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/identityGovernance/lifecycleWorkflows/workflows/{workflow-id}/lastModifiedBy/mailboxSettings',
      paramDefs: {
        path: ['workflow-id'],
      },
      params,
      body,
    };
  },
};

export const serviceProvisioningErrors = {
  /**
   * `GET /identityGovernance/lifecycleWorkflows/workflows/{workflow-id}/lastModifiedBy/serviceProvisioningErrors`
   *
   * Errors published by a federated service describing a nontransient, service-specific error regarding the properties or link from a user object.
   */
  list: function list(
    params?: IEndpoints['GET /identityGovernance/lifecycleWorkflows/workflows/{workflow-id}/lastModifiedBy/serviceProvisioningErrors']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/lifecycleWorkflows/workflows/{workflow-id}/lastModifiedBy/serviceProvisioningErrors']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/identityGovernance/lifecycleWorkflows/workflows/{workflow-id}/lastModifiedBy/serviceProvisioningErrors',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['workflow-id'],
      },
      params,
    };
  },
};
