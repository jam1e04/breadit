# Breadit

> A modern and clean reddit clone with the Next.js App Router, TypeScript & Tailwind.

## Features
- Infinite scrolling for dynamically loading posts
- Authentication using NextAuth & Google
- Custom feed for authenticated users
- Advanced caching using Upstash Redis
- Optimistic updates for a great user experience
- Modern data fetching using React-Query
- A beautiful and highly functional post editor
- Image uploads & link previews
- Full comment functionality with nested replies
- ... and much more

## Screenshots
<img width="2158" height="1189" alt="屏幕截图 2025-07-06 233508" src="https://github.com/user-attachments/assets/55735783-e885-40e7-bf5a-348ec838b7ac" />
<img width="2159" height="1183" alt="屏幕截图 2025-07-06 202041" src="https://github.com/user-attachments/assets/a2dfd8f4-60da-4abf-a099-751548ff2587" />



## Technologies Used
<img height="50" src="https://github.com/marwin1991/profile-technology-icons/assets/136815194/5f8c622c-c217-4649-b0a9-7e0ee24bd704"><img height="50" src="https://user-images.githubusercontent.com/25181517/183890598-19a0ac2d-e88a-4005-a8df-1ee36782fde1.png"><img height="50" src="https://user-images.githubusercontent.com/25181517/202896760-337261ed-ee92-4979-84c4-d4b829c7355d.png"><img height="50" src="https://zh-hans.react.dev/images/brand/logo_dark.svg"><img height="60" src="https://github.com/user-attachments/assets/5e0f7f71-45b5-4d1b-b5d4-0d0396a414d0">
## Setup

1. Clone this repository first
2. Open it and install all the dependencies
3. Run `npm run dev`
4. Open in the browser

There are a few places where you need to provide your own information. Check the `.env`  file.

```
DATABASE_URL=
NEXTAUTH_SECRET=

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GITHUB_ID=
GITHUB_SECRET=

UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=

REDIS_URL=
REDIS_SECRET=
```

For the Github or Google oAuth 2.0 configuration. You need to go the https://github.com/settings/applications or https://console.cloud.google.com/ and get the  client Id and secret.


## Room for Improvement

Include areas you believe need improvement / could be improved. Also add TODOs for future development.

To do:

- Allow users to see all the communities they joined.
- Allow users to see all the posts they posted.
- Allow users to delete the posted post.
- Implement dark mode
- Allow users to share the post with link
- Add popular posts sections where you can see the latest most voted posts which are not neccessary from the communities you've joined


## Acknowledgements

- This project was based on [this tutorial](https://www.youtube.com/watch?v=mSUKMfm)
