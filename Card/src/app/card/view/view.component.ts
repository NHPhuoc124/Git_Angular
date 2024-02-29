import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [NgIf],
  templateUrl: './view.component.html',
  styleUrl: './view.component.css',
})
export class ViewComponent {
  title = 'View Card';
  seconds = 10;
  timeout = false;
  interval: any;
  startCountDown() {
    this.interval = setInterval(() => {
      if (this.seconds > 0) {
        this.seconds--;
      } else {
        this.timeout = true;
        clearInterval(this.interval);
      }
    }, 1000);
  }

  ngOnInit() {
    this.startCountDown();
  }

  closeTab() {
    this.timeout = false;
  }

  copy() {
    let text = document.getElementById('card-number')?.textContent || '';
    let input = document.createElement('input'); // tạo thẻ input giả
    document.body.appendChild(input); // gán thẻ đó vào bất kì đâu (sao cho không bị ảnh hướng layout nào là được)
    input.value = text; // gán giá trị vào input
    input.select(); // focus vào input
    document.execCommand('copy'); // dùng lệnh này để copy text từ input
    input.remove(); // sau đó xóa thẻ
  }
}
