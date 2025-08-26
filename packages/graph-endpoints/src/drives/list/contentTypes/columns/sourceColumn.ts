import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'GET /drives/{drive-id}/list/contentTypes/{contentType-id}/columns/{columnDefinition-id}/sourceColumn': Operation<
    '/drives/{drive-id}/list/contentTypes/{contentType-id}/columns/{columnDefinition-id}/sourceColumn',
    'get'
  >;
}

/**
 * `GET /drives/{drive-id}/list/contentTypes/{contentType-id}/columns/{columnDefinition-id}/sourceColumn`
 *
 * The source column for the content type column.
 */
export function get(
  params?: IEndpoints['GET /drives/{drive-id}/list/contentTypes/{contentType-id}/columns/{columnDefinition-id}/sourceColumn']['parameters']
): EndpointRequest<
  IEndpoints['GET /drives/{drive-id}/list/contentTypes/{contentType-id}/columns/{columnDefinition-id}/sourceColumn']['response']
> {
  return {
    method: 'get',
    path: '/drives/{drive-id}/list/contentTypes/{contentType-id}/columns/{columnDefinition-id}/sourceColumn',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'drive-id', in: 'path' },
      { name: 'contentType-id', in: 'path' },
      { name: 'columnDefinition-id', in: 'path' },
    ],
    params,
  };
}
