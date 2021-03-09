#a6y-react-auth
==============

Authentication forms for React.

##**Getting Started**
-------------------

**1) Install:**

```plain
npm install a6y-react-auth

or

with yarn
```

**2) Initialize**

```typescript
import A6YReactAuth from "a6y-react-auth"

const A6YAuth = new A6YReactAuth()

A6YAuth .initialize({
  provider: {
    type: 'cognito',
    userPoolId: 'us-east-1_xyz',
    userPoolWebClientId: 'xyz',
    region: 'us-east-1',
  },
})
```

**3) Usage**

```typescript
import {Auth} from "a6y-react-auth"

<Auth />
```
###**Advanced options**

A6YReactAuth default export is a function with initializing. Other exported components are described below:

Component | Description
--- | ---
Auth | Renders all components forms to one. The default view is set from config.
SignIn | Renders only sign-in container with component form.
SignUp | Renders only sign-up container with component form.
ForgotPassword | Renders only forgot-password container with component form.

##### `Auth`

**props**
param | type | description
--- | --- | ---
className[optional] | string | the CSS classes
onSuccess[optional]] | (response: unknown) => void | onSuccess callback function

**example**
```typescript
  <AuthComponent
    className='a6y-react-auth'
    onSuccess={(response: unknown) => void}
  />
```

##### `SignIn`
**props**
param | type | description
--- | --- | ---
className[optional] | string | the CSS classes
onSuccess[optional]] | (response: unknown) => void | onSuccess callback function
onLinkHandler[optional] | it's a link callback function to redirect the app. If not declared it's using by pathname `/sign-in`

**example**
```typescript
  <SignIn
    className='a6y-react-auth__sign-in'
    onSuccess={(response: unknown) => void}
    onLinkHandler={(to: string) => void}
  />
```

##### `SignUp`
**props**
param | type | description
--- | --- | ---
className[optional] | string | the CSS classes
onSuccess[optional]] | (response: unknown) => void | onSuccess callback function
onLinkHandler[optional] | it's a link callback function to redirect the app. If not declared it's using by pathname `/sign-up`

**example**
```typescript
  <SignUp
    className='a6y-react-auth__sign-up'
    onSuccess={(response: unknown) => void}
    onLinkHandler={(to: string) => void}
  />
```

##### `ForgotPassword`
**props**
param | type | description
--- | --- | ---
className[optional] | string | the CSS classes
onSuccess[optional]] | (response: unknown) => void | onSuccess callback function
onLinkHandler[optional] | (to: string) => void | it's a link callback function to redirect the app. If not declared it's using by pathname `/forgot-password`

**example**
```typescript
  <ForgotPassword
    className='a6y-react-auth__forgot-password'
    onSuccess={(response: unknown) => void}
    onLinkHandler={(to: string) => void}
  />
```


#Development
-----------

### Getting started

1. Clone repository with `git clone`

2. Install:
```
$ npm install
```

3. Run locally:

```
$ npm link
```
Full docs here: [https://docs.npmjs.com/cli/v7/commands/npm-link](npm-link)


### Storybook
**build**

`npm run build-storybook`

**run**

```plain
npm run storybook
```
Open [http://localhost:6006](http://localhost:6006) to view it in the browser.

  

### Build and publish NPM

**to build use**
`npm run build`
or just use
`npm run prepublishOnly`

**to publish NPM**
`npm publish`

### ESLint

```plain
npm run lint

or with automatic fix

npm run lint-fix
```

### Available Scripts

Launches the test runner in the interactive watch mode.

`npm run test`


## Development guidelines

#### Principles

1. Only one feature per a new branch.
2. Try to make each commit as a new record in the Changelog. (see **Git** section)

#### Process

1. Download and fetch `master` branch on local machine
2. Create a new branch from `master`. You can create:
  * `feature/<feature-name>` - for new feature
  * `fix/<what-is-fixed>` - to add fix
  * `org/<what-is-changed` - to make some organizational works, like update README, update `package.json`, fix vulnerabilities in dependencies
  * `add/<what-is-added>` - for small changes
3. Implement feature (check **New features** sections)
4. Lint & clean code
5. Make tests / add tests (?)
6. Update README.md:
  * **Options** - add here a new props and API's functions
  * **Changelog** - add to the list a name of the feature, fix or anything what will be released in a new version.
7. Create pull request to `master` branch
8. Ask for review & merge


To release a new version:
1. Create pull request to `master`
2. Test `master` branch
3. Merge pull request
4. Increment version in `package.json`
5. Update Changelog and others
6. Commit changes with `release` text
7. Run script to publish library to NPM

## Git

Use `master` branch only to store production versions, to generate docs and publish on NPM. Tag each version.

The `develop` is used to sync works of developers and start working on new features, make fixes and organizational works. Each branch should have one out of the following prefixes:
* `feature/<feature-name>` - for new feature
* `fix/<what-is-fixed>` - to add fix
* `org/<what-is-changed` - to make some organizational works, like update README, update `package.json`, fix vulnerabilities in dependencies
* `add/<what-is-added>` - for small changes

#License
-------

This code is released under the MIT License.