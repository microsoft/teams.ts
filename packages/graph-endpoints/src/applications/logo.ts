import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /applications/{application-id}/logo': Operation<
    '/applications/{application-id}/logo',
    'delete'
  >;
  'GET /applications/{application-id}/logo': Operation<
    '/applications/{application-id}/logo',
    'get'
  >;
  'PUT /applications/{application-id}/logo': Operation<
    '/applications/{application-id}/logo',
    'put'
  >;
}

/**
 * `DELETE /applications/{application-id}/logo`
 *
 * The main logo for the application. Not nullable.
 */
export function del(
  params?: IEndpoints['DELETE /applications/{application-id}/logo']['parameters']
): EndpointRequest<IEndpoints['DELETE /applications/{application-id}/logo']['response']> {
  return {
    method: 'delete',
    path: '/applications/{application-id}/logo',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'application-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /applications/{application-id}/logo`
 *
 * The main logo for the application. Not nullable.
 */
export function get(
  params?: IEndpoints['GET /applications/{application-id}/logo']['parameters']
): EndpointRequest<IEndpoints['GET /applications/{application-id}/logo']['response']> {
  return {
    method: 'get',
    path: '/applications/{application-id}/logo',
    paramDefs: [{ name: 'application-id', in: 'path' }],
    params,
  };
}

/**
 * `PUT /applications/{application-id}/logo`
 *
 * The main logo for the application. Not nullable.
 */
export function set(
  body: IEndpoints['PUT /applications/{application-id}/logo']['body'],
  params?: IEndpoints['PUT /applications/{application-id}/logo']['parameters']
): EndpointRequest<IEndpoints['PUT /applications/{application-id}/logo']['response']> {
  return {
    method: 'put',
    path: '/applications/{application-id}/logo',
    paramDefs: [{ name: 'application-id', in: 'path' }],
    params,
    body,
  };
}
