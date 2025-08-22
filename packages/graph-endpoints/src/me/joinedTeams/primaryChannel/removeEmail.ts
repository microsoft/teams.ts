import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /me/joinedTeams/{team-id}/primaryChannel/removeEmail': Operation<
    '/me/joinedTeams/{team-id}/primaryChannel/removeEmail',
    'post'
  >;
}

/**
 * `POST /me/joinedTeams/{team-id}/primaryChannel/removeEmail`
 *
 * Remove the email address of a channel. You can remove an email address only if it was provisioned using the provisionEmail method or through the Microsoft Teams client.
 */
export function create(
  body: IEndpoints['POST /me/joinedTeams/{team-id}/primaryChannel/removeEmail']['body'],
  params?: IEndpoints['POST /me/joinedTeams/{team-id}/primaryChannel/removeEmail']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/joinedTeams/{team-id}/primaryChannel/removeEmail']['response']
> {
  return {
    method: 'post',
    path: '/me/joinedTeams/{team-id}/primaryChannel/removeEmail',
    paramDefs: [{ name: 'team-id', in: 'path' }],
    params,
    body,
  };
}
