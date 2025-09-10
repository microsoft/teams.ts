import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /solutions/businessScenarios/{businessScenario-id}/planner/planConfiguration': Operation<
    '/solutions/businessScenarios/{businessScenario-id}/planner/planConfiguration',
    'delete'
  >;
  'GET /solutions/businessScenarios/{businessScenario-id}/planner/planConfiguration': Operation<
    '/solutions/businessScenarios/{businessScenario-id}/planner/planConfiguration',
    'get'
  >;
  'PATCH /solutions/businessScenarios/{businessScenario-id}/planner/planConfiguration': Operation<
    '/solutions/businessScenarios/{businessScenario-id}/planner/planConfiguration',
    'patch'
  >;
  'GET /solutions/businessScenarios/{businessScenario-id}/planner/planConfiguration/localizations': Operation<
    '/solutions/businessScenarios/{businessScenario-id}/planner/planConfiguration/localizations',
    'get'
  >;
  'POST /solutions/businessScenarios/{businessScenario-id}/planner/planConfiguration/localizations': Operation<
    '/solutions/businessScenarios/{businessScenario-id}/planner/planConfiguration/localizations',
    'post'
  >;
  'GET /solutions/businessScenarios/{businessScenario-id}/planner/planConfiguration/localizations/{plannerPlanConfigurationLocalization-id}': Operation<
    '/solutions/businessScenarios/{businessScenario-id}/planner/planConfiguration/localizations/{plannerPlanConfigurationLocalization-id}',
    'get'
  >;
  'PATCH /solutions/businessScenarios/{businessScenario-id}/planner/planConfiguration/localizations/{plannerPlanConfigurationLocalization-id}': Operation<
    '/solutions/businessScenarios/{businessScenario-id}/planner/planConfiguration/localizations/{plannerPlanConfigurationLocalization-id}',
    'patch'
  >;
  'DELETE /solutions/businessScenarios/{businessScenario-id}/planner/planConfiguration/localizations/{plannerPlanConfigurationLocalization-id}': Operation<
    '/solutions/businessScenarios/{businessScenario-id}/planner/planConfiguration/localizations/{plannerPlanConfigurationLocalization-id}',
    'delete'
  >;
}

/**
 * `DELETE /solutions/businessScenarios/{businessScenario-id}/planner/planConfiguration`
 *
 */
export function del(
  params?: IEndpoints['DELETE /solutions/businessScenarios/{businessScenario-id}/planner/planConfiguration']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /solutions/businessScenarios/{businessScenario-id}/planner/planConfiguration']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/solutions/businessScenarios/{businessScenario-id}/planner/planConfiguration',
    paramDefs: {
      header: ['If-Match'],
      path: ['businessScenario-id'],
    },
    params,
  };
}

/**
 * `GET /solutions/businessScenarios/{businessScenario-id}/planner/planConfiguration`
 *
 * Read the properties and relationships of a plannerPlanConfiguration object.
 */
export function get(
  params?: IEndpoints['GET /solutions/businessScenarios/{businessScenario-id}/planner/planConfiguration']['parameters']
): EndpointRequest<
  IEndpoints['GET /solutions/businessScenarios/{businessScenario-id}/planner/planConfiguration']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/solutions/businessScenarios/{businessScenario-id}/planner/planConfiguration',
    paramDefs: {
      path: ['businessScenario-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /solutions/businessScenarios/{businessScenario-id}/planner/planConfiguration`
 *
 * Update the properties of a plannerPlanConfiguration object and its plannerPlanConfigurationLocalization collection for a businessScenario.
 */
export function update(
  body: IEndpoints['PATCH /solutions/businessScenarios/{businessScenario-id}/planner/planConfiguration']['body'],
  params?: IEndpoints['PATCH /solutions/businessScenarios/{businessScenario-id}/planner/planConfiguration']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /solutions/businessScenarios/{businessScenario-id}/planner/planConfiguration']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/solutions/businessScenarios/{businessScenario-id}/planner/planConfiguration',
    paramDefs: {
      path: ['businessScenario-id'],
    },
    params,
    body,
  };
}

export const localizations = {
  /**
   * `GET /solutions/businessScenarios/{businessScenario-id}/planner/planConfiguration/localizations`
   *
   * Get a list of the plannerPlanConfigurationLocalization objects and their properties.
   */
  list: function list(
    params?: IEndpoints['GET /solutions/businessScenarios/{businessScenario-id}/planner/planConfiguration/localizations']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /solutions/businessScenarios/{businessScenario-id}/planner/planConfiguration/localizations']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/solutions/businessScenarios/{businessScenario-id}/planner/planConfiguration/localizations',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['businessScenario-id'],
      },
      params,
    };
  },
  /**
   * `POST /solutions/businessScenarios/{businessScenario-id}/planner/planConfiguration/localizations`
   *
   */
  create: function create(
    body: IEndpoints['POST /solutions/businessScenarios/{businessScenario-id}/planner/planConfiguration/localizations']['body'],
    params?: IEndpoints['POST /solutions/businessScenarios/{businessScenario-id}/planner/planConfiguration/localizations']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /solutions/businessScenarios/{businessScenario-id}/planner/planConfiguration/localizations']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/solutions/businessScenarios/{businessScenario-id}/planner/planConfiguration/localizations',
      paramDefs: {
        path: ['businessScenario-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /solutions/businessScenarios/{businessScenario-id}/planner/planConfiguration/localizations/{plannerPlanConfigurationLocalization-id}`
   *
   * Localized names for the plan configuration.
   */
  get: function get(
    params?: IEndpoints['GET /solutions/businessScenarios/{businessScenario-id}/planner/planConfiguration/localizations/{plannerPlanConfigurationLocalization-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /solutions/businessScenarios/{businessScenario-id}/planner/planConfiguration/localizations/{plannerPlanConfigurationLocalization-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/solutions/businessScenarios/{businessScenario-id}/planner/planConfiguration/localizations/{plannerPlanConfigurationLocalization-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['businessScenario-id', 'plannerPlanConfigurationLocalization-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /solutions/businessScenarios/{businessScenario-id}/planner/planConfiguration/localizations/{plannerPlanConfigurationLocalization-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /solutions/businessScenarios/{businessScenario-id}/planner/planConfiguration/localizations/{plannerPlanConfigurationLocalization-id}']['body'],
    params?: IEndpoints['PATCH /solutions/businessScenarios/{businessScenario-id}/planner/planConfiguration/localizations/{plannerPlanConfigurationLocalization-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /solutions/businessScenarios/{businessScenario-id}/planner/planConfiguration/localizations/{plannerPlanConfigurationLocalization-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/solutions/businessScenarios/{businessScenario-id}/planner/planConfiguration/localizations/{plannerPlanConfigurationLocalization-id}',
      paramDefs: {
        path: ['businessScenario-id', 'plannerPlanConfigurationLocalization-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /solutions/businessScenarios/{businessScenario-id}/planner/planConfiguration/localizations/{plannerPlanConfigurationLocalization-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /solutions/businessScenarios/{businessScenario-id}/planner/planConfiguration/localizations/{plannerPlanConfigurationLocalization-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /solutions/businessScenarios/{businessScenario-id}/planner/planConfiguration/localizations/{plannerPlanConfigurationLocalization-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/solutions/businessScenarios/{businessScenario-id}/planner/planConfiguration/localizations/{plannerPlanConfigurationLocalization-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['businessScenario-id', 'plannerPlanConfigurationLocalization-id'],
      },
      params,
    };
  },
};
