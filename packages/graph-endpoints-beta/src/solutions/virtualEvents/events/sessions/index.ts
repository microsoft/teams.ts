export * as attendanceReports from './attendanceReports';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /solutions/virtualEvents/events/{virtualEvent-id}/sessions/{virtualEventSession-id}': Operation<
    '/solutions/virtualEvents/events/{virtualEvent-id}/sessions/{virtualEventSession-id}',
    'delete'
  >;
  'GET /solutions/virtualEvents/events/{virtualEvent-id}/sessions': Operation<
    '/solutions/virtualEvents/events/{virtualEvent-id}/sessions',
    'get'
  >;
  'GET /solutions/virtualEvents/events/{virtualEvent-id}/sessions/{virtualEventSession-id}': Operation<
    '/solutions/virtualEvents/events/{virtualEvent-id}/sessions/{virtualEventSession-id}',
    'get'
  >;
  'PATCH /solutions/virtualEvents/events/{virtualEvent-id}/sessions/{virtualEventSession-id}': Operation<
    '/solutions/virtualEvents/events/{virtualEvent-id}/sessions/{virtualEventSession-id}',
    'patch'
  >;
  'POST /solutions/virtualEvents/events/{virtualEvent-id}/sessions': Operation<
    '/solutions/virtualEvents/events/{virtualEvent-id}/sessions',
    'post'
  >;
  'GET /solutions/virtualEvents/events/{virtualEvent-id}/sessions/{virtualEventSession-id}/presenters': Operation<
    '/solutions/virtualEvents/events/{virtualEvent-id}/sessions/{virtualEventSession-id}/presenters',
    'get'
  >;
  'GET /solutions/virtualEvents/events/{virtualEvent-id}/sessions/{virtualEventSession-id}/presenters/{virtualEventPresenter-id}': Operation<
    '/solutions/virtualEvents/events/{virtualEvent-id}/sessions/{virtualEventSession-id}/presenters/{virtualEventPresenter-id}',
    'get'
  >;
  'GET /solutions/virtualEvents/events/{virtualEvent-id}/sessions/{virtualEventSession-id}/registrations': Operation<
    '/solutions/virtualEvents/events/{virtualEvent-id}/sessions/{virtualEventSession-id}/registrations',
    'get'
  >;
  'GET /solutions/virtualEvents/events/{virtualEvent-id}/sessions/{virtualEventSession-id}/registrations/{virtualEventRegistration-id}': Operation<
    '/solutions/virtualEvents/events/{virtualEvent-id}/sessions/{virtualEventSession-id}/registrations/{virtualEventRegistration-id}',
    'get'
  >;
}

/**
 * `DELETE /solutions/virtualEvents/events/{virtualEvent-id}/sessions/{virtualEventSession-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /solutions/virtualEvents/events/{virtualEvent-id}/sessions/{virtualEventSession-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /solutions/virtualEvents/events/{virtualEvent-id}/sessions/{virtualEventSession-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/solutions/virtualEvents/events/{virtualEvent-id}/sessions/{virtualEventSession-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['virtualEvent-id', 'virtualEventSession-id'],
    },
    params,
  };
}

/**
 * `GET /solutions/virtualEvents/events/{virtualEvent-id}/sessions`
 *
 * The sessions for the virtual event.
 */
export function list(
  params?: IEndpoints['GET /solutions/virtualEvents/events/{virtualEvent-id}/sessions']['parameters']
): EndpointRequest<
  IEndpoints['GET /solutions/virtualEvents/events/{virtualEvent-id}/sessions']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/solutions/virtualEvents/events/{virtualEvent-id}/sessions',
    paramDefs: {
      path: ['virtualEvent-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /solutions/virtualEvents/events/{virtualEvent-id}/sessions/{virtualEventSession-id}`
 *
 * The sessions for the virtual event.
 */
export function get(
  params?: IEndpoints['GET /solutions/virtualEvents/events/{virtualEvent-id}/sessions/{virtualEventSession-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /solutions/virtualEvents/events/{virtualEvent-id}/sessions/{virtualEventSession-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/solutions/virtualEvents/events/{virtualEvent-id}/sessions/{virtualEventSession-id}',
    paramDefs: {
      path: ['virtualEvent-id', 'virtualEventSession-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /solutions/virtualEvents/events/{virtualEvent-id}/sessions/{virtualEventSession-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /solutions/virtualEvents/events/{virtualEvent-id}/sessions/{virtualEventSession-id}']['body'],
  params?: IEndpoints['PATCH /solutions/virtualEvents/events/{virtualEvent-id}/sessions/{virtualEventSession-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /solutions/virtualEvents/events/{virtualEvent-id}/sessions/{virtualEventSession-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/solutions/virtualEvents/events/{virtualEvent-id}/sessions/{virtualEventSession-id}',
    paramDefs: {
      path: ['virtualEvent-id', 'virtualEventSession-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /solutions/virtualEvents/events/{virtualEvent-id}/sessions`
 *
 */
export function create(
  body: IEndpoints['POST /solutions/virtualEvents/events/{virtualEvent-id}/sessions']['body'],
  params?: IEndpoints['POST /solutions/virtualEvents/events/{virtualEvent-id}/sessions']['parameters']
): EndpointRequest<
  IEndpoints['POST /solutions/virtualEvents/events/{virtualEvent-id}/sessions']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/solutions/virtualEvents/events/{virtualEvent-id}/sessions',
    paramDefs: {
      path: ['virtualEvent-id'],
    },
    params,
    body,
  };
}

export const presenters = {
  /**
   * `GET /solutions/virtualEvents/events/{virtualEvent-id}/sessions/{virtualEventSession-id}/presenters`
   *
   */
  list: function list(
    params?: IEndpoints['GET /solutions/virtualEvents/events/{virtualEvent-id}/sessions/{virtualEventSession-id}/presenters']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /solutions/virtualEvents/events/{virtualEvent-id}/sessions/{virtualEventSession-id}/presenters']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/solutions/virtualEvents/events/{virtualEvent-id}/sessions/{virtualEventSession-id}/presenters',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['virtualEvent-id', 'virtualEventSession-id'],
      },
      params,
    };
  },
  /**
   * `GET /solutions/virtualEvents/events/{virtualEvent-id}/sessions/{virtualEventSession-id}/presenters/{virtualEventPresenter-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /solutions/virtualEvents/events/{virtualEvent-id}/sessions/{virtualEventSession-id}/presenters/{virtualEventPresenter-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /solutions/virtualEvents/events/{virtualEvent-id}/sessions/{virtualEventSession-id}/presenters/{virtualEventPresenter-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/solutions/virtualEvents/events/{virtualEvent-id}/sessions/{virtualEventSession-id}/presenters/{virtualEventPresenter-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['virtualEvent-id', 'virtualEventSession-id', 'virtualEventPresenter-id'],
      },
      params,
    };
  },
};

export const registrations = {
  /**
   * `GET /solutions/virtualEvents/events/{virtualEvent-id}/sessions/{virtualEventSession-id}/registrations`
   *
   */
  list: function list(
    params?: IEndpoints['GET /solutions/virtualEvents/events/{virtualEvent-id}/sessions/{virtualEventSession-id}/registrations']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /solutions/virtualEvents/events/{virtualEvent-id}/sessions/{virtualEventSession-id}/registrations']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/solutions/virtualEvents/events/{virtualEvent-id}/sessions/{virtualEventSession-id}/registrations',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['virtualEvent-id', 'virtualEventSession-id'],
      },
      params,
    };
  },
  /**
   * `GET /solutions/virtualEvents/events/{virtualEvent-id}/sessions/{virtualEventSession-id}/registrations/{virtualEventRegistration-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /solutions/virtualEvents/events/{virtualEvent-id}/sessions/{virtualEventSession-id}/registrations/{virtualEventRegistration-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /solutions/virtualEvents/events/{virtualEvent-id}/sessions/{virtualEventSession-id}/registrations/{virtualEventRegistration-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/solutions/virtualEvents/events/{virtualEvent-id}/sessions/{virtualEventSession-id}/registrations/{virtualEventRegistration-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['virtualEvent-id', 'virtualEventSession-id', 'virtualEventRegistration-id'],
      },
      params,
    };
  },
};
