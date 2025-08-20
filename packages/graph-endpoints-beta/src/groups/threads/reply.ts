import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /groups/{group-id}/threads/{conversationThread-id}/reply': Operation<
    '/groups/{group-id}/threads/{conversationThread-id}/reply',
    'post'
  >;
}

/**
 * `POST /groups/{group-id}/threads/{conversationThread-id}/reply`
 *
 * Create an open extension (openTypeExtension object) and add custom properties in a new or existing instance of a resource. You can create an open extension in a resource instance and store custom data to it all in the same operation, except for specific resources. The table in the Permissions section lists the resources that support open extensions.
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/threads/{conversationThread-id}/reply']['body'],
  params?: IEndpoints['POST /groups/{group-id}/threads/{conversationThread-id}/reply']['parameters']
): EndpointRequest<
  IEndpoints['POST /groups/{group-id}/threads/{conversationThread-id}/reply']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/groups/{group-id}/threads/{conversationThread-id}/reply',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'conversationThread-id', in: 'path' },
    ],
    params,
    body,
  };
}
