import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /groups/{group-id}/removeFavorite': Operation<'/groups/{group-id}/removeFavorite', 'post'>;
}

/**
 * `POST /groups/{group-id}/removeFavorite`
 *
 * Remove the group from the list of the current user&#x27;s favorite groups. Supported for Microsoft 365 groups only.
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/removeFavorite']['body'],
  params?: IEndpoints['POST /groups/{group-id}/removeFavorite']['parameters']
): EndpointRequest<IEndpoints['POST /groups/{group-id}/removeFavorite']['response']> {
  return {
    method: 'post',
    path: '/groups/{group-id}/removeFavorite',
    paramDefs: [{ name: 'group-id', in: 'path' }],
    params,
    body,
  };
}
