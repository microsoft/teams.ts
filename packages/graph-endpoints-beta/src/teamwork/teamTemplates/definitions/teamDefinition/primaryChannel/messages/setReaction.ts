import type { EndpointRequest, Operation } from './../../../../../../types/common.ts';

export interface IEndpoints {
  'POST /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/messages/{chatMessage-id}/setReaction': Operation<
    '/teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/messages/{chatMessage-id}/setReaction',
    'post'
  >;
}

/**
 * `POST /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/messages/{chatMessage-id}/setReaction`
 *
 */
export function create(
  body: IEndpoints['POST /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/messages/{chatMessage-id}/setReaction']['body'],
  params?: IEndpoints['POST /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/messages/{chatMessage-id}/setReaction']['parameters']
): EndpointRequest<
  IEndpoints['POST /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/messages/{chatMessage-id}/setReaction']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/messages/{chatMessage-id}/setReaction',
    paramDefs: [
      { name: 'teamTemplate-id', in: 'path' },
      { name: 'teamTemplateDefinition-id', in: 'path' },
      { name: 'chatMessage-id', in: 'path' },
    ],
    params,
    body,
  };
}
