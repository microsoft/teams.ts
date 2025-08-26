import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /admin/people/photoUpdateSettings': Operation<
    '/admin/people/photoUpdateSettings',
    'delete'
  >;
  'GET /admin/people/photoUpdateSettings': Operation<'/admin/people/photoUpdateSettings', 'get'>;
  'PATCH /admin/people/photoUpdateSettings': Operation<
    '/admin/people/photoUpdateSettings',
    'patch'
  >;
}

/**
 * `DELETE /admin/people/photoUpdateSettings`
 *
 * Delete a photoUpdateSettings object.
 */
export function del(
  params?: IEndpoints['DELETE /admin/people/photoUpdateSettings']['parameters']
): EndpointRequest<IEndpoints['DELETE /admin/people/photoUpdateSettings']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/admin/people/photoUpdateSettings',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /admin/people/photoUpdateSettings`
 *
 * Read the properties and relationships of a photoUpdateSettings object.
 */
export function list(
  params?: IEndpoints['GET /admin/people/photoUpdateSettings']['parameters']
): EndpointRequest<IEndpoints['GET /admin/people/photoUpdateSettings']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/people/photoUpdateSettings',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /admin/people/photoUpdateSettings`
 *
 * Update the properties of a photoUpdateSettings object.
 */
export function update(
  body: IEndpoints['PATCH /admin/people/photoUpdateSettings']['body'],
  params?: IEndpoints['PATCH /admin/people/photoUpdateSettings']['parameters']
): EndpointRequest<IEndpoints['PATCH /admin/people/photoUpdateSettings']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/admin/people/photoUpdateSettings',
    paramDefs: [],
    params,
    body,
  };
}
