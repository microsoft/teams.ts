import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /education/users/{educationUser-id}/assignments/{educationAssignment-id}/setUpResourcesFolder': Operation<
    '/education/users/{educationUser-id}/assignments/{educationAssignment-id}/setUpResourcesFolder',
    'post'
  >;
}

/**
 * `POST /education/users/{educationUser-id}/assignments/{educationAssignment-id}/setUpResourcesFolder`
 *
 * Create a SharePoint folder to upload files for a given educationAssignment. Only teachers can perform this operation. The teacher determines the resources to upload in the assignment&#x27;s folder.
 */
export function create(
  body: IEndpoints['POST /education/users/{educationUser-id}/assignments/{educationAssignment-id}/setUpResourcesFolder']['body'],
  params?: IEndpoints['POST /education/users/{educationUser-id}/assignments/{educationAssignment-id}/setUpResourcesFolder']['parameters']
): EndpointRequest<
  IEndpoints['POST /education/users/{educationUser-id}/assignments/{educationAssignment-id}/setUpResourcesFolder']['response']
> {
  return {
    method: 'post',
    path: '/education/users/{educationUser-id}/assignments/{educationAssignment-id}/setUpResourcesFolder',
    paramDefs: [
      { name: 'educationUser-id', in: 'path' },
      { name: 'educationAssignment-id', in: 'path' },
    ],
    params,
    body,
  };
}
