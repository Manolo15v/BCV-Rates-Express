
# BCV Rates Express

## Description
BCV Rates Express is a Node.js API built with Express for fetching and serving currency rates. It uses cron jobs to automate rate fetching and provides endpoints for accessing the data.

## Installation
1. Clone the repository:
	```
	git clone <repo-url>
	cd BCV-Rates-Express
	```
2. Install dependencies:
	```
	npm install
	```

## Running the Project
### Development mode
```
npm run dev
```
This starts the server with hot-reloading using `tsx`.

### Production mode
```
npm run build
npm start
```
This compiles TypeScript to JavaScript and runs the server from the `dist` folder.

### Running Cron Jobs Separately
If you have cron jobs in `src/jobs/`, you can create a script to run them independently.

## Dependency Overview
- **express**: Web framework for building REST APIs.
- **axios**: HTTP client for making requests to external APIs.
- **cheerio**: Parses and manipulates HTML, useful for web scraping.
- **cors**: Enables Cross-Origin Resource Sharing for API endpoints.
- **cron**: Schedules and runs cron jobs for automated tasks.
- **morgan**: HTTP request logger middleware for Express.
- **mysql2**: MySQL client for Node.js, used for database operations.

### Dev Dependencies
- **typescript**: TypeScript language support.
- **tsx**: Fast TypeScript/ESM runner for development.
- **vitest**: Unit testing framework.
- **@types/**: Type definitions for TypeScript support.

## License
ISC
