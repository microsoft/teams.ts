import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /admin/people/namePronunciation': Operation<'/admin/people/namePronunciation', 'delete'>;
  'GET /admin/people/namePronunciation': Operation<'/admin/people/namePronunciation', 'get'>;
  'PATCH /admin/people/namePronunciation': Operation<'/admin/people/namePronunciation', 'patch'>;
}

/**
 * `DELETE /admin/people/namePronunciation`
 *
 */
export function del(
  params?: IEndpoints['DELETE /admin/people/namePronunciation']['parameters']
): EndpointRequest<IEndpoints['DELETE /admin/people/namePronunciation']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/admin/people/namePronunciation',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /admin/people/namePronunciation`
 *
 * Read the properties and relationships of a namePronunciationSettings object.
 */
export function get(
  params?: IEndpoints['GET /admin/people/namePronunciation']['parameters']
): EndpointRequest<IEndpoints['GET /admin/people/namePronunciation']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/people/namePronunciation',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /admin/people/namePronunciation`
 *
 * Update the properties of a namePronunciationSettings object.
 */
export function update(
  body: IEndpoints['PATCH /admin/people/namePronunciation']['body'],
  params?: IEndpoints['PATCH /admin/people/namePronunciation']['parameters']
): EndpointRequest<IEndpoints['PATCH /admin/people/namePronunciation']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/admin/people/namePronunciation',
    paramDefs: [],
    params,
    body,
  };
}
