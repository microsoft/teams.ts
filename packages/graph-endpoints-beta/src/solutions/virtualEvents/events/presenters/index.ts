import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /solutions/virtualEvents/events/{virtualEvent-id}/presenters/{virtualEventPresenter-id}': Operation<
    '/solutions/virtualEvents/events/{virtualEvent-id}/presenters/{virtualEventPresenter-id}',
    'delete'
  >;
  'GET /solutions/virtualEvents/events/{virtualEvent-id}/presenters': Operation<
    '/solutions/virtualEvents/events/{virtualEvent-id}/presenters',
    'get'
  >;
  'GET /solutions/virtualEvents/events/{virtualEvent-id}/presenters/{virtualEventPresenter-id}': Operation<
    '/solutions/virtualEvents/events/{virtualEvent-id}/presenters/{virtualEventPresenter-id}',
    'get'
  >;
  'PATCH /solutions/virtualEvents/events/{virtualEvent-id}/presenters/{virtualEventPresenter-id}': Operation<
    '/solutions/virtualEvents/events/{virtualEvent-id}/presenters/{virtualEventPresenter-id}',
    'patch'
  >;
  'POST /solutions/virtualEvents/events/{virtualEvent-id}/presenters': Operation<
    '/solutions/virtualEvents/events/{virtualEvent-id}/presenters',
    'post'
  >;
  'GET /solutions/virtualEvents/events/{virtualEvent-id}/presenters/{virtualEventPresenter-id}/sessions': Operation<
    '/solutions/virtualEvents/events/{virtualEvent-id}/presenters/{virtualEventPresenter-id}/sessions',
    'get'
  >;
  'GET /solutions/virtualEvents/events/{virtualEvent-id}/presenters/{virtualEventPresenter-id}/sessions/{virtualEventSession-id}': Operation<
    '/solutions/virtualEvents/events/{virtualEvent-id}/presenters/{virtualEventPresenter-id}/sessions/{virtualEventSession-id}',
    'get'
  >;
}

/**
 * `DELETE /solutions/virtualEvents/events/{virtualEvent-id}/presenters/{virtualEventPresenter-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /solutions/virtualEvents/events/{virtualEvent-id}/presenters/{virtualEventPresenter-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /solutions/virtualEvents/events/{virtualEvent-id}/presenters/{virtualEventPresenter-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/solutions/virtualEvents/events/{virtualEvent-id}/presenters/{virtualEventPresenter-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['virtualEvent-id', 'virtualEventPresenter-id'],
    },
    params,
  };
}

/**
 * `GET /solutions/virtualEvents/events/{virtualEvent-id}/presenters`
 *
 * The virtual event presenters.
 */
export function list(
  params?: IEndpoints['GET /solutions/virtualEvents/events/{virtualEvent-id}/presenters']['parameters']
): EndpointRequest<
  IEndpoints['GET /solutions/virtualEvents/events/{virtualEvent-id}/presenters']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/solutions/virtualEvents/events/{virtualEvent-id}/presenters',
    paramDefs: {
      path: ['virtualEvent-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /solutions/virtualEvents/events/{virtualEvent-id}/presenters/{virtualEventPresenter-id}`
 *
 * The virtual event presenters.
 */
export function get(
  params?: IEndpoints['GET /solutions/virtualEvents/events/{virtualEvent-id}/presenters/{virtualEventPresenter-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /solutions/virtualEvents/events/{virtualEvent-id}/presenters/{virtualEventPresenter-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/solutions/virtualEvents/events/{virtualEvent-id}/presenters/{virtualEventPresenter-id}',
    paramDefs: {
      path: ['virtualEvent-id', 'virtualEventPresenter-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /solutions/virtualEvents/events/{virtualEvent-id}/presenters/{virtualEventPresenter-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /solutions/virtualEvents/events/{virtualEvent-id}/presenters/{virtualEventPresenter-id}']['body'],
  params?: IEndpoints['PATCH /solutions/virtualEvents/events/{virtualEvent-id}/presenters/{virtualEventPresenter-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /solutions/virtualEvents/events/{virtualEvent-id}/presenters/{virtualEventPresenter-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/solutions/virtualEvents/events/{virtualEvent-id}/presenters/{virtualEventPresenter-id}',
    paramDefs: {
      path: ['virtualEvent-id', 'virtualEventPresenter-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /solutions/virtualEvents/events/{virtualEvent-id}/presenters`
 *
 */
export function create(
  body: IEndpoints['POST /solutions/virtualEvents/events/{virtualEvent-id}/presenters']['body'],
  params?: IEndpoints['POST /solutions/virtualEvents/events/{virtualEvent-id}/presenters']['parameters']
): EndpointRequest<
  IEndpoints['POST /solutions/virtualEvents/events/{virtualEvent-id}/presenters']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/solutions/virtualEvents/events/{virtualEvent-id}/presenters',
    paramDefs: {
      path: ['virtualEvent-id'],
    },
    params,
    body,
  };
}

export const sessions = {
  /**
   * `GET /solutions/virtualEvents/events/{virtualEvent-id}/presenters/{virtualEventPresenter-id}/sessions`
   *
   */
  list: function list(
    params?: IEndpoints['GET /solutions/virtualEvents/events/{virtualEvent-id}/presenters/{virtualEventPresenter-id}/sessions']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /solutions/virtualEvents/events/{virtualEvent-id}/presenters/{virtualEventPresenter-id}/sessions']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/solutions/virtualEvents/events/{virtualEvent-id}/presenters/{virtualEventPresenter-id}/sessions',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['virtualEvent-id', 'virtualEventPresenter-id'],
      },
      params,
    };
  },
  /**
   * `GET /solutions/virtualEvents/events/{virtualEvent-id}/presenters/{virtualEventPresenter-id}/sessions/{virtualEventSession-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /solutions/virtualEvents/events/{virtualEvent-id}/presenters/{virtualEventPresenter-id}/sessions/{virtualEventSession-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /solutions/virtualEvents/events/{virtualEvent-id}/presenters/{virtualEventPresenter-id}/sessions/{virtualEventSession-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/solutions/virtualEvents/events/{virtualEvent-id}/presenters/{virtualEventPresenter-id}/sessions/{virtualEventSession-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['virtualEvent-id', 'virtualEventPresenter-id', 'virtualEventSession-id'],
      },
      params,
    };
  },
};
