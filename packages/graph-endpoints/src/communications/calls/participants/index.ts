import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /communications/calls/{call-id}/participants/{participant-id}': Operation<
    '/communications/calls/{call-id}/participants/{participant-id}',
    'delete'
  >;
  'GET /communications/calls/{call-id}/participants': Operation<
    '/communications/calls/{call-id}/participants',
    'get'
  >;
  'GET /communications/calls/{call-id}/participants/{participant-id}': Operation<
    '/communications/calls/{call-id}/participants/{participant-id}',
    'get'
  >;
  'PATCH /communications/calls/{call-id}/participants/{participant-id}': Operation<
    '/communications/calls/{call-id}/participants/{participant-id}',
    'patch'
  >;
  'POST /communications/calls/{call-id}/participants': Operation<
    '/communications/calls/{call-id}/participants',
    'post'
  >;
  'POST /communications/calls/{call-id}/participants/invite': Operation<
    '/communications/calls/{call-id}/participants/invite',
    'post'
  >;
  'POST /communications/calls/{call-id}/participants/{participant-id}/mute': Operation<
    '/communications/calls/{call-id}/participants/{participant-id}/mute',
    'post'
  >;
  'POST /communications/calls/{call-id}/participants/{participant-id}/startHoldMusic': Operation<
    '/communications/calls/{call-id}/participants/{participant-id}/startHoldMusic',
    'post'
  >;
  'POST /communications/calls/{call-id}/participants/{participant-id}/stopHoldMusic': Operation<
    '/communications/calls/{call-id}/participants/{participant-id}/stopHoldMusic',
    'post'
  >;
}

/**
 * `DELETE /communications/calls/{call-id}/participants/{participant-id}`
 *
 * Delete a specific participant in a call. In some situations, it is appropriate for an application to remove a participant from an active call. This action can be done before or after the participant answers the call. When an active caller is removed, they are immediately dropped from the call with no pre- or post-removal notification. When an invited participant is removed, any outstanding add participant request is canceled.
 */
export function del(
  params?: IEndpoints['DELETE /communications/calls/{call-id}/participants/{participant-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /communications/calls/{call-id}/participants/{participant-id}']['response']
> {
  return {
    method: 'delete',
    path: '/communications/calls/{call-id}/participants/{participant-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['call-id', 'participant-id'],
    },
    params,
  };
}

/**
 * `GET /communications/calls/{call-id}/participants`
 *
 * Retrieve a list of participant objects in the call.
 */
export function list(
  params?: IEndpoints['GET /communications/calls/{call-id}/participants']['parameters']
): EndpointRequest<IEndpoints['GET /communications/calls/{call-id}/participants']['response']> {
  return {
    method: 'get',
    path: '/communications/calls/{call-id}/participants',
    paramDefs: {
      path: ['call-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /communications/calls/{call-id}/participants/{participant-id}`
 *
 * Retrieve the properties and relationships of a participant object.
 */
export function get(
  params?: IEndpoints['GET /communications/calls/{call-id}/participants/{participant-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /communications/calls/{call-id}/participants/{participant-id}']['response']
> {
  return {
    method: 'get',
    path: '/communications/calls/{call-id}/participants/{participant-id}',
    paramDefs: {
      path: ['call-id', 'participant-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /communications/calls/{call-id}/participants/{participant-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /communications/calls/{call-id}/participants/{participant-id}']['body'],
  params?: IEndpoints['PATCH /communications/calls/{call-id}/participants/{participant-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /communications/calls/{call-id}/participants/{participant-id}']['response']
> {
  return {
    method: 'patch',
    path: '/communications/calls/{call-id}/participants/{participant-id}',
    paramDefs: {
      path: ['call-id', 'participant-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /communications/calls/{call-id}/participants`
 *
 */
export function create(
  body: IEndpoints['POST /communications/calls/{call-id}/participants']['body'],
  params?: IEndpoints['POST /communications/calls/{call-id}/participants']['parameters']
): EndpointRequest<IEndpoints['POST /communications/calls/{call-id}/participants']['response']> {
  return {
    method: 'post',
    path: '/communications/calls/{call-id}/participants',
    paramDefs: {
      path: ['call-id'],
    },
    params,
    body,
  };
}

export const invite = {
  /**
   * `POST /communications/calls/{call-id}/participants/invite`
   *
   * Delete a specific participant in a call. In some situations, it is appropriate for an application to remove a participant from an active call. This action can be done before or after the participant answers the call. When an active caller is removed, they are immediately dropped from the call with no pre- or post-removal notification. When an invited participant is removed, any outstanding add participant request is canceled.
   */
  create: function create(
    body: IEndpoints['POST /communications/calls/{call-id}/participants/invite']['body'],
    params?: IEndpoints['POST /communications/calls/{call-id}/participants/invite']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /communications/calls/{call-id}/participants/invite']['response']
  > {
    return {
      method: 'post',
      path: '/communications/calls/{call-id}/participants/invite',
      paramDefs: {
        path: ['call-id'],
      },
      params,
      body,
    };
  },
};

export const mute = {
  /**
   * `POST /communications/calls/{call-id}/participants/{participant-id}/mute`
   *
   * Mute a specific participant in the call. This is a server mute, meaning that the server will drop all audio packets for this participant, even if the participant continues to stream audio. For more information about how to handle mute operations, see muteParticipantOperation.
   */
  create: function create(
    body: IEndpoints['POST /communications/calls/{call-id}/participants/{participant-id}/mute']['body'],
    params?: IEndpoints['POST /communications/calls/{call-id}/participants/{participant-id}/mute']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /communications/calls/{call-id}/participants/{participant-id}/mute']['response']
  > {
    return {
      method: 'post',
      path: '/communications/calls/{call-id}/participants/{participant-id}/mute',
      paramDefs: {
        path: ['call-id', 'participant-id'],
      },
      params,
      body,
    };
  },
};

export const startHoldMusic = {
  /**
   * `POST /communications/calls/{call-id}/participants/{participant-id}/startHoldMusic`
   *
   * Put a participant on hold and play music in the background.
   */
  create: function create(
    body: IEndpoints['POST /communications/calls/{call-id}/participants/{participant-id}/startHoldMusic']['body'],
    params?: IEndpoints['POST /communications/calls/{call-id}/participants/{participant-id}/startHoldMusic']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /communications/calls/{call-id}/participants/{participant-id}/startHoldMusic']['response']
  > {
    return {
      method: 'post',
      path: '/communications/calls/{call-id}/participants/{participant-id}/startHoldMusic',
      paramDefs: {
        path: ['call-id', 'participant-id'],
      },
      params,
      body,
    };
  },
};

export const stopHoldMusic = {
  /**
   * `POST /communications/calls/{call-id}/participants/{participant-id}/stopHoldMusic`
   *
   * Reincorporate a participant previously put on hold to the call.
   */
  create: function create(
    body: IEndpoints['POST /communications/calls/{call-id}/participants/{participant-id}/stopHoldMusic']['body'],
    params?: IEndpoints['POST /communications/calls/{call-id}/participants/{participant-id}/stopHoldMusic']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /communications/calls/{call-id}/participants/{participant-id}/stopHoldMusic']['response']
  > {
    return {
      method: 'post',
      path: '/communications/calls/{call-id}/participants/{participant-id}/stopHoldMusic',
      paramDefs: {
        path: ['call-id', 'participant-id'],
      },
      params,
      body,
    };
  },
};
