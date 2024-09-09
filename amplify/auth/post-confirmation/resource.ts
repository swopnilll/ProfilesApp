/**
 * This is an Amplify utility to define a backend function.
 * It helps in setting up the function configuration.
 */
import { defineFunction } from "@aws-amplify/backend";

/**
 * Function that will be executed after a user confirms their registration.
 */
export const postConfirmation = defineFunction({
  name: "post-confirmation",
});
