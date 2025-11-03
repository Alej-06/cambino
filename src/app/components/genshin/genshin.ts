import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Genshin } from '../../model/genshinInterface'
import { GenshinService } from '../../services/genshin-service';

@Component({
  selector: 'app-genshin',
  imports: [CommonModule],
  templateUrl: './genshin.html',
  styleUrl: './genshin.css',
  standalone: true
})
export class GenshinComponent {

  chars: Genshin[] = []

  constructor (private oGenshinService: GenshinService){ }

  ngOnInit() {
    this.getAllChar()
  }

  getAllChar(){
    this.oGenshinService.getAllChar().subscribe((chars: Genshin[]) => {
      console.log(chars);
      this.chars = chars;
    });
  }
}


