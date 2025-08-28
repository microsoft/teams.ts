import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /drives/{drive-id}/items/{driveItem-id}/retentionLabel': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/retentionLabel',
    'delete'
  >;
  'GET /drives/{drive-id}/items/{driveItem-id}/retentionLabel': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/retentionLabel',
    'get'
  >;
  'PATCH /drives/{drive-id}/items/{driveItem-id}/retentionLabel': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/retentionLabel',
    'patch'
  >;
}

/**
 * `DELETE /drives/{drive-id}/items/{driveItem-id}/retentionLabel`
 *
 * Remove a retention label from a driveItem. For information about retention labels from an administrator&#x27;s perspective, see Use retention labels to manage the lifecycle of documents stored in SharePoint.
 */
export function del(
  params?: IEndpoints['DELETE /drives/{drive-id}/items/{driveItem-id}/retentionLabel']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /drives/{drive-id}/items/{driveItem-id}/retentionLabel']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/drives/{drive-id}/items/{driveItem-id}/retentionLabel',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'drive-id', in: 'path' },
      { name: 'driveItem-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /drives/{drive-id}/items/{driveItem-id}/retentionLabel`
 *
 * Information about retention label and settings enforced on the driveItem. Read-write.
 */
export function get(
  params?: IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/retentionLabel']['parameters']
): EndpointRequest<
  IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/retentionLabel']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/drives/{drive-id}/items/{driveItem-id}/retentionLabel',
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
 * `PATCH /drives/{drive-id}/items/{driveItem-id}/retentionLabel`
 *
 * Lock or unlock a retention label on a driveItem that classifies content as records. For information about retention labels from an administrator&#x27;s perspective, see Use retention labels to manage the lifecycle of documents stored in SharePoint. For more information about how you can lock and unlock retention labels, see Use record versioning to update records stored in SharePoint or OneDrive.
 */
export function update(
  body: IEndpoints['PATCH /drives/{drive-id}/items/{driveItem-id}/retentionLabel']['body'],
  params?: IEndpoints['PATCH /drives/{drive-id}/items/{driveItem-id}/retentionLabel']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /drives/{drive-id}/items/{driveItem-id}/retentionLabel']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/drives/{drive-id}/items/{driveItem-id}/retentionLabel',
    paramDefs: [
      { name: 'drive-id', in: 'path' },
      { name: 'driveItem-id', in: 'path' },
    ],
    params,
    body,
  };
}
