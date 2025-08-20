import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /groups/{group-id}/sites/remove': Operation<'/groups/{group-id}/sites/remove', 'post'>;
}

/**
 * `POST /groups/{group-id}/sites/remove`
 *
 * Unfollow a user&#x27;s site or multiple sites.
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/sites/remove']['body'],
  params?: IEndpoints['POST /groups/{group-id}/sites/remove']['parameters']
): EndpointRequest<IEndpoints['POST /groups/{group-id}/sites/remove']['response']> {
  return {
    method: 'post',
    path: '/groups/{group-id}/sites/remove',
    paramDefs: [{ name: 'group-id', in: 'path' }],
    params,
    body,
  };
}
