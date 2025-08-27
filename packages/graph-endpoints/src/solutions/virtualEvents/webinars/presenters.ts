import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/presenters/{virtualEventPresenter-id}': Operation<
    '/solutions/virtualEvents/webinars/{virtualEventWebinar-id}/presenters/{virtualEventPresenter-id}',
    'delete'
  >;
  'GET /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/presenters': Operation<
    '/solutions/virtualEvents/webinars/{virtualEventWebinar-id}/presenters',
    'get'
  >;
  'GET /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/presenters/{virtualEventPresenter-id}': Operation<
    '/solutions/virtualEvents/webinars/{virtualEventWebinar-id}/presenters/{virtualEventPresenter-id}',
    'get'
  >;
  'PATCH /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/presenters/{virtualEventPresenter-id}': Operation<
    '/solutions/virtualEvents/webinars/{virtualEventWebinar-id}/presenters/{virtualEventPresenter-id}',
    'patch'
  >;
  'POST /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/presenters': Operation<
    '/solutions/virtualEvents/webinars/{virtualEventWebinar-id}/presenters',
    'post'
  >;
}

/**
 * `DELETE /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/presenters/{virtualEventPresenter-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/presenters/{virtualEventPresenter-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/presenters/{virtualEventPresenter-id}']['response']
> {
  return {
    method: 'delete',
    path: '/solutions/virtualEvents/webinars/{virtualEventWebinar-id}/presenters/{virtualEventPresenter-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'virtualEventWebinar-id', in: 'path' },
      { name: 'virtualEventPresenter-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/presenters`
 *
 * The virtual event presenters.
 */
export function list(
  params?: IEndpoints['GET /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/presenters']['parameters']
): EndpointRequest<
  IEndpoints['GET /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/presenters']['response']
> {
  return {
    method: 'get',
    path: '/solutions/virtualEvents/webinars/{virtualEventWebinar-id}/presenters',
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
 * `GET /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/presenters/{virtualEventPresenter-id}`
 *
 * The virtual event presenters.
 */
export function get(
  params?: IEndpoints['GET /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/presenters/{virtualEventPresenter-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/presenters/{virtualEventPresenter-id}']['response']
> {
  return {
    method: 'get',
    path: '/solutions/virtualEvents/webinars/{virtualEventWebinar-id}/presenters/{virtualEventPresenter-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'virtualEventWebinar-id', in: 'path' },
      { name: 'virtualEventPresenter-id', in: 'path' },
    ],
    params,
  };
}

/**
  * `PATCH /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/presenters/{virtualEventPresenter-id}`
  *
  * Update the properties of a virtualEventPresenter object. Currently the supported virtual event types are:
- virtualEventWebinar.
  */
export function update(
  body: IEndpoints['PATCH /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/presenters/{virtualEventPresenter-id}']['body'],
  params?: IEndpoints['PATCH /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/presenters/{virtualEventPresenter-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/presenters/{virtualEventPresenter-id}']['response']
> {
  return {
    method: 'patch',
    path: '/solutions/virtualEvents/webinars/{virtualEventWebinar-id}/presenters/{virtualEventPresenter-id}',
    paramDefs: [
      { name: 'virtualEventWebinar-id', in: 'path' },
      { name: 'virtualEventPresenter-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
  * `POST /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/presenters`
  *
  * Create a new virtualEventPresenter object on a virtual event. Currently, the following types of virtual events are supported: 
- virtualEventTownhall
- virtualEventWebinar
  */
export function create(
  body: IEndpoints['POST /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/presenters']['body'],
  params?: IEndpoints['POST /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/presenters']['parameters']
): EndpointRequest<
  IEndpoints['POST /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/presenters']['response']
> {
  return {
    method: 'post',
    path: '/solutions/virtualEvents/webinars/{virtualEventWebinar-id}/presenters',
    paramDefs: [{ name: 'virtualEventWebinar-id', in: 'path' }],
    params,
    body,
  };
}
