import { HeadingLevel, Paragraph, TextRun } from "docx";
import table4 from "../tables/table4";
import  { constants } from "../static/const";

const page10 = {

    children:[

        new Paragraph({
            children:[
                new TextRun({text:"Revision History",size:28,bold:true})
            ],
            spacing:{after:200},
            heading:HeadingLevel.HEADING_1
        }),
        table4,
        new Paragraph({
            children:[
                new TextRun({text:"References for Extractable studies",bold:true,size:20})
            ],
            heading:HeadingLevel.HEADING_2,
            spacing:{after:200,before:500}
        }),
        new Paragraph({
            children:[
                new TextRun({text:`${constants.pullFromARAT}`,size:20})
            ],
            spacing:{after:200}
        }),
        new Paragraph({
            children:[
                new TextRun({text:"References for Leachables studies",bold:true,size:20})
            ],
            heading:HeadingLevel.HEADING_2,
            spacing:{after:200}
        }),
        new Paragraph({
            children:[
                new TextRun({text:constants.allowInsertOfMaterial,size:20})
            ],
            spacing:{after:200}
        }),

    ]
}

export default page10;