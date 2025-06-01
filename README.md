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
export REMOTE_PATH="" # No slash

# Clear the target directory
rsync -avz --delete out/ "$SSH_USER@$SSH_HOST:$REMOTE_PATH/"
```