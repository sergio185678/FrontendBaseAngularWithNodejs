import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocumentoService {

  private httpclient=inject(HttpClient);
  private url=environment.apiUrl+"/document";

  constructor() { }

  obtenerDocumentosPorUsuario(id:number):Observable<any>{
    return this.httpclient.get<any>(this.url+"/get_all_files_by_user/"+id.toString());
  }

  registrarDocumento(formData:any,tipo_archivo:string,idusuario:string):Observable<any>{
    return this.httpclient.post(this.url+"/save_files?tipo="+tipo_archivo+"&usuarioid="+idusuario,formData);
  }

  eliminarDocumento(id:number):Observable<any>{
    return this.httpclient.delete(this.url+"/file/"+id.toString());
  }
  
}
