import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './index-types.ts';
import { AddLargeGalleryViewClient } from './addLargeGalleryView';
import { AnswerClient } from './answer';
import { AudioRoutingGroupsClient } from './audioRoutingGroups';
import { CancelMediaProcessingClient } from './cancelMediaProcessing';
import { ChangeScreenSharingRoleClient } from './changeScreenSharingRole';
import { ContentSharingSessionsClient } from './contentSharingSessions';
import { KeepAliveClient } from './keepAlive';
import { LogTeleconferenceDeviceQualityClient } from './logTeleconferenceDeviceQuality';
import { MuteClient } from './mute';
import { OperationsClient } from './operations';
import { ParticipantsClient } from './participants';
import { PlayPromptClient } from './playPrompt';
import { RecordResponseClient } from './recordResponse';
import { RedirectClient } from './redirect';
import { RejectClient } from './reject';
import { SendDtmfTonesClient } from './sendDtmfTones';
import { SubscribeToToneClient } from './subscribeToTone';
import { TransferClient } from './transfer';
import { UnmuteClient } from './unmute';
import { UpdateRecordingStatusClient } from './updateRecordingStatus';

/**
 * /communications/calls
 * Provides operations to manage the calls property of the microsoft.graph.cloudCommunications entity.
 */
export class CallsClient {
  protected baseUrl = '/communications/calls';
  protected http: http.Client;

  constructor(options?: http.Client | http.ClientOptions) {
    if (!options) {
      this.http = new http.Client({
        baseUrl: 'https://graph.microsoft.com/v1.0',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': `teams.ts[graph]/${pkg.version}`,
        },
      });
    } else if ('request' in options) {
      this.http = options.clone({
        baseUrl: 'https://graph.microsoft.com/v1.0',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': `teams.ts[graph]/${pkg.version}`,
        },
      });
    } else {
      this.http = new http.Client({
        ...options,
        baseUrl: 'https://graph.microsoft.com/v1.0',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': `teams.ts[graph]/${pkg.version}`,
          ...options.headers,
        },
      });
    }
  }

  /**
   * `/communications/calls/{call-id}/addLargeGalleryView`
   *
   * Provides operations to call the addLargeGalleryView method.
   */
  addLargeGalleryView(callId: string) {
    return new AddLargeGalleryViewClient(callId, this.http);
  }

  /**
   * `/communications/calls/{call-id}/answer`
   *
   * Provides operations to call the answer method.
   */
  answer(callId: string) {
    return new AnswerClient(callId, this.http);
  }

  /**
   * `/communications/calls/{call-id}/audioRoutingGroups`
   *
   * Provides operations to manage the audioRoutingGroups property of the microsoft.graph.call entity.
   */
  audioRoutingGroups(callId: string) {
    return new AudioRoutingGroupsClient(callId, this.http);
  }

  /**
   * `/communications/calls/{call-id}/cancelMediaProcessing`
   *
   * Provides operations to call the cancelMediaProcessing method.
   */
  cancelMediaProcessing(callId: string) {
    return new CancelMediaProcessingClient(callId, this.http);
  }

  /**
   * `/communications/calls/{call-id}/changeScreenSharingRole`
   *
   * Provides operations to call the changeScreenSharingRole method.
   */
  changeScreenSharingRole(callId: string) {
    return new ChangeScreenSharingRoleClient(callId, this.http);
  }

  /**
   * `/communications/calls/{call-id}/contentSharingSessions`
   *
   * Provides operations to manage the contentSharingSessions property of the microsoft.graph.call entity.
   */
  contentSharingSessions(callId: string) {
    return new ContentSharingSessionsClient(callId, this.http);
  }

  /**
   * `/communications/calls/{call-id}/keepAlive`
   *
   * Provides operations to call the keepAlive method.
   */
  keepAlive(callId: string) {
    return new KeepAliveClient(callId, this.http);
  }

  /**
   * `/communications/calls/logTeleconferenceDeviceQuality`
   *
   * Provides operations to call the logTeleconferenceDeviceQuality method.
   */
  get logTeleconferenceDeviceQuality() {
    return new LogTeleconferenceDeviceQualityClient(this.http);
  }

  /**
   * `/communications/calls/{call-id}/mute`
   *
   * Provides operations to call the mute method.
   */
  mute(callId: string) {
    return new MuteClient(callId, this.http);
  }

  /**
   * `/communications/calls/{call-id}/operations`
   *
   * Provides operations to manage the operations property of the microsoft.graph.call entity.
   */
  operations(callId: string) {
    return new OperationsClient(callId, this.http);
  }

  /**
   * `/communications/calls/{call-id}/participants`
   *
   * Provides operations to manage the participants property of the microsoft.graph.call entity.
   */
  participants(callId: string) {
    return new ParticipantsClient(callId, this.http);
  }

  /**
   * `/communications/calls/{call-id}/playPrompt`
   *
   * Provides operations to call the playPrompt method.
   */
  playPrompt(callId: string) {
    return new PlayPromptClient(callId, this.http);
  }

  /**
   * `/communications/calls/{call-id}/recordResponse`
   *
   * Provides operations to call the recordResponse method.
   */
  recordResponse(callId: string) {
    return new RecordResponseClient(callId, this.http);
  }

  /**
   * `/communications/calls/{call-id}/redirect`
   *
   * Provides operations to call the redirect method.
   */
  redirect(callId: string) {
    return new RedirectClient(callId, this.http);
  }

  /**
   * `/communications/calls/{call-id}/reject`
   *
   * Provides operations to call the reject method.
   */
  reject(callId: string) {
    return new RejectClient(callId, this.http);
  }

  /**
   * `/communications/calls/{call-id}/sendDtmfTones`
   *
   * Provides operations to call the sendDtmfTones method.
   */
  sendDtmfTones(callId: string) {
    return new SendDtmfTonesClient(callId, this.http);
  }

  /**
   * `/communications/calls/{call-id}/subscribeToTone`
   *
   * Provides operations to call the subscribeToTone method.
   */
  subscribeToTone(callId: string) {
    return new SubscribeToToneClient(callId, this.http);
  }

  /**
   * `/communications/calls/{call-id}/transfer`
   *
   * Provides operations to call the transfer method.
   */
  transfer(callId: string) {
    return new TransferClient(callId, this.http);
  }

  /**
   * `/communications/calls/{call-id}/unmute`
   *
   * Provides operations to call the unmute method.
   */
  unmute(callId: string) {
    return new UnmuteClient(callId, this.http);
  }

  /**
   * `/communications/calls/{call-id}/updateRecordingStatus`
   *
   * Provides operations to call the updateRecordingStatus method.
   */
  updateRecordingStatus(callId: string) {
    return new UpdateRecordingStatusClient(callId, this.http);
  }

  /**
   * `DELETE /communications/calls/{call-id}`
   *
   * Delete or hang up an active call. For group calls, this will only delete your call leg and the underlying group call will still continue.
   */
  async delete(
    params?: Endpoints['DELETE /communications/calls/{call-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/communications/calls/{call-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'call-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .delete(url, config)
      .then((res) => res.data as Endpoints['DELETE /communications/calls/{call-id}']['response']);
  }

  /**
   * `GET /communications/calls`
   *
   * Retrieve the properties and relationships of a call object.
   */
  async list(
    params?: Endpoints['GET /communications/calls']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/communications/calls',
      [
        { name: '$top', in: 'query' },
        { name: '$skip', in: 'query' },
        { name: '$search', in: 'query' },
        { name: '$filter', in: 'query' },
        { name: '$count', in: 'query' },
        { name: '$orderby', in: 'query' },
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .get(url, config)
      .then((res) => res.data as Endpoints['GET /communications/calls']['response']);
  }

  /**
   * `GET /communications/calls/{call-id}`
   *
   * Retrieve the properties and relationships of a call object.
   */
  async get(
    params?: Endpoints['GET /communications/calls/{call-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/communications/calls/{call-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'call-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .get(url, config)
      .then((res) => res.data as Endpoints['GET /communications/calls/{call-id}']['response']);
  }

  /**
   * `PATCH /communications/calls/{call-id}`
   *
   */
  async update(
    body: Endpoints['PATCH /communications/calls/{call-id}']['body'],
    params?: Endpoints['PATCH /communications/calls/{call-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/communications/calls/{call-id}',
      [{ name: 'call-id', in: 'path' }],
      {
        ...(params || {}),
      }
    );

    return this.http
      .patch(url, body, config)
      .then((res) => res.data as Endpoints['PATCH /communications/calls/{call-id}']['response']);
  }

  /**
   * `POST /communications/calls`
   *
   * Create call enables your bot to create a new outgoing peer-to-peer or group call, or join an existing meeting. You need to register the calling bot and go through the list of permissions needed. This API supports the following PSTN scenarios:
   */
  async create(
    body: Endpoints['POST /communications/calls']['body'],
    params?: Endpoints['POST /communications/calls']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl('/communications/calls', [], {
      ...(params || {}),
    });

    return this.http
      .post(url, body, config)
      .then((res) => res.data as Endpoints['POST /communications/calls']['response']);
  }
}
