import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /groups/{group-id}/team/completeMigration': Operation<
    '/groups/{group-id}/team/completeMigration',
    'post'
  >;
}

/**
 * `POST /groups/{group-id}/team/completeMigration`
 *
 * Complete the message migration process by removing migration mode from a team. Migration mode is a special state where certain operations are barred, like message POST and membership operations during the data migration process. After a completeMigration request is made, you can&#x27;t import additional messages into the team. You can add members to the team after the request returns a successful response.
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/team/completeMigration']['body'],
  params?: IEndpoints['POST /groups/{group-id}/team/completeMigration']['parameters']
): EndpointRequest<IEndpoints['POST /groups/{group-id}/team/completeMigration']['response']> {
  return {
    method: 'post',
    path: '/groups/{group-id}/team/completeMigration',
    paramDefs: [{ name: 'group-id', in: 'path' }],
    params,
    body,
  };
}
