export * as teamDefinition from './teamDefinition';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /teamTemplateDefinition/{teamTemplateDefinition-id}': Operation<
    '/teamTemplateDefinition/{teamTemplateDefinition-id}',
    'delete'
  >;
  'GET /teamTemplateDefinition': Operation<'/teamTemplateDefinition', 'get'>;
  'GET /teamTemplateDefinition/{teamTemplateDefinition-id}': Operation<
    '/teamTemplateDefinition/{teamTemplateDefinition-id}',
    'get'
  >;
  'PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}': Operation<
    '/teamTemplateDefinition/{teamTemplateDefinition-id}',
    'patch'
  >;
  'POST /teamTemplateDefinition': Operation<'/teamTemplateDefinition', 'post'>;
}

/**
 * `DELETE /teamTemplateDefinition/{teamTemplateDefinition-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /teamTemplateDefinition/{teamTemplateDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /teamTemplateDefinition/{teamTemplateDefinition-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/teamTemplateDefinition/{teamTemplateDefinition-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['teamTemplateDefinition-id'],
    },
    params,
  };
}

/**
 * `GET /teamTemplateDefinition`
 *
 */
export function get(
  params?: IEndpoints['GET /teamTemplateDefinition']['parameters']
): EndpointRequest<IEndpoints['GET /teamTemplateDefinition']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teamTemplateDefinition',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /teamTemplateDefinition/{teamTemplateDefinition-id}`
 *
 */
export function get$1(
  params?: IEndpoints['GET /teamTemplateDefinition/{teamTemplateDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /teamTemplateDefinition/{teamTemplateDefinition-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teamTemplateDefinition/{teamTemplateDefinition-id}',
    paramDefs: {
      path: ['teamTemplateDefinition-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}']['body'],
  params?: IEndpoints['PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/teamTemplateDefinition/{teamTemplateDefinition-id}',
    paramDefs: {
      path: ['teamTemplateDefinition-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /teamTemplateDefinition`
 *
 */
export function create(
  body: IEndpoints['POST /teamTemplateDefinition']['body']
): EndpointRequest<IEndpoints['POST /teamTemplateDefinition']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/teamTemplateDefinition',
    body,
  };
}
