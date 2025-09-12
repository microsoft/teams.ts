export * as contentSharingSessions from './contentSharingSessions';
export * as participants from './participants';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /app/calls/{call-id}': Operation<'/app/calls/{call-id}', 'delete'>;
  'GET /app/calls': Operation<'/app/calls', 'get'>;
  'GET /app/calls/{call-id}': Operation<'/app/calls/{call-id}', 'get'>;
  'PATCH /app/calls/{call-id}': Operation<'/app/calls/{call-id}', 'patch'>;
  'POST /app/calls': Operation<'/app/calls', 'post'>;
  'POST /app/calls/{call-id}/addLargeGalleryView': Operation<
    '/app/calls/{call-id}/addLargeGalleryView',
    'post'
  >;
  'POST /app/calls/{call-id}/answer': Operation<'/app/calls/{call-id}/answer', 'post'>;
  'GET /app/calls/{call-id}/audioRoutingGroups': Operation<
    '/app/calls/{call-id}/audioRoutingGroups',
    'get'
  >;
  'POST /app/calls/{call-id}/audioRoutingGroups': Operation<
    '/app/calls/{call-id}/audioRoutingGroups',
    'post'
  >;
  'GET /app/calls/{call-id}/audioRoutingGroups/{audioRoutingGroup-id}': Operation<
    '/app/calls/{call-id}/audioRoutingGroups/{audioRoutingGroup-id}',
    'get'
  >;
  'PATCH /app/calls/{call-id}/audioRoutingGroups/{audioRoutingGroup-id}': Operation<
    '/app/calls/{call-id}/audioRoutingGroups/{audioRoutingGroup-id}',
    'patch'
  >;
  'DELETE /app/calls/{call-id}/audioRoutingGroups/{audioRoutingGroup-id}': Operation<
    '/app/calls/{call-id}/audioRoutingGroups/{audioRoutingGroup-id}',
    'delete'
  >;
  'POST /app/calls/{call-id}/cancelMediaProcessing': Operation<
    '/app/calls/{call-id}/cancelMediaProcessing',
    'post'
  >;
  'POST /app/calls/{call-id}/changeScreenSharingRole': Operation<
    '/app/calls/{call-id}/changeScreenSharingRole',
    'post'
  >;
  'POST /app/calls/{call-id}/keepAlive': Operation<'/app/calls/{call-id}/keepAlive', 'post'>;
  'POST /app/calls/logTeleconferenceDeviceQuality': Operation<
    '/app/calls/logTeleconferenceDeviceQuality',
    'post'
  >;
  'POST /app/calls/{call-id}/mute': Operation<'/app/calls/{call-id}/mute', 'post'>;
  'GET /app/calls/{call-id}/operations': Operation<'/app/calls/{call-id}/operations', 'get'>;
  'POST /app/calls/{call-id}/operations': Operation<'/app/calls/{call-id}/operations', 'post'>;
  'GET /app/calls/{call-id}/operations/{commsOperation-id}': Operation<
    '/app/calls/{call-id}/operations/{commsOperation-id}',
    'get'
  >;
  'PATCH /app/calls/{call-id}/operations/{commsOperation-id}': Operation<
    '/app/calls/{call-id}/operations/{commsOperation-id}',
    'patch'
  >;
  'DELETE /app/calls/{call-id}/operations/{commsOperation-id}': Operation<
    '/app/calls/{call-id}/operations/{commsOperation-id}',
    'delete'
  >;
  'POST /app/calls/{call-id}/playPrompt': Operation<'/app/calls/{call-id}/playPrompt', 'post'>;
  'POST /app/calls/{call-id}/record': Operation<'/app/calls/{call-id}/record', 'post'>;
  'POST /app/calls/{call-id}/recordResponse': Operation<
    '/app/calls/{call-id}/recordResponse',
    'post'
  >;
  'POST /app/calls/{call-id}/redirect': Operation<'/app/calls/{call-id}/redirect', 'post'>;
  'POST /app/calls/{call-id}/reject': Operation<'/app/calls/{call-id}/reject', 'post'>;
  'POST /app/calls/{call-id}/sendDtmfTones': Operation<
    '/app/calls/{call-id}/sendDtmfTones',
    'post'
  >;
  'POST /app/calls/{call-id}/startRecording': Operation<
    '/app/calls/{call-id}/startRecording',
    'post'
  >;
  'POST /app/calls/{call-id}/startTranscription': Operation<
    '/app/calls/{call-id}/startTranscription',
    'post'
  >;
  'POST /app/calls/{call-id}/stopRecording': Operation<
    '/app/calls/{call-id}/stopRecording',
    'post'
  >;
  'POST /app/calls/{call-id}/stopTranscription': Operation<
    '/app/calls/{call-id}/stopTranscription',
    'post'
  >;
  'POST /app/calls/{call-id}/subscribeToTone': Operation<
    '/app/calls/{call-id}/subscribeToTone',
    'post'
  >;
  'POST /app/calls/{call-id}/transfer': Operation<'/app/calls/{call-id}/transfer', 'post'>;
  'POST /app/calls/{call-id}/unmute': Operation<'/app/calls/{call-id}/unmute', 'post'>;
  'POST /app/calls/{call-id}/updateRecordingStatus': Operation<
    '/app/calls/{call-id}/updateRecordingStatus',
    'post'
  >;
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
    paramDefs: {
      header: ['If-Match'],
      path: ['call-id'],
    },
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
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
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
    paramDefs: {
      path: ['call-id'],
      query: ['$select', '$expand'],
    },
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
    paramDefs: {
      path: ['call-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /app/calls`
 *
 */
export function create(
  body: IEndpoints['POST /app/calls']['body']
): EndpointRequest<IEndpoints['POST /app/calls']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/app/calls',
    body,
  };
}

export const addLargeGalleryView = {
  /**
   * `POST /app/calls/{call-id}/addLargeGalleryView`
   *
   * Add the large gallery view to a call.  For details about how to identify a large gallery view participant in a roster so that you can retrieve the relevant data to subscribe to the video feed, see Identify large gallery view participants in a roster.
   */
  create: function create(
    body: IEndpoints['POST /app/calls/{call-id}/addLargeGalleryView']['body'],
    params?: IEndpoints['POST /app/calls/{call-id}/addLargeGalleryView']['parameters']
  ): EndpointRequest<IEndpoints['POST /app/calls/{call-id}/addLargeGalleryView']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/app/calls/{call-id}/addLargeGalleryView',
      paramDefs: {
        path: ['call-id'],
      },
      params,
      body,
    };
  },
};

export const answer = {
  /**
   * `POST /app/calls/{call-id}/answer`
   *
   * Enable a bot to answer an incoming call. The incoming call request can be an invitation from a participant in a group call or a peer-to-peer call. If an invitation to a group call is received, the notification contains the chatInfo and meetingInfo parameters. The bot is expected to answer, reject or redirect the call before the call times out. The current timeout value is 15 seconds. The current timeout value is 15 seconds for regular scenarios, and 5 seconds for policy-based recording scenarios. This API supports the following PSTN scenarios:
   */
  create: function create(
    body: IEndpoints['POST /app/calls/{call-id}/answer']['body'],
    params?: IEndpoints['POST /app/calls/{call-id}/answer']['parameters']
  ): EndpointRequest<IEndpoints['POST /app/calls/{call-id}/answer']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/app/calls/{call-id}/answer',
      paramDefs: {
        path: ['call-id'],
      },
      params,
      body,
    };
  },
};

export const audioRoutingGroups = {
  /**
   * `GET /app/calls/{call-id}/audioRoutingGroups`
   *
   */
  list: function list(
    params?: IEndpoints['GET /app/calls/{call-id}/audioRoutingGroups']['parameters']
  ): EndpointRequest<IEndpoints['GET /app/calls/{call-id}/audioRoutingGroups']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/app/calls/{call-id}/audioRoutingGroups',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['call-id'],
      },
      params,
    };
  },
  /**
   * `POST /app/calls/{call-id}/audioRoutingGroups`
   *
   */
  create: function create(
    body: IEndpoints['POST /app/calls/{call-id}/audioRoutingGroups']['body'],
    params?: IEndpoints['POST /app/calls/{call-id}/audioRoutingGroups']['parameters']
  ): EndpointRequest<IEndpoints['POST /app/calls/{call-id}/audioRoutingGroups']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/app/calls/{call-id}/audioRoutingGroups',
      paramDefs: {
        path: ['call-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /app/calls/{call-id}/audioRoutingGroups/{audioRoutingGroup-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /app/calls/{call-id}/audioRoutingGroups/{audioRoutingGroup-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /app/calls/{call-id}/audioRoutingGroups/{audioRoutingGroup-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/app/calls/{call-id}/audioRoutingGroups/{audioRoutingGroup-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['call-id', 'audioRoutingGroup-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /app/calls/{call-id}/audioRoutingGroups/{audioRoutingGroup-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /app/calls/{call-id}/audioRoutingGroups/{audioRoutingGroup-id}']['body'],
    params?: IEndpoints['PATCH /app/calls/{call-id}/audioRoutingGroups/{audioRoutingGroup-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /app/calls/{call-id}/audioRoutingGroups/{audioRoutingGroup-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/app/calls/{call-id}/audioRoutingGroups/{audioRoutingGroup-id}',
      paramDefs: {
        path: ['call-id', 'audioRoutingGroup-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /app/calls/{call-id}/audioRoutingGroups/{audioRoutingGroup-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /app/calls/{call-id}/audioRoutingGroups/{audioRoutingGroup-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /app/calls/{call-id}/audioRoutingGroups/{audioRoutingGroup-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/app/calls/{call-id}/audioRoutingGroups/{audioRoutingGroup-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['call-id', 'audioRoutingGroup-id'],
      },
      params,
    };
  },
};

export const cancelMediaProcessing = {
  /**
   * `POST /app/calls/{call-id}/cancelMediaProcessing`
   *
   * Cancels processing for any in-progress media operations. Media operations refer to the IVR operations playPrompt and recordResponse, which are by default queued to process in order. The cancelMediaProcessing method cancels any operation that is in-process as well as operations that are queued. For example, this API can be used to clean up the IVR operation queue for a new media operation. However, it will not cancel a ubscribeToTone operation because it operates independent of any operation queue.
   */
  create: function create(
    body: IEndpoints['POST /app/calls/{call-id}/cancelMediaProcessing']['body'],
    params?: IEndpoints['POST /app/calls/{call-id}/cancelMediaProcessing']['parameters']
  ): EndpointRequest<IEndpoints['POST /app/calls/{call-id}/cancelMediaProcessing']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/app/calls/{call-id}/cancelMediaProcessing',
      paramDefs: {
        path: ['call-id'],
      },
      params,
      body,
    };
  },
};

export const changeScreenSharingRole = {
  /**
   * `POST /app/calls/{call-id}/changeScreenSharingRole`
   *
   * Allow applications to share screen content with the participants of a group call.
   */
  create: function create(
    body: IEndpoints['POST /app/calls/{call-id}/changeScreenSharingRole']['body'],
    params?: IEndpoints['POST /app/calls/{call-id}/changeScreenSharingRole']['parameters']
  ): EndpointRequest<IEndpoints['POST /app/calls/{call-id}/changeScreenSharingRole']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/app/calls/{call-id}/changeScreenSharingRole',
      paramDefs: {
        path: ['call-id'],
      },
      params,
      body,
    };
  },
};

export const keepAlive = {
  /**
   * `POST /app/calls/{call-id}/keepAlive`
   *
   * Make a request to this API every 15 to 45 minutes to ensure that an ongoing call remains active. A call that doesn&#x27;t receive this request within 45 minutes is considered inactive and ends. At least one successful request must be made within 45 minutes of the previous request, or the start of the call. We recommend that you send a request in shorter time intervals (every 15 minutes). Make sure that these requests are successful to prevent the call from timing out and ending. Attempting to send a request to a call that ended results in a 404 Not Found error. The resources related to the call should be cleaned up on the application side.
   */
  create: function create(
    params?: IEndpoints['POST /app/calls/{call-id}/keepAlive']['parameters']
  ): EndpointRequest<IEndpoints['POST /app/calls/{call-id}/keepAlive']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/app/calls/{call-id}/keepAlive',
      paramDefs: {
        path: ['call-id'],
      },
      params,
    };
  },
};

export const logTeleconferenceDeviceQuality = {
  /**
   * `POST /app/calls/logTeleconferenceDeviceQuality`
   *
   * Log video teleconferencing device quality data. The Cloud Video Interop (CVI) bot represents video teleconferencing (VTC) devices and acts as a back-to-back agent for a VTC device in a conference call. Because a CVI bot is in the middle of the VTC and Microsoft Teams infrastructure as a VTC proxy, it has two media legs. One media leg is between the CVI bot and Teams infrastructure, such as Teams conference server or a Teams client. The other media leg is between the CVI bot and the VTC device.  The third-party partners own the VTC media leg and the Teams infrastructure cannot access the quality data of the third-party call leg.  This method is only for the CVI partners to provide their media quality data.
   */
  create: function create(
    body: IEndpoints['POST /app/calls/logTeleconferenceDeviceQuality']['body']
  ): EndpointRequest<IEndpoints['POST /app/calls/logTeleconferenceDeviceQuality']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/app/calls/logTeleconferenceDeviceQuality',
      body,
    };
  },
};

export const mute = {
  /**
   * `POST /app/calls/{call-id}/mute`
   *
   * Allows the application to mute itself. This is a server mute, meaning that the server drops all audio packets for this participant, even if the participant continues to stream audio. For more information about how to handle mute operations, see muteParticipantOperation.
   */
  create: function create(
    body: IEndpoints['POST /app/calls/{call-id}/mute']['body'],
    params?: IEndpoints['POST /app/calls/{call-id}/mute']['parameters']
  ): EndpointRequest<IEndpoints['POST /app/calls/{call-id}/mute']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/app/calls/{call-id}/mute',
      paramDefs: {
        path: ['call-id'],
      },
      params,
      body,
    };
  },
};

export const operations = {
  /**
   * `GET /app/calls/{call-id}/operations`
   *
   */
  list: function list(
    params?: IEndpoints['GET /app/calls/{call-id}/operations']['parameters']
  ): EndpointRequest<IEndpoints['GET /app/calls/{call-id}/operations']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/app/calls/{call-id}/operations',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['call-id'],
      },
      params,
    };
  },
  /**
   * `POST /app/calls/{call-id}/operations`
   *
   */
  create: function create(
    body: IEndpoints['POST /app/calls/{call-id}/operations']['body'],
    params?: IEndpoints['POST /app/calls/{call-id}/operations']['parameters']
  ): EndpointRequest<IEndpoints['POST /app/calls/{call-id}/operations']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/app/calls/{call-id}/operations',
      paramDefs: {
        path: ['call-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /app/calls/{call-id}/operations/{commsOperation-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /app/calls/{call-id}/operations/{commsOperation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /app/calls/{call-id}/operations/{commsOperation-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/app/calls/{call-id}/operations/{commsOperation-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['call-id', 'commsOperation-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /app/calls/{call-id}/operations/{commsOperation-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /app/calls/{call-id}/operations/{commsOperation-id}']['body'],
    params?: IEndpoints['PATCH /app/calls/{call-id}/operations/{commsOperation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /app/calls/{call-id}/operations/{commsOperation-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/app/calls/{call-id}/operations/{commsOperation-id}',
      paramDefs: {
        path: ['call-id', 'commsOperation-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /app/calls/{call-id}/operations/{commsOperation-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /app/calls/{call-id}/operations/{commsOperation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /app/calls/{call-id}/operations/{commsOperation-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/app/calls/{call-id}/operations/{commsOperation-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['call-id', 'commsOperation-id'],
      },
      params,
    };
  },
};

export const playPrompt = {
  /**
   * `POST /app/calls/{call-id}/playPrompt`
   *
   * Play a prompt in the call. For more information about how to handle operations, see commsOperation
   */
  create: function create(
    body: IEndpoints['POST /app/calls/{call-id}/playPrompt']['body'],
    params?: IEndpoints['POST /app/calls/{call-id}/playPrompt']['parameters']
  ): EndpointRequest<IEndpoints['POST /app/calls/{call-id}/playPrompt']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/app/calls/{call-id}/playPrompt',
      paramDefs: {
        path: ['call-id'],
      },
      params,
      body,
    };
  },
};

export const record = {
  /**
   * `POST /app/calls/{call-id}/record`
   *
   */
  create: function create(
    body: IEndpoints['POST /app/calls/{call-id}/record']['body'],
    params?: IEndpoints['POST /app/calls/{call-id}/record']['parameters']
  ): EndpointRequest<IEndpoints['POST /app/calls/{call-id}/record']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/app/calls/{call-id}/record',
      paramDefs: {
        path: ['call-id'],
      },
      params,
      body,
    };
  },
};

export const recordResponse = {
  /**
   * `POST /app/calls/{call-id}/recordResponse`
   *
   * Record a short audio response from the caller. A bot can use this API to capture a voice response from a caller after they&#x27;re prompted for a response. For more information about how to handle operations, see commsOperation. This action isn&#x27;t intended to record the entire call. The maximum length of recording is 2 minutes.The Cloud Communications Platform doesn&#x27;t save the recording permanently and discards it shortly after the call ends. The bot must download the recording promptly after the recording operation finishes by using the recordingLocation value provided in the completed notification.
   */
  create: function create(
    body: IEndpoints['POST /app/calls/{call-id}/recordResponse']['body'],
    params?: IEndpoints['POST /app/calls/{call-id}/recordResponse']['parameters']
  ): EndpointRequest<IEndpoints['POST /app/calls/{call-id}/recordResponse']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/app/calls/{call-id}/recordResponse',
      paramDefs: {
        path: ['call-id'],
      },
      params,
      body,
    };
  },
};

export const redirect = {
  /**
   * `POST /app/calls/{call-id}/redirect`
   *
   * Redirect an incoming call that wasn&#x27;t answered or rejected yet. The terms &#x27;redirecting&#x27; and &#x27;forwarding&#x27; a call are used interchangeably. The bot is expected to redirect the call before the call times out. The current timeout value is 15 seconds.
   */
  create: function create(
    body: IEndpoints['POST /app/calls/{call-id}/redirect']['body'],
    params?: IEndpoints['POST /app/calls/{call-id}/redirect']['parameters']
  ): EndpointRequest<IEndpoints['POST /app/calls/{call-id}/redirect']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/app/calls/{call-id}/redirect',
      paramDefs: {
        path: ['call-id'],
      },
      params,
      body,
    };
  },
};

export const reject = {
  /**
   * `POST /app/calls/{call-id}/reject`
   *
   * Enable a bot to reject an incoming call. The incoming call request can be an invite from a participant in a group call or a peer-to-peer call. If an invite to a group call is received, the notification contains the chatInfo and meetingInfo parameters. The bot is expected to answer or reject the call before the call times out. The current timeout value is 15 seconds. This API doesn&#x27;t end existing calls that have already been answered. Use delete call to end a call.
   */
  create: function create(
    body: IEndpoints['POST /app/calls/{call-id}/reject']['body'],
    params?: IEndpoints['POST /app/calls/{call-id}/reject']['parameters']
  ): EndpointRequest<IEndpoints['POST /app/calls/{call-id}/reject']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/app/calls/{call-id}/reject',
      paramDefs: {
        path: ['call-id'],
      },
      params,
      body,
    };
  },
};

export const sendDtmfTones = {
  /**
   * `POST /app/calls/{call-id}/sendDtmfTones`
   *
   */
  create: function create(
    body: IEndpoints['POST /app/calls/{call-id}/sendDtmfTones']['body'],
    params?: IEndpoints['POST /app/calls/{call-id}/sendDtmfTones']['parameters']
  ): EndpointRequest<IEndpoints['POST /app/calls/{call-id}/sendDtmfTones']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/app/calls/{call-id}/sendDtmfTones',
      paramDefs: {
        path: ['call-id'],
      },
      params,
      body,
    };
  },
};

export const startRecording = {
  /**
   * `POST /app/calls/{call-id}/startRecording`
   *
   */
  create: function create(
    body: IEndpoints['POST /app/calls/{call-id}/startRecording']['body'],
    params?: IEndpoints['POST /app/calls/{call-id}/startRecording']['parameters']
  ): EndpointRequest<IEndpoints['POST /app/calls/{call-id}/startRecording']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/app/calls/{call-id}/startRecording',
      paramDefs: {
        path: ['call-id'],
      },
      params,
      body,
    };
  },
};

export const startTranscription = {
  /**
   * `POST /app/calls/{call-id}/startTranscription`
   *
   */
  create: function create(
    body: IEndpoints['POST /app/calls/{call-id}/startTranscription']['body'],
    params?: IEndpoints['POST /app/calls/{call-id}/startTranscription']['parameters']
  ): EndpointRequest<IEndpoints['POST /app/calls/{call-id}/startTranscription']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/app/calls/{call-id}/startTranscription',
      paramDefs: {
        path: ['call-id'],
      },
      params,
      body,
    };
  },
};

export const stopRecording = {
  /**
   * `POST /app/calls/{call-id}/stopRecording`
   *
   */
  create: function create(
    body: IEndpoints['POST /app/calls/{call-id}/stopRecording']['body'],
    params?: IEndpoints['POST /app/calls/{call-id}/stopRecording']['parameters']
  ): EndpointRequest<IEndpoints['POST /app/calls/{call-id}/stopRecording']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/app/calls/{call-id}/stopRecording',
      paramDefs: {
        path: ['call-id'],
      },
      params,
      body,
    };
  },
};

export const stopTranscription = {
  /**
   * `POST /app/calls/{call-id}/stopTranscription`
   *
   */
  create: function create(
    body: IEndpoints['POST /app/calls/{call-id}/stopTranscription']['body'],
    params?: IEndpoints['POST /app/calls/{call-id}/stopTranscription']['parameters']
  ): EndpointRequest<IEndpoints['POST /app/calls/{call-id}/stopTranscription']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/app/calls/{call-id}/stopTranscription',
      paramDefs: {
        path: ['call-id'],
      },
      params,
      body,
    };
  },
};

export const subscribeToTone = {
  /**
   * `POST /app/calls/{call-id}/subscribeToTone`
   *
   * Subscribe to DTMF (dual-tone multi-frequency signaling) to allow you to be notified when the user presses keys on a dialpad. This action is supported only for calls that are initiated with serviceHostedMediaConfig.
   */
  create: function create(
    body: IEndpoints['POST /app/calls/{call-id}/subscribeToTone']['body'],
    params?: IEndpoints['POST /app/calls/{call-id}/subscribeToTone']['parameters']
  ): EndpointRequest<IEndpoints['POST /app/calls/{call-id}/subscribeToTone']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/app/calls/{call-id}/subscribeToTone',
      paramDefs: {
        path: ['call-id'],
      },
      params,
      body,
    };
  },
};

export const transfer = {
  /**
   * `POST /app/calls/{call-id}/transfer`
   *
   * Transfer an active peer-to-peer call or group call. A consultative transfer means that the transferor can inform the person they want to transfer the call to (the transferee), before the transfer is made. This is opposed to transfering the call directly.
   */
  create: function create(
    body: IEndpoints['POST /app/calls/{call-id}/transfer']['body'],
    params?: IEndpoints['POST /app/calls/{call-id}/transfer']['parameters']
  ): EndpointRequest<IEndpoints['POST /app/calls/{call-id}/transfer']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/app/calls/{call-id}/transfer',
      paramDefs: {
        path: ['call-id'],
      },
      params,
      body,
    };
  },
};

export const unmute = {
  /**
   * `POST /app/calls/{call-id}/unmute`
   *
   * Allow the application to unmute itself. This is a server unmute, meaning that the server will start sending audio packets for this participant to other participants again. For more information about how to handle unmute operations, see unmuteParticipantOperation.
   */
  create: function create(
    body: IEndpoints['POST /app/calls/{call-id}/unmute']['body'],
    params?: IEndpoints['POST /app/calls/{call-id}/unmute']['parameters']
  ): EndpointRequest<IEndpoints['POST /app/calls/{call-id}/unmute']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/app/calls/{call-id}/unmute',
      paramDefs: {
        path: ['call-id'],
      },
      params,
      body,
    };
  },
};

export const updateRecordingStatus = {
  /**
   * `POST /app/calls/{call-id}/updateRecordingStatus`
   *
   * Update the application&#x27;s recording status associated with a call. This requires the use of the Teams policy-based recording solution.
   */
  create: function create(
    body: IEndpoints['POST /app/calls/{call-id}/updateRecordingStatus']['body'],
    params?: IEndpoints['POST /app/calls/{call-id}/updateRecordingStatus']['parameters']
  ): EndpointRequest<IEndpoints['POST /app/calls/{call-id}/updateRecordingStatus']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/app/calls/{call-id}/updateRecordingStatus',
      paramDefs: {
        path: ['call-id'],
      },
      params,
      body,
    };
  },
};
