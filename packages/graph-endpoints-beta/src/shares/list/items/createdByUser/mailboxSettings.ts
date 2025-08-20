import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'GET /shares/{sharedDriveItem-id}/list/items/{listItem-id}/createdByUser/mailboxSettings': Operation<
    '/shares/{sharedDriveItem-id}/list/items/{listItem-id}/createdByUser/mailboxSettings',
    'get'
  >;
  'PATCH /shares/{sharedDriveItem-id}/list/items/{listItem-id}/createdByUser/mailboxSettings': Operation<
    '/shares/{sharedDriveItem-id}/list/items/{listItem-id}/createdByUser/mailboxSettings',
    'patch'
  >;
}

/**
 * `GET /shares/{sharedDriveItem-id}/list/items/{listItem-id}/createdByUser/mailboxSettings`
 *
 * Settings for the primary mailbox of the signed-in user. You can get or update settings for sending automatic replies to incoming messages, locale, and time zone. For more information, see User preferences for languages and regional formats. Returned only on $select.
 */
export function list(
  params?: IEndpoints['GET /shares/{sharedDriveItem-id}/list/items/{listItem-id}/createdByUser/mailboxSettings']['parameters']
): EndpointRequest<
  IEndpoints['GET /shares/{sharedDriveItem-id}/list/items/{listItem-id}/createdByUser/mailboxSettings']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/shares/{sharedDriveItem-id}/list/items/{listItem-id}/createdByUser/mailboxSettings',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'sharedDriveItem-id', in: 'path' },
      { name: 'listItem-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /shares/{sharedDriveItem-id}/list/items/{listItem-id}/createdByUser/mailboxSettings`
 *
 */
export function update(
  body: IEndpoints['PATCH /shares/{sharedDriveItem-id}/list/items/{listItem-id}/createdByUser/mailboxSettings']['body'],
  params?: IEndpoints['PATCH /shares/{sharedDriveItem-id}/list/items/{listItem-id}/createdByUser/mailboxSettings']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /shares/{sharedDriveItem-id}/list/items/{listItem-id}/createdByUser/mailboxSettings']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/shares/{sharedDriveItem-id}/list/items/{listItem-id}/createdByUser/mailboxSettings',
    paramDefs: [
      { name: 'sharedDriveItem-id', in: 'path' },
      { name: 'listItem-id', in: 'path' },
    ],
    params,
    body,
  };
}
