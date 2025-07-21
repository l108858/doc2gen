import { Paragraph, Footer, TextRun, HeadingLevel, PageNumber } from "docx";


const page11 = {
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
            children: [new TextRun({ text: "7  Human Health Assessment Conclusion",bold:true,size:28,color:"000000" })],
            heading: HeadingLevel.HEADING_1,
            spacing: {
                after: 400
            }

        }),
        new Paragraph({
            children: [
                new TextRun({ text: "Option 1: All compounds below AET.", italics: true, size: 24 }),
                new TextRun({ text: "As shown in x all the potential leachables from the single-use components with projected exposure concentrations  less than the AET and all elemental impurities were determined to have a high margin of safety greater than one. Therefore, none of the extractables were present at concentrations of toxicological concern. Based on the assessment of extractables as potential leachables in drug product, leachables studies for the single use components in the DS and DP manufacturing processes are not required to demonstrate safety.", break: 1, size: 24 }),
            ],
            spacing: {
                after: 200
            }
        }),
        new Paragraph({
            children: [
                new TextRun({ text: "Option 2: Some compounds above AET with MOS>1.", italics: true, break: 1, size: 24 }),
                new TextRun({ text: "There were several potential leachables from the single-use components with projected exposure concentrations  greater than the AET with margins of safety greater than 1; and all elemental impurities were determined to have a high margin of safety greater than one  Therefore, the extractables were not present at concentrations of toxicological concern. Based on the assessment of extractables as potential leachables in drug product, further assessment of the single use components in the DS and DP manufacturing processes are required to demonstrate safety", break: 1, size: 24 }),
            ],
            spacing: {
                after: 200
            }
        }),
        new Paragraph({
            children: [
                new TextRun({ text: "Option 3: Some compounds above AET without MOS>1.", italics: true, break: 1, size: 24 }),
                new TextRun({ text: "There were several potential leachables from the single-use components with projected exposure concentrations  greater than the AET with margins of safety less than one.  Therefore, the extractables were present at concentrations of toxicological concern. Based on the assessment of extractables as potential leachables in drug product, further assessment of the single use components in the DS and DP manufacturing processes are required to demonstrate safety.", break: 1, size: 24 }),

            ]
        }),
    ]
}



export default page11;