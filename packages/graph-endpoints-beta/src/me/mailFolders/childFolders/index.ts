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
  'GET /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/operations': Operation<
    '/me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/operations',
    'get'
  >;
  'GET /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/operations/{mailFolderOperation-id}': Operation<
    '/me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/operations/{mailFolderOperation-id}',
    'get'
  >;
  'POST /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/permanentDelete': Operation<
    '/me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/permanentDelete',
    'post'
  >;
  'POST /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/updateAllMessagesReadState': Operation<
    '/me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/updateAllMessagesReadState',
    'post'
  >;
  'GET /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/userConfigurations': Operation<
    '/me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/userConfigurations',
    'get'
  >;
  'GET /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/userConfigurations/{userConfiguration-id}': Operation<
    '/me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/userConfigurations/{userConfiguration-id}',
    'get'
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
    ver: 'beta',
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
    ver: 'beta',
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
    ver: 'beta',
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
    ver: 'beta',
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
    ver: 'beta',
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
   * Copy a mail folder and its contents to another mail folder.
   */
  create: function create(
    body: IEndpoints['POST /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/copy']['body'],
    params?: IEndpoints['POST /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/copy']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/copy']['response']
  > {
    return {
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
   * Move a mail folder and its contents to another mail folder.
   */
  create: function create(
    body: IEndpoints['POST /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/move']['body'],
    params?: IEndpoints['POST /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/move']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/move']['response']
  > {
    return {
      ver: 'beta',
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

export const operations = {
  /**
   * `GET /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/operations`
   *
   * The collection of long-running operations in the mailFolder.
   * @deprecated
   */
  list: function list(
    params?: IEndpoints['GET /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/operations']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/operations']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/operations',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['mailFolder-id', 'mailFolder-id1'],
      },
      params,
    };
  },
  /**
   * `GET /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/operations/{mailFolderOperation-id}`
   *
   * The collection of long-running operations in the mailFolder.
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/operations/{mailFolderOperation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/operations/{mailFolderOperation-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/operations/{mailFolderOperation-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['mailFolder-id', 'mailFolder-id1', 'mailFolderOperation-id'],
      },
      params,
    };
  },
};

export const permanentDelete = {
  /**
   * `POST /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/permanentDelete`
   *
   * Permanently delete a mail folder and remove its items from the user&#x27;s mailbox. For more information about item retention, see Configure Deleted Item retention and Recoverable Items quotas.
   */
  create: function create(
    params?: IEndpoints['POST /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/permanentDelete']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/permanentDelete']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/permanentDelete',
      paramDefs: {
        path: ['mailFolder-id', 'mailFolder-id1'],
      },
      params,
    };
  },
};

export const updateAllMessagesReadState = {
  /**
   * `POST /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/updateAllMessagesReadState`
   *
   * Update the read state of all messages in a mailFolder object.
   * @deprecated
   */
  create: function create(
    body: IEndpoints['POST /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/updateAllMessagesReadState']['body'],
    params?: IEndpoints['POST /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/updateAllMessagesReadState']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/updateAllMessagesReadState']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/updateAllMessagesReadState',
      paramDefs: {
        path: ['mailFolder-id', 'mailFolder-id1'],
      },
      params,
      body,
    };
  },
};

export const userConfigurations = {
  /**
   * `GET /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/userConfigurations`
   *
   */
  list: function list(
    params?: IEndpoints['GET /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/userConfigurations']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/userConfigurations']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/userConfigurations',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['mailFolder-id', 'mailFolder-id1'],
      },
      params,
    };
  },
  /**
   * `GET /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/userConfigurations/{userConfiguration-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/userConfigurations/{userConfiguration-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/userConfigurations/{userConfiguration-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/userConfigurations/{userConfiguration-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['mailFolder-id', 'mailFolder-id1', 'userConfiguration-id'],
      },
      params,
    };
  },
};
