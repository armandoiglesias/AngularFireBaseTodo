// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false
  , firebase : {
    apiKey: "AIzaSyCKbTeGx732Fu-MqSRTW036gOwiEIUeV6w",
    authDomain: "basededatostodo.firebaseapp.com",
    databaseURL: "https://basededatostodo.firebaseio.com",
    projectId: "basededatostodo",
    storageBucket: "",
    messagingSenderId: "535040274816"
  }
};
