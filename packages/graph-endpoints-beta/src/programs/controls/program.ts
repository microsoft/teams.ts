import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /programs/{program-id}/controls/{programControl-id}/program': Operation<
    '/programs/{program-id}/controls/{programControl-id}/program',
    'delete'
  >;
  'GET /programs/{program-id}/controls/{programControl-id}/program': Operation<
    '/programs/{program-id}/controls/{programControl-id}/program',
    'get'
  >;
  'PATCH /programs/{program-id}/controls/{programControl-id}/program': Operation<
    '/programs/{program-id}/controls/{programControl-id}/program',
    'patch'
  >;
}

/**
 * `DELETE /programs/{program-id}/controls/{programControl-id}/program`
 *
 */
export function del(
  params?: IEndpoints['DELETE /programs/{program-id}/controls/{programControl-id}/program']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /programs/{program-id}/controls/{programControl-id}/program']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/programs/{program-id}/controls/{programControl-id}/program',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'program-id', in: 'path' },
      { name: 'programControl-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /programs/{program-id}/controls/{programControl-id}/program`
 *
 * The program this control is part of.
 */
export function get(
  params?: IEndpoints['GET /programs/{program-id}/controls/{programControl-id}/program']['parameters']
): EndpointRequest<
  IEndpoints['GET /programs/{program-id}/controls/{programControl-id}/program']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/programs/{program-id}/controls/{programControl-id}/program',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'program-id', in: 'path' },
      { name: 'programControl-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /programs/{program-id}/controls/{programControl-id}/program`
 *
 */
export function update(
  body: IEndpoints['PATCH /programs/{program-id}/controls/{programControl-id}/program']['body'],
  params?: IEndpoints['PATCH /programs/{program-id}/controls/{programControl-id}/program']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /programs/{program-id}/controls/{programControl-id}/program']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/programs/{program-id}/controls/{programControl-id}/program',
    paramDefs: [
      { name: 'program-id', in: 'path' },
      { name: 'programControl-id', in: 'path' },
    ],
    params,
    body,
  };
}
