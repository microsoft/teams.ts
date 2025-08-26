import type { EndpointRequest, Operation } from './types/common.ts';

export interface IEndpoints {
  'DELETE /places/{place-id}': Operation<'/places/{place-id}', 'delete'>;
  'PATCH /places/{place-id}': Operation<'/places/{place-id}', 'patch'>;
}

/**
 * `DELETE /places/{place-id}`
 *
 * Delete a place object. You can also use this method to delete the following child object types: building, floor, section, or desk.
 */
export function del(
  params?: IEndpoints['DELETE /places/{place-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /places/{place-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/places/{place-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'place-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /places/{place-id}`
 *
 * Update the properties of place object that can be a building, floor, section, desk, room, workspace, or roomList. You can identify the place by specifying the id property.
 */
export function update(
  body: IEndpoints['PATCH /places/{place-id}']['body'],
  params?: IEndpoints['PATCH /places/{place-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /places/{place-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/places/{place-id}',
    paramDefs: [{ name: 'place-id', in: 'path' }],
    params,
    body,
  };
}
