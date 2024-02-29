import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-set-pin',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './set-pin.component.html',
  styleUrl: './set-pin.component.css',
})
export class SetPinComponent {
  title = 'set-pin';
  cardNumber = '4384012322339648';
  showCarsNumber = this.cardNumber.replace(
    this.cardNumber.substring(4, this.cardNumber.length - 4),
    '******'
  );
  pin: string[] = ['', '', '', '', '', ''];
  re_pin: string[] = ['', '', '', '', '', ''];
  alert: string = '';

  onInputChange(index: number) {
    if (this.pin[index].trim() !== '') {
      document.getElementById('char' + index)?.classList.add('border-blue');
    } else {
      document.getElementById('char' + index)?.classList.remove('border-blue');
    }
  }
  match(index: number) {
    if (this.re_pin[index] === this.pin[index]) {
      document.getElementById('rchar' + index)?.classList.add('border-blue');
    } else {
      document.getElementById('rchar' + index)?.classList.remove('border-blue');
    }

    if (this.pin.join() !== this.re_pin.join()) {
      this.alert = 'Mã PIN không trùng khớp';
    } else {
      this.alert = '';
    }
  }
}
