import type { EndpointRequest, Operation } from './types/common.ts';

export interface IEndpoints {
  'DELETE /businessFlowTemplates/{businessFlowTemplate-id}': Operation<
    '/businessFlowTemplates/{businessFlowTemplate-id}',
    'delete'
  >;
  'GET /businessFlowTemplates': Operation<'/businessFlowTemplates', 'get'>;
  'GET /businessFlowTemplates/{businessFlowTemplate-id}': Operation<
    '/businessFlowTemplates/{businessFlowTemplate-id}',
    'get'
  >;
  'PATCH /businessFlowTemplates/{businessFlowTemplate-id}': Operation<
    '/businessFlowTemplates/{businessFlowTemplate-id}',
    'patch'
  >;
  'POST /businessFlowTemplates': Operation<'/businessFlowTemplates', 'post'>;
}

/**
 * `DELETE /businessFlowTemplates/{businessFlowTemplate-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /businessFlowTemplates/{businessFlowTemplate-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /businessFlowTemplates/{businessFlowTemplate-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/businessFlowTemplates/{businessFlowTemplate-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'businessFlowTemplate-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /businessFlowTemplates`
 *
 * In the Microsoft Entra access reviews feature, list all the businessFlowTemplate objects.
 */
export function list(
  params?: IEndpoints['GET /businessFlowTemplates']['parameters']
): EndpointRequest<IEndpoints['GET /businessFlowTemplates']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/businessFlowTemplates',
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
 * `GET /businessFlowTemplates/{businessFlowTemplate-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /businessFlowTemplates/{businessFlowTemplate-id}']['parameters']
): EndpointRequest<IEndpoints['GET /businessFlowTemplates/{businessFlowTemplate-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/businessFlowTemplates/{businessFlowTemplate-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'businessFlowTemplate-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /businessFlowTemplates/{businessFlowTemplate-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /businessFlowTemplates/{businessFlowTemplate-id}']['body'],
  params?: IEndpoints['PATCH /businessFlowTemplates/{businessFlowTemplate-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /businessFlowTemplates/{businessFlowTemplate-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/businessFlowTemplates/{businessFlowTemplate-id}',
    paramDefs: [{ name: 'businessFlowTemplate-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /businessFlowTemplates`
 *
 */
export function create(
  body: IEndpoints['POST /businessFlowTemplates']['body'],
  params?: IEndpoints['POST /businessFlowTemplates']['parameters']
): EndpointRequest<IEndpoints['POST /businessFlowTemplates']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/businessFlowTemplates',
    paramDefs: [],
    params,
    body,
  };
}
