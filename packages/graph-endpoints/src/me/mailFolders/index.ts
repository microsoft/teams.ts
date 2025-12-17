export * as childFolders from './childFolders';
export * as messages from './messages';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/mailFolders/{mailFolder-id}': Operation<'/me/mailFolders/{mailFolder-id}', 'delete'>;
  'GET /me/mailFolders': Operation<'/me/mailFolders', 'get'>;
  'GET /me/mailFolders/{mailFolder-id}': Operation<'/me/mailFolders/{mailFolder-id}', 'get'>;
  'PATCH /me/mailFolders/{mailFolder-id}': Operation<'/me/mailFolders/{mailFolder-id}', 'patch'>;
  'POST /me/mailFolders': Operation<'/me/mailFolders', 'post'>;
  'POST /me/mailFolders/{mailFolder-id}/copy': Operation<
    '/me/mailFolders/{mailFolder-id}/copy',
    'post'
  >;
  'GET /me/mailFolders/{mailFolder-id}/messageRules': Operation<
    '/me/mailFolders/{mailFolder-id}/messageRules',
    'get'
  >;
  'POST /me/mailFolders/{mailFolder-id}/messageRules': Operation<
    '/me/mailFolders/{mailFolder-id}/messageRules',
    'post'
  >;
  'GET /me/mailFolders/{mailFolder-id}/messageRules/{messageRule-id}': Operation<
    '/me/mailFolders/{mailFolder-id}/messageRules/{messageRule-id}',
    'get'
  >;
  'PATCH /me/mailFolders/{mailFolder-id}/messageRules/{messageRule-id}': Operation<
    '/me/mailFolders/{mailFolder-id}/messageRules/{messageRule-id}',
    'patch'
  >;
  'DELETE /me/mailFolders/{mailFolder-id}/messageRules/{messageRule-id}': Operation<
    '/me/mailFolders/{mailFolder-id}/messageRules/{messageRule-id}',
    'delete'
  >;
  'POST /me/mailFolders/{mailFolder-id}/move': Operation<
    '/me/mailFolders/{mailFolder-id}/move',
    'post'
  >;
  'POST /me/mailFolders/{mailFolder-id}/permanentDelete': Operation<
    '/me/mailFolders/{mailFolder-id}/permanentDelete',
    'post'
  >;
}

/**
 * `DELETE /me/mailFolders/{mailFolder-id}`
 *
 * Delete the specified mailFolder. The folder can be a mailSearchFolder. You can specify a mail folder by its folder ID, or by its well-known folder name, if one exists.
 */
export function del(
  params?: IEndpoints['DELETE /me/mailFolders/{mailFolder-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/mailFolders/{mailFolder-id}']['response']> {
  return {
    method: 'delete',
    path: '/me/mailFolders/{mailFolder-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['mailFolder-id'],
    },
    params,
  };
}

/**
 * `GET /me/mailFolders`
 *
 * Get the mail folder collection directly under the root folder of the signed-in user. The returned collection includes any mail search folders directly under the root. By default, this operation does not return hidden folders. Use a query parameter includeHiddenFolders to include them in the response. This operation does not return all mail folders in a mailbox, only the child folders of the root folder. To return all mail folders in a mailbox, each child folder must be traversed separately.
 */
export function list(
  params?: IEndpoints['GET /me/mailFolders']['parameters']
): EndpointRequest<IEndpoints['GET /me/mailFolders']['response']> {
  return {
    method: 'get',
    path: '/me/mailFolders',
    paramDefs: {
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
 * `GET /me/mailFolders/{mailFolder-id}`
 *
 * Retrieve the properties and relationships of a message folder object. The following list shows the two existing scenarios where an app can get another user&#x27;s mail folder:
 */
export function get(
  params?: IEndpoints['GET /me/mailFolders/{mailFolder-id}']['parameters']
): EndpointRequest<IEndpoints['GET /me/mailFolders/{mailFolder-id}']['response']> {
  return {
    method: 'get',
    path: '/me/mailFolders/{mailFolder-id}',
    paramDefs: {
      path: ['mailFolder-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /me/mailFolders/{mailFolder-id}`
 *
 * Update the properties of mailfolder object.
 */
export function update(
  body: IEndpoints['PATCH /me/mailFolders/{mailFolder-id}']['body'],
  params?: IEndpoints['PATCH /me/mailFolders/{mailFolder-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /me/mailFolders/{mailFolder-id}']['response']> {
  return {
    method: 'patch',
    path: '/me/mailFolders/{mailFolder-id}',
    paramDefs: {
      path: ['mailFolder-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /me/mailFolders`
 *
 * Use this API to create a new mail folder in the root folder of the user&#x27;s mailbox. If you intend a new folder to be hidden, you must set the isHidden property to true on creation.
 */
export function create(
  body: IEndpoints['POST /me/mailFolders']['body']
): EndpointRequest<IEndpoints['POST /me/mailFolders']['response']> {
  return {
    method: 'post',
    path: '/me/mailFolders',
    body,
  };
}

export const copy = {
  /**
   * `POST /me/mailFolders/{mailFolder-id}/copy`
   *
   * Copy a mailfolder and its contents to another mailfolder.
   */
  create: function create(
    body: IEndpoints['POST /me/mailFolders/{mailFolder-id}/copy']['body'],
    params?: IEndpoints['POST /me/mailFolders/{mailFolder-id}/copy']['parameters']
  ): EndpointRequest<IEndpoints['POST /me/mailFolders/{mailFolder-id}/copy']['response']> {
    return {
      method: 'post',
      path: '/me/mailFolders/{mailFolder-id}/copy',
      paramDefs: {
        path: ['mailFolder-id'],
      },
      params,
      body,
    };
  },
};

export const messageRules = {
  /**
   * `GET /me/mailFolders/{mailFolder-id}/messageRules`
   *
   * Get all the messageRule objects defined for the user&#x27;s inbox.
   */
  list: function list(
    params?: IEndpoints['GET /me/mailFolders/{mailFolder-id}/messageRules']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/mailFolders/{mailFolder-id}/messageRules']['response']> {
    return {
      method: 'get',
      path: '/me/mailFolders/{mailFolder-id}/messageRules',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['mailFolder-id'],
      },
      params,
    };
  },
  /**
   * `POST /me/mailFolders/{mailFolder-id}/messageRules`
   *
   * Create a messageRule object by specifying a set of conditions and actions. Outlook carries out those actions if an incoming message in the user&#x27;s Inbox meets the specified conditions.
   */
  create: function create(
    body: IEndpoints['POST /me/mailFolders/{mailFolder-id}/messageRules']['body'],
    params?: IEndpoints['POST /me/mailFolders/{mailFolder-id}/messageRules']['parameters']
  ): EndpointRequest<IEndpoints['POST /me/mailFolders/{mailFolder-id}/messageRules']['response']> {
    return {
      method: 'post',
      path: '/me/mailFolders/{mailFolder-id}/messageRules',
      paramDefs: {
        path: ['mailFolder-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /me/mailFolders/{mailFolder-id}/messageRules/{messageRule-id}`
   *
   * Get the properties and relationships of a messageRule object.
   */
  get: function get(
    params?: IEndpoints['GET /me/mailFolders/{mailFolder-id}/messageRules/{messageRule-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/mailFolders/{mailFolder-id}/messageRules/{messageRule-id}']['response']
  > {
    return {
      method: 'get',
      path: '/me/mailFolders/{mailFolder-id}/messageRules/{messageRule-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['mailFolder-id', 'messageRule-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /me/mailFolders/{mailFolder-id}/messageRules/{messageRule-id}`
   *
   * Change writable properties on a messageRule object and save the changes.
   */
  update: function update(
    body: IEndpoints['PATCH /me/mailFolders/{mailFolder-id}/messageRules/{messageRule-id}']['body'],
    params?: IEndpoints['PATCH /me/mailFolders/{mailFolder-id}/messageRules/{messageRule-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /me/mailFolders/{mailFolder-id}/messageRules/{messageRule-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/me/mailFolders/{mailFolder-id}/messageRules/{messageRule-id}',
      paramDefs: {
        path: ['mailFolder-id', 'messageRule-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /me/mailFolders/{mailFolder-id}/messageRules/{messageRule-id}`
   *
   * Delete the specified messageRule object.
   */
  del: function del(
    params?: IEndpoints['DELETE /me/mailFolders/{mailFolder-id}/messageRules/{messageRule-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /me/mailFolders/{mailFolder-id}/messageRules/{messageRule-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/me/mailFolders/{mailFolder-id}/messageRules/{messageRule-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['mailFolder-id', 'messageRule-id'],
      },
      params,
    };
  },
};

export const move = {
  /**
   * `POST /me/mailFolders/{mailFolder-id}/move`
   *
   * Move a mailfolder and its contents to another mailfolder.
   */
  create: function create(
    body: IEndpoints['POST /me/mailFolders/{mailFolder-id}/move']['body'],
    params?: IEndpoints['POST /me/mailFolders/{mailFolder-id}/move']['parameters']
  ): EndpointRequest<IEndpoints['POST /me/mailFolders/{mailFolder-id}/move']['response']> {
    return {
      method: 'post',
      path: '/me/mailFolders/{mailFolder-id}/move',
      paramDefs: {
        path: ['mailFolder-id'],
      },
      params,
      body,
    };
  },
};

export const permanentDelete = {
  /**
   * `POST /me/mailFolders/{mailFolder-id}/permanentDelete`
   *
   */
  create: function create(
    params?: IEndpoints['POST /me/mailFolders/{mailFolder-id}/permanentDelete']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/mailFolders/{mailFolder-id}/permanentDelete']['response']
  > {
    return {
      method: 'post',
      path: '/me/mailFolders/{mailFolder-id}/permanentDelete',
      paramDefs: {
        path: ['mailFolder-id'],
      },
      params,
    };
  },
};
