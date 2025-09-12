import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}': Operation<
    '/messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}',
    'delete'
  >;
  'GET /messageTraces/{messageTrace-id}/recipients': Operation<
    '/messageTraces/{messageTrace-id}/recipients',
    'get'
  >;
  'GET /messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}': Operation<
    '/messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}',
    'get'
  >;
  'PATCH /messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}': Operation<
    '/messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}',
    'patch'
  >;
  'POST /messageTraces/{messageTrace-id}/recipients': Operation<
    '/messageTraces/{messageTrace-id}/recipients',
    'post'
  >;
  'GET /messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events': Operation<
    '/messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events',
    'get'
  >;
  'POST /messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events': Operation<
    '/messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events',
    'post'
  >;
  'GET /messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events/{messageEvent-id}': Operation<
    '/messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events/{messageEvent-id}',
    'get'
  >;
  'PATCH /messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events/{messageEvent-id}': Operation<
    '/messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events/{messageEvent-id}',
    'patch'
  >;
  'DELETE /messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events/{messageEvent-id}': Operation<
    '/messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events/{messageEvent-id}',
    'delete'
  >;
}

/**
 * `DELETE /messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['messageTrace-id', 'messageRecipient-id'],
    },
    params,
  };
}

/**
 * `GET /messageTraces/{messageTrace-id}/recipients`
 *
 */
export function list(
  params?: IEndpoints['GET /messageTraces/{messageTrace-id}/recipients']['parameters']
): EndpointRequest<IEndpoints['GET /messageTraces/{messageTrace-id}/recipients']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/messageTraces/{messageTrace-id}/recipients',
    paramDefs: {
      path: ['messageTrace-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}',
    paramDefs: {
      path: ['messageTrace-id', 'messageRecipient-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}']['body'],
  params?: IEndpoints['PATCH /messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}',
    paramDefs: {
      path: ['messageTrace-id', 'messageRecipient-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /messageTraces/{messageTrace-id}/recipients`
 *
 */
export function create(
  body: IEndpoints['POST /messageTraces/{messageTrace-id}/recipients']['body'],
  params?: IEndpoints['POST /messageTraces/{messageTrace-id}/recipients']['parameters']
): EndpointRequest<IEndpoints['POST /messageTraces/{messageTrace-id}/recipients']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/messageTraces/{messageTrace-id}/recipients',
    paramDefs: {
      path: ['messageTrace-id'],
    },
    params,
    body,
  };
}

export const events = {
  /**
   * `GET /messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events`
   *
   */
  list: function list(
    params?: IEndpoints['GET /messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['messageTrace-id', 'messageRecipient-id'],
      },
      params,
    };
  },
  /**
   * `POST /messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events`
   *
   */
  create: function create(
    body: IEndpoints['POST /messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events']['body'],
    params?: IEndpoints['POST /messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events',
      paramDefs: {
        path: ['messageTrace-id', 'messageRecipient-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events/{messageEvent-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events/{messageEvent-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events/{messageEvent-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events/{messageEvent-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['messageTrace-id', 'messageRecipient-id', 'messageEvent-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events/{messageEvent-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events/{messageEvent-id}']['body'],
    params?: IEndpoints['PATCH /messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events/{messageEvent-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events/{messageEvent-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events/{messageEvent-id}',
      paramDefs: {
        path: ['messageTrace-id', 'messageRecipient-id', 'messageEvent-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events/{messageEvent-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events/{messageEvent-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events/{messageEvent-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events/{messageEvent-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['messageTrace-id', 'messageRecipient-id', 'messageEvent-id'],
      },
      params,
    };
  },
};
