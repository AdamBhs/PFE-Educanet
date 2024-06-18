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

  deleteArticleById(id: any):Observable<any> {
    return this.http.delete<any>(`http://localhost:8080/deleteArticle?id=${id}`);
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

  // --- notifications backend ---
  getNotifications(numAgence: any):Observable<any> {
    return this.http.get<any>(`http://localhost:8080/getNotifications?numAgence=${numAgence}`);
  }

  addNotification(numAgence:any, description:any, title:any):Observable<any> {
    return this.http.post<any>(`http://localhost:8080/postNotification?numAgence=${numAgence}&desc=${description}&title=${title}`, {});
  }

  deleteNotification(idNotification: any):Observable<any> {
    return this.http.delete<any>(`http://localhost:8080/deleteNotification?idNotification=${idNotification}`);
  }

  // --- Promotions backend ---
  getPromotions(numAgence: any):Observable<any> {
    return this.http.get<any>(`http://localhost:8080/getPromotions?numAgence=${numAgence}`);
  }

  getCustomersPromotions(numAgence: any):Observable<any> {
    return this.http.get<any>(`http://localhost:8080/getCustomersPromotions?numAgence=${numAgence}`);
  }

  addPromotion(data: any):Observable<any> {
    return this.http.post<any>(`http://localhost:8080/addPromotion?numAgence=${data.numAgence}&startDate=${data.intervalTime[0]}&endDate=${data.intervalTime[1]}&category=${data.category}&nameArticle=${data.articleName}&newPrix=${data.newPrice}`, {})
  }

  addPromotionForCustomer(data: any):Observable<any> {
    return this.http.post<any>(`http://localhost:8080/addPromotionCustomer?numCustomer=${data.customerCode}&startDate=${data.intervalTime[0]}&endDate=${data.intervalTime[1]}&category=${data.category}&nameArticle=${data.articleName}&newPrix=${data.newPrice}`, {})
  }

  deletePromotion(id: any):Observable<any> {
    return this.http.delete<any>(`http://localhost:8080/deletePromotion?idPromotion=${id}`);
  }

  // --- Operations backend ---
  getOperations(numAgence: any):Observable<any> {
    return this.http.get<any>(`http://localhost:8080/getOperations?numAgence=${numAgence}`);
  }

  getOperationsByDate(numAgence: any, startDate: any, endDate: any):Observable<any> {
    return this.http.get<any>(`http://localhost:8080/getOperationsByDate?numAgence=${numAgence}&startDate=${startDate}&endDate=${endDate}`);
  }

  getOperationsOfToDay():Observable<any> {
    return this.http.get<any>("http://localhost:8080/getOperationsOfToday");
  }

  getQuantityByAgence():Observable<any> {
    return this.http.get<any>("http://localhost:8080/getQuantityByAgence");
  }

  getPricePerAgence():Observable<any> {
    return this.http.get<any>(`http://localhost:8080/getPricePerAgence`);
  }

  getTotalProfit():Observable<any> {
    return this.http.get<any>(`http://localhost:8080/getTotalProfit`);
  }

  getTotalQuantityToday():Observable<any> {
    return this.http.get<any>(`http://localhost:8080/getTotalQuantityToday`);
  }

  getTotalOperationsByAgence():Observable<any> {
    return this.http.get<any>(`http://localhost:8080/getTotalOperationsByAgence`);
  }

  getQuantityPerCategory():Observable<any> {
    return this.http.get<any>(`http://localhost:8080/getQuantityPerCategory`);
  }
}


