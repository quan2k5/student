import React from 'react'
import '../style/StudentItem.css'
export default function Student() {
  return (
    <tr className='student-tr'>
        <td>1</td>
        <td>SV0002</td>
        <td>Nguyễn Văn A</td>
        <td>21/02/2005</td>
        <td>lanhquan130@gmail.com</td>
        <td><div className='active-status'>Đang hoạt động</div></td>
        <td>
            <button>Chặn</button>
            <button>Sửa</button>
            <button>Xóa</button>
        </td>
    </tr>
  )
}
