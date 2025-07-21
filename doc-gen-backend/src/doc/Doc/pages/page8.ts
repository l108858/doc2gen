import { Paragraph, Footer, TextRun, HeadingLevel, PageNumber } from "docx";
import table5 from "../Tables/table5Page8";

const page8 = {
    footers: {
        default: new Footer({
            children: [
                new Paragraph({
                    children: [new TextRun({ children: [" Proprietary & Confidential - Eli Lilly & Company		            Page ", PageNumber.CURRENT, " of ", PageNumber.TOTAL_PAGES] })],
                    alignment: "center"
                })
            ]
        })
    },
    children: [
        new Paragraph({
            children: [new TextRun({ text: "4  Extractables Studies", bold: true,color:"000000",size:28 })],
            heading: HeadingLevel.HEADING_1
        }),
        new Paragraph({
            children: [
                new TextRun({ text: "4.1  Extractables Study Description", break: 1, bold: true,size:24,italics:true,color:"000000" }),
            ],
            spacing: {
                before: 200
            },
            heading:HeadingLevel.HEADING_2
        }),
        new Paragraph({
            children: [
                new TextRun({ text: "An extractables study was performed to obtain an extractables profile (identity and estimated quantity) under anticipated “worst case” use conditions (see table below).",size:24 })
            ],
            spacing: {
                before: 400
            }
        }),
        new Paragraph({
            children: [
                new TextRun({ text: "Table 5. Extractable Data Reference(s)", size: 24, bold: true,color:"000000" })
            ],
            spacing: {
                after: 200,
                before: 400
            },
            heading:HeadingLevel.HEADING_3
        }),
        table5
    ]
}

export default page8;