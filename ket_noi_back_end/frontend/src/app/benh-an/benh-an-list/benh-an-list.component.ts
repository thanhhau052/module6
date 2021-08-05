import {Component, OnInit} from '@angular/core';

import {MatDialog} from '@angular/material/dialog';

import {DeleteComponent} from '../../modal/delete/delete.component';
import {BacSi} from '../../model/benh-an/bacSi';
import {BenhNhanService} from '../../service/benh-nhan/benh-nhan';
import {BacSiService} from '../../service/bac-si/bac-si';
import {BenhAn} from '../../model/benh-an/benhAn';

@Component({
  selector: 'app-benh-an-list',
  templateUrl: './benh-an-list.component.html',
  styleUrls: ['./benh-an-list.component.css']
})
export class BenhAnListComponent implements OnInit {
  benhNhans: BenhAn[] = [];
  p = 1;

  bacSis: BacSi[];

  constructor(private benhNhanService: BenhNhanService,
              public bacSiService: BacSiService,
              public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.getAll();

  }

  getAll() {
    this.benhNhanService.getAll().subscribe(benhNhans => {
      this.benhNhans = benhNhans;
      this.bacSiService.getAll().subscribe(bacSis => {
        this.bacSis = bacSis;
      });
    });
  }

  onDeleteHandler(benhNhan: BenhAn): void {
    const dialogRef = this.dialog.open(DeleteComponent, {
      width: '250px',
      data: benhNhan
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result) {
        this.benhNhanService.delete(benhNhan.id).subscribe(next => {
          this.getAll();
        });
      }
    });
  }

}
