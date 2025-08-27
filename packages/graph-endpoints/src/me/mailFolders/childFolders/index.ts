export * as copy from './copy';
export * as messageRules from './messageRules';
export * as messages from './messages';
export * as move from './move';
export * as permanentDelete from './permanentDelete';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}': Operation<
    '/me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}',
    'delete'
  >;
  'GET /me/mailFolders/{mailFolder-id}/childFolders': Operation<
    '/me/mailFolders/{mailFolder-id}/childFolders',
    'get'
  >;
  'GET /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}': Operation<
    '/me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}',
    'get'
  >;
  'PATCH /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}': Operation<
    '/me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}',
    'patch'
  >;
  'POST /me/mailFolders/{mailFolder-id}/childFolders': Operation<
    '/me/mailFolders/{mailFolder-id}/childFolders',
    'post'
  >;
}

/**
 * `DELETE /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}']['response']
> {
  return {
    method: 'delete',
    path: '/me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'mailFolder-id', in: 'path' },
      { name: 'mailFolder-id1', in: 'path' },
    ],
    params,
  };
}

/**
  * `GET /me/mailFolders/{mailFolder-id}/childFolders`
  *
  * Get the folder collection under the specified folder. You can use the .../me/mailFolders shortcut to get the top-level
folder collection and navigate to another folder. By default, this operation does not return hidden folders. Use a query parameter includeHiddenFolders to include them in the response.
  */
export function list(
  params?: IEndpoints['GET /me/mailFolders/{mailFolder-id}/childFolders']['parameters']
): EndpointRequest<IEndpoints['GET /me/mailFolders/{mailFolder-id}/childFolders']['response']> {
  return {
    method: 'get',
    path: '/me/mailFolders/{mailFolder-id}/childFolders',
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
      { name: 'mailFolder-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}`
 *
 * The collection of child folders in the mailFolder.
 */
export function get(
  params?: IEndpoints['GET /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}']['response']
> {
  return {
    method: 'get',
    path: '/me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}',
    paramDefs: [
      { name: 'includeHiddenFolders', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'mailFolder-id', in: 'path' },
      { name: 'mailFolder-id1', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}']['body'],
  params?: IEndpoints['PATCH /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}']['response']
> {
  return {
    method: 'patch',
    path: '/me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}',
    paramDefs: [
      { name: 'mailFolder-id', in: 'path' },
      { name: 'mailFolder-id1', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /me/mailFolders/{mailFolder-id}/childFolders`
 *
 * Create a new mailSearchFolder in the specified user&#x27;s mailbox.
 */
export function create(
  body: IEndpoints['POST /me/mailFolders/{mailFolder-id}/childFolders']['body'],
  params?: IEndpoints['POST /me/mailFolders/{mailFolder-id}/childFolders']['parameters']
): EndpointRequest<IEndpoints['POST /me/mailFolders/{mailFolder-id}/childFolders']['response']> {
  return {
    method: 'post',
    path: '/me/mailFolders/{mailFolder-id}/childFolders',
    paramDefs: [{ name: 'mailFolder-id', in: 'path' }],
    params,
    body,
  };
}
