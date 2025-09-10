export * as childFolders from './childFolders';
export * as messages from './messages';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/mailFolders/{mailFolder-id}': Operation<
    '/users/{user-id}/mailFolders/{mailFolder-id}',
    'delete'
  >;
  'GET /users/{user-id}/mailFolders': Operation<'/users/{user-id}/mailFolders', 'get'>;
  'GET /users/{user-id}/mailFolders/{mailFolder-id}': Operation<
    '/users/{user-id}/mailFolders/{mailFolder-id}',
    'get'
  >;
  'PATCH /users/{user-id}/mailFolders/{mailFolder-id}': Operation<
    '/users/{user-id}/mailFolders/{mailFolder-id}',
    'patch'
  >;
  'POST /users/{user-id}/mailFolders': Operation<'/users/{user-id}/mailFolders', 'post'>;
  'POST /users/{user-id}/mailFolders/{mailFolder-id}/copy': Operation<
    '/users/{user-id}/mailFolders/{mailFolder-id}/copy',
    'post'
  >;
  'GET /users/{user-id}/mailFolders/{mailFolder-id}/messageRules': Operation<
    '/users/{user-id}/mailFolders/{mailFolder-id}/messageRules',
    'get'
  >;
  'POST /users/{user-id}/mailFolders/{mailFolder-id}/messageRules': Operation<
    '/users/{user-id}/mailFolders/{mailFolder-id}/messageRules',
    'post'
  >;
  'GET /users/{user-id}/mailFolders/{mailFolder-id}/messageRules/{messageRule-id}': Operation<
    '/users/{user-id}/mailFolders/{mailFolder-id}/messageRules/{messageRule-id}',
    'get'
  >;
  'PATCH /users/{user-id}/mailFolders/{mailFolder-id}/messageRules/{messageRule-id}': Operation<
    '/users/{user-id}/mailFolders/{mailFolder-id}/messageRules/{messageRule-id}',
    'patch'
  >;
  'DELETE /users/{user-id}/mailFolders/{mailFolder-id}/messageRules/{messageRule-id}': Operation<
    '/users/{user-id}/mailFolders/{mailFolder-id}/messageRules/{messageRule-id}',
    'delete'
  >;
  'POST /users/{user-id}/mailFolders/{mailFolder-id}/move': Operation<
    '/users/{user-id}/mailFolders/{mailFolder-id}/move',
    'post'
  >;
  'POST /users/{user-id}/mailFolders/{mailFolder-id}/permanentDelete': Operation<
    '/users/{user-id}/mailFolders/{mailFolder-id}/permanentDelete',
    'post'
  >;
}

/**
 * `DELETE /users/{user-id}/mailFolders/{mailFolder-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/mailFolders/{mailFolder-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /users/{user-id}/mailFolders/{mailFolder-id}']['response']> {
  return {
    method: 'delete',
    path: '/users/{user-id}/mailFolders/{mailFolder-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['user-id', 'mailFolder-id'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/mailFolders`
 *
 * The user&#x27;s mail folders. Read-only. Nullable.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/mailFolders']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/mailFolders']['response']> {
  return {
    method: 'get',
    path: '/users/{user-id}/mailFolders',
    paramDefs: {
      path: ['user-id'],
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
 * `GET /users/{user-id}/mailFolders/{mailFolder-id}`
 *
 * The user&#x27;s mail folders. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/mailFolders/{mailFolder-id}']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/mailFolders/{mailFolder-id}']['response']> {
  return {
    method: 'get',
    path: '/users/{user-id}/mailFolders/{mailFolder-id}',
    paramDefs: {
      path: ['user-id', 'mailFolder-id'],
      query: ['includeHiddenFolders', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /users/{user-id}/mailFolders/{mailFolder-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/mailFolders/{mailFolder-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/mailFolders/{mailFolder-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /users/{user-id}/mailFolders/{mailFolder-id}']['response']> {
  return {
    method: 'patch',
    path: '/users/{user-id}/mailFolders/{mailFolder-id}',
    paramDefs: {
      path: ['user-id', 'mailFolder-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/mailFolders`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/mailFolders']['body'],
  params?: IEndpoints['POST /users/{user-id}/mailFolders']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/mailFolders']['response']> {
  return {
    method: 'post',
    path: '/users/{user-id}/mailFolders',
    paramDefs: {
      path: ['user-id'],
    },
    params,
    body,
  };
}

export const copy = {
  /**
   * `POST /users/{user-id}/mailFolders/{mailFolder-id}/copy`
   *
   * Copy a mailfolder and its contents to another mailfolder.
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/mailFolders/{mailFolder-id}/copy']['body'],
    params?: IEndpoints['POST /users/{user-id}/mailFolders/{mailFolder-id}/copy']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/mailFolders/{mailFolder-id}/copy']['response']
  > {
    return {
      method: 'post',
      path: '/users/{user-id}/mailFolders/{mailFolder-id}/copy',
      paramDefs: {
        path: ['user-id', 'mailFolder-id'],
      },
      params,
      body,
    };
  },
};

export const messageRules = {
  /**
   * `GET /users/{user-id}/mailFolders/{mailFolder-id}/messageRules`
   *
   * The collection of rules that apply to the user&#x27;s Inbox folder.
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/mailFolders/{mailFolder-id}/messageRules']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/mailFolders/{mailFolder-id}/messageRules']['response']
  > {
    return {
      method: 'get',
      path: '/users/{user-id}/mailFolders/{mailFolder-id}/messageRules',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id', 'mailFolder-id'],
      },
      params,
    };
  },
  /**
   * `POST /users/{user-id}/mailFolders/{mailFolder-id}/messageRules`
   *
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/mailFolders/{mailFolder-id}/messageRules']['body'],
    params?: IEndpoints['POST /users/{user-id}/mailFolders/{mailFolder-id}/messageRules']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/mailFolders/{mailFolder-id}/messageRules']['response']
  > {
    return {
      method: 'post',
      path: '/users/{user-id}/mailFolders/{mailFolder-id}/messageRules',
      paramDefs: {
        path: ['user-id', 'mailFolder-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /users/{user-id}/mailFolders/{mailFolder-id}/messageRules/{messageRule-id}`
   *
   * The collection of rules that apply to the user&#x27;s Inbox folder.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/mailFolders/{mailFolder-id}/messageRules/{messageRule-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/mailFolders/{mailFolder-id}/messageRules/{messageRule-id}']['response']
  > {
    return {
      method: 'get',
      path: '/users/{user-id}/mailFolders/{mailFolder-id}/messageRules/{messageRule-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'mailFolder-id', 'messageRule-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /users/{user-id}/mailFolders/{mailFolder-id}/messageRules/{messageRule-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /users/{user-id}/mailFolders/{mailFolder-id}/messageRules/{messageRule-id}']['body'],
    params?: IEndpoints['PATCH /users/{user-id}/mailFolders/{mailFolder-id}/messageRules/{messageRule-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /users/{user-id}/mailFolders/{mailFolder-id}/messageRules/{messageRule-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/users/{user-id}/mailFolders/{mailFolder-id}/messageRules/{messageRule-id}',
      paramDefs: {
        path: ['user-id', 'mailFolder-id', 'messageRule-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /users/{user-id}/mailFolders/{mailFolder-id}/messageRules/{messageRule-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /users/{user-id}/mailFolders/{mailFolder-id}/messageRules/{messageRule-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /users/{user-id}/mailFolders/{mailFolder-id}/messageRules/{messageRule-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/users/{user-id}/mailFolders/{mailFolder-id}/messageRules/{messageRule-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['user-id', 'mailFolder-id', 'messageRule-id'],
      },
      params,
    };
  },
};

export const move = {
  /**
   * `POST /users/{user-id}/mailFolders/{mailFolder-id}/move`
   *
   * Move a mailfolder and its contents to another mailfolder.
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/mailFolders/{mailFolder-id}/move']['body'],
    params?: IEndpoints['POST /users/{user-id}/mailFolders/{mailFolder-id}/move']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/mailFolders/{mailFolder-id}/move']['response']
  > {
    return {
      method: 'post',
      path: '/users/{user-id}/mailFolders/{mailFolder-id}/move',
      paramDefs: {
        path: ['user-id', 'mailFolder-id'],
      },
      params,
      body,
    };
  },
};

export const permanentDelete = {
  /**
   * `POST /users/{user-id}/mailFolders/{mailFolder-id}/permanentDelete`
   *
   */
  create: function create(
    params?: IEndpoints['POST /users/{user-id}/mailFolders/{mailFolder-id}/permanentDelete']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/mailFolders/{mailFolder-id}/permanentDelete']['response']
  > {
    return {
      method: 'post',
      path: '/users/{user-id}/mailFolders/{mailFolder-id}/permanentDelete',
      paramDefs: {
        path: ['user-id', 'mailFolder-id'],
      },
      params,
    };
  },
};
