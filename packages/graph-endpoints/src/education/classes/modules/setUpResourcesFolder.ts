import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /education/classes/{educationClass-id}/modules/{educationModule-id}/setUpResourcesFolder': Operation<
    '/education/classes/{educationClass-id}/modules/{educationModule-id}/setUpResourcesFolder',
    'post'
  >;
}

/**
 * `POST /education/classes/{educationClass-id}/modules/{educationModule-id}/setUpResourcesFolder`
 *
 * Create a SharePoint folder to upload files for a given educationModule. Only teachers can perform this operation. The teacher determines what resources to upload to the SharePoint folder for the module.
 */
export function create(
  body: IEndpoints['POST /education/classes/{educationClass-id}/modules/{educationModule-id}/setUpResourcesFolder']['body'],
  params?: IEndpoints['POST /education/classes/{educationClass-id}/modules/{educationModule-id}/setUpResourcesFolder']['parameters']
): EndpointRequest<
  IEndpoints['POST /education/classes/{educationClass-id}/modules/{educationModule-id}/setUpResourcesFolder']['response']
> {
  return {
    method: 'post',
    path: '/education/classes/{educationClass-id}/modules/{educationModule-id}/setUpResourcesFolder',
    paramDefs: [
      { name: 'educationClass-id', in: 'path' },
      { name: 'educationModule-id', in: 'path' },
    ],
    params,
    body,
  };
}
