export * as history from './history';
export * as host from './host';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/threatIntelligence/whoisRecords/{whoisRecord-id}': Operation<
    '/security/threatIntelligence/whoisRecords/{whoisRecord-id}',
    'delete'
  >;
  'GET /security/threatIntelligence/whoisRecords': Operation<
    '/security/threatIntelligence/whoisRecords',
    'get'
  >;
  'GET /security/threatIntelligence/whoisRecords/{whoisRecord-id}': Operation<
    '/security/threatIntelligence/whoisRecords/{whoisRecord-id}',
    'get'
  >;
  'PATCH /security/threatIntelligence/whoisRecords/{whoisRecord-id}': Operation<
    '/security/threatIntelligence/whoisRecords/{whoisRecord-id}',
    'patch'
  >;
  'POST /security/threatIntelligence/whoisRecords': Operation<
    '/security/threatIntelligence/whoisRecords',
    'post'
  >;
}

/**
 * `DELETE /security/threatIntelligence/whoisRecords/{whoisRecord-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /security/threatIntelligence/whoisRecords/{whoisRecord-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /security/threatIntelligence/whoisRecords/{whoisRecord-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/security/threatIntelligence/whoisRecords/{whoisRecord-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'whoisRecord-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /security/threatIntelligence/whoisRecords`
 *
 * Get a list of whoisRecord objects.
 */
export function list(
  params?: IEndpoints['GET /security/threatIntelligence/whoisRecords']['parameters']
): EndpointRequest<IEndpoints['GET /security/threatIntelligence/whoisRecords']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/threatIntelligence/whoisRecords',
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
  * `GET /security/threatIntelligence/whoisRecords/{whoisRecord-id}`
  *
  * Get the specified whoisRecord resource.  Specify the desired whoisRecord in one of the following two ways:
- Identify a host and get its current whoisRecord. 
- Specify an id value to get the corresponding whoisRecord.
  */
export function get(
  params?: IEndpoints['GET /security/threatIntelligence/whoisRecords/{whoisRecord-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/threatIntelligence/whoisRecords/{whoisRecord-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/threatIntelligence/whoisRecords/{whoisRecord-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'whoisRecord-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /security/threatIntelligence/whoisRecords/{whoisRecord-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/threatIntelligence/whoisRecords/{whoisRecord-id}']['body'],
  params?: IEndpoints['PATCH /security/threatIntelligence/whoisRecords/{whoisRecord-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /security/threatIntelligence/whoisRecords/{whoisRecord-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/security/threatIntelligence/whoisRecords/{whoisRecord-id}',
    paramDefs: [{ name: 'whoisRecord-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /security/threatIntelligence/whoisRecords`
 *
 */
export function create(
  body: IEndpoints['POST /security/threatIntelligence/whoisRecords']['body'],
  params?: IEndpoints['POST /security/threatIntelligence/whoisRecords']['parameters']
): EndpointRequest<IEndpoints['POST /security/threatIntelligence/whoisRecords']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/security/threatIntelligence/whoisRecords',
    paramDefs: [],
    params,
    body,
  };
}
