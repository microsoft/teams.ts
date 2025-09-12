import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/onlineMeetings/{onlineMeeting-id}/registration': Operation<
    '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/registration',
    'delete'
  >;
  'GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/registration': Operation<
    '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/registration',
    'get'
  >;
  'PATCH /users/{user-id}/onlineMeetings/{onlineMeeting-id}/registration': Operation<
    '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/registration',
    'patch'
  >;
  'GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/registration/customQuestions': Operation<
    '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/registration/customQuestions',
    'get'
  >;
  'POST /users/{user-id}/onlineMeetings/{onlineMeeting-id}/registration/customQuestions': Operation<
    '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/registration/customQuestions',
    'post'
  >;
  'GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/registration/customQuestions/{meetingRegistrationQuestion-id}': Operation<
    '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/registration/customQuestions/{meetingRegistrationQuestion-id}',
    'get'
  >;
  'PATCH /users/{user-id}/onlineMeetings/{onlineMeeting-id}/registration/customQuestions/{meetingRegistrationQuestion-id}': Operation<
    '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/registration/customQuestions/{meetingRegistrationQuestion-id}',
    'patch'
  >;
  'DELETE /users/{user-id}/onlineMeetings/{onlineMeeting-id}/registration/customQuestions/{meetingRegistrationQuestion-id}': Operation<
    '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/registration/customQuestions/{meetingRegistrationQuestion-id}',
    'delete'
  >;
  'GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/registration/registrants': Operation<
    '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/registration/registrants',
    'get'
  >;
  'POST /users/{user-id}/onlineMeetings/{onlineMeeting-id}/registration/registrants': Operation<
    '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/registration/registrants',
    'post'
  >;
  'GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/registration/registrants/{meetingRegistrantBase-id}': Operation<
    '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/registration/registrants/{meetingRegistrantBase-id}',
    'get'
  >;
  'PATCH /users/{user-id}/onlineMeetings/{onlineMeeting-id}/registration/registrants/{meetingRegistrantBase-id}': Operation<
    '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/registration/registrants/{meetingRegistrantBase-id}',
    'patch'
  >;
  'DELETE /users/{user-id}/onlineMeetings/{onlineMeeting-id}/registration/registrants/{meetingRegistrantBase-id}': Operation<
    '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/registration/registrants/{meetingRegistrantBase-id}',
    'delete'
  >;
}

/**
 * `DELETE /users/{user-id}/onlineMeetings/{onlineMeeting-id}/registration`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/onlineMeetings/{onlineMeeting-id}/registration']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/onlineMeetings/{onlineMeeting-id}/registration']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/registration',
    paramDefs: {
      header: ['If-Match'],
      path: ['user-id', 'onlineMeeting-id'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/registration`
 *
 * The registration that is enabled for an online meeting. One online meeting can only have one registration enabled.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/registration']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/registration']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/registration',
    paramDefs: {
      path: ['user-id', 'onlineMeeting-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /users/{user-id}/onlineMeetings/{onlineMeeting-id}/registration`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/onlineMeetings/{onlineMeeting-id}/registration']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/onlineMeetings/{onlineMeeting-id}/registration']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/onlineMeetings/{onlineMeeting-id}/registration']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/registration',
    paramDefs: {
      path: ['user-id', 'onlineMeeting-id'],
    },
    params,
    body,
  };
}

export const customQuestions = {
  /**
   * `GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/registration/customQuestions`
   *
   * Custom registration questions.
   * @deprecated
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/registration/customQuestions']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/registration/customQuestions']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/registration/customQuestions',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id', 'onlineMeeting-id'],
      },
      params,
    };
  },
  /**
   * `POST /users/{user-id}/onlineMeetings/{onlineMeeting-id}/registration/customQuestions`
   *
   * @deprecated
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/onlineMeetings/{onlineMeeting-id}/registration/customQuestions']['body'],
    params?: IEndpoints['POST /users/{user-id}/onlineMeetings/{onlineMeeting-id}/registration/customQuestions']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/onlineMeetings/{onlineMeeting-id}/registration/customQuestions']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/registration/customQuestions',
      paramDefs: {
        path: ['user-id', 'onlineMeeting-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/registration/customQuestions/{meetingRegistrationQuestion-id}`
   *
   * Custom registration questions.
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/registration/customQuestions/{meetingRegistrationQuestion-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/registration/customQuestions/{meetingRegistrationQuestion-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/registration/customQuestions/{meetingRegistrationQuestion-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'onlineMeeting-id', 'meetingRegistrationQuestion-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /users/{user-id}/onlineMeetings/{onlineMeeting-id}/registration/customQuestions/{meetingRegistrationQuestion-id}`
   *
   * @deprecated
   */
  update: function update(
    body: IEndpoints['PATCH /users/{user-id}/onlineMeetings/{onlineMeeting-id}/registration/customQuestions/{meetingRegistrationQuestion-id}']['body'],
    params?: IEndpoints['PATCH /users/{user-id}/onlineMeetings/{onlineMeeting-id}/registration/customQuestions/{meetingRegistrationQuestion-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /users/{user-id}/onlineMeetings/{onlineMeeting-id}/registration/customQuestions/{meetingRegistrationQuestion-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/registration/customQuestions/{meetingRegistrationQuestion-id}',
      paramDefs: {
        path: ['user-id', 'onlineMeeting-id', 'meetingRegistrationQuestion-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /users/{user-id}/onlineMeetings/{onlineMeeting-id}/registration/customQuestions/{meetingRegistrationQuestion-id}`
   *
   * @deprecated
   */
  del: function del(
    params?: IEndpoints['DELETE /users/{user-id}/onlineMeetings/{onlineMeeting-id}/registration/customQuestions/{meetingRegistrationQuestion-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /users/{user-id}/onlineMeetings/{onlineMeeting-id}/registration/customQuestions/{meetingRegistrationQuestion-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/registration/customQuestions/{meetingRegistrationQuestion-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['user-id', 'onlineMeeting-id', 'meetingRegistrationQuestion-id'],
      },
      params,
    };
  },
};

export const registrants = {
  /**
   * `GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/registration/registrants`
   *
   * Registrants of the online meeting.
   * @deprecated
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/registration/registrants']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/registration/registrants']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/registration/registrants',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id', 'onlineMeeting-id'],
      },
      params,
    };
  },
  /**
   * `POST /users/{user-id}/onlineMeetings/{onlineMeeting-id}/registration/registrants`
   *
   * Enroll a meeting registrant in an online meeting that has meeting registration enabled on behalf of the registrant. This operation has two scenarios: In either scenario, the registrant will receive an email notification that contains their registration information.
   * @deprecated
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/onlineMeetings/{onlineMeeting-id}/registration/registrants']['body'],
    params?: IEndpoints['POST /users/{user-id}/onlineMeetings/{onlineMeeting-id}/registration/registrants']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/onlineMeetings/{onlineMeeting-id}/registration/registrants']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/registration/registrants',
      paramDefs: {
        path: ['user-id', 'onlineMeeting-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/registration/registrants/{meetingRegistrantBase-id}`
   *
   * Registrants of the online meeting.
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/registration/registrants/{meetingRegistrantBase-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/registration/registrants/{meetingRegistrantBase-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/registration/registrants/{meetingRegistrantBase-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'onlineMeeting-id', 'meetingRegistrantBase-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /users/{user-id}/onlineMeetings/{onlineMeeting-id}/registration/registrants/{meetingRegistrantBase-id}`
   *
   * @deprecated
   */
  update: function update(
    body: IEndpoints['PATCH /users/{user-id}/onlineMeetings/{onlineMeeting-id}/registration/registrants/{meetingRegistrantBase-id}']['body'],
    params?: IEndpoints['PATCH /users/{user-id}/onlineMeetings/{onlineMeeting-id}/registration/registrants/{meetingRegistrantBase-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /users/{user-id}/onlineMeetings/{onlineMeeting-id}/registration/registrants/{meetingRegistrantBase-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/registration/registrants/{meetingRegistrantBase-id}',
      paramDefs: {
        path: ['user-id', 'onlineMeeting-id', 'meetingRegistrantBase-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /users/{user-id}/onlineMeetings/{onlineMeeting-id}/registration/registrants/{meetingRegistrantBase-id}`
   *
   * Cancel an onlineMeeting registration for a meetingRegistrant on behalf of the registrant. Only use this method when the allowedRegistrant property of the meetingRegistration object has a value of organization and the registrant&#x27;s delegated permission was used to enroll. When the allowedRegistrant value is everyone, registrants can only use the link in the email they receive to cancel their registration.
   * @deprecated
   */
  del: function del(
    params?: IEndpoints['DELETE /users/{user-id}/onlineMeetings/{onlineMeeting-id}/registration/registrants/{meetingRegistrantBase-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /users/{user-id}/onlineMeetings/{onlineMeeting-id}/registration/registrants/{meetingRegistrantBase-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/registration/registrants/{meetingRegistrantBase-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['user-id', 'onlineMeeting-id', 'meetingRegistrantBase-id'],
      },
      params,
    };
  },
};
