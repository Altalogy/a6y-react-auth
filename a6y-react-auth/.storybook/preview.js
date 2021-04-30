import A6YReactAuth from '../src/index'

// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
export const parameters = {
  // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
  actions: { argTypesRegex: '^on.*' },
};

const ReactAuth = new A6YReactAuth()

ReactAuth.initialize({
  provider: {
    type: 'cognito',
    userPoolId: 'eu-central-1_xxxxxxx',
    userPoolWebClientId: 'some-id',
    identityPoolId: 'some-id',
    region: 'eu-central-1',
  },
  components: {
    signUp: {
      confirmation: true,
    },
    consents: {
      display: 'sign-up',
      position: 'top',
      consents: [
        {
          name: 'survey-flagged',
          type: 'checkbox',
          required: true,
          content: 'We will let you know when your survey is flagged. *',
        },
        {
          name: 'survey-better',
          type: 'checkbox',
          required: false,
          content: 'We will let youk know when your survey could do better',
        },
        {
          name: 'terms',
          type: 'other',
          required: false,
          content:
            'By signing up I agree to (Terms_of_Service)[/service-terms] and (Privacy_Policy)[/privacy-policy]',
        },
      ],
    },
  },
  auth: [
    { appId: 'xx', provider: 'facebook', federatedIdentities: true },
    { appId: 'xx', provider: 'google' },
  ],
})
