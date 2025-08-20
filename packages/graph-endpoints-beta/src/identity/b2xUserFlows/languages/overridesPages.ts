import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}/overridesPages/{userFlowLanguagePage-id}': Operation<
    '/identity/b2xUserFlows/{b2xIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}/overridesPages/{userFlowLanguagePage-id}',
    'delete'
  >;
  'GET /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}/overridesPages': Operation<
    '/identity/b2xUserFlows/{b2xIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}/overridesPages',
    'get'
  >;
  'GET /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}/overridesPages/{userFlowLanguagePage-id}': Operation<
    '/identity/b2xUserFlows/{b2xIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}/overridesPages/{userFlowLanguagePage-id}',
    'get'
  >;
  'PATCH /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}/overridesPages/{userFlowLanguagePage-id}': Operation<
    '/identity/b2xUserFlows/{b2xIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}/overridesPages/{userFlowLanguagePage-id}',
    'patch'
  >;
  'POST /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}/overridesPages': Operation<
    '/identity/b2xUserFlows/{b2xIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}/overridesPages',
    'post'
  >;
}

/**
 * `DELETE /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}/overridesPages/{userFlowLanguagePage-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}/overridesPages/{userFlowLanguagePage-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}/overridesPages/{userFlowLanguagePage-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/identity/b2xUserFlows/{b2xIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}/overridesPages/{userFlowLanguagePage-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'b2xIdentityUserFlow-id', in: 'path' },
      { name: 'userFlowLanguageConfiguration-id', in: 'path' },
      { name: 'userFlowLanguagePage-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}/overridesPages`
 *
 * Collection of pages with the overrides messages to display in a user flow for a specified language. This collection only allows to modify the content of the page, any other modification isn&#x27;t allowed (creation or deletion of pages).
 */
export function list(
  params?: IEndpoints['GET /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}/overridesPages']['parameters']
): EndpointRequest<
  IEndpoints['GET /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}/overridesPages']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identity/b2xUserFlows/{b2xIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}/overridesPages',
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
      { name: 'userFlowLanguageConfiguration-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}/overridesPages/{userFlowLanguagePage-id}`
 *
 * Collection of pages with the overrides messages to display in a user flow for a specified language. This collection only allows to modify the content of the page, any other modification isn&#x27;t allowed (creation or deletion of pages).
 */
export function get(
  params?: IEndpoints['GET /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}/overridesPages/{userFlowLanguagePage-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}/overridesPages/{userFlowLanguagePage-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identity/b2xUserFlows/{b2xIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}/overridesPages/{userFlowLanguagePage-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'b2xIdentityUserFlow-id', in: 'path' },
      { name: 'userFlowLanguageConfiguration-id', in: 'path' },
      { name: 'userFlowLanguagePage-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}/overridesPages/{userFlowLanguagePage-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}/overridesPages/{userFlowLanguagePage-id}']['body'],
  params?: IEndpoints['PATCH /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}/overridesPages/{userFlowLanguagePage-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}/overridesPages/{userFlowLanguagePage-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/identity/b2xUserFlows/{b2xIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}/overridesPages/{userFlowLanguagePage-id}',
    paramDefs: [
      { name: 'b2xIdentityUserFlow-id', in: 'path' },
      { name: 'userFlowLanguageConfiguration-id', in: 'path' },
      { name: 'userFlowLanguagePage-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}/overridesPages`
 *
 */
export function create(
  body: IEndpoints['POST /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}/overridesPages']['body'],
  params?: IEndpoints['POST /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}/overridesPages']['parameters']
): EndpointRequest<
  IEndpoints['POST /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}/overridesPages']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/identity/b2xUserFlows/{b2xIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}/overridesPages',
    paramDefs: [
      { name: 'b2xIdentityUserFlow-id', in: 'path' },
      { name: 'userFlowLanguageConfiguration-id', in: 'path' },
    ],
    params,
    body,
  };
}
