import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/template': Operation<
    '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/template',
    'get'
  >;
}

/**
 * `GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/template`
 *
 * The template this team was created from. See available templates.
 */
export function get(
  params?: IEndpoints['GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/template']['parameters']
): EndpointRequest<
  IEndpoints['GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/template']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/template',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'teamTemplateDefinition-id', in: 'path' },
    ],
    params,
  };
}
