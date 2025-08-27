import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/remoteAssistancePartners/{remoteAssistancePartner-id}/disconnect': Operation<
    '/deviceManagement/remoteAssistancePartners/{remoteAssistancePartner-id}/disconnect',
    'post'
  >;
}

/**
 * `POST /deviceManagement/remoteAssistancePartners/{remoteAssistancePartner-id}/disconnect`
 *
 * A request to remove the active TeamViewer connector
 */
export function create(
  body: IEndpoints['POST /deviceManagement/remoteAssistancePartners/{remoteAssistancePartner-id}/disconnect']['body'],
  params?: IEndpoints['POST /deviceManagement/remoteAssistancePartners/{remoteAssistancePartner-id}/disconnect']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/remoteAssistancePartners/{remoteAssistancePartner-id}/disconnect']['response']
> {
  return {
    method: 'post',
    path: '/deviceManagement/remoteAssistancePartners/{remoteAssistancePartner-id}/disconnect',
    paramDefs: [{ name: 'remoteAssistancePartner-id', in: 'path' }],
    params,
    body,
  };
}
