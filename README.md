# Age, Gender, and Nationality Identifier App

The **Age, Gender, and Nationality Identifier App** is a simple web application built using the Next.js framework. This application allows users to input a name, and it retrieves and displays information about the likely age, gender, and nationality associated with that name.

## Features

- **User-Friendly Interface:** The app provides a clean and user-friendly interface where users can input a name and initiate the identification process.
- **Real-time Data Retrieval:** When the user submits a name, the app retrieves real-time data using external APIs. It fetches age information from the Agify API, gender information from the Genderize API, and nationality data from the Nationalize API.
- **Dynamic Styling:** The app is styled using styled-components, with dynamic styling based on the name input and result availability.
- **Caching and Optimization:** To optimize performance, the app employs memoization techniques to cache results. This means that after the initial search, the app stores the data and quickly retrieves it if the same name is entered again.
- **Loading Feedback:** While data is being retrieved, the app provides loading feedback to the user.
- **Reusable Components:** The codebase is organized into reusable components, making it easy to maintain and extend.

## Installation and Usage

1. Clone the repository.
2. Install the required dependencies using `npm install`.
3. Start the application with `npm run dev`.
4. Access the