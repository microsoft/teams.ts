export * as configurationManagement from './configurationManagement';
export * as edge from './edge';
export * as entra from './entra';
export * as exchange from './exchange';
export * as microsoft365Apps from './microsoft365Apps';
export * as people from './people';
export * as serviceAnnouncement from './serviceAnnouncement';
export * as sharepoint from './sharepoint';
export * as teams from './teams';
export * as windows from './windows';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /admin': Operation<'/admin', 'get'>;
  'PATCH /admin': Operation<'/admin', 'patch'>;
  'GET /admin/appsAndServices': Operation<'/admin/appsAndServices', 'get'>;
  'PATCH /admin/appsAndServices': Operation<'/admin/appsAndServices', 'patch'>;
  'DELETE /admin/appsAndServices': Operation<'/admin/appsAndServices', 'delete'>;
  'GET /admin/dynamics': Operation<'/admin/dynamics', 'get'>;
  'PATCH /admin/dynamics': Operation<'/admin/dynamics', 'patch'>;
  'DELETE /admin/dynamics': Operation<'/admin/dynamics', 'delete'>;
  'GET /admin/forms': Operation<'/admin/forms', 'get'>;
  'PATCH /admin/forms': Operation<'/admin/forms', 'patch'>;
  'DELETE /admin/forms': Operation<'/admin/forms', 'delete'>;
  'GET /admin/reportSettings': Operation<'/admin/reportSettings', 'get'>;
  'PATCH /admin/reportSettings': Operation<'/admin/reportSettings', 'patch'>;
  'DELETE /admin/reportSettings': Operation<'/admin/reportSettings', 'delete'>;
  'GET /admin/todo': Operation<'/admin/todo', 'get'>;
  'PATCH /admin/todo': Operation<'/admin/todo', 'patch'>;
  'DELETE /admin/todo': Operation<'/admin/todo', 'delete'>;
}

/**
 * `GET /admin`
 *
 */
export function get(
  params?: IEndpoints['GET /admin']['parameters']
): EndpointRequest<IEndpoints['GET /admin']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /admin`
 *
 */
export function update(
  body: IEndpoints['PATCH /admin']['body']
): EndpointRequest<IEndpoints['PATCH /admin']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/admin',
    body,
  };
}

export const appsAndServices = {
  /**
   * `GET /admin/appsAndServices`
   *
   * Read the properties and relationships of a adminAppsAndServices object.
   */
  list: function list(
    params?: IEndpoints['GET /admin/appsAndServices']['parameters']
  ): EndpointRequest<IEndpoints['GET /admin/appsAndServices']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/admin/appsAndServices',
      paramDefs: {
        query: ['$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `PATCH /admin/appsAndServices`
   *
   * Update the properties of a adminAppsAndServices object.
   */
  update: function update(
    body: IEndpoints['PATCH /admin/appsAndServices']['body']
  ): EndpointRequest<IEndpoints['PATCH /admin/appsAndServices']['response']> {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/admin/appsAndServices',
      body,
    };
  },
  /**
   * `DELETE /admin/appsAndServices`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /admin/appsAndServices']['parameters']
  ): EndpointRequest<IEndpoints['DELETE /admin/appsAndServices']['response']> {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/admin/appsAndServices',
      paramDefs: {
        header: ['If-Match'],
      },
      params,
    };
  },
};

export const dynamics = {
  /**
   * `GET /admin/dynamics`
   *
   * Read the properties and relationships of a adminDynamics object.
   */
  list: function list(
    params?: IEndpoints['GET /admin/dynamics']['parameters']
  ): EndpointRequest<IEndpoints['GET /admin/dynamics']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/admin/dynamics',
      paramDefs: {
        query: ['$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `PATCH /admin/dynamics`
   *
   * Update the properties of a adminDynamics object.
   */
  update: function update(
    body: IEndpoints['PATCH /admin/dynamics']['body']
  ): EndpointRequest<IEndpoints['PATCH /admin/dynamics']['response']> {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/admin/dynamics',
      body,
    };
  },
  /**
   * `DELETE /admin/dynamics`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /admin/dynamics']['parameters']
  ): EndpointRequest<IEndpoints['DELETE /admin/dynamics']['response']> {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/admin/dynamics',
      paramDefs: {
        header: ['If-Match'],
      },
      params,
    };
  },
};

export const forms = {
  /**
   * `GET /admin/forms`
   *
   * Read the properties and relationships of a adminForms object.
   */
  list: function list(
    params?: IEndpoints['GET /admin/forms']['parameters']
  ): EndpointRequest<IEndpoints['GET /admin/forms']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/admin/forms',
      paramDefs: {
        query: ['$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `PATCH /admin/forms`
   *
   * Update the properties of a adminForms object.
   */
  update: function update(
    body: IEndpoints['PATCH /admin/forms']['body']
  ): EndpointRequest<IEndpoints['PATCH /admin/forms']['response']> {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/admin/forms',
      body,
    };
  },
  /**
   * `DELETE /admin/forms`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /admin/forms']['parameters']
  ): EndpointRequest<IEndpoints['DELETE /admin/forms']['response']> {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/admin/forms',
      paramDefs: {
        header: ['If-Match'],
      },
      params,
    };
  },
};

export const reportSettings = {
  /**
   * `GET /admin/reportSettings`
   *
   * Get the tenant-level settings for Microsoft 365 reports.
   */
  list: function list(
    params?: IEndpoints['GET /admin/reportSettings']['parameters']
  ): EndpointRequest<IEndpoints['GET /admin/reportSettings']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/admin/reportSettings',
      paramDefs: {
        query: ['$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `PATCH /admin/reportSettings`
   *
   * Update tenant-level settings for Microsoft 365 reports.
   */
  update: function update(
    body: IEndpoints['PATCH /admin/reportSettings']['body']
  ): EndpointRequest<IEndpoints['PATCH /admin/reportSettings']['response']> {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/admin/reportSettings',
      body,
    };
  },
  /**
   * `DELETE /admin/reportSettings`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /admin/reportSettings']['parameters']
  ): EndpointRequest<IEndpoints['DELETE /admin/reportSettings']['response']> {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/admin/reportSettings',
      paramDefs: {
        header: ['If-Match'],
      },
      params,
    };
  },
};

export const todo = {
  /**
   * `GET /admin/todo`
   *
   * Read the properties and relationships of a adminTodo object.
   */
  get: function get(
    params?: IEndpoints['GET /admin/todo']['parameters']
  ): EndpointRequest<IEndpoints['GET /admin/todo']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/admin/todo',
      paramDefs: {
        query: ['$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `PATCH /admin/todo`
   *
   * Update the properties of a adminTodo object.
   */
  update: function update(
    body: IEndpoints['PATCH /admin/todo']['body']
  ): EndpointRequest<IEndpoints['PATCH /admin/todo']['response']> {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/admin/todo',
      body,
    };
  },
  /**
   * `DELETE /admin/todo`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /admin/todo']['parameters']
  ): EndpointRequest<IEndpoints['DELETE /admin/todo']['response']> {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/admin/todo',
      paramDefs: {
        header: ['If-Match'],
      },
      params,
    };
  },
};
