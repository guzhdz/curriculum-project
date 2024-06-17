import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  aspects: any[] = [
    {
      icon: "account_circle",
      title: "About me",
      texts: ["Computer Engineering Graduate and Software Development Technologist. Aspiring Senior Web development Programmer and UI Designer, always willing to obtain new knowledge and use new technological tools. Willing to be part of a team and put in all the effort to create functional and high quality applications, websites and software."]
    },
    {
      icon: "videogame_asset",
      title: "Hobbies",
      texts: [
        "I like to play videogames, watch movies and series. I also love animation, animated movies, series or even anime. I love to play with other people, family, firends, ethier videogames or board games. I like to talk a lot about my hobbies or thing i love, but i also like to hear about other people’s interests."
      ]
    },
    {
      icon: "flag",
      title: "Goals",
      texts: [
        "Learn new things about programming, software development, UI/UX design and everything related to my carrer.",
        "Design and create high quality apps that users like.",
        "Travel to another country (Japan, Italy, Peru, USA)."
      ]
    }
  ];
}
