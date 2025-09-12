import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /app/calls/{call-id}/participants/{participant-id}': Operation<
    '/app/calls/{call-id}/participants/{participant-id}',
    'delete'
  >;
  'GET /app/calls/{call-id}/participants': Operation<'/app/calls/{call-id}/participants', 'get'>;
  'GET /app/calls/{call-id}/participants/{participant-id}': Operation<
    '/app/calls/{call-id}/participants/{participant-id}',
    'get'
  >;
  'PATCH /app/calls/{call-id}/participants/{participant-id}': Operation<
    '/app/calls/{call-id}/participants/{participant-id}',
    'patch'
  >;
  'POST /app/calls/{call-id}/participants': Operation<'/app/calls/{call-id}/participants', 'post'>;
  'POST /app/calls/{call-id}/participants/invite': Operation<
    '/app/calls/{call-id}/participants/invite',
    'post'
  >;
  'POST /app/calls/{call-id}/participants/{participant-id}/mute': Operation<
    '/app/calls/{call-id}/participants/{participant-id}/mute',
    'post'
  >;
  'POST /app/calls/{call-id}/participants/muteAll': Operation<
    '/app/calls/{call-id}/participants/muteAll',
    'post'
  >;
  'POST /app/calls/{call-id}/participants/{participant-id}/startHoldMusic': Operation<
    '/app/calls/{call-id}/participants/{participant-id}/startHoldMusic',
    'post'
  >;
  'POST /app/calls/{call-id}/participants/{participant-id}/stopHoldMusic': Operation<
    '/app/calls/{call-id}/participants/{participant-id}/stopHoldMusic',
    'post'
  >;
}

/**
 * `DELETE /app/calls/{call-id}/participants/{participant-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /app/calls/{call-id}/participants/{participant-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /app/calls/{call-id}/participants/{participant-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/app/calls/{call-id}/participants/{participant-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['call-id', 'participant-id'],
    },
    params,
  };
}

/**
 * `GET /app/calls/{call-id}/participants`
 *
 */
export function list(
  params?: IEndpoints['GET /app/calls/{call-id}/participants']['parameters']
): EndpointRequest<IEndpoints['GET /app/calls/{call-id}/participants']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/app/calls/{call-id}/participants',
    paramDefs: {
      path: ['call-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /app/calls/{call-id}/participants/{participant-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /app/calls/{call-id}/participants/{participant-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /app/calls/{call-id}/participants/{participant-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/app/calls/{call-id}/participants/{participant-id}',
    paramDefs: {
      path: ['call-id', 'participant-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /app/calls/{call-id}/participants/{participant-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /app/calls/{call-id}/participants/{participant-id}']['body'],
  params?: IEndpoints['PATCH /app/calls/{call-id}/participants/{participant-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /app/calls/{call-id}/participants/{participant-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/app/calls/{call-id}/participants/{participant-id}',
    paramDefs: {
      path: ['call-id', 'participant-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /app/calls/{call-id}/participants`
 *
 */
export function create(
  body: IEndpoints['POST /app/calls/{call-id}/participants']['body'],
  params?: IEndpoints['POST /app/calls/{call-id}/participants']['parameters']
): EndpointRequest<IEndpoints['POST /app/calls/{call-id}/participants']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/app/calls/{call-id}/participants',
    paramDefs: {
      path: ['call-id'],
    },
    params,
    body,
  };
}

export const invite = {
  /**
   * `POST /app/calls/{call-id}/participants/invite`
   *
   * Delete a specific participant in a call. In some situations, it is appropriate for an application to remove a participant from an active call. This action can be done before or after the participant answers the call. When an active caller is removed, they are immediately dropped from the call with no pre- or post-removal notification. When an invited participant is removed, any outstanding add participant request is canceled.
   */
  create: function create(
    body: IEndpoints['POST /app/calls/{call-id}/participants/invite']['body'],
    params?: IEndpoints['POST /app/calls/{call-id}/participants/invite']['parameters']
  ): EndpointRequest<IEndpoints['POST /app/calls/{call-id}/participants/invite']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/app/calls/{call-id}/participants/invite',
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
   * `POST /app/calls/{call-id}/participants/{participant-id}/mute`
   *
   * Mute a specific participant in the call. This is a server mute, meaning that the server will drop all audio packets for this participant, even if the participant continues to stream audio. For more information about how to handle mute operations, see muteParticipantOperation.
   */
  create: function create(
    body: IEndpoints['POST /app/calls/{call-id}/participants/{participant-id}/mute']['body'],
    params?: IEndpoints['POST /app/calls/{call-id}/participants/{participant-id}/mute']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /app/calls/{call-id}/participants/{participant-id}/mute']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/app/calls/{call-id}/participants/{participant-id}/mute',
      paramDefs: {
        path: ['call-id', 'participant-id'],
      },
      params,
      body,
    };
  },
};

export const muteAll = {
  /**
   * `POST /app/calls/{call-id}/participants/muteAll`
   *
   * Mute all participants in the call.
   */
  create: function create(
    body: IEndpoints['POST /app/calls/{call-id}/participants/muteAll']['body'],
    params?: IEndpoints['POST /app/calls/{call-id}/participants/muteAll']['parameters']
  ): EndpointRequest<IEndpoints['POST /app/calls/{call-id}/participants/muteAll']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/app/calls/{call-id}/participants/muteAll',
      paramDefs: {
        path: ['call-id'],
      },
      params,
      body,
    };
  },
};

export const startHoldMusic = {
  /**
   * `POST /app/calls/{call-id}/participants/{participant-id}/startHoldMusic`
   *
   * Put a participant on hold and play music in the background.
   */
  create: function create(
    body: IEndpoints['POST /app/calls/{call-id}/participants/{participant-id}/startHoldMusic']['body'],
    params?: IEndpoints['POST /app/calls/{call-id}/participants/{participant-id}/startHoldMusic']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /app/calls/{call-id}/participants/{participant-id}/startHoldMusic']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/app/calls/{call-id}/participants/{participant-id}/startHoldMusic',
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
   * `POST /app/calls/{call-id}/participants/{participant-id}/stopHoldMusic`
   *
   * Reincorporate a participant previously put on hold to the call.
   */
  create: function create(
    body: IEndpoints['POST /app/calls/{call-id}/participants/{participant-id}/stopHoldMusic']['body'],
    params?: IEndpoints['POST /app/calls/{call-id}/participants/{participant-id}/stopHoldMusic']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /app/calls/{call-id}/participants/{participant-id}/stopHoldMusic']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/app/calls/{call-id}/participants/{participant-id}/stopHoldMusic',
      paramDefs: {
        path: ['call-id', 'participant-id'],
      },
      params,
      body,
    };
  },
};
