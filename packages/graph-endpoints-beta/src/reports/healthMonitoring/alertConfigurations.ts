import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /reports/healthMonitoring/alertConfigurations/{alertConfiguration-id}': Operation<
    '/reports/healthMonitoring/alertConfigurations/{alertConfiguration-id}',
    'delete'
  >;
  'GET /reports/healthMonitoring/alertConfigurations': Operation<
    '/reports/healthMonitoring/alertConfigurations',
    'get'
  >;
  'GET /reports/healthMonitoring/alertConfigurations/{alertConfiguration-id}': Operation<
    '/reports/healthMonitoring/alertConfigurations/{alertConfiguration-id}',
    'get'
  >;
  'PATCH /reports/healthMonitoring/alertConfigurations/{alertConfiguration-id}': Operation<
    '/reports/healthMonitoring/alertConfigurations/{alertConfiguration-id}',
    'patch'
  >;
  'POST /reports/healthMonitoring/alertConfigurations': Operation<
    '/reports/healthMonitoring/alertConfigurations',
    'post'
  >;
}

/**
 * `DELETE /reports/healthMonitoring/alertConfigurations/{alertConfiguration-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /reports/healthMonitoring/alertConfigurations/{alertConfiguration-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /reports/healthMonitoring/alertConfigurations/{alertConfiguration-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/reports/healthMonitoring/alertConfigurations/{alertConfiguration-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'alertConfiguration-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /reports/healthMonitoring/alertConfigurations`
 *
 * Get a list of the Microsoft Entra health monitoring alertConfiguration objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /reports/healthMonitoring/alertConfigurations']['parameters']
): EndpointRequest<IEndpoints['GET /reports/healthMonitoring/alertConfigurations']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/reports/healthMonitoring/alertConfigurations',
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
 * `GET /reports/healthMonitoring/alertConfigurations/{alertConfiguration-id}`
 *
 * Read the properties and relationships of a Microsoft Entra health monitoring alertConfiguration object. The returned alertConfiguration object contains the settings for the distribution groups where alert notifications are to be sent.
 */
export function get(
  params?: IEndpoints['GET /reports/healthMonitoring/alertConfigurations/{alertConfiguration-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /reports/healthMonitoring/alertConfigurations/{alertConfiguration-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/reports/healthMonitoring/alertConfigurations/{alertConfiguration-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'alertConfiguration-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /reports/healthMonitoring/alertConfigurations/{alertConfiguration-id}`
 *
 * Update the properties of a Microsoft Entra health monitoring alertConfiguration object. You can use alertConfiguration settings to specify the distribution groups where alert notifications are to be sent. This API doesn&#x27;t currently support group validation.
 */
export function update(
  body: IEndpoints['PATCH /reports/healthMonitoring/alertConfigurations/{alertConfiguration-id}']['body'],
  params?: IEndpoints['PATCH /reports/healthMonitoring/alertConfigurations/{alertConfiguration-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /reports/healthMonitoring/alertConfigurations/{alertConfiguration-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/reports/healthMonitoring/alertConfigurations/{alertConfiguration-id}',
    paramDefs: [{ name: 'alertConfiguration-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /reports/healthMonitoring/alertConfigurations`
 *
 */
export function create(
  body: IEndpoints['POST /reports/healthMonitoring/alertConfigurations']['body'],
  params?: IEndpoints['POST /reports/healthMonitoring/alertConfigurations']['parameters']
): EndpointRequest<IEndpoints['POST /reports/healthMonitoring/alertConfigurations']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/reports/healthMonitoring/alertConfigurations',
    paramDefs: [],
    params,
    body,
  };
}
