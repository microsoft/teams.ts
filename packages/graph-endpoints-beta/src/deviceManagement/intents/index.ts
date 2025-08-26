export * as assign from './assign';
export * as assignments from './assignments';
export * as categories from './categories';
export * as createCopy from './createCopy';
export * as deviceSettingStateSummaries from './deviceSettingStateSummaries';
export * as deviceStateSummary from './deviceStateSummary';
export * as deviceStates from './deviceStates';
export * as migrateToTemplate from './migrateToTemplate';
export * as settings from './settings';
export * as updateSettings from './updateSettings';
export * as userStateSummary from './userStateSummary';
export * as userStates from './userStates';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/intents/{deviceManagementIntent-id}': Operation<
    '/deviceManagement/intents/{deviceManagementIntent-id}',
    'delete'
  >;
  'GET /deviceManagement/intents': Operation<'/deviceManagement/intents', 'get'>;
  'GET /deviceManagement/intents/{deviceManagementIntent-id}': Operation<
    '/deviceManagement/intents/{deviceManagementIntent-id}',
    'get'
  >;
  'PATCH /deviceManagement/intents/{deviceManagementIntent-id}': Operation<
    '/deviceManagement/intents/{deviceManagementIntent-id}',
    'patch'
  >;
  'POST /deviceManagement/intents': Operation<'/deviceManagement/intents', 'post'>;
}

/**
 * `DELETE /deviceManagement/intents/{deviceManagementIntent-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/intents/{deviceManagementIntent-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/intents/{deviceManagementIntent-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/intents/{deviceManagementIntent-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'deviceManagementIntent-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/intents`
 *
 * The device management intents
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/intents']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/intents']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/intents',
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
 * `GET /deviceManagement/intents/{deviceManagementIntent-id}`
 *
 * The device management intents
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/intents/{deviceManagementIntent-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/intents/{deviceManagementIntent-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/intents/{deviceManagementIntent-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceManagementIntent-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/intents/{deviceManagementIntent-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/intents/{deviceManagementIntent-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/intents/{deviceManagementIntent-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/intents/{deviceManagementIntent-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/intents/{deviceManagementIntent-id}',
    paramDefs: [{ name: 'deviceManagementIntent-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/intents`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/intents']['body'],
  params?: IEndpoints['POST /deviceManagement/intents']['parameters']
): EndpointRequest<IEndpoints['POST /deviceManagement/intents']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/intents',
    paramDefs: [],
    params,
    body,
  };
}
