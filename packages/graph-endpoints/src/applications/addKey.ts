import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /applications/{application-id}/addKey': Operation<
    '/applications/{application-id}/addKey',
    'post'
  >;
}

/**
 * `POST /applications/{application-id}/addKey`
 *
 * Add a key credential to an application. This method, along with removeKey can be used by an application to automate rolling its expiring keys. As part of the request validation for this method, a proof of possession of an existing key is verified before the action can be performed.  Applications that don&#x27;t have any existing valid certificates (no certificates have been added yet, or all certificates have expired), won&#x27;t be able to use this service action. You can use the Update application operation to perform an update instead.
 */
export function create(
  body: IEndpoints['POST /applications/{application-id}/addKey']['body'],
  params?: IEndpoints['POST /applications/{application-id}/addKey']['parameters']
): EndpointRequest<IEndpoints['POST /applications/{application-id}/addKey']['response']> {
  return {
    method: 'post',
    path: '/applications/{application-id}/addKey',
    paramDefs: [{ name: 'application-id', in: 'path' }],
    params,
    body,
  };
}
