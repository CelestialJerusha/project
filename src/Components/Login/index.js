import './index.css'
import {useState} from 'react'

    const Login=()=> {
        const [data, setData] = useState({
            fullname:'',
            email:'',
            password:'',
        });

        const onChangeInput = (event) =>{
            const {name, value } = event.target;

            setData((preVal) => {
                return {
                    ...preVal,
                    [name]: value,
                };
            });
        };

        const onSubmitForm = (event) => {
            event.preventDefault();
            alert(
                    `welcome ${data.fullname}`
            );
        };

    return(
        <div className='container'>
            <div className='form_container'>
            <form className='form_list' onSubmit={onSubmitForm}>
            <label className='form_label'>
                FullName
                <input className='input_field' name='fullname' value={data.fullname} onChange={onChangeInput} type="text" placeholder="Enter your name" />
            </label>
            <label className='form_label'>
                Email address
                <input className='input_field' name='email' value={data.email} onChange={onChangeInput} type="text" placeholder="name@example.com" />
            </label>
            <label className='form_label'>
                Password
                <input className='input_field' name='password' value={data.password} onChange={onChangeInput} type="password" placeholder="password" />
            </label>
            <button className='submit_btn' type='submit'>Signup</button>
        </form> 
            </div>
        </div>
    )
}

export default Login