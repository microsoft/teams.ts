import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /groups/{group-id}/team/primaryChannel/completeMigration': Operation<
    '/groups/{group-id}/team/primaryChannel/completeMigration',
    'post'
  >;
}

/**
 * `POST /groups/{group-id}/team/primaryChannel/completeMigration`
 *
 * Complete the message migration process by removing migration mode from a channel in a team. Migration mode is a special state that prevents certain operations, like sending messages and adding members, during the data migration process. After a completeMigration request is made, you can&#x27;t import more messages into the team. You can add members to the team after the request returns a successful response.
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/team/primaryChannel/completeMigration']['body'],
  params?: IEndpoints['POST /groups/{group-id}/team/primaryChannel/completeMigration']['parameters']
): EndpointRequest<
  IEndpoints['POST /groups/{group-id}/team/primaryChannel/completeMigration']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/groups/{group-id}/team/primaryChannel/completeMigration',
    paramDefs: [{ name: 'group-id', in: 'path' }],
    params,
    body,
  };
}
