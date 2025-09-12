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
  'GET /users/{user-id}/mailFolders/{mailFolder-id}/operations': Operation<
    '/users/{user-id}/mailFolders/{mailFolder-id}/operations',
    'get'
  >;
  'GET /users/{user-id}/mailFolders/{mailFolder-id}/operations/{mailFolderOperation-id}': Operation<
    '/users/{user-id}/mailFolders/{mailFolder-id}/operations/{mailFolderOperation-id}',
    'get'
  >;
  'POST /users/{user-id}/mailFolders/{mailFolder-id}/permanentDelete': Operation<
    '/users/{user-id}/mailFolders/{mailFolder-id}/permanentDelete',
    'post'
  >;
  'POST /users/{user-id}/mailFolders/{mailFolder-id}/updateAllMessagesReadState': Operation<
    '/users/{user-id}/mailFolders/{mailFolder-id}/updateAllMessagesReadState',
    'post'
  >;
  'GET /users/{user-id}/mailFolders/{mailFolder-id}/userConfigurations': Operation<
    '/users/{user-id}/mailFolders/{mailFolder-id}/userConfigurations',
    'get'
  >;
  'GET /users/{user-id}/mailFolders/{mailFolder-id}/userConfigurations/{userConfiguration-id}': Operation<
    '/users/{user-id}/mailFolders/{mailFolder-id}/userConfigurations/{userConfiguration-id}',
    'get'
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
    ver: 'beta',
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
    ver: 'beta',
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
    ver: 'beta',
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
    ver: 'beta',
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
    ver: 'beta',
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
   * Copy a mail folder and its contents to another mail folder.
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/mailFolders/{mailFolder-id}/copy']['body'],
    params?: IEndpoints['POST /users/{user-id}/mailFolders/{mailFolder-id}/copy']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/mailFolders/{mailFolder-id}/copy']['response']
  > {
    return {
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
   * Move a mail folder and its contents to another mail folder.
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/mailFolders/{mailFolder-id}/move']['body'],
    params?: IEndpoints['POST /users/{user-id}/mailFolders/{mailFolder-id}/move']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/mailFolders/{mailFolder-id}/move']['response']
  > {
    return {
      ver: 'beta',
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

export const operations = {
  /**
   * `GET /users/{user-id}/mailFolders/{mailFolder-id}/operations`
   *
   * The collection of long-running operations in the mailFolder.
   * @deprecated
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/mailFolders/{mailFolder-id}/operations']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/mailFolders/{mailFolder-id}/operations']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/mailFolders/{mailFolder-id}/operations',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id', 'mailFolder-id'],
      },
      params,
    };
  },
  /**
   * `GET /users/{user-id}/mailFolders/{mailFolder-id}/operations/{mailFolderOperation-id}`
   *
   * The collection of long-running operations in the mailFolder.
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/mailFolders/{mailFolder-id}/operations/{mailFolderOperation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/mailFolders/{mailFolder-id}/operations/{mailFolderOperation-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/mailFolders/{mailFolder-id}/operations/{mailFolderOperation-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'mailFolder-id', 'mailFolderOperation-id'],
      },
      params,
    };
  },
};

export const permanentDelete = {
  /**
   * `POST /users/{user-id}/mailFolders/{mailFolder-id}/permanentDelete`
   *
   * Permanently delete a mail folder and remove its items from the user&#x27;s mailbox. For more information about item retention, see Configure Deleted Item retention and Recoverable Items quotas.
   */
  create: function create(
    params?: IEndpoints['POST /users/{user-id}/mailFolders/{mailFolder-id}/permanentDelete']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/mailFolders/{mailFolder-id}/permanentDelete']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/mailFolders/{mailFolder-id}/permanentDelete',
      paramDefs: {
        path: ['user-id', 'mailFolder-id'],
      },
      params,
    };
  },
};

export const updateAllMessagesReadState = {
  /**
   * `POST /users/{user-id}/mailFolders/{mailFolder-id}/updateAllMessagesReadState`
   *
   * Update the read state of all messages in a mailFolder object.
   * @deprecated
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/mailFolders/{mailFolder-id}/updateAllMessagesReadState']['body'],
    params?: IEndpoints['POST /users/{user-id}/mailFolders/{mailFolder-id}/updateAllMessagesReadState']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/mailFolders/{mailFolder-id}/updateAllMessagesReadState']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/mailFolders/{mailFolder-id}/updateAllMessagesReadState',
      paramDefs: {
        path: ['user-id', 'mailFolder-id'],
      },
      params,
      body,
    };
  },
};

export const userConfigurations = {
  /**
   * `GET /users/{user-id}/mailFolders/{mailFolder-id}/userConfigurations`
   *
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/mailFolders/{mailFolder-id}/userConfigurations']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/mailFolders/{mailFolder-id}/userConfigurations']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/mailFolders/{mailFolder-id}/userConfigurations',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id', 'mailFolder-id'],
      },
      params,
    };
  },
  /**
   * `GET /users/{user-id}/mailFolders/{mailFolder-id}/userConfigurations/{userConfiguration-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/mailFolders/{mailFolder-id}/userConfigurations/{userConfiguration-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/mailFolders/{mailFolder-id}/userConfigurations/{userConfiguration-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/mailFolders/{mailFolder-id}/userConfigurations/{userConfiguration-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'mailFolder-id', 'userConfiguration-id'],
      },
      params,
    };
  },
};
