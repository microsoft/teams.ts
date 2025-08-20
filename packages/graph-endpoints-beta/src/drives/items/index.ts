export * as activities from './activities';
export * as analytics from './analytics';
export * as assignSensitivityLabel from './assignSensitivityLabel';
export * as checkin from './checkin';
export * as checkout from './checkout';
export * as children from './children';
export * as content from './content';
export * as contentStream from './contentStream';
export * as copy from './copy';
export * as createLink from './createLink';
export * as createUploadSession from './createUploadSession';
export * as createdByUser from './createdByUser';
export * as discardCheckout from './discardCheckout';
export * as extensions from './extensions';
export * as extractSensitivityLabels from './extractSensitivityLabels';
export * as follow from './follow';
export * as invite from './invite';
export * as lastModifiedByUser from './lastModifiedByUser';
export * as listItem from './listItem';
export * as permanentDelete from './permanentDelete';
export * as permissions from './permissions';
export * as preview from './preview';
export * as restore from './restore';
export * as retentionLabel from './retentionLabel';
export * as subscriptions from './subscriptions';
export * as thumbnails from './thumbnails';
export * as unfollow from './unfollow';
export * as validatePermission from './validatePermission';
export * as versions from './versions';
export * as workbook from './workbook';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /drives/{drive-id}/items/{driveItem-id}': Operation<
    '/drives/{drive-id}/items/{driveItem-id}',
    'delete'
  >;
  'GET /drives/{drive-id}/items': Operation<'/drives/{drive-id}/items', 'get'>;
  'GET /drives/{drive-id}/items/{driveItem-id}': Operation<
    '/drives/{drive-id}/items/{driveItem-id}',
    'get'
  >;
  'PATCH /drives/{drive-id}/items/{driveItem-id}': Operation<
    '/drives/{drive-id}/items/{driveItem-id}',
    'patch'
  >;
  'POST /drives/{drive-id}/items': Operation<'/drives/{drive-id}/items', 'post'>;
}

/**
 * `DELETE /drives/{drive-id}/items/{driveItem-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /drives/{drive-id}/items/{driveItem-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /drives/{drive-id}/items/{driveItem-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/drives/{drive-id}/items/{driveItem-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'drive-id', in: 'path' },
      { name: 'driveItem-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /drives/{drive-id}/items`
 *
 * Get a list of driveItem objects shared with the owner of a drive. The driveItems returned from the sharedWithMe method always include the remoteItem facet that indicates they&#x27;re items from a different drive.
 */
export function list(
  params?: IEndpoints['GET /drives/{drive-id}/items']['parameters']
): EndpointRequest<IEndpoints['GET /drives/{drive-id}/items']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/drives/{drive-id}/items',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'drive-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /drives/{drive-id}/items/{driveItem-id}`
 *
 * All items contained in the drive. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}']['parameters']
): EndpointRequest<IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/drives/{drive-id}/items/{driveItem-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'drive-id', in: 'path' },
      { name: 'driveItem-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /drives/{drive-id}/items/{driveItem-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /drives/{drive-id}/items/{driveItem-id}']['body'],
  params?: IEndpoints['PATCH /drives/{drive-id}/items/{driveItem-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /drives/{drive-id}/items/{driveItem-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/drives/{drive-id}/items/{driveItem-id}',
    paramDefs: [
      { name: 'drive-id', in: 'path' },
      { name: 'driveItem-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /drives/{drive-id}/items`
 *
 */
export function create(
  body: IEndpoints['POST /drives/{drive-id}/items']['body'],
  params?: IEndpoints['POST /drives/{drive-id}/items']['parameters']
): EndpointRequest<IEndpoints['POST /drives/{drive-id}/items']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/drives/{drive-id}/items',
    paramDefs: [{ name: 'drive-id', in: 'path' }],
    params,
    body,
  };
}
