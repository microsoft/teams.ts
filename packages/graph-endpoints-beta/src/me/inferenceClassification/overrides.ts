import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/inferenceClassification/overrides/{inferenceClassificationOverride-id}': Operation<
    '/me/inferenceClassification/overrides/{inferenceClassificationOverride-id}',
    'delete'
  >;
  'GET /me/inferenceClassification/overrides': Operation<
    '/me/inferenceClassification/overrides',
    'get'
  >;
  'GET /me/inferenceClassification/overrides/{inferenceClassificationOverride-id}': Operation<
    '/me/inferenceClassification/overrides/{inferenceClassificationOverride-id}',
    'get'
  >;
  'PATCH /me/inferenceClassification/overrides/{inferenceClassificationOverride-id}': Operation<
    '/me/inferenceClassification/overrides/{inferenceClassificationOverride-id}',
    'patch'
  >;
  'POST /me/inferenceClassification/overrides': Operation<
    '/me/inferenceClassification/overrides',
    'post'
  >;
}

/**
 * `DELETE /me/inferenceClassification/overrides/{inferenceClassificationOverride-id}`
 *
 * Delete a focused Inbox override specified by its ID.
 */
export function del(
  params?: IEndpoints['DELETE /me/inferenceClassification/overrides/{inferenceClassificationOverride-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/inferenceClassification/overrides/{inferenceClassificationOverride-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/inferenceClassification/overrides/{inferenceClassificationOverride-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'inferenceClassificationOverride-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/inferenceClassification/overrides`
 *
 * Get the Focused Inbox overrides that a user has set up to always classify messages from certain senders in specific ways. Each override corresponds to an SMTP address of a sender. Initially, a user does not have any overrides.
 */
export function list(
  params?: IEndpoints['GET /me/inferenceClassification/overrides']['parameters']
): EndpointRequest<IEndpoints['GET /me/inferenceClassification/overrides']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/inferenceClassification/overrides',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `GET /me/inferenceClassification/overrides/{inferenceClassificationOverride-id}`
 *
 * A set of overrides for a user to always classify messages from specific senders in certain ways: focused, or other. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /me/inferenceClassification/overrides/{inferenceClassificationOverride-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/inferenceClassification/overrides/{inferenceClassificationOverride-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/inferenceClassification/overrides/{inferenceClassificationOverride-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'inferenceClassificationOverride-id', in: 'path' },
    ],
    params,
  };
}

/**
  * `PATCH /me/inferenceClassification/overrides/{inferenceClassificationOverride-id}`
  *
  * Change the classifyAs field of a focused Inbox override as specified. You cannot use PATCH to change any other fields in an inferenceClassificationOverride instance. If an override exists for a sender and the sender changes his/her display name, you can use POST to force an update to the name field in the existing override. If an override exists for a sender and the sender changes his/her SMTP address, deleting the existing override and creating a new one with
the new SMTP address is the only way to &#x27;update&#x27; the override for this sender.
  */
export function update(
  body: IEndpoints['PATCH /me/inferenceClassification/overrides/{inferenceClassificationOverride-id}']['body'],
  params?: IEndpoints['PATCH /me/inferenceClassification/overrides/{inferenceClassificationOverride-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/inferenceClassification/overrides/{inferenceClassificationOverride-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/inferenceClassification/overrides/{inferenceClassificationOverride-id}',
    paramDefs: [{ name: 'inferenceClassificationOverride-id', in: 'path' }],
    params,
    body,
  };
}

/**
  * `POST /me/inferenceClassification/overrides`
  *
  * Create a focused Inbox override for a sender identified by an SMTP address. Future messages from that SMTP address will be consistently classified
as specified in the override.
  */
export function create(
  body: IEndpoints['POST /me/inferenceClassification/overrides']['body'],
  params?: IEndpoints['POST /me/inferenceClassification/overrides']['parameters']
): EndpointRequest<IEndpoints['POST /me/inferenceClassification/overrides']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/inferenceClassification/overrides',
    paramDefs: [],
    params,
    body,
  };
}
