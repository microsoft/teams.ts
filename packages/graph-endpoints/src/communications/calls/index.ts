export * as participants from './participants';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /communications/calls/{call-id}': Operation<'/communications/calls/{call-id}', 'delete'>;
  'GET /communications/calls': Operation<'/communications/calls', 'get'>;
  'GET /communications/calls/{call-id}': Operation<'/communications/calls/{call-id}', 'get'>;
  'PATCH /communications/calls/{call-id}': Operation<'/communications/calls/{call-id}', 'patch'>;
  'POST /communications/calls': Operation<'/communications/calls', 'post'>;
  'POST /communications/calls/{call-id}/addLargeGalleryView': Operation<
    '/communications/calls/{call-id}/addLargeGalleryView',
    'post'
  >;
  'POST /communications/calls/{call-id}/answer': Operation<
    '/communications/calls/{call-id}/answer',
    'post'
  >;
  'GET /communications/calls/{call-id}/audioRoutingGroups': Operation<
    '/communications/calls/{call-id}/audioRoutingGroups',
    'get'
  >;
  'POST /communications/calls/{call-id}/audioRoutingGroups': Operation<
    '/communications/calls/{call-id}/audioRoutingGroups',
    'post'
  >;
  'GET /communications/calls/{call-id}/audioRoutingGroups/{audioRoutingGroup-id}': Operation<
    '/communications/calls/{call-id}/audioRoutingGroups/{audioRoutingGroup-id}',
    'get'
  >;
  'PATCH /communications/calls/{call-id}/audioRoutingGroups/{audioRoutingGroup-id}': Operation<
    '/communications/calls/{call-id}/audioRoutingGroups/{audioRoutingGroup-id}',
    'patch'
  >;
  'DELETE /communications/calls/{call-id}/audioRoutingGroups/{audioRoutingGroup-id}': Operation<
    '/communications/calls/{call-id}/audioRoutingGroups/{audioRoutingGroup-id}',
    'delete'
  >;
  'POST /communications/calls/{call-id}/cancelMediaProcessing': Operation<
    '/communications/calls/{call-id}/cancelMediaProcessing',
    'post'
  >;
  'POST /communications/calls/{call-id}/changeScreenSharingRole': Operation<
    '/communications/calls/{call-id}/changeScreenSharingRole',
    'post'
  >;
  'GET /communications/calls/{call-id}/contentSharingSessions': Operation<
    '/communications/calls/{call-id}/contentSharingSessions',
    'get'
  >;
  'POST /communications/calls/{call-id}/contentSharingSessions': Operation<
    '/communications/calls/{call-id}/contentSharingSessions',
    'post'
  >;
  'GET /communications/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}': Operation<
    '/communications/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}',
    'get'
  >;
  'PATCH /communications/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}': Operation<
    '/communications/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}',
    'patch'
  >;
  'DELETE /communications/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}': Operation<
    '/communications/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}',
    'delete'
  >;
  'POST /communications/calls/{call-id}/keepAlive': Operation<
    '/communications/calls/{call-id}/keepAlive',
    'post'
  >;
  'POST /communications/calls/logTeleconferenceDeviceQuality': Operation<
    '/communications/calls/logTeleconferenceDeviceQuality',
    'post'
  >;
  'POST /communications/calls/{call-id}/mute': Operation<
    '/communications/calls/{call-id}/mute',
    'post'
  >;
  'GET /communications/calls/{call-id}/operations': Operation<
    '/communications/calls/{call-id}/operations',
    'get'
  >;
  'POST /communications/calls/{call-id}/operations': Operation<
    '/communications/calls/{call-id}/operations',
    'post'
  >;
  'GET /communications/calls/{call-id}/operations/{commsOperation-id}': Operation<
    '/communications/calls/{call-id}/operations/{commsOperation-id}',
    'get'
  >;
  'PATCH /communications/calls/{call-id}/operations/{commsOperation-id}': Operation<
    '/communications/calls/{call-id}/operations/{commsOperation-id}',
    'patch'
  >;
  'DELETE /communications/calls/{call-id}/operations/{commsOperation-id}': Operation<
    '/communications/calls/{call-id}/operations/{commsOperation-id}',
    'delete'
  >;
  'POST /communications/calls/{call-id}/playPrompt': Operation<
    '/communications/calls/{call-id}/playPrompt',
    'post'
  >;
  'POST /communications/calls/{call-id}/recordResponse': Operation<
    '/communications/calls/{call-id}/recordResponse',
    'post'
  >;
  'POST /communications/calls/{call-id}/redirect': Operation<
    '/communications/calls/{call-id}/redirect',
    'post'
  >;
  'POST /communications/calls/{call-id}/reject': Operation<
    '/communications/calls/{call-id}/reject',
    'post'
  >;
  'POST /communications/calls/{call-id}/sendDtmfTones': Operation<
    '/communications/calls/{call-id}/sendDtmfTones',
    'post'
  >;
  'POST /communications/calls/{call-id}/subscribeToTone': Operation<
    '/communications/calls/{call-id}/subscribeToTone',
    'post'
  >;
  'POST /communications/calls/{call-id}/transfer': Operation<
    '/communications/calls/{call-id}/transfer',
    'post'
  >;
  'POST /communications/calls/{call-id}/unmute': Operation<
    '/communications/calls/{call-id}/unmute',
    'post'
  >;
  'POST /communications/calls/{call-id}/updateRecordingStatus': Operation<
    '/communications/calls/{call-id}/updateRecordingStatus',
    'post'
  >;
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
    paramDefs: {
      header: ['If-Match'],
      path: ['call-id'],
    },
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
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
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
    paramDefs: {
      path: ['call-id'],
      query: ['$select', '$expand'],
    },
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
    paramDefs: {
      path: ['call-id'],
    },
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
  body: IEndpoints['POST /communications/calls']['body']
): EndpointRequest<IEndpoints['POST /communications/calls']['response']> {
  return {
    method: 'post',
    path: '/communications/calls',
    body,
  };
}

export const addLargeGalleryView = {
  /**
   * `POST /communications/calls/{call-id}/addLargeGalleryView`
   *
   * Add the large gallery view to a call.  For details about how to identify a large gallery view participant in a roster so that you can retrieve the relevant data to subscribe to the video feed, see Identify large gallery view participants in a roster.
   */
  create: function create(
    body: IEndpoints['POST /communications/calls/{call-id}/addLargeGalleryView']['body'],
    params?: IEndpoints['POST /communications/calls/{call-id}/addLargeGalleryView']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /communications/calls/{call-id}/addLargeGalleryView']['response']
  > {
    return {
      method: 'post',
      path: '/communications/calls/{call-id}/addLargeGalleryView',
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
   * `POST /communications/calls/{call-id}/answer`
   *
   * Enable a bot to answer an incoming call. The incoming call request can be an invitation from a participant in a group call or a peer-to-peer call. If an invitation to a group call is received, the notification contains the chatInfo and meetingInfo parameters. The bot is expected to answer, reject, or redirect the call before the call times out. The current timeout value is 15 seconds for regular scenarios and 5 seconds for policy-based recording scenarios. This API supports the following PSTN scenarios:
   */
  create: function create(
    body: IEndpoints['POST /communications/calls/{call-id}/answer']['body'],
    params?: IEndpoints['POST /communications/calls/{call-id}/answer']['parameters']
  ): EndpointRequest<IEndpoints['POST /communications/calls/{call-id}/answer']['response']> {
    return {
      method: 'post',
      path: '/communications/calls/{call-id}/answer',
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
   * `GET /communications/calls/{call-id}/audioRoutingGroups`
   *
   * Retrieve a list of audioRoutingGroup objects.
   */
  list: function list(
    params?: IEndpoints['GET /communications/calls/{call-id}/audioRoutingGroups']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /communications/calls/{call-id}/audioRoutingGroups']['response']
  > {
    return {
      method: 'get',
      path: '/communications/calls/{call-id}/audioRoutingGroups',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['call-id'],
      },
      params,
    };
  },
  /**
   * `POST /communications/calls/{call-id}/audioRoutingGroups`
   *
   * Create a new audioRoutingGroup.
   */
  create: function create(
    body: IEndpoints['POST /communications/calls/{call-id}/audioRoutingGroups']['body'],
    params?: IEndpoints['POST /communications/calls/{call-id}/audioRoutingGroups']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /communications/calls/{call-id}/audioRoutingGroups']['response']
  > {
    return {
      method: 'post',
      path: '/communications/calls/{call-id}/audioRoutingGroups',
      paramDefs: {
        path: ['call-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /communications/calls/{call-id}/audioRoutingGroups/{audioRoutingGroup-id}`
   *
   * Retrieve the properties and relationships of an audioRoutingGroup object.
   */
  get: function get(
    params?: IEndpoints['GET /communications/calls/{call-id}/audioRoutingGroups/{audioRoutingGroup-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /communications/calls/{call-id}/audioRoutingGroups/{audioRoutingGroup-id}']['response']
  > {
    return {
      method: 'get',
      path: '/communications/calls/{call-id}/audioRoutingGroups/{audioRoutingGroup-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['call-id', 'audioRoutingGroup-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /communications/calls/{call-id}/audioRoutingGroups/{audioRoutingGroup-id}`
   *
   * Modify sources and receivers of an audioRoutingGroup.
   */
  update: function update(
    body: IEndpoints['PATCH /communications/calls/{call-id}/audioRoutingGroups/{audioRoutingGroup-id}']['body'],
    params?: IEndpoints['PATCH /communications/calls/{call-id}/audioRoutingGroups/{audioRoutingGroup-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /communications/calls/{call-id}/audioRoutingGroups/{audioRoutingGroup-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/communications/calls/{call-id}/audioRoutingGroups/{audioRoutingGroup-id}',
      paramDefs: {
        path: ['call-id', 'audioRoutingGroup-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /communications/calls/{call-id}/audioRoutingGroups/{audioRoutingGroup-id}`
   *
   * Delete the specified audioRoutingGroup.
   */
  del: function del(
    params?: IEndpoints['DELETE /communications/calls/{call-id}/audioRoutingGroups/{audioRoutingGroup-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /communications/calls/{call-id}/audioRoutingGroups/{audioRoutingGroup-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/communications/calls/{call-id}/audioRoutingGroups/{audioRoutingGroup-id}',
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
   * `POST /communications/calls/{call-id}/cancelMediaProcessing`
   *
   * Cancels processing for any in-progress media operations. Media operations refer to the IVR operations playPrompt and recordResponse, which are by default queued to process in order. The cancelMediaProcessing method cancels any operation that is in-process as well as operations that are queued. For example, this method can be used to clean up the IVR operation queue for a new media operation. However, it will not cancel a subscribeToTone operation because it operates independent of any operation queue.
   */
  create: function create(
    body: IEndpoints['POST /communications/calls/{call-id}/cancelMediaProcessing']['body'],
    params?: IEndpoints['POST /communications/calls/{call-id}/cancelMediaProcessing']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /communications/calls/{call-id}/cancelMediaProcessing']['response']
  > {
    return {
      method: 'post',
      path: '/communications/calls/{call-id}/cancelMediaProcessing',
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
   * `POST /communications/calls/{call-id}/changeScreenSharingRole`
   *
   * Allow applications to share screen content with the participants of a group call.
   */
  create: function create(
    body: IEndpoints['POST /communications/calls/{call-id}/changeScreenSharingRole']['body'],
    params?: IEndpoints['POST /communications/calls/{call-id}/changeScreenSharingRole']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /communications/calls/{call-id}/changeScreenSharingRole']['response']
  > {
    return {
      method: 'post',
      path: '/communications/calls/{call-id}/changeScreenSharingRole',
      paramDefs: {
        path: ['call-id'],
      },
      params,
      body,
    };
  },
};

export const contentSharingSessions = {
  /**
   * `GET /communications/calls/{call-id}/contentSharingSessions`
   *
   * Retrieve a list of contentSharingSession objects in a call.
   */
  list: function list(
    params?: IEndpoints['GET /communications/calls/{call-id}/contentSharingSessions']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /communications/calls/{call-id}/contentSharingSessions']['response']
  > {
    return {
      method: 'get',
      path: '/communications/calls/{call-id}/contentSharingSessions',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['call-id'],
      },
      params,
    };
  },
  /**
   * `POST /communications/calls/{call-id}/contentSharingSessions`
   *
   */
  create: function create(
    body: IEndpoints['POST /communications/calls/{call-id}/contentSharingSessions']['body'],
    params?: IEndpoints['POST /communications/calls/{call-id}/contentSharingSessions']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /communications/calls/{call-id}/contentSharingSessions']['response']
  > {
    return {
      method: 'post',
      path: '/communications/calls/{call-id}/contentSharingSessions',
      paramDefs: {
        path: ['call-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /communications/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}`
   *
   * Retrieve the properties of a contentSharingSession object in a call.
   */
  get: function get(
    params?: IEndpoints['GET /communications/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /communications/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}']['response']
  > {
    return {
      method: 'get',
      path: '/communications/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['call-id', 'contentSharingSession-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /communications/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /communications/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}']['body'],
    params?: IEndpoints['PATCH /communications/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /communications/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/communications/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}',
      paramDefs: {
        path: ['call-id', 'contentSharingSession-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /communications/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /communications/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /communications/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/communications/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['call-id', 'contentSharingSession-id'],
      },
      params,
    };
  },
};

export const keepAlive = {
  /**
   * `POST /communications/calls/{call-id}/keepAlive`
   *
   * Make a request to this API every 15 to 45 minutes to ensure that an ongoing call remains active. A call that does not receive this request within 45 minutes is considered inactive and will subsequently end. At least one successful request must be made within 45 minutes of the previous request, or the start of the call. We recommend that you send a request in shorter time intervals (every 15 minutes). Make sure that these requests are successful to prevent the call from timing out and ending. Attempting to send a request to a call that has already ended will result in a 404 Not-Found error. The resources related to the call should be cleaned up on the application side.
   */
  create: function create(
    params?: IEndpoints['POST /communications/calls/{call-id}/keepAlive']['parameters']
  ): EndpointRequest<IEndpoints['POST /communications/calls/{call-id}/keepAlive']['response']> {
    return {
      method: 'post',
      path: '/communications/calls/{call-id}/keepAlive',
      paramDefs: {
        path: ['call-id'],
      },
      params,
    };
  },
};

export const logTeleconferenceDeviceQuality = {
  /**
   * `POST /communications/calls/logTeleconferenceDeviceQuality`
   *
   * Log video teleconferencing device quality data. The Cloud Video Interop (CVI) bot represents video teleconferencing (VTC) devices and acts as a back-to-back agent for a VTC device in a conference call. Because a CVI bot is in the middle of the VTC and Microsoft Teams infrastructure as a VTC proxy, it has two media legs. One media leg is between the CVI bot and Teams infrastructure, such as Teams conference server or a Teams client. The other media leg is between the CVI bot and the VTC device.  The third-party partners own the VTC media leg and the Teams infrastructure cannot access the quality data of the third-party call leg.  This method is only for the CVI partners to provide their media quality data.
   */
  create: function create(
    body: IEndpoints['POST /communications/calls/logTeleconferenceDeviceQuality']['body']
  ): EndpointRequest<
    IEndpoints['POST /communications/calls/logTeleconferenceDeviceQuality']['response']
  > {
    return {
      method: 'post',
      path: '/communications/calls/logTeleconferenceDeviceQuality',
      body,
    };
  },
};

export const mute = {
  /**
   * `POST /communications/calls/{call-id}/mute`
   *
   * Allows the application to mute itself. This is a server mute, meaning that the server will drop all audio packets for this participant, even if the participant continues to stream audio. For more details about how to handle mute operations, see muteParticipantOperation
   */
  create: function create(
    body: IEndpoints['POST /communications/calls/{call-id}/mute']['body'],
    params?: IEndpoints['POST /communications/calls/{call-id}/mute']['parameters']
  ): EndpointRequest<IEndpoints['POST /communications/calls/{call-id}/mute']['response']> {
    return {
      method: 'post',
      path: '/communications/calls/{call-id}/mute',
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
   * `GET /communications/calls/{call-id}/operations`
   *
   * Get the status of an operation that adds the large gallery view to a call.
   */
  list: function list(
    params?: IEndpoints['GET /communications/calls/{call-id}/operations']['parameters']
  ): EndpointRequest<IEndpoints['GET /communications/calls/{call-id}/operations']['response']> {
    return {
      method: 'get',
      path: '/communications/calls/{call-id}/operations',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['call-id'],
      },
      params,
    };
  },
  /**
   * `POST /communications/calls/{call-id}/operations`
   *
   */
  create: function create(
    body: IEndpoints['POST /communications/calls/{call-id}/operations']['body'],
    params?: IEndpoints['POST /communications/calls/{call-id}/operations']['parameters']
  ): EndpointRequest<IEndpoints['POST /communications/calls/{call-id}/operations']['response']> {
    return {
      method: 'post',
      path: '/communications/calls/{call-id}/operations',
      paramDefs: {
        path: ['call-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /communications/calls/{call-id}/operations/{commsOperation-id}`
   *
   * Get the status of an operation that adds the large gallery view to a call.
   */
  get: function get(
    params?: IEndpoints['GET /communications/calls/{call-id}/operations/{commsOperation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /communications/calls/{call-id}/operations/{commsOperation-id}']['response']
  > {
    return {
      method: 'get',
      path: '/communications/calls/{call-id}/operations/{commsOperation-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['call-id', 'commsOperation-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /communications/calls/{call-id}/operations/{commsOperation-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /communications/calls/{call-id}/operations/{commsOperation-id}']['body'],
    params?: IEndpoints['PATCH /communications/calls/{call-id}/operations/{commsOperation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /communications/calls/{call-id}/operations/{commsOperation-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/communications/calls/{call-id}/operations/{commsOperation-id}',
      paramDefs: {
        path: ['call-id', 'commsOperation-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /communications/calls/{call-id}/operations/{commsOperation-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /communications/calls/{call-id}/operations/{commsOperation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /communications/calls/{call-id}/operations/{commsOperation-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/communications/calls/{call-id}/operations/{commsOperation-id}',
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
   * `POST /communications/calls/{call-id}/playPrompt`
   *
   * Play a prompt in the call. For more information about how to handle operations, see commsOperation
   */
  create: function create(
    body: IEndpoints['POST /communications/calls/{call-id}/playPrompt']['body'],
    params?: IEndpoints['POST /communications/calls/{call-id}/playPrompt']['parameters']
  ): EndpointRequest<IEndpoints['POST /communications/calls/{call-id}/playPrompt']['response']> {
    return {
      method: 'post',
      path: '/communications/calls/{call-id}/playPrompt',
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
  * `POST /communications/calls/{call-id}/recordResponse`
  *
  * Records a short audio response from the caller.
A bot can utilize this to capture a voice response from a caller after they are prompted for a response. For further information on how to handle operations, please review commsOperation This action is not intended to record the entire call. The maximum length of recording is 2 minutes. The recording is not saved permanently by the Cloud Communications Platform and is discarded shortly after the call ends. The bot must download the recording promptly after the recording operation finishes by using the recordingLocation value that&#x27;s given in the completed notification.
  */
  create: function create(
    body: IEndpoints['POST /communications/calls/{call-id}/recordResponse']['body'],
    params?: IEndpoints['POST /communications/calls/{call-id}/recordResponse']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /communications/calls/{call-id}/recordResponse']['response']
  > {
    return {
      method: 'post',
      path: '/communications/calls/{call-id}/recordResponse',
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
   * `POST /communications/calls/{call-id}/redirect`
   *
   * Redirect an incoming call that hasn&#x27;t been answered or rejected yet. The terms &#x27;redirecting&#x27; and &#x27;forwarding&#x27; a call are used interchangeably. The bot is expected to redirect the call before the call times out. The current timeout value is 15 seconds.
   */
  create: function create(
    body: IEndpoints['POST /communications/calls/{call-id}/redirect']['body'],
    params?: IEndpoints['POST /communications/calls/{call-id}/redirect']['parameters']
  ): EndpointRequest<IEndpoints['POST /communications/calls/{call-id}/redirect']['response']> {
    return {
      method: 'post',
      path: '/communications/calls/{call-id}/redirect',
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
   * `POST /communications/calls/{call-id}/reject`
   *
   * Enable a bot to reject an incoming call. The incoming call request can be an invite from a participant in a group call or a peer-to-peer call. If an invite to a group call is received, the notification will contain the chatInfo and meetingInfo parameters. The bot is expected to answer or reject the call before the call times out. The current timeout value is 15 seconds. This API does not end existing calls that have already been answered. Use delete call to end a call.
   */
  create: function create(
    body: IEndpoints['POST /communications/calls/{call-id}/reject']['body'],
    params?: IEndpoints['POST /communications/calls/{call-id}/reject']['parameters']
  ): EndpointRequest<IEndpoints['POST /communications/calls/{call-id}/reject']['response']> {
    return {
      method: 'post',
      path: '/communications/calls/{call-id}/reject',
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
   * `POST /communications/calls/{call-id}/sendDtmfTones`
   *
   */
  create: function create(
    body: IEndpoints['POST /communications/calls/{call-id}/sendDtmfTones']['body'],
    params?: IEndpoints['POST /communications/calls/{call-id}/sendDtmfTones']['parameters']
  ): EndpointRequest<IEndpoints['POST /communications/calls/{call-id}/sendDtmfTones']['response']> {
    return {
      method: 'post',
      path: '/communications/calls/{call-id}/sendDtmfTones',
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
   * `POST /communications/calls/{call-id}/subscribeToTone`
   *
   * Subscribe to DTMF (dual-tone multi-frequency signaling) which allows you to be notified when the user presses keys on a &#x27;dialpad&#x27;.
   */
  create: function create(
    body: IEndpoints['POST /communications/calls/{call-id}/subscribeToTone']['body'],
    params?: IEndpoints['POST /communications/calls/{call-id}/subscribeToTone']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /communications/calls/{call-id}/subscribeToTone']['response']
  > {
    return {
      method: 'post',
      path: '/communications/calls/{call-id}/subscribeToTone',
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
   * `POST /communications/calls/{call-id}/transfer`
   *
   * Transfer an active peer-to-peer call or group call. A consultative transfer means that the transferor can inform the person they want to transfer the call to (the transferee), before the transfer is made. This is opposed to transfering the call directly.
   */
  create: function create(
    body: IEndpoints['POST /communications/calls/{call-id}/transfer']['body'],
    params?: IEndpoints['POST /communications/calls/{call-id}/transfer']['parameters']
  ): EndpointRequest<IEndpoints['POST /communications/calls/{call-id}/transfer']['response']> {
    return {
      method: 'post',
      path: '/communications/calls/{call-id}/transfer',
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
   * `POST /communications/calls/{call-id}/unmute`
   *
   * Allow the application to unmute itself. This is a server unmute, meaning that the server will start sending audio packets for this participant to other participants again. For more information about how to handle unmute operations, see unmuteParticipantOperation.
   */
  create: function create(
    body: IEndpoints['POST /communications/calls/{call-id}/unmute']['body'],
    params?: IEndpoints['POST /communications/calls/{call-id}/unmute']['parameters']
  ): EndpointRequest<IEndpoints['POST /communications/calls/{call-id}/unmute']['response']> {
    return {
      method: 'post',
      path: '/communications/calls/{call-id}/unmute',
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
   * `POST /communications/calls/{call-id}/updateRecordingStatus`
   *
   * Update the application&#x27;s recording status associated with a call. This requires the use of the Teams policy-based recording solution.
   */
  create: function create(
    body: IEndpoints['POST /communications/calls/{call-id}/updateRecordingStatus']['body'],
    params?: IEndpoints['POST /communications/calls/{call-id}/updateRecordingStatus']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /communications/calls/{call-id}/updateRecordingStatus']['response']
  > {
    return {
      method: 'post',
      path: '/communications/calls/{call-id}/updateRecordingStatus',
      paramDefs: {
        path: ['call-id'],
      },
      params,
      body,
    };
  },
};
