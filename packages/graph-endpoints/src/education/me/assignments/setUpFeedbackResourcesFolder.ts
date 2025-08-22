import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /education/me/assignments/{educationAssignment-id}/setUpFeedbackResourcesFolder': Operation<
    '/education/me/assignments/{educationAssignment-id}/setUpFeedbackResourcesFolder',
    'post'
  >;
}

/**
 * `POST /education/me/assignments/{educationAssignment-id}/setUpFeedbackResourcesFolder`
 *
 * Create a SharePoint folder to upload feedback files for a given educationSubmission. Only teachers can perform this operation. The teacher determines the resources to upload in the feedback resources folder of a submission.
 */
export function create(
  body: IEndpoints['POST /education/me/assignments/{educationAssignment-id}/setUpFeedbackResourcesFolder']['body'],
  params?: IEndpoints['POST /education/me/assignments/{educationAssignment-id}/setUpFeedbackResourcesFolder']['parameters']
): EndpointRequest<
  IEndpoints['POST /education/me/assignments/{educationAssignment-id}/setUpFeedbackResourcesFolder']['response']
> {
  return {
    method: 'post',
    path: '/education/me/assignments/{educationAssignment-id}/setUpFeedbackResourcesFolder',
    paramDefs: [{ name: 'educationAssignment-id', in: 'path' }],
    params,
    body,
  };
}
