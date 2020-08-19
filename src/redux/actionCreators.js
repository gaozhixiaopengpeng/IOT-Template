import actions from "./actions";

export const language = locale => ({
  type: actions.locale,
  locale
});

export const user = user => ({
  type: actions.user,
  user
});
