export * as defaultPages from './defaultPages';
export * as overridesPages from './overridesPages';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /identity/b2cUserFlows/{b2cIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}': Operation<
    '/identity/b2cUserFlows/{b2cIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}',
    'delete'
  >;
  'GET /identity/b2cUserFlows/{b2cIdentityUserFlow-id}/languages': Operation<
    '/identity/b2cUserFlows/{b2cIdentityUserFlow-id}/languages',
    'get'
  >;
  'GET /identity/b2cUserFlows/{b2cIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}': Operation<
    '/identity/b2cUserFlows/{b2cIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}',
    'get'
  >;
  'PATCH /identity/b2cUserFlows/{b2cIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}': Operation<
    '/identity/b2cUserFlows/{b2cIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}',
    'patch'
  >;
  'POST /identity/b2cUserFlows/{b2cIdentityUserFlow-id}/languages': Operation<
    '/identity/b2cUserFlows/{b2cIdentityUserFlow-id}/languages',
    'post'
  >;
}

/**
 * `DELETE /identity/b2cUserFlows/{b2cIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}`
 *
 * Deletes a userFlowLanguageConfiguration object from a Azure AD B2C user flow. Note: You cannot delete languages from an Microsoft Entra user flow.
 */
export function del(
  params?: IEndpoints['DELETE /identity/b2cUserFlows/{b2cIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /identity/b2cUserFlows/{b2cIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/identity/b2cUserFlows/{b2cIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'b2cIdentityUserFlow-id', in: 'path' },
      { name: 'userFlowLanguageConfiguration-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /identity/b2cUserFlows/{b2cIdentityUserFlow-id}/languages`
 *
 * Retrieve a list of languages supported for customization in an Azure AD B2C user flow. Note: To retrieve a list of languages supported for customization, you must first enable language customization on your Azure AD B2C user flow. For more information, see Update b2cIdentityUserFlow.
 */
export function list(
  params?: IEndpoints['GET /identity/b2cUserFlows/{b2cIdentityUserFlow-id}/languages']['parameters']
): EndpointRequest<
  IEndpoints['GET /identity/b2cUserFlows/{b2cIdentityUserFlow-id}/languages']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identity/b2cUserFlows/{b2cIdentityUserFlow-id}/languages',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'b2cIdentityUserFlow-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /identity/b2cUserFlows/{b2cIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}`
 *
 * Read the properties and relationships of a userFlowLanguageConfiguration object. These objects represent a language available in a user flow. Note: To retrieve a language supported for customization, you must first enable language customization on your Azure AD B2C user flow. For more information, see Update b2cIdentityUserFlow. Language customization is enabled by default in Microsoft Entra user flows.
 */
export function get(
  params?: IEndpoints['GET /identity/b2cUserFlows/{b2cIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /identity/b2cUserFlows/{b2cIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identity/b2cUserFlows/{b2cIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'b2cIdentityUserFlow-id', in: 'path' },
      { name: 'userFlowLanguageConfiguration-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /identity/b2cUserFlows/{b2cIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}`
 *
 * This method is used to create or update a custom language in an Azure AD B2C user flow. Note: You must enable language customization in the Azure AD B2C user flow before you can create a custom language. For more information, see Update b2cIdentityUserFlow.
 */
export function update(
  body: IEndpoints['PATCH /identity/b2cUserFlows/{b2cIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}']['body'],
  params?: IEndpoints['PATCH /identity/b2cUserFlows/{b2cIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /identity/b2cUserFlows/{b2cIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/identity/b2cUserFlows/{b2cIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}',
    paramDefs: [
      { name: 'b2cIdentityUserFlow-id', in: 'path' },
      { name: 'userFlowLanguageConfiguration-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /identity/b2cUserFlows/{b2cIdentityUserFlow-id}/languages`
 *
 */
export function create(
  body: IEndpoints['POST /identity/b2cUserFlows/{b2cIdentityUserFlow-id}/languages']['body'],
  params?: IEndpoints['POST /identity/b2cUserFlows/{b2cIdentityUserFlow-id}/languages']['parameters']
): EndpointRequest<
  IEndpoints['POST /identity/b2cUserFlows/{b2cIdentityUserFlow-id}/languages']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/identity/b2cUserFlows/{b2cIdentityUserFlow-id}/languages',
    paramDefs: [{ name: 'b2cIdentityUserFlow-id', in: 'path' }],
    params,
    body,
  };
}
