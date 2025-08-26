import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /admin/todo': Operation<'/admin/todo', 'delete'>;
  'GET /admin/todo': Operation<'/admin/todo', 'get'>;
  'PATCH /admin/todo': Operation<'/admin/todo', 'patch'>;
}

/**
 * `DELETE /admin/todo`
 *
 */
export function del(
  params?: IEndpoints['DELETE /admin/todo']['parameters']
): EndpointRequest<IEndpoints['DELETE /admin/todo']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/admin/todo',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /admin/todo`
 *
 * Read the properties and relationships of a adminTodo object.
 */
export function get(
  params?: IEndpoints['GET /admin/todo']['parameters']
): EndpointRequest<IEndpoints['GET /admin/todo']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/todo',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /admin/todo`
 *
 * Update the properties of a adminTodo object.
 */
export function update(
  body: IEndpoints['PATCH /admin/todo']['body'],
  params?: IEndpoints['PATCH /admin/todo']['parameters']
): EndpointRequest<IEndpoints['PATCH /admin/todo']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/admin/todo',
    paramDefs: [],
    params,
    body,
  };
}
