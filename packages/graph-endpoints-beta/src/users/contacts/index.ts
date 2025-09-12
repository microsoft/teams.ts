import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/contacts/{contact-id}': Operation<
    '/users/{user-id}/contacts/{contact-id}',
    'delete'
  >;
  'GET /users/{user-id}/contacts': Operation<'/users/{user-id}/contacts', 'get'>;
  'GET /users/{user-id}/contacts/{contact-id}': Operation<
    '/users/{user-id}/contacts/{contact-id}',
    'get'
  >;
  'PATCH /users/{user-id}/contacts/{contact-id}': Operation<
    '/users/{user-id}/contacts/{contact-id}',
    'patch'
  >;
  'POST /users/{user-id}/contacts': Operation<'/users/{user-id}/contacts', 'post'>;
  'GET /users/{user-id}/contacts/{contact-id}/extensions': Operation<
    '/users/{user-id}/contacts/{contact-id}/extensions',
    'get'
  >;
  'POST /users/{user-id}/contacts/{contact-id}/extensions': Operation<
    '/users/{user-id}/contacts/{contact-id}/extensions',
    'post'
  >;
  'GET /users/{user-id}/contacts/{contact-id}/extensions/{extension-id}': Operation<
    '/users/{user-id}/contacts/{contact-id}/extensions/{extension-id}',
    'get'
  >;
  'PATCH /users/{user-id}/contacts/{contact-id}/extensions/{extension-id}': Operation<
    '/users/{user-id}/contacts/{contact-id}/extensions/{extension-id}',
    'patch'
  >;
  'DELETE /users/{user-id}/contacts/{contact-id}/extensions/{extension-id}': Operation<
    '/users/{user-id}/contacts/{contact-id}/extensions/{extension-id}',
    'delete'
  >;
  'POST /users/{user-id}/contacts/{contact-id}/permanentDelete': Operation<
    '/users/{user-id}/contacts/{contact-id}/permanentDelete',
    'post'
  >;
  'GET /users/{user-id}/contacts/{contact-id}/photo': Operation<
    '/users/{user-id}/contacts/{contact-id}/photo',
    'get'
  >;
  'PATCH /users/{user-id}/contacts/{contact-id}/photo': Operation<
    '/users/{user-id}/contacts/{contact-id}/photo',
    'patch'
  >;
}

/**
 * `DELETE /users/{user-id}/contacts/{contact-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/contacts/{contact-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /users/{user-id}/contacts/{contact-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/contacts/{contact-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['user-id', 'contact-id'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/contacts`
 *
 * The user&#x27;s contacts. Read-only. Nullable.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/contacts']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/contacts']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/contacts',
    paramDefs: {
      path: ['user-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/contacts/{contact-id}`
 *
 * The user&#x27;s contacts. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/contacts/{contact-id}']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/contacts/{contact-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/contacts/{contact-id}',
    paramDefs: {
      path: ['user-id', 'contact-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /users/{user-id}/contacts/{contact-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/contacts/{contact-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/contacts/{contact-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /users/{user-id}/contacts/{contact-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/contacts/{contact-id}',
    paramDefs: {
      path: ['user-id', 'contact-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/contacts`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/contacts']['body'],
  params?: IEndpoints['POST /users/{user-id}/contacts']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/contacts']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/contacts',
    paramDefs: {
      path: ['user-id'],
    },
    params,
    body,
  };
}

export const extensions = {
  /**
   * `GET /users/{user-id}/contacts/{contact-id}/extensions`
   *
   * The collection of open extensions defined for the contact. Nullable.
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/contacts/{contact-id}/extensions']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/contacts/{contact-id}/extensions']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/contacts/{contact-id}/extensions',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id', 'contact-id'],
      },
      params,
    };
  },
  /**
   * `POST /users/{user-id}/contacts/{contact-id}/extensions`
   *
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/contacts/{contact-id}/extensions']['body'],
    params?: IEndpoints['POST /users/{user-id}/contacts/{contact-id}/extensions']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/contacts/{contact-id}/extensions']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/contacts/{contact-id}/extensions',
      paramDefs: {
        path: ['user-id', 'contact-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /users/{user-id}/contacts/{contact-id}/extensions/{extension-id}`
   *
   * The collection of open extensions defined for the contact. Nullable.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/contacts/{contact-id}/extensions/{extension-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/contacts/{contact-id}/extensions/{extension-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/contacts/{contact-id}/extensions/{extension-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'contact-id', 'extension-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /users/{user-id}/contacts/{contact-id}/extensions/{extension-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /users/{user-id}/contacts/{contact-id}/extensions/{extension-id}']['body'],
    params?: IEndpoints['PATCH /users/{user-id}/contacts/{contact-id}/extensions/{extension-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /users/{user-id}/contacts/{contact-id}/extensions/{extension-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/users/{user-id}/contacts/{contact-id}/extensions/{extension-id}',
      paramDefs: {
        path: ['user-id', 'contact-id', 'extension-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /users/{user-id}/contacts/{contact-id}/extensions/{extension-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /users/{user-id}/contacts/{contact-id}/extensions/{extension-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /users/{user-id}/contacts/{contact-id}/extensions/{extension-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/users/{user-id}/contacts/{contact-id}/extensions/{extension-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['user-id', 'contact-id', 'extension-id'],
      },
      params,
    };
  },
};

export const permanentDelete = {
  /**
   * `POST /users/{user-id}/contacts/{contact-id}/permanentDelete`
   *
   * Permanently delete a contact and place it in the Purges folder in the dumpster in the user&#x27;s mailbox. Email clients such as Outlook or Outlook on the web can&#x27;t access permanently deleted items. Unless there&#x27;s a hold set on the mailbox, the items are permanently deleted after a set period of time. For more information about item retention, see Configure Deleted Item retention and Recoverable Items quotas.
   */
  create: function create(
    params?: IEndpoints['POST /users/{user-id}/contacts/{contact-id}/permanentDelete']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/contacts/{contact-id}/permanentDelete']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/contacts/{contact-id}/permanentDelete',
      paramDefs: {
        path: ['user-id', 'contact-id'],
      },
      params,
    };
  },
};

export const photo = {
  /**
   * `GET /users/{user-id}/contacts/{contact-id}/photo`
   *
   * Optional contact picture. You can get or set a photo for a contact.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/contacts/{contact-id}/photo']['parameters']
  ): EndpointRequest<IEndpoints['GET /users/{user-id}/contacts/{contact-id}/photo']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/contacts/{contact-id}/photo',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'contact-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /users/{user-id}/contacts/{contact-id}/photo`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /users/{user-id}/contacts/{contact-id}/photo']['body'],
    params?: IEndpoints['PATCH /users/{user-id}/contacts/{contact-id}/photo']['parameters']
  ): EndpointRequest<IEndpoints['PATCH /users/{user-id}/contacts/{contact-id}/photo']['response']> {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/users/{user-id}/contacts/{contact-id}/photo',
      paramDefs: {
        path: ['user-id', 'contact-id'],
      },
      params,
      body,
    };
  },
};
