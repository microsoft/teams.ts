export * as presenters from './presenters';
export * as registrationConfiguration from './registrationConfiguration';
export * as registrations from './registrations';
export * as sessions from './sessions';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /solutions/virtualEvents/webinars/{virtualEventWebinar-id}': Operation<
    '/solutions/virtualEvents/webinars/{virtualEventWebinar-id}',
    'delete'
  >;
  'GET /solutions/virtualEvents/webinars': Operation<'/solutions/virtualEvents/webinars', 'get'>;
  'GET /solutions/virtualEvents/webinars/{virtualEventWebinar-id}': Operation<
    '/solutions/virtualEvents/webinars/{virtualEventWebinar-id}',
    'get'
  >;
  'PATCH /solutions/virtualEvents/webinars/{virtualEventWebinar-id}': Operation<
    '/solutions/virtualEvents/webinars/{virtualEventWebinar-id}',
    'patch'
  >;
  'POST /solutions/virtualEvents/webinars': Operation<'/solutions/virtualEvents/webinars', 'post'>;
}

/**
 * `DELETE /solutions/virtualEvents/webinars/{virtualEventWebinar-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /solutions/virtualEvents/webinars/{virtualEventWebinar-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /solutions/virtualEvents/webinars/{virtualEventWebinar-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/solutions/virtualEvents/webinars/{virtualEventWebinar-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['virtualEventWebinar-id'],
    },
    params,
  };
}

/**
 * `GET /solutions/virtualEvents/webinars`
 *
 * Get the list of all virtualEventWebinar objects created in a tenant.
 */
export function list(
  params?: IEndpoints['GET /solutions/virtualEvents/webinars']['parameters']
): EndpointRequest<IEndpoints['GET /solutions/virtualEvents/webinars']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/solutions/virtualEvents/webinars',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /solutions/virtualEvents/webinars/{virtualEventWebinar-id}`
 *
 * Read the properties and relationships of a virtualEventWebinar object.
 */
export function get(
  params?: IEndpoints['GET /solutions/virtualEvents/webinars/{virtualEventWebinar-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /solutions/virtualEvents/webinars/{virtualEventWebinar-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/solutions/virtualEvents/webinars/{virtualEventWebinar-id}',
    paramDefs: {
      path: ['virtualEventWebinar-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /solutions/virtualEvents/webinars/{virtualEventWebinar-id}`
 *
 * Update the properties of a virtualEventWebinar object.
 */
export function update(
  body: IEndpoints['PATCH /solutions/virtualEvents/webinars/{virtualEventWebinar-id}']['body'],
  params?: IEndpoints['PATCH /solutions/virtualEvents/webinars/{virtualEventWebinar-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /solutions/virtualEvents/webinars/{virtualEventWebinar-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/solutions/virtualEvents/webinars/{virtualEventWebinar-id}',
    paramDefs: {
      path: ['virtualEventWebinar-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /solutions/virtualEvents/webinars`
 *
 * Create a new virtualEventWebinar object in draft mode.
 */
export function create(
  body: IEndpoints['POST /solutions/virtualEvents/webinars']['body']
): EndpointRequest<IEndpoints['POST /solutions/virtualEvents/webinars']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/solutions/virtualEvents/webinars',
    body,
  };
}
