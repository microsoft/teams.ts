/**
 *
 * An interface representing MessageActionsPayloadUser.
 * Represents a user entity.
 *
 */
export type MessageUser = {
  /**
   * @member {UserIdentityType} [userIdentityType] The identity type of the
   * user. Possible values include: 'aadUser', 'onPremiseAadUser',
   * 'anonymousGuest', 'federatedUser'
   */
  userIdentityType?: 'aadUser' | 'onPremiseAadUser' | 'anonymousGuest' | 'federatedUser';

  /**
   * @member {string} [id] The id of the user.
   */
  id: string;

  /**
   * @member {string} [displayName] The plaintext display name of the user.
   */
  displayName?: string;
};
