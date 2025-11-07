import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/onlineMeetings/{onlineMeeting-id}/registration': Operation<
    '/me/onlineMeetings/{onlineMeeting-id}/registration',
    'delete'
  >;
  'GET /me/onlineMeetings/{onlineMeeting-id}/registration': Operation<
    '/me/onlineMeetings/{onlineMeeting-id}/registration',
    'get'
  >;
  'PATCH /me/onlineMeetings/{onlineMeeting-id}/registration': Operation<
    '/me/onlineMeetings/{onlineMeeting-id}/registration',
    'patch'
  >;
  'GET /me/onlineMeetings/{onlineMeeting-id}/registration/customQuestions': Operation<
    '/me/onlineMeetings/{onlineMeeting-id}/registration/customQuestions',
    'get'
  >;
  'POST /me/onlineMeetings/{onlineMeeting-id}/registration/customQuestions': Operation<
    '/me/onlineMeetings/{onlineMeeting-id}/registration/customQuestions',
    'post'
  >;
  'GET /me/onlineMeetings/{onlineMeeting-id}/registration/customQuestions/{meetingRegistrationQuestion-id}': Operation<
    '/me/onlineMeetings/{onlineMeeting-id}/registration/customQuestions/{meetingRegistrationQuestion-id}',
    'get'
  >;
  'PATCH /me/onlineMeetings/{onlineMeeting-id}/registration/customQuestions/{meetingRegistrationQuestion-id}': Operation<
    '/me/onlineMeetings/{onlineMeeting-id}/registration/customQuestions/{meetingRegistrationQuestion-id}',
    'patch'
  >;
  'DELETE /me/onlineMeetings/{onlineMeeting-id}/registration/customQuestions/{meetingRegistrationQuestion-id}': Operation<
    '/me/onlineMeetings/{onlineMeeting-id}/registration/customQuestions/{meetingRegistrationQuestion-id}',
    'delete'
  >;
  'GET /me/onlineMeetings/{onlineMeeting-id}/registration/registrants': Operation<
    '/me/onlineMeetings/{onlineMeeting-id}/registration/registrants',
    'get'
  >;
  'POST /me/onlineMeetings/{onlineMeeting-id}/registration/registrants': Operation<
    '/me/onlineMeetings/{onlineMeeting-id}/registration/registrants',
    'post'
  >;
  'GET /me/onlineMeetings/{onlineMeeting-id}/registration/registrants/{meetingRegistrantBase-id}': Operation<
    '/me/onlineMeetings/{onlineMeeting-id}/registration/registrants/{meetingRegistrantBase-id}',
    'get'
  >;
  'PATCH /me/onlineMeetings/{onlineMeeting-id}/registration/registrants/{meetingRegistrantBase-id}': Operation<
    '/me/onlineMeetings/{onlineMeeting-id}/registration/registrants/{meetingRegistrantBase-id}',
    'patch'
  >;
  'DELETE /me/onlineMeetings/{onlineMeeting-id}/registration/registrants/{meetingRegistrantBase-id}': Operation<
    '/me/onlineMeetings/{onlineMeeting-id}/registration/registrants/{meetingRegistrantBase-id}',
    'delete'
  >;
}

/**
 * `DELETE /me/onlineMeetings/{onlineMeeting-id}/registration`
 *
 * Disable and delete the externalMeetingRegistration of an onlineMeeting.
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /me/onlineMeetings/{onlineMeeting-id}/registration']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/onlineMeetings/{onlineMeeting-id}/registration']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/onlineMeetings/{onlineMeeting-id}/registration',
    paramDefs: {
      header: ['If-Match'],
      path: ['onlineMeeting-id'],
    },
    params,
  };
}

/**
 * `GET /me/onlineMeetings/{onlineMeeting-id}/registration`
 *
 * Get the externalMeetingRegistration details associated with an onlineMeeting.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /me/onlineMeetings/{onlineMeeting-id}/registration']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/onlineMeetings/{onlineMeeting-id}/registration']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/onlineMeetings/{onlineMeeting-id}/registration',
    paramDefs: {
      path: ['onlineMeeting-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /me/onlineMeetings/{onlineMeeting-id}/registration`
 *
 * Update the details of a meetingRegistration object assciated with an onlineMeeting on behalf of the organizer.
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /me/onlineMeetings/{onlineMeeting-id}/registration']['body'],
  params?: IEndpoints['PATCH /me/onlineMeetings/{onlineMeeting-id}/registration']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/onlineMeetings/{onlineMeeting-id}/registration']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/onlineMeetings/{onlineMeeting-id}/registration',
    paramDefs: {
      path: ['onlineMeeting-id'],
    },
    params,
    body,
  };
}

export const customQuestions = {
  /**
   * `GET /me/onlineMeetings/{onlineMeeting-id}/registration/customQuestions`
   *
   * Get a custom registration question associated with a meetingRegistration object on behalf of the organizer.
   * @deprecated
   */
  list: function list(
    params?: IEndpoints['GET /me/onlineMeetings/{onlineMeeting-id}/registration/customQuestions']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/onlineMeetings/{onlineMeeting-id}/registration/customQuestions']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/onlineMeetings/{onlineMeeting-id}/registration/customQuestions',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['onlineMeeting-id'],
      },
      params,
    };
  },
  /**
   * `POST /me/onlineMeetings/{onlineMeeting-id}/registration/customQuestions`
   *
   * @deprecated
   */
  create: function create(
    body: IEndpoints['POST /me/onlineMeetings/{onlineMeeting-id}/registration/customQuestions']['body'],
    params?: IEndpoints['POST /me/onlineMeetings/{onlineMeeting-id}/registration/customQuestions']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/onlineMeetings/{onlineMeeting-id}/registration/customQuestions']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/onlineMeetings/{onlineMeeting-id}/registration/customQuestions',
      paramDefs: {
        path: ['onlineMeeting-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /me/onlineMeetings/{onlineMeeting-id}/registration/customQuestions/{meetingRegistrationQuestion-id}`
   *
   * Get a custom registration question associated with a meetingRegistration object on behalf of the organizer.
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /me/onlineMeetings/{onlineMeeting-id}/registration/customQuestions/{meetingRegistrationQuestion-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/onlineMeetings/{onlineMeeting-id}/registration/customQuestions/{meetingRegistrationQuestion-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/onlineMeetings/{onlineMeeting-id}/registration/customQuestions/{meetingRegistrationQuestion-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['onlineMeeting-id', 'meetingRegistrationQuestion-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /me/onlineMeetings/{onlineMeeting-id}/registration/customQuestions/{meetingRegistrationQuestion-id}`
   *
   * Update a custom registration question associated with a meetingRegistration object on behalf of the organizer.
   * @deprecated
   */
  update: function update(
    body: IEndpoints['PATCH /me/onlineMeetings/{onlineMeeting-id}/registration/customQuestions/{meetingRegistrationQuestion-id}']['body'],
    params?: IEndpoints['PATCH /me/onlineMeetings/{onlineMeeting-id}/registration/customQuestions/{meetingRegistrationQuestion-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /me/onlineMeetings/{onlineMeeting-id}/registration/customQuestions/{meetingRegistrationQuestion-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/me/onlineMeetings/{onlineMeeting-id}/registration/customQuestions/{meetingRegistrationQuestion-id}',
      paramDefs: {
        path: ['onlineMeeting-id', 'meetingRegistrationQuestion-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /me/onlineMeetings/{onlineMeeting-id}/registration/customQuestions/{meetingRegistrationQuestion-id}`
   *
   * Delete a custom registration question from a meetingRegistration object on behalf of the organizer.
   * @deprecated
   */
  del: function del(
    params?: IEndpoints['DELETE /me/onlineMeetings/{onlineMeeting-id}/registration/customQuestions/{meetingRegistrationQuestion-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /me/onlineMeetings/{onlineMeeting-id}/registration/customQuestions/{meetingRegistrationQuestion-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/me/onlineMeetings/{onlineMeeting-id}/registration/customQuestions/{meetingRegistrationQuestion-id}',
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
   * `GET /me/onlineMeetings/{onlineMeeting-id}/registration/registrants`
   *
   * Get a list of the externalMeetingRegistrants of an onlineMeeting.
   * @deprecated
   */
  list: function list(
    params?: IEndpoints['GET /me/onlineMeetings/{onlineMeeting-id}/registration/registrants']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/onlineMeetings/{onlineMeeting-id}/registration/registrants']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/onlineMeetings/{onlineMeeting-id}/registration/registrants',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['onlineMeeting-id'],
      },
      params,
    };
  },
  /**
   * `POST /me/onlineMeetings/{onlineMeeting-id}/registration/registrants`
   *
   * Enroll an externalMeetingRegistrant in an online meeting which has externalMeetingRegistration enabled. The meeting organizer enrolls someone by providing a unique id in the external registration system and gets the unique joinWebUrl of this registrant.
   * @deprecated
   */
  create: function create(
    body: IEndpoints['POST /me/onlineMeetings/{onlineMeeting-id}/registration/registrants']['body'],
    params?: IEndpoints['POST /me/onlineMeetings/{onlineMeeting-id}/registration/registrants']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/onlineMeetings/{onlineMeeting-id}/registration/registrants']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/onlineMeetings/{onlineMeeting-id}/registration/registrants',
      paramDefs: {
        path: ['onlineMeeting-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /me/onlineMeetings/{onlineMeeting-id}/registration/registrants/{meetingRegistrantBase-id}`
   *
   * Registrants of the online meeting.
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /me/onlineMeetings/{onlineMeeting-id}/registration/registrants/{meetingRegistrantBase-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/onlineMeetings/{onlineMeeting-id}/registration/registrants/{meetingRegistrantBase-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/onlineMeetings/{onlineMeeting-id}/registration/registrants/{meetingRegistrantBase-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['onlineMeeting-id', 'meetingRegistrantBase-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /me/onlineMeetings/{onlineMeeting-id}/registration/registrants/{meetingRegistrantBase-id}`
   *
   * @deprecated
   */
  update: function update(
    body: IEndpoints['PATCH /me/onlineMeetings/{onlineMeeting-id}/registration/registrants/{meetingRegistrantBase-id}']['body'],
    params?: IEndpoints['PATCH /me/onlineMeetings/{onlineMeeting-id}/registration/registrants/{meetingRegistrantBase-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /me/onlineMeetings/{onlineMeeting-id}/registration/registrants/{meetingRegistrantBase-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/me/onlineMeetings/{onlineMeeting-id}/registration/registrants/{meetingRegistrantBase-id}',
      paramDefs: {
        path: ['onlineMeeting-id', 'meetingRegistrantBase-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /me/onlineMeetings/{onlineMeeting-id}/registration/registrants/{meetingRegistrantBase-id}`
   *
   * The meeting organizer removes an externalMeetingRegistrant from an online meeting which has externalMeetingRegistration enabled.
   * @deprecated
   */
  del: function del(
    params?: IEndpoints['DELETE /me/onlineMeetings/{onlineMeeting-id}/registration/registrants/{meetingRegistrantBase-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /me/onlineMeetings/{onlineMeeting-id}/registration/registrants/{meetingRegistrantBase-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/me/onlineMeetings/{onlineMeeting-id}/registration/registrants/{meetingRegistrantBase-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['onlineMeeting-id', 'meetingRegistrantBase-id'],
      },
      params,
    };
  },
};
