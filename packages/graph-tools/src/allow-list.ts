// include anything but the /identityGovernance endpoints, as they pose MAX_PATH challenges
export const allowList = [/^(?!\/identityGovernance).*$/];
