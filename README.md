# Database Storage

## User

| name           | type             |
| -------------- | ---------------- |
| \_id           | generated string |
| email          | string           |
| hashedPassword | string           |
| groups         | Array of group \_ids            |
| createdAt      | Date             |
| updatedAt      | Date             |

## Messages

| name       | type             |
| ---------- | ---------------- |
| \_id | generated string |
| sender  | User _id |
| content    | string           |
| Group ID   | group _id |
| date       | Date         |
| createdAt      | Date             |
| updatedAt      | Date             |

## Group

| name     | type             |
| -------- | ---------------- |
| Group ID | generated string |
| Name     | string           |
| Members  | Array of User \_ids            |
| createdAt      | Date             |
| updatedAt      | Date             |

# Todo list

-   User creation/authentication **\***
-   Create DB **\***
-   Fake Data **\***
-   PHP Access DB + Prepare JSON (API) **\***
-   JS AJAX Call + receive API **\***
-   React component functionality **\***
-   React w/ JSON **\***
-   Front end
-   Email Verify
-   User functionality
-   Admnistrative privileges

_\* = priority_
