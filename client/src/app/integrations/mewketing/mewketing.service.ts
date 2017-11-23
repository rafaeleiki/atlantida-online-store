import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {MewketingResponse} from './mewketing'

@Injectable()
export class MewketingService {

  private sender_email = 'atlantida@store.com.br';
  private sender_password=  '12345';
  private url = 'http://mewketing.herokuapp.com/api';

  constructor(private http: Http) { }

  sendEmail(date: string, title: string, template_name: string, groups: string[], vars: Object ): Promise <MewketingResponse>{
    return this.http.post(this.url + `/email/schedule_template`,{
      sender_email: this.sender_email,
      sender_password: this.sender_password,
      schedule : date,
      title : title,
      template : template_name,
      vars : vars,
      groups : groups
    } )
    .toPromise()
    .then(response => response.json() as MewketingResponse)
    .catch((error) => {
      console.error(`Error on sending ${title} from template ${template_name} to groups ${groups.join(' ')}`,
       error);
      return Promise.reject(error.message || error);
    });
  }

  exitGroup(group_name: string, receiver: string): Promise<MewketingResponse> {
    return this.http.post(this.url + `/group/remove_receiver`,{
      sender_email: this.sender_email,
      sender_password: this.sender_password,
      group_name: group_name,
      receiver_email: receiver
    } )
    .toPromise()
    .then(response => response.json() as MewketingResponse)
    .catch((error) => {
      console.error(`Error on removing ${receiver} from group ${group_name}`, error);
      return Promise.reject(error.message || error);
    });
  }

  joinGroup(group_name: string, receiver: string): Promise <MewketingResponse>{
    return this.http.post(this.url + `/group/add_receiver`,{
      sender_email: this.sender_email,
      sender_password: this.sender_password,
      group_name: group_name,
      receiver_email: receiver
    } )
    .toPromise()
    .then(response => response.json() as MewketingResponse)
    .catch((error) => {
      console.error(`Error on adding ${receiver} to group ${group_name}`, error);
      return Promise.reject(error.message || error);
    });

  }

  createReceiver(receiver_name: string, receiver_email:string): Promise <MewketingResponse>{
    return this.http.post(this.url + `/receiver/add`,{
      sender_email: this.sender_email,
      sender_password: this.sender_password,
      name: receiver_name,
      email: receiver_email
    } )
    .toPromise()
    .then(response => response.json() as MewketingResponse)
    .catch((error) => {
      console.error(`Error on creating ${receiver_name}`, error);
      return Promise.reject(error.message || error);
    });
  }

  removeReceiver(receiver_name: string): Promise <MewketingResponse> {
    return this.http.post(this.url + `/receiver/remove`,{
      sender_email: this.sender_email,
      sender_password: this.sender_password,
      name: receiver_name
    } )
    .toPromise()
    .then(response => response.json() as MewketingResponse)
    .catch((error) => {
      console.error(`Error on removing ${receiver_name}`, error);
      return Promise.reject(error.message || error);
    });
  }

  updateReceiver(original_receiver_name: string, new_receiver_name: string, new_receiver_email:string): Promise <MewketingResponse>{
    return this.http.post(this.url + `/receiver/add`,{
      sender_email: this.sender_email,
      sender_password: this.sender_password,
      original_name : original_receiver_name,
      name : new_receiver_name,
      email : new_receiver_email

    } )
    .toPromise()
    .then(response => response.json() as MewketingResponse)
    .catch((error) => {
      console.error(`Error on updating ${original_receiver_name}`, error);
      return Promise.reject(error.message || error);
    });
  }

}
