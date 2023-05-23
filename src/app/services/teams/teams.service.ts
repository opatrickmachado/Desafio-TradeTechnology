import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {
  acessKey:string | null =''
  constructor(private http: HttpClient) { }

  // Pesquisa de país
  checkCountrie():Observable<any>{

    this.acessKey = localStorage.getItem('acess')
    const headers = new HttpHeaders().set('x-apisports-key',this.acessKey! )
    return this.http.get<any>(`${environment.urlApi}/countries`,{headers, observe : 'response'})
  }

  // Pesquisa de ligas do país
  checkLeague(){
    
    const headers = new HttpHeaders().set('x-apisports-key',this.acessKey! )

    return this.http.get<any>(`${environment.urlApi}/leagues`,{headers, observe : 'response'})
  }
  
  checkSeason(){
    
    const headers = new HttpHeaders().set('x-apisports-key',this.acessKey! )

    return this.http.get<any>(`${environment.urlApi}/leagues/seasons`,{headers, observe : 'response'})
  }

  checkTeams(league:string, season:string){
    
    const headers = new HttpHeaders().set('x-apisports-key',this.acessKey! )
    
    return this.http.get<any>(`${environment.urlApi}/teams?league=${league}&season=${season}`,{headers, observe : 'response'})

  }

  checkPlayers(league:string, season:string, idTeam: string){

    const headers = new HttpHeaders().set('x-apisports-key',this.acessKey! )

    return this.http.get<any>(`${environment.urlApi}/players?season=${season}&team=${idTeam}&league=${league}`,{headers, observe : 'response'})
  }

  checkStatics(league:string, season:string, idTeam: string) {
    const headers = new HttpHeaders().set('x-apisports-key',this.acessKey! )

    return this.http.get<any>(`${environment.urlApi}/statistics?season=${season}&team=${idTeam}&league=39`,{headers, observe: 'response'})
  }



}
