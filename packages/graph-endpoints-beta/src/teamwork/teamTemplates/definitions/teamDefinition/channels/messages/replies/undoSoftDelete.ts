import type { EndpointRequest, Operation } from './../../../../../../../types/common.ts';

export interface IEndpoints {
  'POST /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/undoSoftDelete': Operation<
    '/teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/undoSoftDelete',
    'post'
  >;
}

/**
 * `POST /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/undoSoftDelete`
 *
 * Undo soft deletion of a single chatMessage or a chat message reply in a channel or a chat.
 */
export function create(
  body: IEndpoints['POST /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/undoSoftDelete']['body'],
  params?: IEndpoints['POST /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/undoSoftDelete']['parameters']
): EndpointRequest<
  IEndpoints['POST /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/undoSoftDelete']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/undoSoftDelete',
    paramDefs: [
      { name: 'teamTemplate-id', in: 'path' },
      { name: 'teamTemplateDefinition-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
      { name: 'chatMessage-id', in: 'path' },
      { name: 'chatMessage-id1', in: 'path' },
    ],
    params,
    body,
  };
}
