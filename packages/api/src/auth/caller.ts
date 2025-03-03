export type CallerType = keyof typeof CallerIds;
export const CallerIds = {
  azure: 'urn:botframework:azure',
  gov: 'urn:botframework:azureusgov',
  bot: 'urn:botframework:aadappid',
};
