export * as host from './host';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/threatIntelligence/hostTrackers/{hostTracker-id}': Operation<
    '/security/threatIntelligence/hostTrackers/{hostTracker-id}',
    'delete'
  >;
  'GET /security/threatIntelligence/hostTrackers': Operation<
    '/security/threatIntelligence/hostTrackers',
    'get'
  >;
  'GET /security/threatIntelligence/hostTrackers/{hostTracker-id}': Operation<
    '/security/threatIntelligence/hostTrackers/{hostTracker-id}',
    'get'
  >;
  'PATCH /security/threatIntelligence/hostTrackers/{hostTracker-id}': Operation<
    '/security/threatIntelligence/hostTrackers/{hostTracker-id}',
    'patch'
  >;
  'POST /security/threatIntelligence/hostTrackers': Operation<
    '/security/threatIntelligence/hostTrackers',
    'post'
  >;
}

/**
 * `DELETE /security/threatIntelligence/hostTrackers/{hostTracker-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /security/threatIntelligence/hostTrackers/{hostTracker-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /security/threatIntelligence/hostTrackers/{hostTracker-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/security/threatIntelligence/hostTrackers/{hostTracker-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'hostTracker-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /security/threatIntelligence/hostTrackers`
 *
 * Read the properties and relationships of a hostTracker object.
 */
export function list(
  params?: IEndpoints['GET /security/threatIntelligence/hostTrackers']['parameters']
): EndpointRequest<IEndpoints['GET /security/threatIntelligence/hostTrackers']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/threatIntelligence/hostTrackers',
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
 * `GET /security/threatIntelligence/hostTrackers/{hostTracker-id}`
 *
 * Read the properties and relationships of a hostTracker object.
 */
export function get(
  params?: IEndpoints['GET /security/threatIntelligence/hostTrackers/{hostTracker-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/threatIntelligence/hostTrackers/{hostTracker-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/threatIntelligence/hostTrackers/{hostTracker-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'hostTracker-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /security/threatIntelligence/hostTrackers/{hostTracker-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/threatIntelligence/hostTrackers/{hostTracker-id}']['body'],
  params?: IEndpoints['PATCH /security/threatIntelligence/hostTrackers/{hostTracker-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /security/threatIntelligence/hostTrackers/{hostTracker-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/security/threatIntelligence/hostTrackers/{hostTracker-id}',
    paramDefs: [{ name: 'hostTracker-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /security/threatIntelligence/hostTrackers`
 *
 */
export function create(
  body: IEndpoints['POST /security/threatIntelligence/hostTrackers']['body'],
  params?: IEndpoints['POST /security/threatIntelligence/hostTrackers']['parameters']
): EndpointRequest<IEndpoints['POST /security/threatIntelligence/hostTrackers']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/security/threatIntelligence/hostTrackers',
    paramDefs: [],
    params,
    body,
  };
}
