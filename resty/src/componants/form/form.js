
import './form.css';
const Form = () => {
    return (
        <div >
            <form className='form' >
                <label>
                    URL:
                    <input id='inputform' type="text" placeholder='http://api.url.here/' name="URL" />

                </label>
                <input id='btn' type="submit" value="Submit" />
            </form>
            <div className='tt'>
            <input id='btn' type="submit" value="get" />
            <input id='btn' type="submit" value="post" />
            <input id='btn' type="submit" value="put" />
            <input id='btn' type="submit" value="delete" />


            <textarea id="textArea" name="w3review" rows="4" cols="50"></textarea>
            </div>
        </div>)

}
export default Form;