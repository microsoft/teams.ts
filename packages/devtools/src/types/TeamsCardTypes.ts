/**
 * This information is based off of the following documentation:
 https://learn.microsoft.com/en-us/microsoftteams/platform/task-modules-and-cards/cards/cards-reference#cards-not-supported-in-teams
 */
export const TEAMS_UNSUPPORTED_CARD_TYPES = ['animation', 'video', 'audio'] as const;
export type TeamsUnsupportedCardType = (typeof TEAMS_UNSUPPORTED_CARD_TYPES)[number];

export const isTeamsUnsupportedCardType = (type: string): type is TeamsUnsupportedCardType => {
  return TEAMS_UNSUPPORTED_CARD_TYPES.includes(type as TeamsUnsupportedCardType);
};
