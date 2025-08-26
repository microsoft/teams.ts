import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'POST /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/completeMigration': Operation<
    '/teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/completeMigration',
    'post'
  >;
}

/**
 * `POST /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/completeMigration`
 *
 * Complete the message migration process by removing migration mode from a channel in a team. Migration mode is a special state that prevents certain operations, like sending messages and adding members, during the data migration process. After a completeMigration request is made, you can&#x27;t import more messages into the team. You can add members to the team after the request returns a successful response.
 */
export function create(
  body: IEndpoints['POST /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/completeMigration']['body'],
  params?: IEndpoints['POST /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/completeMigration']['parameters']
): EndpointRequest<
  IEndpoints['POST /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/completeMigration']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/completeMigration',
    paramDefs: [
      { name: 'teamTemplate-id', in: 'path' },
      { name: 'teamTemplateDefinition-id', in: 'path' },
    ],
    params,
    body,
  };
}
