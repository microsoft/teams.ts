import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /groups/{group-id}/addFavorite': Operation<'/groups/{group-id}/addFavorite', 'post'>;
}

/**
 * `POST /groups/{group-id}/addFavorite`
 *
 * Add the group to the list of the current user&#x27;s favorite groups. The group shows up in Outlook and Teams favorites. Supported for Microsoft 365 groups only.
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/addFavorite']['body'],
  params?: IEndpoints['POST /groups/{group-id}/addFavorite']['parameters']
): EndpointRequest<IEndpoints['POST /groups/{group-id}/addFavorite']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/groups/{group-id}/addFavorite',
    paramDefs: [{ name: 'group-id', in: 'path' }],
    params,
    body,
  };
}
