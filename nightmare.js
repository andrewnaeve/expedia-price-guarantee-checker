import Nightmare from 'nightmare';
import { username, password } from './secrets';

const nightmare = Nightmare({
  show: true,
  typeInterval: 150,
  pollInterval: 50,
  webPreferences: {
    partition: 'persist: testing'
  },
  waitTimeout: 60000
});

export const login = () =>
  nightmare
    .goto('https://www.expedia.com')
    .wait('#header-account-menu')
    .click('#header-account-menu')
    .wait('#account-signin')
    .click('#account-signin')
    .wait('#gss-signin-email')
    .type('#gss-signin-email', username)
    .type('#gss-signin-password', password)
    .click('#gss-signin-submit')
    .end()
    .then(() => console.log('done'))
    .catch(err => err);

export const checkPrice = () =>
  nightmare
    .goto('https://www.expedia.com')
    .wait('#header-itineraries')
    .click('#header-itineraries')
    .wait('#trip_list_upcoming')
    .click('#trip_list_upcoming li:first-child article a')
    .wait('#assuranceCheckLatestPriceURL')
    .click('#assuranceCheckLatestPriceURL')
    .wait('#check-latest-price-button')
    .click('#check-latest-price-button')
    .click('#check-latest-price-button')
    .wait(10000)
    .end()
    .then(() => console.log('done'))
    .catch(err => err);

export const clickButton = () =>
  nightmare
    .goto('https://www.expedia.com/price-drop-history?tripNumber=7389389517761')
    .wait('#check-latest-price-button')
    .click('#check-latest-price-button')
    .wait(15000)
    .end()
    .then(() => console.log('done'))
    .catch(err => err);
