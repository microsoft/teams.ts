import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /me/joinedTeams/{team-id}/primaryChannel/provisionEmail': Operation<
    '/me/joinedTeams/{team-id}/primaryChannel/provisionEmail',
    'post'
  >;
}

/**
 * `POST /me/joinedTeams/{team-id}/primaryChannel/provisionEmail`
 *
 * Provision an email address for a channel. Microsoft Teams doesn&#x27;t automatically provision an email address for a channel by default. To have Teams provision an email address, you can call provisionEmail, or through the Teams user interface, select Get email address, which triggers Teams to generate an email address if it has not already provisioned one. To remove the email address of a channel, use the removeEmail method.
 */
export function create(
  body: IEndpoints['POST /me/joinedTeams/{team-id}/primaryChannel/provisionEmail']['body'],
  params?: IEndpoints['POST /me/joinedTeams/{team-id}/primaryChannel/provisionEmail']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/joinedTeams/{team-id}/primaryChannel/provisionEmail']['response']
> {
  return {
    method: 'post',
    path: '/me/joinedTeams/{team-id}/primaryChannel/provisionEmail',
    paramDefs: [{ name: 'team-id', in: 'path' }],
    params,
    body,
  };
}
