export * as directories from './directories';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /applications/{application-id}/synchronization/templates/{synchronizationTemplate-id}/schema': Operation<
    '/applications/{application-id}/synchronization/templates/{synchronizationTemplate-id}/schema',
    'delete'
  >;
  'GET /applications/{application-id}/synchronization/templates/{synchronizationTemplate-id}/schema': Operation<
    '/applications/{application-id}/synchronization/templates/{synchronizationTemplate-id}/schema',
    'get'
  >;
  'PATCH /applications/{application-id}/synchronization/templates/{synchronizationTemplate-id}/schema': Operation<
    '/applications/{application-id}/synchronization/templates/{synchronizationTemplate-id}/schema',
    'patch'
  >;
  'POST /applications/{application-id}/synchronization/templates/{synchronizationTemplate-id}/schema/parseExpression': Operation<
    '/applications/{application-id}/synchronization/templates/{synchronizationTemplate-id}/schema/parseExpression',
    'post'
  >;
}

/**
 * `DELETE /applications/{application-id}/synchronization/templates/{synchronizationTemplate-id}/schema`
 *
 */
export function del(
  params?: IEndpoints['DELETE /applications/{application-id}/synchronization/templates/{synchronizationTemplate-id}/schema']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /applications/{application-id}/synchronization/templates/{synchronizationTemplate-id}/schema']['response']
> {
  return {
    method: 'delete',
    path: '/applications/{application-id}/synchronization/templates/{synchronizationTemplate-id}/schema',
    paramDefs: {
      header: ['If-Match'],
      path: ['application-id', 'synchronizationTemplate-id'],
    },
    params,
  };
}

/**
 * `GET /applications/{application-id}/synchronization/templates/{synchronizationTemplate-id}/schema`
 *
 * Default synchronization schema for the jobs based on this template.
 */
export function get(
  params?: IEndpoints['GET /applications/{application-id}/synchronization/templates/{synchronizationTemplate-id}/schema']['parameters']
): EndpointRequest<
  IEndpoints['GET /applications/{application-id}/synchronization/templates/{synchronizationTemplate-id}/schema']['response']
> {
  return {
    method: 'get',
    path: '/applications/{application-id}/synchronization/templates/{synchronizationTemplate-id}/schema',
    paramDefs: {
      path: ['application-id', 'synchronizationTemplate-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /applications/{application-id}/synchronization/templates/{synchronizationTemplate-id}/schema`
 *
 */
export function update(
  body: IEndpoints['PATCH /applications/{application-id}/synchronization/templates/{synchronizationTemplate-id}/schema']['body'],
  params?: IEndpoints['PATCH /applications/{application-id}/synchronization/templates/{synchronizationTemplate-id}/schema']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /applications/{application-id}/synchronization/templates/{synchronizationTemplate-id}/schema']['response']
> {
  return {
    method: 'patch',
    path: '/applications/{application-id}/synchronization/templates/{synchronizationTemplate-id}/schema',
    paramDefs: {
      path: ['application-id', 'synchronizationTemplate-id'],
    },
    params,
    body,
  };
}

export const parseExpression = {
  /**
   * `POST /applications/{application-id}/synchronization/templates/{synchronizationTemplate-id}/schema/parseExpression`
   *
   * Parse a given string expression into an attributeMappingSource object. For more information about expressions, see Writing Expressions for Attribute Mappings in Microsoft Entra ID.
   */
  create: function create(
    body: IEndpoints['POST /applications/{application-id}/synchronization/templates/{synchronizationTemplate-id}/schema/parseExpression']['body'],
    params?: IEndpoints['POST /applications/{application-id}/synchronization/templates/{synchronizationTemplate-id}/schema/parseExpression']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /applications/{application-id}/synchronization/templates/{synchronizationTemplate-id}/schema/parseExpression']['response']
  > {
    return {
      method: 'post',
      path: '/applications/{application-id}/synchronization/templates/{synchronizationTemplate-id}/schema/parseExpression',
      paramDefs: {
        path: ['application-id', 'synchronizationTemplate-id'],
      },
      params,
      body,
    };
  },
};
