import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.scss'],
})
export class ModalContentComponent implements OnInit {
  constructor(private dialogRef: MatDialogRef<ModalContentComponent>) {}

  ngOnInit(): void {}
  close() {
    this.dialogRef.close();
  }
}
