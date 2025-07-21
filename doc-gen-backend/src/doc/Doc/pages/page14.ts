import { Paragraph, TextRun } from "docx";

const page14 = {

    children: [
        new Paragraph({
            children: [new TextRun({ text: "An SCT of _SCT_ µg/dose is appropriate to protect for potential mutagenicity, target organ toxicity, and sensitization based on guidance in ICH M7 Assessment and Control of DNA Reactive (Mutagenic) Impurities in Pharmaceuticals to Limit Potential Carcinogenic Risk, Cramer structural classification thresholds, and a PQRI publication on parenteral and ophthalmic drug products which includes Cramer structural classification thresholds and other considerations, respectively. ,    The maximum dose is _max_dose_ mg.1 The DP concentration is _dp_concentration_ mg/mL. The maximum dose is outlined in the equation below:  ", size: 24 })],
        }),
        new Paragraph({
            children:[new TextRun({text:"__________________________________"}),],
            spacing:{
                before:10000,
            }
        }),
        new Paragraph({
            children: [
                new TextRun({ text: "8 ICH M7 (R1) Assessment and Control of DNA Reactive (Mutagenic) Impurities in Pharmaceuticals to Limit Potential Carcinogenic Risk, Step 4 dated 31March2017. https://database.ich.org/sites/default/files/M7_R1_Guideline.pdf;  ", break: 1, size: 18 }),
                new TextRun({ text: "9 Paskiet D et al. The Product Quality Research Institute (PQRI) Leachables Extractables Working Group Initiatives for Parenteral and and Ophthalmic Drug Product (PODP), PDA J Pharm Sci and Tech. 67: 430-447. doi:10.5731/pdajpst.2013.00936.   ", break: 1, size: 18 }),
            ],
            alignment: "left",
        })
    ]
}

export default page14