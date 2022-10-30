
import './index.css'

const HomeProfile =props=>{
    const {list}=props
    const {photo,
    profileId,
    maskedName,
    Age,
    Salary,
    Cast,
    Occupation,
    partnerSalaryPreference}=list
    return(
            <div className='divEle2'>
                <img className="imageEle" src={profileId}/>
            <p>{maskedName}</p>
            <p>{Age}</p>
            
            </div>
            
            

    )
}

export default HomeProfile