import { Paragraph, Footer, TextRun, PageNumber, HeadingLevel } from "docx";
import table3 from "../Tables/table3Page6";

const page6 = {
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
            children: [new TextRun({ text: "Table 3. Process Contact Materials Assessed from DP Manufacturing ", bold: true ,size:24,color:"000000"})],
            spacing: {
                after: 200
            },
            heading:HeadingLevel.HEADING_3
        }),
        table3,
        new Paragraph({
            children: [new TextRun({ text: "[Material List Reference(s) #] Reference Title", break: 1, highlight: "yellow" })],
            spacing: {
                before: 10000
            }
        })

    ]
}

export default page6;