export * as attachments from './attachments';
export * as copy from './copy';
export * as createForward from './createForward';
export * as createReply from './createReply';
export * as createReplyAll from './createReplyAll';
export * as extensions from './extensions';
export * as forward from './forward';
export * as move from './move';
export * as permanentDelete from './permanentDelete';
export * as reply from './reply';
export * as replyAll from './replyAll';
export * as send from './send';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/messages/{message-id}': Operation<'/me/messages/{message-id}', 'delete'>;
  'GET /me/messages': Operation<'/me/messages', 'get'>;
  'GET /me/messages/{message-id}': Operation<'/me/messages/{message-id}', 'get'>;
  'PATCH /me/messages/{message-id}': Operation<'/me/messages/{message-id}', 'patch'>;
  'POST /me/messages': Operation<'/me/messages', 'post'>;
}

/**
 * `DELETE /me/messages/{message-id}`
 *
 * Delete a message in the specified user&#x27;s mailbox, or delete a relationship of the message.
 */
export function del(
  params?: IEndpoints['DELETE /me/messages/{message-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/messages/{message-id}']['response']> {
  return {
    method: 'delete',
    path: '/me/messages/{message-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'message-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/messages`
 *
 * Get the messages in the signed-in user&#x27;s mailbox (including the Deleted Items and Clutter folders). Depending on the page size and mailbox data, getting messages from a mailbox can incur multiple requests. The default page size is 10 messages. Use $top to customize the page size, within the range of 1 and 1000. To improve the operation response time, use $select to specify the exact properties you need; see example 1 below. Fine-tune the values for $select and $top, especially when you must use a larger page size, as returning a page with hundreds of messages each with a full response payload may trigger the gateway timeout (HTTP 504). To get the next page of messages, simply apply the entire URL returned in @odata.nextLink to the next get-messages request. This URL includes any query parameters you may have specified in the initial request. Do not try to extract the $skip value from the @odata.nextLink URL to manipulate responses. This API uses the $skip value to keep count of all the items it has gone through in the user&#x27;s mailbox to return a page of message-type items. It&#x27;s therefore possible that even in the initial response, the $skip value is larger than the page size. For more information, see Paging Microsoft Graph data in your app. Currently, this operation returns message bodies in only HTML format. There are two scenarios where an app can get messages in another user&#x27;s mail folder:
 */
export function list(
  params?: IEndpoints['GET /me/messages']['parameters']
): EndpointRequest<IEndpoints['GET /me/messages']['response']> {
  return {
    method: 'get',
    path: '/me/messages',
    paramDefs: [
      { name: 'includeHiddenMessages', in: 'query' },
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
  * `GET /me/messages/{message-id}`
  *
  * You can get a single resource instance expanded with a specific extended property, or a collection of resource instances
that include extended properties matching a filter. Using the query parameter $expand allows you to get the specified resource instance expanded with a specific extended
property. Use a $filter and eq operator on the id property to specify the extended property. This is currently the only way to get the singleValueLegacyExtendedProperty object that represents an extended property. To get resource instances that have certain extended properties, use the $filter query parameter and apply an eq operator
on the id property. In addition, for numeric extended properties, apply one of the following operators on the value property:
eq, ne,ge, gt, le, or lt. For string-typed extended properties, apply a contains, startswith, eq, or ne operator on value. The filter is applied to all instances of the resource in the signed-in user&#x27;s mailbox. Filtering the string name (Name) in the id of an extended property is case-sensitive. Filtering the value property of an extended
property is case-insensitive. The following user resources are supported: As well as the following group resources: See Extended properties overview for more information about when to use
open extensions or extended properties, and how to specify extended properties.
  */
export function get(
  params?: IEndpoints['GET /me/messages/{message-id}']['parameters']
): EndpointRequest<IEndpoints['GET /me/messages/{message-id}']['response']> {
  return {
    method: 'get',
    path: '/me/messages/{message-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'message-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/messages/{message-id}`
 *
 * Update the properties of a message object.
 */
export function update(
  body: IEndpoints['PATCH /me/messages/{message-id}']['body'],
  params?: IEndpoints['PATCH /me/messages/{message-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /me/messages/{message-id}']['response']> {
  return {
    method: 'patch',
    path: '/me/messages/{message-id}',
    paramDefs: [{ name: 'message-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /me/messages`
 *
 * Create an open extension (openTypeExtension object) and add custom properties in a new or existing instance of a resource. You can create an open extension in a resource instance and store custom data to it all in the same operation, except for specific resources. The table in the Permissions section lists the resources that support open extensions.
 */
export function create(
  body: IEndpoints['POST /me/messages']['body'],
  params?: IEndpoints['POST /me/messages']['parameters']
): EndpointRequest<IEndpoints['POST /me/messages']['response']> {
  return {
    method: 'post',
    path: '/me/messages',
    paramDefs: [],
    params,
    body,
  };
}
