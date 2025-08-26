import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /groups/{group-id}/sites/add': Operation<'/groups/{group-id}/sites/add', 'post'>;
}

/**
 * `POST /groups/{group-id}/sites/add`
 *
 * Follow a user&#x27;s site or multiple sites.
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/sites/add']['body'],
  params?: IEndpoints['POST /groups/{group-id}/sites/add']['parameters']
): EndpointRequest<IEndpoints['POST /groups/{group-id}/sites/add']['response']> {
  return {
    method: 'post',
    path: '/groups/{group-id}/sites/add',
    paramDefs: [{ name: 'group-id', in: 'path' }],
    params,
    body,
  };
}
