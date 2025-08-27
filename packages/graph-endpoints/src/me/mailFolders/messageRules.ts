import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/mailFolders/{mailFolder-id}/messageRules/{messageRule-id}': Operation<
    '/me/mailFolders/{mailFolder-id}/messageRules/{messageRule-id}',
    'delete'
  >;
  'GET /me/mailFolders/{mailFolder-id}/messageRules': Operation<
    '/me/mailFolders/{mailFolder-id}/messageRules',
    'get'
  >;
  'GET /me/mailFolders/{mailFolder-id}/messageRules/{messageRule-id}': Operation<
    '/me/mailFolders/{mailFolder-id}/messageRules/{messageRule-id}',
    'get'
  >;
  'PATCH /me/mailFolders/{mailFolder-id}/messageRules/{messageRule-id}': Operation<
    '/me/mailFolders/{mailFolder-id}/messageRules/{messageRule-id}',
    'patch'
  >;
  'POST /me/mailFolders/{mailFolder-id}/messageRules': Operation<
    '/me/mailFolders/{mailFolder-id}/messageRules',
    'post'
  >;
}

/**
 * `DELETE /me/mailFolders/{mailFolder-id}/messageRules/{messageRule-id}`
 *
 * Delete the specified messageRule object.
 */
export function del(
  params?: IEndpoints['DELETE /me/mailFolders/{mailFolder-id}/messageRules/{messageRule-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/mailFolders/{mailFolder-id}/messageRules/{messageRule-id}']['response']
> {
  return {
    method: 'delete',
    path: '/me/mailFolders/{mailFolder-id}/messageRules/{messageRule-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'mailFolder-id', in: 'path' },
      { name: 'messageRule-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/mailFolders/{mailFolder-id}/messageRules`
 *
 * Get all the messageRule objects defined for the user&#x27;s inbox.
 */
export function list(
  params?: IEndpoints['GET /me/mailFolders/{mailFolder-id}/messageRules']['parameters']
): EndpointRequest<IEndpoints['GET /me/mailFolders/{mailFolder-id}/messageRules']['response']> {
  return {
    method: 'get',
    path: '/me/mailFolders/{mailFolder-id}/messageRules',
    paramDefs: [
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
 * `GET /me/mailFolders/{mailFolder-id}/messageRules/{messageRule-id}`
 *
 * Get the properties and relationships of a messageRule object.
 */
export function get(
  params?: IEndpoints['GET /me/mailFolders/{mailFolder-id}/messageRules/{messageRule-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/mailFolders/{mailFolder-id}/messageRules/{messageRule-id}']['response']
> {
  return {
    method: 'get',
    path: '/me/mailFolders/{mailFolder-id}/messageRules/{messageRule-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'mailFolder-id', in: 'path' },
      { name: 'messageRule-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/mailFolders/{mailFolder-id}/messageRules/{messageRule-id}`
 *
 * Change writable properties on a messageRule object and save the changes.
 */
export function update(
  body: IEndpoints['PATCH /me/mailFolders/{mailFolder-id}/messageRules/{messageRule-id}']['body'],
  params?: IEndpoints['PATCH /me/mailFolders/{mailFolder-id}/messageRules/{messageRule-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/mailFolders/{mailFolder-id}/messageRules/{messageRule-id}']['response']
> {
  return {
    method: 'patch',
    path: '/me/mailFolders/{mailFolder-id}/messageRules/{messageRule-id}',
    paramDefs: [
      { name: 'mailFolder-id', in: 'path' },
      { name: 'messageRule-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /me/mailFolders/{mailFolder-id}/messageRules`
 *
 * Create a messageRule object by specifying a set of conditions and actions. Outlook carries out those actions if an incoming message in the user&#x27;s Inbox meets the specified conditions.
 */
export function create(
  body: IEndpoints['POST /me/mailFolders/{mailFolder-id}/messageRules']['body'],
  params?: IEndpoints['POST /me/mailFolders/{mailFolder-id}/messageRules']['parameters']
): EndpointRequest<IEndpoints['POST /me/mailFolders/{mailFolder-id}/messageRules']['response']> {
  return {
    method: 'post',
    path: '/me/mailFolders/{mailFolder-id}/messageRules',
    paramDefs: [{ name: 'mailFolder-id', in: 'path' }],
    params,
    body,
  };
}
