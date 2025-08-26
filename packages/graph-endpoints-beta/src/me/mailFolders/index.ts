export * as childFolders from './childFolders';
export * as copy from './copy';
export * as messageRules from './messageRules';
export * as messages from './messages';
export * as move from './move';
export * as operations from './operations';
export * as permanentDelete from './permanentDelete';
export * as updateAllMessagesReadState from './updateAllMessagesReadState';
export * as userConfigurations from './userConfigurations';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/mailFolders/{mailFolder-id}': Operation<'/me/mailFolders/{mailFolder-id}', 'delete'>;
  'GET /me/mailFolders': Operation<'/me/mailFolders', 'get'>;
  'GET /me/mailFolders/{mailFolder-id}': Operation<'/me/mailFolders/{mailFolder-id}', 'get'>;
  'PATCH /me/mailFolders/{mailFolder-id}': Operation<'/me/mailFolders/{mailFolder-id}', 'patch'>;
  'POST /me/mailFolders': Operation<'/me/mailFolders', 'post'>;
}

/**
 * `DELETE /me/mailFolders/{mailFolder-id}`
 *
 * Delete the specified mailFolder. The folder can be a mailSearchFolder. You can specify a mail folder by its folder ID, or by its well-known folder name, if one exists.
 */
export function del(
  params?: IEndpoints['DELETE /me/mailFolders/{mailFolder-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/mailFolders/{mailFolder-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/mailFolders/{mailFolder-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'mailFolder-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/mailFolders`
 *
 * Get the mail folder collection directly under the root folder of the signed-in user. The returned collection includes any mail search folders directly under the root. By default, this operation does not return hidden folders. Use a query parameter includeHiddenFolders to include them in the response. This operation does not return all mail folders in a mailbox, only the child folders of the root folder. To return all mail folders in a mailbox, each child folder must be traversed separately.
 */
export function list(
  params?: IEndpoints['GET /me/mailFolders']['parameters']
): EndpointRequest<IEndpoints['GET /me/mailFolders']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/mailFolders',
    paramDefs: [
      { name: 'includeHiddenFolders', in: 'query' },
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
 * `GET /me/mailFolders/{mailFolder-id}`
 *
 * Retrieve the properties and relationships of a message folder object. The following list shows the two existing scenarios where an app can get another user&#x27;s mail folder:
 */
export function get(
  params?: IEndpoints['GET /me/mailFolders/{mailFolder-id}']['parameters']
): EndpointRequest<IEndpoints['GET /me/mailFolders/{mailFolder-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/mailFolders/{mailFolder-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'mailFolder-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/mailFolders/{mailFolder-id}`
 *
 * Update the writable properties of a mailSearchFolder object.
 */
export function update(
  body: IEndpoints['PATCH /me/mailFolders/{mailFolder-id}']['body'],
  params?: IEndpoints['PATCH /me/mailFolders/{mailFolder-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /me/mailFolders/{mailFolder-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/mailFolders/{mailFolder-id}',
    paramDefs: [{ name: 'mailFolder-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /me/mailFolders`
 *
 * Use this API to create a new mail folder in the root folder of the user&#x27;s mailbox. If you intend a new folder to be hidden, you must set the isHidden property to true on creation.
 */
export function create(
  body: IEndpoints['POST /me/mailFolders']['body'],
  params?: IEndpoints['POST /me/mailFolders']['parameters']
): EndpointRequest<IEndpoints['POST /me/mailFolders']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/mailFolders',
    paramDefs: [],
    params,
    body,
  };
}
