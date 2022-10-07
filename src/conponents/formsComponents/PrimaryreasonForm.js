import React from 'react'

function PrimaryreasonForm(register, errors) {
  return (
    <>
      <p>Check all that apply*</p>
                        <div className="formControl">

                            <input type="checkbox"  
                                value="improve safety"
                                {...register("primaryReason",
                                {
                                    required:{
                                        value: true,
                                        message:"Please select atlest one primary reason for request !"
                                    }
                                })}/>
                            <label for="">Improve safety</label>

                            <br/><br/>
                            <input type="checkbox"  
                            value="address new technology"
                            {...register("primaryReason",
                            {
                                required:{
                                    value: true,
                                    message:"Please select atlest one primary reason for request !"
                                }
                            })}/>
                            <label for="">Address new technology</label>

                            <br/><br/>
                            <input type="checkbox"  
                            value="correlate with other relevant standards such as the NEC, NBCC, CSA C22.3 No. 1, CSA Z32, CSA C282, etc."
                            {...register("primaryReason",
                            {
                                required:{
                                    value: true,
                                    message:"Please select atlest one primary reason for request !"
                                }
                            })}/>
                            <label for="">Correlate with other relevant standards such as the NEC, NBCC, CSA C22.3 No. 1, CSA Z32, CSA C282, etc.</label>

                            <br/><br/>
                            <input type="checkbox"  
                            value="correlate with electrical product standard requirements"
                            {...register("primaryReason",
                            {
                                required:{
                                    value: true,
                                    message:"Please select atlest one primary reason for request !"
                                }
                            })}/>                       
                            <label for="">Correlate with electrical product standard requirements</label>

                            <br/><br/>
                            <input type="checkbox" 
                            value="clarify existing wording "
                            {...register("primaryReason",
                            {
                                required:{
                                    value: true,
                                    message:"Please select atlest one primary reason for request !"
                                }
                            })}/>
                            <label for="">Clarify existing wording </label>

                            <br/><br/>
                            <input type="checkbox"                             
                            onClick = {getOtherVal}
                            value = "other"  
                            {...register("primaryReason",
                            {
                                required:{
                                    value: true,
                                    message:"Please select atlest one primary reason for request !"
                                }
                            })}
                           />
                            <label for="">Other</label> 
                            <br/>
                            <input
                                    type="text"
                                    disabled={otherEn}    
                                          
                                {
                                        ...register("otherVal",
                                    {
                                        required:{
                                            value: otherEn ? false : true,
                                            message:"Please enter your other reason !"
                                        }
                                    })
                                } />                        
                         </div>  
                         {errors.primaryReason && <div className="errorMessage">{errors.primaryReason.message}</div>} 
                         {!otherEn && errors.otherVal && <div className="errorMessage">{errors.otherVal.message}</div>} 




    </>
  )
}

export default PrimaryreasonForm
