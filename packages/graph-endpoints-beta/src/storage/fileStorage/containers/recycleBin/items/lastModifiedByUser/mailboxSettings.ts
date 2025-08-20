import type { EndpointRequest, Operation } from './../../../../../../types/common.ts';

export interface IEndpoints {
  'GET /storage/fileStorage/containers/{fileStorageContainer-id}/recycleBin/items/{recycleBinItem-id}/lastModifiedByUser/mailboxSettings': Operation<
    '/storage/fileStorage/containers/{fileStorageContainer-id}/recycleBin/items/{recycleBinItem-id}/lastModifiedByUser/mailboxSettings',
    'get'
  >;
  'PATCH /storage/fileStorage/containers/{fileStorageContainer-id}/recycleBin/items/{recycleBinItem-id}/lastModifiedByUser/mailboxSettings': Operation<
    '/storage/fileStorage/containers/{fileStorageContainer-id}/recycleBin/items/{recycleBinItem-id}/lastModifiedByUser/mailboxSettings',
    'patch'
  >;
}

/**
 * `GET /storage/fileStorage/containers/{fileStorageContainer-id}/recycleBin/items/{recycleBinItem-id}/lastModifiedByUser/mailboxSettings`
 *
 * Settings for the primary mailbox of the signed-in user. You can get or update settings for sending automatic replies to incoming messages, locale, and time zone. For more information, see User preferences for languages and regional formats. Returned only on $select.
 */
export function list(
  params?: IEndpoints['GET /storage/fileStorage/containers/{fileStorageContainer-id}/recycleBin/items/{recycleBinItem-id}/lastModifiedByUser/mailboxSettings']['parameters']
): EndpointRequest<
  IEndpoints['GET /storage/fileStorage/containers/{fileStorageContainer-id}/recycleBin/items/{recycleBinItem-id}/lastModifiedByUser/mailboxSettings']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/storage/fileStorage/containers/{fileStorageContainer-id}/recycleBin/items/{recycleBinItem-id}/lastModifiedByUser/mailboxSettings',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'fileStorageContainer-id', in: 'path' },
      { name: 'recycleBinItem-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /storage/fileStorage/containers/{fileStorageContainer-id}/recycleBin/items/{recycleBinItem-id}/lastModifiedByUser/mailboxSettings`
 *
 */
export function update(
  body: IEndpoints['PATCH /storage/fileStorage/containers/{fileStorageContainer-id}/recycleBin/items/{recycleBinItem-id}/lastModifiedByUser/mailboxSettings']['body'],
  params?: IEndpoints['PATCH /storage/fileStorage/containers/{fileStorageContainer-id}/recycleBin/items/{recycleBinItem-id}/lastModifiedByUser/mailboxSettings']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /storage/fileStorage/containers/{fileStorageContainer-id}/recycleBin/items/{recycleBinItem-id}/lastModifiedByUser/mailboxSettings']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/storage/fileStorage/containers/{fileStorageContainer-id}/recycleBin/items/{recycleBinItem-id}/lastModifiedByUser/mailboxSettings',
    paramDefs: [
      { name: 'fileStorageContainer-id', in: 'path' },
      { name: 'recycleBinItem-id', in: 'path' },
    ],
    params,
    body,
  };
}
