import Auth from '../Auth';
import { FETCH_FILES } from '../actions/constants';
import axios from 'axios';
import { Dropbox } from 'dropbox';

export function connectToDropbox() {
  return async dispatch => {
    // const dropbox = Dropbox.authenticate({
    //   client_id: 'ywypbxi1wtsipfv',
    //   client_secret: '9k54xk1ilouhgpg',
    //   redirect_uri: 'http://localhost'
    // });

    // const authUrl = dropbox.generateAuthUrl();

    // dropbox.getToken(code, (err, result, response) => {
    //   //you are authorized now!
    //   console.log('success');
    // });
    try {
      const auth = new Auth();
      await auth.login();

      auth.getProfile((error, profile) => {
        console.log(profile);
      })
      // const instance = axios.create({
      //   method: 'post',
      //   headers: { 'content-type': 'application/json', 'crossdomain': true }
      // });

      // const res = await instance.post('https://maestro31.eu.auth0.com/oauth/token', {
      //   "client_id":"V01hAjVM8N0Gc4rKP88837YigiLmaLEN",
      //   "client_secret":"neHKzbDla_8Dnmysbucav2UMMfkMLkFnmiF_io7cgCMvV8kwz5IW8QBNQMYHACHr",
      //   "audience":"https://maestro31.eu.auth0.com/api/v2/",
      //   "grant_type":"client_credentials"
      // });

      // const dbx = new Dropbox({ accessToken: res.accessToken });
      // const files = await dbx.filesListFolder({path: ''})
      // console.log(files);
    
    } catch (e) {
      console.error(e);
    }

    dispatch({ type: FETCH_FILES });
  };
}
