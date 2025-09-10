import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/labels/retentionLabels/{retentionLabel-id}/descriptors': Operation<
    '/security/labels/retentionLabels/{retentionLabel-id}/descriptors',
    'delete'
  >;
  'GET /security/labels/retentionLabels/{retentionLabel-id}/descriptors': Operation<
    '/security/labels/retentionLabels/{retentionLabel-id}/descriptors',
    'get'
  >;
  'PATCH /security/labels/retentionLabels/{retentionLabel-id}/descriptors': Operation<
    '/security/labels/retentionLabels/{retentionLabel-id}/descriptors',
    'patch'
  >;
  'GET /security/labels/retentionLabels/{retentionLabel-id}/descriptors/authorityTemplate': Operation<
    '/security/labels/retentionLabels/{retentionLabel-id}/descriptors/authorityTemplate',
    'get'
  >;
  'GET /security/labels/retentionLabels/{retentionLabel-id}/descriptors/categoryTemplate': Operation<
    '/security/labels/retentionLabels/{retentionLabel-id}/descriptors/categoryTemplate',
    'get'
  >;
  'GET /security/labels/retentionLabels/{retentionLabel-id}/descriptors/citationTemplate': Operation<
    '/security/labels/retentionLabels/{retentionLabel-id}/descriptors/citationTemplate',
    'get'
  >;
  'GET /security/labels/retentionLabels/{retentionLabel-id}/descriptors/departmentTemplate': Operation<
    '/security/labels/retentionLabels/{retentionLabel-id}/descriptors/departmentTemplate',
    'get'
  >;
  'GET /security/labels/retentionLabels/{retentionLabel-id}/descriptors/filePlanReferenceTemplate': Operation<
    '/security/labels/retentionLabels/{retentionLabel-id}/descriptors/filePlanReferenceTemplate',
    'get'
  >;
}

/**
 * `DELETE /security/labels/retentionLabels/{retentionLabel-id}/descriptors`
 *
 */
export function del(
  params?: IEndpoints['DELETE /security/labels/retentionLabels/{retentionLabel-id}/descriptors']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /security/labels/retentionLabels/{retentionLabel-id}/descriptors']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/security/labels/retentionLabels/{retentionLabel-id}/descriptors',
    paramDefs: {
      header: ['If-Match'],
      path: ['retentionLabel-id'],
    },
    params,
  };
}

/**
 * `GET /security/labels/retentionLabels/{retentionLabel-id}/descriptors`
 *
 * Represents out-of-the-box values that provide more options to improve the manageability and organization of the content you need to label.
 */
export function list(
  params?: IEndpoints['GET /security/labels/retentionLabels/{retentionLabel-id}/descriptors']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/labels/retentionLabels/{retentionLabel-id}/descriptors']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/labels/retentionLabels/{retentionLabel-id}/descriptors',
    paramDefs: {
      path: ['retentionLabel-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /security/labels/retentionLabels/{retentionLabel-id}/descriptors`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/labels/retentionLabels/{retentionLabel-id}/descriptors']['body'],
  params?: IEndpoints['PATCH /security/labels/retentionLabels/{retentionLabel-id}/descriptors']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /security/labels/retentionLabels/{retentionLabel-id}/descriptors']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/security/labels/retentionLabels/{retentionLabel-id}/descriptors',
    paramDefs: {
      path: ['retentionLabel-id'],
    },
    params,
    body,
  };
}

export const authorityTemplate = {
  /**
   * `GET /security/labels/retentionLabels/{retentionLabel-id}/descriptors/authorityTemplate`
   *
   * Specifies the underlying authority that describes the type of content to be retained and its retention schedule.
   */
  get: function get(
    params?: IEndpoints['GET /security/labels/retentionLabels/{retentionLabel-id}/descriptors/authorityTemplate']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/labels/retentionLabels/{retentionLabel-id}/descriptors/authorityTemplate']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/security/labels/retentionLabels/{retentionLabel-id}/descriptors/authorityTemplate',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['retentionLabel-id'],
      },
      params,
    };
  },
};

export const categoryTemplate = {
  /**
   * `GET /security/labels/retentionLabels/{retentionLabel-id}/descriptors/categoryTemplate`
   *
   * Specifies a group of similar types of content in a particular department.
   */
  get: function get(
    params?: IEndpoints['GET /security/labels/retentionLabels/{retentionLabel-id}/descriptors/categoryTemplate']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/labels/retentionLabels/{retentionLabel-id}/descriptors/categoryTemplate']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/security/labels/retentionLabels/{retentionLabel-id}/descriptors/categoryTemplate',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['retentionLabel-id'],
      },
      params,
    };
  },
};

export const citationTemplate = {
  /**
   * `GET /security/labels/retentionLabels/{retentionLabel-id}/descriptors/citationTemplate`
   *
   * The specific rule or regulation created by a jurisdiction used to determine whether certain labels and content should be retained or deleted.
   */
  get: function get(
    params?: IEndpoints['GET /security/labels/retentionLabels/{retentionLabel-id}/descriptors/citationTemplate']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/labels/retentionLabels/{retentionLabel-id}/descriptors/citationTemplate']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/security/labels/retentionLabels/{retentionLabel-id}/descriptors/citationTemplate',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['retentionLabel-id'],
      },
      params,
    };
  },
};

export const departmentTemplate = {
  /**
   * `GET /security/labels/retentionLabels/{retentionLabel-id}/descriptors/departmentTemplate`
   *
   * Specifies the  department or business unit of an organization to which a label belongs.
   */
  get: function get(
    params?: IEndpoints['GET /security/labels/retentionLabels/{retentionLabel-id}/descriptors/departmentTemplate']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/labels/retentionLabels/{retentionLabel-id}/descriptors/departmentTemplate']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/security/labels/retentionLabels/{retentionLabel-id}/descriptors/departmentTemplate',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['retentionLabel-id'],
      },
      params,
    };
  },
};

export const filePlanReferenceTemplate = {
  /**
   * `GET /security/labels/retentionLabels/{retentionLabel-id}/descriptors/filePlanReferenceTemplate`
   *
   * Specifies a unique alpha-numeric identifier for an organization’s retention schedule.
   */
  get: function get(
    params?: IEndpoints['GET /security/labels/retentionLabels/{retentionLabel-id}/descriptors/filePlanReferenceTemplate']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/labels/retentionLabels/{retentionLabel-id}/descriptors/filePlanReferenceTemplate']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/security/labels/retentionLabels/{retentionLabel-id}/descriptors/filePlanReferenceTemplate',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['retentionLabel-id'],
      },
      params,
    };
  },
};
