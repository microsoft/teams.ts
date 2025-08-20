import type { EndpointRequest, Operation } from './types/common.ts';

export interface IEndpoints {
  'DELETE /places/{place-id}': Operation<'/places/{place-id}', 'delete'>;
  'PATCH /places/{place-id}': Operation<'/places/{place-id}', 'patch'>;
}

/**
 * `DELETE /places/{place-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /places/{place-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /places/{place-id}']['response']> {
  return {
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
 * Update the properties of place object, which can be a room or roomList. You can identify the room or roomList by specifying the id or emailAddress property.
 */
export function update(
  body: IEndpoints['PATCH /places/{place-id}']['body'],
  params?: IEndpoints['PATCH /places/{place-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /places/{place-id}']['response']> {
  return {
    method: 'patch',
    path: '/places/{place-id}',
    paramDefs: [{ name: 'place-id', in: 'path' }],
    params,
    body,
  };
}
