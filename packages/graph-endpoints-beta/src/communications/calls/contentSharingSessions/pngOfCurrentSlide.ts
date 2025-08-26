import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /communications/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}/pngOfCurrentSlide': Operation<
    '/communications/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}/pngOfCurrentSlide',
    'delete'
  >;
  'GET /communications/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}/pngOfCurrentSlide': Operation<
    '/communications/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}/pngOfCurrentSlide',
    'get'
  >;
  'PUT /communications/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}/pngOfCurrentSlide': Operation<
    '/communications/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}/pngOfCurrentSlide',
    'put'
  >;
}

/**
 * `DELETE /communications/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}/pngOfCurrentSlide`
 *
 */
export function del(
  params?: IEndpoints['DELETE /communications/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}/pngOfCurrentSlide']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /communications/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}/pngOfCurrentSlide']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/communications/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}/pngOfCurrentSlide',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'call-id', in: 'path' },
      { name: 'contentSharingSession-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /communications/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}/pngOfCurrentSlide`
 *
 */
export function get(
  params?: IEndpoints['GET /communications/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}/pngOfCurrentSlide']['parameters']
): EndpointRequest<
  IEndpoints['GET /communications/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}/pngOfCurrentSlide']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/communications/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}/pngOfCurrentSlide',
    paramDefs: [
      { name: 'call-id', in: 'path' },
      { name: 'contentSharingSession-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PUT /communications/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}/pngOfCurrentSlide`
 *
 */
export function set(
  body: IEndpoints['PUT /communications/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}/pngOfCurrentSlide']['body'],
  params?: IEndpoints['PUT /communications/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}/pngOfCurrentSlide']['parameters']
): EndpointRequest<
  IEndpoints['PUT /communications/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}/pngOfCurrentSlide']['response']
> {
  return {
    ver: 'beta',
    method: 'put',
    path: '/communications/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}/pngOfCurrentSlide',
    paramDefs: [
      { name: 'call-id', in: 'path' },
      { name: 'contentSharingSession-id', in: 'path' },
    ],
    params,
    body,
  };
}
