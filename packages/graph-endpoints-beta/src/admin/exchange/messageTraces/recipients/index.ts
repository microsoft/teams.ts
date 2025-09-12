import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /admin/exchange/messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}': Operation<
    '/admin/exchange/messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}',
    'delete'
  >;
  'GET /admin/exchange/messageTraces/{messageTrace-id}/recipients': Operation<
    '/admin/exchange/messageTraces/{messageTrace-id}/recipients',
    'get'
  >;
  'GET /admin/exchange/messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}': Operation<
    '/admin/exchange/messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}',
    'get'
  >;
  'PATCH /admin/exchange/messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}': Operation<
    '/admin/exchange/messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}',
    'patch'
  >;
  'POST /admin/exchange/messageTraces/{messageTrace-id}/recipients': Operation<
    '/admin/exchange/messageTraces/{messageTrace-id}/recipients',
    'post'
  >;
  'GET /admin/exchange/messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events': Operation<
    '/admin/exchange/messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events',
    'get'
  >;
  'POST /admin/exchange/messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events': Operation<
    '/admin/exchange/messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events',
    'post'
  >;
  'GET /admin/exchange/messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events/{messageEvent-id}': Operation<
    '/admin/exchange/messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events/{messageEvent-id}',
    'get'
  >;
  'PATCH /admin/exchange/messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events/{messageEvent-id}': Operation<
    '/admin/exchange/messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events/{messageEvent-id}',
    'patch'
  >;
  'DELETE /admin/exchange/messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events/{messageEvent-id}': Operation<
    '/admin/exchange/messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events/{messageEvent-id}',
    'delete'
  >;
}

/**
 * `DELETE /admin/exchange/messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /admin/exchange/messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /admin/exchange/messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/admin/exchange/messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['messageTrace-id', 'messageRecipient-id'],
    },
    params,
  };
}

/**
 * `GET /admin/exchange/messageTraces/{messageTrace-id}/recipients`
 *
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /admin/exchange/messageTraces/{messageTrace-id}/recipients']['parameters']
): EndpointRequest<
  IEndpoints['GET /admin/exchange/messageTraces/{messageTrace-id}/recipients']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/exchange/messageTraces/{messageTrace-id}/recipients',
    paramDefs: {
      path: ['messageTrace-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /admin/exchange/messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}`
 *
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /admin/exchange/messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /admin/exchange/messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/exchange/messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}',
    paramDefs: {
      path: ['messageTrace-id', 'messageRecipient-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /admin/exchange/messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /admin/exchange/messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}']['body'],
  params?: IEndpoints['PATCH /admin/exchange/messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /admin/exchange/messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/admin/exchange/messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}',
    paramDefs: {
      path: ['messageTrace-id', 'messageRecipient-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /admin/exchange/messageTraces/{messageTrace-id}/recipients`
 *
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /admin/exchange/messageTraces/{messageTrace-id}/recipients']['body'],
  params?: IEndpoints['POST /admin/exchange/messageTraces/{messageTrace-id}/recipients']['parameters']
): EndpointRequest<
  IEndpoints['POST /admin/exchange/messageTraces/{messageTrace-id}/recipients']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/admin/exchange/messageTraces/{messageTrace-id}/recipients',
    paramDefs: {
      path: ['messageTrace-id'],
    },
    params,
    body,
  };
}

export const events = {
  /**
   * `GET /admin/exchange/messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events`
   *
   * @deprecated
   */
  list: function list(
    params?: IEndpoints['GET /admin/exchange/messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /admin/exchange/messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/admin/exchange/messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['messageTrace-id', 'messageRecipient-id'],
      },
      params,
    };
  },
  /**
   * `POST /admin/exchange/messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events`
   *
   * @deprecated
   */
  create: function create(
    body: IEndpoints['POST /admin/exchange/messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events']['body'],
    params?: IEndpoints['POST /admin/exchange/messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /admin/exchange/messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/admin/exchange/messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events',
      paramDefs: {
        path: ['messageTrace-id', 'messageRecipient-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /admin/exchange/messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events/{messageEvent-id}`
   *
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /admin/exchange/messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events/{messageEvent-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /admin/exchange/messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events/{messageEvent-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/admin/exchange/messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events/{messageEvent-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['messageTrace-id', 'messageRecipient-id', 'messageEvent-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /admin/exchange/messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events/{messageEvent-id}`
   *
   * @deprecated
   */
  update: function update(
    body: IEndpoints['PATCH /admin/exchange/messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events/{messageEvent-id}']['body'],
    params?: IEndpoints['PATCH /admin/exchange/messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events/{messageEvent-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /admin/exchange/messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events/{messageEvent-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/admin/exchange/messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events/{messageEvent-id}',
      paramDefs: {
        path: ['messageTrace-id', 'messageRecipient-id', 'messageEvent-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /admin/exchange/messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events/{messageEvent-id}`
   *
   * @deprecated
   */
  del: function del(
    params?: IEndpoints['DELETE /admin/exchange/messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events/{messageEvent-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /admin/exchange/messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events/{messageEvent-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/admin/exchange/messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events/{messageEvent-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['messageTrace-id', 'messageRecipient-id', 'messageEvent-id'],
      },
      params,
    };
  },
};
