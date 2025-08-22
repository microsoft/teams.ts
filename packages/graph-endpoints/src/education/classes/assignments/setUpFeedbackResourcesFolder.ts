import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/setUpFeedbackResourcesFolder': Operation<
    '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}/setUpFeedbackResourcesFolder',
    'post'
  >;
}

/**
 * `POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/setUpFeedbackResourcesFolder`
 *
 * Create a SharePoint folder to upload feedback files for a given educationSubmission. Only teachers can perform this operation. The teacher determines the resources to upload in the feedback resources folder of a submission.
 */
export function create(
  body: IEndpoints['POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/setUpFeedbackResourcesFolder']['body'],
  params?: IEndpoints['POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/setUpFeedbackResourcesFolder']['parameters']
): EndpointRequest<
  IEndpoints['POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/setUpFeedbackResourcesFolder']['response']
> {
  return {
    method: 'post',
    path: '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}/setUpFeedbackResourcesFolder',
    paramDefs: [
      { name: 'educationClass-id', in: 'path' },
      { name: 'educationAssignment-id', in: 'path' },
    ],
    params,
    body,
  };
}
