import { HeadingLevel, Paragraph, TextRun } from "docx";
import  { constants } from "../static/const";

export const page4 = {

    children:[

        new Paragraph({
            children:[
                new TextRun({text:"Executive Summary",size:28,bold:true,underline:{type:"single"}})
            ],
            heading:HeadingLevel.HEADING_1,
            spacing:{after:200}
        }),

        new Paragraph({
            children:[
                new TextRun({text:`A quality and technical risk assessment has been completed for all process contact material used in the manufacturing of ${constants.molecule} ${constants.drugSubstanceOrDrugProduct} manufactured in the ${constants.site} facility.  These assessments have been completed in accordance with Lilly LQP-230-8.   This paper includes an assessment of all process contact materials associated with the manufacture of ${constants.molecule} ${constants.drugSubstanceOrDrugProduct} in ${constants.site} to determine the risk rating resulting from the presence of extractables as potential leachables from polymeric/elastomeric components.  Materials of construction and associated vendor documentation for each process contact consumable were reviewed as part of the material acquisition/qualification.  For materials in scope of extractables and leachables (E&L) assessment, Lilly confirms biocompatibility is established (e.g., Class VI, Pharmaceutical grade per USP, ISO-10993, or equivalent) by supplier certification or adequate study data is documented to justify acceptability.  For filter components, a Filter Flush Assessment for representative process states is also completed.`,size:20})
            ],
            spacing:{after:200}
        }),
        new Paragraph({
            children:[
                new TextRun({text:constants.textForDrugSubstance,italics:true,})
            ]
        }),
        new Paragraph({
            children:[
                new TextRun({text:`Where the Extractables as Potential Leachables risk (or E&L risk) rating level for a material post-final purification (i.e., TFF or UFDF) was determined to be Medium or High, a human health risk assessment (HHRA) is performed by Lilly of the extractables data to evaluate toxicological risk associated with potential leachables in the ${constants.drugProduct}.  The HHRA, where applicable, is documented in a separate, molecule-specific report.  Where a leachables study is required (such as for High E&L risk materials ), the associated data and toxicological HHRA are documented in a separate, molecule- and material-specific report.  Final ${constants.durgSubstance} sterilizing filters are treated as High risk for the purposes of assessment.  The human health risk assessments determined that all potential leachables have margins of safety  and are not of toxicological concern, therefore there is no impact to the patient use of ${constants.brand} (${constants.molecule}) drug substance manufactured with the below materials.`})
            ],
            indent:{
                left:720
            },
            spacing:{
                after:200
            }
        }),
        new Paragraph({
            children:[
                new TextRun({text:constants.textForDrugProduct,italics:true,})
            ]
        }),
        new Paragraph({
            children:[
                new TextRun({text:`Where the Extractables as Potential Leachables risk (or E&L risk) rating for a material was determined to be Medium or High, a human health risk assessment (HHRA) is performed by Lilly of the extractables data to evaluate toxicological risk associated with potential leachables in the ${constants.drugProduct}.  The HHRA, where applicable, is documented in a separate, molecule-specific report.  Where a leachables study is required (such as for High E&L risk materials), the associated data and toxicological HHRA are documented in a separate, molecule- and material-specific report.  Final ${constants.drugProduct} sterilizing filters are treated as High risk for the purposes of assessment. The human health risk assessments determined that all potential leachables have margins of safety  and are not of toxicological concern, therefore there is no impact to the patient use of ${constants.brand} ([${constants.molecule}]) drug substance manufactured with the below materials.`})
            ],
            indent:{
                left:720
            },
            spacing:{
                after:200
            }
        }),

        new Paragraph({
            children:[
                new TextRun({
                    text:`This paper summarizes the E&L risk assessment rating levels for all process contact materials and affirms the risks associated with use to support the manufacture of ${constants.brand} (${constants.molecule}) ${constants.drugSubstanceOrDrugProduct} in ${constants.building} ${constants.site} manufacturing are appropriately controlled.`
                })
            ],
            spacing:{after:400}
        }),

        new Paragraph({
            children:[
                new TextRun({text:"E&L Risk Assessment Scope ",bold:true,underline:{type:"single"}})
            ],
            heading:HeadingLevel.HEADING_1,
            spacing:{after:200}
        }),
        new Paragraph({
            children:[
                new TextRun({text:`E&L Risk Assessments are completed for all process contact materials used within the ${constants.site} manufacturing process.  Process equipment includes stainless steel vessels, mixers, plunger insertion equipment, stir bars, valve diaphragms and gaskets, etc.  The remaining process contact materials include various single-use consumable items.   Consumables which are identified as potential GMP consumables include consumables which directly or indirectly contact the product.   These include materials such as those used for buffer or media preparation, ${constants.drugSubstanceOrDrugProduct} formulation, and filling, and they are further assessed in accordance with local procedure for new material acquisition/ qualification for ${constants.site} manufacturing.`})
            ],
            spacing:{after:600}
        }),
        new Paragraph({text:"___________________________"}),
        new Paragraph({
            children:[
                new TextRun({ text:"LQP-230-8, “Assessment and Qualification of Process Contact Materials in Drug Substance and Drug Product Manufacturing” (v1.0)"})
            ]
        })
    ]
}