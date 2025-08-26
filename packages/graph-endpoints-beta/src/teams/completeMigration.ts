import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /teams/{team-id}/completeMigration': Operation<
    '/teams/{team-id}/completeMigration',
    'post'
  >;
}

/**
 * `POST /teams/{team-id}/completeMigration`
 *
 * Complete the message migration process by removing migration mode from a team. Migration mode is a special state where certain operations are barred, like message POST and membership operations during the data migration process. After a completeMigration request is made, you can&#x27;t import additional messages into the team. You can add members to the team after the request returns a successful response.
 */
export function create(
  body: IEndpoints['POST /teams/{team-id}/completeMigration']['body'],
  params?: IEndpoints['POST /teams/{team-id}/completeMigration']['parameters']
): EndpointRequest<IEndpoints['POST /teams/{team-id}/completeMigration']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/teams/{team-id}/completeMigration',
    paramDefs: [{ name: 'team-id', in: 'path' }],
    params,
    body,
  };
}
