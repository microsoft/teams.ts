import { TeamsChannelAccount } from '../../models';
import { IActivity } from '../activity';

export interface IMeetingParticipantLeaveEventActivity extends IActivity<'event'> {
  /**
   * The name of the operation associated with an invoke or event activity.
   */
  name: 'application/vnd.microsoft.meetingParticipantLeave';

  /**
   * A value that is associated with the activity.
   */
  value: {
    /**
     * The participants info.
     */
    members: {
      /**
       * The participant account.
       */
      user: TeamsChannelAccount;

      /**
       * The participants info.
       */
      meeting: {
        /**
         * The user in meeting indicator.
         */
        inMeeting: boolean;

        /**
         * The user's role.
         */
        role: string;
      };
    }[];
  };
}
