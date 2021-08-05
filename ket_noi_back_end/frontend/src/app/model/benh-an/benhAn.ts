import {BacSi} from './bacSi';

export interface BenhAn {
  id?: number;
  maBenhAn?: string;
  maBenhNhan?: string;
  ten?: string;
  ngayVao?: string;
  ngayRa?: string;
  liDo?: string;
  phuongPhap?: string;
  bacSi?: BacSi;
}

