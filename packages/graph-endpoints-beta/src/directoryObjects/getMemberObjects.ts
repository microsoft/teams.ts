import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /directoryObjects/{directoryObject-id}/getMemberObjects': Operation<
    '/directoryObjects/{directoryObject-id}/getMemberObjects',
    'post'
  >;
}

/**
 * `POST /directoryObjects/{directoryObject-id}/getMemberObjects`
 *
 */
export function create(
  body: IEndpoints['POST /directoryObjects/{directoryObject-id}/getMemberObjects']['body'],
  params?: IEndpoints['POST /directoryObjects/{directoryObject-id}/getMemberObjects']['parameters']
): EndpointRequest<
  IEndpoints['POST /directoryObjects/{directoryObject-id}/getMemberObjects']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/directoryObjects/{directoryObject-id}/getMemberObjects',
    paramDefs: [{ name: 'directoryObject-id', in: 'path' }],
    params,
    body,
  };
}
