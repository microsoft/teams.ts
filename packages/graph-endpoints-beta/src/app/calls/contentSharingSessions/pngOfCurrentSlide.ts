import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /app/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}/pngOfCurrentSlide': Operation<
    '/app/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}/pngOfCurrentSlide',
    'delete'
  >;
  'GET /app/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}/pngOfCurrentSlide': Operation<
    '/app/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}/pngOfCurrentSlide',
    'get'
  >;
  'PUT /app/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}/pngOfCurrentSlide': Operation<
    '/app/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}/pngOfCurrentSlide',
    'put'
  >;
}

/**
 * `DELETE /app/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}/pngOfCurrentSlide`
 *
 */
export function del(
  params?: IEndpoints['DELETE /app/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}/pngOfCurrentSlide']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /app/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}/pngOfCurrentSlide']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/app/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}/pngOfCurrentSlide',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'call-id', in: 'path' },
      { name: 'contentSharingSession-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /app/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}/pngOfCurrentSlide`
 *
 */
export function get(
  params?: IEndpoints['GET /app/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}/pngOfCurrentSlide']['parameters']
): EndpointRequest<
  IEndpoints['GET /app/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}/pngOfCurrentSlide']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/app/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}/pngOfCurrentSlide',
    paramDefs: [
      { name: 'call-id', in: 'path' },
      { name: 'contentSharingSession-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PUT /app/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}/pngOfCurrentSlide`
 *
 */
export function set(
  body: IEndpoints['PUT /app/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}/pngOfCurrentSlide']['body'],
  params?: IEndpoints['PUT /app/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}/pngOfCurrentSlide']['parameters']
): EndpointRequest<
  IEndpoints['PUT /app/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}/pngOfCurrentSlide']['response']
> {
  return {
    ver: 'beta',
    method: 'put',
    path: '/app/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}/pngOfCurrentSlide',
    paramDefs: [
      { name: 'call-id', in: 'path' },
      { name: 'contentSharingSession-id', in: 'path' },
    ],
    params,
    body,
  };
}
