import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'GET /identityGovernance/lifecycleWorkflows/customTaskExtensions/{customTaskExtension-id}/createdBy': Operation<
    '/identityGovernance/lifecycleWorkflows/customTaskExtensions/{customTaskExtension-id}/createdBy',
    'get'
  >;
  'GET /identityGovernance/lifecycleWorkflows/customTaskExtensions/{customTaskExtension-id}/createdBy/mailboxSettings': Operation<
    '/identityGovernance/lifecycleWorkflows/customTaskExtensions/{customTaskExtension-id}/createdBy/mailboxSettings',
    'get'
  >;
  'PATCH /identityGovernance/lifecycleWorkflows/customTaskExtensions/{customTaskExtension-id}/createdBy/mailboxSettings': Operation<
    '/identityGovernance/lifecycleWorkflows/customTaskExtensions/{customTaskExtension-id}/createdBy/mailboxSettings',
    'patch'
  >;
  'GET /identityGovernance/lifecycleWorkflows/customTaskExtensions/{customTaskExtension-id}/createdBy/serviceProvisioningErrors': Operation<
    '/identityGovernance/lifecycleWorkflows/customTaskExtensions/{customTaskExtension-id}/createdBy/serviceProvisioningErrors',
    'get'
  >;
}

/**
 * `GET /identityGovernance/lifecycleWorkflows/customTaskExtensions/{customTaskExtension-id}/createdBy`
 *
 * The unique identifier of the Microsoft Entra user that created the custom task extension.Supports $filter(eq, ne) and $expand.
 */
export function get(
  params?: IEndpoints['GET /identityGovernance/lifecycleWorkflows/customTaskExtensions/{customTaskExtension-id}/createdBy']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/lifecycleWorkflows/customTaskExtensions/{customTaskExtension-id}/createdBy']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identityGovernance/lifecycleWorkflows/customTaskExtensions/{customTaskExtension-id}/createdBy',
    paramDefs: {
      path: ['customTaskExtension-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

export const mailboxSettings = {
  /**
   * `GET /identityGovernance/lifecycleWorkflows/customTaskExtensions/{customTaskExtension-id}/createdBy/mailboxSettings`
   *
   * Settings for the primary mailbox of the signed-in user. You can get or update settings for sending automatic replies to incoming messages, locale, and time zone. For more information, see User preferences for languages and regional formats. Returned only on $select.
   */
  list: function list(
    params?: IEndpoints['GET /identityGovernance/lifecycleWorkflows/customTaskExtensions/{customTaskExtension-id}/createdBy/mailboxSettings']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/lifecycleWorkflows/customTaskExtensions/{customTaskExtension-id}/createdBy/mailboxSettings']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/identityGovernance/lifecycleWorkflows/customTaskExtensions/{customTaskExtension-id}/createdBy/mailboxSettings',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['customTaskExtension-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /identityGovernance/lifecycleWorkflows/customTaskExtensions/{customTaskExtension-id}/createdBy/mailboxSettings`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /identityGovernance/lifecycleWorkflows/customTaskExtensions/{customTaskExtension-id}/createdBy/mailboxSettings']['body'],
    params?: IEndpoints['PATCH /identityGovernance/lifecycleWorkflows/customTaskExtensions/{customTaskExtension-id}/createdBy/mailboxSettings']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /identityGovernance/lifecycleWorkflows/customTaskExtensions/{customTaskExtension-id}/createdBy/mailboxSettings']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/identityGovernance/lifecycleWorkflows/customTaskExtensions/{customTaskExtension-id}/createdBy/mailboxSettings',
      paramDefs: {
        path: ['customTaskExtension-id'],
      },
      params,
      body,
    };
  },
};

export const serviceProvisioningErrors = {
  /**
   * `GET /identityGovernance/lifecycleWorkflows/customTaskExtensions/{customTaskExtension-id}/createdBy/serviceProvisioningErrors`
   *
   * Errors published by a federated service describing a nontransient, service-specific error regarding the properties or link from a user object.
   */
  list: function list(
    params?: IEndpoints['GET /identityGovernance/lifecycleWorkflows/customTaskExtensions/{customTaskExtension-id}/createdBy/serviceProvisioningErrors']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/lifecycleWorkflows/customTaskExtensions/{customTaskExtension-id}/createdBy/serviceProvisioningErrors']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/identityGovernance/lifecycleWorkflows/customTaskExtensions/{customTaskExtension-id}/createdBy/serviceProvisioningErrors',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['customTaskExtension-id'],
      },
      params,
    };
  },
};
