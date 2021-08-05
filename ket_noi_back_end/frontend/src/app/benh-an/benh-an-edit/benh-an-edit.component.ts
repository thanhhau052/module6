import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {BacSi} from '../../model/benh-an/bacSi';
import {BenhNhanService} from '../../service/benh-nhan/benh-nhan';
import {BacSiService} from '../../service/bac-si/bac-si';

@Component({
  selector: 'app-benh-an-edit',
  templateUrl: './benh-an-edit.component.html',
  styleUrls: ['./benh-an-edit.component.css']
})
export class BenhAnEditComponent implements OnInit {
  editForm: FormGroup;
  id: number;
  bacSis: BacSi[];

  constructor(private benhNhanService: BenhNhanService,
              private activatedRoute: ActivatedRoute,
              private bacSiService: BacSiService,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getBenhNhan(this.id);
    });
  }

  ngOnInit() {
    this.getAll();
  }

  getBenhNhan(id: number) {
    return this.benhNhanService.findById(id).subscribe(benhNhan => {
      this.editForm = new FormGroup({
          id: new FormControl(benhNhan.id),
          maBenhAn: new FormControl(benhNhan.maBenhAn, [Validators.required, Validators.pattern('^(BA)-[0-9]{4}$')]),
          maBenhNhan: new FormControl(benhNhan.maBenhNhan, [Validators.required, Validators.pattern('^(BN)-[0-9]{4}$')]),
          ten: new FormControl(benhNhan.ten, [Validators.required, Validators.pattern('[A-ZẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴ][a-zàáâãèéêìíòóôõùúăđĩũơưăạảấầẩẫậắằẳẵặẹẻẽềềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹ]+(([ ][A-ZẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴ][a-zàáâãèéêìíòóôõùúăđĩũơưăạảấầẩẫậắằẳẵặẹẻẽềềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹ]+)|([ ][A-ZẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴ]))+')]),
          ngayVao: new FormControl(benhNhan.ngayVao, [Validators.required]),
          ngayRa: new FormControl(benhNhan.ngayRa, [Validators.required]),
          liDo: new FormControl(benhNhan.liDo, [Validators.required]),
          phuongPhap: new FormControl(benhNhan.phuongPhap, [Validators.required]),
          bacSi: new FormControl(benhNhan.bacSi, [Validators.required])
        });
    });
  }

  getAll() {
    this.bacSiService.getAll().subscribe(bacSis => {
      this.bacSis = bacSis;
    });
  }

  update(id: number) {
    if (this.editForm.valid) {
      const benhNhan = this.editForm.value;
      this.benhNhanService.update(id, benhNhan).subscribe(() => {
        this.router.navigate(['/']);
        alert('Cập nhật thành công');
      }, e => {
        console.log(e);
      });
    }
  }

  compareFn(c1: any, c2: any): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }

  validDate(control: AbstractControl) {
    const v = control.value;
    const start = new Date(v.ngayNhapVien);
    const end = new Date(v.ngayXuatVien);
    if (end.getTime() - start.getTime() < 0) {
      return {validDate: true};
    }
    return null;
  }

}
