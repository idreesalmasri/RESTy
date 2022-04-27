
import './form.css';
const Form = (props) => {
    return (
        <div >
            <form className='form' >
                <label>
                    URL:
                    <input id='inputform' type="text" placeholder='http://api.url.here/' name="URL" />

                </label>
                <button id="btn" type="submit" value="go" onClick={props.onSubmit} >GO</button>
            </form>
            <div className='tt'>
            <button id='btn' type="submit" value="get" >get</button>
            <button id='btn' type="submit" value="post" >post</button>
            <button id='btn' type="submit" value="put" >put</button>
            <button id='btn' type="submit" value="delete" >delete</button>


            <textarea id="textArea" name="w3review" rows="4" cols="50"></textarea>
            </div>
            <hr/>
        </div>
        )

}
export default Form;