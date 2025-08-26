export * as dataCollectionInfo from './dataCollectionInfo';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /external/authorizationSystems/{authorizationSystem-id}': Operation<
    '/external/authorizationSystems/{authorizationSystem-id}',
    'delete'
  >;
  'GET /external/authorizationSystems': Operation<'/external/authorizationSystems', 'get'>;
  'GET /external/authorizationSystems/{authorizationSystem-id}': Operation<
    '/external/authorizationSystems/{authorizationSystem-id}',
    'get'
  >;
  'PATCH /external/authorizationSystems/{authorizationSystem-id}': Operation<
    '/external/authorizationSystems/{authorizationSystem-id}',
    'patch'
  >;
  'POST /external/authorizationSystems': Operation<'/external/authorizationSystems', 'post'>;
}

/**
 * `DELETE /external/authorizationSystems/{authorizationSystem-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /external/authorizationSystems/{authorizationSystem-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /external/authorizationSystems/{authorizationSystem-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/external/authorizationSystems/{authorizationSystem-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'authorizationSystem-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /external/authorizationSystems`
 *
 * List the authorizationSystem objects onboarded to Permissions Management and their properties.
 */
export function list(
  params?: IEndpoints['GET /external/authorizationSystems']['parameters']
): EndpointRequest<IEndpoints['GET /external/authorizationSystems']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/external/authorizationSystems',
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
 * `GET /external/authorizationSystems/{authorizationSystem-id}`
 *
 * Represents an onboarded Amazon Web Services (AWS) account, Azure subscription, or Google Cloud Platform (GCP) project that Microsoft Entra Permissions Management collects and analyzes permissions and actions on.
 */
export function get(
  params?: IEndpoints['GET /external/authorizationSystems/{authorizationSystem-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /external/authorizationSystems/{authorizationSystem-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/external/authorizationSystems/{authorizationSystem-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'authorizationSystem-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /external/authorizationSystems/{authorizationSystem-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /external/authorizationSystems/{authorizationSystem-id}']['body'],
  params?: IEndpoints['PATCH /external/authorizationSystems/{authorizationSystem-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /external/authorizationSystems/{authorizationSystem-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/external/authorizationSystems/{authorizationSystem-id}',
    paramDefs: [{ name: 'authorizationSystem-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /external/authorizationSystems`
 *
 */
export function create(
  body: IEndpoints['POST /external/authorizationSystems']['body'],
  params?: IEndpoints['POST /external/authorizationSystems']['parameters']
): EndpointRequest<IEndpoints['POST /external/authorizationSystems']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/external/authorizationSystems',
    paramDefs: [],
    params,
    body,
  };
}
