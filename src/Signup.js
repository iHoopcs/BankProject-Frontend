export default function Signup(){
    return (
        <>
            <div className="navbar navbar-default centerNavTxt">
                <h1>React Online Banking</h1>
            </div>

            <div className='credentialForm'>
                <h3>Welcome!</h3>
                <h3>Please fill out the form to create your new account!</h3>
                <form className="form-horizontal">
                    <div className="row">
                        <input type={'text'} className='form-control'  placeholder="First Name" name="fName"/>
                        <br></br>
                        <input type={'text'} className='form-control'  placeholder="Last Name" name="lName"/>
                        <br></br>
                        <input type={'text'} className='form-control'  placeholder="Email" name="email"/>
                        <br></br>
                        <input type={'text'} className='form-control'  placeholder="Account Username" name="username"/>
                        <br></br>
                        <input type={'text'} className='form-control' placeholder="Account Password" name="password"/>
                        <br></br>
                        <button type="submit" className="btn btn-default">Submit</button> 
                        <button type="button" className="btn btn-default"><a href="/">Have an account?</a></button>
                    </div>
                </form>
            </div>
            
        </>
    );
}