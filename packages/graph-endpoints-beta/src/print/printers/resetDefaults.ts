import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /print/printers/{printer-id}/resetDefaults': Operation<
    '/print/printers/{printer-id}/resetDefaults',
    'post'
  >;
}

/**
 * `POST /print/printers/{printer-id}/resetDefaults`
 *
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /print/printers/{printer-id}/resetDefaults']['body'],
  params?: IEndpoints['POST /print/printers/{printer-id}/resetDefaults']['parameters']
): EndpointRequest<IEndpoints['POST /print/printers/{printer-id}/resetDefaults']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/print/printers/{printer-id}/resetDefaults',
    paramDefs: [{ name: 'printer-id', in: 'path' }],
    params,
    body,
  };
}
