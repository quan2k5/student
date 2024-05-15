import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
 import './App.css'
import Header from './components/Header'
import StudentList from './components/StudentList'
interface Student{
  name:string,
  id:string,
  email:string,
  birth:string,
}
function App() {
  let [studentList,setStudentList]=useState<Student[]>(function(){
    let studentList: Student[] = JSON.parse(localStorage.getItem('students') || '[]');
    if(studentList.length===0){
        return [];
    }
    return studentList;
  });
  const isRequired=(value:string,nameInput:string)=>{
    return({
      nameInput:nameInput,
      check:()=>{
        return value!==''?true:false;
      }
    });
  }
  const chec
  const validateAllForm=(item:Student)=>{
    let rules={
      name:[isRequired(item.name,'name')],
      email:[isRequired(item.email,'email')],

    }

  }
  const handleClickForm=(student:Student)=>{
    
  }
  return (
    <div>
      <Header></Header>
      <StudentList></StudentList>
    </div>
  )
}

export default App
