export * as cancel from './cancel';
export * as sessions from './sessions';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrations/{virtualEventRegistration-id}': Operation<
    '/solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrations/{virtualEventRegistration-id}',
    'delete'
  >;
  'GET /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrations': Operation<
    '/solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrations',
    'get'
  >;
  'GET /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrations/{virtualEventRegistration-id}': Operation<
    '/solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrations/{virtualEventRegistration-id}',
    'get'
  >;
  'PATCH /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrations/{virtualEventRegistration-id}': Operation<
    '/solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrations/{virtualEventRegistration-id}',
    'patch'
  >;
  'POST /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrations': Operation<
    '/solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrations',
    'post'
  >;
}

/**
 * `DELETE /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrations/{virtualEventRegistration-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrations/{virtualEventRegistration-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrations/{virtualEventRegistration-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrations/{virtualEventRegistration-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'virtualEventWebinar-id', in: 'path' },
      { name: 'virtualEventRegistration-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrations`
 *
 * Get a list of all registration records of a webinar.
 */
export function list(
  params?: IEndpoints['GET /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrations']['parameters']
): EndpointRequest<
  IEndpoints['GET /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrations']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrations',
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
 * `GET /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrations/{virtualEventRegistration-id}`
 *
 * Get the properties and relationships of a virtualEventRegistration object.
 */
export function get(
  params?: IEndpoints['GET /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrations/{virtualEventRegistration-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrations/{virtualEventRegistration-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrations/{virtualEventRegistration-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'virtualEventWebinar-id', in: 'path' },
      { name: 'virtualEventRegistration-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrations/{virtualEventRegistration-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrations/{virtualEventRegistration-id}']['body'],
  params?: IEndpoints['PATCH /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrations/{virtualEventRegistration-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrations/{virtualEventRegistration-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrations/{virtualEventRegistration-id}',
    paramDefs: [
      { name: 'virtualEventWebinar-id', in: 'path' },
      { name: 'virtualEventRegistration-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrations`
 *
 * Create a registration record for a registrant of a webinar. This method registers the person for the webinar.
 */
export function create(
  body: IEndpoints['POST /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrations']['body'],
  params?: IEndpoints['POST /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrations']['parameters']
): EndpointRequest<
  IEndpoints['POST /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrations']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrations',
    paramDefs: [{ name: 'virtualEventWebinar-id', in: 'path' }],
    params,
    body,
  };
}
