import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { message } from '../data/message';

@Injectable({
  providedIn: 'root'
})
export class BackendCallsService {

  constructor(
    private http: HttpClient
  ) { }

  // --- Customer Management Backend ---
  getCustomerCode(code:any):Observable<message> {
    return this.http.get<message>("http://localhost:8080/getCustomerCode?code=" + code);
  }

  getCustomerArchive(code:any, numAgence:any, startDate:any, endDate:any):Observable<any> {
    return this.http.get<any>("http://localhost:8080/getCustomerArchive?code=" + code 
      + "&numAgence=" + numAgence + "&startDate="+ startDate +"&endDate="+endDate
    )
  }

  getCustomers():Observable<any> {
    return this.http.get<any>("http://localhost:8080/getCustomers");
  }

  getCustomersByAgence(name:any):Observable<any> {
    return this.http.get<any>("http://localhost:8080/getCustomersByAgence?name="+ name);
  }

  getTotalCustomersByAgence():Observable<any> {
    return this.http.get<any>("http://localhost:8080/totalCustomersByAgenceName");
  }

  // --- Price List Backend ---
  getArticlesByCategorie(categorie: any):Observable<any> {
    return this.http.get<any>("http://localhost:8080/getArticlesByCategorie?categorie=" + categorie);
  }

  addArticle(name: any, prix: any, category: any):Observable<any> {
    return this.http.post<any>(`http://localhost:8080/addArticle?name=${name}&prix=${prix}&catg=${category}`, {})
  }

  getArticles():Observable<any> {
    return this.http.get<any>("http://localhost:8080/getArticles");
  }

  deleteArticleByName(name: any):Observable<any> {
    return this.http.delete<any>(`http://localhost:8080/deleteArticle?name=${name}`);
  }

  updateArticleByName(name: any, newPrix: any):Observable<any> {
    return this.http.put<any>(`http://localhost:8080/updateArticlePrix?name=${name}&newPrix=${newPrix}`, {})
  }

  // --- Agences Backend ---
  getTableAgences():Observable<any> {
    return this.http.get<any>("http://localhost:8080/getTableAgences");
  }

  updateEtatAgence(numAgence: any, etat: string):Observable<any> {
    return this.http.put<any>(`http://localhost:8080/updateAgenceEtat?numAgence=${numAgence}&newEtat=${etat}`, {});
  }

  // --- Caisse Backend ---
  getCaisseData(numAgence: any):Observable<any> {
    return this.http.get<any>(`http://localhost:8080/getCaisseData?numAgence=${numAgence}`);
  }

  getCaisseDataByDate(numAgence: any, startDate: any, endDate):Observable<any> {
    return this.http.get<any>(`http://localhost:8080/getCaisseDataByDate?numAgence=${numAgence}&startDate=${startDate}&endDate=${endDate}`)
  }

  // -- notifications backend ---
  getNotifications(numAgence: any):Observable<any> {
    return this.http.get<any>(`http://localhost:8080/getNotifications?numAgence=${numAgence}`);
  }

  addNotification(numAgence:any, description:any, title:any):Observable<any> {
    return this.http.post<any>(`http://localhost:8080/postNotification?numAgence=${numAgence}&desc=${description}&title=${title}`, {});
  }

  deleteNotification(idNotification: any):Observable<any> {
    return this.http.delete<any>(`http://localhost:8080/deleteNotification?idNotification=${idNotification}`);
  }
}
