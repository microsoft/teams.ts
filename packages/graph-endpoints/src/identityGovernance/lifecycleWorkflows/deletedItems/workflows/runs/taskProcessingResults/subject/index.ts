import type { EndpointRequest, Operation } from './../../../../../../../types/common.ts';

export interface IEndpoints {
  'GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/runs/{run-id}/taskProcessingResults/{taskProcessingResult-id}/subject': Operation<
    '/identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/runs/{run-id}/taskProcessingResults/{taskProcessingResult-id}/subject',
    'get'
  >;
  'GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/runs/{run-id}/taskProcessingResults/{taskProcessingResult-id}/subject/mailboxSettings': Operation<
    '/identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/runs/{run-id}/taskProcessingResults/{taskProcessingResult-id}/subject/mailboxSettings',
    'get'
  >;
  'PATCH /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/runs/{run-id}/taskProcessingResults/{taskProcessingResult-id}/subject/mailboxSettings': Operation<
    '/identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/runs/{run-id}/taskProcessingResults/{taskProcessingResult-id}/subject/mailboxSettings',
    'patch'
  >;
  'GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/runs/{run-id}/taskProcessingResults/{taskProcessingResult-id}/subject/serviceProvisioningErrors': Operation<
    '/identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/runs/{run-id}/taskProcessingResults/{taskProcessingResult-id}/subject/serviceProvisioningErrors',
    'get'
  >;
}

/**
 * `GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/runs/{run-id}/taskProcessingResults/{taskProcessingResult-id}/subject`
 *
 * The unique identifier of the Microsoft Entra user targeted for the task execution.Supports $filter(eq, ne) and $expand.
 */
export function get(
  params?: IEndpoints['GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/runs/{run-id}/taskProcessingResults/{taskProcessingResult-id}/subject']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/runs/{run-id}/taskProcessingResults/{taskProcessingResult-id}/subject']['response']
> {
  return {
    method: 'get',
    path: '/identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/runs/{run-id}/taskProcessingResults/{taskProcessingResult-id}/subject',
    paramDefs: {
      path: ['workflow-id', 'run-id', 'taskProcessingResult-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

export const mailboxSettings = {
  /**
   * `GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/runs/{run-id}/taskProcessingResults/{taskProcessingResult-id}/subject/mailboxSettings`
   *
   * Settings for the primary mailbox of the signed-in user. You can get or update settings for sending automatic replies to incoming messages, locale, and time zone. Returned only on $select.
   */
  list: function list(
    params?: IEndpoints['GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/runs/{run-id}/taskProcessingResults/{taskProcessingResult-id}/subject/mailboxSettings']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/runs/{run-id}/taskProcessingResults/{taskProcessingResult-id}/subject/mailboxSettings']['response']
  > {
    return {
      method: 'get',
      path: '/identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/runs/{run-id}/taskProcessingResults/{taskProcessingResult-id}/subject/mailboxSettings',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['workflow-id', 'run-id', 'taskProcessingResult-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/runs/{run-id}/taskProcessingResults/{taskProcessingResult-id}/subject/mailboxSettings`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/runs/{run-id}/taskProcessingResults/{taskProcessingResult-id}/subject/mailboxSettings']['body'],
    params?: IEndpoints['PATCH /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/runs/{run-id}/taskProcessingResults/{taskProcessingResult-id}/subject/mailboxSettings']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/runs/{run-id}/taskProcessingResults/{taskProcessingResult-id}/subject/mailboxSettings']['response']
  > {
    return {
      method: 'patch',
      path: '/identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/runs/{run-id}/taskProcessingResults/{taskProcessingResult-id}/subject/mailboxSettings',
      paramDefs: {
        path: ['workflow-id', 'run-id', 'taskProcessingResult-id'],
      },
      params,
      body,
    };
  },
};

export const serviceProvisioningErrors = {
  /**
   * `GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/runs/{run-id}/taskProcessingResults/{taskProcessingResult-id}/subject/serviceProvisioningErrors`
   *
   * Errors published by a federated service describing a nontransient, service-specific error regarding the properties or link from a user object.  Supports $filter (eq, not, for isResolved and serviceInstance).
   */
  list: function list(
    params?: IEndpoints['GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/runs/{run-id}/taskProcessingResults/{taskProcessingResult-id}/subject/serviceProvisioningErrors']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/runs/{run-id}/taskProcessingResults/{taskProcessingResult-id}/subject/serviceProvisioningErrors']['response']
  > {
    return {
      method: 'get',
      path: '/identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/runs/{run-id}/taskProcessingResults/{taskProcessingResult-id}/subject/serviceProvisioningErrors',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['workflow-id', 'run-id', 'taskProcessingResult-id'],
      },
      params,
    };
  },
};
