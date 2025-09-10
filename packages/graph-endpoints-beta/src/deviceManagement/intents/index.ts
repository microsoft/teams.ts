export * as categories from './categories';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/intents/{deviceManagementIntent-id}': Operation<
    '/deviceManagement/intents/{deviceManagementIntent-id}',
    'delete'
  >;
  'GET /deviceManagement/intents': Operation<'/deviceManagement/intents', 'get'>;
  'GET /deviceManagement/intents/{deviceManagementIntent-id}': Operation<
    '/deviceManagement/intents/{deviceManagementIntent-id}',
    'get'
  >;
  'PATCH /deviceManagement/intents/{deviceManagementIntent-id}': Operation<
    '/deviceManagement/intents/{deviceManagementIntent-id}',
    'patch'
  >;
  'POST /deviceManagement/intents': Operation<'/deviceManagement/intents', 'post'>;
  'POST /deviceManagement/intents/{deviceManagementIntent-id}/assign': Operation<
    '/deviceManagement/intents/{deviceManagementIntent-id}/assign',
    'post'
  >;
  'GET /deviceManagement/intents/{deviceManagementIntent-id}/assignments': Operation<
    '/deviceManagement/intents/{deviceManagementIntent-id}/assignments',
    'get'
  >;
  'POST /deviceManagement/intents/{deviceManagementIntent-id}/assignments': Operation<
    '/deviceManagement/intents/{deviceManagementIntent-id}/assignments',
    'post'
  >;
  'GET /deviceManagement/intents/{deviceManagementIntent-id}/assignments/{deviceManagementIntentAssignment-id}': Operation<
    '/deviceManagement/intents/{deviceManagementIntent-id}/assignments/{deviceManagementIntentAssignment-id}',
    'get'
  >;
  'PATCH /deviceManagement/intents/{deviceManagementIntent-id}/assignments/{deviceManagementIntentAssignment-id}': Operation<
    '/deviceManagement/intents/{deviceManagementIntent-id}/assignments/{deviceManagementIntentAssignment-id}',
    'patch'
  >;
  'DELETE /deviceManagement/intents/{deviceManagementIntent-id}/assignments/{deviceManagementIntentAssignment-id}': Operation<
    '/deviceManagement/intents/{deviceManagementIntent-id}/assignments/{deviceManagementIntentAssignment-id}',
    'delete'
  >;
  'POST /deviceManagement/intents/{deviceManagementIntent-id}/createCopy': Operation<
    '/deviceManagement/intents/{deviceManagementIntent-id}/createCopy',
    'post'
  >;
  'GET /deviceManagement/intents/{deviceManagementIntent-id}/deviceSettingStateSummaries': Operation<
    '/deviceManagement/intents/{deviceManagementIntent-id}/deviceSettingStateSummaries',
    'get'
  >;
  'POST /deviceManagement/intents/{deviceManagementIntent-id}/deviceSettingStateSummaries': Operation<
    '/deviceManagement/intents/{deviceManagementIntent-id}/deviceSettingStateSummaries',
    'post'
  >;
  'GET /deviceManagement/intents/{deviceManagementIntent-id}/deviceSettingStateSummaries/{deviceManagementIntentDeviceSettingStateSummary-id}': Operation<
    '/deviceManagement/intents/{deviceManagementIntent-id}/deviceSettingStateSummaries/{deviceManagementIntentDeviceSettingStateSummary-id}',
    'get'
  >;
  'PATCH /deviceManagement/intents/{deviceManagementIntent-id}/deviceSettingStateSummaries/{deviceManagementIntentDeviceSettingStateSummary-id}': Operation<
    '/deviceManagement/intents/{deviceManagementIntent-id}/deviceSettingStateSummaries/{deviceManagementIntentDeviceSettingStateSummary-id}',
    'patch'
  >;
  'DELETE /deviceManagement/intents/{deviceManagementIntent-id}/deviceSettingStateSummaries/{deviceManagementIntentDeviceSettingStateSummary-id}': Operation<
    '/deviceManagement/intents/{deviceManagementIntent-id}/deviceSettingStateSummaries/{deviceManagementIntentDeviceSettingStateSummary-id}',
    'delete'
  >;
  'GET /deviceManagement/intents/{deviceManagementIntent-id}/deviceStateSummary': Operation<
    '/deviceManagement/intents/{deviceManagementIntent-id}/deviceStateSummary',
    'get'
  >;
  'PATCH /deviceManagement/intents/{deviceManagementIntent-id}/deviceStateSummary': Operation<
    '/deviceManagement/intents/{deviceManagementIntent-id}/deviceStateSummary',
    'patch'
  >;
  'DELETE /deviceManagement/intents/{deviceManagementIntent-id}/deviceStateSummary': Operation<
    '/deviceManagement/intents/{deviceManagementIntent-id}/deviceStateSummary',
    'delete'
  >;
  'GET /deviceManagement/intents/{deviceManagementIntent-id}/deviceStates': Operation<
    '/deviceManagement/intents/{deviceManagementIntent-id}/deviceStates',
    'get'
  >;
  'POST /deviceManagement/intents/{deviceManagementIntent-id}/deviceStates': Operation<
    '/deviceManagement/intents/{deviceManagementIntent-id}/deviceStates',
    'post'
  >;
  'GET /deviceManagement/intents/{deviceManagementIntent-id}/deviceStates/{deviceManagementIntentDeviceState-id}': Operation<
    '/deviceManagement/intents/{deviceManagementIntent-id}/deviceStates/{deviceManagementIntentDeviceState-id}',
    'get'
  >;
  'PATCH /deviceManagement/intents/{deviceManagementIntent-id}/deviceStates/{deviceManagementIntentDeviceState-id}': Operation<
    '/deviceManagement/intents/{deviceManagementIntent-id}/deviceStates/{deviceManagementIntentDeviceState-id}',
    'patch'
  >;
  'DELETE /deviceManagement/intents/{deviceManagementIntent-id}/deviceStates/{deviceManagementIntentDeviceState-id}': Operation<
    '/deviceManagement/intents/{deviceManagementIntent-id}/deviceStates/{deviceManagementIntentDeviceState-id}',
    'delete'
  >;
  'POST /deviceManagement/intents/{deviceManagementIntent-id}/migrateToTemplate': Operation<
    '/deviceManagement/intents/{deviceManagementIntent-id}/migrateToTemplate',
    'post'
  >;
  'GET /deviceManagement/intents/{deviceManagementIntent-id}/settings': Operation<
    '/deviceManagement/intents/{deviceManagementIntent-id}/settings',
    'get'
  >;
  'POST /deviceManagement/intents/{deviceManagementIntent-id}/settings': Operation<
    '/deviceManagement/intents/{deviceManagementIntent-id}/settings',
    'post'
  >;
  'GET /deviceManagement/intents/{deviceManagementIntent-id}/settings/{deviceManagementSettingInstance-id}': Operation<
    '/deviceManagement/intents/{deviceManagementIntent-id}/settings/{deviceManagementSettingInstance-id}',
    'get'
  >;
  'PATCH /deviceManagement/intents/{deviceManagementIntent-id}/settings/{deviceManagementSettingInstance-id}': Operation<
    '/deviceManagement/intents/{deviceManagementIntent-id}/settings/{deviceManagementSettingInstance-id}',
    'patch'
  >;
  'DELETE /deviceManagement/intents/{deviceManagementIntent-id}/settings/{deviceManagementSettingInstance-id}': Operation<
    '/deviceManagement/intents/{deviceManagementIntent-id}/settings/{deviceManagementSettingInstance-id}',
    'delete'
  >;
  'POST /deviceManagement/intents/{deviceManagementIntent-id}/updateSettings': Operation<
    '/deviceManagement/intents/{deviceManagementIntent-id}/updateSettings',
    'post'
  >;
  'GET /deviceManagement/intents/{deviceManagementIntent-id}/userStateSummary': Operation<
    '/deviceManagement/intents/{deviceManagementIntent-id}/userStateSummary',
    'get'
  >;
  'PATCH /deviceManagement/intents/{deviceManagementIntent-id}/userStateSummary': Operation<
    '/deviceManagement/intents/{deviceManagementIntent-id}/userStateSummary',
    'patch'
  >;
  'DELETE /deviceManagement/intents/{deviceManagementIntent-id}/userStateSummary': Operation<
    '/deviceManagement/intents/{deviceManagementIntent-id}/userStateSummary',
    'delete'
  >;
  'GET /deviceManagement/intents/{deviceManagementIntent-id}/userStates': Operation<
    '/deviceManagement/intents/{deviceManagementIntent-id}/userStates',
    'get'
  >;
  'POST /deviceManagement/intents/{deviceManagementIntent-id}/userStates': Operation<
    '/deviceManagement/intents/{deviceManagementIntent-id}/userStates',
    'post'
  >;
  'GET /deviceManagement/intents/{deviceManagementIntent-id}/userStates/{deviceManagementIntentUserState-id}': Operation<
    '/deviceManagement/intents/{deviceManagementIntent-id}/userStates/{deviceManagementIntentUserState-id}',
    'get'
  >;
  'PATCH /deviceManagement/intents/{deviceManagementIntent-id}/userStates/{deviceManagementIntentUserState-id}': Operation<
    '/deviceManagement/intents/{deviceManagementIntent-id}/userStates/{deviceManagementIntentUserState-id}',
    'patch'
  >;
  'DELETE /deviceManagement/intents/{deviceManagementIntent-id}/userStates/{deviceManagementIntentUserState-id}': Operation<
    '/deviceManagement/intents/{deviceManagementIntent-id}/userStates/{deviceManagementIntentUserState-id}',
    'delete'
  >;
}

/**
 * `DELETE /deviceManagement/intents/{deviceManagementIntent-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/intents/{deviceManagementIntent-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/intents/{deviceManagementIntent-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/intents/{deviceManagementIntent-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['deviceManagementIntent-id'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/intents`
 *
 * The device management intents
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/intents']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/intents']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/intents',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/intents/{deviceManagementIntent-id}`
 *
 * The device management intents
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/intents/{deviceManagementIntent-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/intents/{deviceManagementIntent-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/intents/{deviceManagementIntent-id}',
    paramDefs: {
      path: ['deviceManagementIntent-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /deviceManagement/intents/{deviceManagementIntent-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/intents/{deviceManagementIntent-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/intents/{deviceManagementIntent-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/intents/{deviceManagementIntent-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/intents/{deviceManagementIntent-id}',
    paramDefs: {
      path: ['deviceManagementIntent-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/intents`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/intents']['body']
): EndpointRequest<IEndpoints['POST /deviceManagement/intents']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/intents',
    body,
  };
}

export const assign = {
  /**
   * `POST /deviceManagement/intents/{deviceManagementIntent-id}/assign`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/intents/{deviceManagementIntent-id}/assign']['body'],
    params?: IEndpoints['POST /deviceManagement/intents/{deviceManagementIntent-id}/assign']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/intents/{deviceManagementIntent-id}/assign']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/intents/{deviceManagementIntent-id}/assign',
      paramDefs: {
        path: ['deviceManagementIntent-id'],
      },
      params,
      body,
    };
  },
};

export const assignments = {
  /**
   * `GET /deviceManagement/intents/{deviceManagementIntent-id}/assignments`
   *
   * Collection of assignments
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/intents/{deviceManagementIntent-id}/assignments']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/intents/{deviceManagementIntent-id}/assignments']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/intents/{deviceManagementIntent-id}/assignments',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['deviceManagementIntent-id'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/intents/{deviceManagementIntent-id}/assignments`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/intents/{deviceManagementIntent-id}/assignments']['body'],
    params?: IEndpoints['POST /deviceManagement/intents/{deviceManagementIntent-id}/assignments']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/intents/{deviceManagementIntent-id}/assignments']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/intents/{deviceManagementIntent-id}/assignments',
      paramDefs: {
        path: ['deviceManagementIntent-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /deviceManagement/intents/{deviceManagementIntent-id}/assignments/{deviceManagementIntentAssignment-id}`
   *
   * Collection of assignments
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/intents/{deviceManagementIntent-id}/assignments/{deviceManagementIntentAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/intents/{deviceManagementIntent-id}/assignments/{deviceManagementIntentAssignment-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/intents/{deviceManagementIntent-id}/assignments/{deviceManagementIntentAssignment-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['deviceManagementIntent-id', 'deviceManagementIntentAssignment-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/intents/{deviceManagementIntent-id}/assignments/{deviceManagementIntentAssignment-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/intents/{deviceManagementIntent-id}/assignments/{deviceManagementIntentAssignment-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/intents/{deviceManagementIntent-id}/assignments/{deviceManagementIntentAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/intents/{deviceManagementIntent-id}/assignments/{deviceManagementIntentAssignment-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/intents/{deviceManagementIntent-id}/assignments/{deviceManagementIntentAssignment-id}',
      paramDefs: {
        path: ['deviceManagementIntent-id', 'deviceManagementIntentAssignment-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/intents/{deviceManagementIntent-id}/assignments/{deviceManagementIntentAssignment-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/intents/{deviceManagementIntent-id}/assignments/{deviceManagementIntentAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/intents/{deviceManagementIntent-id}/assignments/{deviceManagementIntentAssignment-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/intents/{deviceManagementIntent-id}/assignments/{deviceManagementIntentAssignment-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['deviceManagementIntent-id', 'deviceManagementIntentAssignment-id'],
      },
      params,
    };
  },
};

export const createCopy = {
  /**
   * `POST /deviceManagement/intents/{deviceManagementIntent-id}/createCopy`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/intents/{deviceManagementIntent-id}/createCopy']['body'],
    params?: IEndpoints['POST /deviceManagement/intents/{deviceManagementIntent-id}/createCopy']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/intents/{deviceManagementIntent-id}/createCopy']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/intents/{deviceManagementIntent-id}/createCopy',
      paramDefs: {
        path: ['deviceManagementIntent-id'],
      },
      params,
      body,
    };
  },
};

export const deviceSettingStateSummaries = {
  /**
   * `GET /deviceManagement/intents/{deviceManagementIntent-id}/deviceSettingStateSummaries`
   *
   * Collection of settings and their states and counts of devices that belong to corresponding state for all settings within the intent
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/intents/{deviceManagementIntent-id}/deviceSettingStateSummaries']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/intents/{deviceManagementIntent-id}/deviceSettingStateSummaries']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/intents/{deviceManagementIntent-id}/deviceSettingStateSummaries',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['deviceManagementIntent-id'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/intents/{deviceManagementIntent-id}/deviceSettingStateSummaries`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/intents/{deviceManagementIntent-id}/deviceSettingStateSummaries']['body'],
    params?: IEndpoints['POST /deviceManagement/intents/{deviceManagementIntent-id}/deviceSettingStateSummaries']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/intents/{deviceManagementIntent-id}/deviceSettingStateSummaries']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/intents/{deviceManagementIntent-id}/deviceSettingStateSummaries',
      paramDefs: {
        path: ['deviceManagementIntent-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /deviceManagement/intents/{deviceManagementIntent-id}/deviceSettingStateSummaries/{deviceManagementIntentDeviceSettingStateSummary-id}`
   *
   * Collection of settings and their states and counts of devices that belong to corresponding state for all settings within the intent
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/intents/{deviceManagementIntent-id}/deviceSettingStateSummaries/{deviceManagementIntentDeviceSettingStateSummary-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/intents/{deviceManagementIntent-id}/deviceSettingStateSummaries/{deviceManagementIntentDeviceSettingStateSummary-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/intents/{deviceManagementIntent-id}/deviceSettingStateSummaries/{deviceManagementIntentDeviceSettingStateSummary-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['deviceManagementIntent-id', 'deviceManagementIntentDeviceSettingStateSummary-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/intents/{deviceManagementIntent-id}/deviceSettingStateSummaries/{deviceManagementIntentDeviceSettingStateSummary-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/intents/{deviceManagementIntent-id}/deviceSettingStateSummaries/{deviceManagementIntentDeviceSettingStateSummary-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/intents/{deviceManagementIntent-id}/deviceSettingStateSummaries/{deviceManagementIntentDeviceSettingStateSummary-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/intents/{deviceManagementIntent-id}/deviceSettingStateSummaries/{deviceManagementIntentDeviceSettingStateSummary-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/intents/{deviceManagementIntent-id}/deviceSettingStateSummaries/{deviceManagementIntentDeviceSettingStateSummary-id}',
      paramDefs: {
        path: ['deviceManagementIntent-id', 'deviceManagementIntentDeviceSettingStateSummary-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/intents/{deviceManagementIntent-id}/deviceSettingStateSummaries/{deviceManagementIntentDeviceSettingStateSummary-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/intents/{deviceManagementIntent-id}/deviceSettingStateSummaries/{deviceManagementIntentDeviceSettingStateSummary-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/intents/{deviceManagementIntent-id}/deviceSettingStateSummaries/{deviceManagementIntentDeviceSettingStateSummary-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/intents/{deviceManagementIntent-id}/deviceSettingStateSummaries/{deviceManagementIntentDeviceSettingStateSummary-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['deviceManagementIntent-id', 'deviceManagementIntentDeviceSettingStateSummary-id'],
      },
      params,
    };
  },
};

export const deviceStateSummary = {
  /**
   * `GET /deviceManagement/intents/{deviceManagementIntent-id}/deviceStateSummary`
   *
   * A summary of device states and counts of devices that belong to corresponding state for all devices that the intent is applied to
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/intents/{deviceManagementIntent-id}/deviceStateSummary']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/intents/{deviceManagementIntent-id}/deviceStateSummary']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/intents/{deviceManagementIntent-id}/deviceStateSummary',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['deviceManagementIntent-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/intents/{deviceManagementIntent-id}/deviceStateSummary`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/intents/{deviceManagementIntent-id}/deviceStateSummary']['body'],
    params?: IEndpoints['PATCH /deviceManagement/intents/{deviceManagementIntent-id}/deviceStateSummary']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/intents/{deviceManagementIntent-id}/deviceStateSummary']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/intents/{deviceManagementIntent-id}/deviceStateSummary',
      paramDefs: {
        path: ['deviceManagementIntent-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/intents/{deviceManagementIntent-id}/deviceStateSummary`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/intents/{deviceManagementIntent-id}/deviceStateSummary']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/intents/{deviceManagementIntent-id}/deviceStateSummary']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/intents/{deviceManagementIntent-id}/deviceStateSummary',
      paramDefs: {
        header: ['If-Match'],
        path: ['deviceManagementIntent-id'],
      },
      params,
    };
  },
};

export const deviceStates = {
  /**
   * `GET /deviceManagement/intents/{deviceManagementIntent-id}/deviceStates`
   *
   * Collection of states of all devices that the intent is applied to
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/intents/{deviceManagementIntent-id}/deviceStates']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/intents/{deviceManagementIntent-id}/deviceStates']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/intents/{deviceManagementIntent-id}/deviceStates',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['deviceManagementIntent-id'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/intents/{deviceManagementIntent-id}/deviceStates`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/intents/{deviceManagementIntent-id}/deviceStates']['body'],
    params?: IEndpoints['POST /deviceManagement/intents/{deviceManagementIntent-id}/deviceStates']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/intents/{deviceManagementIntent-id}/deviceStates']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/intents/{deviceManagementIntent-id}/deviceStates',
      paramDefs: {
        path: ['deviceManagementIntent-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /deviceManagement/intents/{deviceManagementIntent-id}/deviceStates/{deviceManagementIntentDeviceState-id}`
   *
   * Collection of states of all devices that the intent is applied to
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/intents/{deviceManagementIntent-id}/deviceStates/{deviceManagementIntentDeviceState-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/intents/{deviceManagementIntent-id}/deviceStates/{deviceManagementIntentDeviceState-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/intents/{deviceManagementIntent-id}/deviceStates/{deviceManagementIntentDeviceState-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['deviceManagementIntent-id', 'deviceManagementIntentDeviceState-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/intents/{deviceManagementIntent-id}/deviceStates/{deviceManagementIntentDeviceState-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/intents/{deviceManagementIntent-id}/deviceStates/{deviceManagementIntentDeviceState-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/intents/{deviceManagementIntent-id}/deviceStates/{deviceManagementIntentDeviceState-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/intents/{deviceManagementIntent-id}/deviceStates/{deviceManagementIntentDeviceState-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/intents/{deviceManagementIntent-id}/deviceStates/{deviceManagementIntentDeviceState-id}',
      paramDefs: {
        path: ['deviceManagementIntent-id', 'deviceManagementIntentDeviceState-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/intents/{deviceManagementIntent-id}/deviceStates/{deviceManagementIntentDeviceState-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/intents/{deviceManagementIntent-id}/deviceStates/{deviceManagementIntentDeviceState-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/intents/{deviceManagementIntent-id}/deviceStates/{deviceManagementIntentDeviceState-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/intents/{deviceManagementIntent-id}/deviceStates/{deviceManagementIntentDeviceState-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['deviceManagementIntent-id', 'deviceManagementIntentDeviceState-id'],
      },
      params,
    };
  },
};

export const migrateToTemplate = {
  /**
   * `POST /deviceManagement/intents/{deviceManagementIntent-id}/migrateToTemplate`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/intents/{deviceManagementIntent-id}/migrateToTemplate']['body'],
    params?: IEndpoints['POST /deviceManagement/intents/{deviceManagementIntent-id}/migrateToTemplate']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/intents/{deviceManagementIntent-id}/migrateToTemplate']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/intents/{deviceManagementIntent-id}/migrateToTemplate',
      paramDefs: {
        path: ['deviceManagementIntent-id'],
      },
      params,
      body,
    };
  },
};

export const settings = {
  /**
   * `GET /deviceManagement/intents/{deviceManagementIntent-id}/settings`
   *
   * Collection of all settings to be applied
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/intents/{deviceManagementIntent-id}/settings']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/intents/{deviceManagementIntent-id}/settings']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/intents/{deviceManagementIntent-id}/settings',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['deviceManagementIntent-id'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/intents/{deviceManagementIntent-id}/settings`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/intents/{deviceManagementIntent-id}/settings']['body'],
    params?: IEndpoints['POST /deviceManagement/intents/{deviceManagementIntent-id}/settings']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/intents/{deviceManagementIntent-id}/settings']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/intents/{deviceManagementIntent-id}/settings',
      paramDefs: {
        path: ['deviceManagementIntent-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /deviceManagement/intents/{deviceManagementIntent-id}/settings/{deviceManagementSettingInstance-id}`
   *
   * Collection of all settings to be applied
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/intents/{deviceManagementIntent-id}/settings/{deviceManagementSettingInstance-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/intents/{deviceManagementIntent-id}/settings/{deviceManagementSettingInstance-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/intents/{deviceManagementIntent-id}/settings/{deviceManagementSettingInstance-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['deviceManagementIntent-id', 'deviceManagementSettingInstance-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/intents/{deviceManagementIntent-id}/settings/{deviceManagementSettingInstance-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/intents/{deviceManagementIntent-id}/settings/{deviceManagementSettingInstance-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/intents/{deviceManagementIntent-id}/settings/{deviceManagementSettingInstance-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/intents/{deviceManagementIntent-id}/settings/{deviceManagementSettingInstance-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/intents/{deviceManagementIntent-id}/settings/{deviceManagementSettingInstance-id}',
      paramDefs: {
        path: ['deviceManagementIntent-id', 'deviceManagementSettingInstance-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/intents/{deviceManagementIntent-id}/settings/{deviceManagementSettingInstance-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/intents/{deviceManagementIntent-id}/settings/{deviceManagementSettingInstance-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/intents/{deviceManagementIntent-id}/settings/{deviceManagementSettingInstance-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/intents/{deviceManagementIntent-id}/settings/{deviceManagementSettingInstance-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['deviceManagementIntent-id', 'deviceManagementSettingInstance-id'],
      },
      params,
    };
  },
};

export const updateSettings = {
  /**
   * `POST /deviceManagement/intents/{deviceManagementIntent-id}/updateSettings`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/intents/{deviceManagementIntent-id}/updateSettings']['body'],
    params?: IEndpoints['POST /deviceManagement/intents/{deviceManagementIntent-id}/updateSettings']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/intents/{deviceManagementIntent-id}/updateSettings']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/intents/{deviceManagementIntent-id}/updateSettings',
      paramDefs: {
        path: ['deviceManagementIntent-id'],
      },
      params,
      body,
    };
  },
};

export const userStateSummary = {
  /**
   * `GET /deviceManagement/intents/{deviceManagementIntent-id}/userStateSummary`
   *
   * A summary of user states and counts of users that belong to corresponding state for all users that the intent is applied to
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/intents/{deviceManagementIntent-id}/userStateSummary']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/intents/{deviceManagementIntent-id}/userStateSummary']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/intents/{deviceManagementIntent-id}/userStateSummary',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['deviceManagementIntent-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/intents/{deviceManagementIntent-id}/userStateSummary`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/intents/{deviceManagementIntent-id}/userStateSummary']['body'],
    params?: IEndpoints['PATCH /deviceManagement/intents/{deviceManagementIntent-id}/userStateSummary']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/intents/{deviceManagementIntent-id}/userStateSummary']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/intents/{deviceManagementIntent-id}/userStateSummary',
      paramDefs: {
        path: ['deviceManagementIntent-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/intents/{deviceManagementIntent-id}/userStateSummary`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/intents/{deviceManagementIntent-id}/userStateSummary']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/intents/{deviceManagementIntent-id}/userStateSummary']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/intents/{deviceManagementIntent-id}/userStateSummary',
      paramDefs: {
        header: ['If-Match'],
        path: ['deviceManagementIntent-id'],
      },
      params,
    };
  },
};

export const userStates = {
  /**
   * `GET /deviceManagement/intents/{deviceManagementIntent-id}/userStates`
   *
   * Collection of states of all users that the intent is applied to
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/intents/{deviceManagementIntent-id}/userStates']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/intents/{deviceManagementIntent-id}/userStates']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/intents/{deviceManagementIntent-id}/userStates',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['deviceManagementIntent-id'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/intents/{deviceManagementIntent-id}/userStates`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/intents/{deviceManagementIntent-id}/userStates']['body'],
    params?: IEndpoints['POST /deviceManagement/intents/{deviceManagementIntent-id}/userStates']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/intents/{deviceManagementIntent-id}/userStates']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/intents/{deviceManagementIntent-id}/userStates',
      paramDefs: {
        path: ['deviceManagementIntent-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /deviceManagement/intents/{deviceManagementIntent-id}/userStates/{deviceManagementIntentUserState-id}`
   *
   * Collection of states of all users that the intent is applied to
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/intents/{deviceManagementIntent-id}/userStates/{deviceManagementIntentUserState-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/intents/{deviceManagementIntent-id}/userStates/{deviceManagementIntentUserState-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/intents/{deviceManagementIntent-id}/userStates/{deviceManagementIntentUserState-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['deviceManagementIntent-id', 'deviceManagementIntentUserState-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/intents/{deviceManagementIntent-id}/userStates/{deviceManagementIntentUserState-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/intents/{deviceManagementIntent-id}/userStates/{deviceManagementIntentUserState-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/intents/{deviceManagementIntent-id}/userStates/{deviceManagementIntentUserState-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/intents/{deviceManagementIntent-id}/userStates/{deviceManagementIntentUserState-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/intents/{deviceManagementIntent-id}/userStates/{deviceManagementIntentUserState-id}',
      paramDefs: {
        path: ['deviceManagementIntent-id', 'deviceManagementIntentUserState-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/intents/{deviceManagementIntent-id}/userStates/{deviceManagementIntentUserState-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/intents/{deviceManagementIntent-id}/userStates/{deviceManagementIntentUserState-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/intents/{deviceManagementIntent-id}/userStates/{deviceManagementIntentUserState-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/intents/{deviceManagementIntent-id}/userStates/{deviceManagementIntentUserState-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['deviceManagementIntent-id', 'deviceManagementIntentUserState-id'],
      },
      params,
    };
  },
};
