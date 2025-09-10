export * as messages from './messages';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}': Operation<
    '/users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}',
    'delete'
  >;
  'GET /users/{user-id}/mailFolders/{mailFolder-id}/childFolders': Operation<
    '/users/{user-id}/mailFolders/{mailFolder-id}/childFolders',
    'get'
  >;
  'GET /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}': Operation<
    '/users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}',
    'get'
  >;
  'PATCH /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}': Operation<
    '/users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}',
    'patch'
  >;
  'POST /users/{user-id}/mailFolders/{mailFolder-id}/childFolders': Operation<
    '/users/{user-id}/mailFolders/{mailFolder-id}/childFolders',
    'post'
  >;
  'POST /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/copy': Operation<
    '/users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/copy',
    'post'
  >;
  'GET /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messageRules': Operation<
    '/users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messageRules',
    'get'
  >;
  'POST /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messageRules': Operation<
    '/users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messageRules',
    'post'
  >;
  'GET /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messageRules/{messageRule-id}': Operation<
    '/users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messageRules/{messageRule-id}',
    'get'
  >;
  'PATCH /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messageRules/{messageRule-id}': Operation<
    '/users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messageRules/{messageRule-id}',
    'patch'
  >;
  'DELETE /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messageRules/{messageRule-id}': Operation<
    '/users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messageRules/{messageRule-id}',
    'delete'
  >;
  'POST /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/move': Operation<
    '/users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/move',
    'post'
  >;
  'POST /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/permanentDelete': Operation<
    '/users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/permanentDelete',
    'post'
  >;
}

/**
 * `DELETE /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}']['response']
> {
  return {
    method: 'delete',
    path: '/users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}',
    paramDefs: {
      header: ['If-Match'],
      path: ['user-id', 'mailFolder-id', 'mailFolder-id1'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/mailFolders/{mailFolder-id}/childFolders`
 *
 * The collection of child folders in the mailFolder.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/mailFolders/{mailFolder-id}/childFolders']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/mailFolders/{mailFolder-id}/childFolders']['response']
> {
  return {
    method: 'get',
    path: '/users/{user-id}/mailFolders/{mailFolder-id}/childFolders',
    paramDefs: {
      path: ['user-id', 'mailFolder-id'],
      query: [
        'includeHiddenFolders',
        '$top',
        '$skip',
        '$search',
        '$filter',
        '$count',
        '$orderby',
        '$select',
        '$expand',
      ],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}`
 *
 * The collection of child folders in the mailFolder.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}']['response']
> {
  return {
    method: 'get',
    path: '/users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}',
    paramDefs: {
      path: ['user-id', 'mailFolder-id', 'mailFolder-id1'],
      query: ['includeHiddenFolders', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}']['response']
> {
  return {
    method: 'patch',
    path: '/users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}',
    paramDefs: {
      path: ['user-id', 'mailFolder-id', 'mailFolder-id1'],
    },
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/mailFolders/{mailFolder-id}/childFolders`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/mailFolders/{mailFolder-id}/childFolders']['body'],
  params?: IEndpoints['POST /users/{user-id}/mailFolders/{mailFolder-id}/childFolders']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/mailFolders/{mailFolder-id}/childFolders']['response']
> {
  return {
    method: 'post',
    path: '/users/{user-id}/mailFolders/{mailFolder-id}/childFolders',
    paramDefs: {
      path: ['user-id', 'mailFolder-id'],
    },
    params,
    body,
  };
}

export const copy = {
  /**
   * `POST /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/copy`
   *
   * Copy a mailfolder and its contents to another mailfolder.
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/copy']['body'],
    params?: IEndpoints['POST /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/copy']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/copy']['response']
  > {
    return {
      method: 'post',
      path: '/users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/copy',
      paramDefs: {
        path: ['user-id', 'mailFolder-id', 'mailFolder-id1'],
      },
      params,
      body,
    };
  },
};

export const messageRules = {
  /**
   * `GET /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messageRules`
   *
   * The collection of rules that apply to the user&#x27;s Inbox folder.
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messageRules']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messageRules']['response']
  > {
    return {
      method: 'get',
      path: '/users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messageRules',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id', 'mailFolder-id', 'mailFolder-id1'],
      },
      params,
    };
  },
  /**
   * `POST /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messageRules`
   *
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messageRules']['body'],
    params?: IEndpoints['POST /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messageRules']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messageRules']['response']
  > {
    return {
      method: 'post',
      path: '/users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messageRules',
      paramDefs: {
        path: ['user-id', 'mailFolder-id', 'mailFolder-id1'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messageRules/{messageRule-id}`
   *
   * The collection of rules that apply to the user&#x27;s Inbox folder.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messageRules/{messageRule-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messageRules/{messageRule-id}']['response']
  > {
    return {
      method: 'get',
      path: '/users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messageRules/{messageRule-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'mailFolder-id', 'mailFolder-id1', 'messageRule-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messageRules/{messageRule-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messageRules/{messageRule-id}']['body'],
    params?: IEndpoints['PATCH /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messageRules/{messageRule-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messageRules/{messageRule-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messageRules/{messageRule-id}',
      paramDefs: {
        path: ['user-id', 'mailFolder-id', 'mailFolder-id1', 'messageRule-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messageRules/{messageRule-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messageRules/{messageRule-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messageRules/{messageRule-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messageRules/{messageRule-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['user-id', 'mailFolder-id', 'mailFolder-id1', 'messageRule-id'],
      },
      params,
    };
  },
};

export const move = {
  /**
   * `POST /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/move`
   *
   * Move a mailfolder and its contents to another mailfolder.
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/move']['body'],
    params?: IEndpoints['POST /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/move']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/move']['response']
  > {
    return {
      method: 'post',
      path: '/users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/move',
      paramDefs: {
        path: ['user-id', 'mailFolder-id', 'mailFolder-id1'],
      },
      params,
      body,
    };
  },
};

export const permanentDelete = {
  /**
   * `POST /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/permanentDelete`
   *
   */
  create: function create(
    params?: IEndpoints['POST /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/permanentDelete']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/permanentDelete']['response']
  > {
    return {
      method: 'post',
      path: '/users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/permanentDelete',
      paramDefs: {
        path: ['user-id', 'mailFolder-id', 'mailFolder-id1'],
      },
      params,
    };
  },
};
