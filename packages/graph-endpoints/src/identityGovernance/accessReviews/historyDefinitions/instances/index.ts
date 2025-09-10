import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /identityGovernance/accessReviews/historyDefinitions/{accessReviewHistoryDefinition-id}/instances/{accessReviewHistoryInstance-id}': Operation<
    '/identityGovernance/accessReviews/historyDefinitions/{accessReviewHistoryDefinition-id}/instances/{accessReviewHistoryInstance-id}',
    'delete'
  >;
  'GET /identityGovernance/accessReviews/historyDefinitions/{accessReviewHistoryDefinition-id}/instances': Operation<
    '/identityGovernance/accessReviews/historyDefinitions/{accessReviewHistoryDefinition-id}/instances',
    'get'
  >;
  'GET /identityGovernance/accessReviews/historyDefinitions/{accessReviewHistoryDefinition-id}/instances/{accessReviewHistoryInstance-id}': Operation<
    '/identityGovernance/accessReviews/historyDefinitions/{accessReviewHistoryDefinition-id}/instances/{accessReviewHistoryInstance-id}',
    'get'
  >;
  'PATCH /identityGovernance/accessReviews/historyDefinitions/{accessReviewHistoryDefinition-id}/instances/{accessReviewHistoryInstance-id}': Operation<
    '/identityGovernance/accessReviews/historyDefinitions/{accessReviewHistoryDefinition-id}/instances/{accessReviewHistoryInstance-id}',
    'patch'
  >;
  'POST /identityGovernance/accessReviews/historyDefinitions/{accessReviewHistoryDefinition-id}/instances': Operation<
    '/identityGovernance/accessReviews/historyDefinitions/{accessReviewHistoryDefinition-id}/instances',
    'post'
  >;
  'POST /identityGovernance/accessReviews/historyDefinitions/{accessReviewHistoryDefinition-id}/instances/{accessReviewHistoryInstance-id}/generateDownloadUri': Operation<
    '/identityGovernance/accessReviews/historyDefinitions/{accessReviewHistoryDefinition-id}/instances/{accessReviewHistoryInstance-id}/generateDownloadUri',
    'post'
  >;
}

/**
 * `DELETE /identityGovernance/accessReviews/historyDefinitions/{accessReviewHistoryDefinition-id}/instances/{accessReviewHistoryInstance-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /identityGovernance/accessReviews/historyDefinitions/{accessReviewHistoryDefinition-id}/instances/{accessReviewHistoryInstance-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /identityGovernance/accessReviews/historyDefinitions/{accessReviewHistoryDefinition-id}/instances/{accessReviewHistoryInstance-id}']['response']
> {
  return {
    method: 'delete',
    path: '/identityGovernance/accessReviews/historyDefinitions/{accessReviewHistoryDefinition-id}/instances/{accessReviewHistoryInstance-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['accessReviewHistoryDefinition-id', 'accessReviewHistoryInstance-id'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/accessReviews/historyDefinitions/{accessReviewHistoryDefinition-id}/instances`
 *
 * Retrieve the instances of an access review history definition created in the last 30 days.
 */
export function list(
  params?: IEndpoints['GET /identityGovernance/accessReviews/historyDefinitions/{accessReviewHistoryDefinition-id}/instances']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/accessReviews/historyDefinitions/{accessReviewHistoryDefinition-id}/instances']['response']
> {
  return {
    method: 'get',
    path: '/identityGovernance/accessReviews/historyDefinitions/{accessReviewHistoryDefinition-id}/instances',
    paramDefs: {
      path: ['accessReviewHistoryDefinition-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/accessReviews/historyDefinitions/{accessReviewHistoryDefinition-id}/instances/{accessReviewHistoryInstance-id}`
 *
 * If the accessReviewHistoryDefinition is a recurring definition, instances represent each recurrence. A definition that doesn&#x27;t recur will have exactly one instance.
 */
export function get(
  params?: IEndpoints['GET /identityGovernance/accessReviews/historyDefinitions/{accessReviewHistoryDefinition-id}/instances/{accessReviewHistoryInstance-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/accessReviews/historyDefinitions/{accessReviewHistoryDefinition-id}/instances/{accessReviewHistoryInstance-id}']['response']
> {
  return {
    method: 'get',
    path: '/identityGovernance/accessReviews/historyDefinitions/{accessReviewHistoryDefinition-id}/instances/{accessReviewHistoryInstance-id}',
    paramDefs: {
      path: ['accessReviewHistoryDefinition-id', 'accessReviewHistoryInstance-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /identityGovernance/accessReviews/historyDefinitions/{accessReviewHistoryDefinition-id}/instances/{accessReviewHistoryInstance-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /identityGovernance/accessReviews/historyDefinitions/{accessReviewHistoryDefinition-id}/instances/{accessReviewHistoryInstance-id}']['body'],
  params?: IEndpoints['PATCH /identityGovernance/accessReviews/historyDefinitions/{accessReviewHistoryDefinition-id}/instances/{accessReviewHistoryInstance-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /identityGovernance/accessReviews/historyDefinitions/{accessReviewHistoryDefinition-id}/instances/{accessReviewHistoryInstance-id}']['response']
> {
  return {
    method: 'patch',
    path: '/identityGovernance/accessReviews/historyDefinitions/{accessReviewHistoryDefinition-id}/instances/{accessReviewHistoryInstance-id}',
    paramDefs: {
      path: ['accessReviewHistoryDefinition-id', 'accessReviewHistoryInstance-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /identityGovernance/accessReviews/historyDefinitions/{accessReviewHistoryDefinition-id}/instances`
 *
 */
export function create(
  body: IEndpoints['POST /identityGovernance/accessReviews/historyDefinitions/{accessReviewHistoryDefinition-id}/instances']['body'],
  params?: IEndpoints['POST /identityGovernance/accessReviews/historyDefinitions/{accessReviewHistoryDefinition-id}/instances']['parameters']
): EndpointRequest<
  IEndpoints['POST /identityGovernance/accessReviews/historyDefinitions/{accessReviewHistoryDefinition-id}/instances']['response']
> {
  return {
    method: 'post',
    path: '/identityGovernance/accessReviews/historyDefinitions/{accessReviewHistoryDefinition-id}/instances',
    paramDefs: {
      path: ['accessReviewHistoryDefinition-id'],
    },
    params,
    body,
  };
}

export const generateDownloadUri = {
  /**
   * `POST /identityGovernance/accessReviews/historyDefinitions/{accessReviewHistoryDefinition-id}/instances/{accessReviewHistoryInstance-id}/generateDownloadUri`
   *
   * Generates a URI for an accessReviewHistoryInstance object the status for which is done. Each URI can be used to retrieve the instance&#x27;s review history data. Each URI is valid for 24 hours and can be retrieved by fetching the downloadUri property from the accessReviewHistoryInstance object.
   */
  create: function create(
    params?: IEndpoints['POST /identityGovernance/accessReviews/historyDefinitions/{accessReviewHistoryDefinition-id}/instances/{accessReviewHistoryInstance-id}/generateDownloadUri']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /identityGovernance/accessReviews/historyDefinitions/{accessReviewHistoryDefinition-id}/instances/{accessReviewHistoryInstance-id}/generateDownloadUri']['response']
  > {
    return {
      method: 'post',
      path: '/identityGovernance/accessReviews/historyDefinitions/{accessReviewHistoryDefinition-id}/instances/{accessReviewHistoryInstance-id}/generateDownloadUri',
      paramDefs: {
        path: ['accessReviewHistoryDefinition-id', 'accessReviewHistoryInstance-id'],
      },
      params,
    };
  },
};
