export const userRegistrationData = {
  profileFields: [
    {
      type: 'text',
      id: 'first-name',
      name: 'first_name',
      label: 'First name',
      required: true,
    },
    {
      type: 'text',
      id: 'last-name',
      name: 'last_name',
      label: 'Last name',
      required: true,
    },
    {
      type: 'email',
      id: 'email',
      name: 'email',
      label: 'Email',
      required: true,
    },
    {
      type: 'password',
      id: 'password',
      name: 'password',
      label: 'Password',
      required: true,
    },
    {
      type: 'password',
      id: 'confirm-password',
      name: 'confirm_password',
      label: 'Confirm Password',
      required: true,
    },
  ],

  primaryRegFields: [],

  otpFields: [],
};
