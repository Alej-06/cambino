import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Genshin } from '../model/genshinInterface';

@Injectable({
  providedIn: 'root'
})
export class GenshinService {
  constructor(private oHttpClient: HttpClient) {
  }

  getAllChar():Observable<Genshin[]>{
    return this.oHttpClient.get<Genshin[]>('https://genshin.jmp.blue/characters/all')
  }
  
}
