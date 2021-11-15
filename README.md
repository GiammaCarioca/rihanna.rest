# 🫖 rihanna.rest

A free REST API for Rihanna quotes.

Fenty is always serving! Not only looks and bops but also wisdom!

## Production host

[https://rihanna.rest](https://rihanna.rest)

The `Access-Control-Allow-Origin` header is set to `*` so that you can make requests from any domain.

## Usage

### `GET /quotes`

```shell
curl https://rihanna.rest/quotes
```

Returns an array with one random quote:

```json
[
    "Never a failure, always a lesson."
]
```

### `GET /quotes/<count>`

```shell
curl https://rihanna.rest/quotes/2
```

Returns an array with `<count>` random quotes e.g. `GET /quotes/2`

```json
[
    "If you've got a dollar, there’s plenty to share",
    "The minute you learn to love yourself you won't want to be anyone else.",
]
```

### `GET /quotes/search/<term>`

```shell
curl https://rihanna.rest/quotes/search/love
```

Returns an array of quotes matching `<term>` without case sensitivity e.g. `GET /quotes/search/love`

```json
[
    "The minute you learn to love yourself you won't want to be anyone else.",
    "You have to just accept your body. You may not love it all the way, but you just have to be comfortable with it, comfortable with knowing that that's your body.",
    "I love reading people. I really enjoy watching, observing, and being able to figure out a person, the reason they wore that dress, the reason they smell the way they do."
]
```

### `GET /quotes/all`

```shell
curl https://rihanna.rest/quotes/all
```

Returns an array with all the quotes.

## Local development

Once you've cloned this repo, run `npm install` to install the dependencies.

Then you can run:

* `npm build`: builds the TypeScript source code
* `npm start`: runs the compiled server
* `npm run dev`: executes the server with ts-node-dev

## License

MIT
