# Database Storage

## User

| name          | type             |
| ------------- | ---------------- |
| User ID       | generated string |
| Username      | string           |
| SHA2 Password | string           |
| Groups        | Array            |

## Messages

| name       | type             |
| ---------- | ---------------- |
| Message ID | generated string |
| Sender ID  | generated string |
| Content    | string           |
| Group ID   | generated string |
| Date       | datetime         |

## Group

| name     | type             |
| -------- | ---------------- |
| Group ID | generated string |
| Name     | string           |
| Members  | Array            |

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
