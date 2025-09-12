export * as sessions from './sessions';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /solutions/virtualEvents/events/{virtualEvent-id}': Operation<
    '/solutions/virtualEvents/events/{virtualEvent-id}',
    'delete'
  >;
  'GET /solutions/virtualEvents/events': Operation<'/solutions/virtualEvents/events', 'get'>;
  'GET /solutions/virtualEvents/events/{virtualEvent-id}': Operation<
    '/solutions/virtualEvents/events/{virtualEvent-id}',
    'get'
  >;
  'PATCH /solutions/virtualEvents/events/{virtualEvent-id}': Operation<
    '/solutions/virtualEvents/events/{virtualEvent-id}',
    'patch'
  >;
  'POST /solutions/virtualEvents/events': Operation<'/solutions/virtualEvents/events', 'post'>;
  'POST /solutions/virtualEvents/events/{virtualEvent-id}/cancel': Operation<
    '/solutions/virtualEvents/events/{virtualEvent-id}/cancel',
    'post'
  >;
  'GET /solutions/virtualEvents/events/{virtualEvent-id}/presenters': Operation<
    '/solutions/virtualEvents/events/{virtualEvent-id}/presenters',
    'get'
  >;
  'POST /solutions/virtualEvents/events/{virtualEvent-id}/presenters': Operation<
    '/solutions/virtualEvents/events/{virtualEvent-id}/presenters',
    'post'
  >;
  'GET /solutions/virtualEvents/events/{virtualEvent-id}/presenters/{virtualEventPresenter-id}': Operation<
    '/solutions/virtualEvents/events/{virtualEvent-id}/presenters/{virtualEventPresenter-id}',
    'get'
  >;
  'PATCH /solutions/virtualEvents/events/{virtualEvent-id}/presenters/{virtualEventPresenter-id}': Operation<
    '/solutions/virtualEvents/events/{virtualEvent-id}/presenters/{virtualEventPresenter-id}',
    'patch'
  >;
  'DELETE /solutions/virtualEvents/events/{virtualEvent-id}/presenters/{virtualEventPresenter-id}': Operation<
    '/solutions/virtualEvents/events/{virtualEvent-id}/presenters/{virtualEventPresenter-id}',
    'delete'
  >;
  'POST /solutions/virtualEvents/events/{virtualEvent-id}/publish': Operation<
    '/solutions/virtualEvents/events/{virtualEvent-id}/publish',
    'post'
  >;
  'POST /solutions/virtualEvents/events/{virtualEvent-id}/setExternalEventInformation': Operation<
    '/solutions/virtualEvents/events/{virtualEvent-id}/setExternalEventInformation',
    'post'
  >;
}

/**
 * `DELETE /solutions/virtualEvents/events/{virtualEvent-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /solutions/virtualEvents/events/{virtualEvent-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /solutions/virtualEvents/events/{virtualEvent-id}']['response']
> {
  return {
    method: 'delete',
    path: '/solutions/virtualEvents/events/{virtualEvent-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['virtualEvent-id'],
    },
    params,
  };
}

/**
 * `GET /solutions/virtualEvents/events`
 *
 */
export function list(
  params?: IEndpoints['GET /solutions/virtualEvents/events']['parameters']
): EndpointRequest<IEndpoints['GET /solutions/virtualEvents/events']['response']> {
  return {
    method: 'get',
    path: '/solutions/virtualEvents/events',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /solutions/virtualEvents/events/{virtualEvent-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /solutions/virtualEvents/events/{virtualEvent-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /solutions/virtualEvents/events/{virtualEvent-id}']['response']
> {
  return {
    method: 'get',
    path: '/solutions/virtualEvents/events/{virtualEvent-id}',
    paramDefs: {
      path: ['virtualEvent-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /solutions/virtualEvents/events/{virtualEvent-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /solutions/virtualEvents/events/{virtualEvent-id}']['body'],
  params?: IEndpoints['PATCH /solutions/virtualEvents/events/{virtualEvent-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /solutions/virtualEvents/events/{virtualEvent-id}']['response']
> {
  return {
    method: 'patch',
    path: '/solutions/virtualEvents/events/{virtualEvent-id}',
    paramDefs: {
      path: ['virtualEvent-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /solutions/virtualEvents/events`
 *
 */
export function create(
  body: IEndpoints['POST /solutions/virtualEvents/events']['body']
): EndpointRequest<IEndpoints['POST /solutions/virtualEvents/events']['response']> {
  return {
    method: 'post',
    path: '/solutions/virtualEvents/events',
    body,
  };
}

export const cancel = {
  /**
   * `POST /solutions/virtualEvents/events/{virtualEvent-id}/cancel`
   *
   */
  create: function create(
    params?: IEndpoints['POST /solutions/virtualEvents/events/{virtualEvent-id}/cancel']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /solutions/virtualEvents/events/{virtualEvent-id}/cancel']['response']
  > {
    return {
      method: 'post',
      path: '/solutions/virtualEvents/events/{virtualEvent-id}/cancel',
      paramDefs: {
        path: ['virtualEvent-id'],
      },
      params,
    };
  },
};

export const presenters = {
  /**
   * `GET /solutions/virtualEvents/events/{virtualEvent-id}/presenters`
   *
   * The virtual event presenters.
   */
  list: function list(
    params?: IEndpoints['GET /solutions/virtualEvents/events/{virtualEvent-id}/presenters']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /solutions/virtualEvents/events/{virtualEvent-id}/presenters']['response']
  > {
    return {
      method: 'get',
      path: '/solutions/virtualEvents/events/{virtualEvent-id}/presenters',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['virtualEvent-id'],
      },
      params,
    };
  },
  /**
   * `POST /solutions/virtualEvents/events/{virtualEvent-id}/presenters`
   *
   */
  create: function create(
    body: IEndpoints['POST /solutions/virtualEvents/events/{virtualEvent-id}/presenters']['body'],
    params?: IEndpoints['POST /solutions/virtualEvents/events/{virtualEvent-id}/presenters']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /solutions/virtualEvents/events/{virtualEvent-id}/presenters']['response']
  > {
    return {
      method: 'post',
      path: '/solutions/virtualEvents/events/{virtualEvent-id}/presenters',
      paramDefs: {
        path: ['virtualEvent-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /solutions/virtualEvents/events/{virtualEvent-id}/presenters/{virtualEventPresenter-id}`
   *
   * The virtual event presenters.
   */
  get: function get(
    params?: IEndpoints['GET /solutions/virtualEvents/events/{virtualEvent-id}/presenters/{virtualEventPresenter-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /solutions/virtualEvents/events/{virtualEvent-id}/presenters/{virtualEventPresenter-id}']['response']
  > {
    return {
      method: 'get',
      path: '/solutions/virtualEvents/events/{virtualEvent-id}/presenters/{virtualEventPresenter-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['virtualEvent-id', 'virtualEventPresenter-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /solutions/virtualEvents/events/{virtualEvent-id}/presenters/{virtualEventPresenter-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /solutions/virtualEvents/events/{virtualEvent-id}/presenters/{virtualEventPresenter-id}']['body'],
    params?: IEndpoints['PATCH /solutions/virtualEvents/events/{virtualEvent-id}/presenters/{virtualEventPresenter-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /solutions/virtualEvents/events/{virtualEvent-id}/presenters/{virtualEventPresenter-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/solutions/virtualEvents/events/{virtualEvent-id}/presenters/{virtualEventPresenter-id}',
      paramDefs: {
        path: ['virtualEvent-id', 'virtualEventPresenter-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /solutions/virtualEvents/events/{virtualEvent-id}/presenters/{virtualEventPresenter-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /solutions/virtualEvents/events/{virtualEvent-id}/presenters/{virtualEventPresenter-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /solutions/virtualEvents/events/{virtualEvent-id}/presenters/{virtualEventPresenter-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/solutions/virtualEvents/events/{virtualEvent-id}/presenters/{virtualEventPresenter-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['virtualEvent-id', 'virtualEventPresenter-id'],
      },
      params,
    };
  },
};

export const publish = {
  /**
   * `POST /solutions/virtualEvents/events/{virtualEvent-id}/publish`
   *
   */
  create: function create(
    params?: IEndpoints['POST /solutions/virtualEvents/events/{virtualEvent-id}/publish']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /solutions/virtualEvents/events/{virtualEvent-id}/publish']['response']
  > {
    return {
      method: 'post',
      path: '/solutions/virtualEvents/events/{virtualEvent-id}/publish',
      paramDefs: {
        path: ['virtualEvent-id'],
      },
      params,
    };
  },
};

export const setExternalEventInformation = {
  /**
   * `POST /solutions/virtualEvents/events/{virtualEvent-id}/setExternalEventInformation`
   *
   */
  create: function create(
    body: IEndpoints['POST /solutions/virtualEvents/events/{virtualEvent-id}/setExternalEventInformation']['body'],
    params?: IEndpoints['POST /solutions/virtualEvents/events/{virtualEvent-id}/setExternalEventInformation']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /solutions/virtualEvents/events/{virtualEvent-id}/setExternalEventInformation']['response']
  > {
    return {
      method: 'post',
      path: '/solutions/virtualEvents/events/{virtualEvent-id}/setExternalEventInformation',
      paramDefs: {
        path: ['virtualEvent-id'],
      },
      params,
      body,
    };
  },
};
