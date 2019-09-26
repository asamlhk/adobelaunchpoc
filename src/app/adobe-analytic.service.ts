import { Injectable } from '@angular/core';

@Injectable()
export class AdobeAnalyticService {

  constructor() { }

  public trackPage(path) {
 
    window['DataLayer'] = {
      'pagename': path
    }
    //window.TrackPageView();
    console.log(window['_satellite']);
    window['_satellite'].pageBottom();
    window.TrackPageView();


    //window['_satellite'].track('trackpageview');

  }

  public trackEvent(event) {
    //console.log(event);
    window['DataLayer'] =
      {
        'distributortype': 'insert agency or banca channel',
        'advisorid': 'insert register or login ID stored in SalesForce',
        'customerid': 'insert customer ID stored in SalesForce',
        'referralid': 'insert referral ID stored in SalesForce',
        'goals': 'insert referral ID stored in SalesForce',
        'ridertype': 'insert rider type protection name selected',
        'event_category': 'insert event category value',
        'event_type': 'insert event category value',
        'event_label': event
      }
    console.log('trackevent', window['DataLayer'])
    window.TrackEvent();
  }

}