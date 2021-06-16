# boxednode

This tool will build a binary with nodejs and your code as if your code was part of the standard library. This may make it easier to codesign, but requires compiling node (which takes some time).

It also requires a single js file, so bundling it up is on us through something like `ncc` or `rollup`.
