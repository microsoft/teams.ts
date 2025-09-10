import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/contacts/{contact-id}': Operation<'/me/contacts/{contact-id}', 'delete'>;
  'GET /me/contacts': Operation<'/me/contacts', 'get'>;
  'GET /me/contacts/{contact-id}': Operation<'/me/contacts/{contact-id}', 'get'>;
  'PATCH /me/contacts/{contact-id}': Operation<'/me/contacts/{contact-id}', 'patch'>;
  'POST /me/contacts': Operation<'/me/contacts', 'post'>;
  'GET /me/contacts/{contact-id}/extensions': Operation<
    '/me/contacts/{contact-id}/extensions',
    'get'
  >;
  'POST /me/contacts/{contact-id}/extensions': Operation<
    '/me/contacts/{contact-id}/extensions',
    'post'
  >;
  'GET /me/contacts/{contact-id}/extensions/{extension-id}': Operation<
    '/me/contacts/{contact-id}/extensions/{extension-id}',
    'get'
  >;
  'PATCH /me/contacts/{contact-id}/extensions/{extension-id}': Operation<
    '/me/contacts/{contact-id}/extensions/{extension-id}',
    'patch'
  >;
  'DELETE /me/contacts/{contact-id}/extensions/{extension-id}': Operation<
    '/me/contacts/{contact-id}/extensions/{extension-id}',
    'delete'
  >;
  'POST /me/contacts/{contact-id}/permanentDelete': Operation<
    '/me/contacts/{contact-id}/permanentDelete',
    'post'
  >;
  'GET /me/contacts/{contact-id}/photo': Operation<'/me/contacts/{contact-id}/photo', 'get'>;
  'PATCH /me/contacts/{contact-id}/photo': Operation<'/me/contacts/{contact-id}/photo', 'patch'>;
}

/**
 * `DELETE /me/contacts/{contact-id}`
 *
 * Delete contact.
 */
export function del(
  params?: IEndpoints['DELETE /me/contacts/{contact-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/contacts/{contact-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/contacts/{contact-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['contact-id'],
    },
    params,
  };
}

/**
 * `GET /me/contacts`
 *
 * Get contacts in the user&#x27;s mailbox. There are two scenarios where an app can get contacts in another user&#x27;s contact folder:
 */
export function list(
  params?: IEndpoints['GET /me/contacts']['parameters']
): EndpointRequest<IEndpoints['GET /me/contacts']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/contacts',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /me/contacts/{contact-id}`
 *
 * Retrieve the properties and relationships of contact object. There are two scenarios where an app can get a contact in another user&#x27;s contact folder:
 */
export function get(
  params?: IEndpoints['GET /me/contacts/{contact-id}']['parameters']
): EndpointRequest<IEndpoints['GET /me/contacts/{contact-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/contacts/{contact-id}',
    paramDefs: {
      path: ['contact-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /me/contacts/{contact-id}`
 *
 * Update the properties of contact object.
 */
export function update(
  body: IEndpoints['PATCH /me/contacts/{contact-id}']['body'],
  params?: IEndpoints['PATCH /me/contacts/{contact-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /me/contacts/{contact-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/contacts/{contact-id}',
    paramDefs: {
      path: ['contact-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /me/contacts`
 *
 * Add a contact to the root Contacts folder or to the contacts endpoint of another contact folder.
 */
export function create(
  body: IEndpoints['POST /me/contacts']['body']
): EndpointRequest<IEndpoints['POST /me/contacts']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/contacts',
    body,
  };
}

export const extensions = {
  /**
   * `GET /me/contacts/{contact-id}/extensions`
   *
   * The collection of open extensions defined for the contact. Nullable.
   */
  list: function list(
    params?: IEndpoints['GET /me/contacts/{contact-id}/extensions']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/contacts/{contact-id}/extensions']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/contacts/{contact-id}/extensions',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['contact-id'],
      },
      params,
    };
  },
  /**
   * `POST /me/contacts/{contact-id}/extensions`
   *
   */
  create: function create(
    body: IEndpoints['POST /me/contacts/{contact-id}/extensions']['body'],
    params?: IEndpoints['POST /me/contacts/{contact-id}/extensions']['parameters']
  ): EndpointRequest<IEndpoints['POST /me/contacts/{contact-id}/extensions']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/contacts/{contact-id}/extensions',
      paramDefs: {
        path: ['contact-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /me/contacts/{contact-id}/extensions/{extension-id}`
   *
   * The collection of open extensions defined for the contact. Nullable.
   */
  get: function get(
    params?: IEndpoints['GET /me/contacts/{contact-id}/extensions/{extension-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/contacts/{contact-id}/extensions/{extension-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/contacts/{contact-id}/extensions/{extension-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['contact-id', 'extension-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /me/contacts/{contact-id}/extensions/{extension-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /me/contacts/{contact-id}/extensions/{extension-id}']['body'],
    params?: IEndpoints['PATCH /me/contacts/{contact-id}/extensions/{extension-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /me/contacts/{contact-id}/extensions/{extension-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/me/contacts/{contact-id}/extensions/{extension-id}',
      paramDefs: {
        path: ['contact-id', 'extension-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /me/contacts/{contact-id}/extensions/{extension-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /me/contacts/{contact-id}/extensions/{extension-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /me/contacts/{contact-id}/extensions/{extension-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/me/contacts/{contact-id}/extensions/{extension-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['contact-id', 'extension-id'],
      },
      params,
    };
  },
};

export const permanentDelete = {
  /**
   * `POST /me/contacts/{contact-id}/permanentDelete`
   *
   * Permanently delete a contact and place it in the Purges folder in the dumpster in the user&#x27;s mailbox. Email clients such as Outlook or Outlook on the web can&#x27;t access permanently deleted items. Unless there&#x27;s a hold set on the mailbox, the items are permanently deleted after a set period of time. For more information about item retention, see Configure Deleted Item retention and Recoverable Items quotas.
   */
  create: function create(
    params?: IEndpoints['POST /me/contacts/{contact-id}/permanentDelete']['parameters']
  ): EndpointRequest<IEndpoints['POST /me/contacts/{contact-id}/permanentDelete']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/contacts/{contact-id}/permanentDelete',
      paramDefs: {
        path: ['contact-id'],
      },
      params,
    };
  },
};

export const photo = {
  /**
   * `GET /me/contacts/{contact-id}/photo`
   *
   * Optional contact picture. You can get or set a photo for a contact.
   */
  get: function get(
    params?: IEndpoints['GET /me/contacts/{contact-id}/photo']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/contacts/{contact-id}/photo']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/contacts/{contact-id}/photo',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['contact-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /me/contacts/{contact-id}/photo`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /me/contacts/{contact-id}/photo']['body'],
    params?: IEndpoints['PATCH /me/contacts/{contact-id}/photo']['parameters']
  ): EndpointRequest<IEndpoints['PATCH /me/contacts/{contact-id}/photo']['response']> {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/me/contacts/{contact-id}/photo',
      paramDefs: {
        path: ['contact-id'],
      },
      params,
      body,
    };
  },
};
