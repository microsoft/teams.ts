export * as addLargeGalleryView from './addLargeGalleryView';
export * as answer from './answer';
export * as audioRoutingGroups from './audioRoutingGroups';
export * as cancelMediaProcessing from './cancelMediaProcessing';
export * as changeScreenSharingRole from './changeScreenSharingRole';
export * as contentSharingSessions from './contentSharingSessions';
export * as keepAlive from './keepAlive';
export * as logTeleconferenceDeviceQuality from './logTeleconferenceDeviceQuality';
export * as mute from './mute';
export * as operations from './operations';
export * as participants from './participants';
export * as playPrompt from './playPrompt';
export * as recordResponse from './recordResponse';
export * as redirect from './redirect';
export * as reject from './reject';
export * as sendDtmfTones from './sendDtmfTones';
export * as subscribeToTone from './subscribeToTone';
export * as transfer from './transfer';
export * as unmute from './unmute';
export * as updateRecordingStatus from './updateRecordingStatus';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /communications/calls/{call-id}': Operation<'/communications/calls/{call-id}', 'delete'>;
  'GET /communications/calls': Operation<'/communications/calls', 'get'>;
  'GET /communications/calls/{call-id}': Operation<'/communications/calls/{call-id}', 'get'>;
  'PATCH /communications/calls/{call-id}': Operation<'/communications/calls/{call-id}', 'patch'>;
  'POST /communications/calls': Operation<'/communications/calls', 'post'>;
}

/**
 * `DELETE /communications/calls/{call-id}`
 *
 * Delete or hang up an active call. For group calls, this will only delete your call leg and the underlying group call will still continue.
 */
export function del(
  params?: IEndpoints['DELETE /communications/calls/{call-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /communications/calls/{call-id}']['response']> {
  return {
    method: 'delete',
    path: '/communications/calls/{call-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'call-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /communications/calls`
 *
 * Retrieve the properties and relationships of a call object.
 */
export function list(
  params?: IEndpoints['GET /communications/calls']['parameters']
): EndpointRequest<IEndpoints['GET /communications/calls']['response']> {
  return {
    method: 'get',
    path: '/communications/calls',
    paramDefs: [
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
 * `GET /communications/calls/{call-id}`
 *
 * Retrieve the properties and relationships of a call object.
 */
export function get(
  params?: IEndpoints['GET /communications/calls/{call-id}']['parameters']
): EndpointRequest<IEndpoints['GET /communications/calls/{call-id}']['response']> {
  return {
    method: 'get',
    path: '/communications/calls/{call-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'call-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /communications/calls/{call-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /communications/calls/{call-id}']['body'],
  params?: IEndpoints['PATCH /communications/calls/{call-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /communications/calls/{call-id}']['response']> {
  return {
    method: 'patch',
    path: '/communications/calls/{call-id}',
    paramDefs: [{ name: 'call-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /communications/calls`
 *
 * Create call enables your bot to create a new outgoing peer-to-peer or group call, or join an existing meeting. You need to register the calling bot and go through the list of permissions needed. This API supports the following PSTN scenarios:
 */
export function create(
  body: IEndpoints['POST /communications/calls']['body'],
  params?: IEndpoints['POST /communications/calls']['parameters']
): EndpointRequest<IEndpoints['POST /communications/calls']['response']> {
  return {
    method: 'post',
    path: '/communications/calls',
    paramDefs: [],
    params,
    body,
  };
}
