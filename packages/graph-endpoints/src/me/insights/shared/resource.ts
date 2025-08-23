import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /me/insights/shared/{sharedInsight-id}/resource': Operation<
    '/me/insights/shared/{sharedInsight-id}/resource',
    'get'
  >;
}

/**
 * `GET /me/insights/shared/{sharedInsight-id}/resource`
 *
 * Used for navigating to the item that was shared. For file attachments, the type is fileAttachment. For linked attachments, the type is driveItem.
 */
export function get(
  params?: IEndpoints['GET /me/insights/shared/{sharedInsight-id}/resource']['parameters']
): EndpointRequest<IEndpoints['GET /me/insights/shared/{sharedInsight-id}/resource']['response']> {
  return {
    method: 'get',
    path: '/me/insights/shared/{sharedInsight-id}/resource',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'sharedInsight-id', in: 'path' },
    ],
    params,
  };
}
