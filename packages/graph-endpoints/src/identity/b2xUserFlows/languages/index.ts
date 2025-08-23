export * as defaultPages from './defaultPages';
export * as overridesPages from './overridesPages';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}': Operation<
    '/identity/b2xUserFlows/{b2xIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}',
    'delete'
  >;
  'GET /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/languages': Operation<
    '/identity/b2xUserFlows/{b2xIdentityUserFlow-id}/languages',
    'get'
  >;
  'GET /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}': Operation<
    '/identity/b2xUserFlows/{b2xIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}',
    'get'
  >;
  'PATCH /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}': Operation<
    '/identity/b2xUserFlows/{b2xIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}',
    'patch'
  >;
  'POST /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/languages': Operation<
    '/identity/b2xUserFlows/{b2xIdentityUserFlow-id}/languages',
    'post'
  >;
}

/**
 * `DELETE /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}']['response']
> {
  return {
    method: 'delete',
    path: '/identity/b2xUserFlows/{b2xIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'b2xIdentityUserFlow-id', in: 'path' },
      { name: 'userFlowLanguageConfiguration-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/languages`
 *
 * Retrieve a list of languages supported for customization in a B2X user flow.
 */
export function list(
  params?: IEndpoints['GET /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/languages']['parameters']
): EndpointRequest<
  IEndpoints['GET /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/languages']['response']
> {
  return {
    method: 'get',
    path: '/identity/b2xUserFlows/{b2xIdentityUserFlow-id}/languages',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'b2xIdentityUserFlow-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}`
 *
 * Read the properties and relationships of a userFlowLanguageConfiguration object. These objects represent a language available in a user flow. Note: Language customization is enabled by default in Microsoft Entra user flows.
 */
export function get(
  params?: IEndpoints['GET /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}']['response']
> {
  return {
    method: 'get',
    path: '/identity/b2xUserFlows/{b2xIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'b2xIdentityUserFlow-id', in: 'path' },
      { name: 'userFlowLanguageConfiguration-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}']['body'],
  params?: IEndpoints['PATCH /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}']['response']
> {
  return {
    method: 'patch',
    path: '/identity/b2xUserFlows/{b2xIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}',
    paramDefs: [
      { name: 'b2xIdentityUserFlow-id', in: 'path' },
      { name: 'userFlowLanguageConfiguration-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/languages`
 *
 */
export function create(
  body: IEndpoints['POST /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/languages']['body'],
  params?: IEndpoints['POST /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/languages']['parameters']
): EndpointRequest<
  IEndpoints['POST /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/languages']['response']
> {
  return {
    method: 'post',
    path: '/identity/b2xUserFlows/{b2xIdentityUserFlow-id}/languages',
    paramDefs: [{ name: 'b2xIdentityUserFlow-id', in: 'path' }],
    params,
    body,
  };
}
