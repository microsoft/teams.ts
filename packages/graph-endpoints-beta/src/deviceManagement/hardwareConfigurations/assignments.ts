import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/assignments/{hardwareConfigurationAssignment-id}': Operation<
    '/deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/assignments/{hardwareConfigurationAssignment-id}',
    'delete'
  >;
  'GET /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/assignments': Operation<
    '/deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/assignments',
    'get'
  >;
  'GET /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/assignments/{hardwareConfigurationAssignment-id}': Operation<
    '/deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/assignments/{hardwareConfigurationAssignment-id}',
    'get'
  >;
  'PATCH /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/assignments/{hardwareConfigurationAssignment-id}': Operation<
    '/deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/assignments/{hardwareConfigurationAssignment-id}',
    'patch'
  >;
  'POST /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/assignments': Operation<
    '/deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/assignments',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/assignments/{hardwareConfigurationAssignment-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/assignments/{hardwareConfigurationAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/assignments/{hardwareConfigurationAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/assignments/{hardwareConfigurationAssignment-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'hardwareConfiguration-id', in: 'path' },
      { name: 'hardwareConfigurationAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/assignments`
 *
 * A list of the Entra user group ids that hardware configuration will be applied to. Only security groups and Office 365 Groups are supported. Optional.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/assignments']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/assignments']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/assignments',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'hardwareConfiguration-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/assignments/{hardwareConfigurationAssignment-id}`
 *
 * A list of the Entra user group ids that hardware configuration will be applied to. Only security groups and Office 365 Groups are supported. Optional.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/assignments/{hardwareConfigurationAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/assignments/{hardwareConfigurationAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/assignments/{hardwareConfigurationAssignment-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'hardwareConfiguration-id', in: 'path' },
      { name: 'hardwareConfigurationAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/assignments/{hardwareConfigurationAssignment-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/assignments/{hardwareConfigurationAssignment-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/assignments/{hardwareConfigurationAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/assignments/{hardwareConfigurationAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/assignments/{hardwareConfigurationAssignment-id}',
    paramDefs: [
      { name: 'hardwareConfiguration-id', in: 'path' },
      { name: 'hardwareConfigurationAssignment-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/assignments`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/assignments']['body'],
  params?: IEndpoints['POST /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/assignments']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/assignments']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/assignments',
    paramDefs: [{ name: 'hardwareConfiguration-id', in: 'path' }],
    params,
    body,
  };
}
