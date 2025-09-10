export * as documents from './documents';
export * as tasks from './tasks';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /print/printers/{printer-id}/jobs/{printJob-id}': Operation<
    '/print/printers/{printer-id}/jobs/{printJob-id}',
    'delete'
  >;
  'GET /print/printers/{printer-id}/jobs': Operation<'/print/printers/{printer-id}/jobs', 'get'>;
  'GET /print/printers/{printer-id}/jobs/{printJob-id}': Operation<
    '/print/printers/{printer-id}/jobs/{printJob-id}',
    'get'
  >;
  'PATCH /print/printers/{printer-id}/jobs/{printJob-id}': Operation<
    '/print/printers/{printer-id}/jobs/{printJob-id}',
    'patch'
  >;
  'POST /print/printers/{printer-id}/jobs': Operation<'/print/printers/{printer-id}/jobs', 'post'>;
  'POST /print/printers/{printer-id}/jobs/{printJob-id}/abort': Operation<
    '/print/printers/{printer-id}/jobs/{printJob-id}/abort',
    'post'
  >;
  'POST /print/printers/{printer-id}/jobs/{printJob-id}/cancel': Operation<
    '/print/printers/{printer-id}/jobs/{printJob-id}/cancel',
    'post'
  >;
  'POST /print/printers/{printer-id}/jobs/{printJob-id}/redirect': Operation<
    '/print/printers/{printer-id}/jobs/{printJob-id}/redirect',
    'post'
  >;
  'POST /print/printers/{printer-id}/jobs/{printJob-id}/start': Operation<
    '/print/printers/{printer-id}/jobs/{printJob-id}/start',
    'post'
  >;
}

/**
 * `DELETE /print/printers/{printer-id}/jobs/{printJob-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /print/printers/{printer-id}/jobs/{printJob-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /print/printers/{printer-id}/jobs/{printJob-id}']['response']
> {
  return {
    method: 'delete',
    path: '/print/printers/{printer-id}/jobs/{printJob-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['printer-id', 'printJob-id'],
    },
    params,
  };
}

/**
 * `GET /print/printers/{printer-id}/jobs`
 *
 * Retrieve a list of print jobs associated with the printer.
 */
export function list(
  params?: IEndpoints['GET /print/printers/{printer-id}/jobs']['parameters']
): EndpointRequest<IEndpoints['GET /print/printers/{printer-id}/jobs']['response']> {
  return {
    method: 'get',
    path: '/print/printers/{printer-id}/jobs',
    paramDefs: {
      path: ['printer-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /print/printers/{printer-id}/jobs/{printJob-id}`
 *
 * Retrieve the properties and relationships of a print job.
 */
export function get(
  params?: IEndpoints['GET /print/printers/{printer-id}/jobs/{printJob-id}']['parameters']
): EndpointRequest<IEndpoints['GET /print/printers/{printer-id}/jobs/{printJob-id}']['response']> {
  return {
    method: 'get',
    path: '/print/printers/{printer-id}/jobs/{printJob-id}',
    paramDefs: {
      path: ['printer-id', 'printJob-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /print/printers/{printer-id}/jobs/{printJob-id}`
 *
 * Update a print job. Only the configuration property can be updated. Updating a print job will only succeed if there is a printTask in a processing state on the associated print job, started by a trigger that the requesting app created. For details about how to register a task trigger, see Extending Universal Print to support pull printing.
 */
export function update(
  body: IEndpoints['PATCH /print/printers/{printer-id}/jobs/{printJob-id}']['body'],
  params?: IEndpoints['PATCH /print/printers/{printer-id}/jobs/{printJob-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /print/printers/{printer-id}/jobs/{printJob-id}']['response']
> {
  return {
    method: 'patch',
    path: '/print/printers/{printer-id}/jobs/{printJob-id}',
    paramDefs: {
      path: ['printer-id', 'printJob-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /print/printers/{printer-id}/jobs`
 *
 * Create a new printJob for a printer.  Also creates a new printDocument associated with the printJob.
 */
export function create(
  body: IEndpoints['POST /print/printers/{printer-id}/jobs']['body'],
  params?: IEndpoints['POST /print/printers/{printer-id}/jobs']['parameters']
): EndpointRequest<IEndpoints['POST /print/printers/{printer-id}/jobs']['response']> {
  return {
    method: 'post',
    path: '/print/printers/{printer-id}/jobs',
    paramDefs: {
      path: ['printer-id'],
    },
    params,
    body,
  };
}

export const abort = {
  /**
   * `POST /print/printers/{printer-id}/jobs/{printJob-id}/abort`
   *
   * Abort a print job. Only applications using application permissions can abort a print job. Aborting a print job will only succeed if there is a printTask in a processing state on the associated print job, started by a trigger that the requesting app created. For details about how to register a task trigger, see Extending Universal Print to support pull printing.
   */
  create: function create(
    body: IEndpoints['POST /print/printers/{printer-id}/jobs/{printJob-id}/abort']['body'],
    params?: IEndpoints['POST /print/printers/{printer-id}/jobs/{printJob-id}/abort']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /print/printers/{printer-id}/jobs/{printJob-id}/abort']['response']
  > {
    return {
      method: 'post',
      path: '/print/printers/{printer-id}/jobs/{printJob-id}/abort',
      paramDefs: {
        path: ['printer-id', 'printJob-id'],
      },
      params,
      body,
    };
  },
};

export const cancel = {
  /**
   * `POST /print/printers/{printer-id}/jobs/{printJob-id}/cancel`
   *
   * Cancel a print job. Print jobs can be canceled only on behalf of a user, using delegated permissions.
   */
  create: function create(
    params?: IEndpoints['POST /print/printers/{printer-id}/jobs/{printJob-id}/cancel']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /print/printers/{printer-id}/jobs/{printJob-id}/cancel']['response']
  > {
    return {
      method: 'post',
      path: '/print/printers/{printer-id}/jobs/{printJob-id}/cancel',
      paramDefs: {
        path: ['printer-id', 'printJob-id'],
      },
      params,
    };
  },
};

export const redirect = {
  /**
   * `POST /print/printers/{printer-id}/jobs/{printJob-id}/redirect`
   *
   * Redirect a print job to a different printer. Redirecting a print job will only succeed if there is a printTask in a processing state on the associated print job, started by a trigger that the requesting app created.  For details about how to use this API to add pull printing support to Universal Print, see Extending Universal Print to support pull printing.
   */
  create: function create(
    body: IEndpoints['POST /print/printers/{printer-id}/jobs/{printJob-id}/redirect']['body'],
    params?: IEndpoints['POST /print/printers/{printer-id}/jobs/{printJob-id}/redirect']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /print/printers/{printer-id}/jobs/{printJob-id}/redirect']['response']
  > {
    return {
      method: 'post',
      path: '/print/printers/{printer-id}/jobs/{printJob-id}/redirect',
      paramDefs: {
        path: ['printer-id', 'printJob-id'],
      },
      params,
      body,
    };
  },
};

export const start = {
  /**
   * `POST /print/printers/{printer-id}/jobs/{printJob-id}/start`
   *
   * Submits the print job to the associated printer or printerShare. It will be printed after any existing pending jobs are completed, aborted, or canceled.
   */
  create: function create(
    params?: IEndpoints['POST /print/printers/{printer-id}/jobs/{printJob-id}/start']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /print/printers/{printer-id}/jobs/{printJob-id}/start']['response']
  > {
    return {
      method: 'post',
      path: '/print/printers/{printer-id}/jobs/{printJob-id}/start',
      paramDefs: {
        path: ['printer-id', 'printJob-id'],
      },
      params,
    };
  },
};
