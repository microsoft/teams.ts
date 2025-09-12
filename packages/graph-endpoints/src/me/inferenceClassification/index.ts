import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /me/inferenceClassification': Operation<'/me/inferenceClassification', 'get'>;
  'PATCH /me/inferenceClassification': Operation<'/me/inferenceClassification', 'patch'>;
  'GET /me/inferenceClassification/overrides': Operation<
    '/me/inferenceClassification/overrides',
    'get'
  >;
  'POST /me/inferenceClassification/overrides': Operation<
    '/me/inferenceClassification/overrides',
    'post'
  >;
  'GET /me/inferenceClassification/overrides/{inferenceClassificationOverride-id}': Operation<
    '/me/inferenceClassification/overrides/{inferenceClassificationOverride-id}',
    'get'
  >;
  'PATCH /me/inferenceClassification/overrides/{inferenceClassificationOverride-id}': Operation<
    '/me/inferenceClassification/overrides/{inferenceClassificationOverride-id}',
    'patch'
  >;
  'DELETE /me/inferenceClassification/overrides/{inferenceClassificationOverride-id}': Operation<
    '/me/inferenceClassification/overrides/{inferenceClassificationOverride-id}',
    'delete'
  >;
}

/**
 * `GET /me/inferenceClassification`
 *
 * Relevance classification of the user&#x27;s messages based on explicit designations that override inferred relevance or importance.
 */
export function get(
  params?: IEndpoints['GET /me/inferenceClassification']['parameters']
): EndpointRequest<IEndpoints['GET /me/inferenceClassification']['response']> {
  return {
    method: 'get',
    path: '/me/inferenceClassification',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /me/inferenceClassification`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/inferenceClassification']['body']
): EndpointRequest<IEndpoints['PATCH /me/inferenceClassification']['response']> {
  return {
    method: 'patch',
    path: '/me/inferenceClassification',
    body,
  };
}

export const overrides = {
  /**
   * `GET /me/inferenceClassification/overrides`
   *
   * Get the overrides that a user has set up to always classify messages from certain senders in specific ways. Each override corresponds to an SMTP address of a sender. Initially, a user does not have any overrides.
   */
  list: function list(
    params?: IEndpoints['GET /me/inferenceClassification/overrides']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/inferenceClassification/overrides']['response']> {
    return {
      method: 'get',
      path: '/me/inferenceClassification/overrides',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
  * `POST /me/inferenceClassification/overrides`
  *
  * Create an override for a sender identified by an SMTP address. Future messages from that SMTP address will be consistently classified
as specified in the override. Note
  */
  create: function create(
    body: IEndpoints['POST /me/inferenceClassification/overrides']['body']
  ): EndpointRequest<IEndpoints['POST /me/inferenceClassification/overrides']['response']> {
    return {
      method: 'post',
      path: '/me/inferenceClassification/overrides',
      body,
    };
  },
  /**
   * `GET /me/inferenceClassification/overrides/{inferenceClassificationOverride-id}`
   *
   * A set of overrides for a user to always classify messages from specific senders in certain ways: focused, or other. Read-only. Nullable.
   */
  get: function get(
    params?: IEndpoints['GET /me/inferenceClassification/overrides/{inferenceClassificationOverride-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/inferenceClassification/overrides/{inferenceClassificationOverride-id}']['response']
  > {
    return {
      method: 'get',
      path: '/me/inferenceClassification/overrides/{inferenceClassificationOverride-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['inferenceClassificationOverride-id'],
      },
      params,
    };
  },
  /**
  * `PATCH /me/inferenceClassification/overrides/{inferenceClassificationOverride-id}`
  *
  * Change the classifyAs field of an override as specified. You cannot use PATCH to change any other fields in an inferenceClassificationOverride instance. If an override exists for a sender and the sender changes his/her display name, you can use POST to force an update to the name field in the existing override. If an override exists for a sender and the sender changes his/her SMTP address, deleting the existing override and creating a new one with
the new SMTP address is the only way to &#x27;update&#x27; the override for this sender.
  */
  update: function update(
    body: IEndpoints['PATCH /me/inferenceClassification/overrides/{inferenceClassificationOverride-id}']['body'],
    params?: IEndpoints['PATCH /me/inferenceClassification/overrides/{inferenceClassificationOverride-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /me/inferenceClassification/overrides/{inferenceClassificationOverride-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/me/inferenceClassification/overrides/{inferenceClassificationOverride-id}',
      paramDefs: {
        path: ['inferenceClassificationOverride-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /me/inferenceClassification/overrides/{inferenceClassificationOverride-id}`
   *
   * Delete an override specified by its ID.
   */
  del: function del(
    params?: IEndpoints['DELETE /me/inferenceClassification/overrides/{inferenceClassificationOverride-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /me/inferenceClassification/overrides/{inferenceClassificationOverride-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/me/inferenceClassification/overrides/{inferenceClassificationOverride-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['inferenceClassificationOverride-id'],
      },
      params,
    };
  },
};
