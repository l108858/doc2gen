import { Paragraph, Footer, TextRun, HeadingLevel, Math, MathRun, MathFraction, PageNumber } from "docx";
import table4 from "../Tables/table4Page7";



const page7 = {
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
            children: [new TextRun({ text: "3  Analytical Evaluation Threshold for _drug_product_ Drug Product ",size:28,bold:true,color:"000000" })],
            heading: HeadingLevel.HEADING_1
        }),
        new Paragraph({
            children: [new TextRun({ text: "Table 4. Analytical Evaluation Threshold (AET) Parameters", bold: true ,size:24,color:"000000"})],
            spacing: {
                before: 400,
                after: 200
            },
            heading:HeadingLevel.HEADING_3
        }),
        table4,


        new Paragraph({
            children: [
                new Math({
                    children: [
                        new MathRun("DP Dose (mL)= ")
                    ]
                })
            ],
            spacing: {
                before: 600,
                after: 500
            }
        }),

        new Paragraph({
            children: [
                new Math({
                    children: [
                        new MathRun("AET"),
                        new MathFraction({
                            numerator: [new MathRun("μg")],
                            denominator: [new MathRun("mL")],
                        }),
                        new MathRun("=")
                    ]
                })
            ]
        }),


        new Paragraph({
            children: [new TextRun({ text: "See Appendix for AET detailed description. ",size:24 }),
            ],
            spacing: {
                before: 300
            }
        })

    ]
}


export default page7;