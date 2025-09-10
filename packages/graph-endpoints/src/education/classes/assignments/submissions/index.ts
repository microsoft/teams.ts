import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}': Operation<
    '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}',
    'delete'
  >;
  'GET /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions': Operation<
    '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions',
    'get'
  >;
  'GET /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}': Operation<
    '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}',
    'get'
  >;
  'PATCH /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}': Operation<
    '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}',
    'patch'
  >;
  'POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions': Operation<
    '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions',
    'post'
  >;
  'POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/excuse': Operation<
    '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/excuse',
    'post'
  >;
  'GET /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes': Operation<
    '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes',
    'get'
  >;
  'POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes': Operation<
    '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes',
    'post'
  >;
  'GET /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes/{educationOutcome-id}': Operation<
    '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes/{educationOutcome-id}',
    'get'
  >;
  'PATCH /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes/{educationOutcome-id}': Operation<
    '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes/{educationOutcome-id}',
    'patch'
  >;
  'DELETE /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes/{educationOutcome-id}': Operation<
    '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes/{educationOutcome-id}',
    'delete'
  >;
  'POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/reassign': Operation<
    '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/reassign',
    'post'
  >;
  'GET /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/resources': Operation<
    '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/resources',
    'get'
  >;
  'POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/resources': Operation<
    '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/resources',
    'post'
  >;
  'GET /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/resources/{educationSubmissionResource-id}': Operation<
    '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/resources/{educationSubmissionResource-id}',
    'get'
  >;
  'PATCH /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/resources/{educationSubmissionResource-id}': Operation<
    '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/resources/{educationSubmissionResource-id}',
    'patch'
  >;
  'DELETE /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/resources/{educationSubmissionResource-id}': Operation<
    '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/resources/{educationSubmissionResource-id}',
    'delete'
  >;
  'POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/return': Operation<
    '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/return',
    'post'
  >;
  'POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/setUpResourcesFolder': Operation<
    '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/setUpResourcesFolder',
    'post'
  >;
  'POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submit': Operation<
    '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submit',
    'post'
  >;
  'GET /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources': Operation<
    '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources',
    'get'
  >;
  'POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources': Operation<
    '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources',
    'post'
  >;
  'GET /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}': Operation<
    '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}',
    'get'
  >;
  'PATCH /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}': Operation<
    '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}',
    'patch'
  >;
  'DELETE /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}': Operation<
    '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}',
    'delete'
  >;
  'POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/unsubmit': Operation<
    '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/unsubmit',
    'post'
  >;
}

/**
 * `DELETE /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}']['response']
> {
  return {
    method: 'delete',
    path: '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['educationClass-id', 'educationAssignment-id', 'educationSubmission-id'],
    },
    params,
  };
}

/**
 * `GET /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions`
 *
 * List all the submissions associated with an assignment. Only teachers, students, and applications with application permissions can perform this operation. A teacher or an application with application permissions can get all the submissions while a student can only get submissions that they&#x27;re associated with.
 */
export function list(
  params?: IEndpoints['GET /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions']['parameters']
): EndpointRequest<
  IEndpoints['GET /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions']['response']
> {
  return {
    method: 'get',
    path: '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions',
    paramDefs: {
      path: ['educationClass-id', 'educationAssignment-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}`
 *
 * Retrieve a particular submission. Only teachers, students, and applications with application permissions can perform this operation. A submission object represents a student&#x27;s work for an assignment. Resources associated with the submission represent this work. Only the assignedTo student can see and modify the submission. A teacher or application with application permissions has full access to all submissions. The grade and feedback from a teacher are part of the educationOutcome associated with this object. Only teachers or applications with application permissions can add or change grades and feedback. Students will not see the grade or feedback until the assignment has been released.
 */
export function get(
  params?: IEndpoints['GET /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}']['response']
> {
  return {
    method: 'get',
    path: '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}',
    paramDefs: {
      path: ['educationClass-id', 'educationAssignment-id', 'educationSubmission-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}']['body'],
  params?: IEndpoints['PATCH /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}']['response']
> {
  return {
    method: 'patch',
    path: '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}',
    paramDefs: {
      path: ['educationClass-id', 'educationAssignment-id', 'educationSubmission-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions`
 *
 */
export function create(
  body: IEndpoints['POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions']['body'],
  params?: IEndpoints['POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions']['parameters']
): EndpointRequest<
  IEndpoints['POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions']['response']
> {
  return {
    method: 'post',
    path: '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions',
    paramDefs: {
      path: ['educationClass-id', 'educationAssignment-id'],
    },
    params,
    body,
  };
}

export const excuse = {
  /**
   * `POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/excuse`
   *
   * Excuse a submission. Excused submissions aren&#x27;t included in average grade calculations. Grading rubrics and feedback are deleted. Only teachers can perform this action.  If the Prefer: include-unknown-enum-members request header is provided, the excused submission shows the excused status. Otherwise, the submission status retains the returned status. For more information about how to use this header, see the Examples section.
   */
  create: function create(
    params?: IEndpoints['POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/excuse']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/excuse']['response']
  > {
    return {
      method: 'post',
      path: '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/excuse',
      paramDefs: {
        path: ['educationClass-id', 'educationAssignment-id', 'educationSubmission-id'],
      },
      params,
    };
  },
};

export const outcomes = {
  /**
   * `GET /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes`
   *
   * Retrieve a list of educationOutcome objects. There are four types of outcomes: educationPointsOutcome, educationFeedbackOutcome, educationRubricOutcome, and educationFeedbackResourceOutcome. Only teachers, students, and applications with application permissions can perform this operation. A submission for a credit assignment (one that has no point value and no rubric) has an educationFeedbackOutcome. (It might also return an educationPointsOutcome, but that outcome is ignored.) A submission for a points assignment (one that has a point value assigned) has both an educationFeedbackOutcome and an educationPointsOutcome. A submission for an assignment with an attached rubric, if the rubric is a credit rubric (no points), has an educationFeedbackOutcome and an educationRubricOutcome. (It might also return an educationPointsOutcome, but that outcome is ignored.) A submission for an assignment with an attached rubric, if the rubric is a points rubric, has an educationFeedbackOutcome, an educationPointsOutcome, and an educationRubricOutcome. A submission for a feedback resource has an educationFeedbackResourceOutcome. All outcome types have a regular and a published property appropriate to that type of outcome; for example, points and publishedPoints, feedback and publishedFeedback. The regular property is the most recent value updated by the teacher; the published property is the most recent value returned to the student.
   */
  list: function list(
    params?: IEndpoints['GET /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes']['response']
  > {
    return {
      method: 'get',
      path: '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['educationClass-id', 'educationAssignment-id', 'educationSubmission-id'],
      },
      params,
    };
  },
  /**
   * `POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes`
   *
   * Create a new feedback resource for a submission. Only a teacher can perform this operation. To create a new file-based resource, upload the file to the feedback resources folder associated with the assignment. If the file doesn&#x27;t exist or isn&#x27;t in that folder, the POST request will fail.
   */
  create: function create(
    body: IEndpoints['POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes']['body'],
    params?: IEndpoints['POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes']['response']
  > {
    return {
      method: 'post',
      path: '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes',
      paramDefs: {
        path: ['educationClass-id', 'educationAssignment-id', 'educationSubmission-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes/{educationOutcome-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes/{educationOutcome-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes/{educationOutcome-id}']['response']
  > {
    return {
      method: 'get',
      path: '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes/{educationOutcome-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: [
          'educationClass-id',
          'educationAssignment-id',
          'educationSubmission-id',
          'educationOutcome-id',
        ],
      },
      params,
    };
  },
  /**
   * `PATCH /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes/{educationOutcome-id}`
   *
   * Update the properties of an educationOutcome object. Only teachers can perform this operation.
   */
  update: function update(
    body: IEndpoints['PATCH /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes/{educationOutcome-id}']['body'],
    params?: IEndpoints['PATCH /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes/{educationOutcome-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes/{educationOutcome-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes/{educationOutcome-id}',
      paramDefs: {
        path: [
          'educationClass-id',
          'educationAssignment-id',
          'educationSubmission-id',
          'educationOutcome-id',
        ],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes/{educationOutcome-id}`
   *
   * Delete a feedback resource from a submission. This can only be done by a teacher.
   */
  del: function del(
    params?: IEndpoints['DELETE /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes/{educationOutcome-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes/{educationOutcome-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes/{educationOutcome-id}',
      paramDefs: {
        header: ['If-Match'],
        path: [
          'educationClass-id',
          'educationAssignment-id',
          'educationSubmission-id',
          'educationOutcome-id',
        ],
      },
      params,
    };
  },
};

export const reassign = {
  /**
   * `POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/reassign`
   *
   * Reassign the submission to the student with feedback for review. Only teachers can perform this action.  Include the Prefer: include-unknown-enum-members header when you call this method; otherwise, a reassigned submission is treated as a returned submission. This means that the reassigned status is mapped to the returned status, and reassignedDateTime and reassignedBy properties are mapped to returnedDateTime and returnedBy respectively. If the header Prefer: include-unknown-enum-members is provided, a reassigned submission retains the reassigned status. For details, see the examples section.
   */
  create: function create(
    params?: IEndpoints['POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/reassign']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/reassign']['response']
  > {
    return {
      method: 'post',
      path: '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/reassign',
      paramDefs: {
        path: ['educationClass-id', 'educationAssignment-id', 'educationSubmission-id'],
      },
      params,
    };
  },
};

export const resources = {
  /**
   * `GET /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/resources`
   *
   * List the resources associated with a submission. Only teachers, students, and applications with application permissions can perform this operation. The educationSubmissionResource object is a wrapper around the actual resource object the student is working on. The wrapper also includes a pointer to the resources on the assignment if this resource was copied from the assignment during the assign process. These resources are the working copy of the assignment. The submittedResources are the resources that were officially submitted for grading.
   */
  list: function list(
    params?: IEndpoints['GET /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/resources']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/resources']['response']
  > {
    return {
      method: 'get',
      path: '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/resources',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['educationClass-id', 'educationAssignment-id', 'educationSubmission-id'],
      },
      params,
    };
  },
  /**
   * `POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/resources`
   *
   * Add an educationSubmissionResource to a submission resource list. Only teachers and students can perform this operation. The operation will not succeed if the allowStudentsToAddResources flag is not set to true. To create a new file-based resource, upload the file to the resources folder associated with the submission. If the file doesn&#x27;t exist or is not in that folder, the POST request will fail.
   */
  create: function create(
    body: IEndpoints['POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/resources']['body'],
    params?: IEndpoints['POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/resources']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/resources']['response']
  > {
    return {
      method: 'post',
      path: '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/resources',
      paramDefs: {
        path: ['educationClass-id', 'educationAssignment-id', 'educationSubmission-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/resources/{educationSubmissionResource-id}`
   *
   * Retrieve the properties of a specific resource associated with a submission. Only teachers, students, and applications with application permissions can perform this operation. This resource is in the &#x27;working&#x27; resource list and should be considered work in process by a student. This resource is wrapped with a possible pointer back to the assignment resource if it was copied from the assignment.
   */
  get: function get(
    params?: IEndpoints['GET /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/resources/{educationSubmissionResource-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/resources/{educationSubmissionResource-id}']['response']
  > {
    return {
      method: 'get',
      path: '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/resources/{educationSubmissionResource-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: [
          'educationClass-id',
          'educationAssignment-id',
          'educationSubmission-id',
          'educationSubmissionResource-id',
        ],
      },
      params,
    };
  },
  /**
   * `PATCH /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/resources/{educationSubmissionResource-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/resources/{educationSubmissionResource-id}']['body'],
    params?: IEndpoints['PATCH /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/resources/{educationSubmissionResource-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/resources/{educationSubmissionResource-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/resources/{educationSubmissionResource-id}',
      paramDefs: {
        path: [
          'educationClass-id',
          'educationAssignment-id',
          'educationSubmission-id',
          'educationSubmissionResource-id',
        ],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/resources/{educationSubmissionResource-id}`
   *
   * Delete an educationSubmissionResource from the submission. Only teachers and students can perform this operation. If the resource was copied from the assignment, a new copy of the resource will be created after the current copy is deleted. This allows you to &#x27;reset&#x27; the resource to its original state. If the resource wasn&#x27;t copied from the assignment but was added from the student, the resource is deleted.
   */
  del: function del(
    params?: IEndpoints['DELETE /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/resources/{educationSubmissionResource-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/resources/{educationSubmissionResource-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/resources/{educationSubmissionResource-id}',
      paramDefs: {
        header: ['If-Match'],
        path: [
          'educationClass-id',
          'educationAssignment-id',
          'educationSubmission-id',
          'educationSubmissionResource-id',
        ],
      },
      params,
    };
  },
};

const return_ = {
  /**
   * `POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/return`
   *
   * Make the grade and feedback associated with this submission available to the student.  This action changes the status of the submission from &#x27;submitted&#x27; to &#x27;returned&#x27; and indicates that feedback is provided or grading is done. This action can only be done by the teacher.
   */
  create: function create(
    params?: IEndpoints['POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/return']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/return']['response']
  > {
    return {
      method: 'post',
      path: '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/return',
      paramDefs: {
        path: ['educationClass-id', 'educationAssignment-id', 'educationSubmission-id'],
      },
      params,
    };
  },
};
export { return_ as return };

export const setUpResourcesFolder = {
  /**
   * `POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/setUpResourcesFolder`
   *
   * Trigger the creation of the SharePoint resource folder where all file-based resources (Word, Excel, and so on) should be uploaded for a given submission. Only teachers and students can perform this operation. Note that files must be located in this folder in order to be added as resources. Only a student in the class can determine what files to upload in a given submission-level resource folder.
   */
  create: function create(
    params?: IEndpoints['POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/setUpResourcesFolder']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/setUpResourcesFolder']['response']
  > {
    return {
      method: 'post',
      path: '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/setUpResourcesFolder',
      paramDefs: {
        path: ['educationClass-id', 'educationAssignment-id', 'educationSubmission-id'],
      },
      params,
    };
  },
};

export const submit = {
  /**
   * `POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submit`
   *
   * Indicate that a student is done with the work and is ready to hand in the assignment. Only teachers, students, and applications with application permissions can perform this operation. This method changes the status of the submission from working to submitted. During the submit process, all the resources are copied to the submittedResources bucket. The teacher will be looking at the submitted resources list for grading. A teacher can also submit a student&#x27;s assignment on their behalf.
   */
  create: function create(
    params?: IEndpoints['POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submit']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submit']['response']
  > {
    return {
      method: 'post',
      path: '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submit',
      paramDefs: {
        path: ['educationClass-id', 'educationAssignment-id', 'educationSubmission-id'],
      },
      params,
    };
  },
};

export const submittedResources = {
  /**
   * `GET /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources`
   *
   * List the educationSubmissionResource objects that were officially submitted for grading. Only teachers, students, and applications with application permissions can perform this operation. The student who owns the submission can&#x27;t change the submitted list without resubmitting the assignment. This resource is a wrapper around the real resource and can contain a pointer back to the actual assignment resource if this resource was copied from the assignment.
   */
  list: function list(
    params?: IEndpoints['GET /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources']['response']
  > {
    return {
      method: 'get',
      path: '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['educationClass-id', 'educationAssignment-id', 'educationSubmission-id'],
      },
      params,
    };
  },
  /**
   * `POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources`
   *
   */
  create: function create(
    body: IEndpoints['POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources']['body'],
    params?: IEndpoints['POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources']['response']
  > {
    return {
      method: 'post',
      path: '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources',
      paramDefs: {
        path: ['educationClass-id', 'educationAssignment-id', 'educationSubmission-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}`
   *
   * Retrieve a submitted resource. Only teachers, students, and applications with application permissions can perform this operation. Resources are available to a teacher or an application with application permissions after a student submits it, and are available to the student after the teacher returns the submission. Teachers can leave notes in some resources.
   */
  get: function get(
    params?: IEndpoints['GET /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}']['response']
  > {
    return {
      method: 'get',
      path: '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: [
          'educationClass-id',
          'educationAssignment-id',
          'educationSubmission-id',
          'educationSubmissionResource-id',
        ],
      },
      params,
    };
  },
  /**
   * `PATCH /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}']['body'],
    params?: IEndpoints['PATCH /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}',
      paramDefs: {
        path: [
          'educationClass-id',
          'educationAssignment-id',
          'educationSubmission-id',
          'educationSubmissionResource-id',
        ],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}',
      paramDefs: {
        header: ['If-Match'],
        path: [
          'educationClass-id',
          'educationAssignment-id',
          'educationSubmission-id',
          'educationSubmissionResource-id',
        ],
      },
      params,
    };
  },
};

export const unsubmit = {
  /**
   * `POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/unsubmit`
   *
   * Indicate that a student wants to work on the submission of the assignment after it was turned in. Only teachers, students, and applications with application permissions can perform this operation. This method changes the status of the submission from submitted to working. During the submit process, all the resources are copied from submittedResources to  workingResources. The teacher will be looking at the working resources list for grading. A teacher can also unsubmit a student&#x27;s assignment on their behalf.
   */
  create: function create(
    params?: IEndpoints['POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/unsubmit']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/unsubmit']['response']
  > {
    return {
      method: 'post',
      path: '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/unsubmit',
      paramDefs: {
        path: ['educationClass-id', 'educationAssignment-id', 'educationSubmission-id'],
      },
      params,
    };
  },
};
