import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /me/findMeetingTimes': Operation<'/me/findMeetingTimes', 'post'>;
}

/**
  * `POST /me/findMeetingTimes`
  *
  * Suggest meeting times and locations based on organizer and attendee availability, and time or location constraints specified as parameters. If findMeetingTimes cannot return any meeting suggestions, the response would indicate a reason in the emptySuggestionsReason property.
Based on this value, you can better adjust the parameters and call findMeetingTimes again. The algorithm used to suggest meeting times and locations undergoes fine-tuning from time to time. In scenarios like test environments where the input parameters and calendar data remain static, expect that the suggested results may differ over time.
  */
export function create(
  body: IEndpoints['POST /me/findMeetingTimes']['body'],
  params?: IEndpoints['POST /me/findMeetingTimes']['parameters']
): EndpointRequest<IEndpoints['POST /me/findMeetingTimes']['response']> {
  return {
    method: 'post',
    path: '/me/findMeetingTimes',
    paramDefs: [],
    params,
    body,
  };
}
