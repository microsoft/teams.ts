import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /shares/{sharedDriveItem-id}/list/columns/{columnDefinition-id}/sourceColumn': Operation<
    '/shares/{sharedDriveItem-id}/list/columns/{columnDefinition-id}/sourceColumn',
    'get'
  >;
}

/**
 * `GET /shares/{sharedDriveItem-id}/list/columns/{columnDefinition-id}/sourceColumn`
 *
 * The source column for content type column.
 */
export function get(
  params?: IEndpoints['GET /shares/{sharedDriveItem-id}/list/columns/{columnDefinition-id}/sourceColumn']['parameters']
): EndpointRequest<
  IEndpoints['GET /shares/{sharedDriveItem-id}/list/columns/{columnDefinition-id}/sourceColumn']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/shares/{sharedDriveItem-id}/list/columns/{columnDefinition-id}/sourceColumn',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'sharedDriveItem-id', in: 'path' },
      { name: 'columnDefinition-id', in: 'path' },
    ],
    params,
  };
}
