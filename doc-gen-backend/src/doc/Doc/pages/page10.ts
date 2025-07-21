
import { Paragraph, Footer, TextRun, HeadingLevel, PageNumber } from "docx";
import table9 from "../Tables/table9Page10";
import table10 from "../Tables/table10Page10";

const page10 = {
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
            children: [new TextRun({ text: "6  Potential Elemental Impurities ", bold: true,size:28,color:"000000" })],
            heading: HeadingLevel.HEADING_1,
            spacing: {
                after: 200
            }
        }),
        new Paragraph({
            children: [new TextRun({ text: "6.1	Elemental Impurities as Potential Leachables ", bold: true,italics:true,color:"000000" })],
            spacing: {
                after: 300
            },
            heading:HeadingLevel.HEADING_2
        }),
        new Paragraph({
            children: [new TextRun({ text: "Table 9: Potential Leachables >AET for the _drug_product_ Drug Product[reference]", bold: true, size: 24,color:"000000" })],
            spacing: {
                after: 200
            },
             heading:HeadingLevel.HEADING_3
        }),
        table9,
        new Paragraph({
            children: [new TextRun({ text: "* *Potential Leachables are calculated by multiplying the Maximum reported extractables concentration (µg/cm2) by the vessel surface area (_vessel_surface_area cm2) and then diving by the minimum batch size (min_batch_size mL). " })],
            spacing: {
                before: 200,
                after: 200
            }
        }),
        new Paragraph({
            children: [new TextRun({ text: "6.2	Cumulative – Elemental Impurities as Potential Leachables ", bold: true,italics:true,color:"000000" })],
            spacing: {
                after: 300
            },
            heading:HeadingLevel.HEADING_2
        }),
        new Paragraph({
            children: [new TextRun({ text: "Table 10: Potential Leachables >AET for the _drug_product_ Drug Product[reference]", bold: true,color:"000000" })],
            spacing: {
                before: 200,
                after: 200
            },
             heading:HeadingLevel.HEADING_3
        }),
        table10,
        new Paragraph({
            children: [
                new TextRun({ text: "* *Potential Leachables are calculated by multiplying the Maximum reported extractables concentration (µg/cm2) by the vessel surface area (_vessel_surface_area cm2) and then diving by the minimum batch size (min_batch_size mL). " })
            ],
            spacing: {
                before: 200,
                after: 400
            }
        }),
    ]
}

export default page10;