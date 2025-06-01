Vibe coded my personal portfolio site.

Inspired by Dracula theme and the VS code UI.

## Getting Started
Recommended npm version: `10.9.2`

First, install the dependencies:
```bash
npm install
```

Then run the development server:

```bash
npm run dev
```
Hot reload is supported.

Alter the site data in `/src/data` if you want to serve it yourself.

## Useful commands
Build with
```bash
npm run build
```
```bash
export SSH_USER=""
export SSH_HOST=""
export REMOTE_PATH=""

# Clear the target directory and copy over your files
export REMOTE_PATH="${REMOTE_PATH%/}" && rsync -avz --delete out/ "$SSH_USER@$SSH_HOST:$REMOTE_PATH/"
```