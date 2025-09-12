import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}': Operation<
    '/me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}',
    'delete'
  >;
  'GET /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts': Operation<
    '/me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts',
    'get'
  >;
  'GET /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}': Operation<
    '/me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}',
    'get'
  >;
  'PATCH /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}': Operation<
    '/me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}',
    'patch'
  >;
  'POST /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts': Operation<
    '/me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts',
    'post'
  >;
  'GET /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/extensions': Operation<
    '/me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/extensions',
    'get'
  >;
  'POST /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/extensions': Operation<
    '/me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/extensions',
    'post'
  >;
  'GET /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/extensions/{extension-id}': Operation<
    '/me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/extensions/{extension-id}',
    'get'
  >;
  'PATCH /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/extensions/{extension-id}': Operation<
    '/me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/extensions/{extension-id}',
    'patch'
  >;
  'DELETE /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/extensions/{extension-id}': Operation<
    '/me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/extensions/{extension-id}',
    'delete'
  >;
  'POST /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/permanentDelete': Operation<
    '/me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/permanentDelete',
    'post'
  >;
  'GET /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/photo': Operation<
    '/me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/photo',
    'get'
  >;
  'PATCH /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/photo': Operation<
    '/me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/photo',
    'patch'
  >;
}

/**
 * `DELETE /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}']['response']
> {
  return {
    method: 'delete',
    path: '/me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['contactFolder-id', 'contactFolder-id1', 'contact-id'],
    },
    params,
  };
}

/**
 * `GET /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts`
 *
 * The contacts in the folder. Navigation property. Read-only. Nullable.
 */
export function list(
  params?: IEndpoints['GET /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts']['response']
> {
  return {
    method: 'get',
    path: '/me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts',
    paramDefs: {
      path: ['contactFolder-id', 'contactFolder-id1'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}`
 *
 * The contacts in the folder. Navigation property. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}']['response']
> {
  return {
    method: 'get',
    path: '/me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}',
    paramDefs: {
      path: ['contactFolder-id', 'contactFolder-id1', 'contact-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}']['body'],
  params?: IEndpoints['PATCH /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}']['response']
> {
  return {
    method: 'patch',
    path: '/me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}',
    paramDefs: {
      path: ['contactFolder-id', 'contactFolder-id1', 'contact-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts`
 *
 */
export function create(
  body: IEndpoints['POST /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts']['body'],
  params?: IEndpoints['POST /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts']['response']
> {
  return {
    method: 'post',
    path: '/me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts',
    paramDefs: {
      path: ['contactFolder-id', 'contactFolder-id1'],
    },
    params,
    body,
  };
}

export const extensions = {
  /**
   * `GET /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/extensions`
   *
   * The collection of open extensions defined for the contact. Read-only. Nullable.
   */
  list: function list(
    params?: IEndpoints['GET /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/extensions']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/extensions']['response']
  > {
    return {
      method: 'get',
      path: '/me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/extensions',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['contactFolder-id', 'contactFolder-id1', 'contact-id'],
      },
      params,
    };
  },
  /**
   * `POST /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/extensions`
   *
   */
  create: function create(
    body: IEndpoints['POST /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/extensions']['body'],
    params?: IEndpoints['POST /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/extensions']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/extensions']['response']
  > {
    return {
      method: 'post',
      path: '/me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/extensions',
      paramDefs: {
        path: ['contactFolder-id', 'contactFolder-id1', 'contact-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/extensions/{extension-id}`
   *
   * The collection of open extensions defined for the contact. Read-only. Nullable.
   */
  get: function get(
    params?: IEndpoints['GET /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/extensions/{extension-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/extensions/{extension-id}']['response']
  > {
    return {
      method: 'get',
      path: '/me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/extensions/{extension-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['contactFolder-id', 'contactFolder-id1', 'contact-id', 'extension-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/extensions/{extension-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/extensions/{extension-id}']['body'],
    params?: IEndpoints['PATCH /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/extensions/{extension-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/extensions/{extension-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/extensions/{extension-id}',
      paramDefs: {
        path: ['contactFolder-id', 'contactFolder-id1', 'contact-id', 'extension-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/extensions/{extension-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/extensions/{extension-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/extensions/{extension-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/extensions/{extension-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['contactFolder-id', 'contactFolder-id1', 'contact-id', 'extension-id'],
      },
      params,
    };
  },
};

export const permanentDelete = {
  /**
   * `POST /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/permanentDelete`
   *
   */
  create: function create(
    params?: IEndpoints['POST /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/permanentDelete']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/permanentDelete']['response']
  > {
    return {
      method: 'post',
      path: '/me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/permanentDelete',
      paramDefs: {
        path: ['contactFolder-id', 'contactFolder-id1', 'contact-id'],
      },
      params,
    };
  },
};

export const photo = {
  /**
   * `GET /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/photo`
   *
   * Optional contact picture. You can get or set a photo for a contact.
   */
  get: function get(
    params?: IEndpoints['GET /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/photo']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/photo']['response']
  > {
    return {
      method: 'get',
      path: '/me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/photo',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['contactFolder-id', 'contactFolder-id1', 'contact-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/photo`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/photo']['body'],
    params?: IEndpoints['PATCH /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/photo']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/photo']['response']
  > {
    return {
      method: 'patch',
      path: '/me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/photo',
      paramDefs: {
        path: ['contactFolder-id', 'contactFolder-id1', 'contact-id'],
      },
      params,
      body,
    };
  },
};
