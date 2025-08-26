import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/templateInsights/{deviceManagementTemplateInsightsDefinition-id}': Operation<
    '/deviceManagement/templateInsights/{deviceManagementTemplateInsightsDefinition-id}',
    'delete'
  >;
  'GET /deviceManagement/templateInsights': Operation<'/deviceManagement/templateInsights', 'get'>;
  'GET /deviceManagement/templateInsights/{deviceManagementTemplateInsightsDefinition-id}': Operation<
    '/deviceManagement/templateInsights/{deviceManagementTemplateInsightsDefinition-id}',
    'get'
  >;
  'PATCH /deviceManagement/templateInsights/{deviceManagementTemplateInsightsDefinition-id}': Operation<
    '/deviceManagement/templateInsights/{deviceManagementTemplateInsightsDefinition-id}',
    'patch'
  >;
  'POST /deviceManagement/templateInsights': Operation<
    '/deviceManagement/templateInsights',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/templateInsights/{deviceManagementTemplateInsightsDefinition-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/templateInsights/{deviceManagementTemplateInsightsDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/templateInsights/{deviceManagementTemplateInsightsDefinition-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/templateInsights/{deviceManagementTemplateInsightsDefinition-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'deviceManagementTemplateInsightsDefinition-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/templateInsights`
 *
 * List of setting insights in a template
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/templateInsights']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/templateInsights']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/templateInsights',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/templateInsights/{deviceManagementTemplateInsightsDefinition-id}`
 *
 * List of setting insights in a template
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/templateInsights/{deviceManagementTemplateInsightsDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/templateInsights/{deviceManagementTemplateInsightsDefinition-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/templateInsights/{deviceManagementTemplateInsightsDefinition-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceManagementTemplateInsightsDefinition-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/templateInsights/{deviceManagementTemplateInsightsDefinition-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/templateInsights/{deviceManagementTemplateInsightsDefinition-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/templateInsights/{deviceManagementTemplateInsightsDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/templateInsights/{deviceManagementTemplateInsightsDefinition-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/templateInsights/{deviceManagementTemplateInsightsDefinition-id}',
    paramDefs: [{ name: 'deviceManagementTemplateInsightsDefinition-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/templateInsights`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/templateInsights']['body'],
  params?: IEndpoints['POST /deviceManagement/templateInsights']['parameters']
): EndpointRequest<IEndpoints['POST /deviceManagement/templateInsights']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/templateInsights',
    paramDefs: [],
    params,
    body,
  };
}
