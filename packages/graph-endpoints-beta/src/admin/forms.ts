import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /admin/forms': Operation<'/admin/forms', 'delete'>;
  'GET /admin/forms': Operation<'/admin/forms', 'get'>;
  'PATCH /admin/forms': Operation<'/admin/forms', 'patch'>;
}

/**
 * `DELETE /admin/forms`
 *
 */
export function del(
  params?: IEndpoints['DELETE /admin/forms']['parameters']
): EndpointRequest<IEndpoints['DELETE /admin/forms']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/admin/forms',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /admin/forms`
 *
 * Read the properties and relationships of a adminForms object.
 */
export function list(
  params?: IEndpoints['GET /admin/forms']['parameters']
): EndpointRequest<IEndpoints['GET /admin/forms']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/forms',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /admin/forms`
 *
 * Update the properties of a adminForms object.
 */
export function update(
  body: IEndpoints['PATCH /admin/forms']['body'],
  params?: IEndpoints['PATCH /admin/forms']['parameters']
): EndpointRequest<IEndpoints['PATCH /admin/forms']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/admin/forms',
    paramDefs: [],
    params,
    body,
  };
}
