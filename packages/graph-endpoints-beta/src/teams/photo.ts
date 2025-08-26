import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /teams/{team-id}/photo': Operation<'/teams/{team-id}/photo', 'get'>;
  'PATCH /teams/{team-id}/photo': Operation<'/teams/{team-id}/photo', 'patch'>;
}

/**
 * `GET /teams/{team-id}/photo`
 *
 * The team photo.
 */
export function get(
  params?: IEndpoints['GET /teams/{team-id}/photo']['parameters']
): EndpointRequest<IEndpoints['GET /teams/{team-id}/photo']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teams/{team-id}/photo',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'team-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /teams/{team-id}/photo`
 *
 * Update the photo for the specified contact, group, team, or user in a tenant. The size of the photo you can update to is limited to 4 MB. You can use either PATCH or PUT for this operation.
 */
export function update(
  body: IEndpoints['PATCH /teams/{team-id}/photo']['body'],
  params?: IEndpoints['PATCH /teams/{team-id}/photo']['parameters']
): EndpointRequest<IEndpoints['PATCH /teams/{team-id}/photo']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/teams/{team-id}/photo',
    paramDefs: [{ name: 'team-id', in: 'path' }],
    params,
    body,
  };
}
