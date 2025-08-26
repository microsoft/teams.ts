import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /app/calls/{call-id}/addLargeGalleryView': Operation<
    '/app/calls/{call-id}/addLargeGalleryView',
    'post'
  >;
}

/**
 * `POST /app/calls/{call-id}/addLargeGalleryView`
 *
 * Add the large gallery view to a call.  For details about how to identify a large gallery view participant in a roster so that you can retrieve the relevant data to subscribe to the video feed, see Identify large gallery view participants in a roster.
 */
export function create(
  body: IEndpoints['POST /app/calls/{call-id}/addLargeGalleryView']['body'],
  params?: IEndpoints['POST /app/calls/{call-id}/addLargeGalleryView']['parameters']
): EndpointRequest<IEndpoints['POST /app/calls/{call-id}/addLargeGalleryView']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/app/calls/{call-id}/addLargeGalleryView',
    paramDefs: [{ name: 'call-id', in: 'path' }],
    params,
    body,
  };
}
