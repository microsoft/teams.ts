export * as schema from './schema';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}': Operation<
    '/applications/{application-id}/synchronization/jobs/{synchronizationJob-id}',
    'delete'
  >;
  'GET /applications/{application-id}/synchronization/jobs': Operation<
    '/applications/{application-id}/synchronization/jobs',
    'get'
  >;
  'GET /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}': Operation<
    '/applications/{application-id}/synchronization/jobs/{synchronizationJob-id}',
    'get'
  >;
  'PATCH /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}': Operation<
    '/applications/{application-id}/synchronization/jobs/{synchronizationJob-id}',
    'patch'
  >;
  'POST /applications/{application-id}/synchronization/jobs': Operation<
    '/applications/{application-id}/synchronization/jobs',
    'post'
  >;
  'GET /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/bulkUpload': Operation<
    '/applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/bulkUpload',
    'get'
  >;
  'PATCH /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/bulkUpload': Operation<
    '/applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/bulkUpload',
    'patch'
  >;
  'DELETE /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/bulkUpload': Operation<
    '/applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/bulkUpload',
    'delete'
  >;
  'POST /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/pause': Operation<
    '/applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/pause',
    'post'
  >;
  'POST /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/provisionOnDemand': Operation<
    '/applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/provisionOnDemand',
    'post'
  >;
  'POST /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/restart': Operation<
    '/applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/restart',
    'post'
  >;
  'POST /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/start': Operation<
    '/applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/start',
    'post'
  >;
  'POST /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/validateCredentials': Operation<
    '/applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/validateCredentials',
    'post'
  >;
  'POST /applications/{application-id}/synchronization/jobs/validateCredentials': Operation<
    '/applications/{application-id}/synchronization/jobs/validateCredentials',
    'post'
  >;
}

/**
 * `DELETE /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/applications/{application-id}/synchronization/jobs/{synchronizationJob-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['application-id', 'synchronizationJob-id'],
    },
    params,
  };
}

/**
 * `GET /applications/{application-id}/synchronization/jobs`
 *
 * Performs synchronization by periodically running in the background, polling for changes in one directory, and pushing them to another directory.
 */
export function list(
  params?: IEndpoints['GET /applications/{application-id}/synchronization/jobs']['parameters']
): EndpointRequest<
  IEndpoints['GET /applications/{application-id}/synchronization/jobs']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/applications/{application-id}/synchronization/jobs',
    paramDefs: {
      path: ['application-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}`
 *
 * Performs synchronization by periodically running in the background, polling for changes in one directory, and pushing them to another directory.
 */
export function get(
  params?: IEndpoints['GET /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/applications/{application-id}/synchronization/jobs/{synchronizationJob-id}',
    paramDefs: {
      path: ['application-id', 'synchronizationJob-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}']['body'],
  params?: IEndpoints['PATCH /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/applications/{application-id}/synchronization/jobs/{synchronizationJob-id}',
    paramDefs: {
      path: ['application-id', 'synchronizationJob-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /applications/{application-id}/synchronization/jobs`
 *
 */
export function create(
  body: IEndpoints['POST /applications/{application-id}/synchronization/jobs']['body'],
  params?: IEndpoints['POST /applications/{application-id}/synchronization/jobs']['parameters']
): EndpointRequest<
  IEndpoints['POST /applications/{application-id}/synchronization/jobs']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/applications/{application-id}/synchronization/jobs',
    paramDefs: {
      path: ['application-id'],
    },
    params,
    body,
  };
}

export const bulkUpload = {
  /**
   * `GET /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/bulkUpload`
   *
   * The bulk upload operation for the job.
   */
  get: function get(
    params?: IEndpoints['GET /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/bulkUpload']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/bulkUpload']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/bulkUpload',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['application-id', 'synchronizationJob-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/bulkUpload`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/bulkUpload']['body'],
    params?: IEndpoints['PATCH /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/bulkUpload']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/bulkUpload']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/bulkUpload',
      paramDefs: {
        path: ['application-id', 'synchronizationJob-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/bulkUpload`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/bulkUpload']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/bulkUpload']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/bulkUpload',
      paramDefs: {
        header: ['If-Match'],
        path: ['application-id', 'synchronizationJob-id'],
      },
      params,
    };
  },
};

export const pause = {
  /**
   * `POST /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/pause`
   *
   * Temporarily stop a running synchronization job. All the progress, including job state, is persisted, and the job continues from where it left off when a start call is made.
   */
  create: function create(
    params?: IEndpoints['POST /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/pause']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/pause']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/pause',
      paramDefs: {
        path: ['application-id', 'synchronizationJob-id'],
      },
      params,
    };
  },
};

export const provisionOnDemand = {
  /**
   * `POST /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/provisionOnDemand`
   *
   * Select a user and provision the account on-demand. The rate limit for this API is 5 requests per 10 seconds. No user or group will be provisioned on-demand that would not have been provisioned through the regular provisioning cycles.
   */
  create: function create(
    body: IEndpoints['POST /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/provisionOnDemand']['body'],
    params?: IEndpoints['POST /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/provisionOnDemand']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/provisionOnDemand']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/provisionOnDemand',
      paramDefs: {
        path: ['application-id', 'synchronizationJob-id'],
      },
      params,
      body,
    };
  },
};

export const restart = {
  /**
   * `POST /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/restart`
   *
   * Restart a stopped synchronization job, forcing it to reprocess all the objects in the directory. Optionally clears existing the synchronization state and previous errors.
   */
  create: function create(
    body: IEndpoints['POST /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/restart']['body'],
    params?: IEndpoints['POST /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/restart']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/restart']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/restart',
      paramDefs: {
        path: ['application-id', 'synchronizationJob-id'],
      },
      params,
      body,
    };
  },
};

export const start = {
  /**
   * `POST /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/start`
   *
   * Start an existing synchronization job. If the job is in a paused state, it continues processing changes from the point where it was paused. If the job is in quarantine, the quarantine status is cleared. Don&#x27;t create scripts to call the start job continuously while it&#x27;s running because that can cause the service to stop running. Use the start job only when the job is currently paused or in quarantine.
   */
  create: function create(
    params?: IEndpoints['POST /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/start']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/start']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/start',
      paramDefs: {
        path: ['application-id', 'synchronizationJob-id'],
      },
      params,
    };
  },
};

export const validateCredentials = {
  /**
   * `POST /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/validateCredentials`
   *
   * Validate that the credentials are valid in the tenant.
   */
  create: function create(
    body: IEndpoints['POST /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/validateCredentials']['body'],
    params?: IEndpoints['POST /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/validateCredentials']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/validateCredentials']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/validateCredentials',
      paramDefs: {
        path: ['application-id', 'synchronizationJob-id'],
      },
      params,
      body,
    };
  },
  /**
   * `POST /applications/{application-id}/synchronization/jobs/validateCredentials`
   *
   */
  create$1: function create$1(
    body: IEndpoints['POST /applications/{application-id}/synchronization/jobs/validateCredentials']['body'],
    params?: IEndpoints['POST /applications/{application-id}/synchronization/jobs/validateCredentials']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /applications/{application-id}/synchronization/jobs/validateCredentials']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/applications/{application-id}/synchronization/jobs/validateCredentials',
      paramDefs: {
        path: ['application-id'],
      },
      params,
      body,
    };
  },
};
