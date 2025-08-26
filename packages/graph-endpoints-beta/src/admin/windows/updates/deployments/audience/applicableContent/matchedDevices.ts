import type { EndpointRequest, Operation } from './../../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /admin/windows/updates/deployments/{deployment-id}/audience/applicableContent/{applicableContent-catalogEntryId}/matchedDevices/{applicableContentDeviceMatch-deviceId}': Operation<
    '/admin/windows/updates/deployments/{deployment-id}/audience/applicableContent/{applicableContent-catalogEntryId}/matchedDevices/{applicableContentDeviceMatch-deviceId}',
    'delete'
  >;
  'GET /admin/windows/updates/deployments/{deployment-id}/audience/applicableContent/{applicableContent-catalogEntryId}/matchedDevices': Operation<
    '/admin/windows/updates/deployments/{deployment-id}/audience/applicableContent/{applicableContent-catalogEntryId}/matchedDevices',
    'get'
  >;
  'GET /admin/windows/updates/deployments/{deployment-id}/audience/applicableContent/{applicableContent-catalogEntryId}/matchedDevices/{applicableContentDeviceMatch-deviceId}': Operation<
    '/admin/windows/updates/deployments/{deployment-id}/audience/applicableContent/{applicableContent-catalogEntryId}/matchedDevices/{applicableContentDeviceMatch-deviceId}',
    'get'
  >;
  'PATCH /admin/windows/updates/deployments/{deployment-id}/audience/applicableContent/{applicableContent-catalogEntryId}/matchedDevices/{applicableContentDeviceMatch-deviceId}': Operation<
    '/admin/windows/updates/deployments/{deployment-id}/audience/applicableContent/{applicableContent-catalogEntryId}/matchedDevices/{applicableContentDeviceMatch-deviceId}',
    'patch'
  >;
  'POST /admin/windows/updates/deployments/{deployment-id}/audience/applicableContent/{applicableContent-catalogEntryId}/matchedDevices': Operation<
    '/admin/windows/updates/deployments/{deployment-id}/audience/applicableContent/{applicableContent-catalogEntryId}/matchedDevices',
    'post'
  >;
}

/**
 * `DELETE /admin/windows/updates/deployments/{deployment-id}/audience/applicableContent/{applicableContent-catalogEntryId}/matchedDevices/{applicableContentDeviceMatch-deviceId}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /admin/windows/updates/deployments/{deployment-id}/audience/applicableContent/{applicableContent-catalogEntryId}/matchedDevices/{applicableContentDeviceMatch-deviceId}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /admin/windows/updates/deployments/{deployment-id}/audience/applicableContent/{applicableContent-catalogEntryId}/matchedDevices/{applicableContentDeviceMatch-deviceId}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/admin/windows/updates/deployments/{deployment-id}/audience/applicableContent/{applicableContent-catalogEntryId}/matchedDevices/{applicableContentDeviceMatch-deviceId}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'deployment-id', in: 'path' },
      { name: 'applicableContent-catalogEntryId', in: 'path' },
      { name: 'applicableContentDeviceMatch-deviceId', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /admin/windows/updates/deployments/{deployment-id}/audience/applicableContent/{applicableContent-catalogEntryId}/matchedDevices`
 *
 * Collection of devices and recommendations for applicable catalog content.
 */
export function list(
  params?: IEndpoints['GET /admin/windows/updates/deployments/{deployment-id}/audience/applicableContent/{applicableContent-catalogEntryId}/matchedDevices']['parameters']
): EndpointRequest<
  IEndpoints['GET /admin/windows/updates/deployments/{deployment-id}/audience/applicableContent/{applicableContent-catalogEntryId}/matchedDevices']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/windows/updates/deployments/{deployment-id}/audience/applicableContent/{applicableContent-catalogEntryId}/matchedDevices',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deployment-id', in: 'path' },
      { name: 'applicableContent-catalogEntryId', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /admin/windows/updates/deployments/{deployment-id}/audience/applicableContent/{applicableContent-catalogEntryId}/matchedDevices/{applicableContentDeviceMatch-deviceId}`
 *
 * Collection of devices and recommendations for applicable catalog content.
 */
export function get(
  params?: IEndpoints['GET /admin/windows/updates/deployments/{deployment-id}/audience/applicableContent/{applicableContent-catalogEntryId}/matchedDevices/{applicableContentDeviceMatch-deviceId}']['parameters']
): EndpointRequest<
  IEndpoints['GET /admin/windows/updates/deployments/{deployment-id}/audience/applicableContent/{applicableContent-catalogEntryId}/matchedDevices/{applicableContentDeviceMatch-deviceId}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/windows/updates/deployments/{deployment-id}/audience/applicableContent/{applicableContent-catalogEntryId}/matchedDevices/{applicableContentDeviceMatch-deviceId}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deployment-id', in: 'path' },
      { name: 'applicableContent-catalogEntryId', in: 'path' },
      { name: 'applicableContentDeviceMatch-deviceId', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /admin/windows/updates/deployments/{deployment-id}/audience/applicableContent/{applicableContent-catalogEntryId}/matchedDevices/{applicableContentDeviceMatch-deviceId}`
 *
 */
export function update(
  body: IEndpoints['PATCH /admin/windows/updates/deployments/{deployment-id}/audience/applicableContent/{applicableContent-catalogEntryId}/matchedDevices/{applicableContentDeviceMatch-deviceId}']['body'],
  params?: IEndpoints['PATCH /admin/windows/updates/deployments/{deployment-id}/audience/applicableContent/{applicableContent-catalogEntryId}/matchedDevices/{applicableContentDeviceMatch-deviceId}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /admin/windows/updates/deployments/{deployment-id}/audience/applicableContent/{applicableContent-catalogEntryId}/matchedDevices/{applicableContentDeviceMatch-deviceId}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/admin/windows/updates/deployments/{deployment-id}/audience/applicableContent/{applicableContent-catalogEntryId}/matchedDevices/{applicableContentDeviceMatch-deviceId}',
    paramDefs: [
      { name: 'deployment-id', in: 'path' },
      { name: 'applicableContent-catalogEntryId', in: 'path' },
      { name: 'applicableContentDeviceMatch-deviceId', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /admin/windows/updates/deployments/{deployment-id}/audience/applicableContent/{applicableContent-catalogEntryId}/matchedDevices`
 *
 */
export function create(
  body: IEndpoints['POST /admin/windows/updates/deployments/{deployment-id}/audience/applicableContent/{applicableContent-catalogEntryId}/matchedDevices']['body'],
  params?: IEndpoints['POST /admin/windows/updates/deployments/{deployment-id}/audience/applicableContent/{applicableContent-catalogEntryId}/matchedDevices']['parameters']
): EndpointRequest<
  IEndpoints['POST /admin/windows/updates/deployments/{deployment-id}/audience/applicableContent/{applicableContent-catalogEntryId}/matchedDevices']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/admin/windows/updates/deployments/{deployment-id}/audience/applicableContent/{applicableContent-catalogEntryId}/matchedDevices',
    paramDefs: [
      { name: 'deployment-id', in: 'path' },
      { name: 'applicableContent-catalogEntryId', in: 'path' },
    ],
    params,
    body,
  };
}
