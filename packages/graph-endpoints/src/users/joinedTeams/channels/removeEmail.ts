import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}/removeEmail': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}/removeEmail',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}/removeEmail`
 *
 * Remove the email address of a channel. You can remove an email address only if it was provisioned using the provisionEmail method or through the Microsoft Teams client.
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}/removeEmail']['body'],
  params?: IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}/removeEmail']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}/removeEmail']['response']
> {
  return {
    method: 'post',
    path: '/users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}/removeEmail',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'team-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
    ],
    params,
    body,
  };
}
