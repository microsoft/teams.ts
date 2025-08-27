import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /groups/{group-id}/resetUnseenCount': Operation<
    '/groups/{group-id}/resetUnseenCount',
    'post'
  >;
}

/**
 * `POST /groups/{group-id}/resetUnseenCount`
 *
 * Reset the unseenCount of all the posts that the current user hasn&#x27;t seen since their last visit. Supported for Microsoft 365 groups only.
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/resetUnseenCount']['body'],
  params?: IEndpoints['POST /groups/{group-id}/resetUnseenCount']['parameters']
): EndpointRequest<IEndpoints['POST /groups/{group-id}/resetUnseenCount']['response']> {
  return {
    method: 'post',
    path: '/groups/{group-id}/resetUnseenCount',
    paramDefs: [{ name: 'group-id', in: 'path' }],
    params,
    body,
  };
}
