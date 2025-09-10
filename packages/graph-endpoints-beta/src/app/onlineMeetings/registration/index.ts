import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /app/onlineMeetings/{onlineMeeting-id}/registration': Operation<
    '/app/onlineMeetings/{onlineMeeting-id}/registration',
    'delete'
  >;
  'GET /app/onlineMeetings/{onlineMeeting-id}/registration': Operation<
    '/app/onlineMeetings/{onlineMeeting-id}/registration',
    'get'
  >;
  'PATCH /app/onlineMeetings/{onlineMeeting-id}/registration': Operation<
    '/app/onlineMeetings/{onlineMeeting-id}/registration',
    'patch'
  >;
  'GET /app/onlineMeetings/{onlineMeeting-id}/registration/customQuestions': Operation<
    '/app/onlineMeetings/{onlineMeeting-id}/registration/customQuestions',
    'get'
  >;
  'POST /app/onlineMeetings/{onlineMeeting-id}/registration/customQuestions': Operation<
    '/app/onlineMeetings/{onlineMeeting-id}/registration/customQuestions',
    'post'
  >;
  'GET /app/onlineMeetings/{onlineMeeting-id}/registration/customQuestions/{meetingRegistrationQuestion-id}': Operation<
    '/app/onlineMeetings/{onlineMeeting-id}/registration/customQuestions/{meetingRegistrationQuestion-id}',
    'get'
  >;
  'PATCH /app/onlineMeetings/{onlineMeeting-id}/registration/customQuestions/{meetingRegistrationQuestion-id}': Operation<
    '/app/onlineMeetings/{onlineMeeting-id}/registration/customQuestions/{meetingRegistrationQuestion-id}',
    'patch'
  >;
  'DELETE /app/onlineMeetings/{onlineMeeting-id}/registration/customQuestions/{meetingRegistrationQuestion-id}': Operation<
    '/app/onlineMeetings/{onlineMeeting-id}/registration/customQuestions/{meetingRegistrationQuestion-id}',
    'delete'
  >;
  'GET /app/onlineMeetings/{onlineMeeting-id}/registration/registrants': Operation<
    '/app/onlineMeetings/{onlineMeeting-id}/registration/registrants',
    'get'
  >;
  'POST /app/onlineMeetings/{onlineMeeting-id}/registration/registrants': Operation<
    '/app/onlineMeetings/{onlineMeeting-id}/registration/registrants',
    'post'
  >;
  'GET /app/onlineMeetings/{onlineMeeting-id}/registration/registrants/{meetingRegistrantBase-id}': Operation<
    '/app/onlineMeetings/{onlineMeeting-id}/registration/registrants/{meetingRegistrantBase-id}',
    'get'
  >;
  'PATCH /app/onlineMeetings/{onlineMeeting-id}/registration/registrants/{meetingRegistrantBase-id}': Operation<
    '/app/onlineMeetings/{onlineMeeting-id}/registration/registrants/{meetingRegistrantBase-id}',
    'patch'
  >;
  'DELETE /app/onlineMeetings/{onlineMeeting-id}/registration/registrants/{meetingRegistrantBase-id}': Operation<
    '/app/onlineMeetings/{onlineMeeting-id}/registration/registrants/{meetingRegistrantBase-id}',
    'delete'
  >;
}

/**
 * `DELETE /app/onlineMeetings/{onlineMeeting-id}/registration`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /app/onlineMeetings/{onlineMeeting-id}/registration']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /app/onlineMeetings/{onlineMeeting-id}/registration']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/app/onlineMeetings/{onlineMeeting-id}/registration',
    paramDefs: {
      header: ['If-Match'],
      path: ['onlineMeeting-id'],
    },
    params,
  };
}

/**
 * `GET /app/onlineMeetings/{onlineMeeting-id}/registration`
 *
 * The registration that is enabled for an online meeting. One online meeting can only have one registration enabled.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /app/onlineMeetings/{onlineMeeting-id}/registration']['parameters']
): EndpointRequest<
  IEndpoints['GET /app/onlineMeetings/{onlineMeeting-id}/registration']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/app/onlineMeetings/{onlineMeeting-id}/registration',
    paramDefs: {
      path: ['onlineMeeting-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /app/onlineMeetings/{onlineMeeting-id}/registration`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /app/onlineMeetings/{onlineMeeting-id}/registration']['body'],
  params?: IEndpoints['PATCH /app/onlineMeetings/{onlineMeeting-id}/registration']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /app/onlineMeetings/{onlineMeeting-id}/registration']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/app/onlineMeetings/{onlineMeeting-id}/registration',
    paramDefs: {
      path: ['onlineMeeting-id'],
    },
    params,
    body,
  };
}

export const customQuestions = {
  /**
   * `GET /app/onlineMeetings/{onlineMeeting-id}/registration/customQuestions`
   *
   * Custom registration questions.
   * @deprecated
   */
  list: function list(
    params?: IEndpoints['GET /app/onlineMeetings/{onlineMeeting-id}/registration/customQuestions']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /app/onlineMeetings/{onlineMeeting-id}/registration/customQuestions']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/app/onlineMeetings/{onlineMeeting-id}/registration/customQuestions',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['onlineMeeting-id'],
      },
      params,
    };
  },
  /**
   * `POST /app/onlineMeetings/{onlineMeeting-id}/registration/customQuestions`
   *
   * @deprecated
   */
  create: function create(
    body: IEndpoints['POST /app/onlineMeetings/{onlineMeeting-id}/registration/customQuestions']['body'],
    params?: IEndpoints['POST /app/onlineMeetings/{onlineMeeting-id}/registration/customQuestions']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /app/onlineMeetings/{onlineMeeting-id}/registration/customQuestions']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/app/onlineMeetings/{onlineMeeting-id}/registration/customQuestions',
      paramDefs: {
        path: ['onlineMeeting-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /app/onlineMeetings/{onlineMeeting-id}/registration/customQuestions/{meetingRegistrationQuestion-id}`
   *
   * Custom registration questions.
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /app/onlineMeetings/{onlineMeeting-id}/registration/customQuestions/{meetingRegistrationQuestion-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /app/onlineMeetings/{onlineMeeting-id}/registration/customQuestions/{meetingRegistrationQuestion-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/app/onlineMeetings/{onlineMeeting-id}/registration/customQuestions/{meetingRegistrationQuestion-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['onlineMeeting-id', 'meetingRegistrationQuestion-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /app/onlineMeetings/{onlineMeeting-id}/registration/customQuestions/{meetingRegistrationQuestion-id}`
   *
   * @deprecated
   */
  update: function update(
    body: IEndpoints['PATCH /app/onlineMeetings/{onlineMeeting-id}/registration/customQuestions/{meetingRegistrationQuestion-id}']['body'],
    params?: IEndpoints['PATCH /app/onlineMeetings/{onlineMeeting-id}/registration/customQuestions/{meetingRegistrationQuestion-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /app/onlineMeetings/{onlineMeeting-id}/registration/customQuestions/{meetingRegistrationQuestion-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/app/onlineMeetings/{onlineMeeting-id}/registration/customQuestions/{meetingRegistrationQuestion-id}',
      paramDefs: {
        path: ['onlineMeeting-id', 'meetingRegistrationQuestion-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /app/onlineMeetings/{onlineMeeting-id}/registration/customQuestions/{meetingRegistrationQuestion-id}`
   *
   * @deprecated
   */
  del: function del(
    params?: IEndpoints['DELETE /app/onlineMeetings/{onlineMeeting-id}/registration/customQuestions/{meetingRegistrationQuestion-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /app/onlineMeetings/{onlineMeeting-id}/registration/customQuestions/{meetingRegistrationQuestion-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/app/onlineMeetings/{onlineMeeting-id}/registration/customQuestions/{meetingRegistrationQuestion-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['onlineMeeting-id', 'meetingRegistrationQuestion-id'],
      },
      params,
    };
  },
};

export const registrants = {
  /**
   * `GET /app/onlineMeetings/{onlineMeeting-id}/registration/registrants`
   *
   * Registrants of the online meeting.
   * @deprecated
   */
  list: function list(
    params?: IEndpoints['GET /app/onlineMeetings/{onlineMeeting-id}/registration/registrants']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /app/onlineMeetings/{onlineMeeting-id}/registration/registrants']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/app/onlineMeetings/{onlineMeeting-id}/registration/registrants',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['onlineMeeting-id'],
      },
      params,
    };
  },
  /**
   * `POST /app/onlineMeetings/{onlineMeeting-id}/registration/registrants`
   *
   * @deprecated
   */
  create: function create(
    body: IEndpoints['POST /app/onlineMeetings/{onlineMeeting-id}/registration/registrants']['body'],
    params?: IEndpoints['POST /app/onlineMeetings/{onlineMeeting-id}/registration/registrants']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /app/onlineMeetings/{onlineMeeting-id}/registration/registrants']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/app/onlineMeetings/{onlineMeeting-id}/registration/registrants',
      paramDefs: {
        path: ['onlineMeeting-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /app/onlineMeetings/{onlineMeeting-id}/registration/registrants/{meetingRegistrantBase-id}`
   *
   * Registrants of the online meeting.
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /app/onlineMeetings/{onlineMeeting-id}/registration/registrants/{meetingRegistrantBase-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /app/onlineMeetings/{onlineMeeting-id}/registration/registrants/{meetingRegistrantBase-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/app/onlineMeetings/{onlineMeeting-id}/registration/registrants/{meetingRegistrantBase-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['onlineMeeting-id', 'meetingRegistrantBase-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /app/onlineMeetings/{onlineMeeting-id}/registration/registrants/{meetingRegistrantBase-id}`
   *
   * @deprecated
   */
  update: function update(
    body: IEndpoints['PATCH /app/onlineMeetings/{onlineMeeting-id}/registration/registrants/{meetingRegistrantBase-id}']['body'],
    params?: IEndpoints['PATCH /app/onlineMeetings/{onlineMeeting-id}/registration/registrants/{meetingRegistrantBase-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /app/onlineMeetings/{onlineMeeting-id}/registration/registrants/{meetingRegistrantBase-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/app/onlineMeetings/{onlineMeeting-id}/registration/registrants/{meetingRegistrantBase-id}',
      paramDefs: {
        path: ['onlineMeeting-id', 'meetingRegistrantBase-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /app/onlineMeetings/{onlineMeeting-id}/registration/registrants/{meetingRegistrantBase-id}`
   *
   * @deprecated
   */
  del: function del(
    params?: IEndpoints['DELETE /app/onlineMeetings/{onlineMeeting-id}/registration/registrants/{meetingRegistrantBase-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /app/onlineMeetings/{onlineMeeting-id}/registration/registrants/{meetingRegistrantBase-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/app/onlineMeetings/{onlineMeeting-id}/registration/registrants/{meetingRegistrantBase-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['onlineMeeting-id', 'meetingRegistrantBase-id'],
      },
      params,
    };
  },
};
