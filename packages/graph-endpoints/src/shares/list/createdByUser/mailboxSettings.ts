import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /shares/{sharedDriveItem-id}/list/createdByUser/mailboxSettings': Operation<
    '/shares/{sharedDriveItem-id}/list/createdByUser/mailboxSettings',
    'get'
  >;
  'PATCH /shares/{sharedDriveItem-id}/list/createdByUser/mailboxSettings': Operation<
    '/shares/{sharedDriveItem-id}/list/createdByUser/mailboxSettings',
    'patch'
  >;
}

/**
 * `GET /shares/{sharedDriveItem-id}/list/createdByUser/mailboxSettings`
 *
 * Settings for the primary mailbox of the signed-in user. You can get or update settings for sending automatic replies to incoming messages, locale, and time zone. Returned only on $select.
 */
export function list(
  params?: IEndpoints['GET /shares/{sharedDriveItem-id}/list/createdByUser/mailboxSettings']['parameters']
): EndpointRequest<
  IEndpoints['GET /shares/{sharedDriveItem-id}/list/createdByUser/mailboxSettings']['response']
> {
  return {
    method: 'get',
    path: '/shares/{sharedDriveItem-id}/list/createdByUser/mailboxSettings',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'sharedDriveItem-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /shares/{sharedDriveItem-id}/list/createdByUser/mailboxSettings`
 *
 */
export function update(
  body: IEndpoints['PATCH /shares/{sharedDriveItem-id}/list/createdByUser/mailboxSettings']['body'],
  params?: IEndpoints['PATCH /shares/{sharedDriveItem-id}/list/createdByUser/mailboxSettings']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /shares/{sharedDriveItem-id}/list/createdByUser/mailboxSettings']['response']
> {
  return {
    method: 'patch',
    path: '/shares/{sharedDriveItem-id}/list/createdByUser/mailboxSettings',
    paramDefs: [{ name: 'sharedDriveItem-id', in: 'path' }],
    params,
    body,
  };
}
