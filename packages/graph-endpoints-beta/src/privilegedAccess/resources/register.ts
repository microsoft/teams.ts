import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /privilegedAccess/{privilegedAccess-id}/resources/register': Operation<
    '/privilegedAccess/{privilegedAccess-id}/resources/register',
    'post'
  >;
}

/**
 * `POST /privilegedAccess/{privilegedAccess-id}/resources/register`
 *
 */
export function create(
  body: IEndpoints['POST /privilegedAccess/{privilegedAccess-id}/resources/register']['body'],
  params?: IEndpoints['POST /privilegedAccess/{privilegedAccess-id}/resources/register']['parameters']
): EndpointRequest<
  IEndpoints['POST /privilegedAccess/{privilegedAccess-id}/resources/register']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/privilegedAccess/{privilegedAccess-id}/resources/register',
    paramDefs: [{ name: 'privilegedAccess-id', in: 'path' }],
    params,
    body,
  };
}
