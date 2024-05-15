import React, { useState } from 'react'
import '../style/Header.css'
import Form from './Form';
export default function Header() {
    const [checked,setChecked]=useState<boolean>(false);    
  return (
    <>
        {checked?<Form></Form>:<></>}
        <div className='first-header'>
            <h2>Quản lý sinh viên</h2>
            <button onClick={()=>setChecked(!checked)}>Thêm mới sinh viên</button>
        </div>
        <div className='second-header'>
            <select name="" id="">
                <option selected value="">Không sắp xếp</option>
                <option value="">Sắp xếp theo tuổi</option>
            </select>
            <input type="text" placeholder='Tìm kiếm từ khóa theo tên hoạc email?' />
        </div>
    </>
  )
}
