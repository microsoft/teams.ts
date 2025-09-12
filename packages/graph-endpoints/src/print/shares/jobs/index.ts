export * as documents from './documents';
export * as tasks from './tasks';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /print/shares/{printerShare-id}/jobs/{printJob-id}': Operation<
    '/print/shares/{printerShare-id}/jobs/{printJob-id}',
    'delete'
  >;
  'GET /print/shares/{printerShare-id}/jobs': Operation<
    '/print/shares/{printerShare-id}/jobs',
    'get'
  >;
  'GET /print/shares/{printerShare-id}/jobs/{printJob-id}': Operation<
    '/print/shares/{printerShare-id}/jobs/{printJob-id}',
    'get'
  >;
  'PATCH /print/shares/{printerShare-id}/jobs/{printJob-id}': Operation<
    '/print/shares/{printerShare-id}/jobs/{printJob-id}',
    'patch'
  >;
  'POST /print/shares/{printerShare-id}/jobs': Operation<
    '/print/shares/{printerShare-id}/jobs',
    'post'
  >;
  'POST /print/shares/{printerShare-id}/jobs/{printJob-id}/abort': Operation<
    '/print/shares/{printerShare-id}/jobs/{printJob-id}/abort',
    'post'
  >;
  'POST /print/shares/{printerShare-id}/jobs/{printJob-id}/cancel': Operation<
    '/print/shares/{printerShare-id}/jobs/{printJob-id}/cancel',
    'post'
  >;
  'POST /print/shares/{printerShare-id}/jobs/{printJob-id}/redirect': Operation<
    '/print/shares/{printerShare-id}/jobs/{printJob-id}/redirect',
    'post'
  >;
  'POST /print/shares/{printerShare-id}/jobs/{printJob-id}/start': Operation<
    '/print/shares/{printerShare-id}/jobs/{printJob-id}/start',
    'post'
  >;
}

/**
 * `DELETE /print/shares/{printerShare-id}/jobs/{printJob-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /print/shares/{printerShare-id}/jobs/{printJob-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /print/shares/{printerShare-id}/jobs/{printJob-id}']['response']
> {
  return {
    method: 'delete',
    path: '/print/shares/{printerShare-id}/jobs/{printJob-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['printerShare-id', 'printJob-id'],
    },
    params,
  };
}

/**
 * `GET /print/shares/{printerShare-id}/jobs`
 *
 * Retrieve a list of print jobs associated with the printerShare.
 */
export function list(
  params?: IEndpoints['GET /print/shares/{printerShare-id}/jobs']['parameters']
): EndpointRequest<IEndpoints['GET /print/shares/{printerShare-id}/jobs']['response']> {
  return {
    method: 'get',
    path: '/print/shares/{printerShare-id}/jobs',
    paramDefs: {
      path: ['printerShare-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /print/shares/{printerShare-id}/jobs/{printJob-id}`
 *
 * The list of jobs that are queued for printing by the printer/printerShare.
 */
export function get(
  params?: IEndpoints['GET /print/shares/{printerShare-id}/jobs/{printJob-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /print/shares/{printerShare-id}/jobs/{printJob-id}']['response']
> {
  return {
    method: 'get',
    path: '/print/shares/{printerShare-id}/jobs/{printJob-id}',
    paramDefs: {
      path: ['printerShare-id', 'printJob-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /print/shares/{printerShare-id}/jobs/{printJob-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /print/shares/{printerShare-id}/jobs/{printJob-id}']['body'],
  params?: IEndpoints['PATCH /print/shares/{printerShare-id}/jobs/{printJob-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /print/shares/{printerShare-id}/jobs/{printJob-id}']['response']
> {
  return {
    method: 'patch',
    path: '/print/shares/{printerShare-id}/jobs/{printJob-id}',
    paramDefs: {
      path: ['printerShare-id', 'printJob-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /print/shares/{printerShare-id}/jobs`
 *
 * Create a new printJob for a printerShare.  Also creates a new printDocument associated with the printJob.
 */
export function create(
  body: IEndpoints['POST /print/shares/{printerShare-id}/jobs']['body'],
  params?: IEndpoints['POST /print/shares/{printerShare-id}/jobs']['parameters']
): EndpointRequest<IEndpoints['POST /print/shares/{printerShare-id}/jobs']['response']> {
  return {
    method: 'post',
    path: '/print/shares/{printerShare-id}/jobs',
    paramDefs: {
      path: ['printerShare-id'],
    },
    params,
    body,
  };
}

export const abort = {
  /**
   * `POST /print/shares/{printerShare-id}/jobs/{printJob-id}/abort`
   *
   * Abort a print job. Only applications using application permissions can abort a print job. Aborting a print job will only succeed if there is a printTask in a processing state on the associated print job, started by a trigger that the requesting app created. For details about how to register a task trigger, see Extending Universal Print to support pull printing.
   */
  create: function create(
    body: IEndpoints['POST /print/shares/{printerShare-id}/jobs/{printJob-id}/abort']['body'],
    params?: IEndpoints['POST /print/shares/{printerShare-id}/jobs/{printJob-id}/abort']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /print/shares/{printerShare-id}/jobs/{printJob-id}/abort']['response']
  > {
    return {
      method: 'post',
      path: '/print/shares/{printerShare-id}/jobs/{printJob-id}/abort',
      paramDefs: {
        path: ['printerShare-id', 'printJob-id'],
      },
      params,
      body,
    };
  },
};

export const cancel = {
  /**
   * `POST /print/shares/{printerShare-id}/jobs/{printJob-id}/cancel`
   *
   * Cancel a print job. Print jobs can be canceled only on behalf of a user, using delegated permissions.
   */
  create: function create(
    params?: IEndpoints['POST /print/shares/{printerShare-id}/jobs/{printJob-id}/cancel']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /print/shares/{printerShare-id}/jobs/{printJob-id}/cancel']['response']
  > {
    return {
      method: 'post',
      path: '/print/shares/{printerShare-id}/jobs/{printJob-id}/cancel',
      paramDefs: {
        path: ['printerShare-id', 'printJob-id'],
      },
      params,
    };
  },
};

export const redirect = {
  /**
   * `POST /print/shares/{printerShare-id}/jobs/{printJob-id}/redirect`
   *
   * Redirect a print job to a different printer. Redirecting a print job will only succeed if there is a printTask in a processing state on the associated print job, started by a trigger that the requesting app created.  For details about how to use this API to add pull printing support to Universal Print, see Extending Universal Print to support pull printing.
   */
  create: function create(
    body: IEndpoints['POST /print/shares/{printerShare-id}/jobs/{printJob-id}/redirect']['body'],
    params?: IEndpoints['POST /print/shares/{printerShare-id}/jobs/{printJob-id}/redirect']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /print/shares/{printerShare-id}/jobs/{printJob-id}/redirect']['response']
  > {
    return {
      method: 'post',
      path: '/print/shares/{printerShare-id}/jobs/{printJob-id}/redirect',
      paramDefs: {
        path: ['printerShare-id', 'printJob-id'],
      },
      params,
      body,
    };
  },
};

export const start = {
  /**
   * `POST /print/shares/{printerShare-id}/jobs/{printJob-id}/start`
   *
   * Submits the print job to the associated printer or printerShare. It will be printed after any existing pending jobs are completed, aborted, or canceled.
   */
  create: function create(
    params?: IEndpoints['POST /print/shares/{printerShare-id}/jobs/{printJob-id}/start']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /print/shares/{printerShare-id}/jobs/{printJob-id}/start']['response']
  > {
    return {
      method: 'post',
      path: '/print/shares/{printerShare-id}/jobs/{printJob-id}/start',
      paramDefs: {
        path: ['printerShare-id', 'printJob-id'],
      },
      params,
    };
  },
};
