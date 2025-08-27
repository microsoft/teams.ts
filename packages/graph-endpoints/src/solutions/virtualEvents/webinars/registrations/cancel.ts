import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'POST /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrations/{virtualEventRegistration-id}/cancel': Operation<
    '/solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrations/{virtualEventRegistration-id}/cancel',
    'post'
  >;
}

/**
 * `POST /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrations/{virtualEventRegistration-id}/cancel`
 *
 * Cancel a registrant&#x27;s registration record for a webinar.
 */
export function create(
  body: IEndpoints['POST /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrations/{virtualEventRegistration-id}/cancel']['body'],
  params?: IEndpoints['POST /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrations/{virtualEventRegistration-id}/cancel']['parameters']
): EndpointRequest<
  IEndpoints['POST /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrations/{virtualEventRegistration-id}/cancel']['response']
> {
  return {
    method: 'post',
    path: '/solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrations/{virtualEventRegistration-id}/cancel',
    paramDefs: [
      { name: 'virtualEventWebinar-id', in: 'path' },
      { name: 'virtualEventRegistration-id', in: 'path' },
    ],
    params,
    body,
  };
}
