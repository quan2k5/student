import React from 'react'
import '../style/Table.css'
import Student from './Student'
export default function StudentList() {
  return (
    <table>
        <tr className='title-tr'>
            <td>STT</td>
            <td>Mã sinh viên</td>
            <td>Tên sinh viên</td>
            <td>Ngày sinh</td>
            <td>Email</td>
            <td>Trạng thái</td>
            <td>Chức năng</td>
        </tr>
        <tbody>
            <Student></Student>
        </tbody>
    </table>
  )
}
