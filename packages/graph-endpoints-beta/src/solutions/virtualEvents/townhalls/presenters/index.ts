import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/presenters/{virtualEventPresenter-id}': Operation<
    '/solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/presenters/{virtualEventPresenter-id}',
    'delete'
  >;
  'GET /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/presenters': Operation<
    '/solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/presenters',
    'get'
  >;
  'GET /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/presenters/{virtualEventPresenter-id}': Operation<
    '/solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/presenters/{virtualEventPresenter-id}',
    'get'
  >;
  'PATCH /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/presenters/{virtualEventPresenter-id}': Operation<
    '/solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/presenters/{virtualEventPresenter-id}',
    'patch'
  >;
  'POST /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/presenters': Operation<
    '/solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/presenters',
    'post'
  >;
  'GET /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/presenters/{virtualEventPresenter-id}/sessions': Operation<
    '/solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/presenters/{virtualEventPresenter-id}/sessions',
    'get'
  >;
  'GET /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/presenters/{virtualEventPresenter-id}/sessions/{virtualEventSession-id}': Operation<
    '/solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/presenters/{virtualEventPresenter-id}/sessions/{virtualEventSession-id}',
    'get'
  >;
}

/**
 * `DELETE /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/presenters/{virtualEventPresenter-id}`
 *
 * Delete a virtualEventPresenter from a virtual event. Currently the supported virtual event types are: virtualEventTownhall, virtualEventWebinar.
 */
export function del(
  params?: IEndpoints['DELETE /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/presenters/{virtualEventPresenter-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/presenters/{virtualEventPresenter-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/presenters/{virtualEventPresenter-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['virtualEventTownhall-id', 'virtualEventPresenter-id'],
    },
    params,
  };
}

/**
 * `GET /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/presenters`
 *
 * Get the list of all virtualEventPresenter objects associated with a virtual event. Currently the supported virtual event types are: virtualEventTownhall, virtualEventWebinar.
 */
export function list(
  params?: IEndpoints['GET /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/presenters']['parameters']
): EndpointRequest<
  IEndpoints['GET /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/presenters']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/presenters',
    paramDefs: {
      path: ['virtualEventTownhall-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/presenters/{virtualEventPresenter-id}`
 *
 * Read the properties and relationships of a virtualEventPresenter object. Currently the supported virtual event types are: virtualEventTownhall, virtualEventWebinar.
 */
export function get(
  params?: IEndpoints['GET /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/presenters/{virtualEventPresenter-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/presenters/{virtualEventPresenter-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/presenters/{virtualEventPresenter-id}',
    paramDefs: {
      path: ['virtualEventTownhall-id', 'virtualEventPresenter-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/presenters/{virtualEventPresenter-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/presenters/{virtualEventPresenter-id}']['body'],
  params?: IEndpoints['PATCH /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/presenters/{virtualEventPresenter-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/presenters/{virtualEventPresenter-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/presenters/{virtualEventPresenter-id}',
    paramDefs: {
      path: ['virtualEventTownhall-id', 'virtualEventPresenter-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/presenters`
 *
 * Create a new virtualEventPresenter object on a virtual event. Currently the supported virtual event types are: virtualEventTownhall, virtualEventWebinar.
 */
export function create(
  body: IEndpoints['POST /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/presenters']['body'],
  params?: IEndpoints['POST /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/presenters']['parameters']
): EndpointRequest<
  IEndpoints['POST /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/presenters']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/presenters',
    paramDefs: {
      path: ['virtualEventTownhall-id'],
    },
    params,
    body,
  };
}

export const sessions = {
  /**
   * `GET /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/presenters/{virtualEventPresenter-id}/sessions`
   *
   */
  list: function list(
    params?: IEndpoints['GET /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/presenters/{virtualEventPresenter-id}/sessions']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/presenters/{virtualEventPresenter-id}/sessions']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/presenters/{virtualEventPresenter-id}/sessions',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['virtualEventTownhall-id', 'virtualEventPresenter-id'],
      },
      params,
    };
  },
  /**
   * `GET /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/presenters/{virtualEventPresenter-id}/sessions/{virtualEventSession-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/presenters/{virtualEventPresenter-id}/sessions/{virtualEventSession-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/presenters/{virtualEventPresenter-id}/sessions/{virtualEventSession-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/presenters/{virtualEventPresenter-id}/sessions/{virtualEventSession-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['virtualEventTownhall-id', 'virtualEventPresenter-id', 'virtualEventSession-id'],
      },
      params,
    };
  },
};
