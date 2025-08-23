import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /directoryObjects/{directoryObject-id}/checkMemberObjects': Operation<
    '/directoryObjects/{directoryObject-id}/checkMemberObjects',
    'post'
  >;
}

/**
 * `POST /directoryObjects/{directoryObject-id}/checkMemberObjects`
 *
 */
export function create(
  body: IEndpoints['POST /directoryObjects/{directoryObject-id}/checkMemberObjects']['body'],
  params?: IEndpoints['POST /directoryObjects/{directoryObject-id}/checkMemberObjects']['parameters']
): EndpointRequest<
  IEndpoints['POST /directoryObjects/{directoryObject-id}/checkMemberObjects']['response']
> {
  return {
    method: 'post',
    path: '/directoryObjects/{directoryObject-id}/checkMemberObjects',
    paramDefs: [{ name: 'directoryObject-id', in: 'path' }],
    params,
    body,
  };
}
