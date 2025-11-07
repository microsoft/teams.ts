export * as dataConnectors from './dataConnectors';
export * as inboundFlows from './inboundFlows';
export * as outboundProvisioningFlowSets from './outboundProvisioningFlowSets';
export * as runs from './runs';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /external/industryData': Operation<'/external/industryData', 'get'>;
  'GET /external/industryData/operations': Operation<'/external/industryData/operations', 'get'>;
  'POST /external/industryData/operations': Operation<'/external/industryData/operations', 'post'>;
  'GET /external/industryData/operations/{longRunningOperation-id}': Operation<
    '/external/industryData/operations/{longRunningOperation-id}',
    'get'
  >;
  'PATCH /external/industryData/operations/{longRunningOperation-id}': Operation<
    '/external/industryData/operations/{longRunningOperation-id}',
    'patch'
  >;
  'DELETE /external/industryData/operations/{longRunningOperation-id}': Operation<
    '/external/industryData/operations/{longRunningOperation-id}',
    'delete'
  >;
  'GET /external/industryData/referenceDefinitions': Operation<
    '/external/industryData/referenceDefinitions',
    'get'
  >;
  'POST /external/industryData/referenceDefinitions': Operation<
    '/external/industryData/referenceDefinitions',
    'post'
  >;
  'GET /external/industryData/referenceDefinitions/{referenceDefinition-id}': Operation<
    '/external/industryData/referenceDefinitions/{referenceDefinition-id}',
    'get'
  >;
  'PATCH /external/industryData/referenceDefinitions/{referenceDefinition-id}': Operation<
    '/external/industryData/referenceDefinitions/{referenceDefinition-id}',
    'patch'
  >;
  'DELETE /external/industryData/referenceDefinitions/{referenceDefinition-id}': Operation<
    '/external/industryData/referenceDefinitions/{referenceDefinition-id}',
    'delete'
  >;
  'GET /external/industryData/roleGroups': Operation<'/external/industryData/roleGroups', 'get'>;
  'POST /external/industryData/roleGroups': Operation<'/external/industryData/roleGroups', 'post'>;
  'GET /external/industryData/roleGroups/{roleGroup-id}': Operation<
    '/external/industryData/roleGroups/{roleGroup-id}',
    'get'
  >;
  'PATCH /external/industryData/roleGroups/{roleGroup-id}': Operation<
    '/external/industryData/roleGroups/{roleGroup-id}',
    'patch'
  >;
  'DELETE /external/industryData/roleGroups/{roleGroup-id}': Operation<
    '/external/industryData/roleGroups/{roleGroup-id}',
    'delete'
  >;
  'GET /external/industryData/sourceSystems': Operation<
    '/external/industryData/sourceSystems',
    'get'
  >;
  'POST /external/industryData/sourceSystems': Operation<
    '/external/industryData/sourceSystems',
    'post'
  >;
  'GET /external/industryData/sourceSystems/{sourceSystemDefinition-id}': Operation<
    '/external/industryData/sourceSystems/{sourceSystemDefinition-id}',
    'get'
  >;
  'PATCH /external/industryData/sourceSystems/{sourceSystemDefinition-id}': Operation<
    '/external/industryData/sourceSystems/{sourceSystemDefinition-id}',
    'patch'
  >;
  'DELETE /external/industryData/sourceSystems/{sourceSystemDefinition-id}': Operation<
    '/external/industryData/sourceSystems/{sourceSystemDefinition-id}',
    'delete'
  >;
  'GET /external/industryData/years': Operation<'/external/industryData/years', 'get'>;
  'POST /external/industryData/years': Operation<'/external/industryData/years', 'post'>;
  'GET /external/industryData/years/{yearTimePeriodDefinition-id}': Operation<
    '/external/industryData/years/{yearTimePeriodDefinition-id}',
    'get'
  >;
  'PATCH /external/industryData/years/{yearTimePeriodDefinition-id}': Operation<
    '/external/industryData/years/{yearTimePeriodDefinition-id}',
    'patch'
  >;
  'DELETE /external/industryData/years/{yearTimePeriodDefinition-id}': Operation<
    '/external/industryData/years/{yearTimePeriodDefinition-id}',
    'delete'
  >;
}

/**
 * `GET /external/industryData`
 *
 */
export function get(
  params?: IEndpoints['GET /external/industryData']['parameters']
): EndpointRequest<IEndpoints['GET /external/industryData']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/external/industryData',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

export const operations = {
  /**
   * `GET /external/industryData/operations`
   *
   * Get a list of long-running file validation operations and their statuses.
   */
  list: function list(
    params?: IEndpoints['GET /external/industryData/operations']['parameters']
  ): EndpointRequest<IEndpoints['GET /external/industryData/operations']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/external/industryData/operations',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /external/industryData/operations`
   *
   */
  create: function create(
    body: IEndpoints['POST /external/industryData/operations']['body']
  ): EndpointRequest<IEndpoints['POST /external/industryData/operations']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/external/industryData/operations',
      body,
    };
  },
  /**
   * `GET /external/industryData/operations/{longRunningOperation-id}`
   *
   * Read the properties and relationships of a fileValidateOperation object.
   */
  get: function get(
    params?: IEndpoints['GET /external/industryData/operations/{longRunningOperation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /external/industryData/operations/{longRunningOperation-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/external/industryData/operations/{longRunningOperation-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['longRunningOperation-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /external/industryData/operations/{longRunningOperation-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /external/industryData/operations/{longRunningOperation-id}']['body'],
    params?: IEndpoints['PATCH /external/industryData/operations/{longRunningOperation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /external/industryData/operations/{longRunningOperation-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/external/industryData/operations/{longRunningOperation-id}',
      paramDefs: {
        path: ['longRunningOperation-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /external/industryData/operations/{longRunningOperation-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /external/industryData/operations/{longRunningOperation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /external/industryData/operations/{longRunningOperation-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/external/industryData/operations/{longRunningOperation-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['longRunningOperation-id'],
      },
      params,
    };
  },
};

export const referenceDefinitions = {
  /**
   * `GET /external/industryData/referenceDefinitions`
   *
   * Get a list of the referenceDefinition objects and their properties.
   */
  list: function list(
    params?: IEndpoints['GET /external/industryData/referenceDefinitions']['parameters']
  ): EndpointRequest<IEndpoints['GET /external/industryData/referenceDefinitions']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/external/industryData/referenceDefinitions',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /external/industryData/referenceDefinitions`
   *
   * Create a new referenceDefinition object. referenceDefinition objects associate incoming data with standardized reference types values for validation. You can extend the following reference types with other codes that better align with your source data.
   */
  create: function create(
    body: IEndpoints['POST /external/industryData/referenceDefinitions']['body']
  ): EndpointRequest<IEndpoints['POST /external/industryData/referenceDefinitions']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/external/industryData/referenceDefinitions',
      body,
    };
  },
  /**
   * `GET /external/industryData/referenceDefinitions/{referenceDefinition-id}`
   *
   * Read the properties and relationships of a referenceDefinition object.
   */
  get: function get(
    params?: IEndpoints['GET /external/industryData/referenceDefinitions/{referenceDefinition-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /external/industryData/referenceDefinitions/{referenceDefinition-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/external/industryData/referenceDefinitions/{referenceDefinition-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['referenceDefinition-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /external/industryData/referenceDefinitions/{referenceDefinition-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /external/industryData/referenceDefinitions/{referenceDefinition-id}']['body'],
    params?: IEndpoints['PATCH /external/industryData/referenceDefinitions/{referenceDefinition-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /external/industryData/referenceDefinitions/{referenceDefinition-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/external/industryData/referenceDefinitions/{referenceDefinition-id}',
      paramDefs: {
        path: ['referenceDefinition-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /external/industryData/referenceDefinitions/{referenceDefinition-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /external/industryData/referenceDefinitions/{referenceDefinition-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /external/industryData/referenceDefinitions/{referenceDefinition-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/external/industryData/referenceDefinitions/{referenceDefinition-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['referenceDefinition-id'],
      },
      params,
    };
  },
};

export const roleGroups = {
  /**
   * `GET /external/industryData/roleGroups`
   *
   * Get a list of the roleGroup objects and their properties.
   */
  list: function list(
    params?: IEndpoints['GET /external/industryData/roleGroups']['parameters']
  ): EndpointRequest<IEndpoints['GET /external/industryData/roleGroups']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/external/industryData/roleGroups',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /external/industryData/roleGroups`
   *
   */
  create: function create(
    body: IEndpoints['POST /external/industryData/roleGroups']['body']
  ): EndpointRequest<IEndpoints['POST /external/industryData/roleGroups']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/external/industryData/roleGroups',
      body,
    };
  },
  /**
   * `GET /external/industryData/roleGroups/{roleGroup-id}`
   *
   * Read the properties and relationships of a roleGroup object.
   */
  get: function get(
    params?: IEndpoints['GET /external/industryData/roleGroups/{roleGroup-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /external/industryData/roleGroups/{roleGroup-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/external/industryData/roleGroups/{roleGroup-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['roleGroup-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /external/industryData/roleGroups/{roleGroup-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /external/industryData/roleGroups/{roleGroup-id}']['body'],
    params?: IEndpoints['PATCH /external/industryData/roleGroups/{roleGroup-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /external/industryData/roleGroups/{roleGroup-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/external/industryData/roleGroups/{roleGroup-id}',
      paramDefs: {
        path: ['roleGroup-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /external/industryData/roleGroups/{roleGroup-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /external/industryData/roleGroups/{roleGroup-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /external/industryData/roleGroups/{roleGroup-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/external/industryData/roleGroups/{roleGroup-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['roleGroup-id'],
      },
      params,
    };
  },
};

export const sourceSystems = {
  /**
   * `GET /external/industryData/sourceSystems`
   *
   * Get a list of the sourceSystemDefinition objects and their properties.
   */
  list: function list(
    params?: IEndpoints['GET /external/industryData/sourceSystems']['parameters']
  ): EndpointRequest<IEndpoints['GET /external/industryData/sourceSystems']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/external/industryData/sourceSystems',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /external/industryData/sourceSystems`
   *
   * Create a new sourceSystemDefinition object.
   */
  create: function create(
    body: IEndpoints['POST /external/industryData/sourceSystems']['body']
  ): EndpointRequest<IEndpoints['POST /external/industryData/sourceSystems']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/external/industryData/sourceSystems',
      body,
    };
  },
  /**
   * `GET /external/industryData/sourceSystems/{sourceSystemDefinition-id}`
   *
   * Read the properties and relationships of a sourceSystemDefinition object.
   */
  get: function get(
    params?: IEndpoints['GET /external/industryData/sourceSystems/{sourceSystemDefinition-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /external/industryData/sourceSystems/{sourceSystemDefinition-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/external/industryData/sourceSystems/{sourceSystemDefinition-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['sourceSystemDefinition-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /external/industryData/sourceSystems/{sourceSystemDefinition-id}`
   *
   * Update the properties of a sourceSystemDefinition object.
   */
  update: function update(
    body: IEndpoints['PATCH /external/industryData/sourceSystems/{sourceSystemDefinition-id}']['body'],
    params?: IEndpoints['PATCH /external/industryData/sourceSystems/{sourceSystemDefinition-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /external/industryData/sourceSystems/{sourceSystemDefinition-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/external/industryData/sourceSystems/{sourceSystemDefinition-id}',
      paramDefs: {
        path: ['sourceSystemDefinition-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /external/industryData/sourceSystems/{sourceSystemDefinition-id}`
   *
   * Delete a sourceSystemDefinition object.
   */
  del: function del(
    params?: IEndpoints['DELETE /external/industryData/sourceSystems/{sourceSystemDefinition-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /external/industryData/sourceSystems/{sourceSystemDefinition-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/external/industryData/sourceSystems/{sourceSystemDefinition-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['sourceSystemDefinition-id'],
      },
      params,
    };
  },
};

export const years = {
  /**
   * `GET /external/industryData/years`
   *
   * Get a list of the yearTimePeriodDefinition objects and their properties.
   */
  list: function list(
    params?: IEndpoints['GET /external/industryData/years']['parameters']
  ): EndpointRequest<IEndpoints['GET /external/industryData/years']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/external/industryData/years',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /external/industryData/years`
   *
   * Create a new yearTimePeriodDefinition object.
   */
  create: function create(
    body: IEndpoints['POST /external/industryData/years']['body']
  ): EndpointRequest<IEndpoints['POST /external/industryData/years']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/external/industryData/years',
      body,
    };
  },
  /**
   * `GET /external/industryData/years/{yearTimePeriodDefinition-id}`
   *
   * Read the properties and relationships of a yearTimePeriodDefinition object.
   */
  get: function get(
    params?: IEndpoints['GET /external/industryData/years/{yearTimePeriodDefinition-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /external/industryData/years/{yearTimePeriodDefinition-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/external/industryData/years/{yearTimePeriodDefinition-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['yearTimePeriodDefinition-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /external/industryData/years/{yearTimePeriodDefinition-id}`
   *
   * Update the properties of a yearTimePeriodDefinition object.
   */
  update: function update(
    body: IEndpoints['PATCH /external/industryData/years/{yearTimePeriodDefinition-id}']['body'],
    params?: IEndpoints['PATCH /external/industryData/years/{yearTimePeriodDefinition-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /external/industryData/years/{yearTimePeriodDefinition-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/external/industryData/years/{yearTimePeriodDefinition-id}',
      paramDefs: {
        path: ['yearTimePeriodDefinition-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /external/industryData/years/{yearTimePeriodDefinition-id}`
   *
   * Delete a yearTimePeriodDefinition object.
   */
  del: function del(
    params?: IEndpoints['DELETE /external/industryData/years/{yearTimePeriodDefinition-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /external/industryData/years/{yearTimePeriodDefinition-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/external/industryData/years/{yearTimePeriodDefinition-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['yearTimePeriodDefinition-id'],
      },
      params,
    };
  },
};
