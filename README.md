# GitHub Profile Finder

A React-based web application that allows users to search for GitHub profiles and explore their public repositories using the GitHub REST API.

## Features

- Search GitHub users by username.
- View profile information, avatar, bio, and location.
- Display followers, following, and public repository count.
- Explore public repositories.
- Sort repositories by most recent updates or highest stars.
- View GitHub profiles and individual repositories.
- Loading and error handling.
- Search using the Enter key.
- Responsive design for mobile and desktop screens.

## Screenshots

### GitHub Profile

![GitHub Profile](./public/screenshots/profile.png)

### Public Repositories

![Public Repositories](./public/screenshots/repositories.png)

## Tech Stack

- React.js
- JavaScript
- Tailwind CSS
- GitHub REST API
- Fetch API
- React Hooks (useState)
- Vite
- Git and GitHub

## Installation and Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/shubhamshinde-2103/github-profile-finder.git
   ```

2. Navigate to the project folder:

   ```bash
   cd github-profile-finder
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL shown in your terminal.

## API Used

GitHub REST API:

- User Profile: `https://api.github.com/users/{username}`
- User Repositories: `https://api.github.com/users/{username}/repos`

## Author

**Shubham Shinde**

GitHub: [shubhamshinde-2103](https://github.com/shubhamshinde-2103)