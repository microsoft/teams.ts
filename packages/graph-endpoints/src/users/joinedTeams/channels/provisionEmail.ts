import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}/provisionEmail': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}/provisionEmail',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}/provisionEmail`
 *
 * Provision an email address for a channel. Microsoft Teams doesn&#x27;t automatically provision an email address for a channel by default. To have Teams provision an email address, you can call provisionEmail, or through the Teams user interface, select Get email address, which triggers Teams to generate an email address if it has not already provisioned one. To remove the email address of a channel, use the removeEmail method.
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}/provisionEmail']['body'],
  params?: IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}/provisionEmail']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}/provisionEmail']['response']
> {
  return {
    method: 'post',
    path: '/users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}/provisionEmail',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'team-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
    ],
    params,
    body,
  };
}
