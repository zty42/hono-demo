# hono-example-blog

CRUD web API for Blog.

## Features

- Cloudflare Workers
- KV
- TypeScript
- `wrangler` for develop and deploy
- Test with Vitest

## Endpoints

- `GET /posts`
- `POST /posts`
- `GET /posts/:id`
- `PUT /posts/:id`
- `DELETE /posts/:id`

## Usage

Install dependencies:

```sh
yarn install
```

Rename `wrangler.example.toml` to `wrangler.toml`:

```sh
mv wrangler.example.toml wrangler.toml
```

Setup KV:

```sh
wrangler kv:namespace create memo --preview

🌀 Creating namespace with title "hono-example-blog-memo_preview"
✨ Success!
Add the following to your configuration file in your kv_namespaces array:
{ binding = "memo", preview_id = "xxxxxxxxxx" }
```

```sh
wrangler kv:namespace create memo

🌀 Creating namespace with title "hono-example-blog-memo"
✨ Success!
Add the following to your configuration file in your kv_namespaces array:
{ binding = "memo", id = "yyyyyyyyyy" }
```

Copy KV id:

```toml
kv_namespaces = [
  { binding = "memo", preview_id = "xxxxxxxxxx", id = "yyyyyyyyy" }
]
```

Run a development server:

```sh
yarn dev
```

Publish:

```sh
yarn deploy
```
