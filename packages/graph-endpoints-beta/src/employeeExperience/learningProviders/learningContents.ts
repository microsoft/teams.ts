import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /employeeExperience/learningProviders/{learningProvider-id}/learningContents/{learningContent-id}': Operation<
    '/employeeExperience/learningProviders/{learningProvider-id}/learningContents/{learningContent-id}',
    'delete'
  >;
  'GET /employeeExperience/learningProviders/{learningProvider-id}/learningContents': Operation<
    '/employeeExperience/learningProviders/{learningProvider-id}/learningContents',
    'get'
  >;
  'GET /employeeExperience/learningProviders/{learningProvider-id}/learningContents/{learningContent-id}': Operation<
    '/employeeExperience/learningProviders/{learningProvider-id}/learningContents/{learningContent-id}',
    'get'
  >;
  'PATCH /employeeExperience/learningProviders/{learningProvider-id}/learningContents/{learningContent-id}': Operation<
    '/employeeExperience/learningProviders/{learningProvider-id}/learningContents/{learningContent-id}',
    'patch'
  >;
  'POST /employeeExperience/learningProviders/{learningProvider-id}/learningContents': Operation<
    '/employeeExperience/learningProviders/{learningProvider-id}/learningContents',
    'post'
  >;
}

/**
 * `DELETE /employeeExperience/learningProviders/{learningProvider-id}/learningContents/{learningContent-id}`
 *
 * Delete the specified learningContent resource that represents the metadata of the specified provider&#x27;s ingested content.
 */
export function del(
  params?: IEndpoints['DELETE /employeeExperience/learningProviders/{learningProvider-id}/learningContents/{learningContent-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /employeeExperience/learningProviders/{learningProvider-id}/learningContents/{learningContent-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/employeeExperience/learningProviders/{learningProvider-id}/learningContents/{learningContent-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'learningProvider-id', in: 'path' },
      { name: 'learningContent-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /employeeExperience/learningProviders/{learningProvider-id}/learningContents`
 *
 * Get a list of the learningContent resources and their properties. This list represents the metadata of the specified provider&#x27;s content in Viva Learning.
 */
export function list(
  params?: IEndpoints['GET /employeeExperience/learningProviders/{learningProvider-id}/learningContents']['parameters']
): EndpointRequest<
  IEndpoints['GET /employeeExperience/learningProviders/{learningProvider-id}/learningContents']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/employeeExperience/learningProviders/{learningProvider-id}/learningContents',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'learningProvider-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /employeeExperience/learningProviders/{learningProvider-id}/learningContents/{learningContent-id}`
 *
 * Get the specified learningContent resource which represents the metadata of the specified provider&#x27;s ingested content.
 */
export function get(
  params?: IEndpoints['GET /employeeExperience/learningProviders/{learningProvider-id}/learningContents/{learningContent-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /employeeExperience/learningProviders/{learningProvider-id}/learningContents/{learningContent-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/employeeExperience/learningProviders/{learningProvider-id}/learningContents/{learningContent-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'learningProvider-id', in: 'path' },
      { name: 'learningContent-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /employeeExperience/learningProviders/{learningProvider-id}/learningContents/{learningContent-id}`
 *
 * Update the specified learningContent resource. Used by a learning provider to ingest or update the metadata for their content in Viva Learning. If the specified learning content doesn&#x27;t yet exist for the specified provider, this operation creates the metadata for the new content. Otherwise, this operation replaces the metadata of the existing content.
 */
export function update(
  body: IEndpoints['PATCH /employeeExperience/learningProviders/{learningProvider-id}/learningContents/{learningContent-id}']['body'],
  params?: IEndpoints['PATCH /employeeExperience/learningProviders/{learningProvider-id}/learningContents/{learningContent-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /employeeExperience/learningProviders/{learningProvider-id}/learningContents/{learningContent-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/employeeExperience/learningProviders/{learningProvider-id}/learningContents/{learningContent-id}',
    paramDefs: [
      { name: 'learningProvider-id', in: 'path' },
      { name: 'learningContent-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /employeeExperience/learningProviders/{learningProvider-id}/learningContents`
 *
 */
export function create(
  body: IEndpoints['POST /employeeExperience/learningProviders/{learningProvider-id}/learningContents']['body'],
  params?: IEndpoints['POST /employeeExperience/learningProviders/{learningProvider-id}/learningContents']['parameters']
): EndpointRequest<
  IEndpoints['POST /employeeExperience/learningProviders/{learningProvider-id}/learningContents']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/employeeExperience/learningProviders/{learningProvider-id}/learningContents',
    paramDefs: [{ name: 'learningProvider-id', in: 'path' }],
    params,
    body,
  };
}
