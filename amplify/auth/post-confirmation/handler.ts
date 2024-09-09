/**
 * This is a type provided by AWS Lambda that ensures your handler function
 * conforms to the expected format.
 */
import type { PostConfirmationTriggerHandler } from "aws-lambda";

/**
 * Actual code that will execute when the post-confirmation trigger is fired.
 *
 * Handler is the function that AWS Lambda will invoke.
 * It receives an event object that contains details about the confirmation event.
 *
 * @param event
 * @returns
 */
export const handler: PostConfirmationTriggerHandler = async (event) => {
  // Your custom logic here

  // For now, simply return the event object
  return event;
};
