import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import {rulesComponent} from './rules/rules.component'
import bootstrap from 'bootstrap';

type Choice = 'rock' | 'paper' | 'scissor';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, rulesComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  openModal() {
    const modalElement = document.getElementById('myModal');
    if (modalElement) {
      const modal = new (window as any).bootstrap.Modal(modalElement);
      modal.show();
    }
  }



  score: number = 0;
  choicesForPrint: Record<Choice, string> = {
    rock: '<div class="choice w-24 h-24 rounded-full border-8 border-yellow-500 bg-white flex justify-center items-center"><img src="images/icon-rock.svg" alt="Rock"></div>',
    paper: '<div class="choice w-24 h-24 rounded-full border-8 border-blue-500 bg-white flex justify-center items-center"><img src="images/icon-paper.svg" alt="Paper"></div>',
    scissor: '<div class="choice w-24 h-24 rounded-full border-8 border-red-500 bg-white flex justify-center items-center"><img src="images/icon-scissors.svg" alt="Scissors"></div>',
  };
  choices: Choice[] = ['rock', 'paper', 'scissor'];
  userChoice: Choice = 'rock';
  cpuChoice: Choice = this.choices[Math.floor(Math.random() * this.choices.length)];
  result: string = '';
  gameOver: boolean = false;

  play() {
    if (this.userChoice === this.cpuChoice) {
      this.result = "It's a tie";
    } else if (
      (this.userChoice === 'rock' && this.cpuChoice === 'scissor') ||
      (this.userChoice === 'paper' && this.cpuChoice === 'rock') ||
      (this.userChoice === 'scissor' && this.cpuChoice === 'paper')
    ) {
      this.result = "It's a win";
      this.score += 1;
    } else {
      this.result = "It's a loss";
      this.score -= 1;
    }

    this.gameOver = true;
  }

  rockChoice() {
    this.userChoice = 'rock';
    this.cpuChoice = this.choices[Math.floor(Math.random() * this.choices.length)];
    this.play();
  }

  paperChoice() {
    this.userChoice = 'paper';
    this.cpuChoice = this.choices[Math.floor(Math.random() * this.choices.length)];
    this.play();
  }

  scissorChoice() {
    this.userChoice = 'scissor';
    this.cpuChoice = this.choices[Math.floor(Math.random() * this.choices.length)];
    this.play();
  }

  resetGame() {
    this.userChoice = 'rock';
    this.cpuChoice = this.choices[Math.floor(Math.random() * this.choices.length)];
    this.result = '';
    this.gameOver = false;
  }


}
