export * as configurationMonitors from './configurationMonitors';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /admin/configurationManagement': Operation<'/admin/configurationManagement', 'delete'>;
  'GET /admin/configurationManagement': Operation<'/admin/configurationManagement', 'get'>;
  'PATCH /admin/configurationManagement': Operation<'/admin/configurationManagement', 'patch'>;
  'GET /admin/configurationManagement/configurationApplications': Operation<
    '/admin/configurationManagement/configurationApplications',
    'get'
  >;
  'POST /admin/configurationManagement/configurationApplications': Operation<
    '/admin/configurationManagement/configurationApplications',
    'post'
  >;
  'GET /admin/configurationManagement/configurationApplications/{configurationApplication-id}': Operation<
    '/admin/configurationManagement/configurationApplications/{configurationApplication-id}',
    'get'
  >;
  'PATCH /admin/configurationManagement/configurationApplications/{configurationApplication-id}': Operation<
    '/admin/configurationManagement/configurationApplications/{configurationApplication-id}',
    'patch'
  >;
  'DELETE /admin/configurationManagement/configurationApplications/{configurationApplication-id}': Operation<
    '/admin/configurationManagement/configurationApplications/{configurationApplication-id}',
    'delete'
  >;
  'GET /admin/configurationManagement/configurationDrifts': Operation<
    '/admin/configurationManagement/configurationDrifts',
    'get'
  >;
  'POST /admin/configurationManagement/configurationDrifts': Operation<
    '/admin/configurationManagement/configurationDrifts',
    'post'
  >;
  'GET /admin/configurationManagement/configurationDrifts/{configurationDrift-id}': Operation<
    '/admin/configurationManagement/configurationDrifts/{configurationDrift-id}',
    'get'
  >;
  'PATCH /admin/configurationManagement/configurationDrifts/{configurationDrift-id}': Operation<
    '/admin/configurationManagement/configurationDrifts/{configurationDrift-id}',
    'patch'
  >;
  'DELETE /admin/configurationManagement/configurationDrifts/{configurationDrift-id}': Operation<
    '/admin/configurationManagement/configurationDrifts/{configurationDrift-id}',
    'delete'
  >;
  'GET /admin/configurationManagement/configurationMonitoringResults': Operation<
    '/admin/configurationManagement/configurationMonitoringResults',
    'get'
  >;
  'POST /admin/configurationManagement/configurationMonitoringResults': Operation<
    '/admin/configurationManagement/configurationMonitoringResults',
    'post'
  >;
  'GET /admin/configurationManagement/configurationMonitoringResults/{configurationMonitoringResult-id}': Operation<
    '/admin/configurationManagement/configurationMonitoringResults/{configurationMonitoringResult-id}',
    'get'
  >;
  'PATCH /admin/configurationManagement/configurationMonitoringResults/{configurationMonitoringResult-id}': Operation<
    '/admin/configurationManagement/configurationMonitoringResults/{configurationMonitoringResult-id}',
    'patch'
  >;
  'DELETE /admin/configurationManagement/configurationMonitoringResults/{configurationMonitoringResult-id}': Operation<
    '/admin/configurationManagement/configurationMonitoringResults/{configurationMonitoringResult-id}',
    'delete'
  >;
  'GET /admin/configurationManagement/configurationSnapshotJobs': Operation<
    '/admin/configurationManagement/configurationSnapshotJobs',
    'get'
  >;
  'POST /admin/configurationManagement/configurationSnapshotJobs': Operation<
    '/admin/configurationManagement/configurationSnapshotJobs',
    'post'
  >;
  'GET /admin/configurationManagement/configurationSnapshotJobs/{configurationSnapshotJob-id}': Operation<
    '/admin/configurationManagement/configurationSnapshotJobs/{configurationSnapshotJob-id}',
    'get'
  >;
  'PATCH /admin/configurationManagement/configurationSnapshotJobs/{configurationSnapshotJob-id}': Operation<
    '/admin/configurationManagement/configurationSnapshotJobs/{configurationSnapshotJob-id}',
    'patch'
  >;
  'DELETE /admin/configurationManagement/configurationSnapshotJobs/{configurationSnapshotJob-id}': Operation<
    '/admin/configurationManagement/configurationSnapshotJobs/{configurationSnapshotJob-id}',
    'delete'
  >;
  'GET /admin/configurationManagement/configurationSnapshots': Operation<
    '/admin/configurationManagement/configurationSnapshots',
    'get'
  >;
  'POST /admin/configurationManagement/configurationSnapshots': Operation<
    '/admin/configurationManagement/configurationSnapshots',
    'post'
  >;
  'GET /admin/configurationManagement/configurationSnapshots/{configurationBaseline-id}': Operation<
    '/admin/configurationManagement/configurationSnapshots/{configurationBaseline-id}',
    'get'
  >;
  'PATCH /admin/configurationManagement/configurationSnapshots/{configurationBaseline-id}': Operation<
    '/admin/configurationManagement/configurationSnapshots/{configurationBaseline-id}',
    'patch'
  >;
  'DELETE /admin/configurationManagement/configurationSnapshots/{configurationBaseline-id}': Operation<
    '/admin/configurationManagement/configurationSnapshots/{configurationBaseline-id}',
    'delete'
  >;
}

/**
 * `DELETE /admin/configurationManagement`
 *
 */
export function del(
  params?: IEndpoints['DELETE /admin/configurationManagement']['parameters']
): EndpointRequest<IEndpoints['DELETE /admin/configurationManagement']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/admin/configurationManagement',
    paramDefs: {
      header: ['If-Match'],
    },
    params,
  };
}

/**
 * `GET /admin/configurationManagement`
 *
 */
export function get(
  params?: IEndpoints['GET /admin/configurationManagement']['parameters']
): EndpointRequest<IEndpoints['GET /admin/configurationManagement']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/configurationManagement',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /admin/configurationManagement`
 *
 */
export function update(
  body: IEndpoints['PATCH /admin/configurationManagement']['body']
): EndpointRequest<IEndpoints['PATCH /admin/configurationManagement']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/admin/configurationManagement',
    body,
  };
}

export const configurationApplications = {
  /**
   * `GET /admin/configurationManagement/configurationApplications`
   *
   */
  list: function list(
    params?: IEndpoints['GET /admin/configurationManagement/configurationApplications']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /admin/configurationManagement/configurationApplications']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/admin/configurationManagement/configurationApplications',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /admin/configurationManagement/configurationApplications`
   *
   */
  create: function create(
    body: IEndpoints['POST /admin/configurationManagement/configurationApplications']['body']
  ): EndpointRequest<
    IEndpoints['POST /admin/configurationManagement/configurationApplications']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/admin/configurationManagement/configurationApplications',
      body,
    };
  },
  /**
   * `GET /admin/configurationManagement/configurationApplications/{configurationApplication-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /admin/configurationManagement/configurationApplications/{configurationApplication-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /admin/configurationManagement/configurationApplications/{configurationApplication-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/admin/configurationManagement/configurationApplications/{configurationApplication-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['configurationApplication-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /admin/configurationManagement/configurationApplications/{configurationApplication-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /admin/configurationManagement/configurationApplications/{configurationApplication-id}']['body'],
    params?: IEndpoints['PATCH /admin/configurationManagement/configurationApplications/{configurationApplication-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /admin/configurationManagement/configurationApplications/{configurationApplication-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/admin/configurationManagement/configurationApplications/{configurationApplication-id}',
      paramDefs: {
        path: ['configurationApplication-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /admin/configurationManagement/configurationApplications/{configurationApplication-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /admin/configurationManagement/configurationApplications/{configurationApplication-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /admin/configurationManagement/configurationApplications/{configurationApplication-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/admin/configurationManagement/configurationApplications/{configurationApplication-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['configurationApplication-id'],
      },
      params,
    };
  },
};

export const configurationDrifts = {
  /**
   * `GET /admin/configurationManagement/configurationDrifts`
   *
   */
  list: function list(
    params?: IEndpoints['GET /admin/configurationManagement/configurationDrifts']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /admin/configurationManagement/configurationDrifts']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/admin/configurationManagement/configurationDrifts',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /admin/configurationManagement/configurationDrifts`
   *
   */
  create: function create(
    body: IEndpoints['POST /admin/configurationManagement/configurationDrifts']['body']
  ): EndpointRequest<
    IEndpoints['POST /admin/configurationManagement/configurationDrifts']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/admin/configurationManagement/configurationDrifts',
      body,
    };
  },
  /**
   * `GET /admin/configurationManagement/configurationDrifts/{configurationDrift-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /admin/configurationManagement/configurationDrifts/{configurationDrift-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /admin/configurationManagement/configurationDrifts/{configurationDrift-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/admin/configurationManagement/configurationDrifts/{configurationDrift-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['configurationDrift-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /admin/configurationManagement/configurationDrifts/{configurationDrift-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /admin/configurationManagement/configurationDrifts/{configurationDrift-id}']['body'],
    params?: IEndpoints['PATCH /admin/configurationManagement/configurationDrifts/{configurationDrift-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /admin/configurationManagement/configurationDrifts/{configurationDrift-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/admin/configurationManagement/configurationDrifts/{configurationDrift-id}',
      paramDefs: {
        path: ['configurationDrift-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /admin/configurationManagement/configurationDrifts/{configurationDrift-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /admin/configurationManagement/configurationDrifts/{configurationDrift-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /admin/configurationManagement/configurationDrifts/{configurationDrift-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/admin/configurationManagement/configurationDrifts/{configurationDrift-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['configurationDrift-id'],
      },
      params,
    };
  },
};

export const configurationMonitoringResults = {
  /**
   * `GET /admin/configurationManagement/configurationMonitoringResults`
   *
   */
  list: function list(
    params?: IEndpoints['GET /admin/configurationManagement/configurationMonitoringResults']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /admin/configurationManagement/configurationMonitoringResults']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/admin/configurationManagement/configurationMonitoringResults',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /admin/configurationManagement/configurationMonitoringResults`
   *
   */
  create: function create(
    body: IEndpoints['POST /admin/configurationManagement/configurationMonitoringResults']['body']
  ): EndpointRequest<
    IEndpoints['POST /admin/configurationManagement/configurationMonitoringResults']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/admin/configurationManagement/configurationMonitoringResults',
      body,
    };
  },
  /**
   * `GET /admin/configurationManagement/configurationMonitoringResults/{configurationMonitoringResult-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /admin/configurationManagement/configurationMonitoringResults/{configurationMonitoringResult-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /admin/configurationManagement/configurationMonitoringResults/{configurationMonitoringResult-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/admin/configurationManagement/configurationMonitoringResults/{configurationMonitoringResult-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['configurationMonitoringResult-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /admin/configurationManagement/configurationMonitoringResults/{configurationMonitoringResult-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /admin/configurationManagement/configurationMonitoringResults/{configurationMonitoringResult-id}']['body'],
    params?: IEndpoints['PATCH /admin/configurationManagement/configurationMonitoringResults/{configurationMonitoringResult-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /admin/configurationManagement/configurationMonitoringResults/{configurationMonitoringResult-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/admin/configurationManagement/configurationMonitoringResults/{configurationMonitoringResult-id}',
      paramDefs: {
        path: ['configurationMonitoringResult-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /admin/configurationManagement/configurationMonitoringResults/{configurationMonitoringResult-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /admin/configurationManagement/configurationMonitoringResults/{configurationMonitoringResult-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /admin/configurationManagement/configurationMonitoringResults/{configurationMonitoringResult-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/admin/configurationManagement/configurationMonitoringResults/{configurationMonitoringResult-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['configurationMonitoringResult-id'],
      },
      params,
    };
  },
};

export const configurationSnapshotJobs = {
  /**
   * `GET /admin/configurationManagement/configurationSnapshotJobs`
   *
   */
  list: function list(
    params?: IEndpoints['GET /admin/configurationManagement/configurationSnapshotJobs']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /admin/configurationManagement/configurationSnapshotJobs']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/admin/configurationManagement/configurationSnapshotJobs',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /admin/configurationManagement/configurationSnapshotJobs`
   *
   */
  create: function create(
    body: IEndpoints['POST /admin/configurationManagement/configurationSnapshotJobs']['body']
  ): EndpointRequest<
    IEndpoints['POST /admin/configurationManagement/configurationSnapshotJobs']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/admin/configurationManagement/configurationSnapshotJobs',
      body,
    };
  },
  /**
   * `GET /admin/configurationManagement/configurationSnapshotJobs/{configurationSnapshotJob-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /admin/configurationManagement/configurationSnapshotJobs/{configurationSnapshotJob-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /admin/configurationManagement/configurationSnapshotJobs/{configurationSnapshotJob-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/admin/configurationManagement/configurationSnapshotJobs/{configurationSnapshotJob-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['configurationSnapshotJob-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /admin/configurationManagement/configurationSnapshotJobs/{configurationSnapshotJob-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /admin/configurationManagement/configurationSnapshotJobs/{configurationSnapshotJob-id}']['body'],
    params?: IEndpoints['PATCH /admin/configurationManagement/configurationSnapshotJobs/{configurationSnapshotJob-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /admin/configurationManagement/configurationSnapshotJobs/{configurationSnapshotJob-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/admin/configurationManagement/configurationSnapshotJobs/{configurationSnapshotJob-id}',
      paramDefs: {
        path: ['configurationSnapshotJob-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /admin/configurationManagement/configurationSnapshotJobs/{configurationSnapshotJob-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /admin/configurationManagement/configurationSnapshotJobs/{configurationSnapshotJob-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /admin/configurationManagement/configurationSnapshotJobs/{configurationSnapshotJob-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/admin/configurationManagement/configurationSnapshotJobs/{configurationSnapshotJob-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['configurationSnapshotJob-id'],
      },
      params,
    };
  },
};

export const configurationSnapshots = {
  /**
   * `GET /admin/configurationManagement/configurationSnapshots`
   *
   */
  list: function list(
    params?: IEndpoints['GET /admin/configurationManagement/configurationSnapshots']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /admin/configurationManagement/configurationSnapshots']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/admin/configurationManagement/configurationSnapshots',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /admin/configurationManagement/configurationSnapshots`
   *
   */
  create: function create(
    body: IEndpoints['POST /admin/configurationManagement/configurationSnapshots']['body']
  ): EndpointRequest<
    IEndpoints['POST /admin/configurationManagement/configurationSnapshots']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/admin/configurationManagement/configurationSnapshots',
      body,
    };
  },
  /**
   * `GET /admin/configurationManagement/configurationSnapshots/{configurationBaseline-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /admin/configurationManagement/configurationSnapshots/{configurationBaseline-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /admin/configurationManagement/configurationSnapshots/{configurationBaseline-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/admin/configurationManagement/configurationSnapshots/{configurationBaseline-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['configurationBaseline-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /admin/configurationManagement/configurationSnapshots/{configurationBaseline-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /admin/configurationManagement/configurationSnapshots/{configurationBaseline-id}']['body'],
    params?: IEndpoints['PATCH /admin/configurationManagement/configurationSnapshots/{configurationBaseline-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /admin/configurationManagement/configurationSnapshots/{configurationBaseline-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/admin/configurationManagement/configurationSnapshots/{configurationBaseline-id}',
      paramDefs: {
        path: ['configurationBaseline-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /admin/configurationManagement/configurationSnapshots/{configurationBaseline-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /admin/configurationManagement/configurationSnapshots/{configurationBaseline-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /admin/configurationManagement/configurationSnapshots/{configurationBaseline-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/admin/configurationManagement/configurationSnapshots/{configurationBaseline-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['configurationBaseline-id'],
      },
      params,
    };
  },
};
