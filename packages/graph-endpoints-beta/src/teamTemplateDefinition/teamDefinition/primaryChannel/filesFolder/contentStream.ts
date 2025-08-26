import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/filesFolder/contentStream': Operation<
    '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/filesFolder/contentStream',
    'delete'
  >;
  'GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/filesFolder/contentStream': Operation<
    '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/filesFolder/contentStream',
    'get'
  >;
  'PUT /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/filesFolder/contentStream': Operation<
    '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/filesFolder/contentStream',
    'put'
  >;
}

/**
 * `DELETE /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/filesFolder/contentStream`
 *
 * The content stream, if the item represents a file.
 */
export function del(
  params?: IEndpoints['DELETE /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/filesFolder/contentStream']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/filesFolder/contentStream']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/filesFolder/contentStream',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'teamTemplateDefinition-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/filesFolder/contentStream`
 *
 * The content stream, if the item represents a file.
 */
export function get(
  params?: IEndpoints['GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/filesFolder/contentStream']['parameters']
): EndpointRequest<
  IEndpoints['GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/filesFolder/contentStream']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/filesFolder/contentStream',
    paramDefs: [{ name: 'teamTemplateDefinition-id', in: 'path' }],
    params,
  };
}

/**
 * `PUT /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/filesFolder/contentStream`
 *
 * The content stream, if the item represents a file.
 */
export function set(
  body: IEndpoints['PUT /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/filesFolder/contentStream']['body'],
  params?: IEndpoints['PUT /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/filesFolder/contentStream']['parameters']
): EndpointRequest<
  IEndpoints['PUT /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/filesFolder/contentStream']['response']
> {
  return {
    ver: 'beta',
    method: 'put',
    path: '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/filesFolder/contentStream',
    paramDefs: [{ name: 'teamTemplateDefinition-id', in: 'path' }],
    params,
    body,
  };
}
