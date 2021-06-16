# node-binary-testbed

Each of these folders is an npm package that will build a binary from your nodejs code. The `file-interactor.js` is the small test script being built into a binary. It has three functions: `read`, `require` and `import`, the second arg of the CLI. These are to test binary interaction with the filesystem. The third arg is the file with which to interact.

- Note that `require` is inherently CommonJs based, and is best used with the `test.cjs`.
- Note that `import` is inherently ESM based, and is best with the `test.mjs`.

In each folder after creating the binary, try:

```
> ./file-interactor import script.mjs
esm boop!

> ./file-interactor require script.cjs
cjs boop!

> ./file-interactor read script.mjs
<this readme text>
```
