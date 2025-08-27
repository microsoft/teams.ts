import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /groups/{group-id}/sites/{site-id}/columns/{columnDefinition-id}/sourceColumn': Operation<
    '/groups/{group-id}/sites/{site-id}/columns/{columnDefinition-id}/sourceColumn',
    'get'
  >;
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/columns/{columnDefinition-id}/sourceColumn`
 *
 * The source column for the content type column.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/columns/{columnDefinition-id}/sourceColumn']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/sites/{site-id}/columns/{columnDefinition-id}/sourceColumn']['response']
> {
  return {
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/columns/{columnDefinition-id}/sourceColumn',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
      { name: 'columnDefinition-id', in: 'path' },
    ],
    params,
  };
}
