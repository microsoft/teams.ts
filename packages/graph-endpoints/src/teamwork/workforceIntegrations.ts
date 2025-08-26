import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /teamwork/workforceIntegrations/{workforceIntegration-id}': Operation<
    '/teamwork/workforceIntegrations/{workforceIntegration-id}',
    'delete'
  >;
  'GET /teamwork/workforceIntegrations': Operation<'/teamwork/workforceIntegrations', 'get'>;
  'GET /teamwork/workforceIntegrations/{workforceIntegration-id}': Operation<
    '/teamwork/workforceIntegrations/{workforceIntegration-id}',
    'get'
  >;
  'PATCH /teamwork/workforceIntegrations/{workforceIntegration-id}': Operation<
    '/teamwork/workforceIntegrations/{workforceIntegration-id}',
    'patch'
  >;
  'POST /teamwork/workforceIntegrations': Operation<'/teamwork/workforceIntegrations', 'post'>;
}

/**
 * `DELETE /teamwork/workforceIntegrations/{workforceIntegration-id}`
 *
 * Delete an instance of a workforceIntegration.
 */
export function del(
  params?: IEndpoints['DELETE /teamwork/workforceIntegrations/{workforceIntegration-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /teamwork/workforceIntegrations/{workforceIntegration-id}']['response']
> {
  return {
    method: 'delete',
    path: '/teamwork/workforceIntegrations/{workforceIntegration-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'workforceIntegration-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /teamwork/workforceIntegrations`
 *
 * Retrieve a list of workforceIntegration objects.
 */
export function list(
  params?: IEndpoints['GET /teamwork/workforceIntegrations']['parameters']
): EndpointRequest<IEndpoints['GET /teamwork/workforceIntegrations']['response']> {
  return {
    method: 'get',
    path: '/teamwork/workforceIntegrations',
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
 * `GET /teamwork/workforceIntegrations/{workforceIntegration-id}`
 *
 * Retrieve the properties and relationships of a workforceIntegration object.
 */
export function get(
  params?: IEndpoints['GET /teamwork/workforceIntegrations/{workforceIntegration-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /teamwork/workforceIntegrations/{workforceIntegration-id}']['response']
> {
  return {
    method: 'get',
    path: '/teamwork/workforceIntegrations/{workforceIntegration-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'workforceIntegration-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /teamwork/workforceIntegrations/{workforceIntegration-id}`
 *
 * Update the properties of a workforceIntegration object.
 */
export function update(
  body: IEndpoints['PATCH /teamwork/workforceIntegrations/{workforceIntegration-id}']['body'],
  params?: IEndpoints['PATCH /teamwork/workforceIntegrations/{workforceIntegration-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /teamwork/workforceIntegrations/{workforceIntegration-id}']['response']
> {
  return {
    method: 'patch',
    path: '/teamwork/workforceIntegrations/{workforceIntegration-id}',
    paramDefs: [{ name: 'workforceIntegration-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /teamwork/workforceIntegrations`
 *
 * Create a new workforceIntegration object.
 */
export function create(
  body: IEndpoints['POST /teamwork/workforceIntegrations']['body'],
  params?: IEndpoints['POST /teamwork/workforceIntegrations']['parameters']
): EndpointRequest<IEndpoints['POST /teamwork/workforceIntegrations']['response']> {
  return {
    method: 'post',
    path: '/teamwork/workforceIntegrations',
    paramDefs: [],
    params,
    body,
  };
}
