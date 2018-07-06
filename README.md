# Database Storage

## User

| name          | type    |
| ------------- | ------- |
| User ID       | int     |
| Username      | varchar |
| SHA2 Password | varchar |
| Groups        | varchar |

## Messages

| name       | type     |
| ---------- | -------- |
| Message ID | int      |
| Sender ID  | int      |
| Content    | text     |
| Group ID   | int      |
| Date       | datetime |

## Group

| name     | type    |
| -------- | ------- |
| Group ID | int     |
| Name     | varchar |
| Members  | varchar |

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
