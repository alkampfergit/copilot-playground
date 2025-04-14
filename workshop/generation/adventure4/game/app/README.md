# Adventure Game Engine

This is a text-based adventure game engine built with Node.js and TypeScript.
It reads game rules from JSON files located in the `../rules` directory.

## Setup

1.  Navigate to the `game/app` directory:
    ```bash
    cd path/to/workshop/generation/adventure4/game/app
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```

## Compiling

To compile the TypeScript code to JavaScript (output to `dist` directory):

```bash
npm run build
```

## Running the Game

1.  **Compile first (if not already done):**
    ```bash
    npm run build
    ```
2.  **Run the compiled code:**
    ```bash
    npm start
    ```

Alternatively, you can run the game directly using `ts-node` for development:

```bash
npm run dev
```

## Running Tests

Tests are located in the `test` directory. See `test/README.md` for details on running tests.
