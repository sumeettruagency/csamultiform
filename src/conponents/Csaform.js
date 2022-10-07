import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {formTitle} from "./Costomdata" 

function Csaform() {

    const [formStep, setFormStep] = useState(0);
    const [photoPreview, setPhotoPreview] = useState("");
    const {watch, register, formState:{errors, isValid}, setValue, handleSubmit } = useForm({mode : "all"})
    const[otherEn, setOtherEn] = useState(true);
    const[administrativeId, setAdministrativeId] = useState(true);
    const[tabId, setTabId] = useState(true);
    const [impactEnfoVal, setImpactEnfoVal ] = useState("No");
    

      React.useEffect(() => {
        const subscription = watch((value, { name, type }) => {
            if(name === "impactEnforcement" ){
                if(value[name] === 'Yes' && type === 'change'){
                    setImpactEnfoVal("Yes")
                }else{
                    setImpactEnfoVal("No")
                }                
            } 
            else if(name === 'formImage'){
                handleUpload(value.formImage)
            }
        });
        return () => subscription.unsubscribe();
      }, [watch]);

    const getOtherVal = (e) =>{
        if(e.target.checked) {
            setOtherEn(false)
        } else{         
            setValue('otherVal', '',{shouldValidate:false})
            setOtherEn(true)
        } 
    }

    const administrativeFun = (e) =>{
        if(e.target.checked) {
            setAdministrativeId(false)
        } else{         
            setAdministrativeId(true)
        } 
    }

    const reviseAndNewCont =(e) =>{
        if(e.target.value === "revise existing content") {
            setTabId(true)
        } else{         
            setTabId(false)
        } 
    }

const getAllFormData = (valueForm) => {
    const result = watch()?.[valueForm]; 
    return result;
}
   
const handleUpload = (files) => {
    const file = files[0];
    setPhotoPreview( file.name )
  };

  const onSubmit = async data => {;
  setFormStep((cuurent)=> cuurent + 1);
  console.log(data);
}; 
  return (
    <div className='container'>
        <div className='csaForm'>
            <div className='csaFormHeader'>
                <h1 className='csaFormTitle'>{formTitle[formStep]}</h1>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='csaFormBody'>

{/* 1st section  */}
                    {formStep === 0 && <section>
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
                                <textarea rows="4" cols="50" disabled={otherEn} 
                                                       { ...register("otherVal",
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
                    </section>}    

{/* 2nd section  */}
                    {formStep === 1 && <section>
                        <p>The CE Code Policy Advisory Committee is a forum where the Provind
                            government policy priorities intended to inform development of the Cal
                            more policy priorities supports harmonisation of regulatory reference o
                            timing.
                            Policy priorities for the current code cycle are listed below, along with
                            check box, including a check box for proposals that do not align with a
                            This proposal is intended to align with the following policy priority(s):</p>
                            <div className="formTable">
                                <table>
                                    <tr> 
                                        <th>Policy Priority</th>
                                        <th>Policy Priority Statement</th>
                                        <th>Examples to illustrate the Policy Priority</th>
                                    </tr>

                                    <tr>
                                        <td>
                                        <input type="checkbox"  
                                            value="affordable housing"
                                            {...register("policyPriorities",
                                            {
                                                required:{
                                                    value: true,
                                                    message:"Please select atlest one policy priorities !"
                                                }
                                            })}/>
                                            <label for="">Affordable Housing</label>
                                        </td>
                                        <td>
                                            <p style={{ width: "500px", textAlign: "initial", padding: "0px 50px 0 50px" }}>
                                            Housing affordability is a critical issue across Canada. Prices for renting and buying have surged past local
                                            incomes in many areas, leaving people paying an excessive portion of their wages towards their homes.
                                            </p>
                                        </td>
                                        <td>
                                            <ul style={{ width: "200px", textAlign: "initial" }}>
                                                <li>
                                                    Consider alternate requirements to facilitate the construction of secondary suites, particularly in
                                                    existing buildings where much of the electrical system is already in place.
                                                </li>
                                            </ul>
                                        </td>
                                    </tr>



                                    <tr>
                                        <td>
                                        <input type="checkbox"  
                                            value="affordability"
                                            {...register("policyPriorities",
                                            {
                                                required:{
                                                    value: true,
                                                    message:"Please select atlest one policy priorities !"
                                                }
                                            })}/>
                                            <label for="">Affordability</label>
                                        </td>
                                        <td>
                                            <p style={{ width: "500px", textAlign: "initial", padding: "0px 50px 0 50px" }}>
                                            Housing affordability is a critical issue across Canada. Prices for renting and buying have surged past local
                                            incomes in many areas, leaving people paying an excessive portion of their wages towards their homes.
                                            </p>
                                        </td>
                                        <td>
                                            <ul style={{ width: "200px", textAlign: "initial" }}>
                                                <li>
                                                    Consider alternate requirements to facilitate the construction of secondary suites, particularly in
                                                    existing buildings where much of the electrical system is already in place.
                                                </li>
                                            </ul>
                                        </td>
                                    </tr>


                                    <tr>
                                        <td>
                                        <input type="checkbox"  
                                            value="maintenance"
                                            {...register("policyPriorities",
                                            {
                                                required:{
                                                    value: true,
                                                    message:"Please select atlest one policy priorities !"
                                                }
                                            })}/>
                                            <label for="">Maintenance</label>
                                        </td>
                                        <td>
                                            <p style={{ width: "500px", textAlign: "initial", padding: "0px 50px 0 50px" }}>
                                            Housing affordability is a critical issue across Canada. Prices for renting and buying have surged past local
                                            incomes in many areas, leaving people paying an excessive portion of their wages towards their homes.
                                            </p>
                                        </td>
                                        <td>
                                            <ul style={{ width: "200px", textAlign: "initial" }}>
                                                <li>
                                                    Consider alternate requirements to facilitate the construction of secondary suites, particularly in
                                                    existing buildings where much of the electrical system is already in place.
                                                </li>
                                            </ul>
                                        </td>
                                    </tr>


                                    <tr>
                                        <td>
                                        <input type="checkbox"  
                                            value="diversity and inclusion"
                                            {...register("policyPriorities",
                                            {
                                                required:{
                                                    value: true,
                                                    message:"Please select atlest one policy priorities !"
                                                }
                                            })}/>
                                            <label for="">Diversity and Inclusion</label>
                                        </td>
                                        <td>
                                            <p style={{ width: "500px", textAlign: "initial", padding: "0px 50px 0 50px" }}>
                                            Housing affordability is a critical issue across Canada. Prices for renting and buying have surged past local
                                            incomes in many areas, leaving people paying an excessive portion of their wages towards their homes.
                                            </p>
                                        </td>
                                        <td>
                                            <ul style={{ width: "200px", textAlign: "initial" }}>
                                                <li>
                                                    Consider alternate requirements to facilitate the construction of secondary suites, particularly in
                                                    existing buildings where much of the electrical system is already in place.
                                                </li>
                                            </ul>
                                        </td>
                                    </tr>


                                    <tr>
                                        <td>
                                        <input type="checkbox"  
                                            value="innovation new technology energy efficiency"
                                            {...register("policyPriorities",
                                            {
                                                required:{
                                                    value: true,
                                                    message:"Please select atlest one policy priorities !"
                                                }
                                            })}/>
                                            <label for="">Innovation / New technology Energy efficiency</label>
                                        </td>
                                        <td>
                                            <p style={{ width: "500px", textAlign: "initial", padding: "0px 50px 0 50px" }}>
                                            Housing affordability is a critical issue across Canada. Prices for renting and buying have surged past local
                                            incomes in many areas, leaving people paying an excessive portion of their wages towards their homes.
                                            </p>
                                        </td>
                                        <td>
                                            <ul style={{ width: "200px", textAlign: "initial" }}>
                                                <li>
                                                    Consider alternate requirements to facilitate the construction of secondary suites, particularly in
                                                    existing buildings where much of the electrical system is already in place.
                                                </li>
                                            </ul>
                                        </td>
                                    </tr>


                                    <tr>
                                        <td>
                                        <input type="checkbox"  
                                            value="resilience"
                                            {...register("policyPriorities",
                                            {
                                                required:{
                                                    value: true,
                                                    message:"Please select atlest one policy priorities !"
                                                }
                                            })}/>
                                            <label for="">Resilience</label>
                                        </td>
                                        <td>
                                            <p style={{ width: "500px", textAlign: "initial", padding: "0px 50px 0 50px" }}>
                                            Housing affordability is a critical issue across Canada. Prices for renting and buying have surged past local
                                            incomes in many areas, leaving people paying an excessive portion of their wages towards their homes.
                                            </p>
                                        </td>
                                        <td>
                                            <ul style={{ width: "200px", textAlign: "initial" }}>
                                                <li>
                                                    Consider alternate requirements to facilitate the construction of secondary suites, particularly in
                                                    existing buildings where much of the electrical system is already in place.
                                                </li>
                                            </ul>
                                        </td>
                                    </tr>


                                    <tr>
                                        <td>
                                        <input type="checkbox"  
                                            value="safety"
                                            {...register("policyPriorities",
                                            {
                                                required:{
                                                    value: true,
                                                    message:"Please select atlest one policy priorities !"
                                                }
                                            })}/>
                                            <label for="">Safety</label>
                                        </td>
                                        <td>
                                            <p style={{ width: "500px", textAlign: "initial", padding: "0px 50px 0 50px" }}>
                                            Housing affordability is a critical issue across Canada. Prices for renting and buying have surged past local
                                            incomes in many areas, leaving people paying an excessive portion of their wages towards their homes.
                                            </p>
                                        </td>
                                        <td>
                                            <ul style={{ width: "200px", textAlign: "initial" }}>
                                                <li>
                                                    Consider alternate requirements to facilitate the construction of secondary suites, particularly in
                                                    existing buildings where much of the electrical system is already in place.
                                                </li>
                                            </ul>
                                        </td>
                                    </tr>


                                    <tr>
                                        <td>
                                        <input type="checkbox"  
                                            value="this proposal is not intended to align with any of the policy priorities."
                                            {...register("policyPriorities",
                                            {
                                                required:{
                                                    value: true,
                                                    message:"Please select atlest one policy priorities !"
                                                }
                                            })}/>
                                            <label for="">This proposal is not intended to align with any of the policy priorities.</label>
                                        </td>
                                    </tr>                                    
                                </table>
                                {errors.policyPriorities && <div className="errorMessage">{errors.policyPriorities.message}</div>}
                            </div>
                    </section>} 

{/* 3rd section  */}
                    {formStep === 2 && <section>
                        <div className="imactInfo">
                            <p>Proposals to amend the Code are submitted to improve safety, clarity, or for other reasons as described under "primary reason for request above. If accepted, a proposed amendment to the CE Code may also result in:</p>
                            <ul>
                                <li>an increase or reduction in the cost of the installation,</li>
                                <li>an impact on regulatory authorities enforcing the Code when referenced in legislation,</li>
                                <li>increased benefits to users of the Code or the public, or</li>
                                <li>an impact on other Regulations, Codes or Standards.</li>
                            </ul>
                            <strong>Please answer the following questions. A "Yes" answer will open a comment field. Qualitative or quantifiable impac information should be entered directly or attached separately.</strong>
                        </div>
                        <div className="impactFormField">
                        <br/><br/>
                        <label>Will there be impact on enforcement?*</label><br/>
                        <select {...register("impactEnforcement", {
                                                    required: {
                                                        value: true,
                                                        message:"This field is required"    
                                                    }
                                                })} >

                            <option value=""> Please Select</option>
                            <option> Yes </option>
                            <option> No </option>
                         </select>
                         {errors.impactEnforcement && <div className="errorMessage">{errors.impactEnforcement.message}</div>}
                        {impactEnfoVal === "Yes" && <>
                        <br/>
                        <label>Comments*</label><br/>
                        <textarea rows="4" cols="50"
                            {...register("impactEnforcementYes", {
                                required: {
                                    value: true,
                                    message:"This field is required"    
                                }
                            })}
                        />
                        {errors.impactEnforcementYes && <div className="errorMessage">{errors.impactEnforcementYes.message}</div>}</>}

                         <br/><br/>
                        <label>Will there be measureable benefits?*</label><br/>
                        <select {...register("measureablebenefits", {
                                                    required: {
                                                        value: true,
                                                        message:"This field is required"    
                                                    }
                                                })} >

                            <option value=""> Please Select</option>
                            <option> Yes </option>
                            <option> No </option>
                         </select>
                         {errors.measureablebenefits && <div className="errorMessage">{errors.measureablebenefits.message}</div>}                      

                         <br/><br/>
                        <label>Will there be an impact on other requlations, codes or standards?*</label><br/>
                        <select {...register("impactStandards", {
                                                    required: {
                                                        value: true,
                                                        message:"This field is required"    
                                                    }
                                                })} >

                            <option value=""> Please Select</option>
                            <option> Yes </option>
                            <option> No </option>
                         </select>
                         {errors.impactStandards && <div className="errorMessage">{errors.impactStandards.message}</div>}


                         <br/><br/>
                        <label>Will there be impact on costs?*</label><br/>
                        <select {...register("impactCosts", {
                                                    required: {
                                                        value: true,
                                                        message:"This field is required"    
                                                    }
                                                })} >

                            <option value=""> Please Select</option>
                            <option> Yes </option>
                            <option> No </option>
                         </select>
                         {errors.impactCosts && <div className="errorMessage">{errors.impactCosts.message}</div>}
                         <br/>
                         <p>Additional impact assessment materials Optional, Maximum upload file size: 10 MB</p>
                         <input 
                          {...register('formImage', { required: {
                                                        value: true,
                                                        message:"This field is required"    
                                                    },
                                                    validate: {
                                                        lessThan10MB: (files) => files[0]?.size < 30000 || "Max 30kb",
                                                        acceptedFormats: (files) =>
                                                          ["application/pdf", "application/docx"].includes(
                                                            files[0]?.type
                                                          ) || "Only PDF or Docx"
                                                      }
                                                 })}
                                                 type="file"/>
                        </div>
                        {errors.formImage && <div className="errorMessage">{errors.formImage.message}</div>}
                    </section>} 

{/* 4th section  */}
                    {formStep === 3 && <section>
                        <div className="tabbingForm">
                            <h2>Section 2- General Rules</h2>
                            <h2>Administrative</h2>
                            <div className="administrative" style={{textAlign: "justify", marginLeft: "500px"}}>
                                <input type="checkbox"  
                                        value="2-000 authority for rules"
                                        onClick={ administrativeFun }
                                        {...register("administrative",
                                        {
                                            required:{
                                                value: true,
                                                message:"Please select atlest one administrative !"
                                            }
                                        })}/>
                                    <label for="">2-000 Authority for Rules</label>

                                    {!administrativeId  && <>
                                        <table>
                                            <tr>
                                                <td>
                                                <input type="radio"  
                                                value="revise existing content"
                                                checked={tabId}
                                                onClick={reviseAndNewCont}
                                                {...register("reviseAndNewCon",
                                                {
                                                    required:{
                                                        value: true,
                                                        message:"Please select atlest one administrative !"
                                                    }
                                                })}/><label for="">Revise Existing Content</label>

                                                </td>
                                                <td>
                                                    <input type="radio"  
                                                    value="add new content"
                                                    onClick={reviseAndNewCont}
                                                    {...register("reviseAndNewCon",
                                                    {
                                                        required:{
                                                            value: true,
                                                            message:"Please select atlest one administrative !"
                                                        }
                                                    })}/><label for="">Add New Content</label>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>                                      
                                                <p> Each proposal must include:
                                                    <ol>
                                                        <li> Existing text from the current published Code, clearly identified by Rule, Subrule, Item number, etc.,</li>
                                                        {tabId && <li>
                                                            Proposed revisions indicated by legislative text (underline text to be added and strike-threugh any text to be deleted ("Track changes" format also acceptable). Please ensure existing text is from the current edition of the Code.
                                                        </li>}
                                                        <li>Please provide as much information as possible. A well-substantiated proposal will assist the committee in their review.</li> 
                                                    </ol>                                       
                                                </p>
                                                    <div>
                                                    <textarea rows="4" cols="50"
                                                        {...register("reviseAndNewCont", {
                                                            required: {
                                                                value: true,
                                                                message:"This field is required"    
                                                            }
                                                        })}
                                                    />
                                                    {errors.reviseAndNewCont && <div className="errorMessage">{errors.reviseAndNewCont.message}</div>}
                                                    </div>
                                                </td>
                                            </tr>
                                        </table></>}
                                    
                                        <br/>
                                        <input type="checkbox"  
                                                value="2-002 special requirements"
                                                {...register("administrative",
                                                {
                                                    required:{
                                                        value: true,
                                                        message:"Please select atlest one administrative !"
                                                    }
                                                })}/>
                                            <label for="">2-002 Special requirements</label>

                                        <br/>
                                        <input type="checkbox"  
                                                value="2-004 permit"
                                                {...register("administrative",
                                                {
                                                    required:{
                                                        value: true,
                                                        message:"Please select atlest one administrative !"
                                                    }
                                                })}/>
                                            <label for="">2-004 Permit</label>

                                            <br/>
                                            <input type="checkbox"  
                                                    value="2-006 application for inspection"
                                                    {...register("administrative",
                                                    {
                                                        required:{
                                                            value: true,
                                                            message:"Please select atlest one administrative !"
                                                        }
                                                    })}/>
                                                <label for="">2-006 Application for inspection</label>

                                                <br/>
                                            <input type="checkbox"  
                                                    value="2-008 fees"
                                                    {...register("administrative",
                                                    {
                                                        required:{
                                                            value: true,
                                                            message:"Please select atlest one administrative !"
                                                        }
                                                    })}/>
                                                <label for="">2-008 Fees</label>

                                                <br/>
                                            <input type="checkbox"  
                                                    value="2-010 posting of permit"
                                                    {...register("administrative",
                                                    {
                                                        required:{
                                                            value: true,
                                                            message:"Please select atlest one administrative !"
                                                        }
                                                    })}/>
                                                <label for="">2-010 Posting of permit</label>

                                            <br/>
                                            <input type="checkbox"  
                                                    value="2-012 Notification of inspection"
                                                    {...register("administrative",
                                                    {
                                                        required:{
                                                            value: true,
                                                            message:"Please select atlest one administrative !"
                                                        }
                                                    })}/>
                                                <label for="">2-012 Notification of inspection</label>


                                                <br/>
                                            <input type="checkbox"  
                                                    value="2-014 Plans and specifications"
                                                    {...register("administrative",
                                                    {
                                                        required:{
                                                            value: true,
                                                            message:"Please select atlest one administrative !"
                                                        }
                                                    })}/>
                                                <label for="">2-014 Plans and specifications</label>


                                                <br/>
                                            <input type="checkbox"  
                                                    value="2-016 Current-permits"
                                                    {...register("administrative",
                                                    {
                                                        required:{
                                                            value: true,
                                                            message:"Please select atlest one administrative !"
                                                        }
                                                    })}/>
                                                <label for="">2-016 Current-permits</label>


                                                <br/>
                                            <input type="checkbox"  
                                                    value="2-018 Reconnection"
                                                    {...register("administrative",
                                                    {
                                                        required:{
                                                            value: true,
                                                            message:"Please select atlest one administrative !"
                                                        }
                                                    })}/>
                                                <label for="">2-018 Reconnection</label>

                                                <br/>
                                            <input type="checkbox"  
                                                    value="2-020 Reinspection"
                                                    {...register("administrative",
                                                    {
                                                        required:{
                                                            value: true,
                                                            message:"Please select atlest one administrative !"
                                                        }
                                                    })}/>
                                                <label for="">2-020 Reinspection</label>

                                                <br/>
                                            <input type="checkbox"  
                                                    value="2-022 Renovation of existing installations"
                                                    {...register("administrative",
                                                    {
                                                        required:{
                                                            value: true,
                                                            message:"Please select atlest one administrative !"
                                                        }
                                                    })}/>
                                                <label for="">2-022 Renovation of existing installations</label>

                                                <br/>
                                            <input type="checkbox"  
                                                    value="2-024 Use of approved equipment"
                                                    {...register("administrative",
                                                    {
                                                        required:{
                                                            value: true,
                                                            message:"Please select atlest one administrative !"
                                                        }
                                                    })}/>
                                                <label for="">2-024 Use of approved equipment</label>

                                                <br/>
                                            <input type="checkbox"  
                                                    value="2-026 Powers of rejection"
                                                    {...register("administrative",
                                                    {
                                                        required:{
                                                            value: true,
                                                            message:"Please select atlest one administrative !"
                                                        }
                                                    })}/>
                                                <label for=""> 2-026 Powers of rejection</label>
                                                

                                                <br/>
                                            <input type="checkbox"  
                                                    value="2-028 Availability of work for inspection"
                                                    {...register("administrative",
                                                    {
                                                        required:{
                                                            value: true,
                                                            message:"Please select atlest one administrative !"
                                                        }
                                                    })}/>
                                                <label for="">2-028 Availability of work for inspection</label>

                                                <br/>
                                            <input type="checkbox"  
                                                    value="2-030 Deviation or postponement"
                                                    {...register("administrative",
                                                    {
                                                        required:{
                                                            value: true,
                                                            message:"Please select atlest one administrative !"
                                                        }
                                                    })}/>
                                                <label for="">2-030 Deviation or postponement</label>

                                                <br/>
                                            <input type="checkbox"  
                                                    value="2-032 Damage and interference"
                                                    {...register("administrative",
                                                    {
                                                        required:{
                                                            value: true,
                                                            message:"Please select atlest one administrative !"
                                                        }
                                                    })}/>
                                                <label for="">2-032 Damage and interference</label>
                                        <br/>
                                        {errors.administrative && <div className="errorMessage">{errors.administrative.message}</div>}
                            </div> 

                            <h2>Technical</h2>
                            <h3>General</h3>
                            <div className="general" style={{textAlign: "justify", marginLeft: "500px"}}>
                                <input type="checkbox"  
                                        value="2-100 Marking of equipment"
                                        {...register("general",
                                        {
                                            required:{
                                                value: true,
                                                message:"Please select atlest one General !"
                                            }
                                        })}/>
                                    <label for="">2-100 Marking of equipment</label>

                                    <br/>
                                    <input type="checkbox"  
                                        value="2-102 Warning and caution markings"
                                        {...register("general",
                                        {
                                            required:{
                                                value: true,
                                                message:"Please select atlest one General !"
                                            }
                                        })}/>
                                    <label for="">2-102 Warning and caution markings</label>

                                    <br/>
                                    <input type="checkbox"  
                                        value="2-104 Electrical equipment ratings"
                                        {...register("general",
                                        {
                                            required:{
                                                value: true,
                                                message:"Please select atlest one General !"
                                            }
                                        })}/>
                                    <label for="">2-104 Electrical equipment ratings</label>  

                                    <br/>
                                    <input type="checkbox"  
                                        value="2-106 Rebuilt equipment"
                                        {...register("general",
                                        {
                                            required:{
                                                value: true,
                                                message:"Please select atlest one General !"
                                            }
                                        })}/>
                                    <label for="">2-106 Rebuilt equipment</label>      

                                     <br/>
                                    <input type="checkbox"  
                                        value="2-108 Substitution"
                                        {...register("general",
                                        {
                                            required:{
                                                value: true,
                                                message:"Please select atlest one General !"
                                            }
                                        })}/>
                                    <label for="">2-108 Substitution</label>  


                                    <br/>
                                    <input type="checkbox"  
                                        value="2-110 Circuit voltage-to-ground - Dwelling units"
                                        {...register("general",
                                        {
                                            required:{
                                                value: true,
                                                message:"Please select atlest one General !"
                                            }
                                        })}/>
                                    <label for="">2-110 Circuit voltage-to-ground - Dwelling units</label>


                                    <br/>
                                    <input type="checkbox"  
                                        value="2-112 Quality of work"
                                        {...register("general",
                                        {
                                            required:{
                                                value: true,
                                                message:"Please select atlest one General !"
                                            }
                                        })}/>
                                    <label for="">2-112 Quality of work</label>        


                                    <br/>
                                    <input type="checkbox"  
                                        value="2-114 Material for anchoring to masonry and concrete"
                                        {...register("general",
                                        {
                                            required:{
                                                value: true,
                                                message:"Please select atlest one General !"
                                            }
                                        })}/>
                                    <label for="">2-114 Material for anchoring to masonry and concrete</label>  

                                    <br/>
                                    <input type="checkbox"  
                                        value="2-116 CorTosion protection for materials used in wiring"
                                        {...register("general",
                                        {
                                            required:{
                                                value: true,
                                                message:"Please select atlest one General !"
                                            }
                                        })}/>
                                    <label for="">2-116 CorTosion protection for materials used in wiring</label>    


                                    <br/>
                                    <input type="checkbox"  
                                        value="2-118 Soldering fluxes"
                                        {...register("general",
                                        {
                                            required:{
                                                value: true,
                                                message:"Please select atlest one General !"
                                            }
                                        })}/>
                                    <label for="">2-118 Soldering fluxes</label>   


                                    <br/>
                                    <input type="checkbox"  
                                        value="2-120 AWG sizes of conductors"
                                        {...register("general",
                                        {
                                            required:{
                                                value: true,
                                                message:"Please select atlest one General !"
                                            }
                                        })}/>
                                    <label for="">2-120 AWG sizes of conductors</label> 

                                    <br/>
                                    <input type="checkbox"  
                                        value="2-122 Installation of electrical equipment"
                                        {...register("general",
                                        {
                                            required:{
                                                value: true,
                                                message:"Please select atlest one General !"
                                            }
                                        })}/>
                                    <label for="">2-122 Installation of electrical equipment</label> 

                                    <br/>
                                    <input type="checkbox"  
                                        value="2-124 Installation of other than electrical equipment"
                                        {...register("general",
                                        {
                                            required:{
                                                value: true,
                                                message:"Please select atlest one General !"
                                            }
                                        })}/>
                                    <label for="">2-124 Installation of other than electrical equipment</label> 

                                    <br/>
                                    <input type="checkbox"  
                                        value="2-126 Use of thermal insulation"
                                        {...register("general",
                                        {
                                            required:{
                                                value: true,
                                                message:"Please select atlest one General !"
                                            }
                                        })}/>
                                    <label for="">2-126 Use of thermal insulation</label> 

                                    <br/>
                                    <input type="checkbox"  
                                        value="2-128 Fire spread"
                                        {...register("general",
                                        {
                                            required:{
                                                value: true,
                                                message:"Please select atlest one General !"
                                            }
                                        })}/>
                                    <label for="">2-128 Fire spread</label> 


                                    <br/>
                                    <input type="checkbox"  
                                        value="2-130 Flame spread requirements for electrical wiring and cables"
                                        {...register("general",
                                        {
                                            required:{
                                                value: true,
                                                message:"Please select atlest one General !"
                                            }
                                        })}/>
                                    <label for="">2-130 Flame spread requirements for electrical wiring and cables</label> 


                                    <br/>
                                    <input type="checkbox"  
                                        value="2-132 Flame spread requirements for totally enclosed non-metallic raceways"
                                        {...register("general",
                                        {
                                            required:{
                                                value: true,
                                                message:"Please select atlest one General !"
                                            }
                                        })}/>
                                    <label for="">2-132 Flame spread requirements for totally enclosed non-metallic raceways</label> 

                                    
                                    <br/>
                                    <input type="checkbox"  
                                        value="2-134 Seismic restraint requirements for electrical equipment"
                                        {...register("general",
                                        {
                                            required:{
                                                value: true,
                                                message:"Please select atlest one General !"
                                            }
                                        })}/>
                                    <label for="">2-134 Seismic restraint requirements for electrical equipment</label> 


                                    <br/>
                                    <input type="checkbox"  
                                        value="2-136 Sunlight resistance requirements"
                                        {...register("general",
                                        {
                                            required:{
                                                value: true,
                                                message:"Please select atlest one General !"
                                            }
                                        })}/>
                                    <label for="">2-136 Sunlight resistance requirements</label> 


                                    <br/>
                                    <input type="checkbox"  
                                        value="2-138 Insulation integrity"
                                        {...register("general",
                                        {
                                            required:{
                                                value: true,
                                                message:"Please select atlest one General !"
                                            }
                                        })}/>
                                    <label for="">2-138 Insulation integrity</label> 


                                    <br/>
                                    <input type="checkbox"  
                                        value="2-140 Use of Class A ground fault circuit interrupters"
                                        {...register("general",
                                        {
                                            required:{
                                                value: true,
                                                message:"Please select atlest one General !"
                                            }
                                        })}/>
                                    <label for="">2-140 Use of Class A ground fault circuit interrupters</label> 

                                <br/>
                                {errors.general && <div className="errorMessage">{errors.general.message}</div>}    
                            </div> 

                             <h3>Protection of persons and property</h3>
                            <div className="protection" style={{textAlign: "justify", marginLeft: "500px"}}>
                                <input type="checkbox"  
                                        value="2-200 General"
                                        {...register("protection",
                                        {
                                            required:{
                                                value: true,
                                                message:"Please select atlest one Protection of persons and property !"
                                            }
                                        })}/>
                                    <label for="">2-200 General</label> 

                                    <br/>
                                    <input type="checkbox"  
                                        value="2-202 Guarding of bare live parts"
                                        {...register("protection",
                                        {
                                            required:{
                                                value: true,
                                                message:"Please select atlest one Protection of persons and property !"
                                            }
                                        })}/>
                                    <label for="">2-202 Guarding of bare live parts</label> 
                            <br/>
                            {errors.protection && <div className="errorMessage">{errors.protection.message}</div>}
                            </div>

                            <h3>Maintenance and operation</h3>
                            <div className="protection" style={{textAlign: "justify", marginLeft: "500px"}}>
                                <input type="checkbox"  
                                        value="2-300 General requirements for maintenance and operation"
                                        {...register("maintenance",
                                        {
                                            required:{
                                                value: true,
                                                message:"Please select atlest one Maintenance and operation !"
                                            }
                                        })}/>
                                    <label for="">2-300 General requirements for maintenance and operation</label> 

                                    <br/>
                                    <input type="checkbox"  
                                        value="2-302 Maintenance in hazardous locations"
                                        {...register("maintenance",
                                        {
                                            required:{
                                                value: true,
                                                message:"Please select atlest one Maintenance and operation !"
                                            }
                                        })}/>
                                    <label for="">2-302 Maintenance in hazardous locations</label>

                                    <br/>
                                    <input type="checkbox"  
                                        value="2-304 Disconnection"
                                        {...register("maintenance",
                                        {
                                            required:{
                                                value: true,
                                                message:"Please select atlest one Maintenance and operation !"
                                            }
                                        })}/>
                                    <label for="">2-304 Disconnection</label>

                                    <br/>
                                    <input type="checkbox"  
                                        value="2-306 Shock and arc flash protection"
                                        {...register("maintenance",
                                        {
                                            required:{
                                                value: true,
                                                message:"Please select atlest one Maintenance and operation !"
                                            }
                                        })}/>
                                    <label for="">2-306 Shock and arc flash protection</label>

                                    <br/>
                                    <input type="checkbox"  
                                        value="2-306 Shock and arc flash protection"
                                        {...register("maintenance",
                                        {
                                            required:{
                                                value: true,
                                                message:"Please select atlest one Maintenance and operation !"
                                            }
                                        })}/>
                                    <label for="">2-306 Shock and arc flash protection</label>

                                    <br/>
                                    <input type="checkbox"  
                                        value="2-308 Working space around electrical equipment"
                                        {...register("maintenance",
                                        {
                                            required:{
                                                value: true,
                                                message:"Please select atlest one Maintenance and operation !"
                                            }
                                        })}/>
                                    <label for="">2-308 Working space around electrical equipment</label>


                                    <br/>
                                    <input type="checkbox"  
                                        value="2-310 Entrance to, and exit from, working space"
                                        {...register("maintenance",
                                        {
                                            required:{
                                                value: true,
                                                message:"Please select atlest one Maintenance and operation !"
                                            }
                                        })}/>
                                    <label for="">2-310 Entrance to, and exit from, working space</label>


                                    <br/>
                                    <input type="checkbox"  
                                        value="2-310 Entrance to, and exit from, working space"
                                        {...register("maintenance",
                                        {
                                            required:{
                                                value: true,
                                                message:"Please select atlest one Maintenance and operation !"
                                            }
                                        })}/>
                                    <label for="">2-310 Entrance to, and exit from, working space</label>

                                    <br/>
                                    <input type="checkbox"  
                                        value="2-312 Transformer working space"
                                        {...register("maintenance",
                                        {
                                            required:{
                                                value: true,
                                                message:"Please select atlest one Maintenance and operation !"
                                            }
                                        })}/>
                                    <label for="">2-312 Transformer working space</label>

                                    <br/>
                                    <input type="checkbox"  
                                        value="2-314 Accessibility for maintenance"
                                        {...register("maintenance",
                                        {
                                            required:{
                                                value: true,
                                                message:"Please select atlest one Maintenance and operation !"
                                            }
                                        })}/>
                                    <label for="">2-314 Accessibility for maintenance</label>


                                    <br/>
                                    <input type="checkbox"  
                                        value="2-316 Receptacles required for maintenance of equipment"
                                        {...register("maintenance",
                                        {
                                            required:{
                                                value: true,
                                                message:"Please select atlest one Maintenance and operation !"
                                            }
                                        })}/>
                                    <label for="">2-316 Receptacles required for maintenance of equipment</label>


                                    <br/>
                                    <input type="checkbox"  
                                        value="2-318 Receptacles required for mobile industrial or commercial structures"
                                        {...register("maintenance",
                                        {
                                            required:{
                                                value: true,
                                                message:"Please select atlest one Maintenance and operation !"
                                            }
                                        })}/>
                                    <label for="">2-318 Receptacles required for mobile industrial or commercial structures</label>

                                    <br/>
                                    <input type="checkbox"  
                                        value="2-320 Ilumination of equipment"
                                        {...register("maintenance",
                                        {
                                            required:{
                                                value: true,
                                                message:"Please select atlest one Maintenance and operation !"
                                            }
                                        })}/>
                                    <label for="">2-320 Ilumination of equipment</label>

                                    <br/>
                                    <input type="checkbox"  
                                        value="2-322 Flammable material near electrical equipment"
                                        {...register("maintenance",
                                        {
                                            required:{
                                                value: true,
                                                message:"Please select atlest one Maintenance and operation !"
                                            }
                                        })}/>
                                    <label for="">2-322 Flammable material near electrical equipment</label>


                                    <br/>
                                    <input type="checkbox"  
                                        value="2-324 Ventilation"
                                        {...register("maintenance",
                                        {
                                            required:{
                                                value: true,
                                                message:"Please select atlest one Maintenance and operation !"
                                            }
                                        })}/>
                                    <label for="">2-324 Ventilation</label>

                                    <br/>
                                    <input type="checkbox"  
                                        value="2-326 Drainage"
                                        {...register("maintenance",
                                        {
                                            required:{
                                                value: true,
                                                message:"Please select atlest one Maintenance and operation !"
                                            }
                                        })}/>
                                    <label for="">2-326 Drainage</label>


                                    <br/>
                                    <input type="checkbox"  
                                        value="2-328 Electrical equipment near combustible gas equipment"
                                        {...register("maintenance",
                                        {
                                            required:{
                                                value: true,
                                                message:"Please select atlest one Maintenance and operation !"
                                            }
                                        })}/>
                                    <label for="">2-328 Electrical equipment near combustible gas equipment</label>
                            <br/>
                            {errors.maintenance && <div className="errorMessage">{errors.maintenance.message}</div>}
                            </div>

                            <h3>Enclosures</h3>
                            <div className="protection" style={{textAlign: "justify", marginLeft: "500px"}}>
                                <input type="checkbox"  
                                        value="2-400 Enclosures, type designations, and use"
                                        {...register("enclosures",
                                        {
                                            required:{
                                                value: true,
                                                message:"Please select atlest one enclosures !"
                                            }
                                        })}/>
                                    <label for="">2-400 Enclosures, type designations, and use</label> 

                                    <br/>
                                    <input type="checkbox"  
                                        value="2-402 Marking of enclosures"
                                        {...register("enclosures",
                                        {
                                            required:{
                                                value: true,
                                                message:"Please select atlest one enclosures !"
                                            }
                                        })}/>
                                    <label for="">2-402 Marking of enclosures</label> 

                                    <br/>
                                    <input type="checkbox"  
                                        value="2-404 Marking of motors"
                                        {...register("enclosures",
                                        {
                                            required:{
                                                value: true,
                                                message:"Please select atlest one enclosures !"
                                            }
                                        })}/>
                                    <label for="">2-404 Marking of motors</label> 
                            <br/>
                            {errors.enclosures && <div className="errorMessage">{errors.enclosures.message}</div>}
                            </div>
                        </div>
                    </section>} 

{/* 5th section  */}
                    {formStep === 4 && <section>
                       <div className="reviewForm">
                            <div className="formReviewSec">
                                <h1>Primary reason for request</h1>
                                <button onClick={()=> setFormStep(0)}> Edit</button><br/>
                                {
                                    getAllFormData("primaryReason").map((val)=> (
                                            <>                                   
                                            <input type="checkbox" checked value={val}  disabled />
                                            <label for="">{val}</label><br/>
                                            {val === "other" && 
                                            <textarea rows="4" cols="50" value={ getAllFormData("otherVal") } disabled />
                                            }
                                            </>
                                    ))
                                }
                            </div>                       
                       </div>                                      
                       <div className="reviewForm">
                            <div className="formReviewSec">
                                <h1>Pollicy Priorities</h1>
                                <button onClick={()=> setFormStep(1)}> Edit</button><br/>
                                {
                                    getAllFormData("policyPriorities").map((val)=> (
                                            <>                                   
                                            <input type="checkbox" checked value={val}  disabled />
                                            <label for="">{val}</label><br/>
                                            </>
                                    ))
                                }
                            </div>                       
                       </div>

                       <div className="reviewForm">
                            <div className="formReviewSec">
                                <h1>Impact Assessment</h1>
                                <button onClick={()=> setFormStep(2)}> Edit</button><br/>                                
                                    <label>Will there be impact on enforcement?*</label><br/>
                                    <select disabled >
                                        <option value={getAllFormData("impactEnforcement")}> {getAllFormData("impactEnforcement")}</option>
                                    </select><br/>
                                    {getAllFormData("impactEnforcement") === "Yes" && <textarea rows="4" cols="50" value={ getAllFormData("impactEnforcementYes") } disabled />}
                                    <br/>
                                    <label>Will there be measureable benefits?*</label><br/>
                                    <select disabled >
                                        <option value={getAllFormData("measureablebenefits")}> {getAllFormData("measureablebenefits")}</option>
                                    </select><br/> 
                                    <br/>
                                    <label>Will there be an impact on other requlations, codes or standards?*</label><br/>
                                    <select disabled >
                                        <option value={getAllFormData("impactStandards")}> {getAllFormData("impactStandards")}</option>
                                    </select><br/> 
                                    <br/>
                                    <label>Will there be impact on costs?*</label><br/>
                                    <select disabled >
                                        <option value={getAllFormData("impactCosts")}> {getAllFormData("impactCosts")}</option>
                                    </select><br/> 
                                    <p>Additional impact assessment materials Optional</p>
                                     <p><img src="https://cdn.iconscout.com/icon/free/png-256/docx-file-1907423-1617218.png" style={{width:"50px"}} /> <span>{photoPreview} </span></p>  
                            </div>                        
                       </div>
                    </section>} 

{/* 6th section  */}
                    {formStep === 5 && <section>
                        <p>NOTICE: By submitting this proposal (the "Proposal") to CSA Group, you assign all right, title and interest in the copyright to the
                            Proposal to CSA Group, and you waive all moral rights associated with the Proposal. By submitting this Proposal to CSA Group, you
                            represent and warrant that the Proposal does not contain any content that you do not have a right to transmit and assign under any law
                            or under contractual or fiduciary relationships (such as inside information, proprietary and confidential information learned or disclosed
                            as part of employment relationships or under nondisclosure agreements); or any content that infringes any patent, trademark, trade
                            secret, copyright or other proprietary rights) of any party, and acknowledge that CSA group is relying on this representation and
                            warranty. </p>
                        <p>Required*</p>
                        <div className="formControl">
                            <input type="checkbox"  
                                value="i agree"
                                {...register("iagree",
                                {
                                    required:{
                                        value: true,
                                        message:"This field is required !"
                                    }
                                })}/>
                            <label for="">Improve safety</label>
                            {errors.iagree && <div className="errorMessage">{errors.iagree.message}</div>}
                        </div>    

                    </section>} 
                </div>
                <br/><br/>
                <div className='csaFormFooter'>
                    <div className='csaButton'>
                        {formStep < formTitle.length - 1 &&
                           <button type="button" style={{marginRight:"10px"}} className='csaFromPrevBtn' disabled={ formStep === 0 } onClick={()=>setFormStep((current)=> current - 1)}>PREVIOUS</button>
                        }                         
                        {formStep <= 3 &&
                           <a href="#" className='csaDraftBtn'>Save Draft</a>
                        }                        
                        {formStep < formTitle.length - 1 &&
                            <button type="button" style={{marginLeft:"10px"}} className='csaFormNextBtn' disabled={formStep === formTitle.length - 1 || !isValid} onClick={()=>setFormStep((current)=> current + 1)} >NEXT</button>
                        }
                        {formStep === formTitle.length - 1 &&
                            <button type="submit" style={{marginLeft:"10px"}} className='csaFormNextBtn' disabled={!isValid} >Submit</button>
                        }
                    </div>
                </div>
            </form> 
{/* 7th section  */}
            {formStep === 6 && <section>
                      <div>
                        <h2>You successfully submitted!</h2>
                        <p> Your proposal request for CSA Group has been sent.</p>
                        <p>Your tracking ID is 535824. Please keep a record of your tracking ID. A confirmation recepit has been sent to your email.
                        What happens next?</p>
                        <p>CSA Project Managers will contact you via this system (Cc to your email). Please check upcoming messages in "My Messages"</p>
                        <p>Any questions or issues? Please contact <a>community_admin@csagroup.org</a></p>
                        <button type="button" style={{marginLeft:"10px"}} className='csaFormNextBtn'onClick={()=>setFormStep(0)} >BACK TO HOME</button>
                      </div>
                    </section>} 
        </div>      
    </div>
  )
}

export default Csaform
