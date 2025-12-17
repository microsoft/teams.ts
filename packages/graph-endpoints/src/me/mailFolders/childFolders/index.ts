export * as messages from './messages';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}': Operation<
    '/me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}',
    'delete'
  >;
  'GET /me/mailFolders/{mailFolder-id}/childFolders': Operation<
    '/me/mailFolders/{mailFolder-id}/childFolders',
    'get'
  >;
  'GET /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}': Operation<
    '/me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}',
    'get'
  >;
  'PATCH /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}': Operation<
    '/me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}',
    'patch'
  >;
  'POST /me/mailFolders/{mailFolder-id}/childFolders': Operation<
    '/me/mailFolders/{mailFolder-id}/childFolders',
    'post'
  >;
  'POST /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/copy': Operation<
    '/me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/copy',
    'post'
  >;
  'GET /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messageRules': Operation<
    '/me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messageRules',
    'get'
  >;
  'POST /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messageRules': Operation<
    '/me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messageRules',
    'post'
  >;
  'GET /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messageRules/{messageRule-id}': Operation<
    '/me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messageRules/{messageRule-id}',
    'get'
  >;
  'PATCH /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messageRules/{messageRule-id}': Operation<
    '/me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messageRules/{messageRule-id}',
    'patch'
  >;
  'DELETE /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messageRules/{messageRule-id}': Operation<
    '/me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messageRules/{messageRule-id}',
    'delete'
  >;
  'POST /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/move': Operation<
    '/me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/move',
    'post'
  >;
  'POST /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/permanentDelete': Operation<
    '/me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/permanentDelete',
    'post'
  >;
}

/**
 * `DELETE /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}']['response']
> {
  return {
    method: 'delete',
    path: '/me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}',
    paramDefs: {
      header: ['If-Match'],
      path: ['mailFolder-id', 'mailFolder-id1'],
    },
    params,
  };
}

/**
  * `GET /me/mailFolders/{mailFolder-id}/childFolders`
  *
  * Get the folder collection under the specified folder. You can use the .../me/mailFolders shortcut to get the top-level
folder collection and navigate to another folder. By default, this operation does not return hidden folders. Use a query parameter includeHiddenFolders to include them in the response.
  */
export function list(
  params?: IEndpoints['GET /me/mailFolders/{mailFolder-id}/childFolders']['parameters']
): EndpointRequest<IEndpoints['GET /me/mailFolders/{mailFolder-id}/childFolders']['response']> {
  return {
    method: 'get',
    path: '/me/mailFolders/{mailFolder-id}/childFolders',
    paramDefs: {
      path: ['mailFolder-id'],
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
 * `GET /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}`
 *
 * The collection of child folders in the mailFolder.
 */
export function get(
  params?: IEndpoints['GET /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}']['response']
> {
  return {
    method: 'get',
    path: '/me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}',
    paramDefs: {
      path: ['mailFolder-id', 'mailFolder-id1'],
      query: ['includeHiddenFolders', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}']['body'],
  params?: IEndpoints['PATCH /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}']['response']
> {
  return {
    method: 'patch',
    path: '/me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}',
    paramDefs: {
      path: ['mailFolder-id', 'mailFolder-id1'],
    },
    params,
    body,
  };
}

/**
 * `POST /me/mailFolders/{mailFolder-id}/childFolders`
 *
 * Use this API to create a new child mailFolder. If you intend a new folder to be hidden, you must set the isHidden property to true on creation.
 */
export function create(
  body: IEndpoints['POST /me/mailFolders/{mailFolder-id}/childFolders']['body'],
  params?: IEndpoints['POST /me/mailFolders/{mailFolder-id}/childFolders']['parameters']
): EndpointRequest<IEndpoints['POST /me/mailFolders/{mailFolder-id}/childFolders']['response']> {
  return {
    method: 'post',
    path: '/me/mailFolders/{mailFolder-id}/childFolders',
    paramDefs: {
      path: ['mailFolder-id'],
    },
    params,
    body,
  };
}

export const copy = {
  /**
   * `POST /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/copy`
   *
   * Copy a mailfolder and its contents to another mailfolder.
   */
  create: function create(
    body: IEndpoints['POST /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/copy']['body'],
    params?: IEndpoints['POST /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/copy']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/copy']['response']
  > {
    return {
      method: 'post',
      path: '/me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/copy',
      paramDefs: {
        path: ['mailFolder-id', 'mailFolder-id1'],
      },
      params,
      body,
    };
  },
};

export const messageRules = {
  /**
   * `GET /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messageRules`
   *
   * The collection of rules that apply to the user&#x27;s Inbox folder.
   */
  list: function list(
    params?: IEndpoints['GET /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messageRules']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messageRules']['response']
  > {
    return {
      method: 'get',
      path: '/me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messageRules',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['mailFolder-id', 'mailFolder-id1'],
      },
      params,
    };
  },
  /**
   * `POST /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messageRules`
   *
   */
  create: function create(
    body: IEndpoints['POST /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messageRules']['body'],
    params?: IEndpoints['POST /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messageRules']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messageRules']['response']
  > {
    return {
      method: 'post',
      path: '/me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messageRules',
      paramDefs: {
        path: ['mailFolder-id', 'mailFolder-id1'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messageRules/{messageRule-id}`
   *
   * The collection of rules that apply to the user&#x27;s Inbox folder.
   */
  get: function get(
    params?: IEndpoints['GET /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messageRules/{messageRule-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messageRules/{messageRule-id}']['response']
  > {
    return {
      method: 'get',
      path: '/me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messageRules/{messageRule-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['mailFolder-id', 'mailFolder-id1', 'messageRule-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messageRules/{messageRule-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messageRules/{messageRule-id}']['body'],
    params?: IEndpoints['PATCH /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messageRules/{messageRule-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messageRules/{messageRule-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messageRules/{messageRule-id}',
      paramDefs: {
        path: ['mailFolder-id', 'mailFolder-id1', 'messageRule-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messageRules/{messageRule-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messageRules/{messageRule-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messageRules/{messageRule-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messageRules/{messageRule-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['mailFolder-id', 'mailFolder-id1', 'messageRule-id'],
      },
      params,
    };
  },
};

export const move = {
  /**
   * `POST /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/move`
   *
   * Move a mailfolder and its contents to another mailfolder.
   */
  create: function create(
    body: IEndpoints['POST /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/move']['body'],
    params?: IEndpoints['POST /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/move']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/move']['response']
  > {
    return {
      method: 'post',
      path: '/me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/move',
      paramDefs: {
        path: ['mailFolder-id', 'mailFolder-id1'],
      },
      params,
      body,
    };
  },
};

export const permanentDelete = {
  /**
   * `POST /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/permanentDelete`
   *
   */
  create: function create(
    params?: IEndpoints['POST /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/permanentDelete']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/permanentDelete']['response']
  > {
    return {
      method: 'post',
      path: '/me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/permanentDelete',
      paramDefs: {
        path: ['mailFolder-id', 'mailFolder-id1'],
      },
      params,
    };
  },
};
