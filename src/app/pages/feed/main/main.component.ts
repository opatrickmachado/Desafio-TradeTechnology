import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { TeamsService } from 'src/app/services/teams/teams.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit{
  
  // conjunto de arrays com retorno de requisições
  arrayCountries: any[] =[]
  arrayLeagues: any[]=[]
  arraySeasons: any[]=[]
  arrayTeams: any[]=[]
  arrayPlayers: any[]=[]
  statusTeam : string ='countries'

  //conjunto de opções selecionadas
  countrie: string =''
  league: string =''
  season: string=''
  team: string=''

  constructor(private http: HttpClient, private teamsService: TeamsService){}

  ngOnInit(): void {
    this.teamsService.checkCountrie().subscribe(
      (res)=> {
        
        this.arrayCountries = res.body.response
      }
        ,
      (error) => {
        console.log('Houve algum erro')
      }
    )
  }

  chooseCountrie(countrie : MouseEvent):void{
    const element = countrie.currentTarget as HTMLDivElement
    const idElement = element.id

    this.countrie = idElement
    this.teamsService.checkLeague().subscribe(
      (res) => {
        this.arrayLeagues = res.body.response.filter((obj : any) => obj.country.name === idElement)
        this.statusTeam = 'leagues'
      }
    )
    
  }

  chooseLeague(league: MouseEvent):void{
    const element = league.currentTarget as HTMLDivElement
    const idElement = element.id
    this.league = idElement

    this.teamsService.checkSeason().subscribe(
      res=>{
        this.arraySeasons = res.body.response
        this.statusTeam = 'seasons'

      }
    )

  }

  chooseSeason(season: MouseEvent):void{
    const element = season.currentTarget as HTMLDivElement
    const idElement = element.id
    this.season = idElement

    this.teamsService.checkTeams(this.league, this.season).subscribe(
      res=>{
        this.arrayTeams = res.body.response
        this.statusTeam ='teams'
      }
    )
  }

  chooseTeam(team:MouseEvent):void{
    const element = team.currentTarget as HTMLDivElement
    const idElement = element.id
    this.team = idElement

    this.teamsService.checkStatics(this.league,this.season,this.team).subscribe(
      res=>{
        console.log(res)
      }
    )

    this.teamsService.checkPlayers(this.league,this.season,this.team).subscribe(
      res =>{
        this.arrayPlayers = res.body.response
        this.statusTeam ='players'
        console.log(this.arrayPlayers);
      }
    )
  }
}
