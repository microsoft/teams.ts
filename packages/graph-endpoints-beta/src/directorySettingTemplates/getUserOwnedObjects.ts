import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /directorySettingTemplates/getUserOwnedObjects': Operation<
    '/directorySettingTemplates/getUserOwnedObjects',
    'post'
  >;
}

/**
 * `POST /directorySettingTemplates/getUserOwnedObjects`
 *
 * Retrieve a list of recently deleted application and group objects owned by the specified user. This API returns up to 1,000 deleted objects owned by the user, sorted by ID, and doesn&#x27;t support pagination.
 */
export function create(
  body: IEndpoints['POST /directorySettingTemplates/getUserOwnedObjects']['body'],
  params?: IEndpoints['POST /directorySettingTemplates/getUserOwnedObjects']['parameters']
): EndpointRequest<IEndpoints['POST /directorySettingTemplates/getUserOwnedObjects']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/directorySettingTemplates/getUserOwnedObjects',
    paramDefs: [],
    params,
    body,
  };
}
