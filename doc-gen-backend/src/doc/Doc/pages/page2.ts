import { Paragraph, TableOfContents, TextRun } from "docx";
const page2Temp = {

    children:[
                new Paragraph({text:"Table of Content"}),
                new TableOfContents("Table of Content", {
                    hyperlink: true,
                    headingStyleRange: "1-2",
                }),
                new Paragraph({children:[new TextRun({text:"List of Tables",bold:true})],spacing:{before:200}}),
                new TableOfContents("list of tables",{
                    hyperlink:true,
                    headingStyleRange:"3-5"
                })
    ]
}

export default page2Temp;