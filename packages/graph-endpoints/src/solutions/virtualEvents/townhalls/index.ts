export * as sessions from './sessions';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}': Operation<
    '/solutions/virtualEvents/townhalls/{virtualEventTownhall-id}',
    'delete'
  >;
  'GET /solutions/virtualEvents/townhalls': Operation<'/solutions/virtualEvents/townhalls', 'get'>;
  'GET /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}': Operation<
    '/solutions/virtualEvents/townhalls/{virtualEventTownhall-id}',
    'get'
  >;
  'PATCH /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}': Operation<
    '/solutions/virtualEvents/townhalls/{virtualEventTownhall-id}',
    'patch'
  >;
  'POST /solutions/virtualEvents/townhalls': Operation<
    '/solutions/virtualEvents/townhalls',
    'post'
  >;
  'GET /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/presenters': Operation<
    '/solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/presenters',
    'get'
  >;
  'POST /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/presenters': Operation<
    '/solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/presenters',
    'post'
  >;
  'GET /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/presenters/{virtualEventPresenter-id}': Operation<
    '/solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/presenters/{virtualEventPresenter-id}',
    'get'
  >;
  'PATCH /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/presenters/{virtualEventPresenter-id}': Operation<
    '/solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/presenters/{virtualEventPresenter-id}',
    'patch'
  >;
  'DELETE /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/presenters/{virtualEventPresenter-id}': Operation<
    '/solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/presenters/{virtualEventPresenter-id}',
    'delete'
  >;
}

/**
 * `DELETE /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}']['response']
> {
  return {
    method: 'delete',
    path: '/solutions/virtualEvents/townhalls/{virtualEventTownhall-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['virtualEventTownhall-id'],
    },
    params,
  };
}

/**
 * `GET /solutions/virtualEvents/townhalls`
 *
 * Read the properties and relationships of a virtualEventTownhall object. All roles can get the details of a townhall event.
 */
export function list(
  params?: IEndpoints['GET /solutions/virtualEvents/townhalls']['parameters']
): EndpointRequest<IEndpoints['GET /solutions/virtualEvents/townhalls']['response']> {
  return {
    method: 'get',
    path: '/solutions/virtualEvents/townhalls',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}`
 *
 * Read the properties and relationships of a virtualEventTownhall object. All roles can get the details of a townhall event.
 */
export function get(
  params?: IEndpoints['GET /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}']['response']
> {
  return {
    method: 'get',
    path: '/solutions/virtualEvents/townhalls/{virtualEventTownhall-id}',
    paramDefs: {
      path: ['virtualEventTownhall-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}`
 *
 * Update the properties of a virtualEventTownhall object. Only the Organizer and Co-organizer can make changes to a townhall event.
 */
export function update(
  body: IEndpoints['PATCH /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}']['body'],
  params?: IEndpoints['PATCH /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}']['response']
> {
  return {
    method: 'patch',
    path: '/solutions/virtualEvents/townhalls/{virtualEventTownhall-id}',
    paramDefs: {
      path: ['virtualEventTownhall-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /solutions/virtualEvents/townhalls`
 *
 * Create a new virtualEventTownhall object in draft mode.
 */
export function create(
  body: IEndpoints['POST /solutions/virtualEvents/townhalls']['body']
): EndpointRequest<IEndpoints['POST /solutions/virtualEvents/townhalls']['response']> {
  return {
    method: 'post',
    path: '/solutions/virtualEvents/townhalls',
    body,
  };
}

export const presenters = {
  /**
  * `GET /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/presenters`
  *
  * Get the list of all virtualEventPresenter objects associated with a virtual event. Currently the supported virtual event types are:
- virtualEventTownhall
- virtualEventWebinar
  */
  list: function list(
    params?: IEndpoints['GET /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/presenters']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/presenters']['response']
  > {
    return {
      method: 'get',
      path: '/solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/presenters',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['virtualEventTownhall-id'],
      },
      params,
    };
  },
  /**
  * `POST /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/presenters`
  *
  * Create a new virtualEventPresenter object on a virtual event. Currently, the following types of virtual events are supported: 
- virtualEventTownhall
- virtualEventWebinar
  */
  create: function create(
    body: IEndpoints['POST /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/presenters']['body'],
    params?: IEndpoints['POST /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/presenters']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/presenters']['response']
  > {
    return {
      method: 'post',
      path: '/solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/presenters',
      paramDefs: {
        path: ['virtualEventTownhall-id'],
      },
      params,
      body,
    };
  },
  /**
  * `GET /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/presenters/{virtualEventPresenter-id}`
  *
  * Read the properties and relationships of a virtualEventPresenter object. Currently the supported virtual event types are: 
- virtualEventTownhall
- virtualEventWebinar
  */
  get: function get(
    params?: IEndpoints['GET /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/presenters/{virtualEventPresenter-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/presenters/{virtualEventPresenter-id}']['response']
  > {
    return {
      method: 'get',
      path: '/solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/presenters/{virtualEventPresenter-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['virtualEventTownhall-id', 'virtualEventPresenter-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/presenters/{virtualEventPresenter-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/presenters/{virtualEventPresenter-id}']['body'],
    params?: IEndpoints['PATCH /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/presenters/{virtualEventPresenter-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/presenters/{virtualEventPresenter-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/presenters/{virtualEventPresenter-id}',
      paramDefs: {
        path: ['virtualEventTownhall-id', 'virtualEventPresenter-id'],
      },
      params,
      body,
    };
  },
  /**
  * `DELETE /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/presenters/{virtualEventPresenter-id}`
  *
  * Delete a virtualEventPresenter from a virtual event. Currently the supported virtual event types are:
- virtualEventTownhall
- virtualEventWebinar
  */
  del: function del(
    params?: IEndpoints['DELETE /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/presenters/{virtualEventPresenter-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/presenters/{virtualEventPresenter-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/presenters/{virtualEventPresenter-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['virtualEventTownhall-id', 'virtualEventPresenter-id'],
      },
      params,
    };
  },
};
