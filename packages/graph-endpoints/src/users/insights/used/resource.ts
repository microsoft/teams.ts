import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /users/{user-id}/insights/used/{usedInsight-id}/resource': Operation<
    '/users/{user-id}/insights/used/{usedInsight-id}/resource',
    'get'
  >;
}

/**
 * `GET /users/{user-id}/insights/used/{usedInsight-id}/resource`
 *
 * Used for navigating to the item that was used. For file attachments, the type is fileAttachment. For linked attachments, the type is driveItem.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/insights/used/{usedInsight-id}/resource']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/insights/used/{usedInsight-id}/resource']['response']
> {
  return {
    method: 'get',
    path: '/users/{user-id}/insights/used/{usedInsight-id}/resource',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'usedInsight-id', in: 'path' },
    ],
    params,
  };
}
