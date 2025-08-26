import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'GET /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/recycleBin/createdByUser/mailboxSettings': Operation<
    '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}/recycleBin/createdByUser/mailboxSettings',
    'get'
  >;
  'PATCH /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/recycleBin/createdByUser/mailboxSettings': Operation<
    '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}/recycleBin/createdByUser/mailboxSettings',
    'patch'
  >;
}

/**
 * `GET /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/recycleBin/createdByUser/mailboxSettings`
 *
 * Settings for the primary mailbox of the signed-in user. You can get or update settings for sending automatic replies to incoming messages, locale, and time zone. For more information, see User preferences for languages and regional formats. Returned only on $select.
 */
export function list(
  params?: IEndpoints['GET /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/recycleBin/createdByUser/mailboxSettings']['parameters']
): EndpointRequest<
  IEndpoints['GET /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/recycleBin/createdByUser/mailboxSettings']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}/recycleBin/createdByUser/mailboxSettings',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'fileStorageContainer-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/recycleBin/createdByUser/mailboxSettings`
 *
 */
export function update(
  body: IEndpoints['PATCH /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/recycleBin/createdByUser/mailboxSettings']['body'],
  params?: IEndpoints['PATCH /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/recycleBin/createdByUser/mailboxSettings']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/recycleBin/createdByUser/mailboxSettings']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}/recycleBin/createdByUser/mailboxSettings',
    paramDefs: [{ name: 'fileStorageContainer-id', in: 'path' }],
    params,
    body,
  };
}
