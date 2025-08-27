import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}': Operation<
    '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}',
    'delete'
  >;
  'GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/messages/{chatMessage-id}/hostedContents': Operation<
    '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/messages/{chatMessage-id}/hostedContents',
    'get'
  >;
  'GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}': Operation<
    '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}',
    'get'
  >;
  'PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}': Operation<
    '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}',
    'patch'
  >;
  'POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/messages/{chatMessage-id}/hostedContents': Operation<
    '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/messages/{chatMessage-id}/hostedContents',
    'post'
  >;
}

/**
 * `DELETE /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'teamTemplateDefinition-id', in: 'path' },
      { name: 'chatMessage-id', in: 'path' },
      { name: 'chatMessageHostedContent-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/messages/{chatMessage-id}/hostedContents`
 *
 * Content in a message hosted by Microsoft Teams - for example, images or code snippets.
 */
export function list(
  params?: IEndpoints['GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/messages/{chatMessage-id}/hostedContents']['parameters']
): EndpointRequest<
  IEndpoints['GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/messages/{chatMessage-id}/hostedContents']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/messages/{chatMessage-id}/hostedContents',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'teamTemplateDefinition-id', in: 'path' },
      { name: 'chatMessage-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}`
 *
 * Content in a message hosted by Microsoft Teams - for example, images or code snippets.
 */
export function get(
  params?: IEndpoints['GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'teamTemplateDefinition-id', in: 'path' },
      { name: 'chatMessage-id', in: 'path' },
      { name: 'chatMessageHostedContent-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}']['body'],
  params?: IEndpoints['PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}',
    paramDefs: [
      { name: 'teamTemplateDefinition-id', in: 'path' },
      { name: 'chatMessage-id', in: 'path' },
      { name: 'chatMessageHostedContent-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/messages/{chatMessage-id}/hostedContents`
 *
 */
export function create(
  body: IEndpoints['POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/messages/{chatMessage-id}/hostedContents']['body'],
  params?: IEndpoints['POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/messages/{chatMessage-id}/hostedContents']['parameters']
): EndpointRequest<
  IEndpoints['POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/messages/{chatMessage-id}/hostedContents']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/messages/{chatMessage-id}/hostedContents',
    paramDefs: [
      { name: 'teamTemplateDefinition-id', in: 'path' },
      { name: 'chatMessage-id', in: 'path' },
    ],
    params,
    body,
  };
}
