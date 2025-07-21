import { HeadingLevel, Paragraph, TableOfContents, TextRun } from "docx";
const page3 = {

    children:[
                new Paragraph({
                    children:[new TextRun({text:"Table of Content",size:28,bold:true})],
                    heading:HeadingLevel.HEADING_1
                },),
                new TableOfContents("Table of Content", {
                    hyperlink: true,
                    headingStyleRange: "1-2",
                }),
    ]
}

export default page3;