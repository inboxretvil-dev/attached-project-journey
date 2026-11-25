# Send onboarding submissions to Google Sheets

## User experience
- Keep the SMS and email forms as they are, including the existing required name and email fields.
- Save each successful submission to its matching worksheet in the supplied spreadsheet.
- Show the success state only after the spreadsheet confirms the row was added; show a clear retryable message if saving fails.

## Spreadsheet setup
- Create separate `Cold SMS Onboarding` and `Cold Email Onboarding` worksheets.
- Add a submission timestamp and a column for every field currently present on each form.

## Technical approach
- Enable Lovable Cloud for the server-side submission handler.
- Link the user's Google Sheets connection and keep its credentials server-side.
- Use a validated TanStack server function to append each form's answers to its matching worksheet.
- Test both form submissions and confirm the resulting rows in the spreadsheet.