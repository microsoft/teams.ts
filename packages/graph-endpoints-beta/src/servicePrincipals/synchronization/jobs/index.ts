export * as schema from './schema';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}': Operation<
    '/servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}',
    'delete'
  >;
  'GET /servicePrincipals/{servicePrincipal-id}/synchronization/jobs': Operation<
    '/servicePrincipals/{servicePrincipal-id}/synchronization/jobs',
    'get'
  >;
  'GET /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}': Operation<
    '/servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}',
    'get'
  >;
  'PATCH /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}': Operation<
    '/servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}',
    'patch'
  >;
  'POST /servicePrincipals/{servicePrincipal-id}/synchronization/jobs': Operation<
    '/servicePrincipals/{servicePrincipal-id}/synchronization/jobs',
    'post'
  >;
  'GET /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}/bulkUpload': Operation<
    '/servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}/bulkUpload',
    'get'
  >;
  'PATCH /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}/bulkUpload': Operation<
    '/servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}/bulkUpload',
    'patch'
  >;
  'DELETE /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}/bulkUpload': Operation<
    '/servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}/bulkUpload',
    'delete'
  >;
  'POST /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}/pause': Operation<
    '/servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}/pause',
    'post'
  >;
  'POST /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}/provisionOnDemand': Operation<
    '/servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}/provisionOnDemand',
    'post'
  >;
  'POST /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}/restart': Operation<
    '/servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}/restart',
    'post'
  >;
  'POST /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}/start': Operation<
    '/servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}/start',
    'post'
  >;
  'POST /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}/validateCredentials': Operation<
    '/servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}/validateCredentials',
    'post'
  >;
  'POST /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/validateCredentials': Operation<
    '/servicePrincipals/{servicePrincipal-id}/synchronization/jobs/validateCredentials',
    'post'
  >;
}

/**
 * `DELETE /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}`
 *
 * Stop the synchronization job, and permanently delete all the state associated with it. Synchronized accounts are left as-is.
 */
export function del(
  params?: IEndpoints['DELETE /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['servicePrincipal-id', 'synchronizationJob-id'],
    },
    params,
  };
}

/**
 * `GET /servicePrincipals/{servicePrincipal-id}/synchronization/jobs`
 *
 * List existing jobs for a given application instance (service principal).
 */
export function list(
  params?: IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/synchronization/jobs']['parameters']
): EndpointRequest<
  IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/synchronization/jobs']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/servicePrincipals/{servicePrincipal-id}/synchronization/jobs',
    paramDefs: {
      path: ['servicePrincipal-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}`
 *
 * Retrieve the existing synchronization job and its properties.
 */
export function get(
  params?: IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}',
    paramDefs: {
      path: ['servicePrincipal-id', 'synchronizationJob-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}']['body'],
  params?: IEndpoints['PATCH /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}',
    paramDefs: {
      path: ['servicePrincipal-id', 'synchronizationJob-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /servicePrincipals/{servicePrincipal-id}/synchronization/jobs`
 *
 * Create new synchronization job with a default synchronization schema. The job is created in a disabled state. Call Start job to start synchronization.
 */
export function create(
  body: IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/synchronization/jobs']['body'],
  params?: IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/synchronization/jobs']['parameters']
): EndpointRequest<
  IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/synchronization/jobs']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/servicePrincipals/{servicePrincipal-id}/synchronization/jobs',
    paramDefs: {
      path: ['servicePrincipal-id'],
    },
    params,
    body,
  };
}

export const bulkUpload = {
  /**
   * `GET /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}/bulkUpload`
   *
   * The bulk upload operation for the job.
   */
  get: function get(
    params?: IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}/bulkUpload']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}/bulkUpload']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}/bulkUpload',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['servicePrincipal-id', 'synchronizationJob-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}/bulkUpload`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}/bulkUpload']['body'],
    params?: IEndpoints['PATCH /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}/bulkUpload']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}/bulkUpload']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}/bulkUpload',
      paramDefs: {
        path: ['servicePrincipal-id', 'synchronizationJob-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}/bulkUpload`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}/bulkUpload']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}/bulkUpload']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}/bulkUpload',
      paramDefs: {
        header: ['If-Match'],
        path: ['servicePrincipal-id', 'synchronizationJob-id'],
      },
      params,
    };
  },
};

export const pause = {
  /**
   * `POST /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}/pause`
   *
   * Temporarily stop a running synchronization job. All the progress, including job state, is persisted, and the job continues from where it left off when a start call is made.
   */
  create: function create(
    params?: IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}/pause']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}/pause']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}/pause',
      paramDefs: {
        path: ['servicePrincipal-id', 'synchronizationJob-id'],
      },
      params,
    };
  },
};

export const provisionOnDemand = {
  /**
   * `POST /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}/provisionOnDemand`
   *
   * Select a user and provision the account on-demand. The rate limit for this API is 5 requests per 10 seconds. No user or group will be provisioned on-demand that would not have been provisioned through the regular provisioning cycles.
   */
  create: function create(
    body: IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}/provisionOnDemand']['body'],
    params?: IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}/provisionOnDemand']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}/provisionOnDemand']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}/provisionOnDemand',
      paramDefs: {
        path: ['servicePrincipal-id', 'synchronizationJob-id'],
      },
      params,
      body,
    };
  },
};

export const restart = {
  /**
   * `POST /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}/restart`
   *
   * Restart a stopped synchronization job, forcing it to reprocess all the objects in the directory. Optionally clears existing the synchronization state and previous errors.
   */
  create: function create(
    body: IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}/restart']['body'],
    params?: IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}/restart']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}/restart']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}/restart',
      paramDefs: {
        path: ['servicePrincipal-id', 'synchronizationJob-id'],
      },
      params,
      body,
    };
  },
};

export const start = {
  /**
   * `POST /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}/start`
   *
   * Start an existing synchronization job. If the job is in a paused state, it continues processing changes from the point where it was paused. If the job is in quarantine, the quarantine status is cleared. Don&#x27;t create scripts to call the start job continuously while it&#x27;s running because that can cause the service to stop running. Use the start job only when the job is currently paused or in quarantine.
   */
  create: function create(
    params?: IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}/start']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}/start']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}/start',
      paramDefs: {
        path: ['servicePrincipal-id', 'synchronizationJob-id'],
      },
      params,
    };
  },
};

export const validateCredentials = {
  /**
   * `POST /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}/validateCredentials`
   *
   * Validate that the credentials are valid in the tenant.
   */
  create: function create(
    body: IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}/validateCredentials']['body'],
    params?: IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}/validateCredentials']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}/validateCredentials']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}/validateCredentials',
      paramDefs: {
        path: ['servicePrincipal-id', 'synchronizationJob-id'],
      },
      params,
      body,
    };
  },
  /**
   * `POST /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/validateCredentials`
   *
   */
  create$1: function create$1(
    body: IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/validateCredentials']['body'],
    params?: IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/validateCredentials']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/validateCredentials']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/servicePrincipals/{servicePrincipal-id}/synchronization/jobs/validateCredentials',
      paramDefs: {
        path: ['servicePrincipal-id'],
      },
      params,
      body,
    };
  },
};
