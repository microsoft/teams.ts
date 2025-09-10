import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/collaboration': Operation<'/security/collaboration', 'delete'>;
  'GET /security/collaboration': Operation<'/security/collaboration', 'get'>;
  'PATCH /security/collaboration': Operation<'/security/collaboration', 'patch'>;
  'GET /security/collaboration/analyzedEmails': Operation<
    '/security/collaboration/analyzedEmails',
    'get'
  >;
  'POST /security/collaboration/analyzedEmails': Operation<
    '/security/collaboration/analyzedEmails',
    'post'
  >;
  'GET /security/collaboration/analyzedEmails/{analyzedEmail-id}': Operation<
    '/security/collaboration/analyzedEmails/{analyzedEmail-id}',
    'get'
  >;
  'PATCH /security/collaboration/analyzedEmails/{analyzedEmail-id}': Operation<
    '/security/collaboration/analyzedEmails/{analyzedEmail-id}',
    'patch'
  >;
  'DELETE /security/collaboration/analyzedEmails/{analyzedEmail-id}': Operation<
    '/security/collaboration/analyzedEmails/{analyzedEmail-id}',
    'delete'
  >;
}

/**
 * `DELETE /security/collaboration`
 *
 */
export function del(
  params?: IEndpoints['DELETE /security/collaboration']['parameters']
): EndpointRequest<IEndpoints['DELETE /security/collaboration']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/security/collaboration',
    paramDefs: {
      header: ['If-Match'],
    },
    params,
  };
}

/**
 * `GET /security/collaboration`
 *
 * Enables read and other actions on collaborative entities in Microsoft Defender.
 */
export function get(
  params?: IEndpoints['GET /security/collaboration']['parameters']
): EndpointRequest<IEndpoints['GET /security/collaboration']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/collaboration',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /security/collaboration`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/collaboration']['body']
): EndpointRequest<IEndpoints['PATCH /security/collaboration']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/security/collaboration',
    body,
  };
}

export const analyzedEmails = {
  /**
   * `GET /security/collaboration/analyzedEmails`
   *
   * Read the properties and relationships of an analyzedEmail object.
   */
  list: function list(
    params?: IEndpoints['GET /security/collaboration/analyzedEmails']['parameters']
  ): EndpointRequest<IEndpoints['GET /security/collaboration/analyzedEmails']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/security/collaboration/analyzedEmails',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /security/collaboration/analyzedEmails`
   *
   */
  create: function create(
    body: IEndpoints['POST /security/collaboration/analyzedEmails']['body']
  ): EndpointRequest<IEndpoints['POST /security/collaboration/analyzedEmails']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/security/collaboration/analyzedEmails',
      body,
    };
  },
  /**
   * `GET /security/collaboration/analyzedEmails/{analyzedEmail-id}`
   *
   * Read the properties and relationships of an analyzedEmail object.
   */
  get: function get(
    params?: IEndpoints['GET /security/collaboration/analyzedEmails/{analyzedEmail-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/collaboration/analyzedEmails/{analyzedEmail-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/security/collaboration/analyzedEmails/{analyzedEmail-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['analyzedEmail-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /security/collaboration/analyzedEmails/{analyzedEmail-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /security/collaboration/analyzedEmails/{analyzedEmail-id}']['body'],
    params?: IEndpoints['PATCH /security/collaboration/analyzedEmails/{analyzedEmail-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /security/collaboration/analyzedEmails/{analyzedEmail-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/security/collaboration/analyzedEmails/{analyzedEmail-id}',
      paramDefs: {
        path: ['analyzedEmail-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /security/collaboration/analyzedEmails/{analyzedEmail-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /security/collaboration/analyzedEmails/{analyzedEmail-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /security/collaboration/analyzedEmails/{analyzedEmail-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/security/collaboration/analyzedEmails/{analyzedEmail-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['analyzedEmail-id'],
      },
      params,
    };
  },
};
