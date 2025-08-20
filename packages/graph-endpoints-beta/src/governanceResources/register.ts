import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /governanceResources/register': Operation<'/governanceResources/register', 'post'>;
}

/**
 * `POST /governanceResources/register`
 *
 */
export function create(
  body: IEndpoints['POST /governanceResources/register']['body'],
  params?: IEndpoints['POST /governanceResources/register']['parameters']
): EndpointRequest<IEndpoints['POST /governanceResources/register']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/governanceResources/register',
    paramDefs: [],
    params,
    body,
  };
}
