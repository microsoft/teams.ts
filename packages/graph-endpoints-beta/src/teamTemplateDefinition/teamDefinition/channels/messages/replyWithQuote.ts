import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/replyWithQuote': Operation<
    '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/replyWithQuote',
    'post'
  >;
}

/**
 * `POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/replyWithQuote`
 *
 * Reply with quote to a single chat message or multiple chat messages in a chat.
 */
export function create(
  body: IEndpoints['POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/replyWithQuote']['body'],
  params?: IEndpoints['POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/replyWithQuote']['parameters']
): EndpointRequest<
  IEndpoints['POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/replyWithQuote']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/replyWithQuote',
    paramDefs: [
      { name: 'teamTemplateDefinition-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
    ],
    params,
    body,
  };
}
