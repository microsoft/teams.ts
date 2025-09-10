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
  'GET /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/operations': Operation<
    '/users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/operations',
    'get'
  >;
  'GET /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/operations/{mailFolderOperation-id}': Operation<
    '/users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/operations/{mailFolderOperation-id}',
    'get'
  >;
  'POST /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/permanentDelete': Operation<
    '/users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/permanentDelete',
    'post'
  >;
  'POST /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/updateAllMessagesReadState': Operation<
    '/users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/updateAllMessagesReadState',
    'post'
  >;
  'GET /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/userConfigurations': Operation<
    '/users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/userConfigurations',
    'get'
  >;
  'GET /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/userConfigurations/{userConfiguration-id}': Operation<
    '/users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/userConfigurations/{userConfiguration-id}',
    'get'
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
    ver: 'beta',
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
    ver: 'beta',
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
    ver: 'beta',
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
    ver: 'beta',
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
    ver: 'beta',
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
   * Copy a mail folder and its contents to another mail folder.
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/copy']['body'],
    params?: IEndpoints['POST /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/copy']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/copy']['response']
  > {
    return {
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
   * Move a mail folder and its contents to another mail folder.
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/move']['body'],
    params?: IEndpoints['POST /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/move']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/move']['response']
  > {
    return {
      ver: 'beta',
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

export const operations = {
  /**
   * `GET /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/operations`
   *
   * The collection of long-running operations in the mailFolder.
   * @deprecated
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/operations']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/operations']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/operations',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id', 'mailFolder-id', 'mailFolder-id1'],
      },
      params,
    };
  },
  /**
   * `GET /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/operations/{mailFolderOperation-id}`
   *
   * The collection of long-running operations in the mailFolder.
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/operations/{mailFolderOperation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/operations/{mailFolderOperation-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/operations/{mailFolderOperation-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'mailFolder-id', 'mailFolder-id1', 'mailFolderOperation-id'],
      },
      params,
    };
  },
};

export const permanentDelete = {
  /**
   * `POST /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/permanentDelete`
   *
   * Permanently delete a mail folder and remove its items from the user&#x27;s mailbox. For more information about item retention, see Configure Deleted Item retention and Recoverable Items quotas.
   */
  create: function create(
    params?: IEndpoints['POST /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/permanentDelete']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/permanentDelete']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/permanentDelete',
      paramDefs: {
        path: ['user-id', 'mailFolder-id', 'mailFolder-id1'],
      },
      params,
    };
  },
};

export const updateAllMessagesReadState = {
  /**
   * `POST /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/updateAllMessagesReadState`
   *
   * Update the read state of all messages in a mailFolder object.
   * @deprecated
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/updateAllMessagesReadState']['body'],
    params?: IEndpoints['POST /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/updateAllMessagesReadState']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/updateAllMessagesReadState']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/updateAllMessagesReadState',
      paramDefs: {
        path: ['user-id', 'mailFolder-id', 'mailFolder-id1'],
      },
      params,
      body,
    };
  },
};

export const userConfigurations = {
  /**
   * `GET /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/userConfigurations`
   *
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/userConfigurations']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/userConfigurations']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/userConfigurations',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id', 'mailFolder-id', 'mailFolder-id1'],
      },
      params,
    };
  },
  /**
   * `GET /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/userConfigurations/{userConfiguration-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/userConfigurations/{userConfiguration-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/userConfigurations/{userConfiguration-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/userConfigurations/{userConfiguration-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'mailFolder-id', 'mailFolder-id1', 'userConfiguration-id'],
      },
      params,
    };
  },
};
