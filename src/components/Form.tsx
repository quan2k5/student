import React, { useState } from 'react'
import '../style/Form.css'
interface Error{
    name:string,
    message:string,
}
interface Student{
    name:string,
    id:string,
    email:string,
    birth:string,
}
export default function Form(){
    const [checked,setChecked]=useState<Error[]>([]);
    const [student,setStudent]=useState<Student>({
        name:'',
        id:'',
        email:'',
        birth:'',
    });
    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        let name=e.target.name;
        let value=e.target.value;
        setStudent({...student,[name]:value});
    }
    const isRequired=(nameInput:string)=>{
        return({
          nameInput:nameInput,
          check:(value:string)=>{
            return value!==''?true:false;
          }
        });
    }
    const isCheckIdStudent=(nameInput:string)=>{

    }
    const isValidateEmail=(nameInput:string)=>{
        return{
            paramentor:nameInput,
            test:function(value:string){
                let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return emailRegex.test(value)? undefined:"Dia chi email ko kop le";
            },
        }
    }
    const isCheckEmailStudent=(nameInput:string)=>{
        return{
            paramentor:nameInput,
            test:function(value:string){
                let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return emailRegex.test(value)? undefined:"Dia chi email bi trung";
            },
        }
    }
    const validate
    const validateAllForm=()=>{
        let rules={
            id:[isRequired('id'),isCheckIdStudent('id')],
            name:[isRequired('name'),],
            email:[isRequired('email'),isValidateEmail('email'),isCheckEmailStudent('email')],
            birth:[isRequired('birth')],
        }
        for (let key in rules){
            validate
            

        }


    }
    const handleClickForm=(e:any)=>{
        e.preventDefault();


    }
  return (
    <div className='modal'>
        <form action="">
            <h3>Thêm mới sinh viên</h3>
            <div className='input-box'>
                <label htmlFor="">Mã sinh viên</label>
                <input name='id' type="text" value={student.id} onChange={handleChange}  />
            </div>
            <div className='input-box'>
                <label htmlFor="">Tên sinh viên</label>
                <input  name='name' type="text" value={student.name} onChange={handleChange} />
            </div>
            <div className='input-box'>
                <label htmlFor="">Ngày sinh</label>
                <input  name='birth' type="date" value={student.birth} onChange={handleChange} />
            </div>
            <div className='input-box'>
                <label htmlFor="">Email</label>
                <input  name='email' type="date" value={student.email} onChange={handleChange} />
            </div>
            <div className='button-box'>
                <button>Hủy</button>
                <button>Thêm mới</button>
            </div>
        </form>
    </div>
  )
}
