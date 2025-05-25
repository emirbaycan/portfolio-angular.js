import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  language: "tr" | "en";

  constructor(
    public translateService: TranslateService,
    private location: Location,
  ) {}

  initLanguage(){
    let languages = ['en','tr']
    this.translateService.addLangs(languages)
    let language = navigator.language || (navigator as any).userLanguage;
    if (languages.indexOf(language) === -1){
      language = 'en';
    }      
    this.translateService.setDefaultLang(language)
 
    // Change the URL without navigate:
    this.location.go(language)

    this.language=language
  }

  changeLanguage(language){
    this.translateService.setDefaultLang(language)
    this.location.go(language)
    this.language=language
  }
}
