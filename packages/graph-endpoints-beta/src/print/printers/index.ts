export * as jobs from './jobs';
export * as taskTriggers from './taskTriggers';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /print/printers/{printer-id}': Operation<'/print/printers/{printer-id}', 'delete'>;
  'GET /print/printers': Operation<'/print/printers', 'get'>;
  'GET /print/printers/{printer-id}': Operation<'/print/printers/{printer-id}', 'get'>;
  'PATCH /print/printers/{printer-id}': Operation<'/print/printers/{printer-id}', 'patch'>;
  'POST /print/printers': Operation<'/print/printers', 'post'>;
  'GET /print/printers/{printer-id}/connectors': Operation<
    '/print/printers/{printer-id}/connectors',
    'get'
  >;
  'GET /print/printers/{printer-id}/connectors/{printConnector-id}': Operation<
    '/print/printers/{printer-id}/connectors/{printConnector-id}',
    'get'
  >;
  'POST /print/printers/create': Operation<'/print/printers/create', 'post'>;
  'POST /print/printers/{printer-id}/resetDefaults': Operation<
    '/print/printers/{printer-id}/resetDefaults',
    'post'
  >;
  'POST /print/printers/{printer-id}/restoreFactoryDefaults': Operation<
    '/print/printers/{printer-id}/restoreFactoryDefaults',
    'post'
  >;
  'GET /print/printers/{printer-id}/share': Operation<'/print/printers/{printer-id}/share', 'get'>;
  'GET /print/printers/{printer-id}/shares': Operation<
    '/print/printers/{printer-id}/shares',
    'get'
  >;
  'GET /print/printers/{printer-id}/shares/{printerShare-id}': Operation<
    '/print/printers/{printer-id}/shares/{printerShare-id}',
    'get'
  >;
}

/**
 * `DELETE /print/printers/{printer-id}`
 *
 * Delete (unregister) a printer.
 */
export function del(
  params?: IEndpoints['DELETE /print/printers/{printer-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /print/printers/{printer-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/print/printers/{printer-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['printer-id'],
    },
    params,
  };
}

/**
 * `GET /print/printers`
 *
 * Retrieve the list of printers that are registered in the tenant.
 */
export function list(
  params?: IEndpoints['GET /print/printers']['parameters']
): EndpointRequest<IEndpoints['GET /print/printers']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/print/printers',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /print/printers/{printer-id}`
 *
 * Retrieve the properties and relationships of a printer object.
 */
export function get(
  params?: IEndpoints['GET /print/printers/{printer-id}']['parameters']
): EndpointRequest<IEndpoints['GET /print/printers/{printer-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/print/printers/{printer-id}',
    paramDefs: {
      path: ['printer-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /print/printers/{printer-id}`
 *
 * Update the properties of a printer object.
 */
export function update(
  body: IEndpoints['PATCH /print/printers/{printer-id}']['body'],
  params?: IEndpoints['PATCH /print/printers/{printer-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /print/printers/{printer-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/print/printers/{printer-id}',
    paramDefs: {
      path: ['printer-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /print/printers`
 *
 */
export function create(
  body: IEndpoints['POST /print/printers']['body']
): EndpointRequest<IEndpoints['POST /print/printers']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/print/printers',
    body,
  };
}

export const connectors = {
  /**
   * `GET /print/printers/{printer-id}/connectors`
   *
   * Retrieve a list of connectors associated with the printer.
   */
  list: function list(
    params?: IEndpoints['GET /print/printers/{printer-id}/connectors']['parameters']
  ): EndpointRequest<IEndpoints['GET /print/printers/{printer-id}/connectors']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/print/printers/{printer-id}/connectors',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['printer-id'],
      },
      params,
    };
  },
  /**
   * `GET /print/printers/{printer-id}/connectors/{printConnector-id}`
   *
   * The connectors that are associated with the printer.
   */
  get: function get(
    params?: IEndpoints['GET /print/printers/{printer-id}/connectors/{printConnector-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /print/printers/{printer-id}/connectors/{printConnector-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/print/printers/{printer-id}/connectors/{printConnector-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['printer-id', 'printConnector-id'],
      },
      params,
    };
  },
};

export const doCreate = {
  /**
   * `POST /print/printers/create`
   *
   * Create (register) a printer with the Universal Print service. This is a long-running operation and as such, it returns a printerCreateOperation that can be used to track and verify the registration of the printer.
   */
  create: function create(
    body: IEndpoints['POST /print/printers/create']['body']
  ): EndpointRequest<IEndpoints['POST /print/printers/create']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/print/printers/create',
      body,
    };
  },
};

export const resetDefaults = {
  /**
   * `POST /print/printers/{printer-id}/resetDefaults`
   *
   * @deprecated
   */
  create: function create(
    params?: IEndpoints['POST /print/printers/{printer-id}/resetDefaults']['parameters']
  ): EndpointRequest<IEndpoints['POST /print/printers/{printer-id}/resetDefaults']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/print/printers/{printer-id}/resetDefaults',
      paramDefs: {
        path: ['printer-id'],
      },
      params,
    };
  },
};

export const restoreFactoryDefaults = {
  /**
   * `POST /print/printers/{printer-id}/restoreFactoryDefaults`
   *
   * Restore a printer&#x27;s default settings to the values specified by the manufacturer.
   */
  create: function create(
    params?: IEndpoints['POST /print/printers/{printer-id}/restoreFactoryDefaults']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /print/printers/{printer-id}/restoreFactoryDefaults']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/print/printers/{printer-id}/restoreFactoryDefaults',
      paramDefs: {
        path: ['printer-id'],
      },
      params,
    };
  },
};

export const share = {
  /**
   * `GET /print/printers/{printer-id}/share`
   *
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /print/printers/{printer-id}/share']['parameters']
  ): EndpointRequest<IEndpoints['GET /print/printers/{printer-id}/share']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/print/printers/{printer-id}/share',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['printer-id'],
      },
      params,
    };
  },
};

export const shares = {
  /**
   * `GET /print/printers/{printer-id}/shares`
   *
   * The list of printerShares that are associated with the printer. Currently, only one printerShare can be associated with the printer. Read-only. Nullable.
   */
  list: function list(
    params?: IEndpoints['GET /print/printers/{printer-id}/shares']['parameters']
  ): EndpointRequest<IEndpoints['GET /print/printers/{printer-id}/shares']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/print/printers/{printer-id}/shares',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['printer-id'],
      },
      params,
    };
  },
  /**
   * `GET /print/printers/{printer-id}/shares/{printerShare-id}`
   *
   * The list of printerShares that are associated with the printer. Currently, only one printerShare can be associated with the printer. Read-only. Nullable.
   */
  get: function get(
    params?: IEndpoints['GET /print/printers/{printer-id}/shares/{printerShare-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /print/printers/{printer-id}/shares/{printerShare-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/print/printers/{printer-id}/shares/{printerShare-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['printer-id', 'printerShare-id'],
      },
      params,
    };
  },
};
