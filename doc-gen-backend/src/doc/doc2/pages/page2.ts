import { Paragraph, Footer, TextRun, PageNumber, Header, BorderStyle } from "docx";
import { constants } from "../static/const";
const page2 = {
    properties: {

        page: {
            margin: {
                top: 720,
                bottom: 720,
                left: 720,
                right: 720,

            }
        },
    },



    children: [
        new Paragraph({
            children:[
                new TextRun({text:"Reviews and Approvals",size:20,underline:{type:"single",color:"#000000"}})
            ],
            spacing: {
                before: 300,
                after:400
            }
        }),

        new Paragraph({
            children:[new TextRun({text:"Author:",bold:true,size:24})]
        }),
        new Paragraph({
            children:[new TextRun({text:"I confirm that my review complete signature within EDMS (Electronic Document Management System) confirms that the information in this technical report is clearly written, accurate, and accurately referenced.   "})],
            spacing:{after:200}
        }),
        new Paragraph({
            children:[new TextRun({text:`${constants.documentAuthor}, ${constants.roleTitle}, ${constants.department} `,italics:true})],
            spacing:{after:200}
        }),
        new Paragraph({
            border:{
                bottom:{
                    color:'000000',
                    space:1,
                    size:6,
                    style:BorderStyle.SINGLE,
                }
            },
            spacing:{after:300}
        }),


        new Paragraph({
            children:[new TextRun({text:"Technical Review:",bold:true,size:24})]
        }),
        new Paragraph({
            children:[new TextRun({text:"I confirm that my review complete signature within EDMS confirms that sufficient information and detail have been reported in this technical report to ensure the document is scientifically sound and that the appropriate conclusions have been included.     "})],
            spacing:{after:200}
        }),
        new Paragraph({
            children:[new TextRun({text:`${constants.documentTechnicalReviewer}, ${constants.roleTitle}, ${constants.department} `,italics:true})],
            spacing:{after:200}
        }),
        new Paragraph({
            border:{
                bottom:{
                    color:'000000',
                    space:1,
                    size:6,
                    style:BorderStyle.SINGLE,
                }
            },
            spacing:{after:300}
        }),

        new Paragraph({
            children:[new TextRun({text:"Quality Review:",bold:true,size:24})]
        }),
        new Paragraph({
            children:[new TextRun({text:"I confirm that my review complete signature within EDMS confirms that I understand the scope and purpose of the analysis, and agree that it is complete, accurate, and correct. I agree that the conclusions, if any, are correct. I agree that the work produced in this document is consistent with the requirements set forth in the applicable standards, procedures and policies.       "})],
            spacing:{after:200}
        }),
        new Paragraph({
            children:[new TextRun({text:`${constants.documentQualityReviewer}, ${constants.roleTitle}, ${constants.department} `,italics:true})],
            spacing:{after:200}
        }),
        new Paragraph({
            border:{
                bottom:{
                    color:'000000',
                    space:1,
                    size:6,
                    style:BorderStyle.SINGLE,
                }
            },
            spacing:{after:300}
        }),
        new Paragraph({
            children:[new TextRun({text:"Data Integrity Review: ",bold:true,size:24})]
        }),
        new Paragraph({
            children:[new TextRun({text:"I confirm that my review complete signature within EDMS confirms that all data used for manual calculations performed in this technical report are clearly identified and can be traced to an appropriate source, and that all manual calculations performed in this technical report are accurate.     "})],
            spacing:{after:200}
        }),
        new Paragraph({
            children:[new TextRun({text:`${constants.documentDIR}, ${constants.roleTitle}, ${constants.department} `,italics:true})],
            spacing:{after:200}
        }),
        new Paragraph({
            border:{
                bottom:{
                    color:'000000',
                    space:1,
                    size:6,
                    style:BorderStyle.SINGLE,
                }
            },
            spacing:{after:300}
        }),

        new Paragraph({
            children:[new TextRun({text:"Technical Approval:  ",bold:true,size:24})]
        }),
        new Paragraph({
            children:[new TextRun({text:"I confirm that my electronic approval signature within EDMS confirms that I understand the purpose and scope of this document.  I confirm that qualified reviewer(s) have reviewed the document for accuracy.   I support the report conclusions and understand the responsibilities for implementation and agree with the strategy contained in the document.  "})],
            spacing:{after:200}
        }),
        new Paragraph({
            children:[new TextRun({text:`${constants.documentTechinalApprover}, ${constants.roleTitle}, ${constants.department}`,italics:true})],
            spacing:{after:200}
        }),
        new Paragraph({
            border:{
                bottom:{
                    color:'000000',
                    space:1,
                    size:6,
                    style:BorderStyle.SINGLE,
                }
            },
            spacing:{after:300}
        }),
        new Paragraph({
            children:[new TextRun({text:"Quality Assurance Approval: ",bold:true,size:24})]
        }),
        new Paragraph({
            children:[new TextRun({text:"I confirm that my electronic approval signature within EDMS confirms that this document has been reviewed by the appropriate person(s) and is in compliance with the appropriate Global Quality Standards and compendial expectations.    "})],
            spacing:{after:200}
        }),
        new Paragraph({
            children:[new TextRun({text:`${constants.documentQaApprover}, ${constants.roleTitle}, ${constants.department}`,italics:true})],
            spacing:{after:200}
        }),
        new Paragraph({
            border:{
                bottom:{
                    color:'000000',
                    space:1,
                    size:6,
                    style:BorderStyle.SINGLE,
                }
            },
            spacing:{after:300}
        }),
        

    ],
}


export default page2;