# Build Avatar URL - Technical Test

This project is a solution to a technical test, which requires building a function that generates an avatar URL based on provided names and a context.

## Overview

The core function `buildAvatarUrl` generates a URL that integrates the initials of a first and last name into the UI Avatars API. If the `context` contains the word "default", it returns an empty string.

- **URL Format**: `https://ui-avatars.com/api/?name=J+D` (where `J` is the first letter of the first name and `D` the first letter of the last name).
- **Edge cases**: The function handles cases where names are empty, contain spaces, or are `null`/`undefined`.

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository**:

```bash
git clone https://github.com/aeym/build-avatar-url.git
cd build-avatar-url
```

2. **Install dependencies**: Make sure you have Node.js installed, then run:

```bash
npm install
```

3. **Configure environment variables**: Create a .env file at the root of your project:

```bash
touch .env
```

Add the following key to your .env file:

```env
API_URL="https://ui-avatars.com/api/?name="
```

## Usage

You can use the `buildAvatarUrl` function by importing it into your code:

```typescript
import { buildAvatarUrl } from "./src/buildAvatarUrl";

const url = buildAvatarUrl("context", "John", "Doe");
console.log(url); // Outputs: https://ui-avatars.com/api/?name=J+D
```

## Testing

The project is tested using **Jest**. The test suite covers all major functionalities, including:

- Handling of different name inputs (empty, null, undefined, trimmed spaces).
- Correct behavior when the context contains the word "default".
- Proper generation of the avatar URL based on initials.

### Running Tests

To run the test suite, use the following command:

```bash
npm test
```

## Future Improvements

More complex name handling, for example names containing leading special characters.

## Contact

If you have any questions regarding this implementation, feel free to contact me at alrick.eymauzy@gmail.com or via GitHub.
