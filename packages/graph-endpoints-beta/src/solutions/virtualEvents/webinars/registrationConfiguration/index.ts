import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration': Operation<
    '/solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration',
    'delete'
  >;
  'GET /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration': Operation<
    '/solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration',
    'get'
  >;
  'PATCH /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration': Operation<
    '/solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration',
    'patch'
  >;
  'GET /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration/questions': Operation<
    '/solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration/questions',
    'get'
  >;
  'POST /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration/questions': Operation<
    '/solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration/questions',
    'post'
  >;
  'GET /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration/questions/{virtualEventRegistrationQuestionBase-id}': Operation<
    '/solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration/questions/{virtualEventRegistrationQuestionBase-id}',
    'get'
  >;
  'PATCH /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration/questions/{virtualEventRegistrationQuestionBase-id}': Operation<
    '/solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration/questions/{virtualEventRegistrationQuestionBase-id}',
    'patch'
  >;
  'DELETE /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration/questions/{virtualEventRegistrationQuestionBase-id}': Operation<
    '/solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration/questions/{virtualEventRegistrationQuestionBase-id}',
    'delete'
  >;
}

/**
 * `DELETE /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration`
 *
 */
export function del(
  params?: IEndpoints['DELETE /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration',
    paramDefs: {
      header: ['If-Match'],
      path: ['virtualEventWebinar-id'],
    },
    params,
  };
}

/**
 * `GET /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration`
 *
 * Read the properties and relationships of a virtualEventWebinarRegistrationConfiguration object.
 */
export function get(
  params?: IEndpoints['GET /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration']['parameters']
): EndpointRequest<
  IEndpoints['GET /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration',
    paramDefs: {
      path: ['virtualEventWebinar-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration`
 *
 */
export function update(
  body: IEndpoints['PATCH /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration']['body'],
  params?: IEndpoints['PATCH /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration',
    paramDefs: {
      path: ['virtualEventWebinar-id'],
    },
    params,
    body,
  };
}

export const questions = {
  /**
   * `GET /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration/questions`
   *
   * Get a list of all registration questions for a webinar. The list can include either predefined registration questions or custom registration questions.
   */
  list: function list(
    params?: IEndpoints['GET /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration/questions']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration/questions']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration/questions',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['virtualEventWebinar-id'],
      },
      params,
    };
  },
  /**
   * `POST /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration/questions`
   *
   * Create a registration question for a webinar. You can create either a predefined registration question or a custom registration question.
   */
  create: function create(
    body: IEndpoints['POST /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration/questions']['body'],
    params?: IEndpoints['POST /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration/questions']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration/questions']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration/questions',
      paramDefs: {
        path: ['virtualEventWebinar-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration/questions/{virtualEventRegistrationQuestionBase-id}`
   *
   * Registration questions.
   */
  get: function get(
    params?: IEndpoints['GET /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration/questions/{virtualEventRegistrationQuestionBase-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration/questions/{virtualEventRegistrationQuestionBase-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration/questions/{virtualEventRegistrationQuestionBase-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['virtualEventWebinar-id', 'virtualEventRegistrationQuestionBase-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration/questions/{virtualEventRegistrationQuestionBase-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration/questions/{virtualEventRegistrationQuestionBase-id}']['body'],
    params?: IEndpoints['PATCH /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration/questions/{virtualEventRegistrationQuestionBase-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration/questions/{virtualEventRegistrationQuestionBase-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration/questions/{virtualEventRegistrationQuestionBase-id}',
      paramDefs: {
        path: ['virtualEventWebinar-id', 'virtualEventRegistrationQuestionBase-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration/questions/{virtualEventRegistrationQuestionBase-id}`
   *
   * Delete a registration question from a webinar. The question can either be a predefined registration question or a custom registration question.
   */
  del: function del(
    params?: IEndpoints['DELETE /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration/questions/{virtualEventRegistrationQuestionBase-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration/questions/{virtualEventRegistrationQuestionBase-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration/questions/{virtualEventRegistrationQuestionBase-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['virtualEventWebinar-id', 'virtualEventRegistrationQuestionBase-id'],
      },
      params,
    };
  },
};
