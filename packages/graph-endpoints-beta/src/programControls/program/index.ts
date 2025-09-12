import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /programControls/{programControl-id}/program': Operation<
    '/programControls/{programControl-id}/program',
    'delete'
  >;
  'GET /programControls/{programControl-id}/program': Operation<
    '/programControls/{programControl-id}/program',
    'get'
  >;
  'PATCH /programControls/{programControl-id}/program': Operation<
    '/programControls/{programControl-id}/program',
    'patch'
  >;
  'GET /programControls/{programControl-id}/program/controls': Operation<
    '/programControls/{programControl-id}/program/controls',
    'get'
  >;
  'POST /programControls/{programControl-id}/program/controls': Operation<
    '/programControls/{programControl-id}/program/controls',
    'post'
  >;
  'GET /programControls/{programControl-id}/program/controls/{programControl-id1}': Operation<
    '/programControls/{programControl-id}/program/controls/{programControl-id1}',
    'get'
  >;
  'PATCH /programControls/{programControl-id}/program/controls/{programControl-id1}': Operation<
    '/programControls/{programControl-id}/program/controls/{programControl-id1}',
    'patch'
  >;
  'DELETE /programControls/{programControl-id}/program/controls/{programControl-id1}': Operation<
    '/programControls/{programControl-id}/program/controls/{programControl-id1}',
    'delete'
  >;
}

/**
 * `DELETE /programControls/{programControl-id}/program`
 *
 */
export function del(
  params?: IEndpoints['DELETE /programControls/{programControl-id}/program']['parameters']
): EndpointRequest<IEndpoints['DELETE /programControls/{programControl-id}/program']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/programControls/{programControl-id}/program',
    paramDefs: {
      header: ['If-Match'],
      path: ['programControl-id'],
    },
    params,
  };
}

/**
 * `GET /programControls/{programControl-id}/program`
 *
 * The program this control is part of.
 */
export function get(
  params?: IEndpoints['GET /programControls/{programControl-id}/program']['parameters']
): EndpointRequest<IEndpoints['GET /programControls/{programControl-id}/program']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/programControls/{programControl-id}/program',
    paramDefs: {
      path: ['programControl-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /programControls/{programControl-id}/program`
 *
 */
export function update(
  body: IEndpoints['PATCH /programControls/{programControl-id}/program']['body'],
  params?: IEndpoints['PATCH /programControls/{programControl-id}/program']['parameters']
): EndpointRequest<IEndpoints['PATCH /programControls/{programControl-id}/program']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/programControls/{programControl-id}/program',
    paramDefs: {
      path: ['programControl-id'],
    },
    params,
    body,
  };
}

export const controls = {
  /**
   * `GET /programControls/{programControl-id}/program/controls`
   *
   * Controls associated with the program.
   */
  list: function list(
    params?: IEndpoints['GET /programControls/{programControl-id}/program/controls']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /programControls/{programControl-id}/program/controls']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/programControls/{programControl-id}/program/controls',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['programControl-id'],
      },
      params,
    };
  },
  /**
   * `POST /programControls/{programControl-id}/program/controls`
   *
   */
  create: function create(
    body: IEndpoints['POST /programControls/{programControl-id}/program/controls']['body'],
    params?: IEndpoints['POST /programControls/{programControl-id}/program/controls']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /programControls/{programControl-id}/program/controls']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/programControls/{programControl-id}/program/controls',
      paramDefs: {
        path: ['programControl-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /programControls/{programControl-id}/program/controls/{programControl-id1}`
   *
   * Controls associated with the program.
   */
  get: function get(
    params?: IEndpoints['GET /programControls/{programControl-id}/program/controls/{programControl-id1}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /programControls/{programControl-id}/program/controls/{programControl-id1}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/programControls/{programControl-id}/program/controls/{programControl-id1}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['programControl-id', 'programControl-id1'],
      },
      params,
    };
  },
  /**
   * `PATCH /programControls/{programControl-id}/program/controls/{programControl-id1}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /programControls/{programControl-id}/program/controls/{programControl-id1}']['body'],
    params?: IEndpoints['PATCH /programControls/{programControl-id}/program/controls/{programControl-id1}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /programControls/{programControl-id}/program/controls/{programControl-id1}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/programControls/{programControl-id}/program/controls/{programControl-id1}',
      paramDefs: {
        path: ['programControl-id', 'programControl-id1'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /programControls/{programControl-id}/program/controls/{programControl-id1}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /programControls/{programControl-id}/program/controls/{programControl-id1}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /programControls/{programControl-id}/program/controls/{programControl-id1}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/programControls/{programControl-id}/program/controls/{programControl-id1}',
      paramDefs: {
        header: ['If-Match'],
        path: ['programControl-id', 'programControl-id1'],
      },
      params,
    };
  },
};
