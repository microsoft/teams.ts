export * as registrationConfiguration from './registrationConfiguration';
export * as registrations from './registrations';
export * as sessions from './sessions';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /solutions/virtualEvents/webinars/{virtualEventWebinar-id}': Operation<
    '/solutions/virtualEvents/webinars/{virtualEventWebinar-id}',
    'delete'
  >;
  'GET /solutions/virtualEvents/webinars': Operation<'/solutions/virtualEvents/webinars', 'get'>;
  'GET /solutions/virtualEvents/webinars/{virtualEventWebinar-id}': Operation<
    '/solutions/virtualEvents/webinars/{virtualEventWebinar-id}',
    'get'
  >;
  'PATCH /solutions/virtualEvents/webinars/{virtualEventWebinar-id}': Operation<
    '/solutions/virtualEvents/webinars/{virtualEventWebinar-id}',
    'patch'
  >;
  'POST /solutions/virtualEvents/webinars': Operation<'/solutions/virtualEvents/webinars', 'post'>;
  'GET /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/presenters': Operation<
    '/solutions/virtualEvents/webinars/{virtualEventWebinar-id}/presenters',
    'get'
  >;
  'POST /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/presenters': Operation<
    '/solutions/virtualEvents/webinars/{virtualEventWebinar-id}/presenters',
    'post'
  >;
  'GET /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/presenters/{virtualEventPresenter-id}': Operation<
    '/solutions/virtualEvents/webinars/{virtualEventWebinar-id}/presenters/{virtualEventPresenter-id}',
    'get'
  >;
  'PATCH /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/presenters/{virtualEventPresenter-id}': Operation<
    '/solutions/virtualEvents/webinars/{virtualEventWebinar-id}/presenters/{virtualEventPresenter-id}',
    'patch'
  >;
  'DELETE /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/presenters/{virtualEventPresenter-id}': Operation<
    '/solutions/virtualEvents/webinars/{virtualEventWebinar-id}/presenters/{virtualEventPresenter-id}',
    'delete'
  >;
}

/**
 * `DELETE /solutions/virtualEvents/webinars/{virtualEventWebinar-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /solutions/virtualEvents/webinars/{virtualEventWebinar-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /solutions/virtualEvents/webinars/{virtualEventWebinar-id}']['response']
> {
  return {
    method: 'delete',
    path: '/solutions/virtualEvents/webinars/{virtualEventWebinar-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['virtualEventWebinar-id'],
    },
    params,
  };
}

/**
 * `GET /solutions/virtualEvents/webinars`
 *
 * Get the list of all virtualEventWebinar objects created in a tenant.
 */
export function list(
  params?: IEndpoints['GET /solutions/virtualEvents/webinars']['parameters']
): EndpointRequest<IEndpoints['GET /solutions/virtualEvents/webinars']['response']> {
  return {
    method: 'get',
    path: '/solutions/virtualEvents/webinars',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /solutions/virtualEvents/webinars/{virtualEventWebinar-id}`
 *
 * Read the properties and relationships of a virtualEventWebinar object. All roles can get the details of a webinar event.
 */
export function get(
  params?: IEndpoints['GET /solutions/virtualEvents/webinars/{virtualEventWebinar-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /solutions/virtualEvents/webinars/{virtualEventWebinar-id}']['response']
> {
  return {
    method: 'get',
    path: '/solutions/virtualEvents/webinars/{virtualEventWebinar-id}',
    paramDefs: {
      path: ['virtualEventWebinar-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /solutions/virtualEvents/webinars/{virtualEventWebinar-id}`
 *
 * Update the properties of a virtualEventWebinar object. Only the Organizer and Co-organizer can make changes to a webinar event.
 */
export function update(
  body: IEndpoints['PATCH /solutions/virtualEvents/webinars/{virtualEventWebinar-id}']['body'],
  params?: IEndpoints['PATCH /solutions/virtualEvents/webinars/{virtualEventWebinar-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /solutions/virtualEvents/webinars/{virtualEventWebinar-id}']['response']
> {
  return {
    method: 'patch',
    path: '/solutions/virtualEvents/webinars/{virtualEventWebinar-id}',
    paramDefs: {
      path: ['virtualEventWebinar-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /solutions/virtualEvents/webinars`
 *
 * Create a new virtualEventWebinar object in draft mode.
 */
export function create(
  body: IEndpoints['POST /solutions/virtualEvents/webinars']['body']
): EndpointRequest<IEndpoints['POST /solutions/virtualEvents/webinars']['response']> {
  return {
    method: 'post',
    path: '/solutions/virtualEvents/webinars',
    body,
  };
}

export const presenters = {
  /**
   * `GET /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/presenters`
   *
   * The virtual event presenters.
   */
  list: function list(
    params?: IEndpoints['GET /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/presenters']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/presenters']['response']
  > {
    return {
      method: 'get',
      path: '/solutions/virtualEvents/webinars/{virtualEventWebinar-id}/presenters',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['virtualEventWebinar-id'],
      },
      params,
    };
  },
  /**
  * `POST /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/presenters`
  *
  * Create a new virtualEventPresenter object on a virtual event. Currently, the following types of virtual events are supported: 
- virtualEventTownhall
- virtualEventWebinar
  */
  create: function create(
    body: IEndpoints['POST /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/presenters']['body'],
    params?: IEndpoints['POST /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/presenters']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/presenters']['response']
  > {
    return {
      method: 'post',
      path: '/solutions/virtualEvents/webinars/{virtualEventWebinar-id}/presenters',
      paramDefs: {
        path: ['virtualEventWebinar-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/presenters/{virtualEventPresenter-id}`
   *
   * The virtual event presenters.
   */
  get: function get(
    params?: IEndpoints['GET /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/presenters/{virtualEventPresenter-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/presenters/{virtualEventPresenter-id}']['response']
  > {
    return {
      method: 'get',
      path: '/solutions/virtualEvents/webinars/{virtualEventWebinar-id}/presenters/{virtualEventPresenter-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['virtualEventWebinar-id', 'virtualEventPresenter-id'],
      },
      params,
    };
  },
  /**
  * `PATCH /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/presenters/{virtualEventPresenter-id}`
  *
  * Update the properties of a virtualEventPresenter object. Currently the supported virtual event types are:
- virtualEventWebinar.
  */
  update: function update(
    body: IEndpoints['PATCH /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/presenters/{virtualEventPresenter-id}']['body'],
    params?: IEndpoints['PATCH /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/presenters/{virtualEventPresenter-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/presenters/{virtualEventPresenter-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/solutions/virtualEvents/webinars/{virtualEventWebinar-id}/presenters/{virtualEventPresenter-id}',
      paramDefs: {
        path: ['virtualEventWebinar-id', 'virtualEventPresenter-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/presenters/{virtualEventPresenter-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/presenters/{virtualEventPresenter-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/presenters/{virtualEventPresenter-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/solutions/virtualEvents/webinars/{virtualEventWebinar-id}/presenters/{virtualEventPresenter-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['virtualEventWebinar-id', 'virtualEventPresenter-id'],
      },
      params,
    };
  },
};
