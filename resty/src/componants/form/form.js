
import './form.css';

const Form = (props) => {
    
    return (
        <div >
            <form className='form' >
                <label>
                    URL:
                    <input id='inputform' type="text" placeholder='http://api.url.here/' name="URL" onChange={e => props.onSubmit(e.target.value)}/>

                </label>
                <button id="btn" type="submit" value="go" onClick={props.onSubmit} >GO</button>
            </form>
            <div className='tt'>
            <button id='btn' type="submit" value="get" onClick={props.changeMethode} >get</button>
            <button id='btn' type="submit" value="post" onClick={props.changeMethode} >post</button>
            <button id='btn' type="submit" value="put" onClick={props.changeMethode} >put</button>
            <button id='btn' type="submit" value="delete" onClick={props.changeMethode}>delete</button>


            <textarea id="textArea" name="w3review" rows="4" cols="50"></textarea>
            </div>
            <hr/>
        </div>
        )

}
export default Form;