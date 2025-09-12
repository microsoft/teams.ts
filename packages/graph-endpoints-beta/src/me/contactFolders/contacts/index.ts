import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/contactFolders/{contactFolder-id}/contacts/{contact-id}': Operation<
    '/me/contactFolders/{contactFolder-id}/contacts/{contact-id}',
    'delete'
  >;
  'GET /me/contactFolders/{contactFolder-id}/contacts': Operation<
    '/me/contactFolders/{contactFolder-id}/contacts',
    'get'
  >;
  'GET /me/contactFolders/{contactFolder-id}/contacts/{contact-id}': Operation<
    '/me/contactFolders/{contactFolder-id}/contacts/{contact-id}',
    'get'
  >;
  'PATCH /me/contactFolders/{contactFolder-id}/contacts/{contact-id}': Operation<
    '/me/contactFolders/{contactFolder-id}/contacts/{contact-id}',
    'patch'
  >;
  'POST /me/contactFolders/{contactFolder-id}/contacts': Operation<
    '/me/contactFolders/{contactFolder-id}/contacts',
    'post'
  >;
  'GET /me/contactFolders/{contactFolder-id}/contacts/{contact-id}/extensions': Operation<
    '/me/contactFolders/{contactFolder-id}/contacts/{contact-id}/extensions',
    'get'
  >;
  'POST /me/contactFolders/{contactFolder-id}/contacts/{contact-id}/extensions': Operation<
    '/me/contactFolders/{contactFolder-id}/contacts/{contact-id}/extensions',
    'post'
  >;
  'GET /me/contactFolders/{contactFolder-id}/contacts/{contact-id}/extensions/{extension-id}': Operation<
    '/me/contactFolders/{contactFolder-id}/contacts/{contact-id}/extensions/{extension-id}',
    'get'
  >;
  'PATCH /me/contactFolders/{contactFolder-id}/contacts/{contact-id}/extensions/{extension-id}': Operation<
    '/me/contactFolders/{contactFolder-id}/contacts/{contact-id}/extensions/{extension-id}',
    'patch'
  >;
  'DELETE /me/contactFolders/{contactFolder-id}/contacts/{contact-id}/extensions/{extension-id}': Operation<
    '/me/contactFolders/{contactFolder-id}/contacts/{contact-id}/extensions/{extension-id}',
    'delete'
  >;
  'POST /me/contactFolders/{contactFolder-id}/contacts/{contact-id}/permanentDelete': Operation<
    '/me/contactFolders/{contactFolder-id}/contacts/{contact-id}/permanentDelete',
    'post'
  >;
  'GET /me/contactFolders/{contactFolder-id}/contacts/{contact-id}/photo': Operation<
    '/me/contactFolders/{contactFolder-id}/contacts/{contact-id}/photo',
    'get'
  >;
  'PATCH /me/contactFolders/{contactFolder-id}/contacts/{contact-id}/photo': Operation<
    '/me/contactFolders/{contactFolder-id}/contacts/{contact-id}/photo',
    'patch'
  >;
}

/**
 * `DELETE /me/contactFolders/{contactFolder-id}/contacts/{contact-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/contactFolders/{contactFolder-id}/contacts/{contact-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/contactFolders/{contactFolder-id}/contacts/{contact-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/contactFolders/{contactFolder-id}/contacts/{contact-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['contactFolder-id', 'contact-id'],
    },
    params,
  };
}

/**
 * `GET /me/contactFolders/{contactFolder-id}/contacts`
 *
 * Get all the contacts in the signed-in user&#x27;s mailbox (.../me/contacts), or from the specified contact folder.
 */
export function list(
  params?: IEndpoints['GET /me/contactFolders/{contactFolder-id}/contacts']['parameters']
): EndpointRequest<IEndpoints['GET /me/contactFolders/{contactFolder-id}/contacts']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/contactFolders/{contactFolder-id}/contacts',
    paramDefs: {
      path: ['contactFolder-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /me/contactFolders/{contactFolder-id}/contacts/{contact-id}`
 *
 * The contacts in the folder. Navigation property. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /me/contactFolders/{contactFolder-id}/contacts/{contact-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/contactFolders/{contactFolder-id}/contacts/{contact-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/contactFolders/{contactFolder-id}/contacts/{contact-id}',
    paramDefs: {
      path: ['contactFolder-id', 'contact-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /me/contactFolders/{contactFolder-id}/contacts/{contact-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/contactFolders/{contactFolder-id}/contacts/{contact-id}']['body'],
  params?: IEndpoints['PATCH /me/contactFolders/{contactFolder-id}/contacts/{contact-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/contactFolders/{contactFolder-id}/contacts/{contact-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/contactFolders/{contactFolder-id}/contacts/{contact-id}',
    paramDefs: {
      path: ['contactFolder-id', 'contact-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /me/contactFolders/{contactFolder-id}/contacts`
 *
 * Add a contact to the root Contacts folder or to the contacts endpoint of another contact folder.
 */
export function create(
  body: IEndpoints['POST /me/contactFolders/{contactFolder-id}/contacts']['body'],
  params?: IEndpoints['POST /me/contactFolders/{contactFolder-id}/contacts']['parameters']
): EndpointRequest<IEndpoints['POST /me/contactFolders/{contactFolder-id}/contacts']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/contactFolders/{contactFolder-id}/contacts',
    paramDefs: {
      path: ['contactFolder-id'],
    },
    params,
    body,
  };
}

export const extensions = {
  /**
   * `GET /me/contactFolders/{contactFolder-id}/contacts/{contact-id}/extensions`
   *
   * The collection of open extensions defined for the contact. Nullable.
   */
  list: function list(
    params?: IEndpoints['GET /me/contactFolders/{contactFolder-id}/contacts/{contact-id}/extensions']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/contactFolders/{contactFolder-id}/contacts/{contact-id}/extensions']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/contactFolders/{contactFolder-id}/contacts/{contact-id}/extensions',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['contactFolder-id', 'contact-id'],
      },
      params,
    };
  },
  /**
   * `POST /me/contactFolders/{contactFolder-id}/contacts/{contact-id}/extensions`
   *
   */
  create: function create(
    body: IEndpoints['POST /me/contactFolders/{contactFolder-id}/contacts/{contact-id}/extensions']['body'],
    params?: IEndpoints['POST /me/contactFolders/{contactFolder-id}/contacts/{contact-id}/extensions']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/contactFolders/{contactFolder-id}/contacts/{contact-id}/extensions']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/contactFolders/{contactFolder-id}/contacts/{contact-id}/extensions',
      paramDefs: {
        path: ['contactFolder-id', 'contact-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /me/contactFolders/{contactFolder-id}/contacts/{contact-id}/extensions/{extension-id}`
   *
   * The collection of open extensions defined for the contact. Nullable.
   */
  get: function get(
    params?: IEndpoints['GET /me/contactFolders/{contactFolder-id}/contacts/{contact-id}/extensions/{extension-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/contactFolders/{contactFolder-id}/contacts/{contact-id}/extensions/{extension-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/contactFolders/{contactFolder-id}/contacts/{contact-id}/extensions/{extension-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['contactFolder-id', 'contact-id', 'extension-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /me/contactFolders/{contactFolder-id}/contacts/{contact-id}/extensions/{extension-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /me/contactFolders/{contactFolder-id}/contacts/{contact-id}/extensions/{extension-id}']['body'],
    params?: IEndpoints['PATCH /me/contactFolders/{contactFolder-id}/contacts/{contact-id}/extensions/{extension-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /me/contactFolders/{contactFolder-id}/contacts/{contact-id}/extensions/{extension-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/me/contactFolders/{contactFolder-id}/contacts/{contact-id}/extensions/{extension-id}',
      paramDefs: {
        path: ['contactFolder-id', 'contact-id', 'extension-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /me/contactFolders/{contactFolder-id}/contacts/{contact-id}/extensions/{extension-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /me/contactFolders/{contactFolder-id}/contacts/{contact-id}/extensions/{extension-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /me/contactFolders/{contactFolder-id}/contacts/{contact-id}/extensions/{extension-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/me/contactFolders/{contactFolder-id}/contacts/{contact-id}/extensions/{extension-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['contactFolder-id', 'contact-id', 'extension-id'],
      },
      params,
    };
  },
};

export const permanentDelete = {
  /**
   * `POST /me/contactFolders/{contactFolder-id}/contacts/{contact-id}/permanentDelete`
   *
   * Permanently delete a contact and place it in the Purges folder in the dumpster in the user&#x27;s mailbox. Email clients such as Outlook or Outlook on the web can&#x27;t access permanently deleted items. Unless there&#x27;s a hold set on the mailbox, the items are permanently deleted after a set period of time. For more information about item retention, see Configure Deleted Item retention and Recoverable Items quotas.
   */
  create: function create(
    params?: IEndpoints['POST /me/contactFolders/{contactFolder-id}/contacts/{contact-id}/permanentDelete']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/contactFolders/{contactFolder-id}/contacts/{contact-id}/permanentDelete']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/contactFolders/{contactFolder-id}/contacts/{contact-id}/permanentDelete',
      paramDefs: {
        path: ['contactFolder-id', 'contact-id'],
      },
      params,
    };
  },
};

export const photo = {
  /**
   * `GET /me/contactFolders/{contactFolder-id}/contacts/{contact-id}/photo`
   *
   * Optional contact picture. You can get or set a photo for a contact.
   */
  get: function get(
    params?: IEndpoints['GET /me/contactFolders/{contactFolder-id}/contacts/{contact-id}/photo']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/contactFolders/{contactFolder-id}/contacts/{contact-id}/photo']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/contactFolders/{contactFolder-id}/contacts/{contact-id}/photo',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['contactFolder-id', 'contact-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /me/contactFolders/{contactFolder-id}/contacts/{contact-id}/photo`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /me/contactFolders/{contactFolder-id}/contacts/{contact-id}/photo']['body'],
    params?: IEndpoints['PATCH /me/contactFolders/{contactFolder-id}/contacts/{contact-id}/photo']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /me/contactFolders/{contactFolder-id}/contacts/{contact-id}/photo']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/me/contactFolders/{contactFolder-id}/contacts/{contact-id}/photo',
      paramDefs: {
        path: ['contactFolder-id', 'contact-id'],
      },
      params,
      body,
    };
  },
};
