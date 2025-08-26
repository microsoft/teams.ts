import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration/questions/{virtualEventRegistrationQuestionBase-id}': Operation<
    '/solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration/questions/{virtualEventRegistrationQuestionBase-id}',
    'delete'
  >;
  'GET /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration/questions': Operation<
    '/solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration/questions',
    'get'
  >;
  'GET /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration/questions/{virtualEventRegistrationQuestionBase-id}': Operation<
    '/solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration/questions/{virtualEventRegistrationQuestionBase-id}',
    'get'
  >;
  'PATCH /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration/questions/{virtualEventRegistrationQuestionBase-id}': Operation<
    '/solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration/questions/{virtualEventRegistrationQuestionBase-id}',
    'patch'
  >;
  'POST /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration/questions': Operation<
    '/solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration/questions',
    'post'
  >;
}

/**
 * `DELETE /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration/questions/{virtualEventRegistrationQuestionBase-id}`
 *
 * Delete a registration question from a webinar. The question can either be a predefined registration question or a custom registration question.
 */
export function del(
  params?: IEndpoints['DELETE /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration/questions/{virtualEventRegistrationQuestionBase-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration/questions/{virtualEventRegistrationQuestionBase-id}']['response']
> {
  return {
    method: 'delete',
    path: '/solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration/questions/{virtualEventRegistrationQuestionBase-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'virtualEventWebinar-id', in: 'path' },
      { name: 'virtualEventRegistrationQuestionBase-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration/questions`
 *
 * Get a list of all registration questions for a webinar. The list can include either predefined registration questions or custom registration questions.
 */
export function list(
  params?: IEndpoints['GET /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration/questions']['parameters']
): EndpointRequest<
  IEndpoints['GET /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration/questions']['response']
> {
  return {
    method: 'get',
    path: '/solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration/questions',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'virtualEventWebinar-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration/questions/{virtualEventRegistrationQuestionBase-id}`
 *
 * Registration questions.
 */
export function get(
  params?: IEndpoints['GET /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration/questions/{virtualEventRegistrationQuestionBase-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration/questions/{virtualEventRegistrationQuestionBase-id}']['response']
> {
  return {
    method: 'get',
    path: '/solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration/questions/{virtualEventRegistrationQuestionBase-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'virtualEventWebinar-id', in: 'path' },
      { name: 'virtualEventRegistrationQuestionBase-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration/questions/{virtualEventRegistrationQuestionBase-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration/questions/{virtualEventRegistrationQuestionBase-id}']['body'],
  params?: IEndpoints['PATCH /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration/questions/{virtualEventRegistrationQuestionBase-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration/questions/{virtualEventRegistrationQuestionBase-id}']['response']
> {
  return {
    method: 'patch',
    path: '/solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration/questions/{virtualEventRegistrationQuestionBase-id}',
    paramDefs: [
      { name: 'virtualEventWebinar-id', in: 'path' },
      { name: 'virtualEventRegistrationQuestionBase-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration/questions`
 *
 * Create a registration question for a webinar. You can create either a predefined registration question or a custom registration question.
 */
export function create(
  body: IEndpoints['POST /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration/questions']['body'],
  params?: IEndpoints['POST /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration/questions']['parameters']
): EndpointRequest<
  IEndpoints['POST /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration/questions']['response']
> {
  return {
    method: 'post',
    path: '/solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration/questions',
    paramDefs: [{ name: 'virtualEventWebinar-id', in: 'path' }],
    params,
    body,
  };
}
