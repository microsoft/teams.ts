import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /communications/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}': Operation<
    '/communications/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}',
    'delete'
  >;
  'GET /communications/calls/{call-id}/contentSharingSessions': Operation<
    '/communications/calls/{call-id}/contentSharingSessions',
    'get'
  >;
  'GET /communications/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}': Operation<
    '/communications/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}',
    'get'
  >;
  'PATCH /communications/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}': Operation<
    '/communications/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}',
    'patch'
  >;
  'POST /communications/calls/{call-id}/contentSharingSessions': Operation<
    '/communications/calls/{call-id}/contentSharingSessions',
    'post'
  >;
  'GET /communications/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}/pngOfCurrentSlide': Operation<
    '/communications/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}/pngOfCurrentSlide',
    'get'
  >;
  'PUT /communications/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}/pngOfCurrentSlide': Operation<
    '/communications/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}/pngOfCurrentSlide',
    'put'
  >;
  'DELETE /communications/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}/pngOfCurrentSlide': Operation<
    '/communications/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}/pngOfCurrentSlide',
    'delete'
  >;
}

/**
 * `DELETE /communications/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /communications/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /communications/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/communications/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['call-id', 'contentSharingSession-id'],
    },
    params,
  };
}

/**
 * `GET /communications/calls/{call-id}/contentSharingSessions`
 *
 * Retrieve a list of contentSharingSession objects in a call.
 */
export function list(
  params?: IEndpoints['GET /communications/calls/{call-id}/contentSharingSessions']['parameters']
): EndpointRequest<
  IEndpoints['GET /communications/calls/{call-id}/contentSharingSessions']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/communications/calls/{call-id}/contentSharingSessions',
    paramDefs: {
      path: ['call-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /communications/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}`
 *
 * Retrieve the properties of a contentSharingSession object.
 */
export function get(
  params?: IEndpoints['GET /communications/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /communications/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/communications/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}',
    paramDefs: {
      path: ['call-id', 'contentSharingSession-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /communications/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /communications/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}']['body'],
  params?: IEndpoints['PATCH /communications/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /communications/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/communications/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}',
    paramDefs: {
      path: ['call-id', 'contentSharingSession-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /communications/calls/{call-id}/contentSharingSessions`
 *
 */
export function create(
  body: IEndpoints['POST /communications/calls/{call-id}/contentSharingSessions']['body'],
  params?: IEndpoints['POST /communications/calls/{call-id}/contentSharingSessions']['parameters']
): EndpointRequest<
  IEndpoints['POST /communications/calls/{call-id}/contentSharingSessions']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/communications/calls/{call-id}/contentSharingSessions',
    paramDefs: {
      path: ['call-id'],
    },
    params,
    body,
  };
}

export const pngOfCurrentSlide = {
  /**
   * `GET /communications/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}/pngOfCurrentSlide`
   *
   */
  get: function get(
    params?: IEndpoints['GET /communications/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}/pngOfCurrentSlide']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /communications/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}/pngOfCurrentSlide']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/communications/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}/pngOfCurrentSlide',
      paramDefs: {
        path: ['call-id', 'contentSharingSession-id'],
      },
      params,
    };
  },
  /**
   * `PUT /communications/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}/pngOfCurrentSlide`
   *
   */
  set: function set(
    body: IEndpoints['PUT /communications/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}/pngOfCurrentSlide']['body'],
    params?: IEndpoints['PUT /communications/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}/pngOfCurrentSlide']['parameters']
  ): EndpointRequest<
    IEndpoints['PUT /communications/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}/pngOfCurrentSlide']['response']
  > {
    return {
      ver: 'beta',
      method: 'put',
      path: '/communications/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}/pngOfCurrentSlide',
      paramDefs: {
        path: ['call-id', 'contentSharingSession-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /communications/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}/pngOfCurrentSlide`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /communications/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}/pngOfCurrentSlide']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /communications/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}/pngOfCurrentSlide']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/communications/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}/pngOfCurrentSlide',
      paramDefs: {
        header: ['If-Match'],
        path: ['call-id', 'contentSharingSession-id'],
      },
      params,
    };
  },
};
