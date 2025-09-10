import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /app/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}': Operation<
    '/app/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}',
    'delete'
  >;
  'GET /app/calls/{call-id}/contentSharingSessions': Operation<
    '/app/calls/{call-id}/contentSharingSessions',
    'get'
  >;
  'GET /app/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}': Operation<
    '/app/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}',
    'get'
  >;
  'PATCH /app/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}': Operation<
    '/app/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}',
    'patch'
  >;
  'POST /app/calls/{call-id}/contentSharingSessions': Operation<
    '/app/calls/{call-id}/contentSharingSessions',
    'post'
  >;
  'GET /app/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}/pngOfCurrentSlide': Operation<
    '/app/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}/pngOfCurrentSlide',
    'get'
  >;
  'PUT /app/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}/pngOfCurrentSlide': Operation<
    '/app/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}/pngOfCurrentSlide',
    'put'
  >;
  'DELETE /app/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}/pngOfCurrentSlide': Operation<
    '/app/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}/pngOfCurrentSlide',
    'delete'
  >;
}

/**
 * `DELETE /app/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /app/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /app/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/app/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['call-id', 'contentSharingSession-id'],
    },
    params,
  };
}

/**
 * `GET /app/calls/{call-id}/contentSharingSessions`
 *
 */
export function list(
  params?: IEndpoints['GET /app/calls/{call-id}/contentSharingSessions']['parameters']
): EndpointRequest<IEndpoints['GET /app/calls/{call-id}/contentSharingSessions']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/app/calls/{call-id}/contentSharingSessions',
    paramDefs: {
      path: ['call-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /app/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /app/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /app/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/app/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}',
    paramDefs: {
      path: ['call-id', 'contentSharingSession-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /app/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /app/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}']['body'],
  params?: IEndpoints['PATCH /app/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /app/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/app/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}',
    paramDefs: {
      path: ['call-id', 'contentSharingSession-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /app/calls/{call-id}/contentSharingSessions`
 *
 */
export function create(
  body: IEndpoints['POST /app/calls/{call-id}/contentSharingSessions']['body'],
  params?: IEndpoints['POST /app/calls/{call-id}/contentSharingSessions']['parameters']
): EndpointRequest<IEndpoints['POST /app/calls/{call-id}/contentSharingSessions']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/app/calls/{call-id}/contentSharingSessions',
    paramDefs: {
      path: ['call-id'],
    },
    params,
    body,
  };
}

export const pngOfCurrentSlide = {
  /**
   * `GET /app/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}/pngOfCurrentSlide`
   *
   */
  get: function get(
    params?: IEndpoints['GET /app/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}/pngOfCurrentSlide']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /app/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}/pngOfCurrentSlide']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/app/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}/pngOfCurrentSlide',
      paramDefs: {
        path: ['call-id', 'contentSharingSession-id'],
      },
      params,
    };
  },
  /**
   * `PUT /app/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}/pngOfCurrentSlide`
   *
   */
  set: function set(
    body: IEndpoints['PUT /app/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}/pngOfCurrentSlide']['body'],
    params?: IEndpoints['PUT /app/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}/pngOfCurrentSlide']['parameters']
  ): EndpointRequest<
    IEndpoints['PUT /app/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}/pngOfCurrentSlide']['response']
  > {
    return {
      ver: 'beta',
      method: 'put',
      path: '/app/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}/pngOfCurrentSlide',
      paramDefs: {
        path: ['call-id', 'contentSharingSession-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /app/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}/pngOfCurrentSlide`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /app/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}/pngOfCurrentSlide']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /app/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}/pngOfCurrentSlide']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/app/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}/pngOfCurrentSlide',
      paramDefs: {
        header: ['If-Match'],
        path: ['call-id', 'contentSharingSession-id'],
      },
      params,
    };
  },
};
