import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/setUpResourcesFolder': Operation<
    '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}/setUpResourcesFolder',
    'post'
  >;
}

/**
 * `POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/setUpResourcesFolder`
 *
 * Create a SharePoint folder to upload files for a given educationAssignment. Only teachers can perform this operation. The teacher determines the resources to upload in the assignment&#x27;s folder.
 */
export function create(
  body: IEndpoints['POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/setUpResourcesFolder']['body'],
  params?: IEndpoints['POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/setUpResourcesFolder']['parameters']
): EndpointRequest<
  IEndpoints['POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/setUpResourcesFolder']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}/setUpResourcesFolder',
    paramDefs: [
      { name: 'educationClass-id', in: 'path' },
      { name: 'educationAssignment-id', in: 'path' },
    ],
    params,
    body,
  };
}
