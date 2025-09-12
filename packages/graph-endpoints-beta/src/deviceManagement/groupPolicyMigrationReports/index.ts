import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}': Operation<
    '/deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}',
    'delete'
  >;
  'GET /deviceManagement/groupPolicyMigrationReports': Operation<
    '/deviceManagement/groupPolicyMigrationReports',
    'get'
  >;
  'GET /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}': Operation<
    '/deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}',
    'get'
  >;
  'PATCH /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}': Operation<
    '/deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}',
    'patch'
  >;
  'POST /deviceManagement/groupPolicyMigrationReports': Operation<
    '/deviceManagement/groupPolicyMigrationReports',
    'post'
  >;
  'POST /deviceManagement/groupPolicyMigrationReports/createMigrationReport': Operation<
    '/deviceManagement/groupPolicyMigrationReports/createMigrationReport',
    'post'
  >;
  'GET /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/groupPolicySettingMappings': Operation<
    '/deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/groupPolicySettingMappings',
    'get'
  >;
  'POST /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/groupPolicySettingMappings': Operation<
    '/deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/groupPolicySettingMappings',
    'post'
  >;
  'GET /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/groupPolicySettingMappings/{groupPolicySettingMapping-id}': Operation<
    '/deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/groupPolicySettingMappings/{groupPolicySettingMapping-id}',
    'get'
  >;
  'PATCH /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/groupPolicySettingMappings/{groupPolicySettingMapping-id}': Operation<
    '/deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/groupPolicySettingMappings/{groupPolicySettingMapping-id}',
    'patch'
  >;
  'DELETE /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/groupPolicySettingMappings/{groupPolicySettingMapping-id}': Operation<
    '/deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/groupPolicySettingMappings/{groupPolicySettingMapping-id}',
    'delete'
  >;
  'GET /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/unsupportedGroupPolicyExtensions': Operation<
    '/deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/unsupportedGroupPolicyExtensions',
    'get'
  >;
  'POST /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/unsupportedGroupPolicyExtensions': Operation<
    '/deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/unsupportedGroupPolicyExtensions',
    'post'
  >;
  'GET /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/unsupportedGroupPolicyExtensions/{unsupportedGroupPolicyExtension-id}': Operation<
    '/deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/unsupportedGroupPolicyExtensions/{unsupportedGroupPolicyExtension-id}',
    'get'
  >;
  'PATCH /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/unsupportedGroupPolicyExtensions/{unsupportedGroupPolicyExtension-id}': Operation<
    '/deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/unsupportedGroupPolicyExtensions/{unsupportedGroupPolicyExtension-id}',
    'patch'
  >;
  'DELETE /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/unsupportedGroupPolicyExtensions/{unsupportedGroupPolicyExtension-id}': Operation<
    '/deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/unsupportedGroupPolicyExtensions/{unsupportedGroupPolicyExtension-id}',
    'delete'
  >;
  'POST /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/updateScopeTags': Operation<
    '/deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/updateScopeTags',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['groupPolicyMigrationReport-id'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/groupPolicyMigrationReports`
 *
 * A list of Group Policy migration reports.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/groupPolicyMigrationReports']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/groupPolicyMigrationReports']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/groupPolicyMigrationReports',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}`
 *
 * A list of Group Policy migration reports.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}',
    paramDefs: {
      path: ['groupPolicyMigrationReport-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}',
    paramDefs: {
      path: ['groupPolicyMigrationReport-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/groupPolicyMigrationReports`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/groupPolicyMigrationReports']['body']
): EndpointRequest<IEndpoints['POST /deviceManagement/groupPolicyMigrationReports']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/groupPolicyMigrationReports',
    body,
  };
}

export const createMigrationReport = {
  /**
   * `POST /deviceManagement/groupPolicyMigrationReports/createMigrationReport`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/groupPolicyMigrationReports/createMigrationReport']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/groupPolicyMigrationReports/createMigrationReport']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/groupPolicyMigrationReports/createMigrationReport',
      body,
    };
  },
};

export const groupPolicySettingMappings = {
  /**
   * `GET /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/groupPolicySettingMappings`
   *
   * A list of group policy settings to MDM/Intune mappings.
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/groupPolicySettingMappings']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/groupPolicySettingMappings']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/groupPolicySettingMappings',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['groupPolicyMigrationReport-id'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/groupPolicySettingMappings`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/groupPolicySettingMappings']['body'],
    params?: IEndpoints['POST /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/groupPolicySettingMappings']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/groupPolicySettingMappings']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/groupPolicySettingMappings',
      paramDefs: {
        path: ['groupPolicyMigrationReport-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/groupPolicySettingMappings/{groupPolicySettingMapping-id}`
   *
   * A list of group policy settings to MDM/Intune mappings.
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/groupPolicySettingMappings/{groupPolicySettingMapping-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/groupPolicySettingMappings/{groupPolicySettingMapping-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/groupPolicySettingMappings/{groupPolicySettingMapping-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['groupPolicyMigrationReport-id', 'groupPolicySettingMapping-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/groupPolicySettingMappings/{groupPolicySettingMapping-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/groupPolicySettingMappings/{groupPolicySettingMapping-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/groupPolicySettingMappings/{groupPolicySettingMapping-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/groupPolicySettingMappings/{groupPolicySettingMapping-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/groupPolicySettingMappings/{groupPolicySettingMapping-id}',
      paramDefs: {
        path: ['groupPolicyMigrationReport-id', 'groupPolicySettingMapping-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/groupPolicySettingMappings/{groupPolicySettingMapping-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/groupPolicySettingMappings/{groupPolicySettingMapping-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/groupPolicySettingMappings/{groupPolicySettingMapping-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/groupPolicySettingMappings/{groupPolicySettingMapping-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['groupPolicyMigrationReport-id', 'groupPolicySettingMapping-id'],
      },
      params,
    };
  },
};

export const unsupportedGroupPolicyExtensions = {
  /**
   * `GET /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/unsupportedGroupPolicyExtensions`
   *
   * A list of unsupported group policy extensions inside the Group Policy Object.
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/unsupportedGroupPolicyExtensions']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/unsupportedGroupPolicyExtensions']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/unsupportedGroupPolicyExtensions',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['groupPolicyMigrationReport-id'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/unsupportedGroupPolicyExtensions`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/unsupportedGroupPolicyExtensions']['body'],
    params?: IEndpoints['POST /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/unsupportedGroupPolicyExtensions']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/unsupportedGroupPolicyExtensions']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/unsupportedGroupPolicyExtensions',
      paramDefs: {
        path: ['groupPolicyMigrationReport-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/unsupportedGroupPolicyExtensions/{unsupportedGroupPolicyExtension-id}`
   *
   * A list of unsupported group policy extensions inside the Group Policy Object.
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/unsupportedGroupPolicyExtensions/{unsupportedGroupPolicyExtension-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/unsupportedGroupPolicyExtensions/{unsupportedGroupPolicyExtension-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/unsupportedGroupPolicyExtensions/{unsupportedGroupPolicyExtension-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['groupPolicyMigrationReport-id', 'unsupportedGroupPolicyExtension-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/unsupportedGroupPolicyExtensions/{unsupportedGroupPolicyExtension-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/unsupportedGroupPolicyExtensions/{unsupportedGroupPolicyExtension-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/unsupportedGroupPolicyExtensions/{unsupportedGroupPolicyExtension-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/unsupportedGroupPolicyExtensions/{unsupportedGroupPolicyExtension-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/unsupportedGroupPolicyExtensions/{unsupportedGroupPolicyExtension-id}',
      paramDefs: {
        path: ['groupPolicyMigrationReport-id', 'unsupportedGroupPolicyExtension-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/unsupportedGroupPolicyExtensions/{unsupportedGroupPolicyExtension-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/unsupportedGroupPolicyExtensions/{unsupportedGroupPolicyExtension-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/unsupportedGroupPolicyExtensions/{unsupportedGroupPolicyExtension-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/unsupportedGroupPolicyExtensions/{unsupportedGroupPolicyExtension-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['groupPolicyMigrationReport-id', 'unsupportedGroupPolicyExtension-id'],
      },
      params,
    };
  },
};

export const updateScopeTags = {
  /**
   * `POST /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/updateScopeTags`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/updateScopeTags']['body'],
    params?: IEndpoints['POST /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/updateScopeTags']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/updateScopeTags']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/updateScopeTags',
      paramDefs: {
        path: ['groupPolicyMigrationReport-id'],
      },
      params,
      body,
    };
  },
};
