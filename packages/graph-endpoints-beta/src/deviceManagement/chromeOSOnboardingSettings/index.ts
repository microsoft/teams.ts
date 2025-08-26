export * as connect from './connect';
export * as disconnect from './disconnect';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/chromeOSOnboardingSettings/{chromeOSOnboardingSettings-id}': Operation<
    '/deviceManagement/chromeOSOnboardingSettings/{chromeOSOnboardingSettings-id}',
    'delete'
  >;
  'GET /deviceManagement/chromeOSOnboardingSettings': Operation<
    '/deviceManagement/chromeOSOnboardingSettings',
    'get'
  >;
  'GET /deviceManagement/chromeOSOnboardingSettings/{chromeOSOnboardingSettings-id}': Operation<
    '/deviceManagement/chromeOSOnboardingSettings/{chromeOSOnboardingSettings-id}',
    'get'
  >;
  'PATCH /deviceManagement/chromeOSOnboardingSettings/{chromeOSOnboardingSettings-id}': Operation<
    '/deviceManagement/chromeOSOnboardingSettings/{chromeOSOnboardingSettings-id}',
    'patch'
  >;
  'POST /deviceManagement/chromeOSOnboardingSettings': Operation<
    '/deviceManagement/chromeOSOnboardingSettings',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/chromeOSOnboardingSettings/{chromeOSOnboardingSettings-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/chromeOSOnboardingSettings/{chromeOSOnboardingSettings-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/chromeOSOnboardingSettings/{chromeOSOnboardingSettings-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/chromeOSOnboardingSettings/{chromeOSOnboardingSettings-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'chromeOSOnboardingSettings-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/chromeOSOnboardingSettings`
 *
 * Collection of ChromeOSOnboardingSettings settings associated with account.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/chromeOSOnboardingSettings']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/chromeOSOnboardingSettings']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/chromeOSOnboardingSettings',
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
 * `GET /deviceManagement/chromeOSOnboardingSettings/{chromeOSOnboardingSettings-id}`
 *
 * Collection of ChromeOSOnboardingSettings settings associated with account.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/chromeOSOnboardingSettings/{chromeOSOnboardingSettings-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/chromeOSOnboardingSettings/{chromeOSOnboardingSettings-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/chromeOSOnboardingSettings/{chromeOSOnboardingSettings-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'chromeOSOnboardingSettings-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/chromeOSOnboardingSettings/{chromeOSOnboardingSettings-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/chromeOSOnboardingSettings/{chromeOSOnboardingSettings-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/chromeOSOnboardingSettings/{chromeOSOnboardingSettings-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/chromeOSOnboardingSettings/{chromeOSOnboardingSettings-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/chromeOSOnboardingSettings/{chromeOSOnboardingSettings-id}',
    paramDefs: [{ name: 'chromeOSOnboardingSettings-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/chromeOSOnboardingSettings`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/chromeOSOnboardingSettings']['body'],
  params?: IEndpoints['POST /deviceManagement/chromeOSOnboardingSettings']['parameters']
): EndpointRequest<IEndpoints['POST /deviceManagement/chromeOSOnboardingSettings']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/chromeOSOnboardingSettings',
    paramDefs: [],
    params,
    body,
  };
}
