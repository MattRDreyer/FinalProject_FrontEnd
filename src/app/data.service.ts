import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

    private baseUrl = 'http://localhost:8080/'

    constructor (private http: Http) {}

    // baseurl                  endpoint  destination
    // ----------------------   --------  ---------------------
    // http://localhost:8080/   student   /dford@gmail.com/
    // http://localhost:8080/student/dford@gmail.com/
    // IMPORTANT: WHEN SENDING EMAIL ADDRESS IT MUST END WITH A '/'

// **************************************************************************************
//                               STUDENTS PATH                                          *
// **************************************************************************************

    // authenticateLogin(endpoint: string, record:object, enterprise_id:string, password:string): Observable<object> {
    //     let apiUrl = `${this.baseUrl}${endpoint}/${enterprise_id}`;
    //     let apiUrl2 = apiUrl + "&" + password;
    //     console.log("in authenticateLogin: " + apiUrl2);
    //     console.log(apiUrl2);
    //     return this.http.get(apiUrl2)
    //         .map(this.extractData)
    //         .catch(this.handleError);
    // }

    // executed from the login screen
    getStudentRecordByEmail(endpoint: string, email:string): Observable<object> {
        let apiUrl = `${this.baseUrl}${endpoint}/${email}/`;
        console.log(apiUrl);
        return this.http.get(apiUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }
    
    // executed for edit
    getStudentRecordById(endpoint: string, id:number): Observable<object> {
    let apiUrl = `${this.baseUrl}${endpoint}/${id}`;
    return this.http.get(apiUrl)
        .map(this.extractData)
        .catch(this.handleError);
    }

    // performed from saveStudent in student-form.component.ts
    editStudentRecord(endpoint: string, record:object, id:number): Observable<object> {
        let apiUrl = `${this.baseUrl}${endpoint}/${id}`;

        console.log("Updating in editStudentRecord: " + apiUrl)
        console.log(record)
        
        return this.http.put(apiUrl, record)
            .map(this.extractData)
            .catch(this.handleError);
    }

    // performed from saveStudent in student-form.component.ts
    addStudentRecord(endpoint: string, record:object): Observable<object> {
        let apiUrl = `${this.baseUrl}${endpoint}/add`;
        console.log(apiUrl)
        return this.http.post(apiUrl, record)
            .map(this.extractData)
            .catch(this.handleError);
    }

    // performed from quiz.component.ts to obtain quiz questions
    // http://localhost:8080/quiz/student/{email}
    getQuizRecords(endpoint: string, option: string, email:string): Observable<any> {
        let apiUrl = this.baseUrl+endpoint+"/"+option+"/"+email+"/"
        console.log("getQuizRecords: " + apiUrl);
        return this.http.get(apiUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }
    
    // http://localhost:8080/quizResults/add/{quizId}/{studentId}/
    // http://localhost:8080/quizResults/add/387/10/
    addQuizRecord(endpoint: string, record:object, quizId:number, studentId:number): Observable<object> {
        let apiUrl = `${this.baseUrl}${endpoint}/add/${quizId}/${studentId}/`;
        console.log("addQuizRecord: " + apiUrl)
        return this.http.post(apiUrl, record)
            .map(this.extractData)
            .catch(this.handleError);
    }

// **************************************************************************************
//                               RECRUITER PATH                                         *
// **************************************************************************************

   // RECRUITER GET, PUT, & POST
    registerLogin(endpoint: string, record:object, username:string, password: string, email:string, firstName:string, lastName:string): 
    Observable<object> {
        let apiUrl = `${this.baseUrl}${endpoint}/all`;
        console.log(apiUrl);
        
        return this.http.get(apiUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }

    recruiterLogin(endpoint: string, record:object):
    Observable<object> {
        let apiUrl = `${this.baseUrl}${endpoint}/username`;
        // console.log(apiUrl);
        return this.http.get(apiUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }

    getRecruiterRecord(endpoint: string, username:string): Observable<object> {
        let apiUrl = `${this.baseUrl}${endpoint}/${username}`;
        return this.http.get(apiUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }
    
    addRecruiterRecord(endpoint: string, record:object): Observable<object> {
    let apiUrl = `${this.baseUrl}${endpoint}/add`;
    console.log(apiUrl)
    return this.http.post(apiUrl, record)
        .map(this.extractData)
        .catch(this.handleError);
    }

    //   
    editRecruiterRecord(endpoint: string, record:object, id:number): Observable<object> {
        let apiUrl = `${this.baseUrl}${endpoint}/${id}`;
        console.log(record)
        console.log(apiUrl)
        return this.http.put(apiUrl, record)
            .map(this.extractData)
            .catch(this.handleError);
    }

// **************************************************************************************
//                               PROSPECTS PATH                                         *
// **************************************************************************************

    getProspectRecord(endpoint: string): Observable<any[]> {  // might only have getrandom ?
       let apiUrl = `${this.baseUrl}${endpoint}/all`;
       return this.http.get(apiUrl)
           .map(this.extractData)  //how to map data from API
           .catch(this.handleError);  // how to handle if it messes up
   }

// **************************************************************************************
//                               EVENTS PATH                                           *
// **************************************************************************************


   getRecord(endpoint: string, id): Observable<object> {
        let apiUrl = `${this.baseUrl}${endpoint}/${id}`;
        return this.http.get(apiUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }

     getEventbyID(endpoint: string, id): Observable<object> {
        let apiUrl = `${this.baseUrl}${endpoint}/${id}`;
        return this.http.get(apiUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }

     addEventRecord(endpoint: string, record:object): Observable<object> {
        let apiUrl = `${this.baseUrl}${endpoint}/add`;
        console.log(apiUrl)
        return this.http.post(apiUrl, record)
        .map(this.extractData)
        .catch(this.handleError);
    }

    //  editEventRecord(endpoint: string, record:object, id:number): Observable<object> {
    //     let apiUrl = `${this.baseUrl}${endpoint}/${id}`;
    //     console.log(record)
    //     console.log(apiUrl)
    //     return this.http.put(apiUrl, record)
    //         .map(this.extractData)
    //         .catch(this.handleError);
    // }

    getRecords(endpoint: string): Observable<any[]> {
        let apiUrl = this.baseUrl+endpoint + "/all";
        return this.http.get(apiUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }
        
    // deleteRecord(endpoint: string, id:number): Observable<object> {
    //     let apiUrl = `${this.baseUrl}${endpoint}/${id}`;
    //     return this.http.delete(apiUrl)
    //         .map(this.extractData)
    //         .catch(this.handleError);
    // }
    // addRecord(endpoint: string, record:object): Observable<object> {
    //     let apiUrl = `${this.baseUrl}${endpoint}`;
    //     console.log(apiUrl)
    //     return this.http.post(apiUrl, record)
    //         .map(this.extractData)
    //         .catch(this.handleError);
    // }

      editRecord(endpoint: string, record:object, id:number): Observable<object> {
        let apiUrl = `${this.baseUrl}${endpoint}/${id}`;
        console.log(record)
        console.log(apiUrl)
        return this.http.put(apiUrl, record)
            .map(this.extractData)
            .catch(this.handleError);
    }




        



// **************************************************************************************
//                               HOUSEKEEPING                                           *
// **************************************************************************************

    deleteRecord(endpoint: string, id:number): Observable<object> {
        let apiUrl = `${this.baseUrl}${endpoint}/${id}`;
        return this.http.delete(apiUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }
    addRecord(endpoint: string, record:object): Observable<object> {
        let apiUrl = `${this.baseUrl}${endpoint}`;
        console.log(apiUrl)
        return this.http.post(apiUrl, record)
            .map(this.extractData)
            .catch(this.handleError);
    }

    // private extractData(res: Response) {
    //     let results = res.json();
    //     console.log(results);
    //     return results || [];
    // }
    private extractData(res: Response) {
        let results = false;try{
            results = res.json();
        }catch(e){
            if(res.status !== 200){
                return Observable.throw(e);
            }
        }
        return results || {};
    }


    private handleError(error: Response | any) {
        // In a real world app, you might use a remote logging infrastructure
        // console.log("Error: " + error);
        // return Observable.throw(error.message);
        let errMsg: string;
        if(typeof error._body === "string"){
            errMsg = error._body
        }else{
            if (error instanceof Response) {
                if(error.status === 0){
                    errMsg = "Error connecting to API"
                }else{
                    const errorJSON = error.json();
                    errMsg = errorJSON.message;
                } 
            }
        }
        return Observable.throw(errMsg);
    }
        
} // end data service