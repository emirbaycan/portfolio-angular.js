import { Component, OnInit } from "@angular/core";
import * as AOS from "aos";
import { Title, Meta } from "@angular/platform-browser";
import { LanguageService } from "src/app/services/language/language.service";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
	title = "emirbaycan-portfolio";

	constructor(
		private titleService: Title,
		private metaService: Meta,
		private languageService: LanguageService
	) {}
	ngOnInit(): void {
		this.languageService.initLanguage();

		this.titleService.setTitle(
			"Emir Baycan | LAMP, MEAN, MERN Stacks Developer | Software Developer"
		);
		this.metaService.addTags([
			{ 
				name: "keywords",
				content:
					"Frontend, Backend, MEAN Stack Developer , MERN Stack Development , LAMP Stack Developer, Software Engineer, Software Developer, Web Developer, software, developer",
			},
			{
				name: "description",
				content:
					"As a software engineer with expertise in MEAN, MERN and LAMP stacks, I have a comprehensive understanding of full-stack web development. My strong foundation in JavaScript allows me to effectively work with front-end technologies such as Angular and React, as well as back-end technologies such as Node.js, Express and PHP.",
			},
		]);

		AOS.init();
	}
}
