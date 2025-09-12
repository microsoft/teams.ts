export * as documents from './documents';
export * as tasks from './tasks';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /print/printerShares/{printerShare-id}/jobs/{printJob-id}': Operation<
    '/print/printerShares/{printerShare-id}/jobs/{printJob-id}',
    'delete'
  >;
  'GET /print/printerShares/{printerShare-id}/jobs': Operation<
    '/print/printerShares/{printerShare-id}/jobs',
    'get'
  >;
  'GET /print/printerShares/{printerShare-id}/jobs/{printJob-id}': Operation<
    '/print/printerShares/{printerShare-id}/jobs/{printJob-id}',
    'get'
  >;
  'PATCH /print/printerShares/{printerShare-id}/jobs/{printJob-id}': Operation<
    '/print/printerShares/{printerShare-id}/jobs/{printJob-id}',
    'patch'
  >;
  'POST /print/printerShares/{printerShare-id}/jobs': Operation<
    '/print/printerShares/{printerShare-id}/jobs',
    'post'
  >;
  'POST /print/printerShares/{printerShare-id}/jobs/{printJob-id}/abort': Operation<
    '/print/printerShares/{printerShare-id}/jobs/{printJob-id}/abort',
    'post'
  >;
  'POST /print/printerShares/{printerShare-id}/jobs/{printJob-id}/cancel': Operation<
    '/print/printerShares/{printerShare-id}/jobs/{printJob-id}/cancel',
    'post'
  >;
  'POST /print/printerShares/{printerShare-id}/jobs/{printJob-id}/cancelPrintJob': Operation<
    '/print/printerShares/{printerShare-id}/jobs/{printJob-id}/cancelPrintJob',
    'post'
  >;
  'POST /print/printerShares/{printerShare-id}/jobs/{printJob-id}/redirect': Operation<
    '/print/printerShares/{printerShare-id}/jobs/{printJob-id}/redirect',
    'post'
  >;
  'POST /print/printerShares/{printerShare-id}/jobs/{printJob-id}/start': Operation<
    '/print/printerShares/{printerShare-id}/jobs/{printJob-id}/start',
    'post'
  >;
  'POST /print/printerShares/{printerShare-id}/jobs/{printJob-id}/startPrintJob': Operation<
    '/print/printerShares/{printerShare-id}/jobs/{printJob-id}/startPrintJob',
    'post'
  >;
}

/**
 * `DELETE /print/printerShares/{printerShare-id}/jobs/{printJob-id}`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /print/printerShares/{printerShare-id}/jobs/{printJob-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /print/printerShares/{printerShare-id}/jobs/{printJob-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/print/printerShares/{printerShare-id}/jobs/{printJob-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['printerShare-id', 'printJob-id'],
    },
    params,
  };
}

/**
 * `GET /print/printerShares/{printerShare-id}/jobs`
 *
 * The list of jobs that are queued for printing by the printer/printerShare.
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /print/printerShares/{printerShare-id}/jobs']['parameters']
): EndpointRequest<IEndpoints['GET /print/printerShares/{printerShare-id}/jobs']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/print/printerShares/{printerShare-id}/jobs',
    paramDefs: {
      path: ['printerShare-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /print/printerShares/{printerShare-id}/jobs/{printJob-id}`
 *
 * The list of jobs that are queued for printing by the printer/printerShare.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /print/printerShares/{printerShare-id}/jobs/{printJob-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /print/printerShares/{printerShare-id}/jobs/{printJob-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/print/printerShares/{printerShare-id}/jobs/{printJob-id}',
    paramDefs: {
      path: ['printerShare-id', 'printJob-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /print/printerShares/{printerShare-id}/jobs/{printJob-id}`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /print/printerShares/{printerShare-id}/jobs/{printJob-id}']['body'],
  params?: IEndpoints['PATCH /print/printerShares/{printerShare-id}/jobs/{printJob-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /print/printerShares/{printerShare-id}/jobs/{printJob-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/print/printerShares/{printerShare-id}/jobs/{printJob-id}',
    paramDefs: {
      path: ['printerShare-id', 'printJob-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /print/printerShares/{printerShare-id}/jobs`
 *
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /print/printerShares/{printerShare-id}/jobs']['body'],
  params?: IEndpoints['POST /print/printerShares/{printerShare-id}/jobs']['parameters']
): EndpointRequest<IEndpoints['POST /print/printerShares/{printerShare-id}/jobs']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/print/printerShares/{printerShare-id}/jobs',
    paramDefs: {
      path: ['printerShare-id'],
    },
    params,
    body,
  };
}

export const abort = {
  /**
   * `POST /print/printerShares/{printerShare-id}/jobs/{printJob-id}/abort`
   *
   * Abort a print job. Only applications using application permissions can abort a print job. Aborting a print job will only succeed if there is a printTask in a processing state on the associated print job, started by a trigger that the requesting app created. For details about how to register a task trigger, see Extending Universal Print to support pull printing.
   * @deprecated
   */
  create: function create(
    body: IEndpoints['POST /print/printerShares/{printerShare-id}/jobs/{printJob-id}/abort']['body'],
    params?: IEndpoints['POST /print/printerShares/{printerShare-id}/jobs/{printJob-id}/abort']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /print/printerShares/{printerShare-id}/jobs/{printJob-id}/abort']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/print/printerShares/{printerShare-id}/jobs/{printJob-id}/abort',
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
   * `POST /print/printerShares/{printerShare-id}/jobs/{printJob-id}/cancel`
   *
   * Cancel a print job. Print jobs can be canceled only on behalf of a user, using delegated permissions.
   * @deprecated
   */
  create: function create(
    params?: IEndpoints['POST /print/printerShares/{printerShare-id}/jobs/{printJob-id}/cancel']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /print/printerShares/{printerShare-id}/jobs/{printJob-id}/cancel']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/print/printerShares/{printerShare-id}/jobs/{printJob-id}/cancel',
      paramDefs: {
        path: ['printerShare-id', 'printJob-id'],
      },
      params,
    };
  },
};

export const cancelPrintJob = {
  /**
   * `POST /print/printerShares/{printerShare-id}/jobs/{printJob-id}/cancelPrintJob`
   *
   * @deprecated
   */
  create: function create(
    params?: IEndpoints['POST /print/printerShares/{printerShare-id}/jobs/{printJob-id}/cancelPrintJob']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /print/printerShares/{printerShare-id}/jobs/{printJob-id}/cancelPrintJob']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/print/printerShares/{printerShare-id}/jobs/{printJob-id}/cancelPrintJob',
      paramDefs: {
        path: ['printerShare-id', 'printJob-id'],
      },
      params,
    };
  },
};

export const redirect = {
  /**
   * `POST /print/printerShares/{printerShare-id}/jobs/{printJob-id}/redirect`
   *
   * Redirect a print job to a different printer. Redirecting a print job will only succeed if there is a printTask in a processing state on the associated print job, started by a trigger that the requesting app created.  For details about how to use this API to add pull printing support to Universal Print, see Extending Universal Print to support pull printing.
   * @deprecated
   */
  create: function create(
    body: IEndpoints['POST /print/printerShares/{printerShare-id}/jobs/{printJob-id}/redirect']['body'],
    params?: IEndpoints['POST /print/printerShares/{printerShare-id}/jobs/{printJob-id}/redirect']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /print/printerShares/{printerShare-id}/jobs/{printJob-id}/redirect']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/print/printerShares/{printerShare-id}/jobs/{printJob-id}/redirect',
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
   * `POST /print/printerShares/{printerShare-id}/jobs/{printJob-id}/start`
   *
   * @deprecated
   */
  create: function create(
    params?: IEndpoints['POST /print/printerShares/{printerShare-id}/jobs/{printJob-id}/start']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /print/printerShares/{printerShare-id}/jobs/{printJob-id}/start']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/print/printerShares/{printerShare-id}/jobs/{printJob-id}/start',
      paramDefs: {
        path: ['printerShare-id', 'printJob-id'],
      },
      params,
    };
  },
};

export const startPrintJob = {
  /**
   * `POST /print/printerShares/{printerShare-id}/jobs/{printJob-id}/startPrintJob`
   *
   * @deprecated
   */
  create: function create(
    params?: IEndpoints['POST /print/printerShares/{printerShare-id}/jobs/{printJob-id}/startPrintJob']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /print/printerShares/{printerShare-id}/jobs/{printJob-id}/startPrintJob']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/print/printerShares/{printerShare-id}/jobs/{printJob-id}/startPrintJob',
      paramDefs: {
        path: ['printerShare-id', 'printJob-id'],
      },
      params,
    };
  },
};
