import { HeadingLevel, Paragraph, TextRun } from "docx"
import table3 from "../tables/table3"

const page9 = {

    children:[

        new Paragraph({
            children:[
                new TextRun({text:'Summarized PCM E&L Risk Assessment Results ',bold:true,size:28,underline:{type:"single"}})
            ],
            spacing:{after:300},
            heading:HeadingLevel.HEADING_1
        }),
        table3,
        new Paragraph({
            children:[
                new TextRun({text:"{ generate additional rows based on number of items applicable}"})
            ]
        })        
    ]


}

export default page9