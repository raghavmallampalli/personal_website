## Getting Started

First, run the development server:

```bash
npm run dev
```

Alter the site data in `/src/data`

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