import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /communications/onlineMeetings/{onlineMeeting-id}/registration': Operation<
    '/communications/onlineMeetings/{onlineMeeting-id}/registration',
    'delete'
  >;
  'GET /communications/onlineMeetings/{onlineMeeting-id}/registration': Operation<
    '/communications/onlineMeetings/{onlineMeeting-id}/registration',
    'get'
  >;
  'PATCH /communications/onlineMeetings/{onlineMeeting-id}/registration': Operation<
    '/communications/onlineMeetings/{onlineMeeting-id}/registration',
    'patch'
  >;
  'GET /communications/onlineMeetings/{onlineMeeting-id}/registration/customQuestions': Operation<
    '/communications/onlineMeetings/{onlineMeeting-id}/registration/customQuestions',
    'get'
  >;
  'POST /communications/onlineMeetings/{onlineMeeting-id}/registration/customQuestions': Operation<
    '/communications/onlineMeetings/{onlineMeeting-id}/registration/customQuestions',
    'post'
  >;
  'GET /communications/onlineMeetings/{onlineMeeting-id}/registration/customQuestions/{meetingRegistrationQuestion-id}': Operation<
    '/communications/onlineMeetings/{onlineMeeting-id}/registration/customQuestions/{meetingRegistrationQuestion-id}',
    'get'
  >;
  'PATCH /communications/onlineMeetings/{onlineMeeting-id}/registration/customQuestions/{meetingRegistrationQuestion-id}': Operation<
    '/communications/onlineMeetings/{onlineMeeting-id}/registration/customQuestions/{meetingRegistrationQuestion-id}',
    'patch'
  >;
  'DELETE /communications/onlineMeetings/{onlineMeeting-id}/registration/customQuestions/{meetingRegistrationQuestion-id}': Operation<
    '/communications/onlineMeetings/{onlineMeeting-id}/registration/customQuestions/{meetingRegistrationQuestion-id}',
    'delete'
  >;
  'GET /communications/onlineMeetings/{onlineMeeting-id}/registration/registrants': Operation<
    '/communications/onlineMeetings/{onlineMeeting-id}/registration/registrants',
    'get'
  >;
  'POST /communications/onlineMeetings/{onlineMeeting-id}/registration/registrants': Operation<
    '/communications/onlineMeetings/{onlineMeeting-id}/registration/registrants',
    'post'
  >;
  'GET /communications/onlineMeetings/{onlineMeeting-id}/registration/registrants/{meetingRegistrantBase-id}': Operation<
    '/communications/onlineMeetings/{onlineMeeting-id}/registration/registrants/{meetingRegistrantBase-id}',
    'get'
  >;
  'PATCH /communications/onlineMeetings/{onlineMeeting-id}/registration/registrants/{meetingRegistrantBase-id}': Operation<
    '/communications/onlineMeetings/{onlineMeeting-id}/registration/registrants/{meetingRegistrantBase-id}',
    'patch'
  >;
  'DELETE /communications/onlineMeetings/{onlineMeeting-id}/registration/registrants/{meetingRegistrantBase-id}': Operation<
    '/communications/onlineMeetings/{onlineMeeting-id}/registration/registrants/{meetingRegistrantBase-id}',
    'delete'
  >;
}

/**
 * `DELETE /communications/onlineMeetings/{onlineMeeting-id}/registration`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /communications/onlineMeetings/{onlineMeeting-id}/registration']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /communications/onlineMeetings/{onlineMeeting-id}/registration']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/communications/onlineMeetings/{onlineMeeting-id}/registration',
    paramDefs: {
      header: ['If-Match'],
      path: ['onlineMeeting-id'],
    },
    params,
  };
}

/**
 * `GET /communications/onlineMeetings/{onlineMeeting-id}/registration`
 *
 * The registration that is enabled for an online meeting. One online meeting can only have one registration enabled.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /communications/onlineMeetings/{onlineMeeting-id}/registration']['parameters']
): EndpointRequest<
  IEndpoints['GET /communications/onlineMeetings/{onlineMeeting-id}/registration']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/communications/onlineMeetings/{onlineMeeting-id}/registration',
    paramDefs: {
      path: ['onlineMeeting-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /communications/onlineMeetings/{onlineMeeting-id}/registration`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /communications/onlineMeetings/{onlineMeeting-id}/registration']['body'],
  params?: IEndpoints['PATCH /communications/onlineMeetings/{onlineMeeting-id}/registration']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /communications/onlineMeetings/{onlineMeeting-id}/registration']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/communications/onlineMeetings/{onlineMeeting-id}/registration',
    paramDefs: {
      path: ['onlineMeeting-id'],
    },
    params,
    body,
  };
}

export const customQuestions = {
  /**
   * `GET /communications/onlineMeetings/{onlineMeeting-id}/registration/customQuestions`
   *
   * Custom registration questions.
   * @deprecated
   */
  list: function list(
    params?: IEndpoints['GET /communications/onlineMeetings/{onlineMeeting-id}/registration/customQuestions']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /communications/onlineMeetings/{onlineMeeting-id}/registration/customQuestions']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/communications/onlineMeetings/{onlineMeeting-id}/registration/customQuestions',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['onlineMeeting-id'],
      },
      params,
    };
  },
  /**
   * `POST /communications/onlineMeetings/{onlineMeeting-id}/registration/customQuestions`
   *
   * @deprecated
   */
  create: function create(
    body: IEndpoints['POST /communications/onlineMeetings/{onlineMeeting-id}/registration/customQuestions']['body'],
    params?: IEndpoints['POST /communications/onlineMeetings/{onlineMeeting-id}/registration/customQuestions']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /communications/onlineMeetings/{onlineMeeting-id}/registration/customQuestions']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/communications/onlineMeetings/{onlineMeeting-id}/registration/customQuestions',
      paramDefs: {
        path: ['onlineMeeting-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /communications/onlineMeetings/{onlineMeeting-id}/registration/customQuestions/{meetingRegistrationQuestion-id}`
   *
   * Custom registration questions.
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /communications/onlineMeetings/{onlineMeeting-id}/registration/customQuestions/{meetingRegistrationQuestion-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /communications/onlineMeetings/{onlineMeeting-id}/registration/customQuestions/{meetingRegistrationQuestion-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/communications/onlineMeetings/{onlineMeeting-id}/registration/customQuestions/{meetingRegistrationQuestion-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['onlineMeeting-id', 'meetingRegistrationQuestion-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /communications/onlineMeetings/{onlineMeeting-id}/registration/customQuestions/{meetingRegistrationQuestion-id}`
   *
   * @deprecated
   */
  update: function update(
    body: IEndpoints['PATCH /communications/onlineMeetings/{onlineMeeting-id}/registration/customQuestions/{meetingRegistrationQuestion-id}']['body'],
    params?: IEndpoints['PATCH /communications/onlineMeetings/{onlineMeeting-id}/registration/customQuestions/{meetingRegistrationQuestion-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /communications/onlineMeetings/{onlineMeeting-id}/registration/customQuestions/{meetingRegistrationQuestion-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/communications/onlineMeetings/{onlineMeeting-id}/registration/customQuestions/{meetingRegistrationQuestion-id}',
      paramDefs: {
        path: ['onlineMeeting-id', 'meetingRegistrationQuestion-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /communications/onlineMeetings/{onlineMeeting-id}/registration/customQuestions/{meetingRegistrationQuestion-id}`
   *
   * @deprecated
   */
  del: function del(
    params?: IEndpoints['DELETE /communications/onlineMeetings/{onlineMeeting-id}/registration/customQuestions/{meetingRegistrationQuestion-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /communications/onlineMeetings/{onlineMeeting-id}/registration/customQuestions/{meetingRegistrationQuestion-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/communications/onlineMeetings/{onlineMeeting-id}/registration/customQuestions/{meetingRegistrationQuestion-id}',
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
   * `GET /communications/onlineMeetings/{onlineMeeting-id}/registration/registrants`
   *
   * Registrants of the online meeting.
   * @deprecated
   */
  list: function list(
    params?: IEndpoints['GET /communications/onlineMeetings/{onlineMeeting-id}/registration/registrants']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /communications/onlineMeetings/{onlineMeeting-id}/registration/registrants']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/communications/onlineMeetings/{onlineMeeting-id}/registration/registrants',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['onlineMeeting-id'],
      },
      params,
    };
  },
  /**
   * `POST /communications/onlineMeetings/{onlineMeeting-id}/registration/registrants`
   *
   * @deprecated
   */
  create: function create(
    body: IEndpoints['POST /communications/onlineMeetings/{onlineMeeting-id}/registration/registrants']['body'],
    params?: IEndpoints['POST /communications/onlineMeetings/{onlineMeeting-id}/registration/registrants']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /communications/onlineMeetings/{onlineMeeting-id}/registration/registrants']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/communications/onlineMeetings/{onlineMeeting-id}/registration/registrants',
      paramDefs: {
        path: ['onlineMeeting-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /communications/onlineMeetings/{onlineMeeting-id}/registration/registrants/{meetingRegistrantBase-id}`
   *
   * Registrants of the online meeting.
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /communications/onlineMeetings/{onlineMeeting-id}/registration/registrants/{meetingRegistrantBase-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /communications/onlineMeetings/{onlineMeeting-id}/registration/registrants/{meetingRegistrantBase-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/communications/onlineMeetings/{onlineMeeting-id}/registration/registrants/{meetingRegistrantBase-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['onlineMeeting-id', 'meetingRegistrantBase-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /communications/onlineMeetings/{onlineMeeting-id}/registration/registrants/{meetingRegistrantBase-id}`
   *
   * @deprecated
   */
  update: function update(
    body: IEndpoints['PATCH /communications/onlineMeetings/{onlineMeeting-id}/registration/registrants/{meetingRegistrantBase-id}']['body'],
    params?: IEndpoints['PATCH /communications/onlineMeetings/{onlineMeeting-id}/registration/registrants/{meetingRegistrantBase-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /communications/onlineMeetings/{onlineMeeting-id}/registration/registrants/{meetingRegistrantBase-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/communications/onlineMeetings/{onlineMeeting-id}/registration/registrants/{meetingRegistrantBase-id}',
      paramDefs: {
        path: ['onlineMeeting-id', 'meetingRegistrantBase-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /communications/onlineMeetings/{onlineMeeting-id}/registration/registrants/{meetingRegistrantBase-id}`
   *
   * @deprecated
   */
  del: function del(
    params?: IEndpoints['DELETE /communications/onlineMeetings/{onlineMeeting-id}/registration/registrants/{meetingRegistrantBase-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /communications/onlineMeetings/{onlineMeeting-id}/registration/registrants/{meetingRegistrantBase-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/communications/onlineMeetings/{onlineMeeting-id}/registration/registrants/{meetingRegistrantBase-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['onlineMeeting-id', 'meetingRegistrantBase-id'],
      },
      params,
    };
  },
};
