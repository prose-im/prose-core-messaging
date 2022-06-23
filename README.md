# prose-core-views

[![Test and Build](https://github.com/prose-im/prose-core-views/actions/workflows/test.yml/badge.svg?branch=master)](https://github.com/prose-im/prose-core-views/actions/workflows/test.yml)

**Prose core views. Shared messaging views across all platforms.**

As Prose is a native cross-platform application, some views that are deemed too complex to build natively are shared between all apps. Those views are rendered in a lightweight and minimal Web view, and shared between mobile and desktop platforms. This also ensures that the Prose user experience stays consistent between all platforms.

Prose views are built on [`petite-vue`](https://github.com/vuejs/petite-vue), which is a super-lightweight minimal version of VueJS. This ensures that the rendering of elements such as lists stays efficient, usually even more efficient than using barebone native views. All assets get bundled using [`parcel`](https://parceljs.org/), which helps at easing development and produces an optimized production build.

Copyright 2022, Prose Foundation - Released under the [Mozilla Public License 2.0](./LICENSE.md).

_Tested at NodeJS version: `v14.19.3`_

## Preview

### Messaging views

![message](https://user-images.githubusercontent.com/1451907/174491797-e6e75017-d9ca-4b6e-a3b7-d910292e3a09.png)

_👉 The designs for all of the views are contained in the macOS app reference design [which can be found there](https://github.com/prose-im/prose-medley/blob/master/designs/app/prose-app-macos.sketch)._

## Installation

To install all the build dependencies, you first need to install NodeJS (version `12` and above).

Then, hit:

```
npm install
```

## Build

Building the Prose core views is done per-target environment. Please check below for build instructions based on your target environment.

### Production target

To build Prose for a production environment (that is, usage within an actual Prose app), hit:

```
npm run build
```

### Development target

To build Prose for a development environment (that is, usage from a browser, while making changes), hit:

```
npm run dev
```

Then, open a Web browser and go to: [localhost:5000](http://localhost:5000/). Any saved changes will be hot-reloaded, meaning you will get live previews.

## Usage

Once built, all assets in `dist/` should be packaged within the Prose native app, and included in a Web view where relevant.

Serialized data should be passed to the view whenever its model needs to be updated.

## License

Licensing information can be found in the [LICENSE.md](./LICENSE.md) document.

## :fire: Report A Vulnerability

If you find a vulnerability in any Prose system, you are more than welcome to report it directly to Prose Security by sending an encrypted email to [security@prose.org](mailto:security@prose.org). Do not report vulnerabilities in public GitHub issues, as they may be exploited by malicious people to target production systems running an unpatched version.

**:warning: You must encrypt your email using Prose Security GPG public key: [:key:57A5B260.pub.asc](https://files.prose.org/public/keys/gpg/57A5B260.pub.asc).**
