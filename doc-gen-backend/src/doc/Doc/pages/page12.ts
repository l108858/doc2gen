import { Paragraph, Footer, TextRun, HeadingLevel, PageNumber } from "docx";


const page12 = {
    footers: {
        default: new Footer({
            children: [
                new Paragraph({
                    children: [new TextRun({ children: ["Proprietary & Confidential - Eli Lilly & Company		            Page ", PageNumber.CURRENT, " of ", PageNumber.TOTAL_PAGES] })],
                    alignment: "center"
                })
            ]
        })
    },
    children: [
        new Paragraph({
            children: [new TextRun({ text: "8  Appendix",size:28,bold:true,color:"000000" })],
            heading: HeadingLevel.HEADING_1,
            spacing: {
                after: 200
            }
        }),
        new Paragraph({
            children: [

                new TextRun({ text: "-  Full Tables of results (as opposed to concise tables in body of report)",size:24 }),
                new TextRun({ text: "-  Toxicologist opinion", break: 1 ,size:24})
            ]
        })
    ]
}



export default page12;