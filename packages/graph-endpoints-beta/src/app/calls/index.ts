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
export * as record from './record';
export * as recordResponse from './recordResponse';
export * as redirect from './redirect';
export * as reject from './reject';
export * as sendDtmfTones from './sendDtmfTones';
export * as startRecording from './startRecording';
export * as startTranscription from './startTranscription';
export * as stopRecording from './stopRecording';
export * as stopTranscription from './stopTranscription';
export * as subscribeToTone from './subscribeToTone';
export * as transfer from './transfer';
export * as unmute from './unmute';
export * as updateRecordingStatus from './updateRecordingStatus';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /app/calls/{call-id}': Operation<'/app/calls/{call-id}', 'delete'>;
  'GET /app/calls': Operation<'/app/calls', 'get'>;
  'GET /app/calls/{call-id}': Operation<'/app/calls/{call-id}', 'get'>;
  'PATCH /app/calls/{call-id}': Operation<'/app/calls/{call-id}', 'patch'>;
  'POST /app/calls': Operation<'/app/calls', 'post'>;
}

/**
 * `DELETE /app/calls/{call-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /app/calls/{call-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /app/calls/{call-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/app/calls/{call-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'call-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /app/calls`
 *
 */
export function list(
  params?: IEndpoints['GET /app/calls']['parameters']
): EndpointRequest<IEndpoints['GET /app/calls']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/app/calls',
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
 * `GET /app/calls/{call-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /app/calls/{call-id}']['parameters']
): EndpointRequest<IEndpoints['GET /app/calls/{call-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/app/calls/{call-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'call-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /app/calls/{call-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /app/calls/{call-id}']['body'],
  params?: IEndpoints['PATCH /app/calls/{call-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /app/calls/{call-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/app/calls/{call-id}',
    paramDefs: [{ name: 'call-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /app/calls`
 *
 */
export function create(
  body: IEndpoints['POST /app/calls']['body'],
  params?: IEndpoints['POST /app/calls']['parameters']
): EndpointRequest<IEndpoints['POST /app/calls']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/app/calls',
    paramDefs: [],
    params,
    body,
  };
}
