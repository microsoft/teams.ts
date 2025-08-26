export * as add from './add';
export * as remove from './remove';

import type { EndpointRequest, Operation } from './../../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/members/{conversationMember-id}': Operation<
    '/teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/members/{conversationMember-id}',
    'delete'
  >;
  'GET /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/members': Operation<
    '/teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/members',
    'get'
  >;
  'GET /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/members/{conversationMember-id}': Operation<
    '/teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/members/{conversationMember-id}',
    'get'
  >;
  'PATCH /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/members/{conversationMember-id}': Operation<
    '/teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/members/{conversationMember-id}',
    'patch'
  >;
  'POST /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/members': Operation<
    '/teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/members',
    'post'
  >;
}

/**
 * `DELETE /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/members/{conversationMember-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/members/{conversationMember-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/members/{conversationMember-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/members/{conversationMember-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'teamTemplate-id', in: 'path' },
      { name: 'teamTemplateDefinition-id', in: 'path' },
      { name: 'conversationMember-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/members`
 *
 * A collection of membership records associated with the channel.
 */
export function list(
  params?: IEndpoints['GET /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/members']['parameters']
): EndpointRequest<
  IEndpoints['GET /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/members']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/members',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'teamTemplate-id', in: 'path' },
      { name: 'teamTemplateDefinition-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/members/{conversationMember-id}`
 *
 * A collection of membership records associated with the channel.
 */
export function get(
  params?: IEndpoints['GET /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/members/{conversationMember-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/members/{conversationMember-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/members/{conversationMember-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'teamTemplate-id', in: 'path' },
      { name: 'teamTemplateDefinition-id', in: 'path' },
      { name: 'conversationMember-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/members/{conversationMember-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/members/{conversationMember-id}']['body'],
  params?: IEndpoints['PATCH /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/members/{conversationMember-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/members/{conversationMember-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/members/{conversationMember-id}',
    paramDefs: [
      { name: 'teamTemplate-id', in: 'path' },
      { name: 'teamTemplateDefinition-id', in: 'path' },
      { name: 'conversationMember-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/members`
 *
 */
export function create(
  body: IEndpoints['POST /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/members']['body'],
  params?: IEndpoints['POST /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/members']['parameters']
): EndpointRequest<
  IEndpoints['POST /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/members']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/members',
    paramDefs: [
      { name: 'teamTemplate-id', in: 'path' },
      { name: 'teamTemplateDefinition-id', in: 'path' },
    ],
    params,
    body,
  };
}
