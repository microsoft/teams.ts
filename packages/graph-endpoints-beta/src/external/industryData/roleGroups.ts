import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /external/industryData/roleGroups/{roleGroup-id}': Operation<
    '/external/industryData/roleGroups/{roleGroup-id}',
    'delete'
  >;
  'GET /external/industryData/roleGroups': Operation<'/external/industryData/roleGroups', 'get'>;
  'GET /external/industryData/roleGroups/{roleGroup-id}': Operation<
    '/external/industryData/roleGroups/{roleGroup-id}',
    'get'
  >;
  'PATCH /external/industryData/roleGroups/{roleGroup-id}': Operation<
    '/external/industryData/roleGroups/{roleGroup-id}',
    'patch'
  >;
  'POST /external/industryData/roleGroups': Operation<'/external/industryData/roleGroups', 'post'>;
}

/**
 * `DELETE /external/industryData/roleGroups/{roleGroup-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /external/industryData/roleGroups/{roleGroup-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /external/industryData/roleGroups/{roleGroup-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/external/industryData/roleGroups/{roleGroup-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'roleGroup-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /external/industryData/roleGroups`
 *
 * Get a list of the roleGroup objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /external/industryData/roleGroups']['parameters']
): EndpointRequest<IEndpoints['GET /external/industryData/roleGroups']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/external/industryData/roleGroups',
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
 * `GET /external/industryData/roleGroups/{roleGroup-id}`
 *
 * Read the properties and relationships of a roleGroup object.
 */
export function get(
  params?: IEndpoints['GET /external/industryData/roleGroups/{roleGroup-id}']['parameters']
): EndpointRequest<IEndpoints['GET /external/industryData/roleGroups/{roleGroup-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/external/industryData/roleGroups/{roleGroup-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'roleGroup-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /external/industryData/roleGroups/{roleGroup-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /external/industryData/roleGroups/{roleGroup-id}']['body'],
  params?: IEndpoints['PATCH /external/industryData/roleGroups/{roleGroup-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /external/industryData/roleGroups/{roleGroup-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/external/industryData/roleGroups/{roleGroup-id}',
    paramDefs: [{ name: 'roleGroup-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /external/industryData/roleGroups`
 *
 */
export function create(
  body: IEndpoints['POST /external/industryData/roleGroups']['body'],
  params?: IEndpoints['POST /external/industryData/roleGroups']['parameters']
): EndpointRequest<IEndpoints['POST /external/industryData/roleGroups']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/external/industryData/roleGroups',
    paramDefs: [],
    params,
    body,
  };
}
