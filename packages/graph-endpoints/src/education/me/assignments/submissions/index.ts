export * as resources from './resources';
export * as submittedResources from './submittedResources';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}': Operation<
    '/education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}',
    'delete'
  >;
  'GET /education/me/assignments/{educationAssignment-id}/submissions': Operation<
    '/education/me/assignments/{educationAssignment-id}/submissions',
    'get'
  >;
  'GET /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}': Operation<
    '/education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}',
    'get'
  >;
  'PATCH /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}': Operation<
    '/education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}',
    'patch'
  >;
  'POST /education/me/assignments/{educationAssignment-id}/submissions': Operation<
    '/education/me/assignments/{educationAssignment-id}/submissions',
    'post'
  >;
  'POST /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/excuse': Operation<
    '/education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/excuse',
    'post'
  >;
  'GET /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes': Operation<
    '/education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes',
    'get'
  >;
  'POST /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes': Operation<
    '/education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes',
    'post'
  >;
  'GET /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes/{educationOutcome-id}': Operation<
    '/education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes/{educationOutcome-id}',
    'get'
  >;
  'PATCH /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes/{educationOutcome-id}': Operation<
    '/education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes/{educationOutcome-id}',
    'patch'
  >;
  'DELETE /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes/{educationOutcome-id}': Operation<
    '/education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes/{educationOutcome-id}',
    'delete'
  >;
  'POST /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/reassign': Operation<
    '/education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/reassign',
    'post'
  >;
  'POST /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/return': Operation<
    '/education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/return',
    'post'
  >;
  'POST /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/setUpResourcesFolder': Operation<
    '/education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/setUpResourcesFolder',
    'post'
  >;
  'POST /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submit': Operation<
    '/education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submit',
    'post'
  >;
  'POST /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/unsubmit': Operation<
    '/education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/unsubmit',
    'post'
  >;
}

/**
 * `DELETE /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}']['response']
> {
  return {
    method: 'delete',
    path: '/education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['educationAssignment-id', 'educationSubmission-id'],
    },
    params,
  };
}

/**
 * `GET /education/me/assignments/{educationAssignment-id}/submissions`
 *
 * Once published, there&#x27;s a submission object for each student representing their work and grade. Read-only. Nullable.
 */
export function list(
  params?: IEndpoints['GET /education/me/assignments/{educationAssignment-id}/submissions']['parameters']
): EndpointRequest<
  IEndpoints['GET /education/me/assignments/{educationAssignment-id}/submissions']['response']
> {
  return {
    method: 'get',
    path: '/education/me/assignments/{educationAssignment-id}/submissions',
    paramDefs: {
      path: ['educationAssignment-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}`
 *
 * Once published, there&#x27;s a submission object for each student representing their work and grade. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}']['response']
> {
  return {
    method: 'get',
    path: '/education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}',
    paramDefs: {
      path: ['educationAssignment-id', 'educationSubmission-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}']['body'],
  params?: IEndpoints['PATCH /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}']['response']
> {
  return {
    method: 'patch',
    path: '/education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}',
    paramDefs: {
      path: ['educationAssignment-id', 'educationSubmission-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /education/me/assignments/{educationAssignment-id}/submissions`
 *
 */
export function create(
  body: IEndpoints['POST /education/me/assignments/{educationAssignment-id}/submissions']['body'],
  params?: IEndpoints['POST /education/me/assignments/{educationAssignment-id}/submissions']['parameters']
): EndpointRequest<
  IEndpoints['POST /education/me/assignments/{educationAssignment-id}/submissions']['response']
> {
  return {
    method: 'post',
    path: '/education/me/assignments/{educationAssignment-id}/submissions',
    paramDefs: {
      path: ['educationAssignment-id'],
    },
    params,
    body,
  };
}

export const excuse = {
  /**
   * `POST /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/excuse`
   *
   * Excuse a submission. Excused submissions aren&#x27;t included in average grade calculations. Grading rubrics and feedback are deleted. Only teachers can perform this action.  If the Prefer: include-unknown-enum-members request header is provided, the excused submission shows the excused status. Otherwise, the submission status retains the returned status. For more information about how to use this header, see the Examples section.
   */
  create: function create(
    params?: IEndpoints['POST /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/excuse']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/excuse']['response']
  > {
    return {
      method: 'post',
      path: '/education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/excuse',
      paramDefs: {
        path: ['educationAssignment-id', 'educationSubmission-id'],
      },
      params,
    };
  },
};

export const outcomes = {
  /**
   * `GET /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes`
   *
   */
  list: function list(
    params?: IEndpoints['GET /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes']['response']
  > {
    return {
      method: 'get',
      path: '/education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['educationAssignment-id', 'educationSubmission-id'],
      },
      params,
    };
  },
  /**
   * `POST /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes`
   *
   */
  create: function create(
    body: IEndpoints['POST /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes']['body'],
    params?: IEndpoints['POST /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes']['response']
  > {
    return {
      method: 'post',
      path: '/education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes',
      paramDefs: {
        path: ['educationAssignment-id', 'educationSubmission-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes/{educationOutcome-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes/{educationOutcome-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes/{educationOutcome-id}']['response']
  > {
    return {
      method: 'get',
      path: '/education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes/{educationOutcome-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['educationAssignment-id', 'educationSubmission-id', 'educationOutcome-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes/{educationOutcome-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes/{educationOutcome-id}']['body'],
    params?: IEndpoints['PATCH /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes/{educationOutcome-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes/{educationOutcome-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes/{educationOutcome-id}',
      paramDefs: {
        path: ['educationAssignment-id', 'educationSubmission-id', 'educationOutcome-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes/{educationOutcome-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes/{educationOutcome-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes/{educationOutcome-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes/{educationOutcome-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['educationAssignment-id', 'educationSubmission-id', 'educationOutcome-id'],
      },
      params,
    };
  },
};

export const reassign = {
  /**
   * `POST /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/reassign`
   *
   * Reassign the submission to the student with feedback for review. Only teachers can perform this action.  Include the Prefer: include-unknown-enum-members header when you call this method; otherwise, a reassigned submission is treated as a returned submission. This means that the reassigned status is mapped to the returned status, and reassignedDateTime and reassignedBy properties are mapped to returnedDateTime and returnedBy respectively. If the header Prefer: include-unknown-enum-members is provided, a reassigned submission retains the reassigned status. For details, see the examples section.
   */
  create: function create(
    params?: IEndpoints['POST /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/reassign']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/reassign']['response']
  > {
    return {
      method: 'post',
      path: '/education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/reassign',
      paramDefs: {
        path: ['educationAssignment-id', 'educationSubmission-id'],
      },
      params,
    };
  },
};

const return_ = {
  /**
   * `POST /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/return`
   *
   * Make the grade and feedback associated with this submission available to the student.  This action changes the status of the submission from &#x27;submitted&#x27; to &#x27;returned&#x27; and indicates that feedback is provided or grading is done. This action can only be done by the teacher.
   */
  create: function create(
    params?: IEndpoints['POST /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/return']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/return']['response']
  > {
    return {
      method: 'post',
      path: '/education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/return',
      paramDefs: {
        path: ['educationAssignment-id', 'educationSubmission-id'],
      },
      params,
    };
  },
};
export { return_ as return };

export const setUpResourcesFolder = {
  /**
   * `POST /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/setUpResourcesFolder`
   *
   * Trigger the creation of the SharePoint resource folder where all file-based resources (Word, Excel, and so on) should be uploaded for a given submission. Only teachers and students can perform this operation. Note that files must be located in this folder in order to be added as resources. Only a student in the class can determine what files to upload in a given submission-level resource folder.
   */
  create: function create(
    params?: IEndpoints['POST /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/setUpResourcesFolder']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/setUpResourcesFolder']['response']
  > {
    return {
      method: 'post',
      path: '/education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/setUpResourcesFolder',
      paramDefs: {
        path: ['educationAssignment-id', 'educationSubmission-id'],
      },
      params,
    };
  },
};

export const submit = {
  /**
   * `POST /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submit`
   *
   * Indicate that a student is done with the work and is ready to hand in the assignment. Only teachers, students, and applications with application permissions can perform this operation. This method changes the status of the submission from working to submitted. During the submit process, all the resources are copied to the submittedResources bucket. The teacher will be looking at the submitted resources list for grading. A teacher can also submit a student&#x27;s assignment on their behalf.
   */
  create: function create(
    params?: IEndpoints['POST /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submit']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submit']['response']
  > {
    return {
      method: 'post',
      path: '/education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submit',
      paramDefs: {
        path: ['educationAssignment-id', 'educationSubmission-id'],
      },
      params,
    };
  },
};

export const unsubmit = {
  /**
   * `POST /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/unsubmit`
   *
   * Indicate that a student wants to work on the submission of the assignment after it was turned in. Only teachers, students, and applications with application permissions can perform this operation. This method changes the status of the submission from submitted to working. During the submit process, all the resources are copied from submittedResources to  workingResources. The teacher will be looking at the working resources list for grading. A teacher can also unsubmit a student&#x27;s assignment on their behalf.
   */
  create: function create(
    params?: IEndpoints['POST /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/unsubmit']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/unsubmit']['response']
  > {
    return {
      method: 'post',
      path: '/education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/unsubmit',
      paramDefs: {
        path: ['educationAssignment-id', 'educationSubmission-id'],
      },
      params,
    };
  },
};
